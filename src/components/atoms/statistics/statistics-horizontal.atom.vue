<template>
    <div>
        <span class="h3 grid relative max-w-52 leading-14">
            {{ mainText }}
            <span
                v-if="topText"
                class="font-bold text-lg absolute -top-5"
                v-text="topText"
            />
            <span
                class="font-bold text-2xl before:content['_'] before:w-full before:block before:bg-gray-900 before:h-1 leading-6"
                v-text="subText"
            />
        </span>
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticsHorizontalAtom',
    props: {
        mainText: {
            type: String,
            required: true
        },
        subText: {
            type: String,
            required: true
        },
        topText: {
            type: String,
            required: false,
            default: ''
        }
    }
};
</script>
