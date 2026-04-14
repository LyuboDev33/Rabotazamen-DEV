<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <title>Смяна на парола</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">

    <div style="max-width:600px; margin:0 auto; background:#ffffff; padding:30px; border-radius:8px;">

        <h2 style="margin-bottom:20px;">Смяна на парола</h2>

        <p>Здравейте, {{ $user->first_name ?? '' }}</p>

        <p>
            Получихме заявка за смяна на вашата парола.
        </p>

        <p style="text-align:center; margin:30px 0;">
            <a href="{{ $url }}"
               style="background:#007bff; color:#fff; padding:12px 20px; text-decoration:none; border-radius:5px;">
                Смени паролата
            </a>
        </p>

        <p>Линкът изтича след 60 минути.</p>

        <p>Ако не сте поискали това, игнорирайте този имейл.</p>

        <hr style="margin:30px 0;">

        <p style="font-size:12px; color:#999;">
            © {{ date('Y') }} Rabotazamen. Всички права запазени.
        </p>

    </div>

</body>
</html>
