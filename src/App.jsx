import HelloRouter from "./router/HelloRouter.jsx";
import { ToolkitProvider } from "./stores/toolkit/ToolkitProvider.jsx";

export default function App() {
  return (
    <ToolkitProvider>
      <HelloRouter />
    </ToolkitProvider>
  );
}

//export default App;
