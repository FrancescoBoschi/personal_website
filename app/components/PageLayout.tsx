import Sidebar from './Sidebar';
import Navigation from './Navigation';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
          <Sidebar />
          <main className="space-y-8">
            <Navigation />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
