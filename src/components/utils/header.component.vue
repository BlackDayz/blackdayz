<template>
    <div class="mb-10">
        <UHeader :links="links" :ui="{
            wrapper: 'border-none my-5',
            container: 'flex items-center justify-between gap-3 h-[--header-height] max-w-[--header-width] mx-auto px-0 sm:px-0 lg:px-0',
        }">
            <template #panel>
                <UNavigationTree :links="links" />
            </template>
            <template #right>
                <div class="header-right">
                    <UNavigationTree :links="contactLink" />
                </div>
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
                    label: useI18n().t('header.links.example.label'),
                    icon: useI18n().t('header.links.example.icon'),
                    to: useI18n().t('header.links.example.to')
                },
                {
                    label: useI18n().t('header.links.example.label'),
                    icon: useI18n().t('header.links.example.icon'),
                    to: useI18n().t('header.links.example.to')
                },
            ],
            contactLink: [
                {
                    label: useI18n().t('header.links.example.label'),
                    icon: useI18n().t('header.links.example.icon'),
                    to: useI18n().t('header.links.example.to')
                },
            ],
        };
    }
};
</script>

<style lang="scss">
header ul li,
.header-right {
    box-shadow: 2px 2px 0 rgb(var(--color-gray-500));
    padding: 0.2rem 1rem;
    @apply rounded-lg border border-gray-500 mx-3 transition-all duration-200;

    &:hover {
        box-shadow: 4px 4px 0 rgb(var(--color-gray-500));
        transform: translate(-2px, -2px);
    }
}

header a {
    @apply text-gray-500 !important;
}
</style>