import { motion } from "framer-motion";
import type { MenuCategory } from "@/data/menu";
import { MenuCard } from "./MenuCard";

interface Props {
  category: MenuCategory;
  reversed?: boolean;
}

export const CategorySection = ({ category, reversed }: Props) => {
  return (
    <section id={category.id} className="relative py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative perspective-1000">
              <motion.div
                whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative rounded-3xl overflow-hidden shadow-deep group"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-5xl md:text-6xl">{category.emoji}</span>
                </div>
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-fire opacity-20 blur-3xl -z-10 rounded-full" />
            </div>
          </motion.div>

          {/* Items side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-gold">Categoria</span>
              <h2 className="mt-3 font-display text-5xl md:text-6xl lg:text-7xl text-gradient-fire leading-none">
                {category.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">{category.tagline}</p>
              <div className="mt-6 h-1 w-24 bg-gradient-fire rounded-full" />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {category.items.map((item, i) => (
                <MenuCard key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
