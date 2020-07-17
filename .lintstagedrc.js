const path = require('path')

module.exports = {
  '*.puml': filenames => {
    const cwd = process.cwd()

    const convert = filenames.map(
      filename => {
        const relativePath = path.relative(cwd, filename)
        const baseName = path.basename(relativePath, '.puml')
        return `puml generate ${relativePath} --png --output dist/${baseName}.png`
      }
    )
    convert.push('touch .commit')
    return convert
  }
}
