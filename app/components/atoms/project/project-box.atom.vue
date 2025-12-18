<template>
    <div class="border-gray-700 border-4 w-[280px] h-[520px] blackdayz-primary-shadow rounded-[39px] flex flex-col overflow-hidden">
        <div
            class="shrink-0 p-3"
            style="height: 55%"
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
            class="grow flex flex-col justify-between px-3 py-1 pt-0"
            style="height: 45%"
        >
            <div>
                <h3
                    class="text-black text-2xl font-bold leading-tight mx-1"
                    v-html="project.name"
                />
                <p
                    class="text-gray-700 mb-4 mt-2 text-sm leading-normal mx-1"
                    v-html="project.teaser"
                />
            </div>
            <div class="my-2">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2 text-xs font-semibold rounded-full bg-gray-200 text-gray-800"
                >
                    {{ useT(`project.tags.${tag}`) }}
                </span>
            </div>
        </div>
        <div class="mb-10 mx-3">
            <UModal
                :title="project.name"
                :ui="{
                    content: 'max-w-3xl',
                    title: 'text-4xl',
                }"
            >
                <SecondaryButtonAtom
                    :text="useT('project.box.show')"
                    class="w-full"
                />
                <template #body>
                    <div class="space-y-4">
                        <div>
                            <span
                                v-for="tag in project.tags"
                                :key="tag"
                                class="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-800"
                            >
                                {{ useT(`project.tags.${tag}`) }}
                            </span>
                        </div>
                        <p
                            class="leading-normal"
                            v-html="project.description"
                        />
                        <div class="my-16">
                            <SpacerLinesAtom border-color="white" />
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ImageAtom
                                v-for="(image, index) in project.images"
                                :key="index"
                                :src="image.src"
                                :alt="image.alt"
                                class="rounded-2xl object-cover border-none w-full mb-4"
                                :show-shadow="false"
                            />
                        </div>
                    </div>
                </template>
            </UModal>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { project } = defineProps<{
    project: ProjectInterface;
}>();
</script>
