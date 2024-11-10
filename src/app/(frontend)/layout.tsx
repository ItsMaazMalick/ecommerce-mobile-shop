import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full lg:w-[calc(100dvw-256px)] max-h-[100dvh] overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
