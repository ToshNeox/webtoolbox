import { LitElement } from "lit";

export class NoShadowRootLitElement extends LitElement {
    public createRenderRoot(): Element | ShadowRoot {
        return this;
    }
}