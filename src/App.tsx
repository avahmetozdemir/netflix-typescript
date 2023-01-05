import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseByLanguagePage from "./pages/BrowseByLanguagePage";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import NotFoundPage from "./pages/NotFoundPage";
import StartingPage from "./pages/StartingPage";
import TvShowsPage from "./pages/TvShowsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/browse" element={<HomePage />} />
        <Route path="/browse/mylist" element={<MyListPage />} />
        <Route
          path="/browse/original-audio"
          element={<BrowseByLanguagePage />}
        />
        <Route path="/browse/tv-shows" element={<TvShowsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
