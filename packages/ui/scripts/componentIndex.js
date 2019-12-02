const fs = require('fs')
const glob = require('glob')

const indexPath = 'src/components/index.js'
const componentsPath = 'src/components/'

fs.writeFile(
  indexPath, 
  generateExportSvg().join('\n\n'),
  (err) => {
    if (err)
      return console.log(err)
    else
      return console.log("Component export index created!")
  }
)

function jsNameToExportName(name) {
  return name
    .replace(/\/index.js$/, '')
}

function generateExportSvg() {
  const exportArr = []
  const componentsNames = glob.sync('**/index.js', {cwd: componentsPath})

  componentsNames.forEach(i => {
    if (i === 'index.js')
      return
    exportArr.push(`export { default as ${jsNameToExportName(i)} } from './${i}';`)
  })
  return exportArr
}