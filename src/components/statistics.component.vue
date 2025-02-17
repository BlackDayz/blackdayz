<template>
    <div class="flex justify-between gap-6 w-2/3 mx-auto">
        <StatisticsHorizontalAtom
            main-text="50.000"
            sub-text="&#8960;Zuschauer"
        />
        <StatisticsVerticalAtom
            main-text="50K"
            sub-text="Während einer Gameshow"
            vertical-text="&#8960;Zuschauer"
        />
        <StatisticsHorizontalAtom
            main-text="50.000"
            sub-text="Während einer Gameshow"
            top-text="&#8960;Zuschauer"
        />
    </div>
</template>

<script lang="ts">
export default {
  name: 'StatisticsComponent',
};
</script>