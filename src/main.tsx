import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

/**
 * vite-react-ssg entry point.
 *
 * - `npm run dev`       → standard Vite dev server (SPA mode, hot reload)
 * - `npm run build:ssg` → pre-renders all 22 routes to physical HTML files
 *
 * The router (BrowserRouter / StaticRouter) is injected automatically
 * by vite-react-ssg depending on the environment (client vs. SSG build).
 */
export const createRoot = ViteReactSSG(
  { routes },
  undefined, // fn hook
  { basename: import.meta.env.BASE_URL }
);
