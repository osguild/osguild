
import { ACCESS_TOKEN } from "./constants";

interface AuthConfig {
  access_token: string;
}

export function getAccessToken(): string | undefined {

  const authString = sessionStorage.getItem(ACCESS_TOKEN);

  if (!authString) return;

  const { access_token }: AuthConfig = JSON.parse(authString);

  return access_token;
}
