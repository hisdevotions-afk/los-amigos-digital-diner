import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="relative h-11 w-11 rounded-full glass flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-glow"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -25, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 25, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-gold" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
