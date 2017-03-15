import React from 'react';

let varName="",varEmail="",varPhone="",varSSN="";

function hasNumber(myString) {
  return /\d/.test(myString);
}

function isEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

class Form extends React.Component{

    constructor(){
        super();

        this.state = {
            name: '',
            phone: '',
            email: '',
            ssn: ''
        };

    }

 
    onEnter(event){
        if(event.keyCode === 13){
            console.log("enter pressed ")
            this.onSubmit();
            
        }
    }

    

    onSubmit(){
        console.log("HELLO WORLD");
        console.log(varName)

        if(varName==="" || hasNumber(varName)){
            console.log("invalid name ");
        }else{
            console.log("valid name");
        }
        
        if(varPhone ==="" ||!hasNumber(varPhone)){
            console.log("invalid phone number")
        }else{
            console.log("valid phone");
        }

        if(varEmail ==="" || !isEmail(varEmail)){
            console.log("invalid email");
        }else{
            console.log("valid email")
        }

        if(varSSN ==="" || !hasNumber(varSSN)){
            console.log("invalid SSN")
        }else{
            console.log("valid SSN")
        }


    }

    validateName(event){
        this.setState({name: event.target.value});
        console.log({name: event.target.value});
        varName = this.state.name;
        console.log("varName: "+varName);
        }

    validatePhone(event){
        this.setState({phone: event.target.value.substr(0,10)});
        console.log({phone: event.target.value});
        varPhone = this.state.phone;
        console.log("varPhone: "+varPhone);

    }

    validateEmail(event){
        this.setState({email: event.target.value});
        console.log({email: event.target.value});
        varEmail = this.state.email;
        console.log("varEmail: "+varEmail);

    }

    validateSSN(event){
        this.setState({ssn: event.target.value.substr(0,9)});
        console.log({ssn: event.target.value});
        varSSN = this.state.ssn;
        console.log("varSSN: "+varSSN);

    }

    render(){
        return(
            <div>
                <p><input type="text" value={this.state.name} placeholder="Name" onChange={this.validateName.bind(this)} onKeyDown={this.onEnter}/></p>
                <p><input type="text" value={this.state.phone} placeholder="Phone (no dashes)" onChange={this.validatePhone.bind(this)} onKeyDown={this.onEnter}/></p>
                <p><input type="email" value={this.state.email} placeholder="Email" onChange={this.validateEmail.bind(this)} onKeyDown={this.onEnter}/></p>
                <p><input type="password" value={this.state.ssn} placeholder="SSN" onChange={this.validateSSN.bind(this)} onKeyDown={this.onEnter}/></p>
                <p><button onClick={this.onSubmit}>Submit</button></p>
            </div>
        )
    }




}

export default Form;