import Token from './communication-api/ethereum/models/Token'
import TokenDelegate from './communication-api/ethereum/models/TokenDelegate'
import EternalStorage from './communication-api/ethereum/models/EternalStorage'

export default {
    Ethereum: {
        Contracts: {
            Token: require('./smart-contracts/ethereum/build/HyperbridgeToken.json')
        },
        Models: {
            Token: Token,
            TokenDelegate: TokenDelegate,
            EternalStorage: EternalStorage
        }
    }
}