import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./api_types.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
  pokedex: Record<string, Pokemon>;
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
      pokedex: {}
    }
}