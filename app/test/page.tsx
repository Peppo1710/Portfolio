"use client";
import React from "react";

export default function TestPage() {
  return (
    <div className="min-h-screen flex relative">
      {/* Blue panel */}
      <section className="panel panel-blue flex-1 relative overflow-hidden">
        <div className="panel-glow" />
        <img src="/images/web.jpeg" alt="web object" className="panel-image" />
      </section>

      {/* Green panel */}
      <section className="panel panel-green flex-1 relative overflow-hidden">
        <div className="panel-glow" />
        <img src="/images/blockchain.jpeg" alt="blockchain object" className="panel-image" />
      </section>

      {/* Magenta panel */}
      <section className="panel panel-magenta flex-1 relative overflow-hidden">
        <div className="panel-glow" />
        <img src="/images/hpc.jpeg" alt="hpc object" className="panel-image" />
      </section>

      {/* Center title */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
        <h1 className="site-title">Pradyumn</h1>
      </div>

      <style jsx>{`
        /* Exact solid colors */
        :root {
          --blue: #007bff;
          --green: #00ff9f;
          --magenta: #ff007f;
        }

        /* Panel base */
        .panel {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        /* Solid color backgrounds - no gradients */
        .panel-blue {
          background-color: var(--blue);
        }
        .panel-green {
          background-color: var(--green);
        }
        .panel-magenta {
          background-color: var(--magenta);
        }

        /* Subtle glow for depth */
        .panel-glow {
          position: absolute;
          inset: -15%;
          z-index: 1;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.3;
        }
        
        .panel-blue .panel-glow {
          background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15), transparent 50%);
        }
        .panel-green .panel-glow {
          background: radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.15), transparent 50%);
        }
        .panel-magenta .panel-glow {
          background: radial-gradient(circle at 70% 40%, rgba(255, 255, 255, 0.15), transparent 50%);
        }

        /* Images at 40% opacity - just showing shadows/silhouettes */
        .panel-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 2;
          opacity: 0.4;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* Breathing animation */
        @keyframes breathe {
          0%, 100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.35;
          }
        }
        
        .panel-glow {
          animation: breathe 7s ease-in-out infinite;
        }

        /* Title styling */
        .site-title {
          font-weight: 900;
          color: white;
          font-size: 3rem;
          letter-spacing: -0.03em;
          text-shadow: 
            0 0 40px rgba(0, 0, 0, 0.5),
            0 8px 24px rgba(0, 0, 0, 0.4);
        }

        /* Responsive sizing */
        @media (min-width: 768px) {
          .site-title {
            font-size: 5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .site-title {
            font-size: 7rem;
          }
        }
        
        @media (min-width: 1280px) {
          .site-title {
            font-size: 9rem;
          }
        }

        @media (max-width: 640px) {
          .site-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}