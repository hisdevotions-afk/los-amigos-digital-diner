import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Cervejas", href: "#cervejas" },
  { label: "Drinks", href: "#drinks" },
  { label: "Sobremesas", href: "#sobremesas" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 glass border-b border-border/40"
      />
      <nav className="container relative flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Los Amigos"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/60 shadow-gold"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <div className="hidden sm:block">
            <p className="font-display text-xl tracking-wider text-gradient-gold leading-none">Los Amigos</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Restaurante & Pizzaria</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-fire after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="lg:hidden h-11 w-11 rounded-full glass flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border/40"
        >
          <ul className="container py-4 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};
