//Importing the 'fs/promises' module for working with the file system using promises
const fs = require('fs/promises');

// Define the file name to be created
const fileName = "nodeNotes.txt"; // Name of the file to be created

// Define the content to be written to the file
const content = "back_end revision"; // Content to be written in the file

// Asynchronous function to create a file and write content into it
const creatingAfile = async () => {
    try {
        // Create a new file or overwrite an existing file with the specified content
        await fs.writeFile(fileName, content);
        console.log('File is created successfully!');
    } catch (error) {
        // Log any errors encountered during the file creation process
        console.error("Error while creating the file:", error);
    }
}

// Call the function to create the file
creatingAfile();
