<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Valentine's Day Overlay</title>
  <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body {
      background: url(https://subtlepatterns.com/patterns/noise_lines.png);
      font-family: 'Pacifico', cursive;
      overflow: hidden;
      color: #fff;
      margin: 0;
      padding: 0;
    }
    
    .bgoverlay {
      background: rgba(103, 58, 183, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: hidden;
    }
    
    .container {
      position: relative;
      margin: 120px auto 0 auto;
      width: 320px;
      text-align: center;
      transition: all 0.5s ease;
      transform: scale(0);  /* Start with hidden scale */
    }

    .container.open {
      transform: scale(1);  /* On open,
