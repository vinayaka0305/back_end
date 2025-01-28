// Importing the 'os' module to access operating system-related utility methods
const os = require("os");

// Get the platform of the operating system
let platForm = os.platform(); // Returns 'win32', 'darwin', 'linux', etc., depending on the OS
console.log("Operating System Platform:", platForm);

// Get the architecture of the CPU
let arch = os.arch(); // Returns 'x64', 'arm', etc., depending on the architecture
console.log("CPU Architecture:", arch);

// Get the total memory of the system in bytes
let memory = os.totalmem(); // Returns total system memory in bytes
console.log("Total System Memory:", memory, "bytes");

// Additional methods of the 'os' module:

// Get the hostname of the operating system
let hostname = os.hostname();
console.log("Hostname:", hostname);

// Get the amount of free system memory in bytes
let freeMemory = os.freemem();
console.log("Free Memory:", freeMemory, "bytes");

// Get the system's home directory
let homeDir = os.homedir();
console.log("Home Directory:", homeDir);

// Get the system's uptime in seconds
let uptime = os.uptime();
console.log("System Uptime:", uptime, "seconds");

// Get an array of network interfaces
let networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);

// Get the operating system's release version
let osRelease = os.release();
console.log("OS Release:", osRelease);

// Get the number of CPU cores and their details
let cpus = os.cpus();
console.log("CPU Details:", cpus);

// Get the default directory for temporary files
let tempDir = os.tmpdir();
console.log("Temporary Directory:", tempDir);

// Get the type of operating system
let osType = os.type(); // Returns 'Linux', 'Darwin', 'Windows_NT', etc.
console.log("OS Type:", osType);
