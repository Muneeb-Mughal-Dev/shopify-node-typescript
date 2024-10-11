import "vite/modulepreload-polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../components/App";
import "./theme.css";

declare global {
  interface Window {
    showToast: (message: string, type: "success" | "error") => void;
    home: string;
  }
}

const home = window.home;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App home={home} />
  </React.StrictMode>
);
