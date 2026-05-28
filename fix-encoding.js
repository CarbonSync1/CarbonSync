const fs = require('fs');

// 1. Restore NetZeroApp.tsx
let netZeroApp = fs.readFileSync('C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/netzeropage (1)/netzeropage/src/App.jsx', 'utf8');
netZeroApp = "'use client';\n\n" + netZeroApp.replace(/src\/assets\//g, '/netzero/');
netZeroApp = netZeroApp.replace("import CalendlyWidget from './components/CalendlyWidget';", "import CalendlyWidget from './CalendlyWidget';");
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/NetZeroApp.tsx', netZeroApp, 'utf8');

// 2. Restore CalendlyWidget.tsx
let calendlyWidget = fs.readFileSync('C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/netzeropage (1)/netzeropage/src/components/CalendlyWidget.jsx', 'utf8');
calendlyWidget = "'use client';\n\n" + calendlyWidget;
calendlyWidget = calendlyWidget.replace("export default function CalendlyWidget({ onClose }) {", "export default function CalendlyWidget({ onClose }: { onClose: () => void }) {");
calendlyWidget = calendlyWidget.replace("src=\"src/assets/carbonsync-logo.png\"", "src=\"/netzero/carbonsync-logo.png\"");
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/CalendlyWidget.tsx', calendlyWidget, 'utf8');

// 3. Restore CalendlyModal.tsx
let calendlyModal = fs.readFileSync('C:/Users/Sarwang/OneDrive/Desktop/carbonsync structure/supply-chain-main/supply-chain-main/src/components/CalendlyModal.tsx', 'utf8');
calendlyModal = calendlyModal.replace("const logo = '/logo.png';", "const logo = '/supply-chain/logo.png';");
fs.writeFileSync('c:/Users/Sarwang/Downloads/saas-navbar/components/supply-chain/components/CalendlyModal.tsx', calendlyModal, 'utf8');
