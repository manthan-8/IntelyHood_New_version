import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import Button from "@/templates/Button";
import { jobOpenings, whyWorkWithUs } from "@/utilities/data";
import GalaxyBackground from "@/components/GalaxyBg";
import { Border } from "@/components/Broder";
const Careers: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative px-6 pb-15 pt-40 lg:pb-30 lg:pt-50">
                <div className="container max-w-screen-xl mx-auto overflow-hidden text-center">
                    <GalaxyBackground />
                    <h1 className="text-4xl lg:text-6xl font-bold text-text-main mb-6" data-aos='zoom-in'>
                        Join Our
                        <br />
                        <span className="bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
                            Amazing Team
                        </span>
                    </h1>
                    <p className="text-xl text-text-main mb-8 max-w-3xl mx-auto" data-aos='fade-up'>
                        Help us build the future of software development. Work with brilliant minds, cutting-edge technology, and
                        make a real impact on millions of developers worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos='fade-up'>
                        <Button href="#openPosition">
                            View Open Positions
                        </Button>
                    </div>
                </div>
            </section >

            {/* Why Work With Us */}
            <section className="relative px-5 py-20 lg:py-24">
                <div className="container mx-auto max-w-screen-xl">
                    <GalaxyBackground />
                    <div className="text-center mb-16 text-text-main">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-aos='zoom-in'>Why Work <span className="bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">With Us</span></h2>
                        <p className="text-xl max-w-2xl mx-auto" data-aos='fade-up'>
                            Join a company that's not just building products, but shaping the future of how software is created.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyWorkWithUs.map((item, index) => (
                            <Border key={index}>
                                <div className="bg-muted-dark/30 rounded-2xl p-6 border border-border-main/30 flex flex-col gap-3 text-center text-text-main" data-aos={item.aos}>
                                    <div className="w-16 h-16 bg-primary-main/30 rounded-xl flex items-center justify-center mx-auto">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-semibol d">{item.title}</h3>
                                    <p className="">{item.description}</p>
                                </div>
                            </Border>
                        ))}
                    </div>
                </div>
            </section >

            {/* Open Positions */}
            <section id="openPosition" className="relative px-5 py-20 lg:py-24">
                <div className="container mx-auto max-w-screen-xl">
                    <GalaxyBackground />
                    <div className="text-center mb-16 text-text-main">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-aos='zoom-in'>Open <span className="bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">Positions</span></h2>
                        <p className="text-xl max-w-2xl mx-auto" data-aos='fade-up'>
                            Find your next career opportunity and help us build the future of development tools.
                        </p>
                    </div>

                    <div className="space-y-6 max-w-5xl mx-auto text-text-main">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="bg-muted-light/40 backdrop-blur-sm border border-border-main/30 rounded-lg" data-aos='fade-up'>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6">
                                    <div className="md:max-w-lg lg:max-w-3xl">
                                        <div className="flex items-center space-x-4 mb-3">
                                            <h3 className="text-xl font-semibold text-text">{job.title}</h3>
                                            {/* <span className="bg-primary-default/60 text-text rounded-full px-2 text-sm">{job.department}</span> */}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-text/70 text-sm mb-4">
                                            <div className="flex items-center">
                                                <IoLocationOutline className="text-md mr-1" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center">
                                                <FaRegClock className="text-md mr-1" />
                                                {job.type}
                                            </div>
                                            {/* <div className="flex items-center">
                                                <MdCurrencyRupee className="text-md mr-1" />
                                                {job.salary}
                                            </div> */}
                                            <div className="flex items-center">
                                                <HiOutlineBriefcase className="text-md mr-1" />
                                                {job.experience}
                                            </div>
                                        </div>
                                        <p className="text-text/80 mb-4">{job.description}</p>
                                    </div>
                                    <div>
                                        <Button href={`/career/${job.id}`}>
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Careers; 