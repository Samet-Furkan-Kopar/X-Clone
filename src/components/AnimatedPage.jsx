import { motion } from "framer-motion";
import propTypes from "prop-types";

const animations = {
    initial: {
        opacity: 0,
        transfomrY: 100,
    },
    animate: {
        opacity: 1,
        transfomrY: 0,
    },
    exit: {
        opacity: 0,
        transfomrY: 100,
    },
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    );
};

export default AnimatedPage;

AnimatedPage.propTypes = {
    children: propTypes.node.isRequired,
};
