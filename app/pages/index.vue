<template>
    <div class="grid gap-16 lg:gap-0 lg:flex items-center mt-20">
        <div class="lg:w-1/2 grid gap-6">
            <H1Atom :text="useT('top.title')" />
            <PAtom :text="useT('top.description')" />
            <div class="grid w-full sm:flex gap-4 mt-9 text-center">
                <NuxtLink to="#homepage-contact">
                    <PrimaryButtonAtom
                        :text="useT('top.buttons.contact')"
                    />
                </NuxtLink>
                <NuxtLink to="#homepage-about">
                    <PrimaryButtonAtom
                        :text="useT('top.buttons.about')"
                    />
                </NuxtLink>
            </div>
        </div>
        <div class="lg:w-1/2">
            <ImageAtom
                src="/img/about/Lutzi_Htnh_BENE_BTS.jpg"
                alt="Image"
                height="full"
                width="full"
            />
        </div>
    </div>
    <!-- <div class="h-56 grid items-center">
        <SpacerLinesAtom />
    </div>

    <div class="flex justify-center">
        <ObsVideoComponent />
    </div> -->

    <div class="h-56 grid items-center">
        <SpacerLinesAtom />
    </div>

    <div class="grid gap-40">
        <div class="flex">
            <StatisticsComponent />
        </div>

        <div class="flex justify-center">
            <TrustedByComponent />
        </div>
    </div>

    <div class="h-56 grid items-center">
        <SpacerLinesAtom />
    </div>

    <div>
        <ProjectTeaserComponent />
    </div>

    <div
        id="homepage-about"
        class="my-48"
    >
        <AboutComponent />
    </div>

    <div class="h-20 grid items-center">
        <SpacerLinesAtom />
    </div>

    <div
        id="homepage-contact"
        class="my-48"
    >
        <div class="grid justify-center">
            <ContactComponent />
        </div>
    </div>

    <div class="h-20 grid items-center">
        <SpacerLinesAtom />
    </div>
</template>
