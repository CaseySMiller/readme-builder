function generateMarkdown(data) {
  // assign license badge to variable
  licenseBadge = data.license == 'GNU GPLv13' ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  // return markdown
  return `# ${data.title}

  ## Description
  
  ${data.descr}
  
  ## License
  
  Developed under ${data.license} ${licenseBadge}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Test Instructions](#tests)
  
  ## Installation
  
  ${data.install}
  
  [Install and Usage Video](${data.installVid} "Install and Usage Video")
  
  [![Installation Video](${data.installImg})](${data.installVid} "Install and Usage Video")
  
  ## Usage
  
  ${data.usage}
  
  ## Screenshot
  
  ![screenshot](${data.screenShot})
  
  ## Contributing
  
  ${data.contrib}
  
  ## Testing Guidelines
  
  ${data.testInstr}
  
  ---
  
  ## My GitHub
  
  [${data.gitUsr}](https://github.com/${data.gitUsr})
  
  ## Email me
  
  [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
