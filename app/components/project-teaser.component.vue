<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-wrap justify-center items-center gap-16">
            <ProjectBoxAtom
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
            />
        </div>
        <SecondaryButtonAtom text="Mehr anzeigen" />
    </div>
</template>

<script lang="ts" setup>
import projectData from '~~/shared/utils/projects';

const projects = computed(() => {
    if (!window) {
        return [];
    }

    return window.innerWidth > 1024 ? projectData.slice(0, 4) : projectData.slice(0, 2);
});
</script>
