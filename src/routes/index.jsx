import { Route, Routes } from "react-router-dom";
import {
  HomeView,
  CatalogsView,
  InstitutionsView,
  AllNewsView,
  ContactsView,
  NewsItemView,
  LeadershipView,
} from "../pages";
import { About } from "../components";

export const ClientRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<HomeView />} />
          <Route path="/catalogs" element={<CatalogsView />} />
          <Route path="/institutions" element={<InstitutionsView />} />
          <Route path="/contact" element={<ContactsView />} />
          <Route path="/news" element={<AllNewsView />} />
          <Route path="/item/:newsId" element={<NewsItemView />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<LeadershipView />} />
        </Route>
      </Routes>
    </>
  );
};
