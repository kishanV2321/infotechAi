// MetadataLayout.tsx (Server Component)
import type { Metadata } from "next";

// Metadata should stay in a server component
export const metadata: Metadata = {
  title: "Info TechAi",
  description: "Tech Service provider",
};

// You can keep this component minimal or return a simple wrapper layout
export default function MetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}