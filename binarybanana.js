'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Binary Banana';

/**
 * Array containing space facts.
 */
var FACTS = [
    "If the last digit of a binary number is 1, the number is odd; if it’s 0, the number is even.",
    "In 1679, Gottfried Leibniz discovered the basis for binary code and modern binary number system.",
    "A bit of string will be used to represent the character, digit or even letter in fixed width binary code.",
    "The binary number system is a base-2 number system.",
    "Binary numbers have many uses in mathematics and beyond.",
    "Binary can be read such as 101010111",
    "Binary only consists of ones and zeros",
    "Binary is used by computers like me",
    "Binary's 0 and 1 method is efficient at detecting an electrical signal's off or on state.",
    "Binary is the most efficient way to control logic circuits.",
    "The binary code assigns a pattern of binary digits (bits) to each character.",
    "The modern binary number system, the basis for binary code, was invented by Gottfried Leibniz in 1679",
    "Braille is a type of binary code that is widely used by blind people to read and write by touch, named for its creator, Louis Braille.",
    "A binary system in general is any system that allows only two choices such as a switch in an electronic system or a simple true or false test.",
    "Two's complement is a mathematical operation on binary numbers, as well as a binary signed number representation."

];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a binary fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
