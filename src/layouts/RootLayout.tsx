import { Outlet } from "react-router-dom";
import { BackToTop } from "@/layouts/BackToTop";
import { CommandPalette } from "@/components/CommandPalette";
import { FloatingAssistantButton } from "@/components/FloatingAssistantButton";
import { Footer } from "@/layouts/Footer";
import { LoadingScreen } from "@/layouts/LoadingScreen";
import { Navbar } from "@/layouts/Navbar";
import { OfflineBanner } from "@/components/OfflineBanner";
import { ScrollProgress } from "@/layouts/ScrollProgress";
import { ThemeToggle } from "@/features/theme/ThemeToggle";

export function RootLayout() {
  return (
    <>
      <LoadingScreen />
      <OfflineBanner />
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <Footer />
      <CommandPalette />
      <FloatingAssistantButton />
      <ThemeToggle />
      <BackToTop />
    </>
  );
}
