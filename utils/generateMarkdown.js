// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // assign license badge to variable
  licenseBadge = data.license == 'GNU GPLv13' ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  // return markdown
  return `# ${data.title}

  ## Description
  
  ${data.descr}
  
  ## License
  
  Developed under the ${data.license} license ${licenseBadge}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Test Instructions](#tests)
  
  ## Installation
  
  ${data.install}
  
  Install Video
  [![Installation Video](${data.installImg})](${data.installVid} "Install Video")
  
  ## Usage
  
  ${data.usage}
  
  ## Screenshot
  
  ![screenshot](${data.screenShot})
  
  ## Contributing
  
  ${data.contrib}
  
  ## Tests
  
  ${data.testInstr}
  
  ---
  
  ## My GitHub
  
  [${data.gitUsr}](https://github.com/${data.gitUsr})
  
  ## Email me
  
  [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
