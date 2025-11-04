<template>
    <NuxtImg
        :src="src"
        :alt="alt"
        class="blackdayz-primary-shadow w-full"
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
    },
};
</script>
