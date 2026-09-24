import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

let converted = 0;
let totalSavedKB = 0;

async function processDirectory(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await processDirectory(fullPath);
    } else if (VALID_EXTENSIONS.includes(extname(entry).toLowerCase())) {
      const nameWithoutExt = basename(entry, extname(entry));
      const outputPath = join(dir, `${nameWithoutExt}.webp`);

      const originalSizeKB = stats.size / 1024;

      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const newStats = await stat(outputPath);
      const newSizeKB = newStats.size / 1024;
      const savedKB = originalSizeKB - newSizeKB;

      totalSavedKB += savedKB;
      converted++;

      console.log(
        `✅ ${entry} → ${nameWithoutExt}.webp ` +
        `(${originalSizeKB.toFixed(0)}KB → ${newSizeKB.toFixed(0)}KB, ` +
        `-${((savedKB / originalSizeKB) * 100).toFixed(0)}%)`
      );
    }
  }
}

console.log('🖼️  Iniciando conversión a WebP...\n');

await processDirectory(IMAGES_DIR);

console.log(`\n🎉 Conversión completada: ${converted} imágenes procesadas.`);
console.log(`💾 Espacio ahorrado: ${(totalSavedKB / 1024).toFixed(2)} MB`);