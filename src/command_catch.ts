import { State } from "./state";

export async function commandCatch(state: State): Promise<void> {
    console.log(`Throwing a Pokeball at `);
    const shallLocs = await state.pokeapi.fetchLocations(state.nextLocationsURL);
};