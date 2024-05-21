import axios from "axios";

// GET:

export default function getHelpRequests(endpoint) {
  return axios.get(`${endpoint}`);
}

export function getOwnHelpList(user_id) {
  return axios.get(`/api/help-requests/${user_id}`);
}

export function getOfferedHelpList(user_id) {
  return axios.get(`/api/users/${user_id}/help_offers`);
}

export function getHelpView(help_request_id) {
  return axios.get(`/api/help-requests/${help_request_id}`);
}

export function getCommentsList(help_request_id) {
  return axios.get(`/api/help-requests/${help_request_id}/comments`);
}

export function getUsers() {
  return axios.get("/api/users");
}

export function getUserProfile(user_id) {
  return axios.get(`/api/users/${user_id}`);
}

// POST:

export function postHelpRequests() {
  return axios.post("/api/help-requests");
}

export function postType() {
  return axios.post("/api/types", {});
}

export function postComment(help_request_id) {
  return axios.post(`/api/help-requests/${help_request_id}/comments`, {});
}

// PATCH:

export function updateHelpRequest(help_offer_id) {
  return axios.patch(`/api/help-requests/${help_offer_id}`, {});
}

export function updateOfferedHelp(help_offer_id) {
  return axios.patch(`/api/help-offers/${help_offer_id}`, {});
}

export function updateOwnProfile(user_id) {
  return axios.patch(`/api/users/${user_id}`, {});
}

export function updateComment(help_request_id, comment_id) {
  return axios.patch(
    `/api/help-requests/${help_request_id}/comments/${comment_id}`,
    {}
  );
}

// DELETE:

export function deleteComment(comment_id) {
  return axios.delete(`/api/comments/${comment_id}`);
}

export function deleteHelpRequest(help_request_id) {
  return axios.delete(`/api/help-requests/${help_request_id}`);
}

export function deleteOfferedHelp(help_offer_id) {
  return axios.delete(`/api/help-offers/${help_offer_id}`);
}

export function deleteOwnProfile(user_id) {
  return axios.delete(`/api/users/${user_id}`);
}
