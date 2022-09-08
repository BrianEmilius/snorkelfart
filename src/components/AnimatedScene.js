import { motion } from "framer-motion"
import { pageVariants } from "../helpers/variants"

export default function AnimatedScene({children}) {
	return (
		<motion.main
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={{ease: "easeInOut"}}
		>
			{children}
		</motion.main>
	)
}