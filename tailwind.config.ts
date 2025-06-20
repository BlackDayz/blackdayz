import plugin from 'tailwindcss/plugin';

module.exports = {
    content: ['./src/**/*.{vue,ts}'],
    theme: {
        extend: {
            colors: {
                'blackdayz-primary': {
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
                'gray': {
                    DEFAULT: '#393E41',
                    50: '#929AA0',
                    100: '#879096',
                    200: '#727C82',
                    300: '#5F676C',
                    400: '#4C5357',
                    500: '#393E41',
                    600: '#1F2123',
                    700: '#050505',
                    800: '#000000',
                    900: '#000000',
                    950: '#000000'
                },
                'blackdayz-gray': {
                    DEFAULT: '#393E41',
                    50: '#929AA0',
                    100: '#879096',
                    200: '#727C82',
                    300: '#5F676C',
                    400: '#4C5357',
                    500: '#393E41',
                    600: '#1F2123',
                    700: '#050505',
                    800: '#000000',
                    900: '#000000',
                    950: '#000000'
                },
                'blackdayz-accent': {
                    DEFAULT: '#D3D0CB',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#FFFFFF',
                    300: '#F8F8F7',
                    400: '#E6E4E1',
                    500: '#D3D0CB',
                    600: '#B9B5AD',
                    700: '#A0998E',
                    800: '#857D71',
                    900: '#676157',
                    950: '#58524A'
                },
                'background': {
                    DEFAULT: '#E7E5DF',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#FFFFFF',
                    300: '#FFFFFF',
                    400: '#F8F8F6',
                    500: '#E7E5DF',
                    600: '#CFCBBF',
                    700: '#B7B19F',
                    800: '#9F977F',
                    900: '#837B62',
                    950: '#736C56'
                },
            },
            boxShadow: {
                'blackdayz-primary-shadow': '8px 8px 0px rgb(var(--color-primary-DEFAULT))',
                'blackdayz-primary-shadow-hover': '12px 12px 0px rgb(var(--color-primary-DEFAULT))',
                'blackdayz-secondary-shadow': '4px 4px 0px rgb(var(--color-primary-DEFAULT))',
                'blackdayz-secondary-shadow-hover': '8px 8px 0px rgb(var(--color-primary-DEFAULT))',
            },
            fontFamily: {
                custom: ['Raleway', 'sans-serif'],
            }
        }
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                'h1,.h1': {
                    fontSize: theme('fontSize.8xl'),
                    fontWeight: theme('fontWeight.bold'),
                    color: theme('colors.blackdayz-primary.DEFAULT'),
                    lineHeight: '6rem',
                },
                'h2': {
                    fontSize: theme('fontSize.8xl'),
                    fontWeight: theme('fontWeight.bold'),
                    color: theme('colors.blackdayz-gray.900'),
                },
                'h3,.h3': {
                    fontSize: theme('fontSize.6xl'),
                    fontWeight: theme('fontWeight.bold'),
                    color: theme('colors.blackdayz-gray.900'),
                },
                'p': {
                    fontSize: theme('fontSize.xl'),
                    color: theme('colors.blackdayz-gray.DEFAULT'),
                },
                'img': {
                    borderWidth: '5px',
                    borderColor: theme('colors.blackdayz-gray.900'),
                    borderRadius: '40px'
                }
            });
        })
    ],
};
