import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="text-center p-12 max-w-lg">
        <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-4xl font-extrabold text-blue-400">404</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-3">Seite nicht gefunden</h1>
        <p className="text-slate-400 mb-8">
          Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie verschoben oder gelöscht.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            <Home className="w-4 h-4" />
            Zur Startseite
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
