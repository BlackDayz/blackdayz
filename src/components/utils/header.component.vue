<template>
    <div class="mb-10">
        <UHeader
            :ui="{
                root: 'border-none my-5 bg-transparent',
                container: 'flex items-center justify-between gap-3 h-[--header-height] max-w-[--header-width] mx-auto px-0 sm:px-0 lg:px-0',
            }"
        >
            <template #left>
                <NuxtImg
                    width="130"
                    class="rounded-none cursor-pointer border-none"
                    :src="logoLink"
                    alt="BlackDayz Logo"
                    @click="() => $router.push('/')"
                />
            </template>
            <UNavigationMenu
                :items="links"
                :ui="{
                    item: 'px-1 py-[0.2rem] rounded-lg border border-gray-500 mx-3 transition-all duration-200 blackdayz-secondary-shadow',
                }"
            />

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
const logoLink = 'https://fra.cloud.appwrite.io/v1/storage/buckets/6879aa0700302514c676/files/6879aa1500097ff11605/preview?project=6879a9e8002c737fb9b7&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjg3OWFhMWMxZjk4OGI2YTU3MTUiLCJyZXNvdXJjZUlkIjoiNjg3OWFhMDcwMDMwMjUxNGM2NzY6Njg3OWFhMTUwMDA5N2ZmMTE2MDUiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjI2NTMyOjEiLCJleHAiOjkuMjIzMzcyMDM4NjA3NThlKzE4fQ.JBQkbXIi_MIKodBOv2LxNnciLHOeqtUkPafQpX7RFHQ';

const links = [
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
];

const contactLink = [
    {
        label: useT('header.links.example.label'),
        icon: useT('header.links.example.icon'),
        to: useT('header.links.example.to')
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
