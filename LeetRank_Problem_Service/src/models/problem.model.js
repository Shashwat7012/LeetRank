const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'Difficulty cannot be empty'],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    codeStubs: [
        {
            language: {
                type : String,
                enum: ["CPP", "JAVA", "PYTHON"],
                required : true
            },
            startSnippet:{
                type : String,
               
            },
            endSnippet:{
                type : String,
                
            },
            userSnippet:{
                type: String,
               
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;

/**
 * 
 * [{input: '5', output: '10'}, {input: '2', output: '20'}]
 * 
 * 
 * 5
 * 2 3 4 5 6
 * 8
 * 
 * 1 3
 * 
 */
// it is for query or creation (use it as an object)


// Scoping in it :------
// test cases
/**
 * [{input:'5', output: 10},{input:'4', output:7}]
 */ 
/**
 * for two sum Like problem:-
 * Input:- in single string
 * 5\n
 * 1 2 3 4 5\n
 * 6\n
 * 
 * output:-
 * 2 4
 */