<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" /> -->
    <title>Marlon-Velásquez</title>
    <style>
      html {
        box-sizing: border-box;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
        font-size: 16px;
      }

      a {
        text-decoration: none;
      }

      .main-box {
        background-color: yellow;
      }

      h4{
        margin-bottom: -1em;
      }
    </style>

  </head>
  <body>
    <div class="main-box">
      <h1>Tetris Game - Sargentogato</h1>
      <h2>Index</h2>
      <ol>
        <li>
          <a href="#intro" title="intro"> Intro</a>
        </li>
        <li>
          <a href="#how-to-play">How to play</a>
        </li>
        <li>
          <a href="#upgrades">Upgrades</a>
        </li>
        <li>
          <a href="#changes">Changes</a>
        </li>
        <li>
          <a href="#thanks">Thanks</a>
        </li>
      </ol>

      <h2 id="intro">Intro</h2>
      <p>To make the board, it has been used a canvas.</p>
      <p>
        This is an <b>Alfa</b> version. I will try to upload a refactor in some days and I will try to make small improvements when I will have time. I didn't spend to much time on the design. It is one of the things that I will improve in a future version. <br />
        If you want to clone the repo to play around, improve the code or just to play, go ahead, I just ask you to mention the authorship :).
      </p>

      <p></p>
      <p>Enjoy and share. Marlon Velásquez</p>
      <h2 id="how-to-play">How to Play</h2>
      <p><b>To move the pieces, you just need the arrow buttons</b>
        <ul>
          <li>Left</li>
          <li>Right</li>
          <li>Down</li>
          <li>To rotate the piece press <b>Space bar</b></li>
        </ul>
      </p>
      <h2 id="upgrades">Upgrades</h2>
      <ul>
        <li>It has been added two buttons(<b>still not working</b>) start and play again</li>
      </ul>
      <h2 id="changes">Changes</h2>
      <h4>22 may 2020</h4>
        <ul>
          <li>Now the board array is done automatically with the new boardConstructor function.</li>
          <li>It has been renamed all to english.</li>
          <li>It has been done some refactor to:
            <ul>
              <li>The drawPieces method (swith statement instead of if statement)</li>
              <li>the drawBoard function (swith statement instead of if statement)</li>
            </ul>
          </li>
          <li>It has been separated the pieces variable to a new file call pieces.js</li>
        </ul>
      <h2 id="thanks">Thanks</h2>
      <p>Thanks to Javier Muñiz(javiermunizyt on github) for his excelent HTML5 and JavaScript course, without it perhaps it wouldn't be posible this tetris.</p>
    </div>
    <p><b>by Sargentogato</b></p>

  </body>
</html>
