import React, { Component, Fragment } from 'react'
import styles from '../App.module.css'

export default class Pagination_one extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { per_page, users, total, current_page } = this.props.users
    let userss, renderPageNumbers

    console.dir(users)
    console.log('PRopss........')

    if (users !== null) {
      userss = users.data.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      ))
    }
    const pageNumbers = []
    if (total !== null) {
      for (let i = 1; i <= Math.ceil(total / per_page); i++) {
        pageNumbers.push(i)
      }
      console.log(pageNumbers + 'PAge numbers')
      renderPageNumbers = pageNumbers.map((number) => {
        let classes = current_page === number ? styles.active : ''

        if (
          number === 1 ||
          number === total ||
          (number >= current_page - 2 && number <= current_page + 2)
        ) {
          return (
            <span
              key={number}
              className={classes}
              onClick={() => this.props.handle_makeRequest(number)}
            >
              {number}
            </span>
          )
        }
      })
    }

    return (
      <div className={styles.app}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{userss}</tbody>
        </table>

        <div className={styles.pagination}>
          <span>&laquo;</span>
          <span
            className={styles.active}
            onClick={() => {
              this.props.handle_makeRequest(1)
            }}
          >
            first
          </span>
          {renderPageNumbers}
          <span
            onClick={() => {
              this.props.handle_makeRequest(2)
            }}
          >
            >>
          </span>
        </div>
      </div>
    )
  }
}
