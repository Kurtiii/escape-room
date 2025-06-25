<?php

use App\Http\Controllers\GameController;
use App\Models\Question;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::get('/', function () {
    return view('intro');
})->name('intro');

Route::get('/onboarding', function () {
    return view('onboarding');
})->name('login');

Route::get('/leaderboard', [GameController::class, 'leaderboard'])->name('leaderboard');

Route::get('/question/{question}', [\App\Http\Controllers\GameController::class, 'showQuestion'])
    ->name('question')
    ->middleware('auth');

Route::group(['prefix'=>'api','as'=>'api.'], function(){
    Route::post('register', [\App\Http\Controllers\UserController::class, 'create'])->name('register');

    Route::get('question_complete', [\App\Http\Controllers\GameController::class, 'completeQuestion'])
        ->name('question_complete')
        ->middleware('auth');
});


Route::get('/debug/question/{question}', function (Question $question) {
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
        'remaining_questions' => [1, 2, 3, 4, 5] // Example remaining questions for debugging
    ]);
});

Route::get('/debug/outro', function () {
    return view('outro');
});

Route::get('/debug/sequence', function (Request $request) {
    $id = $request->query('id', 1); // Default to 1 if not provided
    return view('sequences.' . $id, [
        'question' => Question::find(1), // Example question
    ]);
});
