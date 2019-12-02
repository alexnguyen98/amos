const fs = require('fs')
const glob = require('glob')

const indexPath = 'src/icons/index.js'
const componentsPath = 'src/icons/'

fs.writeFile(
  indexPath, 
  generateExportSvg().join('\n\n'),
  (err) => {
    if (err)
      return console.log(err)
    else
      return console.log("Icon export index created!")
  }
)

function svgNameToExportName(name) {
  return name
    .replace(/\.svg$/, '')
    .replace(/(?:^|[-_])([a-z])/g, (match, letter) => letter.toUpperCase())
}

function generateExportSvg() {
  const exportArr = []
  const svgNames = glob.sync('*.svg', {cwd: componentsPath})

  svgNames.forEach(i => {
    exportArr.push(`export { default as ${svgNameToExportName(i)} } from './${i}';`)
  })
  return exportArr
}