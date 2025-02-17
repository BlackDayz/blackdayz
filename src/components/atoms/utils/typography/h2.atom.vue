<template>
    <h2>
        <span
            v-for="(word, index) in words"
            :key="index"
            class="relative inline-block px-1"
            :class="{ 'px-3': (index !== 0 && index !== words.length - 1)|| words.length <= 2 }"
        >
            <span class="absolute left-0 bottom-1 h-12 w-full bg-primary-500 -z-10 translate-y-6" />
            {{ word }}
        </span>
    </h2>
</template>

<script lang="ts">
export default {
  name: 'H2Atom',
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