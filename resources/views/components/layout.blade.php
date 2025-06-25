@props([
    'title' => 'Mathe-Escaperoom',
])

<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{$title}}</title>
    @vite(['resources/js/app.js', 'resources/css/app.css'])
    <script src="https://kit.fontawesome.com/e53a33f556.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="mx-7 my-5">
        {{$slot}}
    </div>
</body>
</html>
