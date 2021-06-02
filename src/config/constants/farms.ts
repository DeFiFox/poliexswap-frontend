import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'POLEX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x73c5114b19ab840f16cdffa40711ef777353d4aa',
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
//    {
//     pid: 4,
//     lpSymbol: 'USDC-BUSD LP',
//     lpAddresses: {
//       97: '',
//       56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
//     },
//     token: tokens.usdc,
//     quoteToken: tokens.busd,
//   },
  
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
  
  
//   {
//     pid: 9,
//     lpSymbol: 'CAKE-BNB LP',
//     lpAddresses: {
//       97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
//       56: '0x0adB576702b83a56B2124cc353BA5695ce4A2866',
//     },
//     token: tokens.cake,
//     quoteToken: tokens.wbnb,
//   },
 
]

export default farms
