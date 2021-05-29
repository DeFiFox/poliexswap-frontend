import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.beco,
    earningToken: tokens.beco,
    contractAddress: {
       97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
       56: '0xce86b5e0102c089210199D8EcB80fdD26520C738',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
