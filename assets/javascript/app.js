// Start button --- runs giant quiz function

// Make an array of the questions (an array of objects), change out with $(#questions)

// Timer ticks for each question, moves on if user doesn't answer

// User chooses answer -- if/else for correct/incorrect answers & "out of time" outcomes

// End: timer is gone. Tally of correct/incorrect answers appears

// Start over button -- resets the game, DOES NOT reload the page


var questions = [
    {
        question: "Andy Dwyer's alter-ego, Agent Burt Macklin, has a brother. What's his name?",
        answers: ["Kip Macklin", "Hugh Jackman", "Kip Hackman", "Burt Hackman"],
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


];
console.log(questions[0].question);
console.log(questions[0].answers[0]);

// giant loop for question

for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].question);
    $('#question').html(questions[i].question);

    //loops through answers
    for (var j = 0; j < questions[i].answers.length; j++) {
        console.log(questions[i].answers[j]);
        $('#answers').append("<br>" + questions[i].answers[j]);
    }
    // start the timer

    

}

