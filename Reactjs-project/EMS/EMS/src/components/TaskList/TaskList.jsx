import React from "react";

function TaskList() {
  return (
    <div
      id="Tasklist"
      className="h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap  py-10 mt-10"
    >
      <div className="flex-shrink-0 h-full  w-[300px] bg-yellow-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">12 nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi
          tempore optio illum? In, excepturi!
        </p>
      </div>
      <div className="flex-shrink-0 h-full  w-[300px] bg-green-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">12 nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi
          tempore optio illum? In, excepturi!
        </p>
      </div>

      <div className="flex-shrink-0 h-full  w-[300px] bg-orange-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">12 nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi
          tempore optio illum? In, excepturi!
        </p>
      </div>

      <div className="flex-shrink-0 h-full  w-[300px] bg-blue-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">12 nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi
          tempore optio illum? In, excepturi!
        </p>
      </div>
      <div className='flex-shrink-0 h-full  w-[300px] bg-pink-400 p-5 rounded-xl'>
<div className='flex justify-between items-center'>
<h3 className='bg-red-400 px-3 py-1 rounded text-sm'>High</h3>
<h4 className='text-sm'>12 nov 2025</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
<p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi tempore optio illum? In, excepturi!</p>
</div>


    </div>
  );
}

export default TaskList;
