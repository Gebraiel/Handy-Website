import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeDown({ children, duration = 1.4, delay = 0.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      exit={{ opacity: 0, y: 50 }}
    >
      {children}
    </motion.div>
  );
}
