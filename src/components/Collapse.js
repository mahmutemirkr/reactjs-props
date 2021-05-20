import React from 'react';


const Collapse = (props) => {
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
}

export default Collapse;