// convert-webp.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

// On cible les deux dossiers contenant des images
const directories = [
  path.join(process.cwd(), "public"),
  path.join(process.cwd(), "src", "assets"),
];

async function convertImages() {
  console.log("🌿 Début de l'éco-conception des médias...");

  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue; // Sécurité si le dossier n'existe pas

    const files = fs.readdirSync(dir);
    const images = files.filter((f) => f.match(/\.(jpg|jpeg|png)$/i));

    console.log(`\n📂 Dossier ciblé : ${path.basename(dir)}`);
    console.log(`🖼️ Détection de ${images.length} images à optimiser...`);

    for (const img of images) {
      const inputPath = path.join(dir, img);
      const webpName = img.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      const outputPath = path.join(dir, webpName);

      if (fs.existsSync(outputPath)) {
        console.log(`⏩ Ignoré (existe déjà) : ${webpName}`);
        continue;
      }

      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`✅ Converti avec succès : ${img} -> ${webpName}`);
    }
  }

  console.log("\n🚀 Optimisation par lot terminée !");
}

convertImages();
