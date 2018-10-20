import {Clothes} from "./clothes";

export interface Request {
  date: String;
  preparedBy: String;
  reviewedBy: String;
  clothes: Clothes[] ;
}
