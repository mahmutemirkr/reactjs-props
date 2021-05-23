import React from 'react';

class Collapse extends React.Component {
    
    constructor(){
        super();

        this.state = {
            showContent: false
        }
    }

    showMore = () => {
        //console.log(this)
        this.setState({showContent: !this.state.showContent})
    }
        
    render() {
        return(
        <div>
            <button className="btn btn-primary w-100 mt-3 mb-2" onClick={this.showMore}>
                Collapse Card
            </button>
            {
                //if
                this.state.showContent ? (
                    <div className="collapse show">
                    {this.props.children}
                    {this.state.showContent}
                </div>
                ) : null
            }         
        </div>
        );
    }
}


export default Collapse;


/* const Collapse = (props) => {
    console.log(props.children);
    return (
        <div>
            <a class="btn btn-primary w-100 mt-3 mb-2" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
               Card Open
            </a>
            <div class="collapse show" id={props.href}>
                {props.children}
            </div>
        </div>
    );
} */
