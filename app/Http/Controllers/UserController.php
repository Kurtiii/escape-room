<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'class' => 'required|integer|in:11,12',
        ]);

        // get 10 unique random questions (11 class => only 11 class questions, 12 class => all questions)
        if ($request['class'] == 11) {
            $questions = Question::where('class', 11)->inRandomOrder()->take(10)->get();
        } else {
            // For class 12, we can take questions from both classes
            $questions = Question::inRandomOrder()->take(10)->get();
        }

        $remaining_questions = $questions->pluck('id')->implode(',');

        $user = User::create([
            'name' => $request['name'],
            'class' => $request['class'],
            'quiz_start_time' => now(),
            'remaining_questions' => $remaining_questions,
        ]);

        auth()->login($user);

        // redirect to the question page with the first question
        return redirect()->route('question', ['question' => $questions->first()]);
    }
}
