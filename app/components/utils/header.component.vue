<template>
    <div class="mb-10">
        <UHeader
            :ui="{
                root: 'border-none my-5 bg-transparent',
                container: 'flex items-center justify-between gap-3 h-[--header-height] max-w-[--header-width] mx-auto px-0 sm:px-0 lg:px-0',
                toggle: 'hidden',
            }"
        >
            <template #left>
                <ImageAtom
                    width="32"
                    class="rounded-none cursor-pointer border-none"
                    src="https://cdn-homepage.blackdayz.de/api/cdn/download/images/BlackDayz_Logo.png"
                    alt="BlackDayz Logo"
                    :show-shadow="false"
                    @click="() => $router.push('/')"
                />
            </template>

            <template #right>
                <UNavigationMenu
                    :items="contactLink"
                    :ui="{
                        item: 'px-1 py-[0.2rem] rounded-lg border border-gray-500 mx-3 transition-all duration-200 blackdayz-secondary-shadow',
                    }"
                />
            </template>
        </UHeader>
        <SpacerLinesAtom :short-lines="true" />
    </div>
</template>

<script lang="ts" setup>
const contactLink = [
    {
        label: useT('header.links.contact.label'),
        icon: useT('header.links.contact.icon'),
        to: useT('header.links.contact.to')
    },
];
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
