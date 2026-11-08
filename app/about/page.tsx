import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiSharp,
  SiGithub,
  SiGraphql,
  SiShadcnui,
} from "react-icons/si";

const skills = [
  { name: "JavaScript / TypeScript", icon: SiJavascript },
  { name: "React & Next.js", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js & Express", icon: SiNodedotjs },
  { name: "MySQL / Oracle", icon: SiMysql },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "C#", icon: SiSharp },
  { name: "Git & GitHub", icon: SiGithub },
  { name: "REST APIs & GraphQL", icon: SiGraphql },
  { name: "Shadcn UI", icon: SiShadcnui },
];

export default function About() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 py-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
          About
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Me</h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          A bit about my background, passion, and technical skillset.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <Card className="rounded-[28px] border border-border/80 bg-card/80 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">My Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I’m a student who loves learning to code and building apps that I can actually use. For me,
              the best part of programming is making something real — a tool that solves a problem or makes my day
              a little easier, instead of just reading about how it’s done.
            </p>
            <p>
              I spend much of my time creating websites and applications for hackathons. Hackathons are where I learn fastest.
              With a tight deadline, a small team, and an idea to turn into a working product, I have to make quick decisions,
              learn new tools on the spot, and ship something that works. Every event leaves me with new skills, new ideas,
              and a project I’m proud of.
            </p>
            <p>
              I especially enjoy fullstack development. I like owning a project from end to end: designing the interface
              people see, building the logic behind it, and connecting the two so it all works together. Seeing an idea go
              from a rough sketch to a working app is what keeps me coding.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-[28px] border border-border/80 bg-card/80 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-2xl bg-muted/70 p-3.5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Based in</p>
              <p className="mt-2 text-base font-medium text-foreground">Naga City, Philippines</p>
            </div>
            <div className="rounded-2xl bg-muted/70 p-3.5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Focus</p>
              <p className="mt-2 text-base font-medium text-foreground">Fullstack development and Game Development</p>
            </div>
            <div className="rounded-2xl bg-muted/70 p-3.5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Approach</p>
              <p className="mt-2 text-base font-medium text-foreground">Building apps I’d use myself, learning by doing, and turning ideas into working products</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-[28px] border border-border/80 bg-card/80 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl">What drives me</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li className="rounded-2xl bg-muted/70 px-4 py-2">• Building apps I’d use myself</li>
            <li className="rounded-2xl bg-muted/70 px-4 py-2">• Learning by doing, one project at a time</li>
            <li className="rounded-2xl bg-muted/70 px-4 py-2">• Turning ideas into working products under hackathon pressure</li>
            <li className="rounded-2xl bg-muted/70 px-4 py-2">• Understanding the whole stack, from frontend to backend</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-[28px] border border-border/80 bg-card/80 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl">Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2.5">
            {skills.map(({ name, icon: Icon }) => (
              <Badge
                key={name}
                variant="secondary"
                className="flex items-center gap-2 rounded-full border border-border/80 px-3 py-1.5 text-sm"
              >
                <Icon className="h-3.5 w-3.5" />
                {name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}