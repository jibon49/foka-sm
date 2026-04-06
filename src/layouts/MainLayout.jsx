import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <main>{children}</main>
    </div>
  );
}
