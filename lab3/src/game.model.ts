export interface Game {
    name: string;
    isDisabled: boolean;
    getGameElement(): HTMLElement;
}