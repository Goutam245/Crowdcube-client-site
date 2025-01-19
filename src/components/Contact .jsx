const ContactPage = () => {
  return (
    <div className="p-5 dark:bg-gray-900 dark:text-gray-100 mt-">
      <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Contact Us</h2>
      <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-6">
        {/* Contact Form Section */}
        <div className="card bg-gray-600 dark:bg-blue-600 shadow-xl p-6">
          <h3 className="text-2xl text-white font-semibold mb-4">Get in Touch</h3>
          <form className="">
            <label className="block text-white mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered text-white w-full mb-4 dark:bg-gray-700"
            />
            <label className="block mb-2 text-white font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input text-white input-bordered w-full mb-4 dark:bg-gray-700"
            />
            <label className="block text-white mb-2 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              className="textarea text-white textarea-bordered w-full mb-4 dark:bg-gray-700"
            ></textarea>
            <button className="btn bg-blue-600 text-white w-full dark:hover:bg-orange-600">
              Send Message
            </button>
          </form>
        </div>

       
      </div>
    </div>
  );
};

export default ContactPage;
