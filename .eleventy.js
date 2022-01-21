module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("sortByNum", (values) => {
    return values.slice().sort((a, b) => a.data.order.localeCompare(b.data.order))
  })
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
