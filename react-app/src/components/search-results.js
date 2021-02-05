import React, { Component } from "react";
import API from "../utils/API";

// componentDidMount(){
    API.getAllEmployees()
    //   .then(results =>{
    //     this.setState({
    //       employees: results.data.results,
    //       filteredEmployees: results.data.results
    //     })
    //   })
    //   .catch(err => console.log(err))
//   }