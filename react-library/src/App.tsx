import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <main className="px-6 py-10">
          <HeroSection />
          <CategoriesSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
