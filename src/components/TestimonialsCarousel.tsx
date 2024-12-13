import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/swiper-bundle.css';

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "GrowthMatrix was instrumental in our Product Hunt launch and subsequent marketing endeavors. Their contributions significantly helped us in generating over 800k+ impressions and expanding our reach to a broader audience. I highly recommend working with them.",
    author: "Victoria D",
    title: "CoFounder at Snooz AI",
    avatar: "/testimonials/Victoria.png"
  },
  {
    id: 2,
    quote: "I had a fantastic experience working with GrowthMatrix. Their team did an amazing job finding influencers who perfectly aligned with our brand. The campaign was a huge success and exceeded our expectations. Highly recommend!",
    author: "Araks Nalbandyan",
    title: "Director of Marketing at 10web.io",
    avatar: "/testimonials/client2.jpg"
  },
  {
    id: 3,
    quote: "Professional, creative, and results-driven—highly recommended for anyone looking to make a real impact with influencer marketing!",
    author: "Robert Sargsyan",
    title: "CEO & Co-founder at Docus",
    avatar: "/testimonials/Robert.jpeg"
  }
]

export const TestimonialCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="relative overflow-hidden bg-black py-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex items-center justify-center px-4 md:px-20">
              <div className="max-w-4xl">
                <blockquote className="text-xl md:text-3xl font-light mb-8 text-white font-dmSans">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}

