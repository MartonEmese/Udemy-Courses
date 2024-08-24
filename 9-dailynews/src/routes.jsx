import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Contact from "./components/contact";
import MainLayout from "./layouts/mainLayout";
import PostComponent from "./components/posts";

const Router = () => {

  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:id" element={<PostComponent />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router;