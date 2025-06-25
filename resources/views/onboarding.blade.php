<x-layout>
    <div class="flex justify-center align-center mt-20">
        <div class="card card-border bg-base-100 shadow-2xl w-110">
            <div class="card-body">
                <h2 class="card-title">
                    🚀 Los geht's!
                </h2>

                <form method="post" action="{{ route('api.register') }}">
                    @csrf
                    <p class="mb-7">
                        Bitte gib deinen Namen ein und wähle eine Klasse aus, um zu beginnen.
                    </p>

                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Wie heißt du?</legend>
                        <input type="text" class="input" placeholder="Name hier eingeben..." autocomplete="given-name" name="name" required>
                        <p class="label">Dein Name wird im Leaderboard angezeigt</p>
                    </fieldset>
                    <x-field-error name="name"/>

                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">In welche Klassenstufe gehst du?</legend>
                        <select class="select" required name="class">
                            <option disabled selected>Klicke zum auswählen...</option>
                            <option value="11">🍼 11. Klasse</option>
                            <option value="12">💪 12. Klasse</option>
                        </select>
                    </fieldset>
                    <x-field-error name="class"/>

                    <div class="card-actions flex justify-between mt-7">
                        <a href="{{route('leaderboard')}}" class="btn btn-accent">
                            <i class="fa-regular fa-ranking-star"></i>
                            <span class="hidden sm:inline ms-1">Bestenliste</span>
                        </a>
                        <button class="btn btn-primary grow" type="submit">
                            Story fortsetzen
                            <i class="fa-regular fa-arrow-right ml-1"></i>
                        </button>
                    </div>


                </form>
            </div>
        </div>
    </div>

</x-layout>
