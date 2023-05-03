const fs = require('fs');
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
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      return console.log(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find(contact => {
      if (contact.id === contactId) {
        console.log(`Find contact by ID ${contactId}:`);
        console.table(contact);
        return contact;
      }
    });

    if (contact == null) {
      console.log(`Contact with ID "${contactId}" not found!`);
    }
  });
}
// fs.appendFile(contactsPath, ' то.что нужно добавить');
function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      return console.log(error);
    }
    const contacts = JSON.parse(data);
    contacts.push({
      id: contacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    });
    console.log('Contacts added successfully! New lists of contacts: ');
    console.table(contacts);
    fs.writeFile(contactsPath, JSON.stringify(contacts), error => {
      if (error) {
        return console.log(error);
      }
    });
  });
}

function removeContact(contactId) {
  fs.writeFile(contactsPath, 'пусто');
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
