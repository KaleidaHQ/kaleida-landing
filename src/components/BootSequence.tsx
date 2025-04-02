import React from 'react';

export default function BootSequence() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-neon-green font-mono text-xl">
        <p>KALEIDA OS v1.0</p>
        <p>Initializing...</p>
        <p className="animate-pulse">Press any key to continue</p>
      </div>
    </div>
  );
}
