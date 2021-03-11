import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Designation {
  DEVELOPER = "developer",
  QUALITYANALYST = "qualityanalyst",
  BUSINESSANALYST = "businessanalyst",
  PRODUCTOWNER = "productowner",
  SCRUMMASTER = "scrummaster",
  MANAGER = "manager"
}

export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class User {
  readonly id: string;
  readonly firstname: string;
  readonly lastname?: string;
  readonly username?: string;
  readonly password?: string;
  readonly email?: string;
  readonly role?: Designation | keyof typeof Designation;
  readonly picture?: S3Object;
  readonly status?: Status | keyof typeof Status;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Squad {
  readonly id: string;
  readonly squadname: string;
  readonly productowner?: (User | null)[];
  readonly scrummaster?: (User | null)[];
  readonly scrumteam?: (User | null)[];
  readonly velocity?: number;
  readonly status?: Status | keyof typeof Status;
  readonly createdby?: string;
  readonly updatedby?: string;
  constructor(init: ModelInit<Squad>);
  static copyOf(source: Squad, mutator: (draft: MutableModel<Squad>) => MutableModel<Squad> | void): Squad;
}