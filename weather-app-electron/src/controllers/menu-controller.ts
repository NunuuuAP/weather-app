import { ref } from 'vue';

export const toggle = (type: string | null) => {
    opened.value = (opened.value == type ? null : type);
};

export const opened = ref<string | null>(null);