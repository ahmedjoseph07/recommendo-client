import Marquee from "react-fast-marquee";

const testimonials = [
    {
        name: "Ayesha Rahman",
        message: "Recomendo helped me find the perfect phone in seconds!",
    },
    {
        name: "Tanvir Ahmed",
        message: "Super accurate suggestions. I love this platform!",
    },
    {
        name: "Sadia Karim",
        message: "Easy to use and very helpful for my daily choices.",
    },
    {
        name: "Rifat Hossain",
        message: "Highly recommended for anyone looking for honest guidance.",
    },
];

const Testimonials = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-2xl text-primary md:text-3xl font-bold text-center mb-6">
                Testimonials
            </h2>
            <Marquee pauseOnHover={true} speed={40}>
                <div className="flex gap-4">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="min-w-[250px] sm:min-w-[300px] max-w-[350px] mx-4 text-neutral border cursor-pointer border-base-300 p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300">
                            <p className="text-sm">“{t.message}”</p>
                            <p className="mt-2 font-semibold text-accent">
                                – {t.name}
                            </p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonials;
