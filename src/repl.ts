import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    const words = input.trim().toLowerCase().split(' ').filter((word) => word !== '');
    return words;
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", (line: string) => {
        const cleanLine = cleanInput(line);
        if (cleanLine.length > 0) {
            const commandCalled = cleanLine[0];
            const allCommands = getCommands();
            let foundCommand = allCommands[commandCalled];
            if (!foundCommand) {
                console.log(`Command not found: ${commandCalled}`);
            } else {
                try {
                    foundCommand.callback(allCommands);
                } catch (err) {
                    console.log(`Error during command execution: ${err}`)
                }
            }



            // switch (commandCalled) {
            //     case "exit":
            //         commandExit();
            //         break;
            //     case "help":
            //         commandHelp();
            //         break;
            //     default:
            //         console.log(`Your command was: ${commandCalled}`);
            //         break;
            // }
        }
        rl.prompt();
    })
}