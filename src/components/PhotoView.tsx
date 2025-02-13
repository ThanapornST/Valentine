import React from "react";
import { Heart, MessageSquare } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// นำเข้ารูปภาพและวิดีโอจากโฟลเดอร์ assets/images
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/22.png";
import Image3 from "../../assets/images/20.jpg";
import Video1 from "../../assets/images/25.mp4";
import Video2 from "../../assets/images/28.mp4";

const media = [
  { type: "image", src: Image1, caption: "This is Image 1" },
  { type: "image", src: Image2, caption: "This is Image 2" },
  { type: "image", src: Image3, caption: "This is Image 3" },
  { type: "video", src: Video1, caption: "This is Video 1" },
  { type: "video", src: Video2, caption: "This is Video 2" },
];

interface PhotoViewProps {
  onNext: () => void;
}

export function PhotoView({ onNext }: PhotoViewProps) {
  return (
    <div className="text-center max-w-md w-full animate-fade-in space-y-6">
      {/* Floating envelope icons */}
      <div className="flex justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <MessageSquare
            key={i}
            className="text-pink-400 animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              width: "20px",
              height: "20px",
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Message */}
      <div className="space-y-2 mb-4">
        <p className="text-pink-500 text-lg font-medium">
          I'll be the best boyfriend for you!
        </p>
        <p className="text-pink-500 text-lg font-medium">
          I promise to love you every single day,
        </p>
        <p className="text-pink-500 text-lg font-medium">no days off</p>
        <p className="text-pink-500 text-xl font-bold mt-4">i luv u</p>
      </div>

      {/* Media Swiper */}
      <div className="w-full h-80 mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-full rounded-lg shadow-xl"
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-lg font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="px-8 py-3 bg-pink-400 text-white rounded-full font-medium
          transition-all duration-300 hover:bg-pink-500 hover:shadow-lg
          flex items-center justify-center gap-2 mx-auto"
      >
        <Heart className="w-4 h-4" fill="currentColor" />
        <span>i luv u too</span>
      </button>
    </div>
  );
}
