import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    
    return [element, controls];
}