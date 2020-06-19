import React from 'react'
import logo from './logo.svg'
import './App.css'
import styles from './App.module.css'
import Pagination_one from './components/Pagination_one'
import axios from './api'

class App extends React.Component {
  state = {
    users: null, //user data
    per_page: null, // calculation to display data per page after calculation
    total: null, //total no of pages to be dispalayed after calculation
    current_page: null,
    errorMessage: null
  }
  componentDidMount() {
    this.makeHttpRequestWithPage(1)
  }

  makeHttpRequestWithPage = async pageNumber => {
    console.log(pageNumber + 'Page numberis ')
    await axios.get(`/users?page=${pageNumber}`).then(response => {
      this.setState({
        users: response.data,
        per_page: response.data.per_page,
        total: response.data.total,
        current_page: response.data.page
      })
    }).catch(error =>{
      this.setState({errorMessage:error})
    })
  }

  render() {
    
    return (
      <div className='App'>
        <Pagination_one 
        handle_makeRequest={this.makeHttpRequestWithPage}
        users={this.state}
         />
      </div>
    )
  }
}

export default App


