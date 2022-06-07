import React, { useState } from 'react'
import axios from 'axios'
function Personal() {

    const [personalDetails, setPersonalDetails] = useState({
        fname: "",
        lname: "",
        age: "",
        phoneNo: "",
        birthDate: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        loanAmount: "",
        annualIncome: "",
        loanReason: ""
    })

    const handleChange = (e) => {
        setPersonalDetails({ ...personalDetails, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.querySelector('.needs-validation').classList.add('was-validated');
        document.querySelector('.needs-validation').classList.remove('needs-validation');
        const res = await axios.post('/personalDetail', personalDetails)

        if (res.status === 200) {
            console.log('saved to database');
            alert('Applied Successfully for Personal Loan')
            setPersonalDetails({
                fname: "",
                lname: "",
                age: "",
                phoneNo: "",
                birthDate: "",
                email: "",
                streetAddress: "",
                city: "",
                state: "",
                zipCode: "",
                country: "",
                loanAmount: "",
                annualIncome: "",
                loanReason: ""
            })
        } else {
            console.log('someError', res);
        }
    }
    return (
        <div className='w-75 mx-auto'>
            <h3 className='mt-2'>Personal Loan Application Form</h3>
            <p>Please fill in all needed information in the form below to
                request a loan for you.
            </p>
            <hr />
            <form className="needs-validation" >
                <div className=''>
                    <div className='form-group'>
                        <label htmlFor='fname'>First Name:</label>
                        <input type="text" id="fname" className="form-control" onChange={handleChange} placeholder="First Name" value={personalDetails.fname} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lname'>Last Name:</label>
                        <input type="text" id="lname" className="form-control" onChange={handleChange} placeholder="Last Name" value={personalDetails.lname} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='age'>Enter Your Age:</label>
                        <input type="Number" id="age" className="form-control" onChange={handleChange} placeholder="Age" value={personalDetails.age} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phoneNo'>Phone No:</label>
                        <input type="tel" id="phoneNo" className="form-control" onChange={handleChange} placeholder="Phone Number" value={personalDetails.phoneNo} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='birthDate'>Birth Date:</label>
                        <input type="date" id="birthDate" className="form-control" onChange={handleChange} value={personalDetails.birthDate}></input>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" id="email" className="form-control" onChange={handleChange} placeholder="Email " value={personalDetails.email}></input>
                    </div>


                    <div className='form-group'>
                        <label >Address:</label>
                        <input type="text" id="streetAddress" className="form-control " onChange={handleChange} placeholder="Street Address" value={personalDetails.streetAddress} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>

                        <input type="text" id="city" className='form-control mt-1 ' onChange={handleChange} placeholder='City' value={personalDetails.city} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                        <input type="text" id="state" className='form-control mt-1 ' onChange={handleChange} placeholder='State' value={personalDetails.state} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>

                        <input type="number" id="zipCode" className='form-control mt-1' onChange={handleChange} placeholder="Postal/Zip Code" value={personalDetails.zipCode} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                        <input type="" id="country" className="form-control mt-1" onChange={handleChange} placeholder="Country" value={personalDetails.country} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>


                    <div className='form-group'>
                        <label htmlFor='loanAmount'>Required Loan Amount</label>
                        <input type="number" id="loanAmount" className="form-control" onChange={handleChange} placeholder="in Rupees" value={personalDetails.loanAmount} required></input>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='annualIncome'>Your Annual Income</label>
                        <input type="number" id="annualIncome" className="form-control" onChange={handleChange} placeholder="in Rupees" value={personalDetails.annualIncome}></input>
                    </div>


                    <div className='form-group'>
                        <label htmlFor='loanReason'> What will loan be used for?</label>
                        <textarea type="text" id="loanReason" className="form-control" onChange={handleChange} placeholder="Reason" value={personalDetails.loanReason}></textarea>
                    </div>
                    <div className='text-center my-3'>
                        <button onClick={handleSubmit} type='submit' className='btn btn-primary rounded-pill'>Apply For Loan</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Personal