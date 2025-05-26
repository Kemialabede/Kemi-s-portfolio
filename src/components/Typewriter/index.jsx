import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ textBefore, textSpan, typingSpeed = 100 }) => {
  const [displayedBefore, setDisplayedBefore] = useState('');
  const [displayedSpan, setDisplayedSpan] = useState('');
  const [phase, setPhase] = useState('before');
  const ref = useRef(null);

  // Handle typing logic
  useEffect(() => {
    let timeout;

    if (phase === 'before' && displayedBefore.length < textBefore.length) {
      timeout = setTimeout(() => {
        setDisplayedBefore(textBefore.slice(0, displayedBefore.length + 1));
      }, typingSpeed);
    } else if (phase === 'before') {
      setPhase('span');
    } else if (phase === 'span' && displayedSpan.length < textSpan.length) {
      timeout = setTimeout(() => {
        setDisplayedSpan(textSpan.slice(0, displayedSpan.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedBefore, displayedSpan, phase, textBefore, textSpan, typingSpeed]);

  // Detect when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayedBefore('');
          setDisplayedSpan('');
          setPhase('before');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <h1 className="hero-title" ref={ref}>
      {displayedBefore}
      <span>{displayedSpan}</span>
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
