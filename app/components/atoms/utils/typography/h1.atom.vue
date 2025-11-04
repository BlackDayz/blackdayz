<template>
    <h1>
        <span
            v-for="(word, index) in words"
            :key="index"
            class="relative inline-block px-1"
            :class="{ 'px-3': index !== 0 && index !== words.length - 1 }"
        >
            <span class="absolute left-0 bottom-1 h-12 w-full bg-gray-500 -z-10 translate-y-3" />
            {{ word }}
        </span>
    </h1>
</template>

<script lang="ts">
export default {
    name: 'H1Atom',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    computed: {
        words() {
            return this.text.split(' ');
        }
    }
};
</script>
