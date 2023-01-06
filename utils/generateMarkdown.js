//Render license to Badge
function renderLicenseBadge(license) {
  let badgeForLicense = '';
   if (license === 'Apache License 2.0') {
      badgeForLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
   } else if (license === 'MIT License') {
      badgeForLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
   } else if (license === 'GNU General Public License 3.0') {
      badgeForLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
   } else if (license === 'Eclipse Public License 2.0') {
      badgeForLicense = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
   }
   return badgeForLicense;
}

module.exports = renderLicenseBadge;
