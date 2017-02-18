import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state ={
      projects: []
    }
  }

//Life Cycle Method to Render
  componentWillMount(){
    this.setState({projects:[
      {
        title: 'Bussiness Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'E-Commerce Website',
        category: 'Web Development'
      },
      {
        title: 'User Interfaces',
        category: 'React JS Development'
      }
    ]});
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
