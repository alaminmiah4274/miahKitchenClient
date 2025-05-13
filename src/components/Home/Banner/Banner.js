// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../Assets/image/othersImg/banner/img1.jpg";
import img2 from "../../../Assets/image/othersImg/banner/img2.jpg";
import img3 from "../../../Assets/image/othersImg/banner/img3.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
	const bannerData = [
		{
			image: img1,
		},
		{
			image: img2,
		},
		{
			image: img3,
		},
	];

	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
		>
			{bannerData.map((info, idx) => (
				<SwiperSlide key={idx}>
					<BannerItem info={info} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Banner;
