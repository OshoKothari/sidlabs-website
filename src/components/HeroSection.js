import React, { useState, useEffect } from 'react'; // Import React and the hooks
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const HeroSection = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <div>
            {/* Hero Section */}
            <section
                className="flex flex-col items-center justify-center h-screen text-center bg-cover bg-center bg-gray-100"
                style={{ backgroundImage: `url('./hero.png')` }}
            >
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-black">
                    A VENTURE STUDIO
                </h1>
                <div className="typing-container mb-8">
                    <p className="typing-text text-black">
                        Advancing Human Intelligence Through Innovation
                    </p>
                </div>
                <a href="#mission" className="explore-button text-white mb-8">
                    <span>Explore Now</span>
                    <i className="fas fa-arrow-circle-down"></i>
                </a>
                {/* Social Icons */}
                <div className="social-icons flex flex-wrap gap-4 justify-center mt-8 text-black">
                    <a
                        href="https://wa.me/yourwhatsapplink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400"
                    >
                        <i className="fab fa-whatsapp fa-2x"></i>
                    </a>
                    <a
                        href="https://facebook.com/yourfacebooklink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a
                        href="https://twitter.com/yourtwitterlink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a
                        href="https://instagram.com/yourinstagramlink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400"
                    >
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </section>

            {/* Mission Statement with Image */}
            <section id="mission" className="py-16 px-8 bg-white flex flex-col items-center md:flex-row md:items-center">
                <div className="text-center md:text-left md:pr-8 max-w-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg sm:text-xl font-bold mb-4 uppercase">
                        Elevating humanity through innovation and technology is our mission.
                    </p>
                    <p className="text-base sm:text-lg font-light mb-8">
                        Our vision is to reduce the gap in harnessing technology, towards human evolution! We believe that every technological solution should be purposeful and aligned with the unique needs of the user. One-size-fits-all approaches are outdated; instead, we advocate for solutions that are tailored, intuitive, and genuinely enhance the human experience.
                    </p>
                </div>
                <div className="mt-8 md:mt-0">
                    <img src="/mission.gif" alt="Mission Image" className="w-full h-auto rounded-lg"/>
                </div>
            </section>

            {/* Flagship Projects Section */}
            <section id="projects" className="py-16 px-8 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Explore</h2>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8">OUR FLAGSHIP PROJECTS</h3>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:gap-6 md:justify-around">
                    {/* Project 1 */}
                    <div className="project-box bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="number text-2xl font-bold">1</div>
                        <h4 className="text-xl sm:text-2xl font-bold mb-4">[Al]wise Partners</h4>
                        <p className="text-base sm:text-lg font-medium mb-4 uppercase">Revolutionizing Business Intelligence</p>
                        <p className="text-base sm:text-lg font-light">
                            Dive into the future of business intelligence with [Al]wise Partners. This cutting-edge solution harnesses the power of artificial intelligence to provide unparalleled insights, helping businesses make data-driven decisions with confidence.
                        </p>
                    </div>
                    {/* Project 2 */}
                    <div className="project-box bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="number text-2xl font-bold">2</div>
                        <h4 className="text-xl sm:text-2xl font-bold mb-4">AwareWilderness</h4>
                        <p className="text-base sm:text-lg font-medium mb-4 uppercase">Crafting Memories</p>
                        <p className="text-base sm:text-lg font-light">
                            Empowering travelers to embark on transformative journeys that not only satisfy their wanderlust but also contribute to the conservation and preservation of our planet's precious wilderness.
                        </p>
                    </div>
                    {/* Project 3 */}
                    <div className="project-box bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="number text-2xl font-bold">3</div>
                        <h4 className="text-xl sm:text-2xl font-bold mb-4">CARE Platform</h4>
                        <p className="text-base sm:text-lg font-medium mb-4 uppercase">Ensuring Safe Digital Interactions</p>
                        <p className="text-base sm:text-lg font-light">
                            CARE utilizes a comprehensive framework to evaluate and recommend child-friendly apps, videos, and games, ensuring your child's digital interactions are both enriching and safe.
                        </p>
                    </div>
                </div>
            </section>

            {/* SIDLABS Section */}
            <section className="py-16 px-8 bg-gray-100 flex flex-col items-center md:flex-row md:items-center">
                <div className="text-center md:text-left md:pr-8 max-w-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">SIDLABS</h2>
                    <p className="text-lg sm:text-xl font-semibold mb-4">Your Destination for Innovation</p>
                    <p className="text-base sm:text-lg font-light mb-8">
                        SidLabs is not just a company; it's a destination for innovation. Our suite of products represents three distinct stores in our innovation mall. Each store is a world in itself, driven by the relentless pursuit of excellence and global human upgradation.
                    </p>
                </div>
                <div className="hidden md:flex md:ml-8">
                    <img src="/robot.gif" alt="Robot" className="w-full max-w-sm mx-auto"/>
                </div>
            </section>

            {/* New Component Section */}
            <section className="py-16 px-8 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">What's New</h2>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:gap-6">
                    {/* Industry Update */}
                    <div className="new-component-box bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/industry.jpg)' }}></div>
                        <div className="relative z-10">
                            <h4 className="text-xl sm:text-2xl font-bold mb-4">Industry Update</h4>
                            <p className="text-base sm:text-lg font-light">
                                Stay updated with the latest trends and breakthroughs in your industry. Our curated updates ensure you're always informed.
                            </p>
                        </div>
                    </div>
                    {/* Technology Spotlight */}
                    <div className="new-component-box bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/technology.jpg)' }}></div>
                        <div className="relative z-10">
                            <h4 className="text-xl sm:text-2xl font-bold mb-4">Technology Spotlight</h4>
                            <p className="text-base sm:text-lg font-light">
                                Discover the latest advancements and innovations in technology. Our spotlight features cutting-edge solutions and trends.
                            </p>
                        </div>
                    </div>
                    {/* Community Event */}
                    <div className="new-component-box bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/community.jpg)' }}></div>
                        <div className="relative z-10">
                            <h4 className="text-xl sm:text-2xl font-bold mb-4">Community Event</h4>
                            <p className="text-base sm:text-lg font-light">
                                Join us for exciting community events and initiatives. Connect with like-minded individuals and contribute to meaningful causes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 px-8 bg-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Clients Say</h2>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:gap-6">
                    {/* Testimonial 1 */}
                    <div className="testimonial-box bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="testimonial-content">
                            <p className="text-base sm:text-lg mb-4">
                                "SIDLABS has revolutionized the way we approach business intelligence. Their solutions are cutting-edge and highly effective."
                            </p>
                            <div className="testimonial-author flex items-center">
                                <img src="/avatar1.jpg" alt="Avatar 1" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-sm text-gray-600">CEO, TechCorp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="testimonial-box bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="testimonial-content">
                            <p className="text-base sm:text-lg mb-4">
                                "The technology spotlight provided by SIDLABS is always insightful. It keeps us ahead in the fast-paced tech world."
                            </p>
                            <div className="testimonial-author flex items-center">
                                <img src="/avatar2.jpg" alt="Avatar 2" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold">Jane Smith</p>
                                    <p className="text-sm text-gray-600">CTO, Innovate Ltd.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="testimonial-box bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="testimonial-content">
                            <p className="text-base sm:text-lg mb-4">
                                "SIDLABS' community events are fantastic. It's great to be part of such an engaged and innovative network."
                            </p>
                            <div className="testimonial-author flex items-center">
                                <img src="/avatar3.jpg" alt="Avatar 3" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold">Emily White</p>
                                    <p className="text-sm text-gray-600">Founder, Creative Ventures</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-16 px-8 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
                </div>
                <div className="max-w-lg mx-auto">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                    <i className="fas fa-chevron-up"></i>
                </button>
            )}
            
            {/* Footer */}
            <footer className="py-8 px-8 bg-gray-800 text-white text-center">
                <div className="text-lg font-bold mb-4">SIDLABS</div>
                <p className="mb-4">123 Innovation Drive, Suite 456, Tech City, TX 12345</p>
                <p className="mb-4">Email: contact@sidlabs.com | Phone: (123) 456-7890</p>
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                        <i className="fab fa-whatsapp fa-2x"></i>
                    </a>
                    <a href="https://facebook.com/yourfacebooklink" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://twitter.com/yourtwitterlink" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://instagram.com/yourinstagramlink" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
                <p className="text-sm">© 2024 SIDLABS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HeroSection;
