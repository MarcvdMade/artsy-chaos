<script lang="ts" setup>
import { useTemplateRef } from 'vue';
import { store } from '../../store/store';

// Template refs
const canvas = useTemplateRef('canvas')

// Functions
function snow() {
// implement canvas snow

}

</script>

<template>
    <div class="hero" :class="{ 'hero--dark': store.darkmode }">
        <canvas ref="canvas" />
    </div>
</template>

<style lang="css" scoped>
    .hero {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: var(--white);
        transition: color 200ms ease-in-out, background-color 200ms ease-in-out;

        &.hero--dark {
            background-color: var(--black);
        }

        canvas {
            position: absolute;
            top: 0;
            height: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>