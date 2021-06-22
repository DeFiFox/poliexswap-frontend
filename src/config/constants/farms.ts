import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'POLEX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x59003e72775a3ca90e01bed3e0e3602a58167298',
    },
    token: tokens.polex,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 5,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    token: tokens.wbnb,
    quoteToken: tokens.wbnb,
  },
  
//   {
//     pid: 6,
//     lpSymbol: 'ETH-USDT LP',
//     lpAddresses: {
//       97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
//       56: '0x4C601D261710deA5703F48854AeA2788CE58b9B3',
//     },
//     token: tokens.usdt,
//     quoteToken: tokens.eth,
//   },
//   {
//     pid: 8,
//     lpSymbol: 'BTC-BNB LP',
//     lpAddresses: {
//       97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
//       56: '0x37Ee3b988376040d9eDa49aC66A520beA3726E32',
//     },
//     token: tokens.btcb,
//     quoteToken: tokens.wbnb,
//   },
//   {
//     pid: 5,
//     lpSymbol: 'USDT-BUSD LP',
//     lpAddresses: {
//       97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
//       56: '0xDCca47bfFb79984D3Af9794fd178e4b30e1Cc79B',
//     },
//     token: tokens.wbnb,
//     quoteToken: tokens.busd,
//   },
//   {
//     pid: 10,
//     lpSymbol: 'BTC-USDT LP',
//     lpAddresses: {
//       97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
//       56: '0xc175Bc83D4c9394A1D087D82d8e1D9564e65FCf1',
//     },
//     token: tokens.usdt,
//     quoteToken: tokens.btcb,
//   },
  
  
  
 
]

export default farms
