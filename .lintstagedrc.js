const path = require('path')
const fs = require("fs")

const outputDir = path.resolve('dist')

module.exports = {
  '*.puml': filenames => {
    const cwd = process.cwd()

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    return filenames.map(
      filename => {
        const relativePath = path.relative(cwd, filename)
        const baseName = path.basename(relativePath, '.puml')
        return `puml generate ${relativePath} --png --output dist/${baseName}.png`
      }
    )
  }
}
