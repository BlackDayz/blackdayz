<template>
    <UButton
        @click="$emit('onClick', $event)"
    >
        {{ text }}
    </UButton>
</template>

<script lang="ts">
export default {
    name: 'PrimaryButtonAtom',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    emits: ['onClick'],
};
</script>
