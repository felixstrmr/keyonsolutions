import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import CalEmbed from "@/components/cal-embed";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="size-full">
      <section className="mx-auto max-w-3xl px-3 py-32">
        <Badge className="mb-8 [&>svg]:size-3" variant="secondary">
          100% DSGVO-konform <ShieldCheckIcon />
        </Badge>

        <h1 className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-xs font-semibold text-5xl leading-tight tracking-tight">
          Von manuell zu automatisiert
          <br />– in wenigen{" "}
          <div className="inline-flex items-center justify-center rounded-md bg-primary p-1.5 align-middle shadow-lg">
            <SparklesIcon className="inline-block size-8 text-primary-foreground" />{" "}
          </div>{" "}
          Schritten
        </h1>

        <p className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-xs motion-delay-200 mt-4 max-w-[660px] text-lg text-muted-foreground">
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
      </section>

      <section className="relative z-40 border-y border-dashed py-32">
        <div className="mx-auto w-full max-w-3xl px-3">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100 flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <ZapIcon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg tracking-tight">
                Schnelle Umsetzung
              </h3>
              <p className="text-muted-foreground text-sm">
                Von der Analyse bis zur Implementierung in wenigen Wochen
                realisiert.
              </p>
            </div>

            <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-delay-200 flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <CheckCircleIcon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg tracking-tight">
                Maßgeschneidert
              </h3>
              <p className="text-muted-foreground text-sm">
                Jede Lösung wird individuell auf Ihre Prozesse und Anforderungen
                angepasst.
              </p>
            </div>

            <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-delay-300 flex flex-col gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
                <ClockIcon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg tracking-tight">
                Zeitersparnis
              </h3>
              <p className="text-muted-foreground text-sm">
                Automatisierung spart wertvolle Zeit für Ihr Team und Ihr
                Unternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative scroll-mt-20 py-32" id="how-we-work">
        <div className="mx-auto w-full max-w-3xl px-3">
          <div className="mb-12">
            <Badge className="mb-4" variant="secondary">
              Unser Prozess
            </Badge>
            <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
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
                className="motion-opacity-in-0 motion-translate-y-in-100 flex gap-6 border-border border-l-2 pl-6"
                key={item.step}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex shrink-0 flex-col">
                  <span className="font-bold font-mono text-2xl text-primary">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-semibold text-xl tracking-tight">
                    {item.title}
                  </h3>
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

      <section
        className="relative scroll-mt-20 border-border border-t border-dashed py-24"
        id="book-a-meeting"
      >
        <div className="mx-auto w-full max-w-6xl px-3">
          <div className="mb-12 text-center">
            <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
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
