module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
    collect: {
      serverStartCommand: 'npm run start',
    },
  },
};
