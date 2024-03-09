module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      // TODO: undo this when you improve your scores
      // preset: 'lighthouse:no-pwa',
    },
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/contact',
        'http://localhost:3000/blog',
      ],
      startServerCommand: 'npm run start',
    },
  },
};
