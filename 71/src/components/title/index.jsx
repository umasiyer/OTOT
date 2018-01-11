import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import { fetchArticles } from './../../actions';

const mapStateToProps = (state) => {
    return {
        items: state.articles.items,
        hasErrored: state.articles.hasErrored,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchArticles(url))
    };
};
class Titles extends React.Component {

    constructor(props){
        super(props);
        this.fetch = this.fetch.bind(this);
    }

    fetch() {
        this.props.fetchData('https://hn.algolia.com/api/v1/search?query=workhard');
    }
    render() 
    {
        const mappedItems = this.props.items.map ( (val,index) => {
            return <ListItem primaryText={val.title} secondaryText={
                       <p>
                         <span>URL:</span> --
                            {val.url}
                        </p>
                   }
      />
        })    
        return( 

                <div>
                    <h1>Titles List: </h1>
                     <button onClick={this.fetch} label="Fetch Titles">Fetch Titles</button>
                <div>
                    <List>
            {mappedItems}
       </List>
            </div>
            </div>
             )
    }
        }

        export default connect(mapStateToProps, mapDispatchToProps)(Titles)