import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const OLD_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

let deleted = 0;
let freedKB = 0;

async function processDirectory(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await processDirectory(fullPath);
    } else if (OLD_EXTENSIONS.includes(extname(entry).toLowerCase())) {
      const sizeKB = stats.size / 1024;
      await unlink(fullPath);
      freedKB += sizeKB;
      deleted++;
      console.log(`🗑️  Borrado: ${entry} (${sizeKB.toFixed(0)}KB)`);
    }
  }
}

console.log('🧹 Borrando imágenes viejas (.jpg, .jpeg, .png)...\n');

await processDirectory(IMAGES_DIR);

console.log(`\n✅ Listo: ${deleted} archivos borrados.`);
console.log(`💾 Espacio liberado: ${(freedKB / 1024).toFixed(2)} MB`);