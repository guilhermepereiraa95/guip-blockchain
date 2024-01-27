"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var crypto_hash_1 = require("./../utils/crypto-hash");
var config_1 = require("../config");
var hex_to_binary_1 = __importDefault(require("hex-to-binary"));
var Block = /** @class */ (function () {
    function Block(data, hash, nonce, difficulty, timestamp, lastHash) {
        this.data = data;
        this.hash = hash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
    }
    Block.genesis = function () {
        return new this([], 'abcd', 0, config_1.INITIAL_DIFFICULTY, 1, '----');
    };
    Block.mineBlock = function (lastBlock, data) {
        var lastHash = lastBlock.lastHash;
        var hash, timestamp;
        var difficulty = lastBlock.difficulty;
        var nonce = 0;
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = this.adjustDifficulty(lastBlock, timestamp);
            hash = (0, crypto_hash_1.cryptoHash)({ timestamp: timestamp, lastHash: lastHash, data: data, difficulty: difficulty, nonce: nonce });
        } while ((0, hex_to_binary_1.default)(hash).substring(0, difficulty));
        return new this(data, hash, nonce, difficulty, timestamp, lastHash);
    };
    Block.adjustDifficulty = function (originalBlock, timestamp) {
        var difficulty = originalBlock.difficulty;
        if (difficulty < 1)
            return 1;
        if ((timestamp - originalBlock.timestamp) > config_1.MINING_RATE)
            return -1;
        return difficulty + 1;
    };
    return Block;
}());
exports.Block = Block;
