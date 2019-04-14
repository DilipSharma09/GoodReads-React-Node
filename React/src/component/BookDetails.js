import React, { Component } from 'react';

class BookDetails extends Component {

   

    componentWillMount(){

        const bookId = encodeURIComponent(this.props.bookId);


            fetch(`http://localhost:8080/show?bookId=${bookId}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        // this.setState({
                        //     data: result.GoodreadsResponse
                        //});
                    },
                    (error) => {
                        console.log(error);
                    }
                )



    }

    // componentDidMount() {
    //    // const bookId = encodeURIComponent(this.state.currSearch);
    //     // this.setState({value: ""});
    //     const bookId = encodeURIComponent(this.props.bookId);


    //     fetch(`http://localhost:8080/show?bookId=${bookId}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     data: result.GoodreadsResponse
    //                 });
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         )

    // }



    render() {

        return (


            <div>Testttttt</div>

            //     <table>

            //     <td style={{ width: '5%', verticalAlign: 'top', padding: 5 }}>
            //         <img src={this.props.smallImg} alt="Logo" />
            //     </td>

            //     <td style={{ width: '100%', verticalAlign: 'top' }}>

            //         <a href={'www.goodreads.com/book/show/2493.The_Time_Machine?from_search=true'}>{this.props.title}</a><br></br>
            //         <span>by </span>
            //         <a href={'www.goodreads.com/book/show/2493.The_Time_Machine?from_search=true'}>{this.props.authorName}</a><br></br>
            //         <span>{this.props.avgRating} avg rating - {this.props.ratingcount} ratings - published {this.props.pubYear} - {this.props.bookCounts} editions</span>
            //     </td>

            // </table>


        );





    }



}


export default BookDetails;