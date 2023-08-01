import { Project, Todo } from "../classes";

export {};

declare global {
	interface ITodo extends Todo { }
	interface IProject extends Project { }
}
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}
