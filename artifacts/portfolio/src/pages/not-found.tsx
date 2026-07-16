import { FC } from "react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground font-mono">
      <div className="max-w-md w-full text-center p-8 border border-border/50 rounded-lg bg-card/30">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Endpoint Not Found</h2>
        <p className="text-muted-foreground mb-8 text-sm">
          The requested system node does not exist in the current namespace.
        </p>
        <Link href="/">
          <div className="inline-flex px-6 py-3 border border-primary/50 text-primary hover:bg-primary/10 transition-colors rounded-sm cursor-pointer items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Return to Core Interface
          </div>
        </Link>
      </div>
    </div>
  );
}
