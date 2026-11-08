import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Flower2,
  Gamepad2,
  Bike,
  Fish,
  Paintbrush2,
  BookOpen,
} from "lucide-react";

const hobbies = [
  {
    title: "Gardening",
    icon: Flower2,
    description: "Growing plants at home, especially non-ornamental ones, while finding comfort in caring for them.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Diving into thriller, mystery, and dark fantasy role-playing games as a dedicated, hardcore gamer.",
  },
  {
    title: "Biking",
    icon: Bike,
    description: "Riding through the city late at night, finding solitude and the clarity to work through problems.",
  },
  {
    title: "Fishing",
    icon: Fish,
    description: "Enjoying the satisfaction of a good catch, then sharing it with my cats.",
  },
  {
    title: "Painting",
    icon: Paintbrush2,
    description: "Painting peaceful landscapes and flowers as a calm, creative outlet.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Reading self-help and motivational books to keep learning and growing.",
  },
];

export default function Hobbies() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 py-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
          Hobbies
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Hobbies & Interests</h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          What I enjoy doing outside of coding.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="flex h-full flex-col rounded-[28px] border border-border/80 bg-card/80 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}