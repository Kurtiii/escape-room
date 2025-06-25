@props([
    'question' => null,
])

{{$slot}}


<div>

    <div class="divider my-5"></div>
    <a href="{{route('api.question_complete', ['question' => $question->id, 'no_sequence' => true])}}" class="btn btn-primary mt-5 sm:mt-0 float-end">
        Weiter zur nächsten Aufgabe
        <i class="fa-regular fa-arrow-right ml-1"></i>
    </a>
</div>
