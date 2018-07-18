$("#start").on("click", function () {
    game.start();
});

$(document).on("click", "#end", function() {
    game.done();
});

$(document).on("click", "#restart", function() {
    $("#sub-div").empty();
    game.correct = 0;
    game.incorrect = 0;
    game.counter = 120;
    game.start();
});

var questions = [
    {
        question: "Andy Dwyer's alter-ego, Agent Burt Macklin, has a brother. What's his name?",
        answers: ["Kip Macklin", "Hugh Jackman", "Kip Hackman", "Kurt Macklin"],
        correctAnswer: "Kip Hackman",
    },

    {
        question: "Ron has brings permit to slaugter a pig for the Parks & Rec barbecue. What does it say?",
        answers: ["Shut up.", "Don't sass me.", "I can do this.", "I can do what I want."],
        correctAnswer: "I can do what I want.",
    },

    {
        question: "In what year do Tom and Donna celebrate the first 'Treat Yo Self' day on the show?",
        answers: ["2008", "2010", "2011", "2017"],
        correctAnswer: "2011",
    },

    {
        question: "Which of these is NOT another name for Garry Gergich?",
        answers: ["Larry", "Jerry", "Terry", "Perry"],
        correctAnswer: "Perry",
    },
    {
        question: "What was the name of the failed sports complex that ended Ben's career as boy-mayor of Partridge, MN?",
        answers: ["Ice Town", "Skate Town", "Ice Kingdom", "Snow Town"],
        correctAnswer: "Ice Town",
    },
    {
        question: "Which character wins an award for female empowerment?",
        answers: ["Leslie Knope", "Ron Swanson", "Donna Meagle", "Anne Perkins"],
        correctAnswer: "Ron Swanson",
    },
    {
        question: "Who buys Tom's first (major) successful business, Rent-A-Swag?",
        answers: ["Trevor Nelson", "Jean-Ralphio", "Dr. Saperstein", "Chris Traeger"],
        correctAnswer: "Dr. Saperstein",
    },
    {
        question: "Who plays beloved Pawnee mayor, Walter Gunderson?",
        answers: ["Chevy Chase", "Rick Moranis", "Nick Offerman", "Bill Murray"],
        correctAnswer: "Bill Murray",
    }
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);

        if (game.counter <= 0) {
            console.log("Time's up!");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#sub-div").prepend("<h2><span id='counter'>120</span> seconds left!</h2>");

        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#sub-div").append("<br><h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#sub-div").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'> " + questions[i].answers[j] + "<br>");
            }
        }
        $("#sub-div").append("<br><br><button type='button' class='btn btn-success' button id='end'>DONE</button>");
    }, 
    done: function () {
        // checks each question
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        $("#sub-div").append("<br><br><button type='button' class='btn btn-success' button id='restart'>TRY AGAIN</button>");
    },

    result:function() {
        clearInterval(timer);
        $("#sub-div h2").remove();

        $("#sub-div").html("<h2>All done!</h2><br>");
        $("#sub-div").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#sub-div").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#sub-div").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3><br>");
        $("#sub-div").append("<img src='assets/images/ron.gif'>");

    }
}

