<template>
    <div class="grid lg:grid-cols-2 justify-center items-center sm:mx-10 xl:mx-44">
        <div class="flex">
            <h3 class="h1 text-right">
                Über mich
            </h3>
            <p class="mt-8 leading-5 ms-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
        </div>
        <div class="flex justify-center">
            <div>
                <ImageAtom
                    src="https://cdn-homepage.blackdayz.de/api/cdn/download/images/AboutMe.jpg"
                    alt="About us"
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
