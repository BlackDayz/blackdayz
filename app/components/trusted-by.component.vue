<template>
    <div class="grid justify-center text-center gap-20">
        <H2Atom text="Trusted By" />
        <ClientsShowcaseAtom
            :clients="[
                {
                    image: 'https://cdn-homepage.blackdayz.de/api/cdn/download/images/Rumathra.png',
                    name: 'Rumathra',
                    link: 'https://twitch.tv/rumathra',
                },
                {
                    image: 'https://cdn-homepage.blackdayz.de/api/cdn/download/images/HTNH.png',
                    name: 'htnh',
                    link: 'https://htnh.de',
                },
                {
                    image: 'https://cdn-homepage.blackdayz.de/api/cdn/download/images/Geilevideossos.png',
                    name: 'Geilevideossos',
                    link: 'https://twitch.tv/geilevideossos',
                },

                {
                    image: 'https://cdn-homepage.blackdayz.de/api/cdn/download/images/Trymacs.jpg',
                    name: 'Trymacs',
                    link: 'https://twitch.tv/trymacs',
                },

                {
                    image: 'https://cdn-homepage.blackdayz.de/api/cdn/download/images/Chefstrobel.jpg',
                    name: 'Chefstrobel',
                    link: 'https://twitch.tv/chefstrobel',
                },

                {
                    image: 'https://cdn-homepage.blackdayz.de/api/cdn/download/images/Varion.jpg',
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
