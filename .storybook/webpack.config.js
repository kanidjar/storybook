const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
    const tsPaths = new TsconfigPathsPlugin({
        configFile: '.storybook/tsconfig.json'
    });

    config.resolve.plugins ? config.resolve.plugins.push(tsPaths) : (config.resolve.plugins = [tsPaths]);

    return config;
};
