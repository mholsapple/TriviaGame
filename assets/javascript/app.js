$( document ).ready(function() {

    function triviaGame () {

      // Gets Link for Theme Song
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'assets/rotten-to-the-core.m4a');
            audioElement.play();
      // Buttons to control the on click
        $(".themeButton").on("click", function(){
              audioElement.play();
        });

        $(".pauseButton").on("click", function(){
              audioElement.pause();
        });

    };
      triviaGame();
    });