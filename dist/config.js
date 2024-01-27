"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_DIFFICULTY = exports.MINING_RATE = exports.MINING_REWARD = exports.STARTING_BALANCE = exports.GENESIS_DATA = void 0;
var MINING_RATE = 1000;
exports.MINING_RATE = MINING_RATE;
var MINING_REWARD = 50;
exports.MINING_REWARD = MINING_REWARD;
var INITIAL_DIFFICULTY = 3;
exports.INITIAL_DIFFICULTY = INITIAL_DIFFICULTY;
var STARTING_BALANCE = 1000;
exports.STARTING_BALANCE = STARTING_BALANCE;
var GENESIS_DATA = {
    timestamp: 1,
    lastHash: '----',
    hash: 'abcd',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};
exports.GENESIS_DATA = GENESIS_DATA;
