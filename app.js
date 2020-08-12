const { prompt } = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'what city are you located in?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'tell us about yourself.'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn Url?'
    },
    {    type: 'input',
        name: 'github',
        message: 'What is your github URL?'
    }    
]

const writeToFile = (filename, data) => {
let content =  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name}</title>
  </head>
  <body>
    <div>
      <h1>${data.name}</h1>
      <h2>${data.location}</h2>
      <div>
        <p>${data.bio}</p>
      </div>
      <footer>
        <a href="${data.linkedin}">linkedin</a>
        <a href="${data.github}">GitHub</a>
      </footer>
    </div>
  </body>
</html>
`

//this creates the index file
fs.writeFile(filename, content, (err) => {
    if (err) { console.log(err) }
    console.log(`${filename} added.`)
})
}

// call inquirer and prompt user for input
const initialize = () => {
prompt(questions)
.then(res => {
    writeToFile('./index.html', res) 
})
.catch(err => console.log(err))
}

initialize()