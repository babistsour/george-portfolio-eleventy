module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css")
  eleventyConfig.addPassthroughCopy("./src/main.js")
  eleventyConfig.addPassthroughCopy("./src/images")
  eleventyConfig.addPassthroughCopy("./src/favicons")
  eleventyConfig.addPassthroughCopy("./src/admin")

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
