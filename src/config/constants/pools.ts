import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.polex,
    earningToken: tokens.polex,
    contractAddress: {
       97: '',
       56: '0xD1CeA1Ed16e618AcBc1e0F87bBe6A19d4Ae03baa',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '100',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
