import ObserverProvider from "@/components/providers/observer-provider";
import ThemeProvider from "@/components/providers/theme-provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ObserverProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ObserverProvider>
  );
}
