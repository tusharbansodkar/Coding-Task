import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { CgAsterisk } from 'react-icons/cg';
import * as Yup from 'yup';
import List from './list';

function App() {
  const [people, setPeople] = React.useState([]);

  const formik = useFormik({
		initialValues: {
			username: '',
			dob: '',
			sex: '',
			mobile: '',
			idType: '',
			id: '',
      guardianType:'',
      guardian:'',
      email:'',
      emergencyContact:'',
      address:'',
      state:'',
      city:'',
      country:'',
      pin:'',
      occupation:'',
      religion:'',
      maritalStatus:'',
      bloodGroup:'',
      nationality:''
		},
    validationSchema:Yup.object({
      username:Yup.string().required('this field is required'),
      dob:Yup.string().required('this field is required'),
      sex:Yup.string().required('this field is required')
    }),
    onSubmit: (values, {resetForm})=>{
      console.log('submitted', values);
      resetForm({ values: ''});

      setPeople([...people, values])

      
    }
	});

	

	return (
    <>
		<div className="container" style={{backgroundColor:'rgb(192, 192, 192)', padding:'10px', marginTop:'5px'}}>

			<form onSubmit={formik.handleSubmit}>
				<div className="container" style={{padding:'5px'}}>
					<h5>Personal Details</h5>
					<div className="row" style={{ marginTop:'5px'}}>
						<div className="col-4" style={{height:'50px'}}>
              <div style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="name">Name
              <sup><CgAsterisk style={{color:'red'}}/></sup>
              </label>
							<input
								id="name"
								type="text"
								name="username"
								onChange={formik.handleChange}
								value={formik.values.username}
                onBlur={formik.handleBlur}
                placeholder='Enter Name'
                style={{width:'280px'}}
							/>
              </div>
              
              
							
              {formik.touched.username && formik.errors.username && <p style={{color:'red'}}>{formik.errors.username}</p>}
						</div>
            

						<div className="col-5" style={{height:'50px'}}>
              <div style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="dob">Date of Birth or Age
              <sup><CgAsterisk style={{color:'red'}}/></sup>
              </label>
							<input
								id="dob"
								type="text"
								name="dob"
								onChange={formik.handleChange}
								value={formik.values.dob}
                onBlur={formik.handleBlur}
                placeholder='DD/MM/YYYY or Age in Years'
                style={{width:'280px'}}
							/>
              </div>
              {formik.touched.dob && formik.errors.dob && <p style={{color:'red'}}>{formik.errors.dob}</p>}
						</div>

						<div className="col-2" style={{height:'50px'}}>
              <div style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="sex" style={{ marginRight:'15px'}}>Sex
              <sup><CgAsterisk style={{color:'red'}}/></sup></label>
							<select name="sex" id="sex" onChange={formik.handleChange}
              style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              onBlur={formik.handleBlur}
              >
								<option value="" disabled selected>
									Enter sex
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
              </div>
              {formik.touched.sex && formik.errors.sex && <p style={{color:'red'}}>{formik.errors.sex}</p>}

							
						</div>
					</div>

					<div className="row" style={{marginTop:'5px'}}>
						<div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
							<label htmlFor="mobile">Mobile</label>
							<input
								id="mobile"
								type="text"
								name="mobile"
								onChange={formik.handleChange}
								value={formik.values.mobile}
                placeholder='Enter Mobile'
                style={{width:'280px'}}
							/>
						</div>

						<div className="col-6" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
							<label htmlFor="idnum" style={{ marginRight:'15px'}}>Govt Issued ID</label>
							<select name="idType" id="idnum" onChange={formik.handleChange}
              style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px', width:'85px'}}
              >
								<option value="" disabled selected>
									ID type
								</option>
								<option value="Adhar">Adhar</option>
								<option value="Pan">PAN</option>
								<option value="DL">Driving License</option>
							</select>

							<input
								id="idnum"
								type="text"
								name="id"
								onChange={formik.handleChange}
								value={formik.values.id}
                placeholder='Enter Govt ID'
                style={{width:'250px'}}
							/>
						</div>
					</div>
				</div>

        <div className="container" style={{padding:'5px' }}>
          
          <h5>Contact Details</h5>

          <div className="row" style={{marginTop:'5px'}}>
            <div className="col-5" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
            <label htmlFor="guardian" style={{ marginRight:'15px'}}>Guardian Details</label>

              <select name="guardianType" 
              style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              >
                <option value="">Enter Label</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
              </select>
							<input
								id="guardian"
								type="text"
								name="guardian"
								onChange={formik.handleChange}
								value={formik.values.guardian}
                placeholder='Enter Guardian Name'
               
							/>
            </div>

            <div className="col-3" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              
              <label htmlFor="email">Email</label>
              <input
								id="email"
								type="text"
								name="email"
								onChange={formik.handleChange}
								value={formik.values.email}
                placeholder='Enter Email'
                onBlur={formik.handleBlur}
							/>
             
             
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="emergencyContact">Emergency <br /> Contact</label>
              <input
								id="emergencyContact"
								type="text"
								name="emergencyContact"
								onChange={formik.handleChange}
								value={formik.values.emergencyContact}
                placeholder='Enter Emergency No'
               
							/>

            </div>

          </div>
        </div>

        <div className="container" style={{padding:'5px'}}>
          <h5>Address Details</h5>
          <div className="row" style={{marginTop:'5px'}}>
            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="address">Address</label>
              <input
								id="address"
								type="text"
								name="address"
								onChange={formik.handleChange}
								value={formik.values.address}
                placeholder='Enter Address'
                style={{width:'280px'}}
							/>
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="state" style={{ marginRight:'15px'}}>State</label>
              <select name="state" id="state"
              onChange={formik.handleChange}
              style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              >
                <option value="">Enter State</option>
                <option value="MP">MP</option>
                <option value="MH">MH</option>
                <option value="UP">UP</option>

              </select>
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
                <label htmlFor="city" style={{ marginRight:'15px'}} >City</label>
                <select name="city" id="city"
                onChange={formik.handleChange}
                style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
                >
                  <option value="">Enter city/town/village</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bhopal">Bhopal</option>
                  <option value="lucknow">Lucknow</option>
                </select>
              </div>
          </div>

          <div className="row" style={{marginTop:'5px'}}>
            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="country" style={{ marginRight:'15px'}}>Country</label>
              <select name="country" id="country"
              onChange={formik.handleChange}
              style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px', width:'100px'}}
              >
                <option value="india">India</option>
                <option value="pak">Pakistan</option>
                <option value="bangladesh">Bangladesh</option>
              </select>
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="pin">Pincode</label>
              <input
								id="pin"
								type="text"
								name="pin"
								onChange={formik.handleChange}
								value={formik.values.pin}
                placeholder='Enter pincode'
                style={{width:'250px'}}
							/>

            </div>
          </div>
          
        </div>

        <div className="container" style={{padding:'5px'}}>
          <h5>Other Details</h5>
          <div className="row" style={{marginTop:'5px'}}>
            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="occupation">Occupation</label>
              <input
								id="occupaiton"
								type="text"
								name="occupation"
								onChange={formik.handleChange}
								value={formik.values.occupation}
                placeholder='Enter occupation'
                style={{width:'200px'}}
							/>
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="religion" style={{ marginRight:'15px'}}>Religion</label>
              <select name="religion" id="religion"
               onChange={formik.handleChange}
               style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              >
                <option value="">Enter religion</option>
                <option value="hindu">Hinduism</option>
                <option value="islam">Islam</option>
                <option value="other">Other</option>

              </select>
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
              <label htmlFor="maritalStatus" style={{ marginRight:'15px'}}>Marital Status</label>
              <select name="maritalStatus" id="maritalStatus"
               onChange={formik.handleChange}
               style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              >
                <option value="">Enter Marital Status</option>
                <option value="single">Single</option>
                <option value="married">married</option>
              </select>

            </div>

          </div>
          <div className="row" style={{marginTop:'5px'}}>
            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
            <label htmlFor="bloodGroup" style={{ marginRight:'15px'}}>Blood Group</label>
              <select name="bloodGroup" id="bloodGroup"
               onChange={formik.handleChange}
               style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              >
                <option value="">Group</option>
                <option value="a+">A+</option>
                <option value="b+">B+</option>
                <option value="ab+">AB+</option>

              </select>
            </div>

            <div className="col-4" style={{ display:'flex', justifyContent:'left', alignItems:'center'}}>
            <label htmlFor="nationality" style={{ marginRight:'15px'}}>Nationality</label>
              <select name="nationality" id="nationality"
               onChange={formik.handleChange}
               style={{border:'1px solid gray', borderRadius:'3px', outline:'none', padding:'3px'}}
              >
                <option value="india">India</option>
                <option value="pak">Pakistan</option>
                <option value="bangladesh">Bangladesh</option>
              </select>
            </div>
          </div>
        </div>

        <button className='btn btn-outline-danger cancelBtn'>Cancel</button>
        <button className='btn btn-success submitBtn'>Submit</button>
			</form>
		</div>

    <List peopleData={people}></List>

    </>

    
	);
}

export default App;
