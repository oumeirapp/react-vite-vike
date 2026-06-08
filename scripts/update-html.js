import fs from "fs/promises";
import path from "path";
import { glob } from "glob";


import CONFIG from "@/config.json";

const distDir = "dist/client";

// Rewrite index.html
const indexPath = path.join(distDir, "index.html");

let html = await fs.readFile(indexPath, "utf8");

// Remove modulepreload links
html = html.replace(
  /<link rel="modulepreload".*?>/g,
  ""
);

const env = process.argv[2];

const mode = env.replace("--", "");



if(mode === "dev"){
  html = html.replace(
    /<script[^>]+src="[^"]*entry-client-routing[^"]*"[^>]*><\/script>/,
    `<script src="./bundle.js" type="module"></script>`
  );
}

else if(mode === "prod"){
  html = html.replace(
    /<script[^>]+src="[^"]*entry-client-routing[^"]*"[^>]*><\/script>/,
    `<script src="${CONFIG.basepath}/bundle.js" type="module"></script>`
  );

  html = html.replace(
    /<link rel="stylesheet"[^>]*href="[^"]*style[^"]*\.css"[^>]*>/,
    `<link rel="stylesheet" href="${CONFIG.basepath}/style.css">`
  );
}

await fs.writeFile(indexPath, html);

console.log("index.html updated");