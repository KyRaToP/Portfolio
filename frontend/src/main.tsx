import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

/** Vite BASE_URL is "/" or "/Portfolio/" — Router wants no trailing slash (except root). */
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
