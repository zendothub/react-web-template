import AppThemeProvider from "./styles/theme/ThemeProvider";
import AppRoutes from "./routes/AppRoutes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </AppThemeProvider>
  );
}

export default App;
