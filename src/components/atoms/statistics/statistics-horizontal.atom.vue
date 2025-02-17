<template>
    <div>
        <h2 class="text-gray-900 grid relative">
            {{ mainText }}
            <span
                v-if="topText"
                class="text-gray-900 font-bold text-lg absolute -top-5"
            >{{ topText }}</span>
            <span class="text-gray-900 font-bold text-2xl before:content['_'] before:w-full before:block before:bg-gray-900 before:h-1">{{ subText }}</span>
        </h2>
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