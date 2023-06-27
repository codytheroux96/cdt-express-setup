const fs = require('fs');

const packageJsonPath = './package.json';

const packageJson = require(packageJsonPath);

packageJson.dependencies['connect-session-sequelize'] = '7.1.7'
packageJson.dependencies['express'] = '4.18.2';
packageJson.dependencies['sequelize'] = '6.32.1';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Express and Sequelize added to package.json');