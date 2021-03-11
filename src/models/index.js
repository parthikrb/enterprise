// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Designation = {
  "DEVELOPER": "developer",
  "QUALITYANALYST": "qualityanalyst",
  "BUSINESSANALYST": "businessanalyst",
  "PRODUCTOWNER": "productowner",
  "SCRUMMASTER": "scrummaster",
  "MANAGER": "manager"
};

const Status = {
  "ACTIVE": "active",
  "INACTIVE": "inactive"
};

const { User, Squad, S3Object } = initSchema(schema);

export {
  User,
  Squad,
  Designation,
  Status,
  S3Object
};