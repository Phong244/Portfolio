import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Initialize state with your Form ID
  const [state, handleSubmit] = useForm("xykkpoav");

  // Display success message after submission
  if (state.succeeded) {
    return (
        <section id="contact" className="contact bg-bg max-w-7xl mx-auto mt-16 md:mt-24 pt-16 text-center px-4">
          <div className="py-10 md:py-20">
            <h2 className="text-3xl md:text-4xl text-white mb-4">🚀 Thank You!</h2>
            <p className="text-whiteLight text-lg md:text-xl">Your message has been sent successfully. I will get back to you as soon as possible!</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-8 text-mainColor border border-mainColor px-6 py-2 hover:bg-mainColor hover:text-white transition-all"
            >
              Send Another Message
            </button>
          </div>
        </section>
    );
  }

  return (
      <section id="contact" className="contact bg-bg max-w-7xl mx-auto mt-16 md:mt-24 pt-16 px-4">
        <div className="contact-title flex flex-col py-8 text-center md:text-right md:px-24">
          <h5 className="uppercase text-whiteLight text-xs md:text-sm tracking-[3px]">— contact me</h5>
          <h2 className="text-3xl md:text-4xl capitalize tracking-tighter">🚀 Let's collaborate</h2>
        </div>

        <div className="container mx-auto flex items-center flex-col py-8 md:py-16">
          <div className="sub text-center leading-snug text-base md:text-xl text-whiteLight my-8 md:my-12">
            Got a question, proposal or project or want to work <br />
            together on something? Feel free to reach out.
          </div>

          {/* Formspree handleSubmit replaces traditional submission */}
          <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 min-w-[280px]">

            <div className="input-row flex flex-col md:flex-row justify-between gap-8 md:gap-0">
              {/* Name field */}
              <div className="side w-full md:w-[45%]">
                <label htmlFor="name" className="mt-5 block capitalize text-gray-400 text-xs mb-1">Your Name</label>
                <input
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    type="text"
                    required
                    className="border-0 rounded-none border-b border-white bg-transparent outline-none shadow-none text-left text-sm w-full text-white p-2"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              {/* Email field */}
              <div className="side w-full md:w-[45%]">
                <label htmlFor="email" className="mt-5 block capitalize text-gray-400 text-xs mb-1">Your Email</label>
                <input
                    placeholder="Enter your email address"
                    name="email"
                    id="email"
                    type="email"
                    required
                    className="border-0 rounded-none border-b border-white bg-transparent outline-none shadow-none text-left text-sm w-full text-white p-2"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* Message field */}
            <div className="textarea mt-8 md:mt-12">
              <label htmlFor="message" className="mt-5 block capitalize text-gray-400 text-xs mb-1">Your Message</label>
              <textarea
                  name="message"
                  id="message"
                  placeholder="Hi, I think we need you to work on this particular product..."
                  required
                  className="resize-none leading-snug border-0 rounded-none border-b border-white bg-transparent outline-none shadow-none text-left text-sm w-full text-white p-2 h-24"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className={`outline-none cursor-pointer capitalize text-mainColor py-3 px-6 md:py-4 md:px-8 bg-transparent border border-mainColor block mx-auto mt-12 md:mt-20 relative hover:text-white hover:bg-mainColor transition-all duration-300 ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {state.submitting ? 'Sending...' : 'Send Message.'}
            </button>
          </form>
        </div>
      </section>
  );
};

export default Contact;