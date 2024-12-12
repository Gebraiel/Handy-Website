import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
