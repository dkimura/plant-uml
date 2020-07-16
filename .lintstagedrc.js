module.exports = {
  "**/*.puml": (filenames) =>
    filenames.map(
      (filename) =>
        `puml generate '${filename}'  --png --output dist/'${filename}'.png`
    ),
};
