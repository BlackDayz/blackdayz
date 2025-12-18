<template>
    <div class="mx-2 lg:mx-0">
        <div class="mb-14 flex justify-center">
            <H4Atom :text="useT('contact.title')" />
        </div>
        <div>
            <p class="text-center">
                {{ useT('contact.description') }}
            </p>
        </div>
        <div class="flex justify-center mt-5">
            <SecondaryButtonAtom
                icon="mdi:email"
                :text="useT('contact.button.email')"
                class="flex py-3"
                :href="'mailto:' + useT('contact.email')"
            />
        </div>
    </div>
</template>
