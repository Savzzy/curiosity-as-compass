import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Page: React.FC = () => {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Curiosity & Depth</h1>
          <p className="text-lg text-muted-foreground">
            A personal journey through philosophy, cognitive science, ethics, and meaning.
          </p>
        </header>

        <section className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">🔍 Current Inquiry</h2>
              <p className="text-muted-foreground">
                What does surrender really mean? Exploring interpretations from Stoicism, Eastern
                philosophy, psychology, and personal reflection.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">📘 Reflections & Readings</h2>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li><em>Meeting the Shadow</em> – Connie Zweig</li>
                <li><em>Meditations</em> – Marcus Aurelius</li>
                <li><em>Adult Children of Emotionally Immature Parents</em></li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">💡 Upcoming Topics</h2>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>AI ethics and humanity vs law</li>
                <li>The psychology of prayer without theism</li>
                <li>Ethical responsibility in tech and life</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          Built with curiosity. Updated as I grow.
        </footer>
      </div>
    </div>
  );
};

export default Page;
