import React,{Component} from 'react';
import axios from 'axios'

class ShowPost extends Component{

    constructor(props){
        super(props)
        this.state={
            postData:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/post').then(response=>{
            this.setState({
                postData:response.data
            })
            
        })

    }

    render(){
        return(
            <div>
                {this.state.postData.map(item=>{
                    return(
                        <div className="card bg-faded">
                        <div className="media">
                            <div className="media-body">
                            <h5 className="mt-0">{item.title}</h5>
                            {item.body}
                            </div>
                        </div>
                        </div>
                    )
                    
                })}
            </div>
        )
    }
}

export default ShowPost;