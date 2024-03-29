import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import theme from "./theme";
import reportWebVitals from "./reportWebVitals";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/vt323";
import "@fontsource/outfit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
