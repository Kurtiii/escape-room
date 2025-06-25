<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mathe-Escaperoom</title>
    @vite(['resources/js/app.js', 'resources/css/app.css'])
    <script src="https://kit.fontawesome.com/e53a33f556.js" crossorigin="anonymous"></script>
    <style>
        body {
            width: 100%;
            height: 100%;
            background: #000;
            overflow: hidden;
        }

        .fade {
            position: relative;
            width: 100%;
            min-height: 60vh;
            top: -25px;
            background-image: linear-gradient(0deg, transparent, black 75%);
            z-index: 1;
        }

        .star-wars {
            display: flex;
            justify-content: center;
            position: relative;
            height: 800px;
            color: #feda4a;
            font-family: 'Pathway Gothic One', sans-serif;
            font-size: 500%;
            font-weight: 600;
            letter-spacing: 6px;
            line-height: 150%;
            perspective: 400px;
            text-align: justify;
        }

        .crawl {
            position: relative;
            top: 99999px;
            transform-origin: 50% 100%;
            animation: crawl 60s linear;
        }

        .crawl > .title {
            font-size: 90%;
            text-align: center;
        }

        .crawl > .title h1 {
            margin: 0 0 100px;
            text-transform: uppercase;
        }

        @keyframes crawl {
            0% {
                top: -100px;
                transform: rotateX(20deg)  translateZ(0);
            }
            100% {
                top: -6000px;
                transform: rotateX(25deg) translateZ(-2500px);
            }
        }
    </style>
</head>
<body>
<div class="fade"></div>

<section class="star-wars">
    <div class="crawl">
        <div class="title">
            <p>Episode I</p>
            <h1>Die Bedrohung des Schnabel-Imperiums</h1>
        </div>

        <p>In einer weit, weit entfernten Teich-Galaxis bedroht das Schnabel-Imperium unter dem ruchlosen Lord Mallard die Freiheit. Er hat alle Brotkrümel-Vorräte auf "Pond-Vader" verschanzt, bewacht von Sturmenten-Truppen und AT-AT-Watvögeln. Ohne das Brot sind die Enten-Kolonien dem Hungertod geweiht.</p>
        <p>Ihr, mutige Jedi-Enten der "Rebellion der Knatternden Flügel", habt von Meister Quack-Obi die Koordinaten der Festung erhalten. Eure Mission: Dringt ein, findet den geheimen Hyperraum-Verteilcode für die Brotrationen und befreit sie! Die Zeit drängt, bevor Lord Mallard das Unendliche Korn für immer versiegelt.</p>
        <p>Findet den Code, befreit das Brot und rettet die Teich-Galaxis! Möge das Korn mit euch sein!</p>

    </div>
</section>

<div class="fixed bottom-4 left-1/2 transform -translate-x-1/2">
    <div class="card w-70 bg-black text-yellow-200 card-border border-yellow-200 card-sm shadow-2xl" id="loader">
        <div class="card-body text-xs flex flex-row justify-center">
            <div><span class="loading loading-spinner loading-xs"></span></div>
            <div>Vorbereitung läuft...</div>
        </div>
    </div>

    <div class="card w-70 bg-black text-yellow-200 card-border border-yellow-200 card-sm shadow-2xl hidden" id="button">
        <div class="card-body text-xs flex flex-row justify-center">
            <div>
                <a href="{{route('login')}}" class="btn px-10 btn-warning bg-yellow-200">
                    Überspringen
                    <i class="fa-regular fa-forward ml-2"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<script>
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loader = document.getElementById('loader');
            const button = document.getElementById('button');
            if (loader) {
                loader.remove();
                button.classList.remove('hidden');
            }
        }, 5000);

        {{--setTimeout(function() {--}}
        {{--    window.location.href = "{{ route('login') }}";--}}
        {{--}, 40000);--}}
    });

</script>
</body>
</html>
