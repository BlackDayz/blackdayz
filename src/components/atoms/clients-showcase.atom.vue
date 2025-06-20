<template>
    <div class="flex flex-wrap justify-center gap-16">
        <div
            v-for="client in clients"
            :key="client.name"
            class="grid gap-2"
        >
            <NuxtImg
                :src="client.image"
                :alt="client.name"
                width="200px"
                class="border-none rounded-none"
            />
            <p class="text-center font-bold text-lg text-gray-900">
                {{ client.name }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ClientsShowcaseAtom',
    props: {
        clients: {
            type: Array as PropType<ClientShowcaseInterface[]>,
            required: true
        }
    }
};
</script>
