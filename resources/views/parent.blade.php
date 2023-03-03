<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    {{--  -------------------------------Style-Links---------------------------------------  --}}
    <link href="{{ asset('assets/css/default-min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/theme.css') }}" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet">
</head>

<body>
    @yield('content')
    {{--  -------------------------------Script-Links---------------------------------------  --}}
    <script src="assets/js/swiper-bundle.min.js"></script>
    <script src="assets/js/intlTelInput.min.js"></script>
    {{--  -------------------------------Script-Extensions---------------------------------------  --}}
    @include('scriptsComponent.scripts')
</body>

</html>
