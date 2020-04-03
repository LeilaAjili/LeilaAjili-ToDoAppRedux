import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';



import {
    deleteTodo,
    completeTodo,
    editTodo
} from '../../actions/actions'

import './form.css'

class Tasks extends Component{



    editTask = () => {
        this.props.editTodo({
            text:this.state.task
        })
    }


    render(){

        return(


            <div className="container ">
            <div className="row div">

            <div className="col-lg-2 "></div>
            </div>
            <div class="row div">
               <div class="col-lg-2 "></div>
               <div class="col-lg-8  ">
               <ul id="myUL">
                    {this.props.tasks.map((el)=>
                    <li  key={el.id} >

                        
                        <input type="text" value={el.text} className={el.isComplete?"complete": "undo"} onChange={(event)=> this.props.editTodo (event.target.value, el.id)}/>

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
        )
    }
}

const mapStateToProps = state =>{
    return {tasks : state}
}

const mapDispatchToProps = dispatch => {
    return{
       
        deleteTodo : (payload) => dispatch (deleteTodo(payload)),
        completeTodo : (payload) => dispatch (completeTodo (payload)),
        editTodo : (payload, id) => dispatch (editTodo (payload, id)),


    }
}

export default connect(mapStateToProps,mapDispatchToProps ) (Tasks)