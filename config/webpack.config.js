// config/webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: {
        'snippet-chatbot-mock-client-webpack': path.resolve(__dirname, '../js/snippet-chatbot-mock-client.js'),
        'snippet-chatbot-mock-client-ga-webpack': path.resolve(__dirname, '../js/snippet-chatbot-mock-client-ga.js'),
        'snippet-test': path.resolve(__dirname, '../js/snippet-chatbot-test.js')
    },
    output: {
        path: path.resolve(__dirname, '../webpack')
    },
    plugins: [
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin()
    ]
};