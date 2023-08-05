import CGameBoard from "../modules/PlayerBoard";
import CPlayer from "../modules/Player";
import CShip from "../modules/Ship";

export {};

declare global {
  interface PlayerBoard extends CGameBoard {}
  interface Player extends CPlayer {}
  interface Ship extends CShip {}
  type AttackResult = "HIT" | "SUNK" | "MISS" | "ALREADY ATTACKED";
  type ShipPlacementError =
    | "Ship is out of bounds"
    | "Ship already placed"
    | "There is a ship already placed here";
}
