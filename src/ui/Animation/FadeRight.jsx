import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeRight({children,duration=0.5,delay=0}){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0,x:50 }}
      animate={isInView ? { opacity: 1,x:0} : {}}
      transition={{ duration,delay }}
    >
        {children}
    </motion.div>
  );
};
