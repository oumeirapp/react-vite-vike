import type { Config } from "vike/types";
import vikeReact from "vike-react/config";


const config: Config = {
  title: "Neuro AI",
  description: "Ask Neuro AI your medical queries",
  prerender: true,
  extends: [vikeReact],
};

export default config;
