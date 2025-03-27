import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load components
const HeroBanner = lazy(() => import("../components/HeroBanner.jsx"));
const StrategyVision = lazy(() => import("../components/StrategyVision"));
const WhatWeDo = lazy(() => import("../pages/WhatWeDo.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));

// Fallback component with visible styling
function LoadingFallback() {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        height: "100px",
        background: "#f0f0f0"
      }}
    >
      Loading...
    </div>
  );
}

function ErrorFallback({error}) {
  return (
    <div style={{ padding: "20px", color: "red" }}>
      Something went wrong: {error.message}
    </div>
  );
}

function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <HeroBanner />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <WhatWeDo />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <StrategyVision />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default Home;