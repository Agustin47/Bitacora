const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config');
const path = require('path');

const env = process.env.IONIC_ENV;

module.exports = function () {
    useDefaultConfig[env].resolve.alias = {
        'models': path.resolve('./src/models'),
        'components': path.resolve('./src/components'),
        'provider': path.resolve('./src/provider'),
        'img': path.resolve('./src/assets/imgs'),
        
    }

    return useDefaultConfig;
}