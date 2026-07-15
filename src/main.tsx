import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "@/contexts/SessionProvider.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({ defaultOptions: { queries: { staleTime: 60000 } } });

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={client}>
            <SessionProvider>
                <App />
                <Toaster />
            </SessionProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>,
);
