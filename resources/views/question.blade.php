<x-layout>



    <ul class="steps mb-10 w-full">
        @for($i = 0; $i < (10 - count($remaining_questions)); $i++)
            <li class="step step-primary"></li>
        @endfor
        @for($i = 0; $i < count($remaining_questions); $i++)
                <li class="step"></li>
            @endfor
    </ul>

    <div class="flex flex-row justify-between items-center text-xs text-gray-500 mb-3">
        <div>
            <span>
                <a href="{{route('api.question_complete', ['question' => $question->id])}}">
                    <i class="fa-regular fa-graduation-cap"></i>
                {{$question->class}}. Klasse
                </a>
            </span>
        </div>
        <div>
            <i class="fa-regular fa-clock"></i>
            <span id="timer">00:00</span>
        </div>
    </div>
    <h1 class="text-3xl font-bold">{{$question->title}}</h1>

    <div class="divider my-5"></div>

    {!! $layout !!}

    <script defer>
        {!! $validator !!}
    </script>


    <div class="divider mt-5 mb-2"></div>
    <div class="flex flex-row justify-between items-center text-xs text-gray-500">
        <div><i class="fa-regular fa-user"></i> {{$question->author}}</div>
        <div>
            <button class="btn btn-xs"><i class="fa-brands fa-github"></i> Edit on GitHub</button>
        </div>
    </div>
    <div class="divider mt-2 mb-5"></div>

    <div class="card card-border bg-base-100 shadow-2xl" id="card_default">
        <div class="card-body flex flex-col sm:flex-row justify-between items-center">
            <div>
                <h2 class="card-title">🤔 Alle Aufgaben gelöst?</h2>
                <p>Überprüfe die Antworten, um weiter zu kommen</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary mt-5 sm:mt-0" id="btn_validate">
                    <i class="fa-regular fa-check mr-1"></i>
                    Ergebnisse kontrollieren
                </button>
            </div>
        </div>
    </div>

    <div class="card card-border border-error bg-error/60 text-error-content shadow-2xl hidden" id="card_error">
        <div class="card-body flex flex-col sm:flex-row justify-between items-center">
            <div>
                <h2 class="card-title">😭 Meep mööp</h2>
                <p>Einige Antworten sind falsch. Denke nochmal genau nach und überprüfe sie dann erneut.</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-error mt-5 sm:mt-0" onclick="document.getElementById('btn_validate').click();">
                    <i class="fa-regular fa-rotate-right mr-1"></i>
                    Erneut kontrollieren
                </button>
            </div>
        </div>
    </div>

    <div class="card card-border border-success bg-success text-success-content shadow-2xl hidden" id="card_success">
        <div class="card-body flex flex-col sm:flex-row justify-between items-center">
            <div>
                <h2 class="card-title">🚀 Check Check</h2>
                <p>Deine Antworten waren alle richtig. Weiter gehts zur nächsten Frage!</p>
            </div>
            <div class="card-actions">
                <a class="btn mt-5 sm:mt-0" href="{{route('api.question_complete', ['question' => $question->id])}}">
                    Weiter zur nächsten Aufgabe
                    <i class="fa-regular fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="fixed bottom-4 right-4">
        <div class="dropdown dropdown-left dropdown-end">
            <div tabindex="0" role="button" class="btn btn-circle btn-neutral btn-xl shadow-xl"><i class="fa-regular fa-screwdriver-wrench"></i></div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-2xl">
                @if($question->calculator)
                    <li><a onclick="modal_calculator.showModal()"><i class="fa-regular fa-calculator me-1"></i> Taschenrechner</a></li>
                @endif
                <li><a onclick="modal_notes.showModal()"><i class="fa-regular fa-note-sticky me-1"></i> Notizen</a></li>
            </ul>
        </div>
    </div>
    <dialog id="modal_calculator" class="modal">
        <div class="modal-box flex flex-col items-center">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <iframe width="219" height="302" src="https://calculator-1.com/outdoor/?f=0274C8&r=666666" scrolling="no" frameborder="0" class="rounded"></iframe>

            <p class="text-xs text-gray-500 mt-3">
                <i class="fa-regular fa-info-circle me-1"></i>
                Powered by <a href="https://calculator-1.com/" class="link">Calculator-1.com</a>
            </p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

    <dialog id="modal_notes" class="modal">
        <div class="modal-box flex flex-col items-center">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <textarea class="textarea mt-5 w-full" placeholder="Tippe hier deine Notizen ein..."></textarea>

            <p class="text-xs text-gray-500 mt-3">
                <i class="fa-regular fa-info-circle me-1"></i>
                Deine Notizen werden nicht gespeichert und gehen verloren, wenn du die Seite verlässt.
            </p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

    <script>
        const startTime = new Date('{{auth()->user()->quiz_start_time}}');

        function updateTimer() {
            const now = new Date();
            const diffInSeconds = Math.floor((now - startTime) / 1000);

            const minutes = String(Math.floor(diffInSeconds / 60)).padStart(2, '0');
            const seconds = String(diffInSeconds % 60).padStart(2, '0');

            document.getElementById('timer').textContent = `${minutes}:${seconds}`;
        }

        updateTimer();

        setInterval(updateTimer, 1000);
    </script>
</x-layout>
