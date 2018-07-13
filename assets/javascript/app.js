$(document).ready(function () {
    console.log("ready!");

    var questions = [
        {
            question: "Andy Dwyer's alter-ego, Agent Burt Macklin, has a brother. What's his name?",
            answers: ["Kip Macklin", "Hugh Jackman", "Kip Hackman", "Kurt Macklin"],
            correctAnswer: "Kip Hackman",
            image: "../images/macklin.gif"
            //will need to add syntax like: innerHTML = answer + '<img src="'+fruit.image+'">';
        },

        {
            question: "Ron has brings permit to slaugter a pig for the Parks & Rec barbecue. What does it say?",
            answers: ["Shut up.", "Don't sass me.", "I can do this.", "I can do what I want."],
            correctAnswer: "I can do what I want",
            image: "../images/ron.gif"
        },

        {
            question: "In what year do Tom and Donna celebrate the first 'Treat Yo Self' day on the show?",
            answers: ["2008", "2010", "2011", "2017"],
            correctAnswer: "2011",
            image: "../images/treatyoself.gif"
        },

        {
            question: "Which of these is NOT another name for Garry Gergich?",
            answers: ["Larry", "Jerry", "Terry", "Perry"],
            correctAnswer: "Perry",
            image: "../images/treatyoself.gif"
        },
        {
            question: "What was the name of the failed sports complex that ended Ben's career as boy-mayor of Partridge, MN?",
            answers: ["Ice Town", "Skate Town", "Ice Kingdom", "Snow Town"],
            correctAnswer: "Ice Town",
            image: "../images/macklin.gif"
        },
        {
            question: "Which character wins an award for female empowerment?",
            answers: ["Leslie Knope", "Ron Swanson", "Donna Meagle", "Anne Perkins"],
            correctAnswer: "Ron Swanson",
            image: "../images/macklin.gif"
        },
        {
            question: "Who buys Tom's first (major) successful business, Rent-A-Swag?",
            answers: ["Trevor Nelson", "Jean-Ralphio", "Dr. Saperstein", "Chris Traeger"],
            correctAnswer: "Dr. Saperstein",
            image: "../images/macklin.gif"
        },
        {
            question: "Who plays beloved Pawnee mayor, Walter Gunderson?",
            answers: ["Chevy Chase", "Rick Moranis", "Nick Offerman", "Bill Murray"],
            correctAnswer: "Bill Murray",
            image: "../images/macklin.gif"
        }
    ];


    var currentTime = 3;
    var current = 0;
    // collect info from button user picks
    // var userChoice;
    // var answerA;
    var questionInterval;

    $("#start-over").hide();
    $("#answer-buttons").hide();

    // start button
    $("#start").click(startQuiz);


    function runTimer() {
        clearInterval(questionInterval);
        questionInterval = setInterval(decrement, 1000);
    }

    function decrement() {
        currentTime--;

        $("#timer").html("You have " + currentTime + " seconds left.</h2>");

        if (currentTime === 0) {
            stopTimer();
        
        }

         function stopTimer() {
            clearInterval(questionInterval);
        }
    }

    // function pushValueA() {
    //     userChoice = $('#answerA');
    // }
    // function pushValueB() {
    //     userChoice = $('#answerB');
    // } 
    // function pushValueC() {
    //     userChoice = $('#answerC');
    // } 
    // function pushValueD() {
    //     userChoice = $('#answerD');
    // }

    // $('#answerA').click(pushValueA());
    // $('#answerB').click(pushValueB());
    // $('#answerC').click(pushValueC());
    // $('#answerD').click(pushValueD());


    // giant loop for question
    // probably needs to be inside a function, called when start button is clicked 

    function startQuiz() {

        $("#start").hide();
        $("#answer-buttons").show();
        $("#timer").html("You have " + currentTime + " seconds left.");


        runTimer();

        // start the timer
        // $("#start").click(setTimeout(nextQuestion, 1000*30));
        // and show it somewhere

        for (var i = 0; i < questions.length; i++) {
            $('#question').html(questions[current].question);

            //loops through, adds answers
            for (var j = 0; j < questions[current].answers.length; j++) {
                $('#answerA').html(questions[current].answers[0]);
                // answerA = $("#answerA").html();
                $('#answerB').html(questions[current].answers[1]);
                $('#answerC').html(questions[current].answers[2]);
                $('#answerD').html(questions[current].answers[3]);
            }

            // timer for 30 seconds
        }

        progressLogic();


    }



    function progressLogic () {
    
        if (currentTime === 0) {
            currentTime = runTimer();
            current++;
            
            $('#question').html(questions[current].question);

        }
    
    }

    // play again (same sort of thing as the start button)

    $("#start-over").click(startQuiz);
    console.log(currentTime);
});