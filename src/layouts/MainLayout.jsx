import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
