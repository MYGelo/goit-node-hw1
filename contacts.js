const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      return console.log(error);
    }

    const contacts = JSON.parse(data);
    console.log('List of contacts: ');
    console.table(contacts);
  });
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  fs.writeFile(contactsPath, 'пусто');
}

function addContact(name, email, phone) {
  fs.appendFile(contactsPath, ' то.что нужно добавить');
}

module.exports = {
  listContacts,
  addContact,
  removeContact,
  getContactById,
};

// const contactsPath = path.resolve('./db/contacts.json');

// const contactList = async () => {
//   await fs.readFile(contactsPath, 'utf-8');
// };

// const addContacts = async () => {
//   const result = await fs.appendFile(contactsPath, ' то.что нужно добавить');
//   console.log(result);
// };
// const deleteContact = async () => {
//   const del = await fs.writeFile(contactsPath, 'пусто');
//   console.log(del);
// };
