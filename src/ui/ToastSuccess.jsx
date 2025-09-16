import { motion } from "motion/react";
export default function ToastSuccess({ message }) {
  return (
    <motion.div
      initial="from"
      variants={{
        from: { y: "var(--y-from)", x: "var(--x-from)" },
        to: { y: "var(--y-to)", x: "var(--x-to)" },
        exit: { y: "var(--y-exit)", x: "var(--x-exit)" },
      }}
      animate="to"
      exit="exit"
      className="toast md:top-[50px] top-[20px] md:w-fit w-full right-0 text-center  p-5 bg-green-500 text-white md:rounded-l-md rounded-md z-[100] fixed
                [--x-from:0]
                [--y-from:-100%]
                [--x-to:0]
                [--y-to:0]
                [--x-exit:0]
                [--y-exit:-100%]
                md:[--x-from:100%]
                md:[--y-from:0]
                md:[--x-to:0]
                md:[--y-to:0]
                md:[--x-exit:100%]
                md:[--y-exit:0]
        "
    >
      {message}
    </motion.div>
  );
}
