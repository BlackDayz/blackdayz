<template>
    <div>
        <h2 class="text-gray-900 grid max-w-fit relative text-right">
            {{ mainText }}
            <!-- skipcq: JS-0693 -->
            <span
                class="text-gray-900 font-bold text-2xl before:content['_'] before:w-full before:block before:bg-gray-900 before:h-1 text-right leading-5"
                v-html="subtextArray"
            />
            <span class="text-gray-900 font-bold text-lg [writing-mode:vertical-lr] absolute -right-7">{{ verticalText }}</span>
        </h2>
    </div>
</template>

<script lang="ts">
export default {
  name: 'StatisticsVerticalAtom',
  props: {
    mainText: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: true,
    },
    verticalText: {
      type: String,
      required: true,
    }
  },
  computed: {
    subtextArray() {
      return this.subText.split(' ').join('<br />');
    },
  },
};
</script>