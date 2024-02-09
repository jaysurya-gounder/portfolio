import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedComponent = ({ children }) => {
    const animatedRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (animatedRef.current) {
            observer.observe(animatedRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                AOS.refreshHard();
                AOS.init();
            }
        });
    };

    return (
        <div ref={animatedRef} >
            {children}
        </div>
    );
};

export default AnimatedComponent;
