"use strict";
const fs = require('fs');
const moment = require('moment');

fs.readFile(`${__dirname}/src/environments/version.ts`, 'utf-8' ,function(err, buf) {
  const data = buf.toString();
  let version = data.substring(data.indexOf('= ') + 3, data.indexOf(';'));

  const versionData = version.split('.');
  versionData[2] = Number.parseInt(versionData[2]) + 1;
  version = versionData.join('.');

  const updatedData = `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
export const APP_VERSION = '${version}';
export const APP_DATE = '${moment().format('YYYY-MM-DD')}';
`;

  fs.writeFile(`${__dirname}/src/environments/version.ts`, updatedData, function(err){
    if (err) {
      console.log(err);
    }
    console.log(`Successfully updated version to ${version}.`);
  });
});

