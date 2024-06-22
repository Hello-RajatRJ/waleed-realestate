"use client"
import React, { useState, FormEvent } from 'react'

const RoomForm: React.FC = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [district, setDistrict] = useState('District');
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log({ checkIn, checkOut, district });
        // Handle form submission logic here
      };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 banner-img">
      <form 
        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-lg" 
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Check In</label>
          <input 
            type="date" 
            id="checkin" 
            value={checkIn} 
            onChange={(e) => setCheckIn(e.target.value)} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full">
          <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Check Out</label>
          <input 
            type="date" 
            id="checkout" 
            value={checkOut} 
            onChange={(e) => setCheckOut(e.target.value)} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full">
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
          <select 
            id="district" 
            value={district} 
            onChange={(e) => setDistrict(e.target.value)} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
            <option value="district3">District 3</option>
          </select>
        </div>

        <div className=" w-full md:w-auto ">
          <button 
            type="submit" 
            className="btn bg-[#381909] text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default RoomForm
