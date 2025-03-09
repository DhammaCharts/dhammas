const fs = require('fs');
const path = require('path');
function listDirectories(rootDir) {
    const items = fs.readdirSync(rootDir);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemPath = path.join(rootDir, item);
        const stat = fs.statSync(itemPath)
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemPath = path.join(rootDir, item);
            const stat = fs.statSync(itemPath);
            console.log(item);
            //console.log(item, itemPath, stat);
            // if (stat.isDirectory() && item.includes('.sdr')) {
            //     fs.rmdirSync(itemPath, { recursive: true });
            // } else if (stat.isDirectory()) {
            //     deleteDirectories(itemPath);
            // }
        }
    }
}
listDirectories(__dirname)