<template>
    <div class="mb-10">
        <UHeader
            :ui="{
                root: 'border-none my-5 bg-transparent',
                container: 'flex items-center justify-between gap-3 h-[--header-height] max-w-[--header-width] mx-auto px-0 sm:px-0 lg:px-0',
            }"
        >
            <UNavigationMenu
                :items="links"
                :ui="{
                    item: 'px-1 py-[0.2rem] rounded-lg border border-gray-500 mx-3 transition-all duration-200 blackdayz-secondary-shadow',
                }"
            />

            <template #right>
                <UNavigationMenu
                    :items="contactLink"
                />
            </template>
        </UHeader>
        <SpacerLinesAtom :short-lines="true" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'HeaderComponent',
    data() {
        return {
            links: [
                {
                    label: useT('header.links.example.label'),
                    icon: useT('header.links.example.icon'),
                    to: useT('header.links.example.to')
                },
                {
                    label: useT('header.links.example.label'),
                    icon: useT('header.links.example.icon'),
                    to: useT('header.links.example.to')
                },
            ],
            contactLink: [
                {
                    label: useT('header.links.example.label'),
                    icon: useT('header.links.example.icon'),
                    to: useT('header.links.example.to')
                },
            ],
        };
    }
};
</script>

<style lang="scss">
header {
    a {
        @apply text-gray-500 !important;
    }

    ul li {
        box-shadow: 2px 2px 0 var(--color-gray-500);

        ::before {
            background-color: transparent;
        }

        &:hover {
            box-shadow: 4px 4px 0 var(--color-gray-500);
            transform: translate(-2px, -2px);
        }
    }
}
</style>
