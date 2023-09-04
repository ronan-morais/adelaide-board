// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  { name: "posts", columns: [] },
  { name: "product-categories", columns: [{ name: "title", type: "string" }] },
  { name: "users", columns: [] },
  { name: "service-categories", columns: [{ name: "Title", type: "string" }] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes["posts"];
export type PostsRecord = Posts & XataRecord;

export type ProductCategories = InferredTypes["product-categories"];
export type ProductCategoriesRecord = ProductCategories & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type ServiceCategories = InferredTypes["service-categories"];
export type ServiceCategoriesRecord = ServiceCategories & XataRecord;

export type DatabaseSchema = {
  posts: PostsRecord;
  "product-categories": ProductCategoriesRecord;
  users: UsersRecord;
  "service-categories": ServiceCategoriesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Adelaide-Boards-6mppfj.us-east-1.xata.sh/db/adelaide-boards",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
