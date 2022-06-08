import { html, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { NoShadowRootLitElement } from '../classes/utils/no-shadow-root-lit-element';

@customElement('tool-filters')
export class ToolFiltersComponent extends NoShadowRootLitElement {
    private _renderButton(): HTMLTemplateResult {
        return html`<div class="text-white bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-full flex flex-shrink-1 cursor-pointer">Typography</div>`;
    }

    public render(): HTMLTemplateResult {
        return html`<div class="flex">
            ${this._renderButton()}
        </div>`;
    }
}