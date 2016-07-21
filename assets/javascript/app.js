(function() {
  var questions = [{
    question1: "Who went back for more kisses in Snow White and the Seven Dwarfs?",
    choices: [assets/images/buttons/grumpy.png, assets/images/buttons/sleepy.png, assets/images/buttons/dopey.png, assets/images/buttons/happy.png],
    correctAnswer: assets/images/buttons/dopey.png
  }, {
    question2: "Who has large ears and flys?",
    choices: [Goofy, Tinkerbell, Mickey, Dumbo],
    correctAnswer: Dumbo
  }, {
    question3: "Who's real name is Eugene Fitzherbert?",
    choices: [Genie, Flynn, Beast, Prince Eric],
    correctAnswer: Flynn
  }, {
    question4: "Who has a lucky fin?",
    choices: [Flounder, Dory, Ariel, Nemo],
    correctAnswer: Nemo
  }, {
    question5: "Which princess lives with 7 small men?",
    choices: [Snow White, Aurora, Belle, Cinderella],
    correctAnswer: Snow White
  }, {
    question6: "Which of Pooh's friends has a special song about himself?",
    choices: [Piglet, Eeyore, Tigger, Roo],
    correctAnswer: Tigger
  }, {
    question7: "Which fairy wears all green?",
    choices: [Rosetta, Tinkerbell, Fawn, Periwinkle],
    correctAnswer: Tinkerbell
  }, {
    question8: "Which princess has talking household items?",
    choices: [Jasmine, Pocahontas, Ariel, Belle],
    correctAnswer: Belle
  }, {
    question9: "Who is Captain Hook's primary enemy?",
    choices: [Peter Pan, Smee, Crocodile, Jake],
    correctAnswer: Peter Pan
  }, {
    question10: "Which sidekick does the princess call a guppy?",
    choices: [Nemo, Squirt, Flounder, Sebastian],
    correctAnswer: Flounder
  }];
  
  var game = {

    //Variables
    questionTimeToGuess: 30,
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,

    //Functions
    // timer: function(){

    //     var number = 30;
    //     // $('#stop').on('click', stop);
    //     // $('#resume').on('click', run);

    //     function run(){
    //         counter = setInterval(decrement, 1000);
    //     }

    //     function decrement(){
    //         number--;
    //         $('#show-number').html('<h2>' + number + '</h2>');
    //         if (number === 0){
    //             stop();
    //             alert('Time Up!')
    //         }
    //     }

    //     function stop(){
    //         clearInterval(counter);
    //     }

    //     run();


    },

    startGame: function(){
    object.onclick=function(){myScript};
    },

    reset: function(){

    },
    checkGuess: function(){


      questionNumber++
      if (this.questionNumber === questionsArray.length) {
      }
    },

    printQuestions: function() {
      //reset timer
      this.timer()

      console.log(questionsArray[questionNumber].question1)
      console.log(questionsArray[questionNumber].choices[0])
      console.log(questionsArray[questionNumber].choices[1])
      console.log(questionsArray[questionNumber].choices[2])
      console.log(questionsArray[questionNumber].choices[3])
      console.log(questionsArray[questionNumber].correctChoice)

    }

}


  // $( document ).ready(function() {

  //   function triviaGame () {

  //     // Gets Link for Theme Song
  //           var audioElement = document.createElement('audio');
  //           audioElement.setAttribute('src', 'assets/music/rotten-to-the-core.m4a');
  //           audioElement.play();
  //     // Buttons to control the on click
  //       $(".themeButton").on("click", function(){
  //             audioElement.play();
  //       });

  //       $(".pauseButton").on("click", function(){
  //             audioElement.pause();
  //       });

  //   };
  //     triviaGame();
})();