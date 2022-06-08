import { html, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { NoShadowRootLitElement } from '../classes/utils/no-shadow-root-lit-element';

@customElement('tool-results')
export class ToolResultsComponent extends NoShadowRootLitElement {
    public render(): HTMLTemplateResult {
        return html`<p>Filters</p>`;
    }
}