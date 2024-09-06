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
  className="flex flex-col items-end justify-center h-screen text-right bg-cover bg-center bg-gray-100"
  style={{ backgroundImage: `url('./hero.png')` }}
>
  <h1 className="text-6xl font-extrabold mb-4 text-black mr-8">
    A VENTURE STUDIO
  </h1>
  <div className="typing-container mb-8 text-right">
    <p className="typing-text text-black mr-8">
      Advancing Human Intelligence Through Innovation
    </p>
  </div>
  <a href="#mission" className="explore-button text-white mr-8">
    <span>Explore Now</span>
    <i className="fas fa-arrow-circle-down"></i>
  </a>
  {/* Social Icons */}
  <div className="social-icons flex gap-4 mt-8 text-right mr-8">
    <a
      href="https://wa.me/yourwhatsapplink"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-green-400"
    >
      <i className="fab fa-whatsapp fa-2x"></i>
    </a>
    <a
      href="https://facebook.com/yourfacebooklink"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-blue-600"
    >
      <i className="fab fa-facebook fa-2x"></i>
    </a>
    <a
      href="https://twitter.com/yourtwitterlink"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-blue-400"
    >
      <i className="fab fa-twitter fa-2x"></i>
    </a>
    <a
      href="https://instagram.com/yourinstagramlink"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-pink-400"
    >
      <i className="fab fa-instagram fa-2x"></i>
    </a>
  </div>
</section>


      {/* Mission Statement with Image */}
      <section id="mission" className="py-16 px-8 bg-white-200 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:pr-8 max-w-lg md:max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl font-bold mb-4 uppercase">
            Elevating humanity through innovation and technology is our mission.
          </p>
          <p className="text-xl font-light mb-8">
            Our vision is to reduce the gap in harnessing technology, towards human evolution! We believe that every technological solution should be purposeful and aligned with the unique needs of the user. One-size-fits-all approaches are outdated; instead, we advocate for solutions that are tailored, intuitive, and genuinely enhance the human experience.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="/mission.gif" alt="Mission Image" className="mission-image rounded-lg"/>
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section id="projects" className="py-16 px-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Explore</h2>
          <h3 className="text-3xl font-semibold mb-8">OUR FLAGSHIP PROJECTS</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Project 1 */}
          <div className="project-box bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mb-6 md:mb-0">
            <div className="number">1</div>
            <h4 className="text-2xl font-bold mb-4">[Al]wise Partners</h4>
            <p className="text-lg font-medium mb-4 uppercase">Revolutionizing Business Intelligence</p>
            <p className="text-base font-light">
              Dive into the future of business intelligence with [Al]wise Partners. This cutting-edge solution harnesses the power of artificial intelligence to provide unparalleled insights, helping businesses make data-driven decisions with confidence.
            </p>
          </div>
          {/* Project 2 */}
          <div className="project-box bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mb-6 md:mb-0">
            <div className="number">2</div>
            <h4 className="text-2xl font-bold mb-4">AwareWilderness</h4>
            <p className="text-lg font-medium mb-4 uppercase">Crafting Memories</p>
            <p className="text-base font-light">
              Empowering travelers to embark on transformative journeys that not only satisfy their wanderlust but also contribute to the conservation and preservation of our planet's precious wilderness.
            </p>
          </div>
          {/* Project 3 */}
          <div className="project-box bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="number">3</div>
            <h4 className="text-2xl font-bold mb-4">CARE Platform</h4>
            <p className="text-lg font-medium mb-4 uppercase">Ensuring Safe Digital Interactions</p>
            <p className="text-base font-light">
              CARE utilizes a comprehensive framework to evaluate and recommend child-friendly apps, videos, and games, ensuring your child's digital interactions are both enriching and safe.
            </p>
          </div>
        </div>
      </section>

      {/* SIDLABS Section */}
      <section className="py-16 px-8 bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-lg mx-auto">
          <h2 className="text-4xl font-bold mb-6">SIDLABS</h2>
          <p className="text-2xl font-semibold mb-4">Your Destination for Innovation</p>
          <p className="text-lg font-light mb-8">
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
          <h2 className="text-4xl font-bold mb-6">What's New</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Industry Update */}
          <div className="new-component-box bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-40"></div>
            <div className="relative z-10">
              <img src="/newrobot.png" alt="Industry Update" className="w-full h-56 object-cover rounded-md mb-4"/>
              <h4 className="text-2xl font-bold mb-4">Industry Update</h4>
              <p className="text-base font-light mb-2">
                There has been significant progress in using AI for medical diagnostics, personalized medicine, drug discovery, and improving patient care.
              </p>
              <p className="text-base font-light">
                Increased attention on the ethical implications of AI, including fairness, transparency, bias mitigation, and responsible deployment of AI systems.
              </p>
            </div>
          </div>

          {/* Online Tech Education */}
          <div className="new-component-box bg-gradient-to-r from-blue-400 to-teal-500 text-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-40"></div>
            <div className="relative z-10">
              <img src="/education.png" alt="Online Tech Education" className="w-full h-56 object-cover rounded-md mb-4"/>
              <h4 className="text-2xl font-bold mb-4">Online Tech Education</h4>
              <p className="text-base font-light mb-2">
                Online tech education has witnessed a surge in accessibility, with platforms offering diverse courses in various languages, catering to global audiences.
              </p>
              <p className="text-base font-light">
                Emphasis on skill-based learning has grown, with platforms offering specialized courses in emerging tech fields such as AI, cybersecurity, and data science.
              </p>
            </div>
          </div>

          {/* Modern Age Parenting */}
          <div className="new-component-box bg-gradient-to-r from-purple-400 to-pink-500 text-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-40"></div>
            <div className="relative z-10">
              <img src="/parent.png" alt="Modern Age Parenting" className="w-full h-56 object-cover rounded-md mb-4"/>
              <h4 className="text-2xl font-bold mb-4">Modern Age Parenting</h4>
              <p className="text-base font-light mb-2">
                With the rise of technology, there's a surge in digital tools aiding parents—from apps monitoring child activities to educational platforms offering interactive learning experiences.
              </p>
              <p className="text-base font-light">
                Online forums, social media groups, and virtual communities are thriving, offering a space for parents.
              </p>
            </div>
            </div>
            </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-16 px-8 bg-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">See What Our Clients Say About Us</h2>
          <p className="text-lg font-light mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-box bg-white p-8 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20"></div>
            <div className="relative z-10">
              <i className="fas fa-quote-left text-gray-400 text-3xl absolute top-4 left-4"></i>
              <p className="text-lg font-light mb-4">
                Partnering with SidLabs has been a game-changer for our business. Their innovative AI solutions and exceptional support have streamlined our operations, boosted efficiency, and driven remarkable growth. Highly recommend their expertise and cutting-edge technology!
              </p>
              <p className="text-base font-medium">David L.</p>
              <div className="flex items-center mt-2">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial-box bg-white p-8 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-20"></div>
            <div className="relative z-10">
              <i className="fas fa-quote-left text-gray-400 text-3xl absolute top-4 left-4"></i>
              <p className="text-lg font-light mb-4">
                The AI solutions provided by SidLabs have revolutionized our workflow. Their technology is both powerful and user-friendly, and their team is incredibly responsive and knowledgeable. We're thrilled with the results and couldn't ask for a better partner in innovation.
              </p>
              <p className="text-base font-medium">Jessica M.</p>
              <div className="flex items-center mt-2">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star-half-alt text-yellow-400"></i>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial-box bg-white p-8 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-500 opacity-20"></div>
            <div className="relative z-10">
              <i className="fas fa-quote-left text-gray-400 text-3xl absolute top-4 left-4"></i>
              <p className="text-lg font-light mb-4">
                SidLabs has exceeded our expectations with their innovative solutions and exceptional customer service. Their attention to detail and commitment to delivering high-quality products have made a significant impact on our success. We're grateful for their support and expertise.
              </p>
              <p className="text-base font-medium">Michael T.</p>
              <div className="flex items-center mt-2">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                </div>
                </div>
                </div>
          </div>
      </section>

            {/* Contact Now Section */}
            <section id="contact" className="py-16 px-8 bg-white-100 flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1 md:mr-8 mb-8 md:mb-0">
                    <img src="/contact.gif" alt="Contact Us" className="w-full h-auto rounded-lg"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-6">Stay In Touch With Us</h2>
                    <form className="space-y-6">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-lg font-semibold mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="subject" className="text-lg font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="message" className="text-lg font-semibold mb-2">Type Message Here</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter your message"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

{/* Scroll to Top Button */}
{showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow-500 text-white p-2 rounded shadow-lg hover:bg-blue-600 focus:outline-none"
          aria-label="Scroll to Top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

     {/* Footer Section */}
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="SidLabs Logo" className="w-24 h-auto"/>
            </div>
            <p className="text-center md:text-left text-lg font-light mb-4">
              Join us on this extraordinary journey as we redefine the limits of human potential. <br></br>Together, we are forging a brighter future—one innovation at a time.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end mb-8 md:mb-0">
            <div className="mb-4 text-center md:text-right">
              <p className="text-lg font-bold mb-2">Address</p>
              <p className="text-base mb-4">SidLabs, Asaf Ali Road, New Delhi-110002</p>
              <p className="text-lg font-bold mb-2">Email</p>
              <p className="text-base mb-4">info@sidlabs.net</p>
            </div>
            <div className="flex gap-4 mb-4">
              <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
              <a href="https://facebook.com/yourfacebooklink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com/yourtwitterlink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com/yourinstagramlink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Centered Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm">
            Copyright © 2023 SidLabs. All rights reserved. <a href="/terms" className="underline">Terms of Use</a> & <a href="/privacy" className="underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
    
  );
};


export default HeroSection;
