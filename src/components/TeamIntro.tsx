
import { useState } from 'react';
import { Facebook, Twitter } from 'lucide-react';

const TeamIntro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    // For demo purposes, we'll just clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#E94E35] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Team Members Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* David */}
          <div className="mb-8 md:mb-0 md:w-5/12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <div className="w-16 h-16 md:w-20 md:h-20 relative mr-2">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white rounded"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/4 bg-white"></div>
                </div>
                <h2 className="retro-heading text-3xl md:text-4xl lg:text-5xl text-black">DAVID</h2>
              </div>
              <h2 className="retro-heading text-3xl md:text-4xl lg:text-5xl text-white -mt-2">CHARLEC</h2>
            </div>
            <p className="retro-text text-sm mt-4 text-black leading-tight">
              David is a major geek since 1980. He has been a web-designer, ActionScript, PHP, ASP, Ruby On Rails and Python developer... before he
              fell in love with Objective-C. He is also an advanced photographer, amateur
              guitar player, and a TV Show addict. You can find him on <a href="#" className="underline">Twitter</a> or
              <a href="#" className="underline"> Exposure</a>. Check out his <a href="#" className="underline">photo portfolio</a>.
            </p>
          </div>

          {/* Ampersand */}
          <div className="text-4xl md:text-6xl text-black mx-4 hidden md:block">&</div>

          {/* Jerome */}
          <div className="md:w-5/12">
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center mb-2">
                <h2 className="retro-heading text-3xl md:text-4xl lg:text-5xl text-black">JEROME</h2>
                <div className="w-16 h-16 md:w-20 md:h-20 relative ml-2">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white rounded"></div>
                </div>
              </div>
              <h2 className="retro-heading text-3xl md:text-4xl lg:text-5xl text-white -mt-2">SCHEER</h2>
            </div>
            <p className="retro-text text-sm mt-4 text-black leading-tight">
              Jérôme is David's padawan, but the student will soon become the master!
              He is an iOS developer, technology enthusiast, gamer, judo athlete, and
              Eclipse hater. Catch him on <a href="#" className="underline">Twitter</a> or <a href="#" className="underline">Facebook</a>.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-black text-white p-6 rounded-t-lg relative">
          <div className="absolute -top-12 left-10">
            <div className="h-12 w-12 bg-white flex items-center justify-center transform rotate-[30deg]">
              <div className="h-8 w-2 bg-[#E94E35] transform -rotate-[30deg]"></div>
            </div>
          </div>
          <h2 className="retro-heading text-3xl mb-4 text-[#E94E35]">ABOUT US</h2>
          <p className="retro-text mb-16">
            Pupfingers is a human-sized team of
            developers and designers devoted to creating
            beautiful, useful, and feature-packed apps for
            the iPhone, iPad & iPod Touch.
            We are based in Strasbourg, France.
          </p>
          
          {/* City Skyline */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end">
            <div className="w-1/12 h-12 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-1/12 h-16 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-1/12 h-10 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-2/12 h-6 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-1/12 h-12 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-1/12 h-16 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-1/12 h-14 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
            <div className="w-1/12 h-8 bg-black border-t-2 border-[#E94E35] mx-0.5"></div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="bg-black text-white p-6 rounded-b-lg">
          <h2 className="retro-heading text-3xl mb-4 text-[#E94E35]">CONTACT US</h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="retro-text mb-6">
                If you have any feature requests, questions about life,
                TV Shows, if you need (moral or software) support, or
                just want to say "Hi", please contact us.
              </p>
              
              <div className="mb-4">
                <h3 className="retro-heading text-xl mb-2 text-[#E94E35]">
                  YOU CAN ALSO FOLLOW US ON FACEBOOK OR TWITTER. OR BOTH. WHATEVER.
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-[#E94E35]">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#E94E35]">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full p-2 bg-[#E94E35] text-black placeholder-black retro-text border border-[#E94E35]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR E-MAIL ADDRESS"
                    className="w-full p-2 bg-[#E94E35] text-black placeholder-black retro-text border border-[#E94E35]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR MESSAGE"
                    className="w-full p-2 bg-[#E94E35] text-black placeholder-black retro-text border border-[#E94E35] h-32"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#E94E35] text-black px-6 py-2 retro-heading hover:bg-[#d23e26] transition-colors"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamIntro;
