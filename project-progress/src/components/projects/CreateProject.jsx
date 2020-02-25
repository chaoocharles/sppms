import React, { Component } from 'react';

class CreateProject extends Component {
    state = { 
        projectTitle: '',
        regNumber: '',
        course: '',
        projectDesc: ''
     }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className='input-field'>
                        <label htmlFor="firstName">Project Title</label>
                        <input type="text" id='firstName' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor="regNumber">Reg Number</label>
                          <input type="text" id='regNumber' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="course">Course (e.g. BTECH I.T)</label>
                        <input type="text" id="course" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="projectDesc">Project's Short Description</label>
                        <input type="text" id="projectDesc" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn cyan darken-2 z-depth-0">ADD</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateProject;