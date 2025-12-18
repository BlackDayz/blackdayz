<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-wrap justify-center items-center gap-16">
            <ProjectBoxAtom
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
            />
        </div>
        <div class="flex gap-3">
            <SecondaryButtonAtom
                v-if="maxProjectsToShow <= projectData.length"
                :text="useT('project.teaser.showMore')"
                @click="showMore"
            />
            <OutlineButtonAtom
                v-if="maxProjectsToShow > defaultMaxProjectsToShow"
                :text="useT('project.teaser.showLess')"
                @click="showLess"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import projectData from '~~/shared/utils/projects';

const defaultMaxProjectsToShow = 4;
const localStorageProject = import.meta.client && localStorage.getItem('maxProjectsToShow') ? parseInt(localStorage.getItem('maxProjectsToShow') as string) : defaultMaxProjectsToShow;
const maxProjectsToShow = ref(localStorageProject < defaultMaxProjectsToShow ? defaultMaxProjectsToShow : localStorageProject);

const projects = computed(() => {
    if (!window) {
        return [];
    }

    return window.innerWidth > 1024 ? projectData.slice(0, maxProjectsToShow.value) : projectData.slice(0, maxProjectsToShow.value - 2);
});

function showMore() {
    maxProjectsToShow.value += defaultMaxProjectsToShow;
    localStorage.setItem('maxProjectsToShow', maxProjectsToShow.value.toString());
}

function showLess() {
    maxProjectsToShow.value = defaultMaxProjectsToShow;
    localStorage.setItem('maxProjectsToShow', maxProjectsToShow.value.toString());
    window.scrollTo({
        top: document.getElementById('project-teaser-anchor')?.offsetTop as number - 100,
        behavior: 'smooth',
    });
}
</script>
