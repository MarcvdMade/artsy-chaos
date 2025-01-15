<script lang="ts" setup>
import { ref } from 'vue';
import ToggleInput from '../inputs/ToggleInput.vue';
import { store } from '../../store/store';

// Refs
const open = ref(false)

// Functions
function toggleDarkmode(value: boolean) {
    store.setDarkmode(value)
}
</script>

<template>
    <nav class="nav" :class="{'nav--dark': store.darkmode}">
        <div class="nav-left-wrapper">
            <button @click="open = true" class="dropdown-button" :class="{'dropdown-button--dark': store.darkmode}">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
        <div class="nav-right-wrapper">
            <ToggleInput @changed="toggleDarkmode" />
        </div>
    </nav>
    <Transition name="menu">
        <ul class="nav-menu" :class="{'nav-menu--dark': store.darkmode}" v-if="open">
            <div @click="open = false">Close</div>
            <RouterLink class="nav-item" to="/">Home</RouterLink>
            <RouterLink class="nav-item" to="/about">About</RouterLink>
        </ul>
    </Transition>
</template>

<style lang="css" scoped>
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--primary-light);
        border-bottom: var(--primary-light) 2px solid;
        padding: 15px 10px;
        transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
        width: 100%;

        position: fixed;
        z-index: 2;

        &.nav--dark {
            background-color: var(--black);
            border-bottom: var(--primary-dark) 2px solid;
        }
    }
    .nav-menu {
        background-color: var(--white);
        transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
        position: fixed;
        &.nav-menu--dark {
            background-color: var(--black);
            .nav-item {
                color: var(--white);
                &:hover {
                    color: var(--primary-dark);
                }
            }
        }

        z-index: 3;

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

        &.dropdown-button--dark {
            &:hover {
                .bar {
                    background-color: var(--primary-dark);
                }
            }
        }

        &:hover {
            .bar {
                background-color: var(--primary-light-darker);
            }
        }

        .bar {
            width: 34px;
            height: 6px;
            background-color: var(--white);
            border-radius: 5px;
            transition: all 200ms ease-in-out;
            border: 2px var(--black-dark) solid;
            box-shadow: var(--black-dark) 3px 3px 0;
        }
    }

    .menu-enter-active,
    .menu-leave-active {
        transition: left 200ms linear;
    }   
    .menu-enter-from,
    .menu-leave-to {
        left: -300px;
    }
</style>