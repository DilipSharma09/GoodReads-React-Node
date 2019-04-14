import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        return (

            <table>

                <td style={{ width: '5%', verticalAlign: 'top', padding: 5 }}>
                    <img src={this.props.smallImg} alt="Logo" />
                </td>

                <td style={{ width: '100%', verticalAlign: 'top' }}>

                    <a href={''} onClick={() => this.props.onLinkClick(this.props.bookId)} >{this.props.title}</a><br></br>
                    <span>by </span>
                    <a href={''}>{this.props.authorName}</a><br></br>
                    <span>{this.props.avgRating} avg rating - {this.props.ratingcount} ratings - published {this.props.pubYear} - {this.props.bookCounts} editions</span>
                </td>

            </table>


        );



    }



}

export default Book;