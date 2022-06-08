import { html, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { NoShadowRootLitElement } from './classes/utils/no-shadow-root-lit-element';
import './components/tool-filters.component';
import { ToolFiltersComponent } from './components/tool-filters.component';
import './index.scss';

@customElement('web-toolbox-app')
export class WebToolboxAppComponent extends NoShadowRootLitElement {
    public render(): HTMLTemplateResult {
        return html`<div class="container mx-auto">
            The Web Toolbox

            <h1>Filters</h1>
            <tool-filters></tool-filters>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-toolbox-app': WebToolboxAppComponent,
        'tool-filters': ToolFiltersComponent
    }
}
