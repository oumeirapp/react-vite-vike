import dotenv from "dotenv";

dotenv.config();

const {
   SFMC_REST_URL,
   SFMC_CLIENT_ID,
   SFMC_CLIENT_SECRET,
   SFMC_AUTH_URL,
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

async function getAsset(){

   const token = await getAccessToken();

   const url = `${SFMC_REST_URL}/asset/v1/content/assets/query`;

   const body = {
      "page": {
         "page": 1,
         "pageSize": 2
      },
      "query": {
         "leftOperand": {
            "property": "name",
            "simpleOperator": "equals",
            "value": "Neuro AI"
         },
         "logicalOperator": "AND",
         "rightOperand": {
            "property": "assetType.id",
            "simpleOperator": "equals",
            "value": 205
         }
      }
   };

   try {

      const response = await fetch(url, {
         method: "POST",
         body: JSON.stringify(body),
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }
      });

      const result = await response.json();
            
      console.log(JSON.stringify(result, null, 2));      
   }
   catch(e){
      console.log(e);
   }   
}

getAsset();