import { createRoot } from "react-dom/client";
import SearchParam from "./SearchParam";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <header>
                    <Link to="/">Adopt me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParam />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App