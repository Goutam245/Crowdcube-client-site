import { FaStar } from "react-icons/fa";

const BlogAndReview = () => {
  return (
    <div className="p-5 dark:bg-blue-900 dark:text-blue-100">
      {/* Blog Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">Our Blog</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
          {/* Blog Post 1 */}
          <div className="card bg-base-100 dark:bg-blue-600 dark:shadow-md shadow-xl">
            
            <div className="card-body">
              <h3 className="card-title">How to Launch a successfully Campaign</h3>
              <p>
                Learn the steps and strategies to make your crowdfunding
                campaign a success.
              </p>
             {/* ---------- */}
           
             <button
  className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-indigo-800 h-10 w-40 border text-left p-3 text-indigo-200 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-pink-500 after:right-8 after:top-3 after:rounded-full after:blur-lg"
>
  Read More
</button>

             {/* ------- */}
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="card bg-base-100 dark:bg-blue-600 dark:shadow-md shadow-xl">
           
            <div className="card-body">
              <h3 className="card-title">Engaging Your Audience</h3>
              <p>
                Tips and tricks for keeping your audience engaged throughout
                your campaign journey.
              </p>
              <button
  className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-indigo-800 h-10 w-40 border text-left p-3 text-indigo-200 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-pink-500 after:right-8 after:top-3 after:rounded-full after:blur-lg"
>
  Read More
</button>

            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="card bg-base-100 dark:bg-blue-600 dark:shadow-md shadow-xl">
            
            <div className="card-body">
              <h3 className="card-title">Success Stories</h3>
              <p>
                Get inspired by real-life stories of successful crowdfunding
                campaigns.
              </p>
              <button
  className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-indigo-800 h-10 w-40 border text-left p-3 text-indigo-200 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-pink-500 after:right-8 after:top-3 after:rounded-full after:blur-lg"
>
  Read More
</button>

            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">What People Say</h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
          {/* Review 1 */}
          <div className="card bg-base-100 dark:bg-blue-600 dark:shadow-md shadow-xl">
            <div className="card-body">
              <p className="text-white">
                This platform is incredible! It helped me connect with the
                right investors and bring my dream project to life.
              </p>
              <div className="flex items-center mt-3">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-white" />
                <span className="ml-2 font-bold">Jhony Marphy</span>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="card bg-base-100 dark:bg-blue-600 dark:shadow-md shadow-xl">
            <div className="card-body">
              <p className="text-white">
                The user experience is seamless, and the support team is
                outstanding. Highly recommended!
              </p>
              <div className="flex items-center mt-3">
              <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-white" />
                <span className="ml-2 font-bold"> Bandon Eric</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogAndReview;
