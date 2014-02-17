var adjectives = [
    'fishy',
    'discombobulated',
    'upset',
    'reticulated',
    'unimpressive',
    'catastrophic',
    'outrageous',
    'alpha'
];
var nouns = [
    'mechanics',
    'inputs',
    'whatsits',
    'splines',
    'beans',
    'newlines',
    'recycling',
    'widgets'
];

function pickRandom(arr) {
    return arr[Math.round(Math.random() * arr.length - 1)] + [Math.round(Math.random() * arr.length - 1)];
}

function errorMessage(msg) {

    msg = msg.replace('%a', pickRandom(adjectives));
    msg = msg.replace('%n', pickRandom(adjectives));

    return msg;
}

module.exports = errorMessage;