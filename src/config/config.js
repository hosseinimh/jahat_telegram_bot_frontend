import { LOCALES } from "../types/locales";
import packageJson from "../../package.json";

const ENV = {
  appEnv: process.env.NODE_ENV,
  name: process.env.REACT_APP_NAME,
  baseUrl: process.env.REACT_APP_BASE_URL,
  apiEndpoint: process.env.REACT_APP_API_ENDPOINT,
  locale: LOCALES.FA_IR,
  homePage: "/",
  loginPage: "/admins/login",
  appVersion: packageJson.version,
};

export default ENV;
