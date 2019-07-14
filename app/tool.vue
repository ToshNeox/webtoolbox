<template>
    <div class="card">
        <div class="card-image">
            <figure class="image">
                <a :href="toolData.url">
                    <img :src="imageUrl" :alt="toolData.title" :title="toolData.title" class="toolImage">
                </a>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4"><a :href="toolData.url">{{ toolData.title }}</a></p>
                    <p class="subtitle is-6">
                        <div class="tags">
                            <span
                                class="tag"
                                v-for="tag in toolData.tags"
                                v-bind:key="tag">
                                {{ tag }}
                            </span>
                        </div>
                    </p>
                </div>
            </div>

            <div class="content">
                <p v-for="content in toolData.content" v-bind:key="content">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {}
        },
        props: {
            'toolData': Object
        },
        computed: {
            // Generates the image URL
            imageUrl: function() {
                const urlBase = 'images/';

                return urlBase + this.toolData.image;
            }
        }
    });
</script>

<style lang="scss" scoped>
    .card {
        .media, .tags {
            margin-bottom: 0;
        }

        .toolImage {
            min-height: 180px;
        }
    }
</style>
