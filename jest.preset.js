const nxPreset = require('@nrwl/jest/preset');

module.exports = {
    ...nxPreset,
    coverageReporters: ['cobertura', 'text', 'lcov'],
    testResultsProcessor: 'jest-multiple-result-processors',
    collectCoverageFrom: [
        '**/*.(t|j)s',
        '!**/*.(module|config|stories).*(t|j)s',
        '!**/*.module.*.(t|j)s',
        '!**/(main|index).(t|j)s',
        '!**/environments/*'
    ],
    moduleNameMapper: {
        '^lodash-es$': 'lodash'
    }
};
