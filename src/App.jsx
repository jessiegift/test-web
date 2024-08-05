import { motion } from "framer-motion"

const gridContainerVariants = {
  hidden: 
    { opacity: 0 },
  show: 
  
  {
    opacity: 1,
            transition: {
              staggerChildren: 0.4,
            },
          },
}

const gridSquareVariants = {
  hidden: { opacity: 0 }, 
  show: { opacity: 1 }
}

const App = () => {
  return (
    <div className=" flex flex-col overflow-x-hidden gap-10">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >

        {/* FADE UP */} 
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-500 aspect-square rounded-3xl justify-center flex items-center gap-10"
        >
          <motion.div
           className=" w-20 h-20 bg-orange-400 rounded-lg"
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: 'backInOut', delay: 0.2}}
          />
          <motion.div
           className=" w-20 h-20 bg-purple-300 rounded-full"
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: 'backInOut', delay: 0.4}}
          />
        </motion.div>
        
        {/* SHAPESHIFT */} 
        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-600 aspect-square rounded-3xl justify-center flex items-center gap-10"
        >
        <motion.div
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 90, 0],
            borderRadius: ["10%", "10%", "50%", "10%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className=" w-1/3 h-1/3 bg-cyan-500 shadow-md"
        />
        </motion.div>


        <motion.div
          variants={gridSquareVariants}
          className=" bg-slate-700 aspect-square rounded-3xl justify-center flex items-center gap-10"
        >
          <motion.button 
            whileHover={{
              scale: 1.3,
              backgroundColor: 'white',
              color: 'black'
            }}
            whileTap={{ scale: 0.7 }}
            transition={{bounceDamping: 10, bounceStiffness: 70}}
            className=" bg-emerald-600 w-1/2 flex justify-center items-center gap-10 tracking-wider rounded-lg py-4 text-gray-200 font-light"
          >
            subscribe
          </motion.button>
        </motion.div>  
      </motion.section>
    </div>
  )
}

export default App
