"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

interface Props {
  slides: { image: string; title: string; description: string; link: string }[];
}

const ImageSlider = ({ slides }: Props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <Box>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={pagination}
        autoplay={{ delay: 10000 }}
        loop
        className={`rounded-xl `}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={`slider-${index}`}>
            <Box
              sx={{
                position: "relative",
                maxWidth: "1600px",
                height: "500px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  zIndex: 100,
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 1) 100%)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: { md: "40%", xs: "100%" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: { md: "end", xs: "center" },
                    justifyContent: "center",
                    p: { md: "0 40px", xs: "0" },
                    right: 0,
                    top: 0,
                    background: {
                      md: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1) 100%)",
                      xs: "transparent",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      background: {
                        md: "transparent",
                        xs: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(12, 12, 12,0.8) 50%, rgba(0, 0, 0, 0.8) 100%)",
                      },
                      p: { xs: "20px", md: "0" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontWeight: 800,
                        fontSize: "22px",
                        m: { md: 0, xs: "0 20px" },
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "common.white",
                        fontWeight: 500,
                        fontSize: "18px",
                        mt: "30px",
                        display: { md: "block", xs: "none" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
