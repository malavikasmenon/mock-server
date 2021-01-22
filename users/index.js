const { word } = require('casual');
const casual = require('casual');

module.exports = () => {
    casual.define("user", function() {
        return {
            name: casual.first_name,
            location: casual.street,
            email: casual.email,
            word: casual.word,
            salary: casual.integer(from = 15000, to = 60000)


        }
    });


    const data = {
        users: []
    };

    for (let i = 0; i < 100; i++) {
        data.users.push(casual.user);
    }

    return data;

};