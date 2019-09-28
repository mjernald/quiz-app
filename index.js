

const myQuestions = [
    {
    'question': 'What number is retired by every team in Major League Baseball?',
    'answers': [3, 34, 8, 42],
    'correct': 3,
    'explanation': 'In 1997, Jackie Robinson\'s \#42 was retired across all of Major League Baseball.  He is the first athlete to have his number retired across an entire league.'},
    {
    'question': 'Who holds the MLB record for the most hits in a season?',
    'answers': ['Ichiro Suzuki', 'Ryan Braun', 'Derek Jeter', 'Pete Rose'],
    'correct': 0,
    'explanation': 'In 2004, Ichiro completed the season with 262 hits.'},
    {
    'question': 'What player won the MVP award in 1989 with out making the All-Star game?',
    'answers': ['Andre Dawson', 'Robin Yount', 'Jose Conseco', 'Kirby Puckett'],
    'correct': 1,
    'explanation': 'In 1989, Robin Yount recieved enough votes to win the MVP, but not make the All-Star game'},
    {
    'question': 'Who holds the record for most consecutive games with a hit?',
    'answers': ['Joe Dimaggio', 'Pete Rose', 'Paul Molitor', 'Babe Ruth'],
    'correct': 0,
    'explanation': 'In 1941, Joe Dimaggio hit safely in 56 consecutive games.'},
    {
    'question': 'How many hits dows Pete Rose have in his career?',
    'answers': [3800, 4256, 4562, 4602],
    'correct': 1,
    'explanation': 'Pete Rose finished his career with 4,256 hits.  The most in MLB history.'},
    {
    'question': 'Who holds the record for most strikeouts in a single season?',
    'answers': ['Randy Johnson', 'Sandy Koufax', 'Nolan Ryan', 'Steve Carlton'],
    'correct': 2,
    'explanation': 'In 1973, Nolan Ryan struck out 383 batters.'},
    {
    'question': 'How many career stolen bases does Ricky Henderson have?',
    'answers': [1406, 999, 1399, 1256],
    'correctAnswer': 0,
    'explanation': 'Ricky Henderson owns the record for most stolen bases for a career.  The next closes is Lou Brock with 938.'},
    {
    'question': 'In 2004, Barry Bonds had an on base percentage of...',
    'answers': [609, 599, 649, 520],
    'correct': 0,
    'explanation': 'It is the highest on base percentage ever recorded in a MLB season.'},
  ];

  let score = 0;
  let current = 0;

  $(document).ready(function(){
    //start button//
    $(".start-button").click(function(){
       $('.start-quiz').hide();
       $('.next').hide();
       $('.questions').show();
       displayQuestion();
        $('.score').text('Current Score: '+score);
      console.log("Start Quiz button clicked");
    });
    
    //next button//
    $(".next-button").click(function(event){
        console.log("Next button clicked");
         displayQuestion();
        $('.next').hide();
        $('.submit').show();
    });
    
    $(".submit-button").click(function(event){
        if($('li.selected').length){
            let answer = $('li.selected').attr('id');
            checkAnswer(answer);
            $('.next').show();
            $('.submit').hide();
        } else {
            alert('Please select an answer');
      }
    });
    
    // retake quiz//
    $(".retake-button").click(function(){
        displayQuestion();
    });
    
    //button selection//
    $('ul.list').on('click', 'li', function(event) {
      $('.selected').removeClass();
      $(this).addClass('selected');
    });
    
  });
  
function displayQuestion(){
    $('.question-number').text('Question Number: '+(current + 1)+"/8" );
    if(current < myQuestions.length){
        var listQuestion = myQuestions[current];
        $('h2').text(listQuestion.question);
        $('ul.list').html('');
        for (var i = 0; i < listQuestion.answers.length; i++) {
            $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
        }
    } else {
      displayScore();
    }
  }
  

function checkAnswer(answer){
    let listQuestion = myQuestions[current];
    if(listQuestion.correct == answer){
        score++;
        $('li.selected').addClass('correct');
    } else {
        $('li.selected').addClass('incorrect');
        $('listQuestion.correct').addClass('correct');
    }
    $('.score').text('Current Score: '+score);
    current++;
  }

function displayExplanation() {
    checkAnswer(answer); 
    $('.explanation').show();
}

function displayScore(){
    $('.questions').hide();
    $('.end-quiz').show();
    $('.end-score').text("Your score is: " +score + '/8');
    if(score >= 7){
        $('.comment').text('GREAT JOB!');
    }
  }
  