import { writeFileSync } from 'fs';

const packageJsonPath = './package.json';

const packageJson = require(packageJsonPath);

packageJson.dependencies['express'] = '4.18.2';
packageJson.dependencies['sequelize'] = '6.32.1';

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Express and Sequelize added to package.json');