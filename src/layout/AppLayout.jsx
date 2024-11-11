import { Outlet } from "react-router-dom";
import "../app.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-bg"></div>
      <main className="min-h-screen container mx-auto">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
