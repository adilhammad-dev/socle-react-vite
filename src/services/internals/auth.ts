// Simple auth token utilities (example only)
let token: string | null = null;

export function setToken(next: string | null) {
  token = next;
}

export function getToken() {
  return token;
}

export function clearToken() {
  token = null;
}

