import { motion } from "framer-motion";

const trendingBrands = ["Samsung", "Pepsi", "Dell", "Apple", "Rolex", "Gucci","Toyota"];

const Trending = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto text-center">
            <h2 className="text-2xl text-primary md:text-3xl font-bold mb-6">
                Trending Brands
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {trendingBrands.map((brand, index) => (
                    <motion.div
                        key={index}
                        animate={{
                            y: [0, 14, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: index * .4,
                        }}
                        className="px-4 py-2 rounded-lg bg-base-200 text-accent font-semibold shadow-md cursor-pointer">
                        {brand}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
