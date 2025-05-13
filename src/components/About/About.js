import img from "../../Assets/image/othersImg/meat_item.jpg";

const About = () => {
	return (
		// <div className="py-20">
		// 	<div className="hero min-h-screen bg-white">
		// 		<div className="hero-content flex-col lg:flex-row">
		// 			<div className="w-1/2">
		// 				<img src={img} alt="" className="rounded-md" />
		// 			</div>
		// 			<div className="w-1/2 pl-5">
		// 				<h1 className="text-5xl font-semibold">Miah Kitchen</h1>
		// <p className="py-6">
		// 	Miah Kitchen is a cozy, family-owned restaurant
		// 	located in the heart of Uttara. Miah, the owner and
		// 	head chef, has been cooking for over 20 years and
		// 	his passion for food is evident in every dish he
		// 	creates. The menu at Miah Kitchen features a variety
		// 	of Bangladeshi comfort food, all made with fresh,
		// 	local ingredients. From classic Shorshe Elish and
		// 	curry to more creative dishes like Beef Vuna and
		// 	Mutton Vuna, there's something for everyone at Miah
		// 	Kitchen. <br />
		// 	In addition to the delicious food, Miah Kitchen is
		// 	also known for its on time delivery. Whether you're
		// 	looking for a quick lunch or a leisurely dinner,
		// 	Miah Kitchen is the perfect kitchen to order and
		// 	enjoy a meal with friends and family. <br />
		// 	If you're looking for a delicious and satisfying
		// 	meal, Miah Kitchen is the perfect place to order.
		// 	Order and experience the Miah Kitchen difference for
		// 	yourself!
		// </p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className="hero bg-white min-h-screen">
			<div className="hero-content flex-col lg:flex-row">
				<div className="w-full">
					<img src={img} className="" />
				</div>
				<div className="w-full">
					<h1 className="text-4xl md:text-5xl font-bold">
						Miah Kitchen
					</h1>
					<p className="text-xs md:text-sm py-6">
						Miah Kitchen is a cozy, family-owned restaurant located
						in the heart of Uttara. Miah, the owner and head chef,
						has been cooking for over 20 years and his passion for
						food is evident in every dish he creates. The menu at
						Miah Kitchen features a variety of Bangladeshi comfort
						food, all made with fresh, local ingredients. From
						classic Shorshe Elish and curry to more creative dishes
						like Beef Vuna and Mutton Vuna, there's something for
						everyone at Miah Kitchen. <br />
						In addition to the delicious food, Miah Kitchen is also
						known for its on time delivery. Whether you're looking
						for a quick lunch or a leisurely dinner, Miah Kitchen is
						the perfect kitchen to order and enjoy a meal with
						friends and family. <br />
						If you're looking for a delicious and satisfying meal,
						Miah Kitchen is the perfect place to order. Order and
						experience the Miah Kitchen difference for yourself!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
