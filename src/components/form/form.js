import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {
    addTodo,
    deleteTodo,
    completeTodo
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



    // handleDelete=(i)=>{
    //     this.setState({
    //         tasks:this.state.tasks.filter((el,index)=> index !==i)
    //     })
    // }
     
    // handleComplete=(i)=>{
    //   this.setState({
    //         tasks:this.state.tasks.map((el,index)=> index === i ? {...el, check:!el.check}:el)
    //     })
    //     }

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
                <div className="col-lg-2 "></div>
            </div>
            <div class="row div">
               <div class="col-lg-2 "></div>
               <div class="col-lg-8  ">
               <ul id="myUL">
                    {this.props.tasks.map((el)=>
                    <li  key={el.id} ><h3 className={el.isComplete?"complete": "undo"} >{el.text}</h3>
                    <div className="buttons">
                    <button onClick={()=>this.props.completeTodo(el.id)}>{el.isComplete?"undo":"complete"}</button>
                    <button onClick={()=>this.props.deleteTodo(el.id)}>delete</button>
                    </div>
                    </li>    
     )
 }   
                  </ul>
               </div>
               <div class="col-lg-2 "></div>
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
        addTodo : (payload) => dispatch (addTodo(payload)),
        deleteTodo : (payload) => dispatch (deleteTodo(payload)),
        completeTodo : (payload) => dispatch (completeTodo (payload))


    }
}



export default  connect(mapStateToProps,mapDispatchToProps )  (Form)



