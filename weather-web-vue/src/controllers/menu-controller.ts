import { ref } from 'vue';

/* Basic toggle function to open and close the menu(navBar) in all views */
export const toggle = (type: string | null) => {
    opened.value = (opened.value == type ? null : type);
};

export const opened = ref<string | null>(null);