<template>
        <span :class="getClasses" v-on:click="selectFilter">{{ filterData.name }}</span>
    
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {}
        },
        props: {
            'filterData': Object,
            'anySelected': Boolean
        },
        computed: {
            // Get a list of classes for this 
            getClasses: function() {
                let classes = {
                    'button': true,
                    'is-primary': true,
                    'is-rounded': true
                }

                // If no filters are selected, show all in colour
                if (!this.anySelected) {
                    classes['is-outlined'] = false;
                }
                // If some are selected, but not this one, show in outline
                else if (this.anySelected && !this.filterData.selected) {
                    classes['is-outlined'] = true;
                }
                // If this is selected, show in colour
                else if (this.filterData.selected) {
                    classes['is-outlined'] = false;
                }

                return classes;
            }
        },
        methods: {
            selectFilter: function() {
                // DEBUG
                console.log('Filter selected', this.filterData.key);

                this.$emit('on-select', this.filterData.key);
            }
        }
    })
</script>

<style lang="scss" scoped>
    .button {
        -webkit-transition: background-color 150ms ease, color 150ms ease;
        -o-transition: background-color 150ms ease, color 150ms ease;
        transition: background-color 150ms ease, color 150ms ease;
    }
</style>
