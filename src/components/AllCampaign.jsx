import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    fetch("https://crowdcube-server-ivory.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false)); 
  }, []);

  const handleSort = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.minDonation - b.minDonation;
      } else {
        return b.minDonation - a.minDonation;
      }
    });

    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          All Campaigns Available Here
        </h1>
 
        <div className="text-end font-bold mb-4">
          <button
            onClick={handleSort}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-red-400 transition"
          >
            Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>
  

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
          </div>
        ) : ( 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
            {campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="bg-white border-2 border-dashed border-blue-400 dark:bg-gray-800 shadow-md rounded-lg p-4"
              >
                <img
                  src={campaign.imageURL}
                  alt={campaign.campaignTitle}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-bold text-blue-600 mb-2">
                  {campaign.campaignTitle}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Type:</span> {campaign.campaignType}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Min Donation:</span> {campaign.minDonation} USD
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Deadline:</span> {campaign.deadline}
                </p>
                <Link to={`/campaignDetails/${campaign._id}`}>
                <button className="bg-cyan-950 w-full text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  See More
</button>
                  
                  

                  

                  
                  
                  
                  
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCampaign;
