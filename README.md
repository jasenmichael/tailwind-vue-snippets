# Tailwind Vue Snippets

## What it does:

at build time:

- scans the ./components/snippets directory,
- generates a ./content/snippets/[snippet-file-name].md file, for each components/snippets/[snippet-file-name].vue file.
- and using a template it adds the code from the snippet/[snippet-file-name].vue to to the body of the [snippet-file-name].md in a prismjs styled code block.

dynamic display of selected snippet with code block of the actual snippet .vue file

- in the home page we use nuxt-content and get a list of all the snippets;
- put them into a list of links, linking page.
  something like this:

```html
// pages/snippets.vue - pass snippets as props
<div v-for="snippet in snippets">
  <nuxt-link :to"/`${snippet.slug}`">
    <SnippetCard :snippet="snippet" />
  </nuxt-link>
</div>
```

- again we use nuxt-content to get the [selectedComponent].md, to show the code block
  something like this:

```html
// snippetCard.vue - pass snippet as props
<div>
  <h3>{{ snippet.title }}</h3>
  <h3>{{ snippet.description }}</h3>
  <h3>{{ snippet.author }}</h3>
  <h3>{{ snippet.tags }}</h3>
  <h3>{{ snippet.categories }}</h3>
  <component v-for="snippet in snippets" :is="snippet.slug" />
  <nuxt-content :document="snippet" />
</div>
```

- now we display the snippet components, and the .md body (which includes the code used in the snippet.)
- now if we create a new snippet, and re-build, it will be added to the snippet list for clicking and displaying.

main files of interest:

- generateSnippetsMds.js (pre build time script)
  TODO:
  - [x] set the path globals - snippetsComponentDir & snippetMdDir
  - [x] get all .vue files in ./components/snippets
  - [x] create a .md template function
  - [x] for each .vue, read the contents.
  - [x] place contents in .md template,
  - [ ] check if the .md exist, if different replace .md, if not exist create .md
  - [ ] generate LoadSnippets.js for dynamic import
- pages/snippets/index.vue
- components/snippetCard.vue
- index.vue
  - [ ] get snippets, filter unneeded data for snippetList
        we get all snippets in one fetch to nuxt-content, and create the links.
        loop snippet components and content.
- ./components/snippets/\*.vue
  in our snippet .vue files, optionally add comments to the top of the file to be merged into the front matter of the .md file when generated.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
