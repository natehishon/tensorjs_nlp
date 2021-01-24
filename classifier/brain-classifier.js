const { CorpusLookup } = require('@nlpjs/utils');
const { TokenizerEn } = require('@nlpjs/lang-en')
const { NeuralNetwork } = require('brain.js');

const defaultNetOptions = {
    log: (str) => console.log(str),
    logPeriod: 10,
    hiddenLayer: [],
    activation: 'leaky-relu',
    learningRate: 0.7,
    momentum: 0.5,
    alpha: 0.08,
    errorThreshold: 0.0005
}

class BrainClassifier {

    constructor(settings) {
        this.settings = settings || defaultNetOptions;
        this.tokenizer = new TokenizerEn();
        this.stemmer = this.settings.stemmer || { tokenizeAndStem: (str) => this.tokenizer.tokenize(str, true) };
    }

    train(corpus) {
        this.lookups = new CorpusLookup(corpus, this.stemmer)
        this.net = new NeuralNetwork();
        this.net.train(this.lookups.trainVectors, this.settings);
        console.log(this.lookups.trainVectors);
    }

    process(utterance) {
        const vector = this.lookups.inputToVector(utterance);
        const output = this.net.run(vector);
        return this.lookups.vectorToClassifications(output);
    }

}

module.exports = BrainClassifier;