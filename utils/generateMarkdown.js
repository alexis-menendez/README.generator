// TODO: Create a function that returns a license badge based on which license is passed in, if there is no license, return an empty string

// NOTE TO SELF (add into notes later, remove this comment before final submission of project):
// the URL format for licence badges is: https://img.shields.io/badge/{label}-{message}-{color}.svg

// generate license badge
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-blue.svg)`;
}

// TODO: Create a function that returns the license link, if there is no license, return an empty string
// generate license link
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }

  const licenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause"
  };

  return `[${license} License](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
