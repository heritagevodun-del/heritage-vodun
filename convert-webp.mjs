// convert-webp.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

async function convertImages() {
  const files = fs.readdirSync(publicDir);
  // On cible uniquement les JPG et PNG
  const images = files.filter((f) => f.match(/\.(jpg|jpeg|png)$/i));

  console.log(`🖼️ Détection de ${images.length} images à optimiser...`);

  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    const webpName = img.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(publicDir, webpName);

    // Si la version WebP existe déjà, on l'ignore pour gagner du temps
    if (fs.existsSync(outputPath)) {
      console.log(`⏩ Ignoré (existe déjà) : ${webpName}`);
      continue;
    }

    // Conversion avec une compression de 80% (invisible à l'œil nu)
    await sharp(inputPath).webp({ quality: 80, effort: 6 }).toFile(outputPath);

    console.log(`✅ Converti avec succès : ${img} -> ${webpName}`);
  }
  console.log("🚀 Optimisation par lot terminée !");
}

convertImages();
