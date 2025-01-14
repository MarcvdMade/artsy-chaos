import { reactive } from "vue";

export const store = reactive({
    darkmode: false,
    setDarkmode(value: boolean) {
        this.darkmode = value
    }
})