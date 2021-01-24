const { word } = require('casual');
const casual = require('casual');

module.exports = () => {
    casual.define("questions", function() {
        return {
            questionsText: casual.first_name,
            answerOptions: [
                {answerText: casual.street, isCorrect: true},
                {answerText: casual.email, isCorrect: false},
                {answerText: casual.word, isCorrect: false},
                {answerText: casual.integer(from = 15000, to = 60000), isCorrect: true}
            ]
            


        }
    });


    const data = {
        questions: []
    };

    for (let i = 0; i < 10; i++) {
        data.questions.push(casual.questions);
    }

    return data;

};