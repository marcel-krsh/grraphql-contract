import { ethers } from 'ethers';
import { COLLECTION_ABI } from '../lib/abis';
import { TRANSFER_MANAGER_CONTRACT, COLLECTION_CONTRACT } from '../lib/contracts'

export const checkApprove = async (address) => {
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/5f11f9a4e05348b78420d8207bfb75c5');
    const collectionContract = new ethers.Contract(COLLECTION_CONTRACT, COLLECTION_ABI, provider);
    
    const isApproved = await collectionContract.isApprovedForAll(address, TRANSFER_MANAGER_CONTRACT);
    console.log("input address:", address, isApproved);

    return {isApproved: isApproved};
};

