const { prompt } = require('enquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const titleCase = require('title-case');
const homedir = require('os').homedir();

prompt({
  type: 'input',
  name: 'note',
  message: 'What would you like to name this note?'
}).then(({ note }) => {
  const now = dayjs().valueOf();
  const fileName = `${now} - ${titleCase(note)}.md`;
  const path = `${homedir}/Documents/notes/${fileName}`;
  fs.writeFile(path, '', err => {
    if (err) throw err;

    console.log('File Created');
  });
});

// console.log(response);
