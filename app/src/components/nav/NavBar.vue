<script lang="ts" setup>
import { ref } from 'vue';
import ToggleInput from '../inputs/ToggleInput.vue';

// Emits
const emit = defineEmits<{
    (e: 'toggleDarkmode', value: boolean): void
}>()

// Refs
const open = ref(false)

// Functions
function toggleDarkmode(value: boolean) {
    emit('toggleDarkmode', value)
}
</script>

<template>
    <header>
        <nav class="nav">
            <div class="toolbar">
                <div class="nav-left-wrapper">
                    <button @click="open = true" class="dropdown-button">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
                <div class="nav-right-wrapper">
                    <ToggleInput @changed="toggleDarkmode" />
                </div>
            </div>
    
        </nav>
        <Transition name="menu">
            <ul class="nav-menu" v-if="open">
                <div @click="open = false">Close</div>
                <RouterLink class="nav-item" to="/">Home</RouterLink>
                <RouterLink class="nav-item" to="/about">About</RouterLink>
            </ul>
        </Transition>
    </header>
</template>

<style lang="css" scoped>
    .nav {
        background-color: var(--primary-light);
        padding: 15px 10px
    }
    .nav-menu {
        background-color: var(--white);
        z-index: 2;

        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        position: fixed;
        left: 0;
        top: 0;
        padding: 20px 0;
        margin: 0;

        .nav-item {
            width: 100%;
            text-align: center;
            text-decoration: none;
            font-size: 20px;
            color: var(--black);

            &:hover {
                color: var(--primary-light-darker);
            }
        }
    }

    .nav-left-wrapper {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
    .nav-right-wrapper {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .dropdown-button {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;

        &:hover {
            .bar {
                background-color: var(--primary-light-darker);
            }
        }

        .bar {
            width: 34px;
            height: 2px;
            background-color: var(--white);
            border-radius: 5px;
            transition: all 200ms ease-in-out;
            border: 3px var(--black-dark) solid;
            box-shadow: var(--black-dark) 3px 3px 0;
        }
    }

    .toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .menu-enter-active,
    .menu-leave-active {
        transition: left 200ms ease;
    }   
    .menu-enter-from,
    .menu-leave-to {
        left: -300px;
    }
</style>