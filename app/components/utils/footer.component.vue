<template>
    <UFooter>
        <template #left>
            <span
                v-text="useT('footer.copyright', {
                    year: new Date().getFullYear(),
                })"
            />
        </template>

        <UNavigationMenu
            :items="links"
            variant="link"
        />

        <template #right>
            <UButton
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
                to="https://github.com/Mittelblut9"
                target="_blank"
            />
            <UButton
                icon="i-simple-icons-instagram"
                color="neutral"
                variant="ghost"
                to="https://instagram.com/blackdayz_de"
                target="_blank"
            />
        </template>
    </UFooter>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const links: NavigationMenuItem[] = [
    {
        label: 'Impressum',
        to: '/impressum',
    },
    {
        label: 'Datenschutz',
        to: '/datenschutz',
    },
];
</script>
