// src/components/ClientComponent.tsx
import type { ReactNode } from 'react';

export default function ClientComponent({ children }: { children: ReactNode }) {
  return (
    <>
      {/* @client */}
      {children}
    </>
  );
}
