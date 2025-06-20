<template>
    <div class="border-gray-700 border-4 p-3 pb-8 w-[270px] blackdayz-primary-shadow rounded-[39px] grid">
        <NuxtImg
            :src="project.images[0].src"
            :alt="project.images[0].alt"
            class="rounded-2xl h-64 object-cover border-none"
        />
        <div class="my-3">
            <span
                class="text-black text-2xl font-bold"
                v-html="project.name"
            />
        </div>
        <SecondaryButtonAtom text="Mehr anzeigen" />
    </div>
</template>

<script lang="ts" setup>
const { project } = defineProps<{
    project: ProjectInterface;
}>();
</script>
