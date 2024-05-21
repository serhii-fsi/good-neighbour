import axios from "axios";

export default function getRequests(path) {
  return axios.get(`${path}`);
}

export function getOwnHelpList(user_id) {
  return axios.get(`/api/requests/${user_id}`);
}

export function getOfferedHelpList(user_id) {
  return axios.get(`/api/requests/${user_id}`);
}
