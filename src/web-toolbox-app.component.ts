import { html, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { NoShadowRootLitElement } from './classes/utils/no-shadow-root-lit-element';
import './index.scss';

@customElement('web-toolbox-app')
export class WebToolboxAppComponent extends NoShadowRootLitElement {
    public render(): HTMLTemplateResult {
        return html`<p>The Web Toolbox</p>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-toolbox-app': WebToolboxAppComponent
    }
}
