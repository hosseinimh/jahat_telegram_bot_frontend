import { ENV } from "../../../config";
import { post } from "../../../lib";

export const fetchInfo = async () => await post(`${ENV.apiEndpoint}/report`);
