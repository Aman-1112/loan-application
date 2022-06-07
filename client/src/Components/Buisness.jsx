import React, { useState } from 'react'
import axios from 'axios'
function Buisness() {

  const [businessDetails, setBusinessDetails] = useState({
    bname: "",
    bdescription: "",
    gst: "",
    contactNo: "",
    estDate: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    loanAmount: "",
    annualRevenue: ""
  })
  const handleChange = (e) => {
    setBusinessDetails({ ...businessDetails, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector('.needs-validation').classList.add('was-validated');
    document.querySelector('.needs-validation').classList.remove('needs-validation');
    const res = await axios.post('/businessDetail', businessDetails)
    if (res.status === 200) {
      console.log('saved to database');
      alert('Applied Successfully for Business Loan')
      setBusinessDetails({
        bname: "",
        bdescription: "",
        gst: "",
        contactNo: "",
        estDate: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        loanAmount: "",
        annualRevenue: ""
      })
    } else {
      console.log('someError', res);
    }
  }
  return (
    <div className='w-75 mx-auto'>
      <h3 className='mt-2'>Business Loan Application Form</h3>
      <p>Please fill in all needed information in the form below to
        request a loan for your buisness.
      </p>
      <hr />
      <form className="needs-validation">
        <div className=''>
          <div className='form-group'>
            <label htmlFor='bname'>Buisness Name:</label>
            <input type="text" id="bname" className="form-control" onChange={handleChange} placeholder="Buisness Name" value={businessDetails.bname} required></input>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className='form-group'>
            <label htmlFor='bdescription'>Buiness Description(Services):</label>
            <textarea type="text" id="bdescription" className="form-control" onChange={handleChange} placeholder="Business Description" value={businessDetails.bdescription} required>
              <div class="invalid-feedback">Please fill out this field.</div>
            </textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='gst'>Enter You Gst No:</label>
            <input type="Number" id="gst" className="form-control" onChange={handleChange} placeholder="GST No" value={businessDetails.gst} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className='form-group'>
            <label htmlFor='contactNo'>Contact No:</label>
            <input type="tel" id="contactNo" className="form-control" onChange={handleChange} placeholder="Contact Number" value={businessDetails.contactNo} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className='form-group'>
            <label htmlFor='estDate'>Established On:</label>
            <input type="date" id="estDate" className="form-control" onChange={handleChange} value={businessDetails.estDate}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type="email" id="email" className="form-control" onChange={handleChange} placeholder="Email " value={businessDetails.email}></input>
          </div>


          <div className='form-group'>
            <label >Office Address:</label>
            <input type="text" id="streetAddress" className="form-control " onChange={handleChange} placeholder="Street Address" value={businessDetails.streetAddress} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>

            <input type="text" id="city" className='form-control mt-1 ' onChange={handleChange} placeholder='City' value={businessDetails.city} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
            <input type="text" id="state" className='form-control mt-1 ' onChange={handleChange} placeholder='State' value={businessDetails.state} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>

            <input type="number" id="zipCode" className='form-control mt-1' onChange={handleChange} placeholder="Postal/Zip Code" value={businessDetails.zipCode} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
            <input type="" id="country" className="form-control mt-1" onChange={handleChange} placeholder="Country" value={businessDetails.country} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
          </div>


          <div className='form-group'>
            <label htmlFor='loanAmount'>Required Loan Amount</label>
            <input type="number" id="loanAmount" className="form-control" onChange={handleChange} placeholder="in Rupees" value={businessDetails.loanAmount} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className='form-group'>
            <label htmlFor='annualRevenue'>Your Annual Revenue</label>
            <input type="number" id="annualRevenue" className="form-control" onChange={handleChange} placeholder="in Rupees" value={businessDetails.annualRevenue} required>
            </input><div class="invalid-feedback">Please fill out this field.</div>
          </div>



          <div className='text-center my-3'>
            <button onClick={handleSubmit} type='submit' className='btn btn-primary rounded-pill'>Apply For Loan</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Buisness