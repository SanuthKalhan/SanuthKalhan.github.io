import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased relative min-h-screen">
        {/* Everything inside bg-canvas will scroll with the content */}
        <div className="bg-canvas">
          <div className="bg-grid-scroll" />
          <div className="math-features" />
        </div>
        
        {/* Grain is fixed for texture depth */}
        <div className="bg-grain-overlay" />
        
        {children}
      </body>
    </html>
  );
}