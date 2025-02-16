<template>
    <div>
        <div class="grid lg:flex items-center h-[37vh]">
            <div class="lg:w-1/2 grid gap-6">
                <H1Atom :text="text" />
                <PAtom :text="text" />
                <div class="grid w-full sm:flex gap-4 mt-9 text-center">
                    <PrimaryButtonAtom
                        text="Button"
                        @on-click="console.log('es')"
                    />
                    <PrimaryButtonAtom
                        text="Button"
                        @on-click="console.log('es')"
                    />
                </div>
            </div>
            <div class="lg:w-1/2">
                <ImageAtom
                    src="https://i.ytimg.com/vi/KSpwlGWD51s/maxresdefault.jpg"
                    alt="Image"
                />
            </div>
        </div>
        <div class="h-56 grid items-center">
            <SpacerLinesAtom />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            text: 'Lorem ipsum dolor sit amet'
        };
    },

};
</script>
