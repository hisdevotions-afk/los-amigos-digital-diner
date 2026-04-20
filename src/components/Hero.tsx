import { motion } from "framer-motion";
import { ArrowDown, Flame } from "lucide-react";
import logo from "@/assets/logo.png";
import heroPizza from "@/assets/hero-pizza.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src={heroPizza}
          alt="Pizza artesanal Los Amigos"
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/40 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/30 blur-3xl"
      />

      <div className="container relative z-10 text-center pt-24 pb-16">
        {/* Logo with 3D float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-block perspective-1000"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-fire rounded-full blur-2xl opacity-60 animate-glow-pulse" />
            <img
              src={logo}
              alt="Los Amigos logo"
              className="relative h-40 w-40 md:h-52 md:w-52 rounded-full object-cover ring-4 ring-gold/70 shadow-deep"
              width={208}
              height={208}
            />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Flame className="h-4 w-4 text-ember" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Bem-vindo amigo</span>
          <Flame className="h-4 w-4 text-ember" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-fire text-glow leading-none mb-4"
        >
          LOS AMIGOS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-script text-2xl md:text-3xl text-gold mb-6"
        >
          Restaurante & Pizzaria
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-10"
        >
          Unimos Todas as Gastronomias do Mundo em um Só Lugar
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cardapio"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-fire text-primary-foreground font-semibold tracking-wide overflow-hidden shadow-glow transition-transform hover:scale-105 active:scale-100"
          >
            <span className="relative z-10">Ver Cardápio</span>
            <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-1" />
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#cervejas"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full glass font-semibold tracking-wide hover:border-gold/50 hover:text-gold transition-all hover:scale-105"
          >
            Bebidas Geladas 🍺
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};
