<template>
    <div class="grid lg:grid-cols-2 justify-center items-center sm:mx-10 xl:mx-44 px-2">
        <div class="flex flex-col lg:flex-row">
            <h3
                class="h1 text-left lg:text-right leading-20"
                v-html="useT('about.title')"
            />
            <p
                class="mt-8 leading-normal ms-2"
                v-html="useT('about.description')"
            />
        </div>
        <div class="flex justify-center mt-10 lg:mt-0">
            <div>
                <ImageAtom
                    src="eda3f555-3740-4b42-02e5-4e3b50c3f200"
                    alt="About me"
                    class="w-[320px]! h-[450px] object-cover"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AboutComponent',
};
</script>
