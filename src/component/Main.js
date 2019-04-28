import React, { Component } from 'react';
//import { Route, Redirect } from 'react-router';
import Book from './Book';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data : null,currSearch: "", searchQuery: [], value: '', linkData: [] };
        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({ value: event.target.value });
    }

    onSearchClick() {
        if (this.state.value !== '') {
            const qData = encodeURIComponent(this.state.value);

            // this.setState({value: ""});

            fetch(`http://localhost:8080/search?q=${qData}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            searchQuery: result
                        });
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        }

    }


    onLinkClick(bookIds) {

    //    const bookId = encodeURIComponent(bookIds);

        // fetch(`http://localhost:8080/show?bookId=${bookId}`)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 data: result.GoodreadsResponse
        //             });
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     )

        this.setState({ currSearch: bookIds });
    }


    render() {


        if (this.state.currSearch != "") {

            return (
                // <BookDetails bookId={this.state.currSearch}></BookDetails>
                <div>testttttttttttt</div>
            );


        }
        else {

            return (
                <div style={{ margin: 'auto', width: '50%', padding: 10, backgroundColor: '#d1e6ec' }}>
                    <div style={{ marginLeft: '8%' }}>
                        <h1 style={{ marginLeft: '20%' }}>GoodReads</h1>
                        <input style={{ width: '60%', height: 20 }} type="text" value={this.state.value} onChange={this.handleInputChange} />
                        <button style={{ margin: 'auto', width: '15%', height: 26, marginLeft: 2 }} onClick={this.onSearchClick}>Search</button>
                    </div>
                    <ul>{this.state.searchQuery.map((item, index) => {
                        return <Book bookId={item.best_book.id._text}
                            smallImg={item.best_book.small_image_url._text}
                            largeImg={item.best_book.image_url._text}
                            title={item.best_book.title._text}
                            authorName={item.best_book.author.name._text}
                            avgRating={item.average_rating._text}
                            ratingcount={item.ratings_count._text}
                            pubYear={item.original_publication_year._text}
                            bookCounts={item.books_count._text}
                            onLinkClick={this.onLinkClick} />
                    })

                    }</ul>


                </div>


            );
        }


    }

}



// class Book extends Component {

//     constructor(props) {
//         super(props);
//     }



//     render() {

//         return (

//             <table>

//                 <td style={{ width: '5%', verticalAlign: 'top', padding: 5 }}>
//                     <img src={this.props.smallImg} alt="Logo" />
//                 </td>

//                 <td style={{ width: '100%', verticalAlign: 'top' }}>

//                     <a href={''} onClick={() => this.props.onLinkClick(this.props.bookId)} >{this.props.title}</a><br></br>
//                     <span>by </span>
//                     <a href={''}>{this.props.authorName}</a><br></br>
//                     <span>{this.props.avgRating} avg rating - {this.props.ratingcount} ratings - published {this.props.pubYear} - {this.props.bookCounts} editions</span>
//                 </td>

//             </table>


//         );



//     }




// }




export default Main;
