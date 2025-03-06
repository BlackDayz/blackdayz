<template>
    <div class="flex flex-col justify-center items-center gap-12">
        <div class="flex flex-wrap justify-center items-center gap-16">
            <ProjectBoxAtom
                v-for="project in showProjects"
                :project="project"
            />
        </div>
        <PrimaryButtonAtom text="Mehr anzeigen" />
    </div>
</template>

<script lang="ts">
import projects from '~/public/projects';

export default {
  name: 'ProjectTeaserComponent',
  data() {
    return {
      projects: projects as ProjectInterface[],
    };
  },
  computed: {
    showProjects() {
      return window.innerWidth > 1024 ? this.projects.slice(0, 4) : this.projects.slice(0, 2);
    },
  },
};
</script>
