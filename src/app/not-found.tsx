import GalaxyBackground from "@/components/GalaxyBg";
import Button from "@/templates/Button";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="relative px-6 py-15 lg:py-20">
            <div className="container max-w-screen-xl mx-auto overflow-hidden">
                <GalaxyBackground />
                <div className="flex flex-col items-center justify-center min-h-screen bg-background-dark text-center px-4">

                    <div className="relative flex items-center justify-center">
                        <span className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-primary-main drop-shadow-lg">
                            4
                        </span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                            alt="Sad Robot"
                            className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 z-10 mx-2 sm:mx-4"
                        />
                        <span className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-primary-main drop-shadow-lg">
                            4
                        </span>
                    </div>

                    {/* Message */}
                    <p className="text-text-main mt-6 font-medium pb-8 text-sm sm:text-base md:text-lg">
                        Our little robot broke the wires
                    </p>

                    {/* Button */}
                    <Button href="/">Go To Home</Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
