const fs = require('fs')

const snippetsComponentDir = process.cwd() + '/components/snippets'
const snippetMdDir = process.cwd() + '/content/snippets'
const LoadSnippets = process.cwd() + '/components/LoadSnippets.js'
const init = async () => {
  console.log(snippetsComponentDir)
  console.log(snippetMdDir)
  const snippetVueFiles = fs.readdirSync(snippetsComponentDir).map((snip) => {
    return {
      path: snippetsComponentDir + '/' + snip,
      filename: snip.replace('.vue', '.md'),
      title: splitPascalCase(snip.replace('.vue', '')),
    }
  })

  await generateMdFiles(snippetVueFiles)
  //   console.log(snippetVueFiles)
  await generateImports(
    snippetVueFiles.map((snip) => snip.filename.replace('.md', ''))
  )
  // console.log('fileNames', fileNames)
}

init()

function generateMdFiles(snippetVueFiles) {
  snippetVueFiles.forEach((snip) => {
    let fileData
    try {
      fileData = fs.readFileSync(snip.path).toString()
    } catch (error) {
      console.log('WTF!', error)
    }
    const frontMatter = fileData.split('<template>')[0]
    const snipText = fileData.replace(frontMatter, '')
    const mdFile = generateMdTemplate(
      snipText,
      frontMatter.replace(/<!-- /g, '').replace(/ -->/g, ''),
      snip.title
    )
    try {
      fs.writeFileSync(`${snippetMdDir}/${snip.filename}`, mdFile)
    } catch (error) {
      console.log('WTF!', error)
    }
  })
}

function generateImports(fileNames) {
  let template = `export default {
}`

  fileNames.forEach((file) => {
    const replace = `  ${file}: () => import('~/components/snippets/${file}'),
}`
    template = template.replace('}', replace)
  })
  try {
    fs.writeFileSync(
      LoadSnippets,
      template +
        `
`
    )
    return
  } catch (error) {
    console.error('WTF!', error)
  }
}

function generateMdTemplate(snipText, frontMatter, title) {
  return `---
${frontMatter.trim()}
---

\`\`\`vue [./components/snippets/${title}.vue]
${snipText}
\`\`\`
`
}

function splitPascalCase(word) {
  const wordRe = /($[a-z])|[A-Z][^A-Z]+/g
  return word.match(wordRe).join(' ')
}
