import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import AreaCard from "@/components/AreaCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { areas } from "@/data/areas";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [search, setSearch] = useState("");
  const [contactOpen, setContactOpen] = useState(false);

  const sortedAreas = useMemo(() => {
    if (!search.trim()) return areas;
    const q = search.toLowerCase();
    return [...areas].sort((a, b) => {
      const aMatch = matchScore(a, q);
      const bMatch = matchScore(b, q);
      return bMatch - aMatch;
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={() => setContactOpen(true)} />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        <div className="container relative mx-auto px-4">
          <h1 className="mb-3 text-4xl font-bold text-primary-foreground md:text-5xl">
            Find Your Perfect Home in Bangalore
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            Compare rent, schools, hospitals, commute & amenities across Bangalore's top 4 IT corridors
          </p>
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </section>

      {/* Area Cards */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Top IT Areas Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sortedAreas.map((area) => (
            <AreaCard key={area.name} area={area} />
          ))}
        </div>
      </section>

      <Footer />
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

function matchScore(area: (typeof areas)[0], query: string): number {
  let score = 0;
  if (area.name.toLowerCase().includes(query)) score += 10;
  if (area.categories.some((c) => c.includes(query))) score += 5;
  const allText = [
    ...area.schools, ...area.hospitals, ...area.mallsMarkets,
  ].join(" ").toLowerCase();
  if (allText.includes(query)) score += 3;
  return score;
}

export default Index;
