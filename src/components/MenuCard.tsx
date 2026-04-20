import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import type { MenuItem } from "@/data/menu";

interface Props {
  item: MenuItem;
  index: number;
}

export const MenuCard = ({ item, index }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative perspective-1000"
    >
      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative p-5 md:p-6 rounded-2xl glass hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-default"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground group-hover:text-gradient-gold transition-all">
              {item.name}
            </h3>
            {item.description && (
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
          {item.price && (
            <div className="shrink-0 text-right">
              <span className="font-display text-xl md:text-2xl text-gradient-fire tracking-wider">
                {item.price}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
