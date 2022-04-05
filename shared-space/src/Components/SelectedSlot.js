import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getBookInfo } from "../redux/booked/bookAction"
import {Link} from 'react-router-dom'
import '../designs/display.css'


function DisplayContainer (props) {

    const {id,seat,dates, name,email } = props.book;
    const leng = props.book.length

    console.log("just.....",leng)

    useEffect(() => {

        props.getBookInfo() 
        //Runs only on the first render
      },[]);
 
  
    return(
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>SEATS</th>
                        <th>DATE</th>
                        <th>Name</th>
                        <th>E-mail Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {props.book.map(function(item,idx){
                    return(
                        <tbody>
                            <td>{item.id}</td>
                            <td>{item.seat}</td>
                            <td>{item.dates}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>

                        </tbody>
                    )
                })}

            </table>
      
        </div>
    )
}

const mapStateToProps = state => {
    return{
        book: state.bookInfo.book
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBookInfo: () => dispatch(getBookInfo())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(DisplayContainer)