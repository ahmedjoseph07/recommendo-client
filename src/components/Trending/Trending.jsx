import { motion } from "framer-motion";

const trendingBrands = [
    {
        name: "LumosTech",
        category: "Technology",
        description: "Innovative gadgets and smart devices with a focus on sustainability.",
        status: "Trending",
    },
    {
        name: "Frostbyte",
        category: "Gaming",
        description: "Cutting-edge gaming peripherals and immersive VR experiences.",
        status: "Popular",
    },
    {
        name: "Veloura",
        category: "Fashion",
        description: "Luxury streetwear with a minimalist, modern aesthetic.",
        status: "Trending",
    },
    {
        name: "NeonForge",
        category: "Creative Tech",
        description: "Custom PC builds with vibrant RGB designs and performance tuning.",
        status: "Popular",
    },
    {
        name: "AeroMint",
        category: "Lifestyle",
        description: "Eco-friendly activewear designed for comfort and breathability.",
        status: "Trending",
    },
    {
        name: "CrimsonPeak",
        category: "Adventure Gear",
        description: "High-end outdoor equipment for mountain climbing and exploration.",
        status: "Popular",
    },
    {
        name: "NimbusWear",
        category: "Fashion",
        description: "Lightweight, breathable clothing designed for year-round wear.",
        status: "Trending",
    },
    {
        name: "Solaré",
        category: "Energy",
        description: "Solar-powered accessories blending style with sustainability.",
        status: "Popular",
    },
    {
        name: "EchoDrift",
        category: "Audio",
        description: "Premium wireless headphones with spatial audio and noise cancellation.",
        status: "Trending",
    },
    {
        name: "VantaWorks",
        category: "Design",
        description: "Luxury interiors with a sleek, dark-toned modern vibe.",
        status: "Popular",
    }
];

const statusColors = {
    Trending: "bg-green-200 text-green-800",
    Popular: "bg-yellow-200 text-yellow-900",
};

const Trending = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10 min-h-[300px] text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-extrabold mb-6">
                Trending Brands
            </h2>
            <p className="text-secondary text-xl md:text-base max-w-2xl mx-auto mb-8">
                Explore the most talked-about brands right now from global tech giants to luxury labels everyone’s buzzing about. Stay in the loop with what’s hot in the market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingBrands.map((brand, index) => (
                    <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                        }}
                        className="p-6 hover:scale-105 group transition duration-400 hover:rotate-1 rounded-xl shadow-md border border-base-300 bg-base-100 cursor-pointer flex flex-col items-start"
                    >
                        <div className="flex justify-between w-full items-center mb-2">
                            <h3 className="text-lg font-bold group-hover:text-primary">{brand.name}</h3>
                            <span
                                className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[brand.status] || "bg-gray-200 text-gray-700"}`}
                            >
                                {brand.status}
                            </span>
                        </div>
                        <p className="text-sm text-neutral mb-2">{brand.category}</p>
                        <p className="text-sm text-neutral">{brand.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
