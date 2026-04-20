import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border/40 bg-gradient-dark">
      <div className="container py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Los Amigos" className="h-14 w-14 rounded-full ring-2 ring-gold/60" />
            <div>
              <p className="font-display text-2xl text-gradient-gold leading-none">Los Amigos</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Restaurante & Pizzaria</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Onde a comida é boa, os drinks são gelados e os amigos são para sempre.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-4 tracking-wider">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> (00) 0000-0000</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Av. Principal, 123 — Centro</li>
            <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" /> Ter–Dom · 18h às 00h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-4 tracking-wider">Siga-nos</h4>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:border-gold/50 hover:text-gold transition-all hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            @losamigos
          </a>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Los Amigos · Feito com 🔥 para os amigos
        </div>
      </div>
    </footer>
  );
};
