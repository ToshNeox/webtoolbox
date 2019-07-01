<template>
    <article>
        <!-- Filters -->
        <section>
            <filters @filters-updated="filtersUpdated"></filters>
        </section>

        <!-- Tools -->
        <section>
            <div class="container">
                <h2>Tools</h2>

                <!-- Iterate over visible tools -->
                <div class="columns is-multiline">
                    <div
                        class="column is-one-quarter"
                        v-for="tool in getTools"
                        v-bind:key="tool.title">
                        <tool :tool-data="tool"></tool>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    import filters from './filters.vue';
    import tool from './tool.vue';
    import tools from './tools.json';

    export default Vue.extend({
        components: {
            'filters': filters,
            'tool': tool
        },
        data() {
            return {
                filters: [],
                tools: tools
            };
        },
        computed: {
            // Returns the filtered tools array to show
            getTools: function() {
                // Ignore filter if empty
                if (this.filters.length === 0) {
                    return this.tools;
                }

                // Collect active filters
                const activeFilters = this.filters.map(filter => filter.key);

                // Filter out tools that don't match filters
                const toolsToShow = this.tools.filter((tool) => {
                    const tags = tool.tags;

                    let matches = 0;

                    // Iterate over tool's tags and count matches
                    tags.forEach((tag) => {
                        if (activeFilters.indexOf(tag) !== -1) {
                            matches += 1;
                        }
                    });

                    // Hide tool if there were no matches, otherwise show
                    return matches > 0 ? true : false;
                });

                return toolsToShow;
            },
            // Returns the number of tools to show
            getNumTools: function() {
                return this.getTools.length;
            }
        },
        methods : {
            filtersUpdated: function(filters) {
                // Update local filters array
                this.filters = filters;
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>