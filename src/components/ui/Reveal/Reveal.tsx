"use client";

import React, { useState, useEffect } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ElementType = 'div' | 'h2' | 'h3' | 'p' | 'ul' | 'li' | 'span';

interface RevealProps extends HTMLMotionProps<any> {
  as?: ElementType;
}

export function Reveal({ as = 'div', children, ...props }: RevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    const { 
      initial, whileInView, viewport, transition, animate, variants,
      whileHover, whileTap, layout, layoutId, style, ...htmlProps 
    } = props;
    
    return React.createElement(as, { ...htmlProps, style }, children as React.ReactNode);
  }

  const MotionComponent = motion[as] as any;
  return <MotionComponent {...props}>{children}</MotionComponent>;
}
