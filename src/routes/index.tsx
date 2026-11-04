import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Building2, CalendarDays, Dumbbell, Flame, GraduationCap, Hospital, MapPin, Menu, MessageCircle,
  PartyPopper, PawPrint, Play, ShoppingBag, ShoppingCart, Sparkles, Store, TrainFront, TreePalm,
  TrendingUp, Trophy, Waves, Wifi, Zap, X, Car, Bath,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";
import hero from "@/assets/hero-facade.jpg";
import rooftop from "@/assets/rooftop.jpg";
import pool from "@/assets/pool.jpg";
import mall from "@/assets/mall.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilha Stay Home Resort • Riva | Barra Olímpica RJ" },
      { name: "description", content: "O 1º Home Stay com conceito resort no Parque Ilha Pura. Apartamentos de 28m² a 70m², rooftop 360° e mall integrado." },
      { property: "og:title", content: "Ilha Stay Home Resort • Riva" },
      { property: "og:description", content: "Breve lançamento na Barra Olímpica: home resort com rooftop 360° e shopping integrado." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "5521999999999";
const WA_MSG = "Olá! Gostaria de receber a apresentação completa e a tabela de abertura de vendas do Ilha Stay";
const LAUNCH = new Date("2026-12-05T10:00:00-03:00").getTime();

const nav = [
  ["projeto", "O Projeto"], ["investimento", "Rentabilidade & Investimento"], ["plantas", "Plantas"],
  ["lazer", "Lazer"], ["mall", "Mall"], ["localizacao", "Localização"],
] as const;

function Index() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCta={openModal} menu={menu} setMenu={setMenu} />
      <Hero />
      <Investment />
      <VideoShowcase />
      <Plans onCta={openModal} />
      <Leisure />
      <Mall />
      <Location />
      <Credits />
      <FinalForm />
      <Footer />

      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MSG)}`}
        target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-nature text-primary-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">Tabela de Abertura</DialogTitle>
            <DialogDescription>Pré-cadastre-se e receba a tabela e condições exclusivas antes de todos.</DialogDescription>
          </DialogHeader>
          <LeadForm full cta="Receber Tabela de Abertura" onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Header({ onCta, menu, setMenu }: { onCta: () => void; menu: boolean; setMenu: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-primary-foreground/10 bg-primary/80 text-primary-foreground backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-display text-xl font-semibold tracking-wide">
          Ilha Stay <span className="text-gold">Home Resort</span> <span className="text-sm opacity-70">• Riva</span>
        </a>
        <nav className="hidden items-center gap-6 text-[13px] xl:flex">
          {nav.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="opacity-80 transition hover:text-gold hover:opacity-100">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="gold" size="sm" onClick={onCta}>Tabela de Abertura</Button>
          <button className="xl:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="flex flex-col gap-1 border-t border-primary-foreground/10 px-5 py-3 xl:hidden">
          {nav.map(([id, l]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="py-2 text-sm">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = now === null ? 0 : Math.max(0, LAUNCH - now);
  return [
    ["Dias", Math.floor(diff / 864e5)], ["Horas", Math.floor(diff / 36e5) % 24],
    ["Min", Math.floor(diff / 6e4) % 60], ["Seg", Math.floor(diff / 1e3) % 60],
  ] as const;
}

function Hero() {
  const cd = useCountdown();
  return (
    <section id="top" className="relative overflow-hidden text-primary-foreground">
      <img src={hero} alt="Fachada do Ilha Stay Home Resort" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:pb-24 lg:pt-36">
        <div>
          <p className="eyebrow">Breve lançamento • Barra Olímpica • Rio de Janeiro</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Venha, Viva, Fique: <span className="text-gold">O 1º Home Stay com Conceito Resort</span> no Parque Ilha Pura
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">
            Apartamentos de 28m² a 70m² com varanda, rooftop 360° para a praia e Pedra da Gávea, e shopping integrado na porta de casa. O cenário perfeito para morar ou lucrar com temporada.
          </p>
          <div className="mt-8">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium"><CalendarDays className="h-4 w-4 text-gold" /> Abertura Oficial de Vendas em Breve</p>
            <div className="flex gap-3">
              {cd.map(([l, v]) => (
                <div key={l} className="w-16 rounded-xl border border-primary-foreground/20 bg-primary/40 py-3 text-center backdrop-blur sm:w-20">
                  <div className="font-display text-3xl font-semibold tabular-nums">{String(v).padStart(2, "0")}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-elegant sm:p-8">
          <p className="eyebrow">Condição de lançamento</p>
          <h2 className="mb-5 mt-2 font-display text-2xl font-semibold">Garanta prioridade na tabela de abertura</h2>
          <LeadForm />
          <p className="mt-3 text-center text-xs text-muted-foreground">Seus dados estão protegidos. Sem spam.</p>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className={`mt-4 text-base ${light ? "opacity-80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Investment() {
  const items = [
    [TrendingUp, "+R$ 2,7 Bilhões", "em investimentos na região (Projeto Imagine)"],
    [Trophy, "Polo de grandes eventos", "Parque Olímpico e Riocentro garantindo ocupação o ano todo"],
    [Building2, "6º sucesso da Riva", "na região — mais de 2.000 unidades lançadas"],
    [Store, "Mall integrado", "11 lojas no térreo para valorização máxima"],
  ] as const;
  return (
    <section id="investimento" className="bg-primary py-20 text-primary-foreground">
      <div id="projeto" className="mx-auto max-w-7xl px-5">
        <SectionHead light eyebrow="Tese de investimento & Short Stay" title="Uma oportunidade rara para morar ou lucrar" sub="Localização, demanda e conveniência que sustentam alta ocupação e valorização." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 transition hover:border-gold/60">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  const [shorts, setShorts] = useState(false);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Vídeo tour oficial" title="Uma Experiência Imersiva no Ilha Stay" sub="Assista ao vídeo oficial e conheça cada detalhe da arquitetura, lazer e conveniências." />
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-elegant">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/bT46XBSiOUo" title="Vídeo oficial Ilha Stay" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </div>
          <div className="mx-auto w-full max-w-[300px] rounded-[2rem] border-8 border-primary bg-primary p-1 shadow-elegant">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.4rem] bg-primary">
              {shorts ? (
                <iframe className="h-full w-full" src="https://www.youtube.com/embed/J9ej8TOUc1c?autoplay=1" title="Teaser Ilha Stay" allow="autoplay; encrypted-media" allowFullScreen />
              ) : (
                <button onClick={() => setShorts(true)} className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-primary-foreground">
                  <img src={rooftop} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground shadow-gold transition group-hover:scale-110"><Play className="h-7 w-7" /></span>
                  <span className="relative font-display text-2xl font-semibold">Teaser Rápido em 40s</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  { id: "sq", tab: "Sala e Quarto", m: "28m²", title: "Sala e Quarto", d: "Sala integrada à cozinha, quarto reservado e terraço coberto de 3,5m². Máxima liquidez para locação por temporada.", tags: ["1 quarto", "Terraço 3,5m²", "Ideal short stay"] },
  { id: "ds", tab: "Double Suítes", m: "47m²", title: "Double Suítes", d: "Duas suítes independentes garantindo total privacidade para hóspedes ou famílias.", tags: ["2 suítes", "Varanda", "Privacidade total"] },
  { id: "gsq", tab: "Gardens Sala e Quarto", m: "48m²", title: "Gardens Sala e Quarto", d: "O charme do apartamento térreo com quintal privativo ao ar livre.", tags: ["1 quarto", "Quintal privativo", "Térreo"] },
  { id: "gds", tab: "Gardens Double Suítes", m: "70m²", title: "Gardens Double Suítes", d: "Exclusividade máxima com 2 suítes e amplo terraço privativo.", tags: ["2 suítes", "Amplo terraço", "Exclusividade"] },
];

function Plans({ onCta }: { onCta: () => void }) {
  return (
    <section id="plantas" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Plantas inteligentes" title="Do studio ao garden: a planta certa para o seu objetivo" />
        <Tabs defaultValue="sq">
          <TabsList className="mx-auto mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent">
            {plans.map((p) => (
              <TabsTrigger key={p.id} value={p.id} className="rounded-full border border-border bg-card px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {p.tab} <span className="ml-1.5 text-gold">{p.m}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((p) => (
            <TabsContent key={p.id} value={p.id}>
              <div className="grid items-center gap-8 rounded-3xl bg-card p-8 shadow-elegant md:grid-cols-[220px_1fr] md:p-12">
                <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <span className="font-display text-6xl font-semibold text-gold">{p.m.replace("m²", "")}</span>
                  <span className="text-sm uppercase tracking-widest opacity-70">m² privativos</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{t}</span>)}
                  </div>
                  <Button variant="gold" className="mt-7 h-11 px-6" onClick={onCta}>Solicitar Memorial e Preço desta Planta</Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function Leisure() {
  const blocks = [
    { img: rooftop, title: "No Rooftop", sub: "Vista 360° Praia e Pedra da Gávea", items: [
      [Waves, "Pool House privativa com churrasqueira"], [PartyPopper, "Salão de Festas com Lounge Gourmet"],
      [Dumbbell, "Academia panorâmica (Wellness Stay)"], [ShoppingCart, "Mini Mercado e Lavanderia (Facility Stay)"],
    ] },
    { img: pool, title: "No Térreo", sub: "Clube Aquático & Relaxamento", items: [
      [Waves, "Piscina com Raia de 25m, Deck Molhado e Gazebos"], [Flame, "Bar da Piscina e Piscina Infantil"],
      [Bath, "Spa, Sauna Úmida, Massagem e Espaço Beauty"], [Wifi, "Coworking completo"],
      [PawPrint, "Pet Place"], [Zap, "Recarga para Carro Elétrico"],
    ] },
  ] as const;
  return (
    <section id="lazer" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Lazer completo" title="Duas experiências de resort em um só endereço" />
        <div className="grid gap-8 lg:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="overflow-hidden rounded-3xl bg-card shadow-elegant">
              <div className="relative h-64">
                <img src={b.img} alt={b.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-hero opacity-70" />
                <div className="absolute bottom-5 left-6 text-primary-foreground">
                  <h3 className="font-display text-3xl font-semibold">{b.title}</h3>
                  <p className="text-sm opacity-85">{b.sub}</p>
                </div>
              </div>
              <ul className="grid gap-4 p-7 sm:grid-cols-2">
                {b.items.map(([Icon, t]) => (
                  <li key={t} className="flex items-start gap-3 text-sm">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-nature" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mall() {
  return (
    <section id="mall" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <img src={mall} alt="Ilha Stay Mall" loading="lazy" width={1280} height={896} className="h-full min-h-72 w-full object-cover" />
        <div className="flex flex-col justify-center p-10 lg:p-16">
          <p className="eyebrow">Ilha Stay Mall</p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Conveniência na porta de casa</h2>
          <p className="mt-5 leading-relaxed opacity-80">11 lojas integradas no térreo, com praça comercial externa e interna e estacionamento rotativo. Mais praticidade para moradores e hóspedes — e mais valorização para o seu patrimônio.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[[ShoppingBag, "11 lojas"], [TreePalm, "Praças"], [Car, "Rotativo"]].map(([I, l]) => {
              const Icon = I as typeof ShoppingBag;
              return (
                <div key={l as string} className="rounded-xl border border-primary-foreground/15 p-4 text-center">
                  <Icon className="mx-auto h-6 w-6 text-gold" /><p className="mt-2 text-sm">{l as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const pts = [
    [TreePalm, "Parque Frans Krajcberg", "1 min a pé"], [TrainFront, "BRT Ilha Pura", "a pé"],
    [GraduationCap, "Colégio pH", "a pé"], [Waves, "Praia da Barra", "10 min"],
    [ShoppingBag, "Shopping Metropolitano", "15 min"], [Hospital, "Hospital Barra D'Or", "15 min"],
  ] as const;
  return (
    <section id="localizacao" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Localização privilegiada" title="A 1 minuto a pé do Parque Frans Krajcberg" sub="Ilha Pura — 72 mil m² de verde — e a 10 min da Praia da Barra." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pts.map(([Icon, t, d]) => (
            <div key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nature/15 text-nature"><Icon className="h-5 w-5" /></span>
              <div><p className="font-semibold">{t}</p><p className="text-sm text-gold">{d}</p></div>
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Barra Olímpica, Rio de Janeiro — RJ</p>
      </div>
    </section>
  );
}

function Credits() {
  return (
    <section className="border-y border-border bg-secondary py-12">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 text-center sm:grid-cols-3">
        {[["Fachada", "Feu Arquitetura"], ["Projeto", "Afonso Kuenerz Arquitetura"], ["Realização", "Construtora Riva (Grupo Direcional)"]].map(([l, n]) => (
          <div key={l}><p className="eyebrow">{l}</p><p className="mt-2 font-display text-2xl font-semibold">{n}</p></div>
        ))}
      </div>
    </section>
  );
}

function FinalForm() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <Sparkles className="h-8 w-8 text-gold" />
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Receba a apresentação completa e a tabela de abertura</h2>
          <p className="mt-4 text-muted-foreground">Cadastre-se agora e tenha acesso antecipado às melhores unidades e condições de lançamento.</p>
        </div>
        <div className="rounded-3xl bg-card p-8 shadow-elegant">
          <LeadForm full cta="Quero Receber a Tabela" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl space-y-3 px-5 text-center text-xs opacity-75">
        <p className="font-display text-xl opacity-100">Ilha Stay Home Resort • Riva</p>
        <p>Realização: Construtora Riva — Grupo Direcional. Imagens meramente ilustrativas.</p>
        <p>Empreendimento em fase de pré-lançamento; incorporação a ser registrada no Cartório de Registro de Imóveis (RI) competente. Vendas somente após o registro.</p>
        <p>CRECI: ____________</p>
      </div>
    </footer>
  );
}
