export default defineAppConfig({
    ui: {
        colors: {
            background: {
                DEFAULT: '#E7BB41',
                50: '#FCF5E4',
                100: '#F9EFD2',
                200: '#F5E2AE',
                300: '#F0D589',
                400: '#ECC865',
                500: '#E7BB41',
                600: '#D5A41B',
                700: '#A37D15',
                800: '#71570E',
                900: '#403108',
                950: '#271E05',
            },
            primary: 'blackdayz-primary',
            gray: 'blackdayz-gray',
            secondary: 'blackdayz-gray',
        },
        button: {
            defaultVariants: {
                variant: 'solid',
                color: 'primary',
            },
            compoundVariants: [
                {
                    color: 'primary',
                    variant: 'solid',
                    class: 'cursor-pointer grid text-center text-primary bg-gray-500 blackdayz-primary-shadow px-12 hover:bg-gray-400 hover:blackdayz-primary-shadow-hover hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200'
                },
                {
                    color: 'secondary',
                    variant: 'solid',
                    class: 'cursor-pointer grid text-center text-primary bg-gray-500 blackdayz-secondary-shadow px-12 hover:bg-gray-400 hover:blackdayz-secondary-shadow-hover hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200'
                }
            ],
        }
    },
});
