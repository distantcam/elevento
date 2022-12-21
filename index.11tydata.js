var md5 = require('md5');

module.exports = {
  eleventyComputed: {
    gravatar: data => md5(data.pkg.email)
  }
}
