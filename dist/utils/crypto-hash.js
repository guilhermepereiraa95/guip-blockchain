"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoHash = void 0;
var crypto_1 = __importDefault(require("crypto"));
var cryptoHash = function (inputs) {
    inputs = JSON.stringify(inputs);
    var hash = crypto_1.default.createHash('sha256');
    hash.update(inputs.toString());
    return hash.digest('hex');
};
exports.cryptoHash = cryptoHash;
