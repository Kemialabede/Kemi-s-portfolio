import { motion } from 'framer-motion';

const Loader = () => {
  const barCount = 5; // Number of vertical bars

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh', // Cover the full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background to make it pop
        zIndex: 9999, // Ensure it's on top of other content
      }}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            width: '10px', // Width of each vertical bar
            height: '0%', // Start height at 0
            background: 'linear-gradient(135deg,rgb(200, 194, 35),rgb(18, 19, 19))', // Customize gradient
            borderRadius: '5px',
          }}
          initial={{ height: '0%', opacity: 0 }}
          animate={{ height: '100%', opacity: 1 }}
          transition={{
            delay: i * 0.5, // Stagger animation for each bar
            duration: 1.5, // Duration for each bar to fill
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;
