import { DeepLocation, Pokemon, ShallowLocations } from "./api_types.js";
import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor() {
    const cacheInterval = 1000 * 60 * 5; // 1000ms per sec * 60 sec per min * 5 min
    this.cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL || PokeAPI.baseURL + "/location-area";

    // check if data at fullUrl is already cached
    const cacheCheck = this.cache.get<ShallowLocations>(fullUrl);
    if (cacheCheck) {
      return cacheCheck;
    }

    //data is not cached, need to fetch from API
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result: ShallowLocations = await response.json();
      this.cache.add(fullUrl, result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error(error.message);
      } else {
        console.error(error);
        throw new Error(`${error}`);
      }
    }
  }

  async fetchLocation(locationDescriptor: string): Promise<DeepLocation> {
    const locAreaExtension = `/location-area/${locationDescriptor}`;
    const fullUrl = PokeAPI.baseURL + locAreaExtension;

    // check if data at fullUrl is already cached
    const cacheCheck = this.cache.get<DeepLocation>(fullUrl);
    if (cacheCheck) {
      return cacheCheck;
    }
    //data is not cached, need to fetch from API
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result: DeepLocation = await response.json();
      this.cache.add(fullUrl, result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error(error.message);
      } else {
        console.error(error);
        throw new Error(`${error}`);
      }
    }
  }

  async encounterPokemon(pokemonDescriptor: string): Promise<Pokemon> {
    const pokemonExtension = `/pokemon/${pokemonDescriptor}`;
    const fullUrl = PokeAPI.baseURL + pokemonExtension;

    // check if data at fullUrl is already cached
    const cacheCheck = this.cache.get<Pokemon>(fullUrl);
    if (cacheCheck) {
      return cacheCheck;
    }
    //data is not cached, need to fetch from API
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result: Pokemon = await response.json();
      this.cache.add(fullUrl, result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error(error.message);
      } else {
        console.error(error);
        throw new Error(`${error}`);
      }
    }
  }
};