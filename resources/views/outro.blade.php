<x-layout>
    <!-- Center -->
    <div class="fixed top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div class="card w-70 card-border bg-base-100 card-sm shadow-2xl mt-10">
            <div class="card-body text-xs flex flex-row justify-center">
                <div>
                    ⏰
                    {{\Carbon\CarbonInterval::seconds(auth()->user()->seconds_needed)->cascade()->forHumans();}}
                </div>
            </div>
        </div>
    </div>

    <div class="my-20 pb-20 text-xl">

        <div class="flex flex-col md:flex-row gap-5">
            <img src="https://i.ibb.co/5W345J63/Gemini-Generated-Image-qui7nsqui7nsqui7.webp" class="md:w-150 rounded-2xl shadow-2xl">

            <div class="card card-border bg-base-100 shadow-2xl grow">
                <div class="card-body">
                    <p class="text-xl">
                        Herzlichen Glückwunsch, tapfere Jedi-Enten,
                        Ihr habt den Hyperraum-Verteilcode gefunden!<br><br>
                        Gerade noch rechtzeitig habt ihr das Sicherheitssystem auf Pond-Vader deaktiviert und die Brotkrümel-Vorräte aus den Klauen von Lord Mallard befreit.<br><br>
                        Die Teich-Galaxis ist gerettet!<br><br>
                        Überall erheben sich die Schnäbel der Freude, und die goldene Ära des Korns kann nun dank eures Mutes beginnen.
                        Eure Namen werden für immer in den Chroniken der "Rebellion der Knatternden Flügel" verewigt sein.
                        <br><br>
                        <b>Möge das Korn mit euch sein, immer!</b>
                    </p>
                </div>
            </div>
        </div>

        <div class="divider"></div>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="card md:w-96 bg-base-100 card-border card-xs shadow-2xl">
                <div class="card-body">
                    <h2 class="card-title">Aufgabenstellungen</h2>
                    <ul class="list-disc list-inside">
                        <li>Johannes</li>
                        <li>Hendrik</li>
                        <li>Lukas</li>
                        <li>Lenny</li>
                        <li>Neal</li>
                        <li>Ray</li>
                        <li>Danny</li>
                    </ul>
                </div>
            </div>
            <div class="card md:w-96 bg-base-100 card-border card-xs shadow-2xl">
                <div class="card-body">
                    <h2 class="card-title">Storytelling & Bilder</h2>
                    <ul class="list-disc list-inside">
                        <li>Lenny</li>
                    </ul>
                </div>
            </div>
            <div class="card md:w-96 bg-base-100 card-border card-xs shadow-2xl">
                <div class="card-body">
                    <h2 class="card-title">Technische Umsetzung</h2>
                    <ul class="list-disc list-inside">
                        <li>Kurt</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="card mt-5 bg-base-100 card-border card-xs shadow-2xl hidden xl:block">
            <div class="card-body">
                <div class="flex flex-row justify-center gap-4 py-4">
                    <img src="https://cdn.worldvectorlogo.com/logos/laravel-wordmark-1.svg" class="h-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg" class="h-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" class="h-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" class="h-6">
                    <img src="https://svgmix.com/uploads/f14f12-daisyui.svg" class="h-6">
                </div>
            </div>
        </div>

    </div>

    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="card w-70 card-border bg-base-100 card-sm shadow-2xl">
            <div class="card-body text-xs flex flex-row justify-center">
                <div>
                    <a href="{{route('leaderboard')}}#show_me" class="btn px-10 btn-neutral">🎉 Zum Leaderboard</a>
                </div>
            </div>
        </div>
    </div>
</x-layout>
