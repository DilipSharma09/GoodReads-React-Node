import React, { Component } from 'react';
import Book from './Book';
import PropTypes from "prop-types";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {  expandedBook: null,data :"",currSearch: "", searchQuery: [], value: '', linkData: [] };
        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.setResults = this.props.setResults.bind(this);
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
                        this.setState(
                     () => this.props.setResults(result.GoodreadsResponse.search.results.work));
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        }

    }


    render() {
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

Search.propTypes = {
    results: PropTypes.array,
    setResults: PropTypes.func
  };

export default Search;