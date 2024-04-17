const fs = require('fs');

// Read the content of the rawfile
const stdlibCode = fs.readFileSync('modules/libraries/std-raw.js', 'utf8');

// Export the raw code as a string
module.exports = stdlibCode;