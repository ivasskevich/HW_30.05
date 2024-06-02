import React, { useState } from "react";

export function Form(props) {
   const [formData, setFormData] = useState({
      userId: "",
      password: "",
      name: "",
      address: "",
      country: "",
      zipCode: "",
      email: "",
      sex: "",
      language: "",
      about: ""
   });

   const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form submitted successfully");
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="userId">User ID:</label>
               <input
                  type="text"
                  id="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  minLength="5"
                  maxLength="7"
                  required
               />
            </div>
            <div>
               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="7"
                  maxLength="12"
                  required
               />
            </div>
            <div>
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  pattern="[a-zA-Z]+"
                  required
               />
            </div>
            <div>
               <label htmlFor="address">Address:</label>
               <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9\s]+"
                  required
               />
            </div>
            <div>
               <label htmlFor="country">Country:</label>
               <select
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
               >
                  <option value="">Select a country</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
               </select>
            </div>
            <div>
               <label htmlFor="zipCode">ZIP Code:</label>
               <input
                  type="text"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9\s]+"
                  required
               />
            </div>
            <div>
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            <div>
               <label>Sex:</label>
               <label>
                  <input
                     type="radio"
                     id="sex"
                     name="sex"
                     value="Male"
                     checked={formData.sex === "Male"}
                     onChange={handleChange}
                     required
                  />
                  Male
               </label>
               <label>
                  <input
                     type="radio"
                     id="sex"
                     name="sex"
                     value="Female"
                     checked={formData.sex === "Female"}
                     onChange={handleChange}
                     required
                  />
                  Female
               </label>
            </div>
            <div>
               <label>Language:</label>
               <label>
                  <input
                     type="radio"
                     id="language"
                     name="language"
                     value="knows_english"
                     checked={formData.language === "knows_english"}
                     onChange={handleChange}
                  />
                  Knows English
               </label>
               <label>
                  <input
                     type="radio"
                     id="language"
                     name="language"
                     value="does_not_know_english"
                     checked={formData.language === "does_not_know_english"}
                     onChange={handleChange}
                  />
                  Does not know English
               </label>
            </div>
            <div>
               <label htmlFor="about">About:</label>
               <textarea
                  id="about"
                  value={formData.about}
                  onChange={handleChange}
               ></textarea>
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}
