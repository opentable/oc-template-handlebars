/* eslint-disable no-var */

const handlebars = require('handlebars');

module.exports = (options, callback) => {
  var compiled;
  var templateSpec;
  try {
    templateSpec = handlebars.precompile(options.template);
    compiled = handlebars.template(templateSpec, []);
  } catch (err) {
    return callback(err);
  }
  return callback(null, compiled);
};
