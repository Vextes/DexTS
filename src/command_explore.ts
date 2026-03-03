import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]) {
    console.log(`start exp cmd: ${args}`)
    if (args.length === 0) {
        console.log(`Please enter a location name or id to explore.`);
        return;
    }
    const exploreLocName = args[0]
    const DeepLocation = await state.pokeapi.fetchLocation(exploreLocName);
    console.log(`Exploring ${DeepLocation.location.name}...`);
    console.log(`Found Pokemon:`);
    for (const pokeEncounter of DeepLocation.pokemon_encounters) {
        console.log(`- ${pokeEncounter.pokemon.name}`);
    }
}