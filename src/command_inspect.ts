import { State } from "./state";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (args.length === 0) {
        console.log(`Please enter a pokemon name to inspect`);
        return;
    }
    const inspectedPkmn = state.pokedex[args[0]];
    if (!inspectedPkmn) {
        console.log(`you have not caught that pokemon`);
        return;
    }
    console.log(`Name: ${inspectedPkmn.name}`);
    console.log(`Height: ${inspectedPkmn.height}`);
    console.log(`Weight: ${inspectedPkmn.weight}`);
    console.log(`Stats:`);
    for (const stat of inspectedPkmn.stats) {
        console.log(`\t-${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log(`Types:`);
    for (const type of inspectedPkmn.types) {
        console.log(`\t-${type.type.name}`);
    }
};