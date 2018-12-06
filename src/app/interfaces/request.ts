import {Clothes} from "./clothes";

export interface Request {
  date: number;
  preparedBy: String;
  reviewedBy: String;
  clothes: Clothes[] ;
  others: String[];
}
