module.exports = (api, options) => {
  const Router = require("@vue/cli-plugin-router/generator")(api, {
    historyMode: options.routerHistoryMode
  });

  return new Router(options);
};
