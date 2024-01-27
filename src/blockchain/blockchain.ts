import { Block } from "./block";

class Blockchain {
    chain: Block[];
    constructor() {
        this.chain = [Block.genesis()]; 
    }

    addBlock(data: any) {
        const newBlock = Block.mineBlock(
            this.chain[this.chain.length - 1], 
            data
        );
        
        this.chain.push(newBlock);
    }
}

export default Blockchain;