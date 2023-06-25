import { Route, Routes } from "react-router-dom";
import {
  HomeView,
  CatalogsView,
  InstitutionsView,
  AllNewsView,
  ContactsView,
  NewsItemView,
} from "../pages";
import { About, Leadership } from "../components";

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
          <Route path="/leadership" element={<Leadership />} />
        </Route>
      </Routes>
    </>
  );
};
