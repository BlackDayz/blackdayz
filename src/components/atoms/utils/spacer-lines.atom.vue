<template>
  <div class="grid gap-3" :class="{ 'mx-32': !shortLines}">
    <div class="justify-self-start" :class="{ 'w-3/5': shortLines, 'w-3/4': !shortLines }">
      <hr class="border-[2px] border-black rounded-lg"/>
    </div>
    <div class="justify-self-end mt-2" :class="{ 'w-3/5': shortLines, 'w-3/4': !shortLines }">
      <hr class="border-[2px] border-black rounded-lg"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SpacerLinesAtom',
  props: {
    shortLines: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss">
.spacer-lines {
  hr {
    border: 3px solid rgb(var(--color-gray-500));
    margin: 0.5rem 0;
  }
}
</style>