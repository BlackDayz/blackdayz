<template>
    <div class="grid justify-center text-center gap-20">
        <H2Atom text="Trusted By" />
        <ClientsShowcaseAtom
            :clients="[
                {
                    image: '454c3326-32d8-42c7-f3a1-4e9bd2971700',
                    name: 'Rumathra',
                    link: 'https://twitch.tv/rumathra',
                },
                {
                    image: '21b7f294-e30b-4fee-642c-01ec35832000',
                    name: 'htnh',
                    link: 'https://htnh.de',
                },
                {
                    image: 'ff6a5dba-1d40-4438-597f-e44448791200',
                    name: 'Geilevideossos',
                    link: 'https://twitch.tv/geilevideossos',
                },

                {
                    image: '3f10ce64-9586-49ca-8998-7c6c2a4bb700',
                    name: 'Trymacs',
                    link: 'https://twitch.tv/trymacs',
                },

                {
                    image: '5a65249b-240e-4039-6123-c815c62bff00',
                    name: 'Chefstrobel',
                    link: 'https://twitch.tv/chefstrobel',
                },

                {
                    image: 'c45541a6-043c-4932-a694-3f4d0346cd00',
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
