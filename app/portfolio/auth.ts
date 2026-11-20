import { createHash, timingSafeEqual } from "crypto";

export const COOKIE_NAME = "pf_auth";

const getPassword = () => process.env.PORTFOLIO_PASSWORD ?? "charlesmarlow";
const getSecret = () => process.env.PORTFOLIO_SECRET ?? "cambia-este-secreto";

const sha = (value: string) => createHash("sha256").update(value).digest();

export function authToken() {
  return sha(`${getSecret()}:${getPassword()}`).toString("hex");
}

export function verifyPassword(input: string) {
  return timingSafeEqual(
    sha(input.trim().toLowerCase()),
    sha(getPassword().toLowerCase()),
  );
}

export function isAuthed(cookieValue?: string) {
  if (!cookieValue) return false;
  const a = Buffer.from(cookieValue);
  const b = Buffer.from(authToken());
  return a.length === b.length && timingSafeEqual(a, b);
}
