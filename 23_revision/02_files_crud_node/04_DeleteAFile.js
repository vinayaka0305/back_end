// Import the 'fs/promises' module to use promises-based file system operations
const fs = require('fs/promises');

// Define the name of the file to delete
const fileName = "nodeeNotes.txt";

// Define an asynchronous function to delete the file
const deletingAfile = async () => {
    // Use 'fs.unlink()' to delete the specified file asynchronously
    await fs.unlink(fileName);
    
    // Log a message confirming the file has been deleted
    console.log('file is delete');
}

// Call the deletingAfile function to execute the file deletion
deletingAfile();


// fs.unlink(fileName): Asynchronously deletes the file specified by fileName ("nodeeNotes.txt"). If the file does not exist, it will throw an error.

// await: The await keyword ensures that the program waits for the file deletion process to complete before moving on.