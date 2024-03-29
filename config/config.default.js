/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {})

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1574759005508_2185'

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    }

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    }

    // add your middleware config here
    config.middleware = []

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    }

    return {
        ...config,
        ...userConfig,
    }
}
