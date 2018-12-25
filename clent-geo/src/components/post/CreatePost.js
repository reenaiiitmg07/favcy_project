import React,{Component} from 'react';
import requireAuth from '../requireAuth';
import axios from 'axios';

class CreatePost extends Component{

    constructor(props){
        super(props)
        this.state={
            title:'',
            textValue:''
        }
        this.onTextChange=this.onTextChange.bind(this);
        this.onTitleChange=this.onTitleChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onTitleChange(e){

        this.setState({
            title:e.target.value
        })
    }
    onTextChange(e){
        this.setState({
            textValue:e.target.value
        })
    }
    onSubmit(){
        console.log("on submit")
        axios.post('http://localhost:3001/post',{
            id:Math.random()*1000000,
            title:this.state.title,
            body:this.state.textValue,
            email:'ltpreenaverma@gmail.com'
        }).then(response=>{
            this.props.history.push('/post');
        })

    }

    render(){
        return(
            <div>
                <div className="row">
                <br />
                <br />
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                    <input type="text" value={this.state.title} onChange={this.onTitleChange} className="form-control" placeholder="enter title of the post" />
                    <textarea className="form-control"  row="8" onChange={this.onTextChange} > </textarea>
                    <br />

                    <button className="btn btn-primary " onClick={this.onSubmit} style={{marginLeft:'380px'}} type="submit" > Submit</button>
                    </div>
                    <div className="col-sm-3">

                    </div>

                </div>
            </div>
        )
    }
}

export default requireAuth(CreatePost);
