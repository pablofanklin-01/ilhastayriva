import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  AirVent, Baby, Building2, CalendarDays, Car, DoorClosed, Droplets, Dumbbell, Fence, Flame,
  GraduationCap, HandCoins, Hospital, KeyRound, Landmark, Leaf, Lightbulb, MapPin, Menu,
  MessageCircle, PartyPopper, PawPrint, Percent, Play, Recycle, ShieldCheck, ShoppingBag,
  ShoppingCart, Sparkles, Store, TrainFront, TreePalm, TrendingUp, Trophy, Users, Waves, Wifi, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";
import hero from "@/assets/hero-facade.jpg";
import rooftop from "@/assets/rooftop.jpg";
import pool from "@/assets/pool.jpg";
import mall from "@/assets/mall.jpg";
import difAcabamentos from "@/assets/diferencial-acabamentos.png.asset.json";
import difPadrao from "@/assets/diferencial-padrao.png.asset.json";
import difSustentabilidade from "@/assets/diferencial-sustentabilidade.png.asset.json";
import planta1qTipo from "@/assets/planta-1quarto-tipo.png.asset.json";
import planta1qSuite from "@/assets/planta-1quarto-suite.png.asset.json";
import planta1qGarden from "@/assets/planta-1quarto-garden.png.asset.json";
import plantaDouble from "@/assets/planta-double-suite.png.asset.json";
import plantaDoubleGarden from "@/assets/planta-double-suite-garden.png.asset.json";

// Imagens de Localização
import localizacao01 from "@/assets/localizacaostay01.png";
import localizacao02 from "@/assets/localizacaostay02.png";
import localizacao03 from "@/assets/localizacaostay03.png";
import localizacao04 from "@/assets/localizacaostay04.png";
import localizacao05 from "@/assets/localizacaostay05.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilha Stay Home Resort • Riva | Financiamento Sem Juros na Barra Olímpica RJ" },
      { name: "description", content: "Financiamento direto com a Construtora Riva SEM JUROS. Apartamentos de 28m² a 70m², todos com varanda, rooftop 360° e mall integrado no Parque Ilha Pura." },
      { property: "og:title", content: "Ilha Stay Home Resort • Riva — Condição Sem Juros" },
      { property: "og:description", content: "Breve lançamento na Barra Olímpica: financiamento direto sem juros, home resort com rooftop 360° e shopping integrado." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "5521988722552";
const WA_MSG = "Olá! Gostaria de receber a tabela de preços oficial e a simulação sem juros do Ilha Stay Home Resort.";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MSG)}`;
const LAUNCH = new Date("2026-12-05T10:00:00-03:00").getTime();

const nav = [
  ["projeto", "O Projeto"], ["financiamento", "Sem Juros"], ["plantas", "Plantas"],
  ["diferenciais", "Diferenciais"], ["lazer", "Lazer"], ["localizacao", "Localização"], ["faq", "Dúvidas"],
] as const;

function Index() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCta={openModal} menu={menu} setMenu={setMenu} />
      <Hero />
      <Financing />
      <Investment />
      <VideoShowcase />
      <Plans onCta={openModal} />
      <Features />
      <Leisure />
      <Mall />
      <Location />
      <Faq />
      <Credits />
      <FinalForm />
      <Footer />

      <a
        href={waLink}
        target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-110"
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
            Apartamentos de 28m² a 70m², todos com varanda, rooftop 360° para a praia e Pedra da Gávea, e shopping integrado na porta de casa. O cenário perfeito para morar ou lucrar com temporada.
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

function Financing() {
  const badges = [
    [Percent, "Sem Juros Direto com a Construtora"],
    [HandCoins, "Entrada Parcelada no Período de Obras"],
    [Landmark, "Possibilidade de Uso do FGTS"],
    [Users, "Composição de Renda entre até 3 Pessoas"],
  ] as const;
  return (
    <section id="financiamento" className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <p className="eyebrow">Oportunidade inédita</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Condição Especial de Lançamento: <span className="text-gold">Financiamento Direto com a Construtora Riva SEM JUROS</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">
          Parcelamento facilitado direto com a incorporadora com taxa zero de juros no período de obras.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(([Icon, t]) => (
            <div key={t} className="flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-primary-foreground/5 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground shadow-gold">
                <Icon className="h-6 w-6" />
              </span>
              <p className="text-sm font-medium leading-snug">{t}</p>
            </div>
          ))}
        </div>
        <Button asChild variant="gold" className="mt-10 h-14 px-10 text-base">
          <a href={waLink} target="_blank" rel="noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> Simular Condição Sem Juros
          </a>
        </Button>
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
    <section id="investimento" className="py-20">
      <div id="projeto" className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Tese de investimento & Short Stay" title="Uma oportunidade rara para morar ou lucrar" sub="Localização, demanda e conveniência que sustentam alta ocupação e valorização." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:border-gold/60 hover:shadow-elegant">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
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
    <section className="bg-secondary py-20">
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
  {
    id: "1q-tipo", tab: "1 Quarto Tipo", m: "28m²", title: "1 Quarto Tipo", img: planta1qTipo,
    d: "Varanda coberta, living integrado e cozinha de serviço. A planta mais compacta do empreendimento, perfeita para rentabilidade short-stay.",
    tags: ["1 quarto", "Terraço coberto 3,5m²", "Ideal short stay"],
    areas: ["Área privativa: 24,65m² a 25,09m²", "Terraço coberto: 3,51m²", "Total: 28,16m² a 28,60m²"],
  },
  {
    id: "1q-suite", tab: "1 Quarto com Suíte", m: "35m²", title: "1 Quarto com Suíte", img: planta1qSuite,
    d: "Circulação independente, suíte ampla e varanda. Mais conforto e privacidade para morar ou receber hóspedes.",
    tags: ["1 suíte", "Varanda", "Circulação independente"],
    areas: ["Área privativa: 29,70m²", "Terraço coberto: 5,35m²", "Total: 35,05m²"],
  },
  {
    id: "1q-garden", tab: "1 Quarto Garden", m: "até 48m²", title: "1 Quarto Garden", img: planta1qGarden,
    d: "Quintal privativo com terraço descoberto e espaço para hidromassagem. O charme de uma casa no térreo do resort.",
    tags: ["1 quarto", "Quintal privativo", "Espaço p/ hidromassagem"],
    areas: ["Área privativa: 24,65m² a 25,09m²", "Terraço descoberto: até 19,75m²", "Total: até 48,35m²"],
  },
  {
    id: "double", tab: "Double Suíte Tipo", m: "47m²", title: "Double Suíte Tipo", img: plantaDouble,
    d: "2 suítes privativas e independentes com banheiros exclusivos. Máxima flexibilidade para hóspedes ou famílias.",
    tags: ["2 suítes", "Banheiros exclusivos", "Privacidade total"],
    areas: ["Área privativa: 41,27m² a 42,35m²", "Terraço coberto: 5,24m²", "Total: 46,51m² a 47,59m²"],
  },
  {
    id: "double-garden", tab: "Double Suíte Garden", m: "70m²", title: "Double Suíte Garden", img: plantaDoubleGarden,
    d: "Uma verdadeira mansão térrea com mais de 23m² de jardim privativo ao ar livre e 2 suítes independentes.",
    tags: ["2 suítes", "Jardim 23,36m²", "Exclusividade máxima"],
    areas: ["Área privativa: 42,35m²", "Terraço descoberto: 23,36m²", "Total: 70,95m²"],
  },
];

function Plans({ onCta }: { onCta: () => void }) {
  return (
    <section id="plantas" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Plantas & Tipologias" title="Do 1 quarto ao garden: a planta certa para o seu objetivo" />
        <div className="mx-auto mb-10 flex max-w-3xl items-center gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground shadow-gold">
            <Fence className="h-6 w-6" />
          </span>
          <p className="text-sm font-medium leading-snug sm:text-base">
            <span className="font-semibold">Exclusividade:</span> 100% das unidades possuem Varanda (Terraço Coberto), inclusive as opções de 1 quarto.
          </p>
        </div>
        <Tabs defaultValue="1q-tipo">
          <TabsList className="mx-auto mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent">
            {plans.map((p) => (
              <TabsTrigger key={p.id} value={p.id} className="rounded-full border border-border bg-card px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {p.tab} <span className="ml-1.5 text-gold">{p.m}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((p) => (
            <TabsContent key={p.id} value={p.id}>
              <div className="overflow-hidden rounded-3xl bg-card shadow-elegant">
                <div className="bg-secondary p-4 sm:p-8">
                  <img src={p.img.url} alt={`Planta ${p.title} — Ed. Noronha e Ed. Ilhabela`} loading="lazy" className="mx-auto w-full max-w-3xl rounded-xl shadow-sm" />
                </div>
                <div className="grid gap-8 p-8 md:grid-cols-[1fr_260px] md:p-10">
                  <div>
                    <h3 className="font-display text-3xl font-semibold">{p.title} <span className="text-gold">• {p.m}</span></h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{t}</span>)}
                    </div>
                    <Button variant="gold" className="mt-7 h-11 px-6" onClick={onCta}>Solicitar Apresentação e Valores</Button>
                  </div>
                  <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                    <p className="eyebrow">Áreas</p>
                    <ul className="mt-4 space-y-3 text-sm">
                      {p.areas.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function Features() {
  const pillars = [
    {
      img: difAcabamentos, title: "Acabamento & Design", sub: "Padrão Riva em cada detalhe",
      items: [
        [Fence, "Varandas com guarda-corpo de alumínio e vidro"],
        [DoorClosed, "Esquadrias de alumínio na cor preta"],
        [KeyRound, "Fechadura eletrônica entregue nos apartamentos"],
        [ShoppingBag, "Bancadas em granito e lazer 100% mobiliado e equipado"],
      ],
    },
    {
      img: difPadrao, title: "Conforto & Lazer Resort", sub: "Infraestrutura de resort de verdade",
      items: [
        [Waves, "Piscinas adulto, infantil e hidromassagem"],
        [Flame, "Sauna a vapor"],
        [Zap, "Vaga com previsão para carro elétrico e previsão de gerador"],
        [TreePalm, "Gardens com previsão para grill e piscina privativa"],
      ],
    },
    {
      img: difSustentabilidade, title: "Sustentabilidade & Economia", sub: "Menor custo de condomínio",
      items: [
        [Recycle, "Reuso de águas pluviais"],
        [Droplets, "Medição individual de água (menor custo de condomínio)"],
        [Lightbulb, "Iluminação em LED nas áreas comuns"],
        [Leaf, "Sensores de presença nos halls dos blocos"],
      ],
    },
  ] as const;
  return (
    <section id="diferenciais" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Diferenciais & Acabamentos" title="Três pilares que valorizam cada metro quadrado" sub="Do acabamento entregue à economia no condomínio: detalhes que fazem diferença para morar e para investir." />
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-3xl bg-card shadow-elegant">
              <div className="relative">
                <img src={p.img.url} alt={`Diferenciais de ${p.title}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-left" />
                <div className="absolute inset-0 bg-gradient-hero opacity-60" />
                <div className="absolute bottom-4 left-5 text-primary-foreground">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="text-xs opacity-85">{p.sub}</p>
                </div>
              </div>
              <ul className="space-y-4 p-7">
                {p.items.map(([Icon, t]) => (
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

function Leisure() {
  const blocks = [
    { img: rooftop, title: "No Rooftop", sub: "Vista 360° Praia e Pedra da Gávea", items: [
      [Waves, "Pool House privativa com churrasqueira"], [PartyPopper, "Salão de Festas com Lounge Gourmet"],
      [Dumbbell, "Academia panorâmica (Wellness Stay)"], [ShoppingCart, "Mini Mercado e Lavanderia (Facility Stay)"],
    ] },
    { img: pool, title: "No Térreo", sub: "Clube Aquático & Relaxamento", items: [
      [Waves, "Piscina com Raia de 25m, Deck Molhado e Gazebos"], [Baby, "Bar da Piscina e Piscina Infantil"],
      [Flame, "Spa, Sauna Úmida, Massagem e Espaço Beauty"], [Wifi, "Coworking completo"],
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
  const minutes = [
    [TreePalm, "Parque Ilha Pura", "a pé"], [TrainFront, "BRT Ilha Pura", "a pé"],
    [GraduationCap, "Colégio pH", "a pé"], [Waves, "Praia da Barra", "10 min"],
    [Hospital, "Hospital Rio Barra", "5 min"],
  ] as const;
  const perspective = [
    [ShoppingBag, "Shoppings", "Conexão direta com os principais shoppings da região"],
    [Waves, "Lagoas", "Entre a Lagoa de Jacarepaguá e o litoral da Barra"],
    [Building2, "Centro Metropolitano", "Ao lado do novo polo comercial da Barra Olímpica"],
  ] as const;
  const imagine = [
    [TrendingUp, "R$ 2,7 Bi", "de investimento no Projeto Imagine"],
    [Sparkles, "R$ 92,2 Bi", "de impacto estimado na economia"],
    [Trophy, "Farmasi Arena", "demanda constante para aluguel por temporada"],
  ] as const;
  return (
    <section id="localizacao" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Localização privilegiada" title="Barra Olímpica: o endereço que mais valoriza no Rio" sub="A vida em minutos, conexão total com a cidade e um polo de investimento bilionário ao redor." />

        {/* Bloco 1: A Vida em Minutos */}
        <div className="overflow-hidden rounded-3xl bg-card shadow-elegant">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <img src={locMinutos} alt="A Vida em Minutos - Parque Ilha Pura e Conexões" className="h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-10">
            <p className="eyebrow">Mobilidade & Conveniência</p>
            <h3 className="mt-2 font-display text-3xl font-semibold">A Vida em Minutos</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {minutes.map(([Icon, t, d]) => (
                <div key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600/15 text-emerald-600"><Icon className="h-5 w-5" /></span>
                  <div><p className="font-semibold">{t}</p><p className="text-sm text-gold">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco 2 e 3: Perspectiva e Projeto Imagine */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-card shadow-elegant">
            <div className="relative aspect-video w-full overflow-hidden">
              <img src={locPerspectiva} alt="Barra Olímpica em Perspectiva Aérea" className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow">Localização Estratégica</p>
              <h3 className="mt-2 font-display text-3xl font-semibold">Barra Olímpica em Perspectiva</h3>
              <ul className="mt-6 space-y-5">
                {perspective.map(([Icon, t, d]) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"><Icon className="h-5 w-5" /></span>
                    <div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-elegant">
            <div className="relative aspect-video w-full overflow-hidden">
              <img src={locImagine} alt="Parque Olímpico e Projeto Imagine" className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow">Polo de Investimento</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-gold">Projeto Imagine</h3>
              <ul className="mt-6 space-y-5">
                {imagine.map(([Icon, t, d]) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground"><Icon className="h-5 w-5" /></span>
                    <div><p className="font-display text-xl font-semibold text-gold">{t}</p><p className="text-sm opacity-80">{d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Barra Olímpica, Rio de Janeiro — RJ</p>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Como funciona o financiamento direto com a Construtora Riva sem juros?",
    a: "Você parcela o valor do imóvel diretamente com a incorporadora, sem banco e com taxa zero de juros durante todo o período de obras. A entrada também pode ser parcelada. Ao final da obra, o saldo pode ser quitado ou migrado para um financiamento bancário, se você preferir.",
  },
  {
    q: "Posso usar o meu FGTS na compra?",
    a: "Sim. O Ilha Stay permite a possibilidade de uso do FGTS, tanto para compor a entrada quanto para amortizar o saldo, conforme as regras da Caixa e o enquadramento do comprador. Nossa equipe faz a análise do seu caso sem compromisso.",
  },
  {
    q: "É possível compor renda com outras pessoas?",
    a: "Sim. É possível fazer composição de renda entre até 3 pessoas, o que facilita a aprovação e amplia as condições de pagamento — ideal para casais, familiares ou sócios investidores.",
  },
  {
    q: "O apartamento pode ser explorado com locação por temporada (short stay)?",
    a: "Sim. O Ilha Stay foi concebido como Home Stay: você pode morar ou explorar a locação de temporada. A localização ao lado do Parque Olímpico, da Farmasi Arena e do Riocentro sustenta demanda o ano todo, e a infraestrutura de resort (rooftop, piscinas, mall integrado) maximiza a diária média e a ocupação.",
  },
  {
    q: "Todas as unidades realmente têm varanda?",
    a: "Sim. 100% das unidades possuem varanda com terraço coberto, inclusive as opções de 1 quarto — um diferencial raro em plantas compactas e que valoriza tanto o uso próprio quanto a locação.",
  },
  {
    q: "Quando começam as vendas e como garantir a tabela de abertura?",
    a: "O empreendimento está em pré-lançamento. Quem se pré-cadastra recebe a tabela de abertura e as condições exclusivas antes do público geral, com prioridade na escolha das unidades. Basta preencher o formulário desta página ou chamar no WhatsApp.",
  },
];

function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="Dúvidas frequentes" title="Perguntas & Respostas" sub="Financiamento sem juros, FGTS, composição de renda e locação por temporada." />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5 [&:not(:last-child)]:mb-3">
              <AccordionTrigger className="text-left font-semibold hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
          <p className="mt-4 text-muted-foreground">Cadastre-se agora e tenha acesso antecipado às melhores unidades e condições de lançamento — incluindo o financiamento direto sem juros com a Riva.</p>
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
        <p className="pt-2 text-sm font-medium opacity-100">Atendimento Exclusivo e Credenciado • Imoverso Imobiliária • CRECI-RJ: 8960</p>
      </div>
    </footer>
  );
}
