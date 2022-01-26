// Database initialisation
var db = openDatabase('contactsDB', '1.0', 'My Contacts', 5*1024*1024);

// Table creation
export const initDB = () => {
    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS CONTACTS (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, picture IMAGE)');
    });
}

// Getting all contacts from DB and setting them with setState via passed callback
export const getAllContacts = (callback) => {
    let contacts = [];

    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM CONTACTS', [], function (tx, results) {
            for (let i = 0; i < results.rows.length; i++) {
                contacts.push(results.rows.item(i));
            }
            callback(contacts);
        }, null);
    });
}

// Adding new contact
export const addContact = (contact, callback) => {
    if(contact.picture !== undefined) { // Converting image File to base64 for image to be stored in DB as string
        let reader = new FileReader();
        reader.readAsDataURL(contact.picture);
        reader.onload = function () {        
            db.transaction(function(tx) {
                tx.executeSql('INSERT INTO CONTACTS (name, address, picture) VALUES (?, ?, ?)', [contact.name, contact.address, reader.result]);
                getAllContacts(callback);
            });
        };
            reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }else {                             // If image is not provided proceed with undefined in which case placeholder will be set on contact
        db.transaction(function(tx) {
            tx.executeSql('INSERT INTO CONTACTS (name, address, picture) VALUES (?, ?, ?)', [contact.name, contact.address, contact.picture]);
            getAllContacts(callback);
        });
    }
}

// Updating existing contact
export const updateContact = (contact, id, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(contact.picture);
    reader.onload = function () {        
        db.transaction(function(tx) {
            tx.executeSql('UPDATE CONTACTS SET name = ?, address = ?, picture = ? WHERE ID = ?', [contact.name, contact.address, reader.result, id]);
            getAllContacts(callback);
        });
    };
        reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

// Deleting contact
export const deleteById = (id, callback) => {
    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM CONTACTS WHERE ID = ?', [id]);
        getAllContacts(callback);
    });
}

// ------------------------------------------------------------------------------------------------------------------------

// Converting to SCV format
const objectsToCSV = (contacts) => {  
    let keys = Object.keys(contacts[0]);
    keys.pop();

    let result = '';
    result += keys.join(',');
    result += '\n';

    contacts.forEach(function(item) {
        let ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += ',';
            result += item[key];
            ctr++;
        });
        result += '\n';
    });

    return result;
}

// Downloading SCV file
export const exportContacts = (contacts) => {  
    
    let csv = objectsToCSV(contacts);
    if (csv == null) return;

    let filename = contacts.length > 1 ? 'contacts.csv' : contacts[0].name + '.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    let data = encodeURI(csv);

    let link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}