<template>
    <NuxtImg
        :src="`https://imagedelivery.net/${config.cloudflareAccountId}/${src}/public`"
        :alt="alt"
        :class="{
            [`h-${height}`]: height !== 'auto',
            [`w-${width}`]: width !== 'auto',
            'blackdayz-primary-shadow': showShadow,
        }"
    />
</template>

<script lang="ts" setup>
const config = useRuntimeConfig().public;
const { src, alt, height, width, showShadow } = defineProps<{
    src: string;
    alt: string | undefined;
    height?: 'full' | 'auto' | 'screen' | number | string | undefined;
    width?: 'full' | 'auto' | number | string | undefined;
    showShadow?: boolean;
}>();
</script>
