<template>
    <div class="container mx-auto w-11/12">
        <HeaderComponent />
        <UMain>
            <NuxtPage />
        </UMain>
        <FooterComponent />
        <UNotifications>
            <template #title="{ title }">
                <span v-html="title" />
            </template>

            <template #description="{ description }">
                <span v-html="description" />
            </template>
        </UNotifications>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DefaultLayout',
};
</script>