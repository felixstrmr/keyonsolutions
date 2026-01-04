import {
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import CalEmbed from "@/components/cal-embed";
import { KeyonSolutionsIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import DarkVeil from "@/components/ui/dark-veil";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="relative size-full">
      <ProgressiveBlur height="5%" />
      <DarkVeil
        className="-mt-12 max-h-1/2 opacity-25 mix-blend-lighten"
        color="#BEF264"
        speed={1}
      />
      <section className="relative z-40 mx-auto max-w-3xl px-3 pt-24 pb-32">
        <Badge
          className="mb-8 bg-background/50 text-sm backdrop-blur-sm [&>svg]:size-3.5"
          variant="secondary"
        >
          100% DSGVO-konform <ShieldCheckIcon />
        </Badge>

        <h1 className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-5xl leading-tight tracking-tight">
          Von manuell zu automatisiert
          <br />― in wenigen{" "}
          <div className="inline-flex items-center justify-center rounded-sm bg-primary p-3 shadow-lg">
            <KeyonSolutionsIcon className="inline-block h-6 w-auto text-primary-foreground" />{" "}
          </div>{" "}
          Schritten
        </h1>

        <p className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm motion-delay-200 mt-4 max-w-[660px] text-lg text-muted-foreground">
          Wir verwandeln zeitraubende manuelle Abläufe in effiziente,
          automatisierte Prozesse – damit Sie sich auf ihr Kerngeschäft
          fokussieren können.
        </p>

        <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm motion-delay-300 mt-8 flex gap-2">
          <Link
            className={buttonVariants({ variant: "secondary", size: "lg" })}
            href="#subscription-model"
          >
            Abo-Modell kennenlernen
          </Link>
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href="/#book-a-call"
          >
            Erstgespräch buchen
          </Link>
        </div>

        <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm motion-delay-400 mt-3 flex items-center gap-1">
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
              <h3 className="text-lg tracking-tight">Flexibel & planbar</h3>
              <p className="text-muted-foreground text-sm">
                Monatlich kündbar, keine Vertragslaufzeit. Sie zahlen nur für
                die Zeit, die Sie nutzen.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <CheckCircleIcon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg tracking-tight">Kontinuierlich</h3>
              <p className="text-muted-foreground text-sm">
                Statt eines großen Projekts optimieren wir Ihre Prozesse Schritt
                für Schritt, Monat für Monat.
              </p>
            </div>

            <div className="0 flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <ClockIcon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg tracking-tight">Zeitkontingent</h3>
              <p className="text-muted-foreground text-sm">
                Ihr monatliches Stundenkontingent wird transparent erfasst und
                kann flexibel eingesetzt werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" id="subscription-model">
        <div className="mx-auto w-full max-w-3xl px-3">
          <div className="mb-12">
            <Badge className="mb-4" variant="secondary">
              Das Abo-Modell
            </Badge>
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              So funktioniert's
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kontinuierliche Optimierung statt großer Einmalprojekte
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Abo wählen & starten",
                description:
                  "Sie wählen ein passendes Stundenpaket und starten Ihr Abonnement. Monatlich kündbar, keine Vertragsbindung.",
              },
              {
                step: "02",
                title: "Erstgespräch & Analyse",
                description:
                  "In den ersten Stunden analysieren wir gemeinsam Ihre Prozesse und identifizieren die wichtigsten Optimierungspotenziale.",
              },
              {
                step: "03",
                title: "Monatliche Umsetzung",
                description:
                  "Jeden Monat arbeiten wir kontinuierlich an Ihren Prozessen – mit transparenter Zeiterfassung und regelmäßigen Updates.",
              },
              {
                step: "04",
                title: "Flexibel anpassen",
                description:
                  "Sie können jederzeit Ihr Paket wechseln, pausieren oder kündigen. Keine versteckten Kosten, keine Vertragsbindung.",
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
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-3 py-32" id="pricing">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight">
            Einfache, transparente Preise
          </h1>
          <p className="mt-3 text-muted-foreground">
            Monatlich kündbar – wählen Sie das Paket, das zu Ihrem Tempo passt
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Pro Plan */}
          <div className="flex flex-col rounded-xl bg-card p-8">
            <div>
              <h2 className="text-xl">Pro</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Für kontinuierliche Optimierung
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl tracking-tight">2.495 €</h3>
                <span className="text-muted-foreground">/Monat</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex h-full flex-col justify-between">
              <ul className="space-y-3">
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm">
                    10 Stunden Kontingent pro Monat
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm">Monatlich kündbar</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm">Transparente Zeiterfassung</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm">Remote-Support</span>
                </li>
              </ul>

              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-8 w-full"
                )}
                href={"https://buy.stripe.com/test_3cI5kDam5bcHbcb6k32Fa01"}
                target="_blank"
              >
                Pro wählen
              </Link>
            </div>
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
              <p className="mt-2 text-muted-foreground text-sm">
                Für schnelle Digitalisierung
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl tracking-tight">5.495 €</h3>
                <span className="text-muted-foreground">/Monat</span>
              </div>
            </div>

            <Separator className="my-6" />

            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm">25 Stunden Kontingent pro Monat</span>
              </li>
              <li className="flex gap-2.5">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm">Monatlich kündbar</span>
              </li>
              <li className="flex gap-2.5">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm">Transparente Zeiterfassung</span>
              </li>
              <li className="flex gap-2.5">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm">Priorisierter Support</span>
              </li>
              <li className="flex gap-2.5">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm">Vor-Ort-Termine möglich</span>
              </li>
            </ul>

            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-8 w-full"
              )}
              href={"https://buy.stripe.com/test_00wfZh8dX0y3fsr4bV2Fa00"}
              target="_blank"
            >
              Ultra wählen
            </Link>
          </div>
        </div>

        {/* Ad-hoc Option */}
        <div className="mt-6 rounded-xl bg-card p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h2 className="text-xl">Einmalige Projekte</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Sie benötigen nur eine einmalige Optimierung oder haben ein
                spezifisches Projekt?
              </p>
            </div>
            <div className="shrink-0">
              <Button size="lg" variant="outline">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" id="book-a-call">
        <div className="mx-auto w-full max-w-3xl px-3 text-center">
          <h2 className="text-3xl tracking-tight">Buche ein Erstgespräch</h2>
          <p className="mt-3 text-muted-foreground" />
        </div>
        <div className="mt-12">
          <CalEmbed />
        </div>
      </section>
    </div>
  );
}
