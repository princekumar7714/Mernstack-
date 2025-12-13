import React from 'react'

function CreateTask() {
  return (
    <div>
          <div className="p-5  screen-full  bg-[#1c1c1c] mt-5 rounded">
        <form className="flex flex-wrap w-full  items-center  justify-between ">
          <div className="w-1/2">
            {" "}
             <div>
              {" "}
              <h3 className="text-2xl font-medium mb-0.5 text-white">Task Title</h3>
              <input
                className="border-2  bg-transparent border-white rounded-xl mb-4 py-1 px-25 text-xl placeholder:text-gray-400"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              {" "}
              <h3 className="text-2xl font-mediam mb-0.5 text-white">Date</h3>
              <input
               className="border-2  bg-transparent border-white rounded-xl mb-4 py-1 px-32 text-xl placeholder:text-gray-400"
                type="date"
              />
            </div>
           
            <div>
              <div>
                <h3 className="text-2xl font-mediam mb-0.5 text-white"> asign To</h3>
                <input
                  className="border-2  bg-transparent border-white rounded-xl py-1 px-25 mb-4 text-xl placeholder:text-gray-400"
                  type="text"
                  placeholder="Employee Name"
                />
              </div>
              <div>
                <h3 className="text-2xl font-mediam mb-0.5 text-white">Category</h3>
                <input
                  className="border-2  bg-transparent border-white rounded-xl py-1 px-25  text-xl placeholder:text-gray-400"
                  type="text"
                  placeholder="Design,Dev,etc"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            {" "}
            <h3 className="text-2xl font-normal mb-0.5 text-white">Desription</h3>
            <textarea
              className="border-2 bg-transparent border-black rounded-xl   h-48 text-xl placeholder:text-gray-400"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
             <button className="border-2  bg-green-500 border-transparent rounded-xl py-3 px-5 text-xl mt-4 placeholder:text-gray-400">
            Create Task
          </button>
          </div>
         
        </form>
      </div>
    </div>
  )
}

export default CreateTask