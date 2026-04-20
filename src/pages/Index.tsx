import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuIntro } from "@/components/MenuIntro";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { categories } from "@/data/menu";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <MenuIntro />
          {categories.map((cat, i) => (
            <CategorySection key={cat.id} category={cat} reversed={i % 2 === 1} />
          ))}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
