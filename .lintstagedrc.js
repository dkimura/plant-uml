const path = require('path')

module.exports = {
  '*.puml': filenames => {
    const cwd = process.cwd()

    return filenames.map(
      filename => {
        const relativePath = path.relative(cwd, filename)
        return `puml generate '${relativePath}'  --png --output dist/'${relativePath}'.png`
      }
    )
  }
}
