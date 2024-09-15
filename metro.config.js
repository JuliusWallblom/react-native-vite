const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

// Export the merged configuration
module.exports = mergeConfig(getDefaultConfig(__dirname), config);