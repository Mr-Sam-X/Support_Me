import React from "react";

const Username = async ({ params }) => {
  const { username } = await params;
  return (
    <>
    <div className="relative w-full text-white">
      <img
        className="w-full h-64 block"
        src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=wXqZlJ5g3_ZvEI3ZPOgG4FHpM47Z9vyG8rnfH_FBcX8%3D&token-time=1793750400"
        alt="Banner"
      />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
        <img
          className="w-30 h-30 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/044/252/899/small/photography-of-black-panther-running-in-a-cloud-of-dust-free-photo.jpg"
          alt="Panther"
        />
      </div>
    </div>
    <div className="flex flex-col gap-2 items-center mt-16">
      
  <h1 className="text-xl font-bold">@{username}</h1>
  <p className="text-sm">Creating Animated art for VTT&apos;s</p>
  <p className="text-sm text-gray-400">
    9,719 members · 82 posts · $15,450/release
  </p>

    </div>

     <div className="w-full flex justify-center px-4 py-10 text-white">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Supporters */}
        <div className="bg-slate-900 rounded-lg p-8">
          <h2 className="text-lg font-bold mb-5">Supporters</h2>
          <ul className="space-y-2 text-sm">
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
            <li>Shubham donated $30 with a message &quot;&quot;</li>
          </ul>
        </div>

        {/* Make a Payment */}
        <div className="bg-slate-900 rounded-lg p-8">
          <h2 className="text-lg font-bold mb-5">Make a Payment</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Amount"
              className="flex-1 bg-slate-800 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-slate-800 rounded-md px-4 py-2 text-sm">
              Pay
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-slate-800 rounded-md px-3 py-2 text-xs">
              Pay $10
            </button>
            <button className="bg-slate-800 rounded-md px-3 py-2 text-xs">
              Pay $20
            </button>
            <button className="bg-slate-800 rounded-md px-3 py-2 text-xs">
              Pay $30
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Username;