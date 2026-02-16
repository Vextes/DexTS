import { createInterface } from "node:readline";

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
            console.log(`Your command was: ${cleanLine[0]}`);
        }
        rl.prompt();
    })
}