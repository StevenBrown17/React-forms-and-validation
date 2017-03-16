import React from 'react';
//import './src/App.css';


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
             document.getElementById("namel").style="visibility:visible";
             document.getElementById("name").style.borderColor="red";
             document.getElementById("name").style.borderWidth="4px";
        }else{
            console.log("valid name");
            //document.getElementById("name").style.border="none";
            document.getElementById("namel").style="visibility:hidden";
            document.getElementById("name").style.borderWidth="3px";
            document.getElementById("name").style.borderColor="#00ff00";
        }
        
        if(varPhone ==="" ||!hasNumber(varPhone)){
            console.log("invalid phone number")
            document.getElementById("phonel").style="visibility:visible";
            document.getElementById("phone").style.borderColor="red";
            document.getElementById("phone").style.borderWidth="4px";
        }else{
            console.log("valid phone");
            //document.getElementById("phone").style.border="none";
            document.getElementById("phonel").style="visibility:hidden";
            document.getElementById("phone").style.borderWidth="3px";
            document.getElementById("phone").style.borderColor="#00ff00";
        }

        if(varEmail ==="" || !isEmail(varEmail)){
            console.log("invalid email");
            document.getElementById("emaill").style="visibility:visible";
            document.getElementById("email").style.borderColor="red";
            document.getElementById("email").style.borderWidth="4px";
        }else{
            console.log("valid email")
            //document.getElementById("email").style.border="none";
            document.getElementById("emaill").style="visibility:hidden";
            document.getElementById("email").style.borderWidth="3px";
            document.getElementById("email").style.borderColor="#00ff00";
        }

        if(varSSN ==="" || !hasNumber(varSSN)){
            console.log("invalid SSN");;
            document.getElementById("ssnl").style="visibility:visible";
            document.getElementById("ssn").style.borderColor="red";
            document.getElementById("ssn").style.borderWidth="4px";
        }else{
            console.log("valid SSN")
            //document.getElementById("ssn").style.border="none";
            document.getElementById("ssnl").style="visibility:hidden";
            document.getElementById("ssn").style.borderWidth="3px";
            document.getElementById("ssn").style.borderColor="#00ff00";
        }


    }

    // validateName(event){
    //     this.setState({name: event.target.value});
    //     console.log({name: event.target.value});
    //     varName = this.state.name;
    //     console.log("varName: "+varName);
    // }

    validateName(event){
        const name = event.target.value
        this.setState({name});
        console.log({name});
        varName = name;
        console.log("varName: "+ name);
  }

    validatePhone(event){
        const phone = event.target.value.substr(0,10);
        this.setState({phone});
        console.log({phone});
        varPhone = phone;
        console.log("varPhone: "+ phone);
    }

    validateEmail(event){
        const email = event.target.value
        this.setState({email});
        console.log({email});
        varEmail = email;
        console.log("varEmail: "+ email);
    }

    validateSSN(event){
        // this.setState({ssn: event.target.value.substr(0,9)});
        // console.log({ssn: event.target.value});
        // varSSN = this.state.ssn;
        // console.log("varSSN: "+varSSN);

        const ssn = event.target.value.substr(0,9);
        this.setState({ssn});
        console.log({ssn});
        varSSN = ssn;
        console.log("varSSN: "+ varSSN);

    }

    render(){
        return(
            <div>
                <p>
                    <input type="text" id="name" value={this.state.name} placeholder="Name" onChange={this.validateName.bind(this)} onKeyDown={this.onEnter}/>      
                    <label id="namel">* incorrect  name</label>
                </p> 
                <p>
                    <input type="text" id="phone" value={this.state.phone} placeholder="Phone (no dashes)" onChange={this.validatePhone.bind(this)} onKeyDown={this.onEnter}/>
                    <label id="phonel">* incorrect phone</label>
                </p>
                <p>
                    <input type="email" id="email" value={this.state.email} placeholder="Email" onChange={this.validateEmail.bind(this)} onKeyDown={this.onEnter}/>
                    <label id="emaill">* incorrect email</label>
                </p>
                <p>
                    <input type="password" id="ssn" value={this.state.ssn} placeholder="SSN" onChange={this.validateSSN.bind(this)} onKeyDown={this.onEnter}/>
                    <label id="ssnl">* incorrect ssn  </label>
                </p>
                <p>
                    <button onClick={this.onSubmit}>Submit</button>
                </p>
            </div>
        )
    }




}

export default Form;