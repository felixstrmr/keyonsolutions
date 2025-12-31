import HomeNavbar from "@/components/home-navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex size-full flex-col">
      <HomeNavbar />
      {children}
    </div>
  );
}
