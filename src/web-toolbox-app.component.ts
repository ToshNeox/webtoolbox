import { html, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { NoShadowRootLitElement } from './classes/utils/no-shadow-root-lit-element';
import './components/tool-filters.component';
import { ToolFiltersComponent } from './components/tool-filters.component';
import './components/tool-results.component';
import { ToolResultsComponent } from './components/tool-results.component';
import './index.scss';

@customElement('web-toolbox-app')
export class WebToolboxAppComponent extends NoShadowRootLitElement {
    public render(): HTMLTemplateResult {
        return html`<div class="container mx-auto">
            <h1 class="text-6xl">The Web Toolbox</h1>

            <h2 class="text-4xl">Filters</h2>
            <tool-filters></tool-filters>

            <h2 class="text-4xl">Tools</h2>
            <tool-results></tool-results>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-toolbox-app': WebToolboxAppComponent,
        'tool-filters': ToolFiltersComponent,
        'tool-results': ToolResultsComponent
    }
}
