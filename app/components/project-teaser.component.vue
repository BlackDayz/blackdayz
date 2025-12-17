<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-wrap justify-center items-center gap-16">
            <ProjectBoxAtom
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
            />
        </div>
        <SecondaryButtonAtom
            :text="useT('project.teaser.showMore')"
            @click="showMore"
        />
    </div>
</template>

<script lang="ts" setup>
import projectData from '~~/shared/utils/projects';

const maxProjectsToShow = ref(4);

const projects = computed(() => {
    if (!window) {
        return [];
    }

    return window.innerWidth > 1024 ? projectData.slice(0, maxProjectsToShow.value) : projectData.slice(0, maxProjectsToShow.value - 2);
});

function showMore() {
    maxProjectsToShow.value += 4;
}
</script>
