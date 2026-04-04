import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
