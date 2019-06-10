import React, {Component}               from 'react';
import Axios                            from 'axios';
import URL                              from '../CommonURL/Url';


// filter method for find a particular department.
function searchByDName(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class View extends Component{

    // Constructor.
    constructor(props){
        super(props);

        this.state={
            departments:[],
            term:"",

            // Updated field variables
            updateDepartment:"",
            updateBulding:"",
            updateHead:"",
            Id:"",

            // For update success 
            SuccessMessageL:"",

            // Errors variables
            dnameError:"",
            bnumberError:"",
            dheadError:""


        }

        this.searchName = this.searchName.bind(this);
    }


     // onChange methods.
     changeDepartmentName =  (e) => {
        console.log(e.target.value);
        this.setState({
            
            updateDepartment:e.target.value
            
        });
        
      }

      changeBuldingNumber = (e) => {
        console.log(e.target.value);
        this.setState({
            
            updateBulding:e.target.value
            
        });
      }

      changeDepartmenHead = (e) => {
        console.log(e.target.value);
        this.setState({
            
            updateHead:e.target.value
            
        });
      }


    // For call the get department details from  method.  
    componentDidMount(){

        // call get department details method.
        this.getAlldepartment();
    }

    /*
        Get department data from database using axios module.
    */
    getAlldepartment(){
        Axios.get(URL.API +"/department").then((result) => {
            console.log(result);
            this.setState({
                departments:result.data
                
            });
            console.log(this.state.departments);
        });

    }

    // onchange method
    searchName(event){
        this.setState({
            term:event.target.value
        })
    }

    Update(Object){
        //alert(Object.name);
        this.setState({

            // set Object values into the text fields
            updateDepartment:Object.name,
            updateBulding:Object.buldingNumber,
            updateHead:Object.depatmentHead,
            Id:Object._id,

            // when data loads into the text fields clear error messages
            dnameError:"",
            bnumberError:"",
            dheadError:""


        });
    }


    /*
        Update method implementation
    */
    onSubmit= () =>{

        if(this.state.updateDepartment === ""){
            this.setState({
                    dnameError:"Department Name is Empty" 
            });
       }

       // Check bulding number is empty.
       if(this.state.updateBulding === ""){
            this.setState({
                    bnumberError:"Bulding Number is Empty"
            })
       }

       // Check department head is epmty.
       if(this.state.updateHead === ""){
        this.setState({ 
                dheadError:"Department head is Empty"
        })
       }
       else{

            Axios.put(URL.API +"/department/" +this.state.Id, {name:this.state.updateDepartment, buldingNumber:this.state.updateBulding, depatmentHead:this.state.updateHead})
            .then((result) => {

                if(result.status === 200){
                    this.getAlldepartment();    
                    this.setState({
                        // set success message
                        SuccessMessage:"Updated Success!",

                        // clear error message
                         dnameError:"",
                         bnumberError:"",
                         dheadError:"",

                        // clear text field values
                        updateDepartment:"",
                        updateBulding:"",
                        updateHead:"",

                    })
                }

                else{
                    this.setState({
                        SuccessMessage:"Can not update, No maching Department"
                    })
                }
            })
            .catch((err) => {
               console.log(err);
            })

       }


    }


    Delete = (Object) => {

        Axios.delete(URL.API +"/department/"+ Object._id)
        .then((result) => {
            if(result.status === 200){
                alert("Deleted");
                this.getAlldepartment();
            }
            else{
                alert("Error");
            }
        })
        .catch((err) => {
            console.log("ERROR"+err);
        });
        
    }
    
    //data-toggle="modal" data-target="#exampleModal"

    render(){
        return(
            <div style={{ marginTop:"20px"}}>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Department Details</h3>
                        <input onChange={this.searchName} value={this.state.term} type="text" className="form-control" placeholder="Search by department name"/>
                    </div>
                    <div className="panel-body">
                        
                    <table className="table table-bordered">
            
                            <thead>
                                <tr>
                                    <th scope="col">Department Name </th>
                                    <th scope="col">Bulding Number</th>
                                    <th scope="col">Department Head</th>
                                    <th scope="col">Setting    <i className="fas fa-cogs"></i></th>
                                </tr>
                            </thead>
                            <tbody>                                
                                   {
                                       this.state.departments.filter(searchByDName(this.state.term)).map((item) => {
                                            return (<tr>
                                                <td key={item._id +4}>{item.name}</td>
                                                <td key={item._id +1}>{item.buldingNumber}</td>
                                                <td key={item._id +2}>{item.depatmentHead}</td>
                                                <td key={item._id +3}>
                                                    <button className="btn btn-secondary" onClick={event => this.Update(item,event)}>Edit</button>
                                                    <button style={{marginLeft:"10px"}} onClick={event => this.Delete(item,event)} type="button" class="btn btn-danger" >
                                                     <i class="far fa-trash-alt fa-lg"></i> Delete
                                                    </button>
                                            
                                            </td>                                                
                                                </tr>);
                                       })
                                   }
                                   
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Department Setting</h3>
                        {
                            this.state.SuccessMessage? <h3><b  style={{color:"green"}} className="animated zoomIn form-text text-muted">
                            {this.state.SuccessMessage}
                                </b></h3>
                                :""
                        }
                    </div>
                    <div className="panel-body">
                     <form>
                       <div className="col-md-3">
                            <label className="sr-only">Email</label>
                            <input type="text" onChange={(event)=> this.changeDepartmentName(event)} className="form-control" value={this.state.updateDepartment} placeholder="Change Department Name"/>

                                {
                                    this.state.dnameError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                        {this.state.dnameError}
                                           </small>
                                            :""
                                }

                       </div>

                       <div className="col-md-3">
                            <label className="sr-only">Email</label>
                            <input type="text"  onChange={(event)=> this.changeBuldingNumber(event)} className="form-control" value={this.state.updateBulding} placeholder="Change Bulding Number"/>


                                {
                                    this.state.bnumberError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                        {this.state.bnumberError}
                                            </small>
                                            :""
                                }

                       </div>

                       <div className="col-md-3">
                            <label className="sr-only">Email</label>
                            <input type="text"  onChange={(event)=> this.changeDepartmenHead(event)} className="form-control" value={this.state.updateHead} placeholder="Change Department Head"/>

                                {
                                    this.state.dheadError? <small  style={{color:"red"}} className="animated zoomIn form-text text-muted">
                                        {this.state.dheadError}
                                            </small>
                                            :""
                                }


                       </div>

                       <div className="col-md-3">
                            <button style={{marginLeft:"-210px"}} type="button" onClick={this.onSubmit} className="btn btn-warning"><i class="fas fa-edit fa-lg"></i> Update</button>
                       </div>
                       
                      </form> 
                    </div>
                </div>
                                            
                                            {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div> */}
            </div>
        );
    }
}

export default View;