import { motion } from "motion/react"
export default function Loader() {
    const dotVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    }
    return (
       <div className="fixed inset-0 size-full flex justify-center items-center bg-white z-[51]">
            <motion.div
                animate="pulse"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                className="flex justify-center items-center gap-5"
            >
                <motion.div className="size-5 rounded-full bg-[#09216D] will-change-transform" variants={dotVariants} />
                <motion.div className="size-5 rounded-full bg-[#09216D] will-change-transform" variants={dotVariants} />
                <motion.div className="size-5 rounded-full bg-[#09216D] will-change-transform" variants={dotVariants} />

            </motion.div>
       </div>
    )
}
