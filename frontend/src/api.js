import axios from "axios";

export default function getRequests(urlStr) {
  return axios.get(`/api/requests${urlStr}`);
}
