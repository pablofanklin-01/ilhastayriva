import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const input =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export function LeadForm({
  full = false,
  cta = "Quero Condição Exclusiva de Lançamento",
  onDone,
}: {
  full?: boolean;
  cta?: string;
  onDone?: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState<"moradia" | "investimento">("investimento");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) { toast.error("Informe seu nome."); return; }
    if (phone.replace(/\D/g, "").length < 10) { toast.error("Informe um WhatsApp válido com DDD."); return; }
    if (full && !/^\S+@\S+\.\S+$/.test(email)) { toast.error("Informe um e-mail válido."); return; }
    toast.success("Cadastro confirmado! Nossa equipe enviará a apresentação e tabela em instantes.");
    setName("");
    setPhone("");
    setEmail("");
    onDone?.();
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input className={input} placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} />
      <input
        className={input}
        placeholder="WhatsApp (DDD) 99999-9999"
        inputMode="tel"
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
      />
      {full && (
        <>
          <input className={input} type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={120} />
          <div className="pt-1">
            <p className="mb-2 text-sm font-medium text-foreground">Meu objetivo:</p>
            <div className="grid grid-cols-2 gap-2">
              {(["moradia", "investimento"] as const).map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`rounded-lg border px-3 py-3 text-sm font-medium transition-colors ${
                    goal === g ? "border-gold bg-gold/15 text-foreground" : "border-input bg-card text-muted-foreground"
                  }`}
                >
                  {g === "moradia" ? "Moradia" : "Investimento / Locação"}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      <Button type="submit" variant="gold" className="h-12 w-full text-sm">
        {cta}
      </Button>
    </form>
  );
}
