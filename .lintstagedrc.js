const path = require('path')

module.exports = {
  '*.puml': filenames => {
    const cwd = process.cwd()

    return filenames.map(
      filename => {
        const relativePath = path.relative(cwd, filename)
        const baseName = path.basename(relativePath, '.puml')
        return `puml generate '${relativePath}' --png --output dist/'${baseName}'.png && git add .`
      }
    )
  }
}
