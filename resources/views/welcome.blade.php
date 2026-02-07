<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>RAPS-Développement | Agir ensemble pour un avenir durable</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/main.jsx'])

    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body class="antialiased">
    <div id="root"></div>

    <noscript>
        Vous devez activer JavaScript pour profiter pleinement du site de l'ONG RAPS-Développement.
    </noscript>
</body>
</html>
