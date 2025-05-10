import Keycloak from "keycloak-js"

const keycloak = new Keycloak({
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL || "https://tnt-auth.apeiro-digital.com",
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM || "tnt-user-facility",
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID || "user-facility",
})

export default keycloak