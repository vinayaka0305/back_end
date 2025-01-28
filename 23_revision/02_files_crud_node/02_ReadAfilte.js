// Import the 'fs/promises' module to use promises-based file system operations
const fs = require('fs/promises');

// Define the name of the file to read
const fileName = "nodeNotes.txt";

// Define an asynchronous function to read the file
const readingAfile = async () => {
   // Use await to read the file asynchronously and store the result in 'result'
   let result = await fs.readFile(fileName);
   
   // Log the raw buffer data (this is the binary content of the file)
   console.log(result); // <Buffer 62 61 63 6b 5f 65 6e 64 20 72 65 76 69 73 69 6f 6e>

   // Convert the buffer to a string and update the 'result' variable
   result = result.toString();
   
   // Log the content of the file as a string (human-readable)
   console.log(result);
   
   // Log a message indicating the file has been read
   console.log('readed a file');
}

// Call the readingAfile function to execute the file reading
readingAfile();

// Summary

// fs.readFile(fileName): Reads the file asynchronously. The file's contents are returned as a Buffer (a raw binary representation).

// result.toString(): Converts the buffer into a human-readable string, assuming the file content is text-based (like UTF-8).
