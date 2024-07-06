const fs = require('fs')

// Read the package.json file
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

// Split the version number into an array
const versions = packageJson.version.split('.')

// Increment the patch number (patch version + 1)
const major = versions[0]
const minor = versions[1]
const patch = parseInt(versions[2], 10) + 1

// Create a new version number
const newVersion = `${major}.${minor}.${patch}`

// Update the version number in the package.json file
packageJson.version = newVersion

// Write the updated package.json file
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))

// Log the updated version number
console.log(`Updated package version to: ${newVersion}`)
