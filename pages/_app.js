import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/globals.css";
import "@/public/css/SignIn.css";
import "@/public/css/dashboard.css";
import "@/public/css/resposive.css";

// Import Bootstrap JS components if necessary (optional)
import React, { useEffect, useState } from "react";

import AuthProvider from "react-auth-kit";
import createAuthStore from "../utils/authStore";
import { Provider } from "react-redux";
import reduxStore from "@/store/store.js"

function MyApp({ Component, pageProps }) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
      const store = createAuthStore();
      setStore(store);
    }
  }, []);

  if (!store) {
    // Return null or a loading state while the store is being initialized
    return null;
  }

  return (
    <AuthProvider store={store}>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
