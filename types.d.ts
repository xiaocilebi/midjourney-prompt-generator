declare interface Showcase {
  id?: string;
  text?: string;
  uuid: string;
  height?: number;
  width?: number;
  prompt: string;
  index: number;
  author?: string;
  version?: string;
  type: "image" | "video";
  time: Date;
}

declare interface Presets {
  ar?: string;
  style?: string;
}
