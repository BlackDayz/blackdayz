<template>
    <UButton
        class="blackdayz-primary-shadow text-white"
        @click="emit('onClick', $event)"
    >
        {{ text }}
    </UButton>
</template>

<script lang="ts" setup>
const { text } = defineProps<{
    text: string;
}>();

const emit = defineEmits<{
    (e: 'onClick', event: MouseEvent): void;
}>();
</script>
