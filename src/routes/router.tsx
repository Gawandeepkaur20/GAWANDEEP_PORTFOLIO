import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { LoadingScreen } from "@/layouts/LoadingScreen";

const HomePage = lazy(() => import("@/routes/HomePage"));
const AssistantPage = lazy(() => import("@/routes/AssistantPage"));
const GitHubDashboardPage = lazy(() => import("@/routes/GitHubDashboardPage"));
const ContactPage = lazy(() => import("@/routes/ContactPage"));
const ResumeViewerPage = lazy(() => import("@/routes/ResumeViewerPage"));
const AnalyticsPage = lazy(() => import("@/routes/AnalyticsPage"));
const NotFoundPage = lazy(() => import("@/routes/NotFoundPage"));
const FutureModulePage = lazy(() =>
  import("@/routes/FutureModulePage").then((module) => ({ default: module.FutureModulePage })),
);

const routeFallback = (
  <div className="min-h-screen bg-background">
    <LoadingScreen />
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={routeFallback}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "assistant",
        element: (
          <Suspense fallback={routeFallback}>
            <AssistantPage />
          </Suspense>
        ),
      },
      {
        path: "github",
        element: (
          <Suspense fallback={routeFallback}>
            <GitHubDashboardPage />
          </Suspense>
        ),
      },
      {
        path: "resume",
        element: (
          <Suspense fallback={routeFallback}>
            <ResumeViewerPage />
          </Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <Suspense fallback={routeFallback}>
            <AnalyticsPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={routeFallback}>
            <FutureModulePage
              title="About"
              description="A narrative module for Gawandeep's engineering principles, AI focus, and career story is reserved for the next implementation phase."
            />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={routeFallback}>
            <FutureModulePage
              title="Projects"
              description="Project data, case studies, filters, and GitHub integrations are intentionally deferred so the foundation stays clean and extensible."
            />
          </Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <Suspense fallback={routeFallback}>
            <FutureModulePage
              title="Experience"
              description="The timeline and certifications architecture can plug into this route without changing the shared layout or design system."
            />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={routeFallback}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={routeFallback}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
