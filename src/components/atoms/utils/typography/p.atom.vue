<template>
  <p>{{ text }}</p>
</template>

<script lang="ts">
export default {
  name: 'PAtom',
  props: {
    text: {
      type: String,
      required: true,
    },
  }
}
</script>
