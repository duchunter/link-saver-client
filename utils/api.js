import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = 'http://localhost:3000';
const accessToken = {
  headers: { Authorization: `Bearer ${getAccessToken()}` }
};

export {
  getInfo,

};

async function getInfo(table) {
  const url = `${BASE_URL}/api/info`;
  let result = await axios.post(url, { table }, accessToken);
  return result.data;
}
