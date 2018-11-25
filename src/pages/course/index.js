import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CourseList from "./courselist";
import TopicList from "./topiclist";

import CourseHeader from "./header";
class Course extends Component {
  render() {
    return (
      <div className="container">
        <CourseHeader />
        <div className="courselist">
          <Switch>
            <Redirect from="/course" exact to="/course/courselist" />
            <Route path="/course/courselist" component={CourseList} />
            <Route path="/course/topiclist" component={TopicList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Course;
