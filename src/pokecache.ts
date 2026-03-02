export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    };

    add<T>(key: string, val: T): void {
        const newEntry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val
        }
        this.#cache.set(key, newEntry);
    };

    get<T>(key: string) {
        return this.#cache.get(key)?.val as T;
    };

    #reap() {
        const currDateTime = Date.now();
        for (let [key, val] of this.#cache) {
            if (currDateTime - this.#interval >= val.createdAt) {
                this.#cache.delete(key);
            }
        }
    };

    #startReapLoop() {
        this.#reapIntervalId = setInterval(
            () => {this.#reap();},
            this.#interval
        );
    };

    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    };
};