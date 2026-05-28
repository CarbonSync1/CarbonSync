const fs = require('fs');
const path = require('path');

function copyDirWithFix(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirWithFix(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Special fix for CalendlyModal.tsx
      if (entry.name === 'CalendlyModal.tsx') {
        content = content.replace("const logo = '/logo.png';", "const logo = '/supply-chain/logo.png';");
      }

      if (!content.startsWith('\'use client\'')) {
        content = "'use client'\n\n" + content;
      }
      
      fs.writeFileSync(destPath, content, 'utf8');
    }
  }
}

const srcComponents = 'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/supply-chain-main/supply-chain-main/src/components';
const destComponents = 'c:/Users/Sarwang/Downloads/saas-navbar/components/supply-chain/components';
copyDirWithFix(srcComponents, destComponents);

const srcSections = 'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/supply-chain-main/supply-chain-main/src/sections';
const destSections = 'c:/Users/Sarwang/Downloads/saas-navbar/components/supply-chain/sections';
copyDirWithFix(srcSections, destSections);

console.log('Successfully re-copied all supply chain components and sections with correct UTF-8 encoding');
