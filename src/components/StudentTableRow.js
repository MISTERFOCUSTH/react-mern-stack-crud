import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import axios from "axios"

export default class StudentTableRow extends Component {

    deleteStudentById = () => {
        axios.delete("http://localhost:4000/students/delete-student/" + this.props.obj._id).then((res) => {
            console.log("Student successfully deleted !");
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td>
                    <Link className="edit-link btn btn-primary" to={"./update-student/" + this.props.obj._id}>Edit</Link>
                    <Button variant="danger" onClick={this.deleteStudentById} >Delete</Button>
                </td>
            </tr>
        )
    }
}
