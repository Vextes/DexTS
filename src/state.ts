import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export function initState(): State {
    return {
      readline: createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
      }),
      commands: getCommands(),
      pokeapi: new PokeAPI(),
      nextLocationsURL: "",
      prevLocationsURL: "",
    }
}