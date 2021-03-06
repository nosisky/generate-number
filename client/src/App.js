import React, { Component } from 'react';
import Main from "./routes/Main";
import { generateNumbers, listNumbers } from "./actions/numberActions";
import toastr from 'toastr';
import {reSort} from './helpers/helpers'

class App extends Component {

  state = {
    phoneNumbers: [],
    isLoading: true
  }

  componentDidMount(){
    listNumbers()
    .then(({data}) => {
      this.setState({
        phoneNumbers: data.phoneNumbers,
        isLoading: false
      })
    })
  }

  onChange = (value) => {
    let phoneNumbers;
    phoneNumbers = reSort(this.state.phoneNumbers, value)
    this.setState({
      phoneNumbers
    })
  }

  handleGenerate = () => {
    this.setState({
      isLoading: true
    }, () => {
      generateNumbers()
      .then(({data}) => {
        toastr.options = {
          debug: false,
          timeOut: "2000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr.success('5 numbers generated successfully!');

        this.setState({
          phoneNumbers: data.phoneNumbers,
          isLoading: false
        })
      })
    }
    )
  }

  render() {
    return (
      <Main
      onChange={this.onChange}
      isLoading={this.state.isLoading}
      phoneNumbers={this.state.phoneNumbers}
      handleGenerate={this.handleGenerate}
      />
    );
  }
}

export default App;
