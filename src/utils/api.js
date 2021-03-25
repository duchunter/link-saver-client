import axios from 'axios';
import { getAccessToken } from './auth';

//const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://gp-linksaver.herokuapp.com';
const accessToken = {
  headers: { Authorization: `Bearer ${getAccessToken()}` }
};

export {
  getInfo, searchLink, addLink, editLink,
  adjustLink, deleteLink, sendLog,
};

// No requirement
async function sendLog() {
  const url = `${BASE_URL}/api/log`;
  return await axios.post(url, {}, accessToken);
}

// Require table and condition (optional)
async function getInfo(data) {
  const url = `${BASE_URL}/api/info`;
  let result = await axios.post(url, data, accessToken);
  return result.data;
}

// Require mode, table, condition, limit
async function searchLink(data) {
  const url = `${BASE_URL}/api/search`;
  return await axios.post(url, data, accessToken);
}

// Require direct and data
async function addLink(data, direct) {
  const url = `${BASE_URL}/api/add`;
  return await axios.put(url, { direct, data }, accessToken);
}

// Require id, table, changes, link
async function editLink(data) {
  const url = `${BASE_URL}/api/edit`;
  return await axios.post(url, data, accessToken);
}

// Require promote, id
async function adjustLink(data) {
  const url = `${BASE_URL}/api/adjust`;
  return await axios.post(url, data, accessToken);
}

// Require table, id, link
async function deleteLink(data) {
  const url = `${BASE_URL}/api/delete`;
  return await axios.post(url, data, accessToken);
}
