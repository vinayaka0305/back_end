// Import the 'fs/promises' module to use promises-based file system operations
const fs = require("fs/promises");

// Define the file name where the content will be updated
const file = "nodeeNotes.txt";

// Define the content to append to the file
const content = "\nHi";

// Define an asynchronous function to append content to the file
const updatingAfile = async () => {
  // Use await to append the content to the file asynchronously
  // If the file doesn't exist, it will be created
  await fs.appendFile(file, content);
  
  // Log a message confirming that the file has been updated
  console.log("file is updated");
};

// Call the updatingAfile function to execute the file update
updatingAfile();


// fs.appendFile(file, content): Appends the specified content ("Hi") to the file (nodeNotes.txt). If the file doesn't exist, it will be created. If it exists, the content is added to the end of the file.

// await: The operation is asynchronous, and await ensures that the code waits for the file operation to complete before moving on.