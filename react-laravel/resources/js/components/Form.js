import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            files: {}
        }
        this.onChangeForm = this.onChangeForm.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeForm(event){
        this.setState({
            files: event.target.files
        })
    }

    onSubmitForm(event){
        event.preventDefault();
        let file = this.state.files;
        let formData = new FormData;
        formData.append('file', file[0]);
        axios.post("http://127.0.0.1:8000/user/import", formData).then(response =>{
            console.log(response);
        })
    }

    render(){
        return (
            <form onSubmit={(event) => this.onSubmitForm(event)}>
                <input type="file" name="file" onChange={(event) => this.onChangeForm(event)}/>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}