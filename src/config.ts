const MINING_RATE = 1000;
const MINING_REWARD = 50;
const INITIAL_DIFFICULTY = 1;
const STARTING_BALANCE = 1000;

const GENESIS_DATA = {
    timestamp: 1, 
    lastHash: '----',
    hash: 'abcd', 
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
}

export {
    GENESIS_DATA, 
    STARTING_BALANCE, 
    MINING_REWARD,
    MINING_RATE,
    INITIAL_DIFFICULTY
}