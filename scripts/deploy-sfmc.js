import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const {
   SFMC_CLIENT_ID,
   SFMC_CLIENT_SECRET,
   SFMC_AUTH_URL,
   SFMC_REST_URL,
   SFMC_JS_ASSET_ID,
   SFMC_CSS_ASSET_ID,
} = process.env;


async function getAccessToken() {
   const res = await fetch(`${SFMC_AUTH_URL}/v2/token`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         grant_type: "client_credentials",
         client_id: SFMC_CLIENT_ID,
         client_secret: SFMC_CLIENT_SECRET,
      }),
   });

   if (!res.ok) {
      const err = await res.text();
      throw new Error(`Auth failed: ${err}`);
   }

   const data = await res.json();

   return data.access_token;
}

async function updateAsset({
   accessToken,
   assetId,
   filePath,
}) {

   const res = await fetch(
      `${SFMC_REST_URL}/asset/v1/content/assets/${assetId}`,
      {
         method: "PATCH",
         headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            content: fs.readFileSync(filePath, "utf8")
         }),
      }
   );

   if (!res.ok) {
      const err = await res.text();
      throw new Error(`Upload failed (${filePath}): ${err}`);
   }

   const data = await res.json();

   console.log(`✅ Uploaded ${filePath}`);
   return data;
}

async function main() {
   try {
      console.log("🔐 Authenticating with SFMC...");

      const accessToken = await getAccessToken();

      console.log("✅ Authenticated");

      const distDir = path.resolve("dist");

      const jsPath = path.join(distDir, "main.js");
      const cssPath = path.join(distDir, "assets/index.css");

      console.log("📤 Uploading main.js...");

      const mainRes = await updateAsset({
         accessToken,
         assetId: SFMC_JS_ASSET_ID,
         filePath: jsPath,
      });

      console.log("📤 Uploading index.css...");

      await updateAsset({
         accessToken,
         assetId: SFMC_CSS_ASSET_ID,
         filePath: cssPath,
      });

      console.log("🚀 Deploy complete");
   } catch (err) {
      console.error(err);
      process.exit(1);
   }
}

main();