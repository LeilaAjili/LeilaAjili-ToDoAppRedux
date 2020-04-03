import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';



import {
    addTodo,
    
} from '../../actions/actions'

import './form.css'
 
class Form extends Component{

    state= {
          task:"",  
         
           }

//Recupération des données

handleChangeTask=(e)=>{
      
        this.setState({
          task:e.target.value
          
        })
    }

    addTask = () => {
        if(this.state.task !="")
        this.props.addTodo({
            
                text:this.state.task,
                id:Math.random(),
                isComplete:false
            })
            this.setState({task:''       
          })
        
    }

   



    
    

    render(){
        
        return (
            <div>
              <div className="container ">
            <div className="row div"></div>
            <div className="row div-principal">
                <div className="col-lg-2 "></div>
                <div className="col-lg-8 background">
                    <div className="div ">
                        <h1 className="titre">To Do App!</h1>
                        <h5 className="titre">&nbsp;Add new To-Do:</h5>
                    </div>
                    <div className="row div">
                        <div>
                            <input type="text"value={this.state.task} className="input"   id="myInput" onChange={this.handleChangeTask}  />
                            <br />
                            <button type='submit' className="button" value="ADD" onClick={this.addTask}  >submit</button>
                        </div>  
                    </div>   
                </div>
            </div>
            </div>
    </div> 
        )
    } 
}

const mapStateToProps = state =>{
    return {tasks : state}
}

const mapDispatchToProps = dispatch => {
    return{
        addTodo : (payload) => dispatch (addTodo(payload))
    }
}



export default  connect(mapStateToProps,mapDispatchToProps )  (Form)



