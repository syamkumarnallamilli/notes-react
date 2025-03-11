import React from "react";
function Hello(){
    // return (
    //     <div>
    // <h1>With jsx</h1>
    // </div>
    // );

    // return React.createElement('div',null,'<h1>without jsx</h1>')
    // return React.createElement('div',null,
    //     React.createElement('h1', null, 'without jsx')
    // )

    //adding attributes
    return React.createElement(
        'div',              //JSX uses className instead of class (to avoid conflicts with JavaScript class keyword)
        {id:'idAttribute',class:'dummyClsss'},
        React.createElement('h1', null, 'without jsx')
    )
}

export default Hello;   