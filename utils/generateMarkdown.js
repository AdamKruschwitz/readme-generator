const fs = require('fs');

// license Data
const licenses = [ {
      "name": "Apache",
      "badge": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
      "link": "https://opensource.org/licenses/Apache-2.0",
      "text": ` Copyright [yyyy] [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`
  },
  {
      "name": "Boost",
      "badge": "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
      "link": "https://www.boost.org/LICENSE_1_0.txt",
      "text": `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  },
  {
      "name": "BSD",
      "badge": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
      "link": "https://opensource.org/licenses/BSD-3-Clause",
      "text": `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  },
  {
      "name": "Creative Commons",
      "badge": "https://licensebuttons.net/l/zero/1.0/80x15.png",
      "link": "http://creativecommons.org/publicdomain/zero/1.0/",
      "text": `The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.

      You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.`
  },
  {
      "name": "Eclipse Public",
      "badge": "https://img.shields.io/badge/License-EPL%201.0-red.svg",
      "link": "https://opensource.org/licenses/EPL-1.0",
      "text": `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  },
  {
      "name": "GNU",
      "badge": "https://img.shields.io/badge/License-GPLv3-blue.svg",
      "link": "https://www.gnu.org/licenses/gpl-3.0",
      "text": `This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).`
  },
  {
      "name": "IBM",
      "badge": "https://img.shields.io/badge/License-IPL%201.0-blue.svg",
      "link": "https://opensource.org/licenses/IPL-1.0",
      "text": `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  },
  {
      "name": "MIT",
      "badge": "https://img.shields.io/badge/License-MIT-yellow.svg",
      "link": "https://opensource.org/licenses/MIT",
      "text": `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  },
  {
      "name": "Mozilla",
      "badge": "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
      "link": "https://opensource.org/licenses/MPL-2.0",
      "text": "This work is under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)."
  },
  {
      "name": "Perl",
      "badge": "https://img.shields.io/badge/License-Perl-0298c3.svg",
      "link": "https://opensource.org/licenses/Artistic-2.0",
      "text": "Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. For more information, [see the license here](https://img.shields.io/badge/License-Perl-0298c3.svg)"
  } ];

// Returns a map containing license data of the given attribute
function _getLicenseAttribute(attribute) {
    let out = new Map();
    for(const license of licenses) {
        out.set(license.name, license[attribute]);
    }

    return out;
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) return "";

  const badges = _getLicenseAttribute("badge");
  let out = badges.get(license);

  if(!out) return "";
  else return `[![License](${out.badge})] (${out.link})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(!license) return "";

    const links = _getLicenseAttribute("links");
    let out = links.get(license);

    if(!out) return "";
    else return `[Link to license](${out.link})`;
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(!license) return "";

    const licenseTexts = _getLicenseAttribute("text");
    let out = licenseTexts.get(license);

    if(!out) return "";
    else return out.text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;

}

module.exports = generateMarkdown;

renderLicenseBadge("asdf");