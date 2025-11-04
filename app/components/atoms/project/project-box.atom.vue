<template>
    <div class="border-gray-700 border-4 w-[280px] h-[520px] blackdayz-primary-shadow rounded-[39px] flex flex-col overflow-hidden">
        <div
            class="shrink-0 p-3"
            style="height: 60%"
        >
            <ImageAtom
                :src="project.images[0].src"
                :alt="project.images[0].alt"
                height="100%"
                class="rounded-2xl object-cover border-none w-full h-full"
                :show-shadow="false"
            />
        </div>
        <div
            class="grow flex flex-col justify-between p-3 pt-0"
            style="height: 40%"
        >
            <div>
                <h3
                    class="text-black text-2xl font-bold leading-tight mx-1"
                    v-html="project.name"
                />
            </div>
            <div class="my-2">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-800"
                >
                    {{ useT(`project.tags.${tag}`) }}
                </span>
            </div>
        </div>
        <div class="mb-10 mx-3">
            <SecondaryButtonAtom
                text="Mehr anzeigen"
                class="w-full"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { project } = defineProps<{
    project: ProjectInterface;
}>();
</script>
