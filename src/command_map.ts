import { State } from "./state";


export async function commandMap(state: State) {
    console.log();
    console.log("Location information:");
    console.log();
    const shallLocs = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    state.prevLocationsURL = shallLocs.previous;
    state.nextLocationsURL = shallLocs.next;
    for (const locArea of shallLocs.results) {
        console.log(`${locArea.name}`);
    }
    console.log();
};

export async function commandMapBack(state: State) {
    console.log();
    console.log("Location information:");
    console.log();
    const shallLocs = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    state.prevLocationsURL = shallLocs.previous;
    state.nextLocationsURL = shallLocs.next;
    for (const locArea of shallLocs.results) {
        console.log(`${locArea.name}`);
    }
    console.log();
};