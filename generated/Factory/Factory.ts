// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ContractAdded extends ethereum.Event {
  get params(): ContractAdded__Params {
    return new ContractAdded__Params(this);
  }
}

export class ContractAdded__Params {
  _event: ContractAdded;

  constructor(event: ContractAdded) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ContractRemoved extends ethereum.Event {
  get params(): ContractRemoved__Params {
    return new ContractRemoved__Params(this);
  }
}

export class ContractRemoved__Params {
  _event: ContractRemoved;

  constructor(event: ContractRemoved) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  contractIndices(param0: Address): BigInt {
    let result = super.call(
      "contractIndices",
      "contractIndices(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_contractIndices(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "contractIndices",
      "contractIndices(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contracts(param0: BigInt): Address {
    let result = super.call("contracts", "contracts(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_contracts(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("contracts", "contracts(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getContracts(): Array<Address> {
    let result = super.call("getContracts", "getContracts():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getContracts(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getContracts",
      "getContracts():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddContractCall extends ethereum.Call {
  get inputs(): AddContractCall__Inputs {
    return new AddContractCall__Inputs(this);
  }

  get outputs(): AddContractCall__Outputs {
    return new AddContractCall__Outputs(this);
  }
}

export class AddContractCall__Inputs {
  _call: AddContractCall;

  constructor(call: AddContractCall) {
    this._call = call;
  }

  get _contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddContractCall__Outputs {
  _call: AddContractCall;

  constructor(call: AddContractCall) {
    this._call = call;
  }
}

export class RemoveContractCall extends ethereum.Call {
  get inputs(): RemoveContractCall__Inputs {
    return new RemoveContractCall__Inputs(this);
  }

  get outputs(): RemoveContractCall__Outputs {
    return new RemoveContractCall__Outputs(this);
  }
}

export class RemoveContractCall__Inputs {
  _call: RemoveContractCall;

  constructor(call: RemoveContractCall) {
    this._call = call;
  }

  get _contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveContractCall__Outputs {
  _call: RemoveContractCall;

  constructor(call: RemoveContractCall) {
    this._call = call;
  }
}