import {
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import CalEmbed from "@/components/cal-embed";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="size-full">
      <section className="mx-auto h-screen max-w-3xl px-3 pt-12">
        <Badge className="mb-8 text-sm [&>svg]:size-3" variant="secondary">
          100% DSGVO-konform <ShieldCheckIcon />
        </Badge>

        <h1 className="text-5xl leading-tight tracking-tight">
          Von manuell zu automatisiert
          <br />– in wenigen{" "}
          <div className="inline-flex size-12 items-center justify-center rounded-md bg-primary/10 shadow-lg">
            <SparklesIcon className="inline-block size-6 text-primary" />{" "}
          </div>{" "}
          Schritten
        </h1>

        <p className="mt-4 max-w-[660px] text-lg text-muted-foreground">
          Wir verwandeln zeitraubende manuelle Abläufe in effiziente,
          automatisierte Prozesse – damit Sie sich auf ihr Kerngeschäft
          fokussieren können.
        </p>

        <div className="mt-8 flex gap-2">
          <Link
            className={buttonVariants({ variant: "secondary", size: "lg" })}
            href="#"
          >
            Wie wir arbeiten
          </Link>
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href="#book-a-meeting"
          >
            Gespräch buchen
          </Link>
        </div>

        <div className="mt-3 flex items-center gap-1">
          <div className="size-2 animate-pulse rounded-full bg-primary" />
          <p className="text-sm">2 Slots verfügbar</p>
        </div>
      </section>

      <section className="border-y border-dashed py-32">
        <div className="mx-auto w-full max-w-3xl px-3">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="0 flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <ZapIcon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg tracking-tight">Schnelle Umsetzung</h3>
              <p className="text-muted-foreground text-sm">
                Von der Analyse bis zur Implementierung in wenigen Wochen
                realisiert.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <CheckCircleIcon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg tracking-tight">Maßgeschneidert</h3>
              <p className="text-muted-foreground text-sm">
                Jede Lösung wird individuell auf Ihre Prozesse und Anforderungen
                angepasst.
              </p>
            </div>

            <div className="0 flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <ClockIcon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg tracking-tight">Zeitersparnis</h3>
              <p className="text-muted-foreground text-sm">
                Automatisierung spart wertvolle Zeit für Ihr Team und Ihr
                Unternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" id="how-we-work">
        <div className="mx-auto w-full max-w-3xl px-3">
          <div className="mb-12">
            <Badge className="mb-4" variant="secondary">
              Unser Prozess
            </Badge>
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              Wie wir arbeiten
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ein strukturierter Ansatz für nachhaltige Lösungen
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Analyse & Beratung",
                description:
                  "Wir analysieren Ihre aktuellen Prozesse und identifizieren Automatisierungspotenziale gemeinsam mit Ihnen.",
              },
              {
                step: "02",
                title: "Konzeption & Planung",
                description:
                  "Basierend auf der Analyse entwickeln wir ein maßgeschneidertes Konzept für Ihre Automatisierungslösung.",
              },
              {
                step: "03",
                title: "Umsetzung & Integration",
                description:
                  "Wir implementieren die Lösung und integrieren sie nahtlos in Ihre bestehenden Systeme und Workflows.",
              },
              {
                step: "04",
                title: "Optimierung & Support",
                description:
                  "Nach der Implementierung optimieren wir kontinuierlich und bieten langfristigen Support für Ihre Lösung.",
              },
            ].map((item, index) => (
              <div
                className="flex gap-6 border-border border-l-2 pl-6"
                key={item.step}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex shrink-0 flex-col">
                  <span className="font-bold font-mono text-2xl text-primary">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              className={buttonVariants({ variant: "default", size: "lg" })}
              href="#book-a-meeting"
            >
              Jetzt starten
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-3 py-32" id="pricing">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight">
            Einfache, transparente Preise
          </h1>
          <p className="mt-3 text-muted-foreground">
            Wählen Sie das Paket, das zu Ihrem Digitalisierungstempo passt
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Pro Plan */}
          <div className="rounded-xl bg-card p-8">
            <div>
              <h2 className="text-xl">Pro</h2>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl tracking-tight">2.495 €</h3>
                <span className="text-muted-foreground">/Monat</span>
              </div>
            </div>

            <Separator className="my-6" />

            <li className="flex gap-2.5">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm">10h Kontingent pro Monat</span>
            </li>

            <Button className="mt-8 w-full" variant="outline">
              Pro wählen
            </Button>
          </div>

          {/* Ultra Plan */}
          <div className="relative rounded-xl border border-primary/50 bg-card p-8 shadow-[0_0_50px_rgba(190,242,100,0.025)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground text-xs">
                Beliebt
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <ZapIcon className="size-5 text-primary" />
                <h2 className="text-xl">Ultra</h2>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl tracking-tight">5.495 €</h3>
                <span className="text-muted-foreground">/Monat</span>
              </div>
            </div>

            <Separator className="my-6" />

            <li className="flex gap-2.5">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm">25h Kontingent pro Monat</span>
            </li>

            <Button className="mt-8 w-full">Ultra wählen</Button>
          </div>
        </div>

        {/* Ad-hoc Option */}
        <div className="mt-6 rounded-xl bg-card p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl">Ad-hoc & Custom</h2>
            </div>
            <div className="shrink-0">
              <Button size="lg" variant="outline">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-32 border-border border-t border-dashed py-24"
        id="book-a-meeting"
      >
        <div className="mx-auto w-full max-w-6xl px-3">
          <div className="mb-12 text-center">
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              Lassen Sie uns sprechen
            </h2>
            <p className="mt-4 text-muted-foreground">
              Buchen Sie ein kostenloses Beratungsgespräch und erfahren Sie, wie
              wir Ihre Prozesse optimieren können.
            </p>
          </div>
          <CalEmbed />
        </div>
      </section>
    </div>
  );
}
