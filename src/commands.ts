import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
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
            name: "explore",
            description: "Displays pokemon found in a given location",
            callback: commandExplore,
        },
    }
}