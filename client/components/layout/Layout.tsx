import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

const SCROLL_DELAY = 80;

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = (location.state as Record<string, unknown>) || null;
    const scrollTarget = typeof state?.scrollTo === "string" ? state.scrollTo : undefined;

    if (!scrollTarget) {
      return;
    }

    const restState = { ...(state || {}) };
    delete restState.scrollTo;

    const scrollToElement = () => {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.setTimeout(scrollToElement, SCROLL_DELAY);

    if (Object.keys(restState).length > 0) {
      navigate(location.pathname, { replace: true, state: restState });
    } else {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

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
