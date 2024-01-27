"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = require("./block");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.chain = [block_1.Block.genesis()];
    }
    Blockchain.prototype.addBlock = function (data) {
        var newBlock = block_1.Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(newBlock);
    };
    return Blockchain;
}());
exports.default = Blockchain;
