import {
  ContractAdded as ContractAddedEvent,
  ContractRemoved as ContractRemovedEvent
} from "../generated/Factory/Factory"
import { ContractAdded, ContractRemoved } from "../generated/schema"
import { NftIndex } from '../generated/templates'
export function handleContractAdded(event: ContractAddedEvent): void {
  let entity = new ContractAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.params.contractAddress
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
  NftIndex.create(event.params.contractAddress)
}

export function handleContractRemoved(event: ContractRemovedEvent): void {
  let entity = new ContractRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.params.contractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
