import { useContext } from "react";
import { authContext } from "./AuthProvider";
import toast from "react-hot-toast";

const AddCampaign = () => {
  const { user } = useContext(authContext);

  const handleCampaignSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const campaignTitle = form.campaignTitle.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const singleCampaigns = {
      imageURL,
      campaignTitle,
      campaignType,
      description,
      minDonation,
      deadline,
      userEmail,
      userName,
    };
    console.log(singleCampaigns);

    fetch("https://crowdcube-server-ivory.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleCampaigns),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        toast.success('Campaign Added Successfully');
      });
  };
  return (
    <div>
      <div className="container mx-auto mt-10 max-w-lg p-10 border-2 rounded-lg shadow-lg mb-10 p-">
        <h2 className="text-2xl font-bold text-red-400 mb-6">
          Add New Campaign
        </h2>

        <form onSubmit={handleCampaignSubmit}>
          {/* Image URL  */}
          <div className="form-control mb-4">
            <label className="label font-semibold ">
              <span className="label-text text-blue-600">Image URL</span>
            </label>
            <input
              type="url"
              name="imageURL"
              placeholder="Enter this image URL"
              className="input  input-bordered w-full border-dashed border-blue-300 border-2 bg-white  "
              required
            />
          </div>

          {/* Campaign Title */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">Campaign Title</span>
            </label>
            <input
              type="text"
              name="campaignTitle"
              placeholder="Enter this campaign title"
              className="input input-bordered w-full border-dashed border-blue-300 border-2 bg-white  dark:text-white"
              required
            />
          </div>

          {/* Campaign Type  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">Campaign Type</span>
            </label>
            <select
              name="campaignType"
              className="select select-bordered w-full border-dashed border-blue-300 border-2 bg-white  dark:text-white"
              required
            >
              <option disabled selected>
                Select type
              </option>
              <option>Personal problem</option>
              <option>Start Up</option>
              <option>Creative</option>
             
            </select>
          </div>

          {/* Description  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Write a best description..."
              className="textarea textarea-bordered w-full border-dashed border-blue-300 border-2 bg-white  dark:text-black"
              required
            ></textarea>
          </div>

          {/* Minimum Donation Amount */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter this amount"
              className="input input-bordered w-full border-dashed border-blue-300 border-2 bg-white  dark:text-white"
              required
            />
          </div>

          {/* Deadline  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered border-dashed border-blue-300 border-2 w-full bg-white dark:text-white"
              required
            />
          </div>

          {/* User Email (Read Only)  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              className="input input-bordered border-dashed border-blue-300 border-2 w-full  bg-white dark:text-black"
              defaultValue={user?.email || ""}
            />
          </div>

          {/* User Name (Read Only) */}
          <div className="form-control mb-6">
            <label className="label font-semibold">
              <span className="label-text text-blue-600">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              className="input input-bordered w-full border-dashed border-blue-300 border-2  bg-gray-200 dark:text-black"
              defaultValue={user?.displayName || ""}
            />
          </div>

          {/* Add Button  */}
          <div className="form-control">
            

        
        
<button
  className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
>
  <span
    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
  >
  </span>
  <span
    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
  >
   Add
    <svg
      stroke="currentColor"
      fill="currentColor"
      
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
      ></path>
    </svg>
  </span>
</button>










          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;
















    



