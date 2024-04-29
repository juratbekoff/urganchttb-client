import { Route, Routes } from "react-router-dom";
import {
  Home,
  Catalogs,
  Institutions,
  AllNews,
  Contacts,
  NewsItem,
  Leadership,
  OpenDocuments,
} from "../pages/index.js";
import { About } from "../components";

export const ClientRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/catalogs" element={<Catalogs />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/item/:newsId" element={<NewsItem />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/open-documents" element={<OpenDocuments />} />
        </Route>
      </Routes>
    </>
  );
};
