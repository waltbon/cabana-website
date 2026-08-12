import { domAnimation } from 'framer-motion';

// Re-exported as default so it can be dynamically imported by LazyMotion,
// deferring the framer-motion animation engine off the critical path.
export default domAnimation;
