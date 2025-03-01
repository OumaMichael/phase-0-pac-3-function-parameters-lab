// Function that uses one parameter and returns a greeting
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function that uses two parameters and returns a greeting with language info
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function that uses two parameters with the second parameter having a default value ("JavaScript")
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Export the functions for the tests
  module.exports = {
    introduction,
    introductionWithLanguage,
    introductionWithLanguageOptional
  };
console.log(module.exports)  