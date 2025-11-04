<template>
    <div class="grid justify-center text-center gap-20">
        <H2Atom text="Trusted By" />
        <ClientsShowcaseAtom
            :clients="[
                {
                    image: '/img/clients/rumathra.png',
                    name: 'Rumathra',
                    link: 'https://twitch.tv/rumathra',
                },
                {
                    image: '/img/clients/htnh.svg',
                    name: 'htnh',
                    link: 'https://htnh.de',
                },
                {
                    image: '/img/clients/geilevideossos.png',
                    name: 'Geilevideossos',
                    link: 'https://twitch.tv/geilevideossos',
                },

                {
                    image: '/img/clients/trymacs.jpg',
                    name: 'Trymacs',
                    link: 'https://twitch.tv/trymacs',
                },

                {
                    image: '/img/clients/chefstrobel.jpg',
                    name: 'Chefstrobel',
                    link: 'https://twitch.tv/chefstrobel',
                },

                {
                    image: '/img/clients/varion.jpg',
                    name: 'Varion',
                    link: 'https://twitch.tv/varion',
                },
            ]"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'TrustedByComponent',
};
</script>
