
import esbuild from 'esbuild';
import { glob } from "glob";
import fs from "fs";
import path from "path";

async function renameCss() {
   const cssFiles = await glob(
      "dist/client/assets/static/style.*.css"
   );

   if (cssFiles.length !== 1) {
      throw new Error(
         `Expected 1 style file, found ${cssFiles.length}`
      );
   }

   const oldPath = cssFiles[0];
   const newPath = path.join(path.dirname(oldPath), "style.css");

   fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
   });


   console.log(`Renamed ${oldPath} -> ${newPath}`);
}


const entryPoints = await glob(
   "dist/client/assets/entries/entry-client-routing.*.js"
);

console.log(entryPoints);

await esbuild.build({
  entryPoints: entryPoints,
  bundle: true,
  outfile: 'dist/client/bundle.js',
  format: 'iife', // safer for browsers
  minify: true
});

console.log('✅ Bundle created: dist/bundle.js')

fs.rmSync(
  "dist/client/assets/entries",
  { recursive: true, force: true }
);
console.log('✅ deleted entries folder');


fs.rmSync(
  "dist/client/assets/chunks",
  { recursive: true, force: true }
);
console.log('✅ deleted chunks folder');

renameCss();