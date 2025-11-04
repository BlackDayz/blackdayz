<template>
    <div class="flex flex-wrap justify-center gap-16">
        <div
            v-for="client in clients"
            :key="client.name"
            class="flex flex-col items-center"
            style="width: 200px"
        >
            <NuxtLink
                :href="client.link"
                target="_blank"
            >
                <div
                    class="flex items-center justify-center"
                    style="height: 200px; width: 200px"
                >
                    <NuxtImg
                        :src="client.image"
                        :alt="client.name"
                        class="border-none rounded-none object-contain w-full h-full"
                    />
                </div>
                <p class="text-center font-bold text-lg text-gray-900 mt-2">
                    {{ client.name }}
                </p>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { clients } = defineProps<{
    clients: ClientShowcaseInterface[];
}>();
</script>
