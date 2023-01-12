import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  NavigateFunction,
  redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Movies from "./components/BrowseByLanguagePage/Movies";
import AccountPage from "./pages/AccountPage";
import BrowseByLanguagePage from "./pages/BrowseByLanguagePage";
import GetStartedPage from "./pages/GetStartedPage";
import HelpPage from "./pages/HelpPage";
import HomePage from "./pages/HomePage";
import ManageProfiles from "./pages/ManageProfiles";
import MoviesPage from "./pages/MoviesPage";
import MyListPage from "./pages/MyListPage";
import NewAndPopularPage from "./pages/NewAndPopularPage";
import NotFoundPage from "./pages/NotFoundPage";
import StartingPage from "./pages/StartingPage";
import TvShowsPage from "./pages/TvShowsPage";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!auth && <GetStartedPage />} />

        <Route path="/browse" element={<HomePage />} />
        <Route path="/browse/mylist" element={<MyListPage />} />
        <Route
          path="/browse/original-audio"
          element={<BrowseByLanguagePage />}
        />
        <Route path="/browse/tv-shows" element={<TvShowsPage />} />
        <Route path="/browse/movies" element={<MoviesPage />} />
        <Route path="/latest" element={<NewAndPopularPage />} />
        <Route path="/YourAccount" element={<AccountPage />} />
        <Route path="/profiles/manage" element={<ManageProfiles />} />
        <Route path="/helpcenter" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
