<template>
    <NuxtImg
        :src="src"
        :alt="alt"
        :class="{
            [`h-${height}`]: height !== 'auto',
            [`w-${width}`]: width !== 'auto',
            'blackdayz-primary-shadow': showShadow,
        }"
    />
</template>

<script lang="ts">
export default {
    name: 'ImageAtom',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        height: {
            type: [String, Number],
            default: 'auto',
        },
        width: {
            type: [String, Number],
            default: 'auto',
        },
        showShadow: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
