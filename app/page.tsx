import Link from "next/link";
import profileImage from "../asset/Kyle - PFP.jpg";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 py-8 md:space-y-10">
      <section className="grid items-center gap-6 rounded-[28px] border border-border/80 bg-card/80 p-6 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I’m <span className="text-primary">Kyle</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I’m a student developer who builds apps I’d actually use. I love the full stack,
            from the interface people see to the logic behind it, and I turn rough ideas into
            working products with React, Next.js, and clean UI design.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-background px-5 py-2.5 font-medium transition-colors hover:bg-muted"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center overflow-hidden rounded-[28px] border border-border/80 bg-muted/60 p-2">
          <img
            src={profileImage.src}
            alt="Kyle profile"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
          <span className="hidden text-xs uppercase tracking-[0.24em] text-muted-foreground md:inline-block">
            Selected work
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Land Match",
              desc: "A land-leasing marketplace that connects farmers with landowners, with in-app messaging, secure checkout, and an AI assistant that helps owners set up their listings.",
            },
            {
              title: "Kape Coffee",
              desc: "A coffee shop tycoon game where you run your own café and grow it into a business.",
            },
            {
              title: "The Notebook",
              desc: "An offline-first mobile notes app that installs on your phone as a PWA.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col rounded-[24px] border border-border/80 bg-card p-5 shadow-sm transition-colors hover:border-primary/70 hover:bg-card/90"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">01 /</p>
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-border/80 bg-card/80 p-6 shadow-sm md:p-8">
        <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">What I do</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[22px] border border-border/80 bg-muted/60 p-5">
            <h3 className="text-lg font-semibold">Frontend</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Responsive UI, clean design systems, UX-focused pages
            </p>
          </div>
          <div className="rounded-[22px] border border-border/80 bg-muted/60 p-5">
            <h3 className="text-lg font-semibold">Backend</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              APIs, database logic, and app architecture
            </p>
          </div>
          <div className="rounded-[22px] border border-border/80 bg-muted/60 p-5">
            <h3 className="text-lg font-semibold">Game Development</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Creating interactive experiences and gameplay systems that are fun, polished, and engaging.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}