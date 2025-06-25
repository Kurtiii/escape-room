<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Show the question page.
     */
    public function showQuestion(Request $request, Question $question)
    {
        $remaining_questions = auth()->user()->remaining_questions;
        $remaining_questions = explode(',', $remaining_questions);
        if (!in_array($question->id, $remaining_questions)) {
            return redirect()->route('question', ['question' => Question::find($remaining_questions[0])]);
        }

        // get layout
        $layout_path = public_path('questions/' . $question->id . '/layout.html');
        if (!file_exists($layout_path)) {
            abort(404, 'Layout file not found for question ' . $question->id);
        }
        $layout = file_get_contents($layout_path);

        // get validator
        $validator_path = public_path('questions/' . $question->id . '/validator.js');
        if (!file_exists($validator_path)) {
            abort(404, 'Validator file not found for question ' . $question->id);
        }
        $validator = file_get_contents($validator_path);

        return view('question', [
            'question' => $question,
            'layout' => $layout,
            'validator' => $validator,
            'remaining_questions' => $remaining_questions
            ]);
    }

    /**
     * Complete the question and redirect to the next one.
     */
    public function completeQuestion(Request $request)
    {
        $question = Question::find($request->question);
        if (!$question) {
            abort(404);
        }

        $user = auth()->user();
        $remaining_questions = explode(',', $user->remaining_questions);


        if(!isset($request['no_sequence'])){
            switch(11 - count($remaining_questions)) {
                case 1:
                    return view('sequences.1', [
                        'question' => $question,
                        'remaining_questions' => $remaining_questions
                    ]);
                    break;
                case 2:
                    return view('sequences.2', [
                        'question' => $question,
                        'remaining_questions' => $remaining_questions
                    ]);
                    break;
                case 4:
                    return view('sequences.4', [
                        'question' => $question,
                        'remaining_questions' => $remaining_questions
                    ]);
                    break;
                case 6:
                    return view('sequences.6', [
                        'question' => $question,
                        'remaining_questions' => $remaining_questions
                    ]);
                    break;
                case 9:
                    return view('sequences.9', [
                        'question' => $question,
                        'remaining_questions' => $remaining_questions
                    ]);
                    break;
            }
        }


        // Remove the current question from the remaining questions
        unset($remaining_questions[array_search($question->id, $remaining_questions)]);

        // Update the user's remaining questions
        $user->remaining_questions = implode(',', $remaining_questions);
        $user->save();

        $remaining_questions = explode(',', $user->remaining_questions);

        // Redirect to the next question or finish if no more questions
        if (count($remaining_questions) > 0 && $remaining_questions[0] != '') {
            print_r($remaining_questions);
            return redirect()->route('question', ['question' => Question::find($remaining_questions[0])]);
        } else {
            $user->remaining_questions = null;
            if(!$user->seconds_needed){
                $user->quiz_end_time = now();
                $start_time = Carbon::parse($user->quiz_start_time);
                $user->seconds_needed = round($start_time->diffInSeconds($user->quiz_end_time), 0);
                $user->save();
            }

            return view('outro');
        }
    }

    /**
     * Show the leaderboard.
     */
    public function leaderboard(){
        $users = \App\Models\User::whereNotNull('seconds_needed')
            ->orderBy('seconds_needed', 'asc')
            ->get();

        return view('leaderboard', [
            'users' => $users
        ]);
    }
}
