export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Romain Couyoumtzélis. All rights reserved.</p>
      </div>
    </footer>
  );
}
