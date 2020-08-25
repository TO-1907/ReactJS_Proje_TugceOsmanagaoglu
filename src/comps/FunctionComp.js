import React from "react";

function FunctionComp(props){
    return(
        <div>
            <br/><br/>
            { 
              props.setVisibProp ? <button style={{background: '#339966', float:'right'}} >.</button>
              : null
            }
            
        </div>
    )
}

export default FunctionComp;