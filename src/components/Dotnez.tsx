import { HTMLAttributes, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DotnezProps {}

const Dotnez = ({}: DotnezProps) => {
  const [openDot, setOpenDot] = useState(false);
  
  return (
    <div
      className="bg-red-100 w-10 h-60 fixed z-10 top-0 bottom-0  right-0 m-auto"
      onMouseEnter={() => setOpenDot(true)}
      onMouseLeave={() => setOpenDot(false)}>
      <AnimatePresence>
        {openDot && (
          <motion.div
            initial={{ x: 80 }}
            animate={{ x: -20 }}
            exit={{ x: 100 }}
            transition={{ease:"easeInOut",duration:0.3}}
            className="group fixed rounded-full bg-amber-200 w-24 h-24 right-0 p-2">
            <div className="opacity-0 group-hover:opacity-100 bg-amber-300 w-full h-full rounded-full transition-opacity  ease-in-out duration-500"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dotnez;
