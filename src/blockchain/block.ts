import { cryptoHash } from './../utils/crypto-hash';
import { INITIAL_DIFFICULTY, MINING_RATE } from "../config";
import hexToBinary from 'hex-to-binary';

export class Block {
    data: any;
    hash: any;  
    nonce: any;
    difficulty: any;
    timestamp: any;
    lastHash: any;

    constructor(data: any, hash: any, nonce: any, difficulty: any, timestamp: any, lastHash: any) {
        this.data = data;
        this.hash = hash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
    }

    static genesis() {
        return new this(
            [],
            'abcd', 
            0,
            INITIAL_DIFFICULTY,
            1, 
            '----');
    }

    static mineBlock(lastBlock: any, data: any ) {
        const lastHash  = lastBlock.lastHash;

        let hash, timestamp;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = this.adjustDifficulty(lastBlock, timestamp);

            hash = cryptoHash({timestamp, lastHash, data, difficulty, nonce});
            console.log({timestamp, lastHash, data, difficulty, nonce});
        } while (hexToBinary(hash).substring(0, difficulty));

        return new this(data, hash, nonce, difficulty, timestamp, hash);
    }

    static adjustDifficulty(originalBlock: any, timestamp: any) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;
        if ((timestamp - originalBlock.timestamp) > MINING_RATE) return -1;
        return difficulty + 1;
    }
}