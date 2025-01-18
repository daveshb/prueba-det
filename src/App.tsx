import "./App.css";
import "./styles/main.scss";
import { Provider } from "./context/Provider";
import AppRoutes from "./router/approuter";
import { HeroUIProvider } from "@heroui/react";
import { NavbarComponent } from "./components/navbar/index";

function App() {
  return (
    <>
      <HeroUIProvider>
        <Provider>
          <NavbarComponent />
          <AppRoutes />
        </Provider>
      </HeroUIProvider>
    </>
  );
}

export default App;
