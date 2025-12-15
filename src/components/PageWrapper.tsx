export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      {children}
    </main>
  );
}
