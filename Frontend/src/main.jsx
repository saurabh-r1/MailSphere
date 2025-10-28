import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";
import GlobalLoader from "./components/common/GlobalLoader";  // ✅
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
      <GlobalLoader />   {/* ✅ this will show loader globally */}
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  </StrictMode>
);
