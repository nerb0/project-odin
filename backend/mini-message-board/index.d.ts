import { Children } from "@kitajs/html";

declare global {
  namespace JSX {
    type ComponentProps<T = {}> = Omit<JSX.HtmlTag, "children"> & {
      children?: Children;
    } & T;
    type Component<T = {}> = (props: ComponentProps<T>) => JSX.Element;
  }
}

export default {};
