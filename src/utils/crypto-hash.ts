import crypto from 'crypto';

export const cryptoHash = (inputs: any) => {
    
    inputs = JSON.stringify(inputs);

    const hash = crypto.createHash('sha256');
    hash.update(inputs.toString());
    return hash.digest('hex');
}