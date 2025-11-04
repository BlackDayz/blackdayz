<template>
    <UButton
        class="cursor-pointer"
        color="secondary"
        :icon="icon"
        @click="emit('onClick', $event)"
    >
        {{ text }}
    </UButton>
</template>

<script lang="ts" setup>
const { text, icon } = defineProps<{
    text: string;
    icon?: string;
}>();

const emit = defineEmits<{
    (e: 'onClick', event: MouseEvent): void;
}>();
</script>
