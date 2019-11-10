import React from 'react'
import AppHeader from './AppHeader.js'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'

class App extends React.Component{
    constructor(props) {
        super(props);
        //this.handlerClick = this.handlerClick.bind(this);
        this.state = { choosevalue:1, data:props.data };
    }

    OnAddTodoItem(newItem){
        let newData = this.state.data.concat(newItem);
        this.setState({data:newData});
    }

    ChooseValue(id){
        this.setState({choosevalue:id});
    }

    render(){
        const { data } = this.state;

        return (
            <div className="ui comments">
                <AppHeader />
                <h1>My Todo List with React</h1>
                <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}/>
                <AppList data={data} choosevalue={this.state.choosevalue}/>
                <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}/>
            </div>
        )
    }
}

export default App