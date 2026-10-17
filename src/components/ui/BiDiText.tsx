'use client';

import React from 'react';

export const BiDiText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <bdi dir="ltr" className={`font-mono inline-block unicode-bidi-isolate ${className}`}>
    {children}
  </bdi>
);
