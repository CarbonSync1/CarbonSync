const fs = require('fs');
const path = require('path');

// ========== 1. PRICING PAGE ==========
// Copy CarbonSyncPricingPage.tsx component
let pricing = fs.readFileSync(
  'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/carbonsync-pricing-page/carbonsync-pricing-page/CarbonSyncPricingPage.tsx',
  'utf8'
);
// Add 'use client' directive
pricing = "'use client';\n\n" + pricing;
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/CarbonSyncPricingPage.tsx', pricing, 'utf8');
console.log('✓ Copied CarbonSyncPricingPage.tsx');

// ========== 2. RESOURCES PAGE ==========
// Copy main CarbonSyncResourcesPage.tsx
let resources = fs.readFileSync(
  'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/carbonsync-resources-page/carbonsync-resources/src/CarbonSyncResourcesPage.tsx',
  'utf8'
);
resources = "'use client';\n\n" + resources;
// Fix image paths from /img to /resources-assets/img
resources = resources.replace(/src="\/img/g, 'src="/resources-assets/img');
resources = resources.replace(/src="\/carbonsync-logo/g, 'src="/resources-assets/carbonsync-logo');
resources = resources.replace(/image: '\/img/g, "image: '/resources-assets/img");
resources = resources.replace(/image: '\/carbonsync/g, "image: '/resources-assets/carbonsync");
// Fix ArticleDetail import path
resources = resources.replace("import ArticleDetail from './components/ArticleDetail';", "import ArticleDetail from './resources/ArticleDetail';");
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/CarbonSyncResourcesPage.tsx', resources, 'utf8');
console.log('✓ Copied CarbonSyncResourcesPage.tsx');

// Copy ArticleDetail component
fs.mkdirSync('c:/Users/Sarwang/Downloads/saas-navbar/components/resources', { recursive: true });
let articleDetail = fs.readFileSync(
  'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/carbonsync-resources-page/carbonsync-resources/src/components/ArticleDetail.tsx',
  'utf8'
);
articleDetail = "'use client';\n\n" + articleDetail;
// Fix image paths
articleDetail = articleDetail.replace(/src="\/img/g, 'src="/resources-assets/img');
articleDetail = articleDetail.replace(/src="\/carbonsync/g, 'src="/resources-assets/carbonsync');
articleDetail = articleDetail.replace(/image: '\/img/g, "image: '/resources-assets/img");
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/resources/ArticleDetail.tsx', articleDetail, 'utf8');
console.log('✓ Copied ArticleDetail.tsx');

// Copy articleContent data
fs.mkdirSync('c:/Users/Sarwang/Downloads/saas-navbar/components/resources/data', { recursive: true });
let articleContent = fs.readFileSync(
  'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/carbonsync-resources-page/carbonsync-resources/src/data/articleContent.tsx',
  'utf8'
);
articleContent = "'use client';\n\n" + articleContent;
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/resources/data/articleContent.tsx', articleContent, 'utf8');
console.log('✓ Copied articleContent.tsx');

// Copy styles.css
let styles = fs.readFileSync(
  'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/carbonsync-resources-page/carbonsync-resources/src/styles.css',
  'utf8'
);
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/resources/styles.css', styles, 'utf8');
console.log('✓ Copied styles.css');

// ========== 3. COPY IMAGES ==========
// Copy resources images to public/resources-assets/
const srcPublic = 'C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/carbonsync-resources-page/carbonsync-resources/public';
const destPublic = 'c:/Users/Sarwang/Downloads/saas-navbar/public/resources-assets';
fs.mkdirSync(destPublic, { recursive: true });

const files = fs.readdirSync(srcPublic);
files.forEach(file => {
  const srcFile = path.join(srcPublic, file);
  const destFile = path.join(destPublic, file);
  if (fs.statSync(srcFile).isFile()) {
    fs.copyFileSync(srcFile, destFile);
  }
});
console.log('✓ Copied ' + files.length + ' image assets to public/resources-assets/');

console.log('\n✅ All done!');
