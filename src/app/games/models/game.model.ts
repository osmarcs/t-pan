export class GameModel {
  id: number;
  name: string;
  popularity: number;
  viewers: number;
  channels: number;
  box: {
    large: string,
    medium: string,
    small: string,
    template: string
  };
}
