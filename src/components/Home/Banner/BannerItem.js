import "./BannerItem.css";

const BannerItem = ({ info }) => {
	return (
		<section
			className="w-full h-[550px] bg-cover bg-center brightness-50"
			style={{ backgroundImage: `url(${info.image})` }}
		></section>
	);
};

export default BannerItem;
