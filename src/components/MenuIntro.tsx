import { motion } from "framer-motion";

export const MenuIntro = () => (
  <section id="cardapio" className="relative pt-28 pb-12 text-center">
    <div className="container max-w-3xl">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.4em] text-gold"
      >
        Nosso Cardápio
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-5xl md:text-7xl text-gradient-fire leading-none"
      >
        Sabores que unem
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-5 text-lg text-muted-foreground"
      >
        Selecionamos cada item pensando em momentos. Bebidas geladas, drinks autorais e
        sobremesas que pedem mais uma rodada.
      </motion.p>
    </div>
  </section>
);
