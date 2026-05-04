'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatTime, cn } from '@/lib/utils';
import type { PortfolioItem } from '@/lib/types';

interface AudioPlayerProps {
  track: PortfolioItem;
  isActive: boolean;
  onActivate: () => void;
}

const BAR_COUNT = 40;
const barHeights = Array.from({ length: BAR_COUNT }, (_, i) => {
  const seed = Math.sin(i * 7.3 + 13) * 0.5 + 0.5;
  return 0.2 + seed * 0.8;
});

export function AudioPlayer({ track, isActive, onActivate }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isActive && playing) {
      audioRef.current?.pause();
      setPlaying(false);
    }
  }, [isActive, playing]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    onActivate();

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  }, [playing, onActivate]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  }, [duration]);

  return (
    <motion.div
      layout
      className={cn(
        'rounded-2xl overflow-hidden glass border transition-all duration-500',
        isActive && playing
          ? 'border-accent/40 shadow-[0_0_40px_var(--color-accent-glow)]'
          : 'border-border hover:border-border-strong'
      )}
    >
      <audio
        ref={audioRef}
        src={track.src ?? ''}
        muted={muted}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => {
          setDuration(audioRef.current?.duration ?? 0);
          setLoaded(true);
        }}
        onEnded={() => setPlaying(false)}
      />

      <div className="flex items-center gap-4 p-4">
        {/* Artwork */}
        <div className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-surface-2">
          <Image
            src={track.thumbnail}
            alt={track.title}
            fill
            className="object-cover"
            sizes="64px"
          />
          <div className={cn(
            'absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300',
            playing && isActive ? 'opacity-100' : 'opacity-0'
          )}>
            <div className="flex items-end gap-0.5 h-5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1 bg-accent rounded-full waveform-bar"
                  style={{
                    height: '20px',
                    animationDelay: `${i * 0.2}s`,
                    animationPlayState: playing && isActive ? 'running' : 'paused',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <p className="font-display text-sm font-semibold text-text truncate">
                {track.title}
              </p>
              {track.subtitle && (
                <p className="text-xs text-muted truncate">{track.subtitle}</p>
              )}
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              {track.genre && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  {track.genre}
                </span>
              )}
            </div>
          </div>

          {/* Waveform progress */}
          <div
            className="flex items-end gap-px h-8 cursor-pointer mb-1"
            onClick={seek}
            title="Seek"
          >
            {barHeights.map((h, i) => {
              const pct = duration > 0 ? currentTime / duration : 0;
              const played = i / BAR_COUNT <= pct;
              return (
                <div
                  key={i}
                  className={cn(
                    'flex-1 rounded-sm transition-colors duration-100',
                    played ? 'bg-accent' : 'bg-white/15'
                  )}
                  style={{ height: `${h * 100}%` }}
                />
              );
            })}
          </div>

          {/* Time */}
          <div className="flex items-center justify-between text-xs text-muted">
            <span>{formatTime(currentTime)}</span>
            <span>{track.duration ?? (duration > 0 ? formatTime(duration) : '—')}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            className="text-muted hover:text-text transition-colors p-1"
            onClick={() => setMuted((v) => !v)}
            aria-label="Toggle mute"
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          <motion.button
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
              playing && isActive
                ? 'bg-accent text-white'
                : 'bg-white/10 text-text hover:bg-accent hover:text-white'
            )}
            onClick={togglePlay}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <AnimatePresence mode="wait">
              {playing && isActive ? (
                <motion.span
                  key="pause"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Pause size={16} fill="currentColor" />
                </motion.span>
              ) : (
                <motion.span
                  key="play"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Play size={16} fill="currentColor" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
