const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    },
  },

  // configureWebpack: (config) => {
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: {
  //       fs: false,
  //       path: false,
  //       os: false,
  //     },
  //   };
  //   return config;
  // },
});
