/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMedian,
  IMedianInterface,
} from "../../../contracts/interface/IMedian";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "priceHistory",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
      {
        internalType: "uint64[]",
        name: "_timestamps",
        type: "uint64[]",
      },
      {
        internalType: "bytes[]",
        name: "_signatures",
        type: "bytes[]",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMedian__factory {
  static readonly abi = _abi;
  static createInterface(): IMedianInterface {
    return new Interface(_abi) as IMedianInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IMedian {
    return new Contract(address, _abi, runner) as unknown as IMedian;
  }
}
