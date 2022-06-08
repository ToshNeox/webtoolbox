import { html, HTMLTemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NoShadowRootLitElement } from '../classes/utils/no-shadow-root-lit-element';
import { ITool } from '../tools';

@customElement('tool-filters')
export class ToolFiltersComponent extends NoShadowRootLitElement {
    @property({ type: Array })
    public tools: Array<ITool> = [];

    @property({ type: Array })
    public tags: Array<string> = [];

    private _renderButton(tag: string): HTMLTemplateResult {
        return html`<div class="text-white bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-full flex flex-shrink-1 cursor-pointer">
            ${tag}
        </div>`;
    }

    public render(): HTMLTemplateResult {
        return html`<div class="inline-flex flex-wrap gap-2">
            ${this.tags.map((tag: string) => this._renderButton(tag))}
        </div>`;
    }
}