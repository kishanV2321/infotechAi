// app/layout.tsx (Server Component)
import MetadataLayout from "@/components/MetadataLayout";
import RootLayout from "@/components/RootLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MetadataLayout>
      <RootLayout>{children}</RootLayout>
    </MetadataLayout>
  );
}