import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 py-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact Me</h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Have a question, collaboration idea, or project in mind? Reach out below!
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-4">
          <Card className="rounded-[24px] border border-border/80 bg-card/80 shadow-sm">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-2xl bg-primary/10 p-2.5 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                <p className="mt-1 text-sm font-semibold">fsanpascual@gbox.ncf.edu.ph</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[24px] border border-border/80 bg-card/80 shadow-sm">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-2xl bg-primary/10 p-2.5 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Phone</p>
                <p className="mt-1 text-sm font-semibold">+63 991-283-0569</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[24px] border border-border/80 bg-card/80 shadow-sm">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-2xl bg-primary/10 p-2.5 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Location</p>
                <p className="mt-1 text-sm font-semibold">Naga City, Philippines</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-[28px] border border-border/80 bg-card/80 shadow-sm md:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I’ll get back to you soon.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Name" className="rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Email" className="rounded-xl" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Project Inquiry / Hello" className="rounded-xl" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" rows={4} placeholder="Your message here..." className="rounded-xl" required />
              </div>

              <Button type="submit" className="w-full rounded-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}