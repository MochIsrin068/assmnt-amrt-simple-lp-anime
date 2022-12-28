import React from "react";
import Routes from "./routes";
import { ChakraProvider, theme } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}
