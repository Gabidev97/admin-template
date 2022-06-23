import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../data/Context/AppContext";
import { AuthProvider } from "../data/Context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
