export const AUTH_USER_KEY = "auth-user";
export const AUTH_USERNAME = "auth-username";

export function _dumpLocalStorage() {
  console.log(localStorage.getItem(AUTH_USER_KEY));
}

export function saveUser(userId, username) {
  localStorage.setItem(AUTH_USER_KEY, userId);
  localStorage.setItem(AUTH_USERNAME, username);
}

export function logoutUser() {
  localStorage.clear();
}
