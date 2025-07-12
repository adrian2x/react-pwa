"use client";
import { ConfigProvider } from "@firebase-ui/react"
import { ui } from "./clientApp"

export function FirebaseUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      ui={ui}
      policies={{
        termsOfServiceUrl: "https://www.google.com",
        privacyPolicyUrl: "https://www.google.com",
      }}
    >
      {children}
    </ConfigProvider>
  );
}
