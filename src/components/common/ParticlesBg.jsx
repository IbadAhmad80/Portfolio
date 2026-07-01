import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Initialise the tsParticles engine once, shared across all instances.
let enginePromise;
function ensureEngine() {
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }
  return enginePromise;
}

export default function ParticlesBg({ id, options, className }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    ensureEngine().then(() => mounted && setReady(true));
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) return null;
  return <Particles id={id} className={className} options={options} />;
}
