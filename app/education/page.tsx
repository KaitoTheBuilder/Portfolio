import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "BS in Information Technology",
    institution: "Naga College Foundation, Inc.",
    period: "2025 - 2028",
    description: "Focused on building full-stack applications.",
    achievements: ["Dean's List (All Semesters)"],
  },
  {
    degree: "Senior High School Education",
    institution: "Naga College Foundation, Inc.",
    period: "2023 - 2025",
    description: "Completed the General Academic Strand (GAS), which let me explore different fields before choosing a college path.",
    achievements: ["Honor Student (All Years)", "Research Leader"],
  },
  {
    degree: "High School Education",
    institution: "Naga College Foundation, Inc.",
    period: "2018 - 2023",
    description: "Built an early foundation in academics, communication, and critical thinking.",
    achievements: ["Honor Student (All Years)"],
  },
];

export default function Education() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 py-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
          Education
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Academic Background</h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Academic background and formal training.
        </p>
      </section>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx} className="overflow-hidden rounded-[28px] border border-border/80 bg-card/80 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-2.5 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                  {item.period}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <p className="text-base text-muted-foreground">{item.description}</p>
              <div className="rounded-2xl bg-muted/60 p-4">
                <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
                  <Award className="h-4 w-4 text-primary" /> Key Highlights
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}