const fs = require('fs');
const filesToFix = [
  {
    original: 'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/supply-chain-main/supply-chain-main/src/components/ClientLogos.tsx',
    dest: 'c:/Users/Sarwang/Downloads/saas-navbar/components/supply-chain/components/ClientLogos.tsx'
  },
  {
    original: 'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/supply-chain-main/supply-chain-main/src/components/ExitIntentPopup.tsx',
    dest: 'c:/Users/Sarwang/Downloads/saas-navbar/components/supply-chain/components/ExitIntentPopup.tsx'
  }
];

filesToFix.forEach(({ original, dest }) => {
  let content = fs.readFileSync(original, 'utf8');
  if (!content.startsWith('\'use client\'')) {
    content = "'use client'\n\n" + content;
  }
  fs.writeFileSync(dest, content, 'utf8');
});
console.log('Fixed ClientLogos and ExitIntentPopup');
