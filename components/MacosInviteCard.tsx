'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

const GROW_STEP = 0.08;
const MAX_SCALE = 1.8;
const MALES_BUTTON_SIZE = { width: 104, height: 44 };

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getAyoColor(scale: number): string {
  const intensity = Math.min(100, Math.round((scale - 1) * 100));
  const lightness = Math.min(58, 46 + intensity * 0.12);
  return `hsl(160 78% ${lightness}%)`;
}

export default function MacosInviteCard() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [malesPosition, setMalesPosition] = useState<Position>({ x: 170, y: 0 });
  const [ayoScale, setAyoScale] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const moveMalesButton = useCallback(() => {
    const container = contentRef.current;
    if (!container || accepted) return;

    const bounds = container.getBoundingClientRect();
    const maxX = Math.max(0, bounds.width - MALES_BUTTON_SIZE.width);
    const maxY = Math.max(0, bounds.height - MALES_BUTTON_SIZE.height);

    setMalesPosition({
      x: randomInRange(0, maxX),
      y: randomInRange(0, maxY),
    });

    setAyoScale((prev) => Math.min(MAX_SCALE, prev + GROW_STEP));
  }, [accepted]);

  const handleAccept = useCallback(() => {
    setAccepted(true);
    setConfettiVisible(true);

    const message = encodeURIComponent('Ayo');

    window.setTimeout(() => {
      window.location.href = `https://twitter.com/intent/tweet?text=${message}`;
    }, 1500);
  }, []);

  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, index) => ({
        id: index,
        left: randomInRange(12, 88),
        duration: randomInRange(1.4, 2.4),
        delay: randomInRange(0, 0.5),
      })),
    [],
  );

  return (
    <article className={`mac-window ${mounted ? 'visible' : ''}`}>
      <header className="title-bar">
        <div className="traffic-lights" aria-hidden>
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <p>Hi Sa</p>
      </header>

      <div className="content">
        <h1>Bukber yuk?</h1>
        <p>Semoga kamu berkenan dan ada waktu luang</p>

        {!accepted ? (
          <div className="buttons-zone" ref={contentRef}>
            <button
              type="button"
              className="btn ayo"
              style={{ transform: `scale(${ayoScale})`, backgroundColor: getAyoColor(ayoScale) }}
              onClick={handleAccept}
            >
              Ayo
            </button>

            <button
              type="button"
              className="btn males"
              style={{ transform: `translate(${malesPosition.x}px, ${malesPosition.y}px)` }}
              onMouseEnter={moveMalesButton}
              onTouchStart={moveMalesButton}
            >
              Males
            </button>
          </div>
        ) : (
          <div className="accepted-state">
            {confettiVisible && (
              <div className="confetti-layer" aria-hidden>
                {confettiPieces.map((piece) => (
                  <span
                    key={piece.id}
                    className="confetti"
                    style={{
                      left: `${piece.left}%`,
                      animationDuration: `${piece.duration}s`,
                      animationDelay: `${piece.delay}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHVycWF2YjFlMmlzZG8wNHcyNnJiNjdrdW9udWI2YjN4MXI0ZnY4YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif"
              alt="GIF lucu"
              width={240}
              height={180}
              loading="lazy"
            />
            <p className="accepted-text">Asik! Siap-siap ya 😆</p>
          </div>
        )}
      </div>
    </article>
  );
}
