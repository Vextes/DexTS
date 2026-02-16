import { CLICommand, getCommands } from "./commands.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (const key in commands) {
        console.log(`${key}: ${commands[key].description}`)
    }
};