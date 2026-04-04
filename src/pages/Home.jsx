import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ThreeCanvas from '../components/ThreeCanvas';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Rest of Content */}
      <motion.div
        className="min-h-screen pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full px-6 sm:px-8 lg:px-12">
          {/* Welcome Section */}
          <motion.section id="home" className="mb-16 pt-20" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-pink-600 to-sky-600 bg-clip-text text-transparent">
            Welcome to Floka
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            A modern React application built with Vite, Tailwind CSS, Three.js, and Framer Motion. 
            Experience smooth animations and 3D graphics.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Explore
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </motion.section>

        {/* Three.js Canvas Section */}
        <motion.section id="pages" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            3D Visualization
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Interact with this rotating cube powered by Three.js
          </p>
          <ThreeCanvas />
        </motion.section>

        {/* Features Section */}
        <motion.section id="portfolio" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Built with Vite for instant development experience and optimized production builds.',
              },
              {
                icon: '🎨',
                title: 'Beautiful UI',
                description: 'Tailwind CSS provides utility-first CSS for rapid UI development.',
              },
              {
                icon: '✨',
                title: 'Smooth Animations',
                description: 'Framer Motion brings your UI to life with fluid animations and transitions.',
              },
              {
                icon: '🌐',
                title: '3D Graphics',
                description: 'Three.js enables stunning 3D visualizations directly in your browser.',
              },
              {
                icon: '🚀',
                title: 'Modern React',
                description: 'Leverages the latest React features and best practices.',
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Works perfectly on desktop, tablet, and mobile devices.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 hover:shadow-lg dark:hover:shadow-sky-600/20 transition-shadow"
                variants={itemVariants}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          id="blog"
          className="py-12 px-8 rounded-xl bg-gradient-to-r from-sky-600 to-pink-600 text-white text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start building amazing applications with Floka today.
          </p>
          <button className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </motion.section>
      </div>
    </motion.div>
    </>
  );
}
