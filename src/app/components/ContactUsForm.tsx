
import { useState,ChangeEvent, FormEvent } from 'react';
interface FormData {
    name: string;
    phone: string;
    email: string;
    address:string;
    message:string
  }
export default function ContactUsForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <section className=" pt-10 pb-20 px-20" id="contact-us">
      <div className="container mx-auto">
        <div className="row flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="contact-content">
              <h2 className="font-bold text-2xl mb-3">Contact Us</h2>
              <p className="text-gray-600 mb-2">
                Real Estate agents are Property consisting of land and the buildings on it, along with its seds naturals resources such seds as crops, minerals, or water.
              </p>
              <ul className="contact-listing list-none p-0">
                <li className="flex items-center mt-4">
                  <div className="contact-icon bg-gray-800 rounded-full p-3 flex items-center justify-center text-white mr-3">
                    <i className="fa-solid fa-location-dot bg-[#381909]"></i>
                  </div>
                  <div className="contact-info">
                    <h5 className="font-bold text-lg mb-1">Address</h5>
                    <p className="text-gray-600 text-sm mb-0">Mirpur New Bazar Road, Block-c, Dhaka-1210</p>
                  </div>
                </li>

                <li className="flex items-center mt-4">
                  <div className="contact-icon bg-gray-800 rounded-full p-3 flex items-center justify-center text-white mr-3">
                    <i className="fa-solid fa-phone bg-[#381909]"></i>
                  </div>
                  <div className="contact-info">
                    <h5 className="font-bold text-lg mb-1">Phone</h5>
                    <p className="text-gray-600 text-sm mb-0">(732) 803-01 03, (732) 806-01 04, (880)172380129</p>
                  </div>
                </li>

                <li className="flex items-center mt-4">
                  <div className="contact-icon bg-gray-800 rounded-full p-3 flex items-center justify-center text-white mr-3">
                    <i className="fa-solid fa-envelope bg-[#381909]"></i>
                  </div>
                  <div className="contact-info">
                    <h5 className="font-bold text-lg mb-1">Email</h5>
                    <p className="text-gray-600 text-sm mb-0">info@company.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-input w-full p-2 border border-gray-300 rounded"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="phone"
                    className="form-input w-full p-2 border border-gray-300 rounded"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full px-2 mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-input w-full p-2 border border-gray-300 rounded"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full px-2 mb-4">
                  <input
                    type="text"
                    name="address"
                    className="form-input w-full p-2 border border-gray-300 rounded"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full px-2 mb-4">
                  <textarea
                    name="message"
                    className="form-input w-full p-2 border border-gray-300 rounded"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn bg-[#381909] text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

