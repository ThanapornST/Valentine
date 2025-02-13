import React from 'react';
import { Heart, Music, Download } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface YouTubeViewProps {
  onReset: () => void;
}

const videos = [
  {
    embedId: "_rDQp1Zcs0Q",
    title: "Special Valentine's Song"
  }
];

export function YouTubeView({ onReset }: YouTubeViewProps) {
  return (
    <div className="text-center max-w-md w-full animate-fade-in space-y-6">
      <h1 className="text-2xl font-bold text-pink-500 mb-4">วาเลนไทน์💕</h1>

      {/* Floating icons */}
      <div className="flex justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            <Heart className="text-pink-400 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} fill="currentColor" />
            <Music className="text-pink-400 animate-bounce" style={{ animationDelay: `${i * 0.2 + 0.1}s` }} />
            <Download className="text-pink-400 animate-bounce" style={{ animationDelay: `${i * 0.2 + 0.2}s` }} />
          </React.Fragment>
        ))}
      </div>

      {/* Video Swiper */}
      <div className="w-full h-80 mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-full rounded-lg shadow-xl"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Back Button */}
      <button
        onClick={onReset}
        className="px-8 py-2 text-pink-400 rounded-full font-medium
          transition-all duration-300 hover:text-pink-500
          flex items-center justify-center gap-2 mx-auto"
      >
        <span>Start Over</span>
      </button>
    </div>
  );
}
