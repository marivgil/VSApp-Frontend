import {Clothes} from "./clothes";

export interface Request {
  round: String;
  date: String;
  preparedBy: String;
  reviewedBy: String;
  clothes: Clothes[] ;
}
