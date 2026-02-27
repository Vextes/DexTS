import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const words = input.trim().toLowerCase().split(' ').filter((word) => word !== '');
    return words;
}

export async function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on("line", async (line: string) => {
        const cleanLine = cleanInput(line);
        if (cleanLine.length > 0) {
            const commandCalled = cleanLine[0];
            const allCommands = state.commands;
            let foundCommand = allCommands[commandCalled];
            if (!foundCommand) {
                console.log(`Command not found: ${commandCalled}`);
            } else {
                try {
                     await foundCommand.callback(state);
                } catch (err) {
                    console.log(`Error during command execution: ${err}`)
                }
            }
        }
        state.readline.prompt();
    })
}