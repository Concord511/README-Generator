// function that returns a badge
function renderLicenseBadge(license) {
  let returnBadge; 
  switch (license) {
    case 'MIT':
      returnBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GPL':
      returnBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Apache':
      returnBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD':
      returnBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Unlicensed':
      returnBadge = "";
      break; 
    default:
      returnBadge = ""
      break; 
  }
  return returnBadge;
}

// function that returns a link
function renderLicenseLink(license) {
  let returnLink; 
  switch (license) { 
    case 'MIT':
      returnLink = `(https://opensource.org/licenses/MIT)`;
      break;
    case 'GPL':
      returnLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Apache':
      returnLink = `(https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD':
      returnLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Unlicensed':
      returnLink = ""
      break;
    default:
      returnLink = ""
      break; 
  }
  return returnLink;
}

// function that returns a license section if the user selected a license
function renderLicenseSection(license) {
  let renderLicense;
  if (license === 'Unlicensed') {
    renderLicense = "";
  }
  else {
    renderLicense = `## License
This project is covered under the ${license} license: ${renderLicenseLink(license)}
`
  }
  return renderLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, license, description, installation, usage, contributing, tests, username, email} = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const markdownText = `# ${title}
${licenseBadge}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Description

${description}

## Installation

${installation}

## Usage

${usage}

${licenseSection}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Find me on GitHub: https://github.com/${username}\n
Email me with questions: ${email}
`;

return markdownText;
}

module.exports = generateMarkdown;
