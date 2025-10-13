import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex min-h-screen flex-col pt-[92px]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
