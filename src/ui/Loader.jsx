import { motion } from "motion/react"
export default function Loader() {
  console.log("Loader is rendered");
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
                className="container"
            >
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
                <StyleSheet />
            </motion.div>
       </div>
    )
}

function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #09216D;
                will-change: transform;
            }
            `}
        </style>
    )
}

