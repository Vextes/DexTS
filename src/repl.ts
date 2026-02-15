export function cleanInput(input: string): string[] {
    const words = input.trim().toLowerCase().split(' ').filter((word) => word !== '');
    return words;
}