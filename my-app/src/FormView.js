import React from 'react';
import Form from './Form';


class FormView extends React.Component{

    render(){
        return(        
            <div>
                <h1>Form View</h1>
                <input type="text" default-value="Level Up"/>
                <Form />
            </div>
        )
    }


}

//export default FormView;

export default ()=>(
    <div>
        <h1>Form Validation Project</h1>
        <p><Form/></p>
    </div>
);