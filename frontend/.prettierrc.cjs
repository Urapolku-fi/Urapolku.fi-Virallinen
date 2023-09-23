module.exports = {
  // Use single quotes for strings
  singleQuote: true,
  
  // Use a trailing comma where valid
  trailingComma: 'all',
  
  // Use 2 spaces for indentation
  tabWidth: 2,
  
  // Specify the maximum line length (80 characters in this example)
  printWidth: 100,
  
  // Use the Prettier default parser (babel) for JavaScript and TypeScript files
  // You can adjust this based on your project's requirements
  parser: 'babel',
  
  // Do not insert a newline at the beginning of files
  // This is a matter of preference, you can adjust as needed
  insertPragma: false,
  
  // Do not automatically format files when they are saved
  // You can enable this if desired, but be cautious in a collaborative environment
  // requirePragma: false,
};
