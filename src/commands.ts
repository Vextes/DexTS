import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandPokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Prints program information",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the next 20 locations from the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the last 20 locations from the Pokemon world",
            callback: commandMapBack,
        },
        explore: {
            name: "explore (location name/id)",
            description: "Displays pokemon found in a given location",
            callback: commandExplore,
        },
        catch: {
            name: "catch (pokemon name/id)",
            description: "Attempts to catch a given Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect (pokemon name)",
            description: "Returns pokemon information from the pokedex if they have been caught",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Prints out a list of all caught pokemon",
            callback: commandPokedex,
        },
    }
}