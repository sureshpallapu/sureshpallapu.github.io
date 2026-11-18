
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
