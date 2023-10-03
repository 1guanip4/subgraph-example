import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ContractAdded, ContractRemoved } from "../generated/Factory/Factory"

export function createContractAddedEvent(
  contractAddress: Address
): ContractAdded {
  let contractAddedEvent = changetype<ContractAdded>(newMockEvent())

  contractAddedEvent.parameters = new Array()

  contractAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return contractAddedEvent
}

export function createContractRemovedEvent(
  contractAddress: Address
): ContractRemoved {
  let contractRemovedEvent = changetype<ContractRemoved>(newMockEvent())

  contractRemovedEvent.parameters = new Array()

  contractRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return contractRemovedEvent
}
