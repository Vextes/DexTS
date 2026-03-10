import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length === 0) {
        console.log(`Please enter a pokemon name or id to attempt to catch.`);
        return;
    }
    const pkmnToCatch = args[0];
    const foundPokemon = await state.pokeapi.encounterPokemon(pkmnToCatch);
    console.log(`Throwing a Pokeball at ${foundPokemon.name}...`);
    let catchChance = (256 - foundPokemon.base_experience) / 256;
    catchChance = catchChance > 0.05 ? catchChance : 0.05;
    const isCaught = Math.random() < catchChance;
    if (isCaught) {
        state.pokedex[foundPokemon.name] = foundPokemon;
        console.log(`${foundPokemon.name} was caught!`);
        return;
    }
    console.log(`${foundPokemon.name} escaped!`);
};