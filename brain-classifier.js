const BrainClassifier = require('./classifier/brain-classifier');
const corpus = require('./corpus-en.json');

const classifier = new BrainClassifier();
classifier.train(corpus);

let total = 0;
let good = 0;

corpus.data.forEach(item => {
    item.tests.forEach(test => {
        const classifications = classifier.process(test);
        console.log(classifications);
    })
})