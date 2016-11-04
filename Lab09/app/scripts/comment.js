 import React from 'react';
 import Remarkable from 'remarkable';

 module.exports = React.createClass({

 	//Use Markdown to format your text inline
    rawMarkup: function() {
        var md = new Remarkable({html: true});
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    // Render function for Comment
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor" >
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});