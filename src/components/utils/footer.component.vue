<template>
    <UFooter :links="links">
        <template #left>
            <span
                v-text="useT('footer.copyright', {
                    year: new Date().getFullYear(),
                })"
            />
        </template>

        <template #right>
            <UColorModeButton />
            <UButton
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
                to="https://github.com/Mittelblut9"
                target="_blank"
            />
        </template>
    </UFooter>
</template>

<script lang="ts">
export default {
    name: 'FooterComponent',
    data() {
        return {
            links: [
                {
                    label: useT('header.links.example.label'),
                    icon: useT('header.links.example.icon'),
                    to: useT('header.links.example.to')
                },
            ]
        };
    }
};
</script>
