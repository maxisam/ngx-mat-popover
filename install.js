const { execSync } = require('child_process');

try {
  execSync('npm run build');
  execSync('rm package.json && mv dist/ngx-mat-popover/* . && rm -Rf dist');
} catch (e) {
  console.log('Error while installing')
}
