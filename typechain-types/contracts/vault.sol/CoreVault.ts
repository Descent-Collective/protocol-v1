/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IVaultSchema {
  export type VaultStruct = {
    lockedCollateral: BigNumberish;
    unlockedCollateral: BigNumberish;
    normalisedDebt: BigNumberish;
    collateralName: BytesLike;
    vaultState: BigNumberish;
  };

  export type VaultStructOutput = [
    lockedCollateral: bigint,
    unlockedCollateral: bigint,
    normalisedDebt: bigint,
    collateralName: string,
    vaultState: bigint
  ] & {
    lockedCollateral: bigint;
    unlockedCollateral: bigint;
    normalisedDebt: bigint;
    collateralName: string;
    vaultState: bigint;
  };
}

export interface CoreVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "availableStableToken"
      | "cage"
      | "cleanseVault"
      | "collateralMapping"
      | "collateralizeVault"
      | "createCollateralType"
      | "createVault"
      | "debt"
      | "firstVault"
      | "getAvailableStableToken"
      | "getCollateralData"
      | "getRoleAdmin"
      | "getVaultById"
      | "getVaultCountForOwner"
      | "getVaultId"
      | "getVaultOwner"
      | "getVaultsForOwner"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "lastVault"
      | "list"
      | "live"
      | "ownerMapping"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "updateCollateralData"
      | "vaultCountMapping"
      | "vaultMapping"
      | "withdrawStableToken"
      | "withdrawUnlockedCollateral"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CollateralAdded"
      | "CollateralWithdrawn"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "StableTokenWithdrawn"
      | "VaultCleansed"
      | "VaultCollateralized"
      | "VaultCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "availableStableToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cleanseVault",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralMapping",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralizeVault",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCollateralType",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createVault",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "debt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "firstVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableStableToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultCountForOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultsForOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "list", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCollateralData",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultCountMapping",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStableToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnlockedCollateral",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableStableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cleanseVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralizeVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCollateralType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "firstVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableStableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultCountForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVaultId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVaultOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCollateralData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultCountMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnlockedCollateral",
    data: BytesLike
  ): Result;
}

export namespace CollateralAddedEvent {
  export type InputTuple = [collateralName: BytesLike];
  export type OutputTuple = [collateralName: string];
  export interface OutputObject {
    collateralName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollateralWithdrawnEvent {
  export type InputTuple = [
    amount: BigNumberish,
    owner: AddressLike,
    vaultId: BigNumberish
  ];
  export type OutputTuple = [amount: bigint, owner: string, vaultId: bigint];
  export interface OutputObject {
    amount: bigint;
    owner: string;
    vaultId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StableTokenWithdrawnEvent {
  export type InputTuple = [
    amount: BigNumberish,
    owner: AddressLike,
    vaultId: BigNumberish
  ];
  export type OutputTuple = [amount: bigint, owner: string, vaultId: bigint];
  export interface OutputObject {
    amount: bigint;
    owner: string;
    vaultId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultCleansedEvent {
  export type InputTuple = [
    amount: BigNumberish,
    owner: AddressLike,
    vaultId: BigNumberish
  ];
  export type OutputTuple = [amount: bigint, owner: string, vaultId: bigint];
  export interface OutputObject {
    amount: bigint;
    owner: string;
    vaultId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultCollateralizedEvent {
  export type InputTuple = [
    unlockedCollateral: BigNumberish,
    availableStableToken: BigNumberish,
    owner: AddressLike,
    vaultId: BigNumberish
  ];
  export type OutputTuple = [
    unlockedCollateral: bigint,
    availableStableToken: bigint,
    owner: string,
    vaultId: bigint
  ];
  export interface OutputObject {
    unlockedCollateral: bigint;
    availableStableToken: bigint;
    owner: string;
    vaultId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultCreatedEvent {
  export type InputTuple = [vaultId: BigNumberish, owner: AddressLike];
  export type OutputTuple = [vaultId: bigint, owner: string];
  export interface OutputObject {
    vaultId: bigint;
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CoreVault extends BaseContract {
  connect(runner?: ContractRunner | null): CoreVault;
  waitForDeployment(): Promise<this>;

  interface: CoreVaultInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  availableStableToken: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  cage: TypedContractMethod<[], [void], "nonpayable">;

  cleanseVault: TypedContractMethod<
    [_vaultId: BigNumberish, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  collateralMapping: TypedContractMethod<
    [arg0: BytesLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        TotalNormalisedDebt: bigint;
        TotalCollateralValue: bigint;
        rate: bigint;
        price: bigint;
        debtCeiling: bigint;
        debtFloor: bigint;
        badDebtGracePeriod: bigint;
        collateralDecimal: bigint;
        exists: bigint;
      }
    ],
    "view"
  >;

  collateralizeVault: TypedContractMethod<
    [amount: BigNumberish, owner: AddressLike, _vaultId: BigNumberish],
    [[bigint, bigint]],
    "nonpayable"
  >;

  createCollateralType: TypedContractMethod<
    [
      _collateralName: BytesLike,
      rate: BigNumberish,
      price: BigNumberish,
      debtCeiling: BigNumberish,
      debtFloor: BigNumberish,
      badDebtGracePeriod: BigNumberish,
      decimal: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  createVault: TypedContractMethod<
    [owner: AddressLike, _collateralName: BytesLike],
    [bigint],
    "nonpayable"
  >;

  debt: TypedContractMethod<[], [bigint], "view">;

  firstVault: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getAvailableStableToken: TypedContractMethod<
    [owner: AddressLike],
    [bigint],
    "view"
  >;

  getCollateralData: TypedContractMethod<
    [_collateralName: BytesLike],
    [[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getVaultById: TypedContractMethod<
    [_vaultId: BigNumberish],
    [IVaultSchema.VaultStructOutput],
    "view"
  >;

  getVaultCountForOwner: TypedContractMethod<
    [owner: AddressLike],
    [bigint],
    "view"
  >;

  getVaultId: TypedContractMethod<[], [bigint], "view">;

  getVaultOwner: TypedContractMethod<
    [_vaultId: BigNumberish],
    [string],
    "view"
  >;

  getVaultsForOwner: TypedContractMethod<
    [owner: AddressLike],
    [bigint[]],
    "view"
  >;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [_stableToken: AddressLike],
    [void],
    "nonpayable"
  >;

  lastVault: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  list: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { prev: bigint; next: bigint }],
    "view"
  >;

  live: TypedContractMethod<[], [bigint], "view">;

  ownerMapping: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  updateCollateralData: TypedContractMethod<
    [_collateralName: BytesLike, param: BytesLike, data: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  vaultCountMapping: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  vaultMapping: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, string, bigint] & {
        lockedCollateral: bigint;
        unlockedCollateral: bigint;
        normalisedDebt: bigint;
        collateralName: string;
        vaultState: bigint;
      }
    ],
    "view"
  >;

  withdrawStableToken: TypedContractMethod<
    [_vaultId: BigNumberish, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  withdrawUnlockedCollateral: TypedContractMethod<
    [_vaultId: BigNumberish, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "availableStableToken"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "cage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cleanseVault"
  ): TypedContractMethod<
    [_vaultId: BigNumberish, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collateralMapping"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        TotalNormalisedDebt: bigint;
        TotalCollateralValue: bigint;
        rate: bigint;
        price: bigint;
        debtCeiling: bigint;
        debtFloor: bigint;
        badDebtGracePeriod: bigint;
        collateralDecimal: bigint;
        exists: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "collateralizeVault"
  ): TypedContractMethod<
    [amount: BigNumberish, owner: AddressLike, _vaultId: BigNumberish],
    [[bigint, bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createCollateralType"
  ): TypedContractMethod<
    [
      _collateralName: BytesLike,
      rate: BigNumberish,
      price: BigNumberish,
      debtCeiling: BigNumberish,
      debtFloor: BigNumberish,
      badDebtGracePeriod: BigNumberish,
      decimal: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createVault"
  ): TypedContractMethod<
    [owner: AddressLike, _collateralName: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "debt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "firstVault"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAvailableStableToken"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCollateralData"
  ): TypedContractMethod<
    [_collateralName: BytesLike],
    [[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getVaultById"
  ): TypedContractMethod<
    [_vaultId: BigNumberish],
    [IVaultSchema.VaultStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultCountForOwner"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getVaultId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getVaultOwner"
  ): TypedContractMethod<[_vaultId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getVaultsForOwner"
  ): TypedContractMethod<[owner: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_stableToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lastVault"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "list"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { prev: bigint; next: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "live"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ownerMapping"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "updateCollateralData"
  ): TypedContractMethod<
    [_collateralName: BytesLike, param: BytesLike, data: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vaultCountMapping"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "vaultMapping"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, string, bigint] & {
        lockedCollateral: bigint;
        unlockedCollateral: bigint;
        normalisedDebt: bigint;
        collateralName: string;
        vaultState: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdrawStableToken"
  ): TypedContractMethod<
    [_vaultId: BigNumberish, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawUnlockedCollateral"
  ): TypedContractMethod<
    [_vaultId: BigNumberish, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "CollateralAdded"
  ): TypedContractEvent<
    CollateralAddedEvent.InputTuple,
    CollateralAddedEvent.OutputTuple,
    CollateralAddedEvent.OutputObject
  >;
  getEvent(
    key: "CollateralWithdrawn"
  ): TypedContractEvent<
    CollateralWithdrawnEvent.InputTuple,
    CollateralWithdrawnEvent.OutputTuple,
    CollateralWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "StableTokenWithdrawn"
  ): TypedContractEvent<
    StableTokenWithdrawnEvent.InputTuple,
    StableTokenWithdrawnEvent.OutputTuple,
    StableTokenWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "VaultCleansed"
  ): TypedContractEvent<
    VaultCleansedEvent.InputTuple,
    VaultCleansedEvent.OutputTuple,
    VaultCleansedEvent.OutputObject
  >;
  getEvent(
    key: "VaultCollateralized"
  ): TypedContractEvent<
    VaultCollateralizedEvent.InputTuple,
    VaultCollateralizedEvent.OutputTuple,
    VaultCollateralizedEvent.OutputObject
  >;
  getEvent(
    key: "VaultCreated"
  ): TypedContractEvent<
    VaultCreatedEvent.InputTuple,
    VaultCreatedEvent.OutputTuple,
    VaultCreatedEvent.OutputObject
  >;

  filters: {
    "CollateralAdded(bytes32)": TypedContractEvent<
      CollateralAddedEvent.InputTuple,
      CollateralAddedEvent.OutputTuple,
      CollateralAddedEvent.OutputObject
    >;
    CollateralAdded: TypedContractEvent<
      CollateralAddedEvent.InputTuple,
      CollateralAddedEvent.OutputTuple,
      CollateralAddedEvent.OutputObject
    >;

    "CollateralWithdrawn(uint256,address,uint256)": TypedContractEvent<
      CollateralWithdrawnEvent.InputTuple,
      CollateralWithdrawnEvent.OutputTuple,
      CollateralWithdrawnEvent.OutputObject
    >;
    CollateralWithdrawn: TypedContractEvent<
      CollateralWithdrawnEvent.InputTuple,
      CollateralWithdrawnEvent.OutputTuple,
      CollateralWithdrawnEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "StableTokenWithdrawn(uint256,address,uint256)": TypedContractEvent<
      StableTokenWithdrawnEvent.InputTuple,
      StableTokenWithdrawnEvent.OutputTuple,
      StableTokenWithdrawnEvent.OutputObject
    >;
    StableTokenWithdrawn: TypedContractEvent<
      StableTokenWithdrawnEvent.InputTuple,
      StableTokenWithdrawnEvent.OutputTuple,
      StableTokenWithdrawnEvent.OutputObject
    >;

    "VaultCleansed(uint256,address,uint256)": TypedContractEvent<
      VaultCleansedEvent.InputTuple,
      VaultCleansedEvent.OutputTuple,
      VaultCleansedEvent.OutputObject
    >;
    VaultCleansed: TypedContractEvent<
      VaultCleansedEvent.InputTuple,
      VaultCleansedEvent.OutputTuple,
      VaultCleansedEvent.OutputObject
    >;

    "VaultCollateralized(uint256,uint256,address,uint256)": TypedContractEvent<
      VaultCollateralizedEvent.InputTuple,
      VaultCollateralizedEvent.OutputTuple,
      VaultCollateralizedEvent.OutputObject
    >;
    VaultCollateralized: TypedContractEvent<
      VaultCollateralizedEvent.InputTuple,
      VaultCollateralizedEvent.OutputTuple,
      VaultCollateralizedEvent.OutputObject
    >;

    "VaultCreated(uint256,address)": TypedContractEvent<
      VaultCreatedEvent.InputTuple,
      VaultCreatedEvent.OutputTuple,
      VaultCreatedEvent.OutputObject
    >;
    VaultCreated: TypedContractEvent<
      VaultCreatedEvent.InputTuple,
      VaultCreatedEvent.OutputTuple,
      VaultCreatedEvent.OutputObject
    >;
  };
}
