import React from 'react'
import AppTodos from './AppTodos'

class AppList extends React.Component {
   render () { 
    var value = this.props.choosevalue;

    const a = this.props.data.map(({ id, text, complete }, index) => {
       //return  <AppTodos key={index} id={id} text={text} complete={complete} />
       if (value === '1') {
        return  <AppTodos 
                        key={index} 
                        id={id} 
                        text={text} 
                        complete={complete} 
                  />
    }

    if (value === '2' && complete === false) {
        return  <AppTodos 
                        key={index} 
                        id={id} 
                        text={text} 
                        complete={complete} 
                  />
    }

    if (value === '3' && complete === true) {
        return  <AppTodos 
                        key={index} 
                        id={id} 
                        text={text} 
                        complete={complete} 
                  />
    }
      return undefined;
    })

    return (
      <div> { a } </div>
    )
  }
}

export default AppList;