import { State } from "./state";

export async function commandPokedex(state: State): Promise<void> {
    console.log("Your Pokedex:")
    if (Object.keys(state.pokedex).length === 0) {
        console.log('You have not caught any pokemon');
        return;
    }
    for (const pkmn in state.pokedex) {
        console.log(`\t- ${pkmn}`);
    }
}