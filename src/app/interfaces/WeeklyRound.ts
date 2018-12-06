import {Round} from "./Round";
import {Request} from "./request";
import {Coord} from "./Coord";

export interface WeeklyRound {

  id: number;
  description: String;
  sinceHour: number;
  untilHour: number;
  currentCoords: Coord;
  request: Request;
  round: Round;
}
