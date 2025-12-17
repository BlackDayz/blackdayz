<template>
    <div
        class="grid gap-3"
        :class="{ 'mx-32': !shortLines }"
    >
        <div
            class="justify-self-start"
            :class="{ 'w-3/5': shortLines, 'w-3/4': !shortLines }"
        >
            <hr
                :class="`border-2 border-${borderColor} rounded-lg`"
            >
        </div>
        <div
            class="justify-self-end mt-2"
            :class="{ 'w-3/5': shortLines, 'w-3/4': !shortLines }"
        >
            <hr :class="`border-2 border-${borderColor} rounded-lg`">
        </div>
    </div>
</template>

<script lang="ts" setup>
const { shortLines = false, borderColor = 'black' } = defineProps<{
    shortLines?: boolean;
    borderColor?: string;
}>();
</script>

<style lang="scss">
.spacer-lines {
  hr {
    border: 3px solid rgb(var(--color-gray-500));
    margin: 0.5rem 0;
  }
}
</style>
