<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-wrap justify-center items-center gap-16">
            <ProjectBoxAtom
                v-for="project in projects"
                :key="project.projectId"
                :project="project"
            />
        </div>
        <SecondaryButtonAtom text="Mehr anzeigen" />
    </div>
</template>

<script lang="ts" setup>
import * as projectData from '~/public/projects';

const projects = computed(() => {
    if (!window) {
        return [];
    }

    return window.innerWidth > 1024 ? projectData.default.slice(0, 4) : projectData.default.slice(0, 2);
});
</script>
