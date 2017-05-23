import React from 'react';
import Behaviors from './Behaviors'

export default class Student extends React.Component{

  render(){
    let student = this.props.student;
    let behaviorList= this.props.behaviors;

    let handleStudentClick=this.props.handleStudentClick;
    let handleBehaviorClick=this.props.handleBehaviorClick;

    return (
      <div className="studentProfile">
        <div>
          <h1>{student.firstName} {student.lastName}</h1>
          <img src={student.image} />
          <Behaviors
            behaviorList={behaviorList}
            handleBehaviorClick={handleBehaviorClick}
            studentID={student.studentID}
           />
        </div>
      </div>
    )
  }
}
