import {Round} from "./Round";
import {Request} from "./request";
import {Coord} from "./Coord";

export interface WeeklyRound {

  description: String;
  sinceHour: String;
  untilHour: String;
  currentCoords: Coord;
  request: Request;
  round: Round;
}
