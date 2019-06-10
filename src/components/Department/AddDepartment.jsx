import React, {Component}                       from 'react';
import Axios                                    from 'axios';
import URL                                      from '../CommonURL/Url';

class Contact extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            // Declare the form values.
            dname:"", // department name
            bnumber:"", // department bulding number
            dhead:"",  // department head name

            //Declare the form errors.
            dnameError:"",
            bnumberError:"",
            dheadError:"",

            // Declare the successful message.
            SuccessMessage:""
        }
      }

      // onChange methods.
      changeDepartmentName =  (e) => {
        console.log(e.target.value);
        this.setState({
            
                dname:e.target.value
            
        });
        
      }

      changeBuldingNumber = (e) => {
        console.log(e.target.value);
        this.setState({
            
                bnumber:e.target.value
            
        });
      }

      changeDepartmenHead = (e) => {
        console.log(e.target.value);
        this.setState({
            
            dhead:e.target.value
            
        });
      }

      // Form submit form.
      onSubmit = () =>{  

          console.log(this.state.bnumber);
          console.log(this.state.dname);
          console.log(this.state.dhead);
          
           // Check department name is empty
           if(this.state.dname === ""){
                this.setState({
                        dnameError:"Department Name is Empty" 
                });
           }

           // Check bulding number is empty.
           if(this.state.bnumber === ""){
                this.setState({
                        bnumberError:"Bulding Number is Empty"
                })
           }

           // Check department head is epmty.
           if(this.state.dhead === ""){
            this.setState({ 
                    dheadError:"Department head is Empty"
            })
           }

           else{
            Axios.post(URL.API +"/department", {name:this.state.dname, buldingNumber:this.state.bnumber, depatmentHead:this.state.dhead,departmentState:"Active"} )
            .then((result) => {
                if(result.status === 200){
                    this.setState({
                        SuccessMessage:"Department Added",
                        
                        dnameError:"",
                        bnumberError:"",
                        dheadError:"",
    
                        dname:"",
                        bnumber:"",
                        dhead:"",
                    });

                   // setTimeout(this.clearSuccessmessage, 3000);
                }
                else if(result.status === 202){
                    this.setState({
                        SuccessMessage:"Department Already Exists",
                        
                        dnameError:"",
                        bnumberError:"",
                        dheadError:"",
    
                        dname:"",
                        bnumber:"",
                        dhead:"",
                    })
                }
            })
            .then((err) => {
                console.log(err);
            });
           }
        
      }

    render(){
        return(
           <div style={{marginTop:"20px"}}>
                <div className="panel panel-success">
                {
                        this.state.SuccessMessage? <h3><b  style={{color:"green"}} className="animated zoomIn form-text text-muted">
                            {this.state.SuccessMessage}
                                </b></h3>
                                :""
                }
                    <div className="panel-heading">
                        <h3 className="panel-title"></h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                        <form>
                                <div className="form-group">
                                    <label>Department Name</label>
                                    <input  value={this.state.dname} onChange={(event)=> this.changeDepartmentName(event)} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Department Name"/>
                                    
                                    {
                                            this.state.dnameError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                                {this.state.dnameError}
                                                </small>
                                                :""
                                    }


                                </div>
                                <div className="form-group">
                                    <label >Building Number</label>
                                    <input value={this.state.bnumber} onChange={(event)=> this.changeBuldingNumber(event)} type="text" className="form-control" placeholder="Building Number"/>

                                    {
                                            this.state.bnumberError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                                {this.state.bnumberError}
                                                </small>
                                                :""
                                    }


                                </div>

                                 <div className="form-group">
                                    <label >Department Head</label>
                                    <input value={this.state.dhead} onChange={(event)=> this.changeDepartmenHead(event)} type="text" className="form-control"  placeholder="Enter Department Head Name"/>

                                    {
                                            this.state.dheadError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                                {this.state.dheadError}
                                                </small>
                                                :""
                                    }


                                </div>

                                <button type="button" onClick={this.onSubmit} className="btn btn-primary"><i class="far fa-save fa-lg"></i> Save</button>
                        </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Contact;