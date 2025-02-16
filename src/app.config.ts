export default defineAppConfig({
    ui: {
      strategy: 'override',
      background: 'blackdayz-background',
      primary: 'blackdayz-primary',
      gray: 'blackdayz-gray',
      secondary: 'blackdayz-gray',
      button: {
        color: {
          primary: {
            solid: 'grid text-center text-primary bg-gray-500 shadow-blackdayz-primary-shadow px-12 hover:bg-gray-400 hover:shadow-blackdayz-primary-shadow-hover hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200',
          },
        },
        inline: 'grid'
      }
    },
  });