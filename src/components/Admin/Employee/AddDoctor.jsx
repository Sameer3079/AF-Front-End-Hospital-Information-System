import React, { Component } from 'react';
import axios from 'axios';


class AddDoctor extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[],

            username:"",
            password:"",
            firstName:"",
            lastName:"",
            dob:"",
            gender:"",
            civilStatus:"",
            NIC:"",
            address:"",
            phone:"",
            email:"",
            departments:"",
            specialization:"",
            

            usernameError:"",
            passwordError:"",
            firstNameError:"",
            lastNameError:"",
            NICError:"",
            addressError:"",
            phoneError:"",
            emailError:"",
            specializationError:"",
            departmentsError:""
        }
        this.GetDepartments();
    }
    
    GetDepartments(){
        axios.get('http://localhost:3001/department').then(res=>{
            console.log(res.data);
            this.setState({data:res.data});
        });
    }

    displayDepartment(){
        let rows = [];
        this.state.data.forEach(record=>{
            let departments = record.departments;
        })
        
    }

    usernameChange= (e) =>{
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        });
    }

    passwordChange= (e) =>{
        console.log(e.target.value);
        this.setState({
            password:e.target.value
        });
    }


    firstNameChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            firstName:e.target.value
        });
    }
    lastNameChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            lastName:e.target.value
        });
    }

    birthdayChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            dob:e.target.value
        });
    }
    genderChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            gender:e.target.value
        });
    }
    civilStatusChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            civilStatus:e.target.value
        });
    }

    NICChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            NIC:e.target.value
        });
    }
    addressChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            address:e.target.value
        });
    }
    phoneChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            phone:e.target.value
        });
    }
    emailChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            email:e.target.value
        });
    }
    specializationChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            specialization:e.target.value
        });
    }
    dapartmentChange=(e) =>{
        console.log(e.target.value);
        this.setState({
            departments:e.target.value
        });
    }

    onSubmit = ()=> {
            alert();
            axios.post("http://localhost:3001/doctor",
            {
                username: this.state.username,
                password:this.state.password,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                dob:this.state.dob,
                gender:this.state.gender,
                civilStatus:this.state.civilStatus,
                NIC:this.state.NIC,
                address:this.state.address,
                phone:this.state.phone,
                email:this.state.email,
                specialization:this.state.specialization,
                departments:this.state.departments

             
            }
        )
            .then((result) => {
                alert("Added");
                console.log(result);
            })
            .catch((err) => {
                console.log("Error123:"+err);
            });
                                                                    


    }
    
    render(){
        return(
            <div className="container">   
                <form>

                    <div className="form-group col-md-4">
                        <label >username</label>
                        <input type="text" class="form-control"  onChange={(event) => this.usernameChange(event)} placeholder="Enter Username" name="username" />
                        {
                            this.state.lastNameError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.lastNameError}
                                    </small>
                                    :""
                        }
                    </div>
                    
                    <div className="form-group col-md-4">
                        <label >Password</label>
                        <input type="password" class="form-control"  onChange={(event) => this.passwordChange(event)} placeholder="Password" name="password"/>
                        {
                            this.state.passwordError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.passwordError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >First Name</label>
                        <input type="text" class="form-control" onChange={(event) => this.firstNameChange(event)} placeholder="Enter first name" name="firstname" />
                        {
                            this.state.firstNameError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.firstNameError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >Last Name</label>
                        <input type="text" class="form-control" onChange={(event) => this.lastNameChange(event)} placeholder="Enter last name" name="lastname" />
                        {
                            this.state.lastNameError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.lastNameError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >Date Of Birth</label>
                        <input type="date" class="form-control" onChange={(event) => this.birthdayChange(event)} placeholder="Enter birthday" name="dob" />
                    </div>

        

                     <div className="form-group col-md-4" style={{border:"solid 1px", marginTop:"25px"}}>
                        <label  style={{marginRight:"10px"}}>Gender :</label>
                        <label  style={{marginRight:"10px"}}>male</label>
                        <input class="form-check-input" type="radio" onChange={ (event) => this.genderChange(event) } value="male" name="gender" checked/>
                        <label  style={{marginLeft:"10px"}}>female</label>
                        <input style={{marginLeft:"10px"}} class="form-check-input" onChange={ (event) => this.genderChange(event) } type="radio" name="gender" value="female"  />
                        
                    </div>

                      <div className="form-group col-md-4" style={{border:"solid 1px", marginTop:"25px"}}>
                        <label style={{marginRight:"10px"}}>civil Status :</label>
                        <label  style={{marginRight:"10px"}}>married</label>
                        <input class="form-check-input" type="radio" onChange={(event) => this.civilStatusChange(event)} name="status" value="married" checked/>
                        <label  style={{marginLeft:"10px"}}>unmarried</label>
                        <input style={{marginLeft:"10px"}} class="form-check-input" onChange={(event) => this.civilStatusChange(event)} name="status" type="radio" value="unmarried" />
                        
                    </div>

                     <div className="form-group col-md-4">
                        <label >NIC</label>
                        <input type="text" class="form-control" onChange={(event) => this.NICChange(event)} placeholder="Enter NIC" name="NIC" />
                        {
                            this.state.NICError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.NICError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >Address</label>
                        <input type="text" class="form-control" onChange={(event) => this.addressChange(event)} placeholder="Enter address" name="address" />
                        {
                            this.state.addressError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.addressError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >Phone Number</label>
                        <input type="number" class="form-control" onChange={(event) => this.phoneChange(event)} placeholder="Enter phone number" name="phone" />
                        {
                            this.state.phoneError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.phoneError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >Email</label>
                        <input type="email" class="form-control" onChange={(event) => this.emailChange(event)} placeholder="Enter email" name="email" />
                        {
                            this.state.emailError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.emailError}
                                    </small>
                                    :""
                        }
                    </div>

                     <div className="form-group col-md-4">
                        <label >Specialization</label>
                        <input type="text" class="form-control" onChange={(event) => this.specializationChange(event)} placeholder="Enter specialization" name="specialization" />
                        {
                            this.state.specializationError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                {this.state.specializationError}
                                    </small>
                                    :""
                        }
                    </div>

                    <div className="from-group col-md-4">
                        <label>Select Department</label>
                        <select className="btn btn-info" style={{marginLeft:"10px"}} id="department" onChange={(event) => this.dapartmentChange(event)}>
                           {
                                    this.state.data.map((item) => {
                                        return   <option>{item.name}</option> 
                                    })
                           }
                        </select>
                    </div>
                   
                   <div className="col-md-4" style={{marginTop:"60px"}}>
                   <button type="button" onClick={this.onSubmit}  className="btn btn-primary">Submit</button>
                   </div>
                </form>
            </div>
           
        )
    }
}
export default AddDoctor;