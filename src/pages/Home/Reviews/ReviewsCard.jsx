import React from "react";

const ReviewsCard = ({ reviewCard }) => {
    // review: new name 
  const { review, userName, user_photoURL } = reviewCard;
  return (
    <div class="card bg-base-100 shadow-lg p-6 rounded-2xl max-w-md">
      <div class="flex items-start gap-2">
        <span class="text-7xl text-primary">❝</span>
      </div>

      <p class="text-gray-600 mt-3">{review}</p>

      <div class="border-t-[1.5px] border-gray-400 border-dashed mt-5 mb-4"></div>

      <div class="flex items-center gap-3">
        <div class="">
            <img className="w-10 h-10 rounded-full border-3 border-amber-500" src={user_photoURL} alt="" />
        </div>
        <div>
          <h3 class="font-bold text-secondary">{userName}</h3>
          <p class="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
