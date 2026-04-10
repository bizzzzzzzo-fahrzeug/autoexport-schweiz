import React from 'react';
import { Outlet } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import AppLayout from '@/components/AppLayout';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import ContactPage from '@/pages/ContactPage';
import LegalPage from '@/pages/LegalPage';
import AdminPage from '@/pages/AdminPage';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

/**
 * Root provider wrapper — supplies all global context/state.
 * Replaces the provider tree that was in App.tsx.
 * React Router is injected externally by vite-react-ssg (no BrowserRouter needed here).
 */
const AppProviders: React.FC = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

/**
 * Full route tree — mirrors the original App.tsx <Routes> structure,
 * but expressed as a RouteObject[] config compatible with vite-react-ssg
 * and React Router v6 data APIs.
 *
 * Route paths are RELATIVE to their parent (React Router v6 convention).
 */
export const routes: RouteObject[] = [
  {
    // Root wrapper: provides global context + injects router outlet
    path: '/',
    element: <AppProviders />,
    children: [
      {
        // Shared layout (Navbar, Footer, WhatsApp button)
        element: <AppLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'service/:slug', element: <ServicePage /> },
          { path: 'kontakt', element: <ContactPage /> },
          // Legal pages — datenschutz | impressum | agb
          { path: ':page', element: <LegalPage /> },
        ],
      },
      // Admin — standalone (no Navbar/Footer)
      { path: 'admin', element: <AdminPage /> },
      // 404 catch-all
      { path: '*', element: <NotFound /> },
    ],
  },
];
