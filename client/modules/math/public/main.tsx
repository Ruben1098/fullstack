import React from "react";
import { createRoot } from "react-dom/client";
import AlmanaccoPage from "../examples";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<AlmanaccoPage />);
}
