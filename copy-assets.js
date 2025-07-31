import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure public/assets directory exists
const publicAssetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// Copy assets from root assets directory to public/assets
const assetsDir = path.join(__dirname, 'assets');
const publicAssetsPath = path.join(__dirname, 'public', 'assets');

let copiedCount = 0;

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'].includes(ext)) {
      const sourcePath = path.join(assetsDir, file);
      const destPath = path.join(publicAssetsPath, file);
      
      try {
        // Check if destination file exists and compare modification times
        const sourceStats = fs.statSync(sourcePath);
        let shouldCopy = true;
        
        if (fs.existsSync(destPath)) {
          const destStats = fs.statSync(destPath);
          // Only copy if source is newer than destination
          shouldCopy = sourceStats.mtime > destStats.mtime;
        }
        
        if (shouldCopy) {
          fs.copyFileSync(sourcePath, destPath);
          console.log(`Copied ${file} to public/assets/`);
          copiedCount++;
        }
      } catch (error) {
        console.error(`Error copying ${file}:`, error.message);
      }
    }
  });
}

if (copiedCount === 0) {
  console.log('All assets are up to date!');
} else {
  console.log(`Asset copying completed! (${copiedCount} files copied)`);
} 