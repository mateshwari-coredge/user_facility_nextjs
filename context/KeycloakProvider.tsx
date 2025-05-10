"use client";

import { useEffect, useState } from "react";
import keycloak from "../lib/keycloak";

export default function KeycloakProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak
        .init({ onLoad: "login-required", checkLoginIframe: false })
        .then((auth) => {
          setAuthenticated(auth);
          setLoading(false);
        })
        .catch(() => {
          console.error("Keycloak initialization failed");
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}
