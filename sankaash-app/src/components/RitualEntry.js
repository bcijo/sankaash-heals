import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RitualEntry.css';

const RitualEntry = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasEntered = localStorage.getItem('hasEnteredSpiritualHome');
        if (!hasEntered) {
            setIsVisible(true);
        }
    }, []);

    const handleEnter = () => {
        setIsVisible(false);
        localStorage.setItem('hasEnteredSpiritualHome', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="ritual-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
                >
                    <div className="ritual-content">
                        <h2 className="ritual-message">
                            "Pause. Breathe. Enter with awareness."
                        </h2>
                        <button className="ritual-button" onClick={handleEnter}>
                            Enter
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RitualEntry;
