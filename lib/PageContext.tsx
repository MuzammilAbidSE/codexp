"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

export type PageId =
  | "home"
  | "software-dev"
  | "web-design"
  | "ai-automation"
  | "seo"
  | "mobile-apps"
  | "digital-marketing"
  | "about"
  | "contact";

interface PageContextValue {
  page: PageId;
  goToPage: (page: PageId) => void;
  goToSection: (sectionId: string) => void;
}

const PageContext = createContext<PageContextValue | null>(null);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<PageId>("home");
  const pendingSection = useRef<string | null>(null);

  const goToPage = useCallback((next: PageId) => {
    setPage(next);
    window.scrollTo(0, 0);
  }, []);

  const goToSection = useCallback(
    (sectionId: string) => {
      pendingSection.current = sectionId;
      setPage("home");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        pendingSection.current = null;
      }, 100);
    },
    []
  );

  return (
    <PageContext.Provider value={{ page, goToPage, goToSection }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error("usePage must be used within PageProvider");
  return ctx;
}
