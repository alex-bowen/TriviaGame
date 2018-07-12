

// Timer ticks for each question, moves on if user doesn't answer

// User chooses answer -- if/else for correct/incorrect answers & "out of time" outcomes

// End: timer is gone. Tally of correct/incorrect answers appears

// Start over button -- resets the game, DOES NOT reload the page
var currentTime = "00:00";

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
        question: "Who plays beloved Pawnee's beloved mayor, Walter Gunderson?",
        answers: ["Chevy Chase", "Rick Moranis", "Nick Offerman", "Bill Murray"],
        correctAnswer: "Bill Murray",
        image: "../images/macklin.gif"
    },



];
console.log(questions[0].question);
console.log(questions[0].answers[0]);

// giant loop for question
// probably needs to be inside a function, called when start button is clicked 

function theQuiz() {

    $("#start").hide();

    // start the timer  

    // and show it somewhere
    $("#timer").html(currentTime);


    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i].question);
        $('#question').html(questions[i].question);


        //loops through, adds answers
        for (var j = 0; j < questions[i].answers.length; j++) {
            console.log(questions[i].answers[j]);
            $('#answers').append("<br>" + questions[i].answers[j]);
        }

    }



}


// start button
$("#start").click(theQuiz);