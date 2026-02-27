export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL || PokeAPI.baseURL + "/location-area";
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result = await response.json();
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

  async fetchLocation(locationName: string): Promise<Location> {
    const locAreaExtension = "/location-area"
    const fullUrl = PokeAPI.baseURL + locAreaExtension;
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result = await response.json();
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
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: any;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};