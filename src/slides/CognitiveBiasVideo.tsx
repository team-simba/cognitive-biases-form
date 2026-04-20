import React, { useRef, useState, useEffect, useCallback } from 'react';

import Background from '../components/Background';
import vid from '../assets/VideoPlayer/exemple-vid.mp4';

const PlayIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PauseIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
    </svg>
);

const Skip15Icon: React.FC<{ direction: 'forward' | 'back' }> = ({ direction }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: direction === 'back' ? 'scaleX(-1)' : undefined }}
    >
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <polyline points="21 3 21 8 16 8" />
        <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="white"
            stroke="none"
            fontSize="7"
            fontWeight="bold"
            fontFamily="sans-serif"
        >
            15
        </text>
    </svg>
);

const FullscreenIcon: React.FC = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
    </svg>
);

const ExitFullscreenIcon: React.FC = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
    </svg>
);

const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

interface CognitiveBiasVideoProps {
    title?: string;
}

const CognitiveBiasVideo: React.FC<CognitiveBiasVideoProps> = ({
    title = 'הטיות קוגניטיביות - מבוא',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const hideTimeout = useRef<ReturnType<typeof setTimeout>>(null);

    const scheduleHide = useCallback(() => {
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        setShowControls(true);
        if (isPlaying) {
            hideTimeout.current = setTimeout(() => setShowControls(false), 3000);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!isPlaying) {
            setShowControls(true);
            if (hideTimeout.current) clearTimeout(hideTimeout.current);
        } else {
            scheduleHide();
        }
    }, [isPlaying, scheduleHide]);

    useEffect(() => {
        const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onFsChange);
        return () => document.removeEventListener('fullscreenchange', onFsChange);
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const skip = (seconds: number) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
    };

    const toggleFullscreen = () => {
        const el = containerRef.current;
        if (!el) return;
        if (!document.fullscreenElement) {
            el.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (!video || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        video.currentTime = ratio * duration;
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
        <Background>
            <div className="flex flex-col items-center justify-center min-h-screen gap-[2vw]">
                {/* Title */}
                <h1 className="font-ploni-bold text-blue-dark text-[3.5vw] leading-tight text-center mt-[-100px]">
                    {title}
                </h1>

                {/* Video player container */}
                <div
                    ref={containerRef}
                    className={`relative overflow-hidden rounded-[2vw] bg-black cursor-pointer ${
                        isFullscreen ? 'w-full h-full rounded-none' : 'w-[52vw] aspect-[16/9]'
                    }`}
                    style={!isFullscreen ? { boxShadow: '0 0.8vw 3vw rgba(0,0,0,0.5)' } : undefined}
                    onMouseMove={scheduleHide}
                    onClick={togglePlay}
                >
                    <video
                        ref={videoRef}
                        src={vid}
                        className="w-full h-full object-contain"
                        onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
                        onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
                        onEnded={() => setIsPlaying(false)}
                        preload="metadata"
                    />

                    {/* Controls overlay */}
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top gradient + title overlay in fullscreen */}
                        {isFullscreen && (
                            <div
                                className="absolute top-0 left-0 right-0 px-[2vw] pt-[1.5vw] pb-[3vw]"
                                style={{ background: 'linear-gradient(to top, rgba(13,15,20,0) 0%, rgba(13,15,20,0.7) 100%)' }}
                            >
                                <span className="text-white text-[1.4vw] font-bold">{title}</span>
                            </div>
                        )}

                        {/* Center playback controls */}
                        <div className="absolute inset-0 flex items-center justify-center gap-[1.5vw]">
                            <button
                                className="w-[6.5vw] h-[6.5vw] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                                style={{ backgroundColor: 'rgba(30, 70, 80, 0.75)' }}
                                onClick={togglePlay}
                            >
                                {isPlaying ? <PauseIcon /> : <PlayIcon />}
                            </button>
                        </div>

                        {/* Bottom bar: progress + time + fullscreen */}
                        <div
                            className="absolute bottom-0 left-0 right-0 px-[2vw] pb-[1.5vw] pt-[4vw]"
                            style={{ background: 'linear-gradient(to bottom, rgba(13,15,20,0) 0%, rgba(13,15,20,0.9) 80%)' }}
                        >
                            <div className="flex items-center justify-between mb-[0.5vw]">
                                {/* Fullscreen button */}
                                <button
                                    className="cursor-pointer hover:scale-110 transition-transform p-[0.3vw]"
                                    onClick={toggleFullscreen}
                                >
                                    {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                                </button>

                                {/* Time display */}
                                <span className="text-white text-[1vw] font-light tracking-wide" dir="ltr">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </span>
                            </div>

                            {/* Progress bar */}
                            <div
                                className="relative w-full h-[0.3vw] rounded-full bg-white/40 cursor-pointer group"
                                onClick={handleProgressClick}
                            >
                                <div
                                    className="absolute top-0 left-0 h-full rounded-full bg-white"
                                    style={{ width: `${progress}%` }}
                                />
                                <div
                                    className="absolute top-2 -translate-y-1/2 w-[0.8vw] h-[0.8vw] rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );
};

export default CognitiveBiasVideo;
