<script lang="ts" setup>
import { ref } from 'vue';
import { store } from '../../store/store';

// Emits
const emit = defineEmits<{
    (e: 'changed', value: boolean): void
}>()

// Refs
let value = ref(false)

function valueChanged() {
    emit('changed', value.value)
}
</script>
    
<template>
    <div class="switch-wrapper">
        <label class="switch">
            <input @change="valueChanged" v-model="value" type="checkbox" name="slider">
            <span class="slider" :class="{'slider--dark': store.darkmode}"></span>
        </label>
    </div>
</template>

<style lang="css" scoped>
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--white-dark);
        transition: all 200ms ease-in-out;
        border: var(--black-dark) 2px solid;
        border-radius: 5px;
        box-shadow: var(--black-dark) 3px 3px 0;

        &.slider--dark {
            background-color: var(--black-light);
        }
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        top: -5px;
        left: -5px;
        background-color: var(--white);
        transition: all 200ms ease-in-out;
        border: var(--black-dark) 2px solid;
        border-radius: 5px;
        box-shadow: var(--black-dark) 1px 1px 0;
    }

    input:checked + .slider {
        background-color: var(--primary-light-darker);

        &.slider--dark {
            background-color: var(--primary-dark);
        }
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }
</style>