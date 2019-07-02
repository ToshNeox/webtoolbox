<template>
    <section class="section">
        <div class="container">
            <h2>Filters</h2>

            <div class="buttons">
                <filter-item
                    v-for="(filter, index) in filters"
                    v-bind:key="index"
                    :filter-data="filter"
                    :any-selected="anySelected"
                    @on-select="selectFilter">
                </filter-item>

                <!-- Cancel button -->
                <span
                    class="button is-danger is-rounded"
                    :disabled="isClearFiltersDisabled"
                    @click="clearFilters">Clear filters</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    import filterItem from './filterItem.vue';
    import filtersData from './filters.json';

    export default Vue.extend({
        components: {
            'filter-item': filterItem
        },
        data() {
            return {
                filters: filtersData.filters
            }
        },
        computed: {
            anySelected: function() {
                return this.selectedFilters.length === 0 ? false : true;
            },
            selectedFilters: function() {
                // Iterate over all filters and return those selected
                return this.filters.filter(val => val.selected);
            },
            // Classes for 'clear filters' button
            isClearFiltersDisabled: function() {
                return this.anySelected ? false : true;
            },

        },
        methods: {
            selectFilter: function(key) {
                // Iterate over all filters and select the given one
                this.filters.forEach((val) => {
                    if (val.key === key) {
                        val.selected = !val.selected;
                    }
                });

                // Update visible tools
                this.$emit('filters-updated', this.selectedFilters);
            },
            clearFilters: function() {
                // Iterate over all filters to deselect
                this.filters.forEach((val) => {
                    val.selected = false;
                });

                // Update visible tools
                this.$emit('filters-updated', []);
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
