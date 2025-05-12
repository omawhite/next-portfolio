module.exports = {
  ci: {
    // TODO: undo this when you improve your scores
    // assert: {
    //   preset: 'lighthouse:no-pwa',
    // },
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/contact',
        'http://localhost:3000/blog',
      ],
      startServerCommand: 'HOSTNAME=localhost pnpm turbo start',
    },
  },
};
