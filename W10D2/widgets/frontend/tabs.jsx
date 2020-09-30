import React from 'react'

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabIndex: 0,
        };
        console.log(this.props.tabs)
        // this.setTab = this.setTab.bind(this);
    }

    render(){
        return( 
            <div> Tab
                <div className="header">
                    {this.props.tabs.map((tab, idx)=>{
                        return(
                            <span onClick={()=> this.setTab(idx)} key={idx} className = {this.state.tabIndex===idx ? "bold" : "normal" }>
                                <h1>{tab.title}</h1>
                            </span>
                        )
                    })}
                </div>
                
                <div className="content">
                    <article>{this.props.tabs[this.state.tabIndex].content}</article>
                </div>
            </div>
        )
    } 
    setTab(idx){
        // return () => {
            this.setState({tabIndex: idx});
        // }
        // console.log(e.currentTarget);
        // this.setState({ tabIndex: parseInt(e.currentTarget.getAttribute("idx")) });
    }

    
}

export default Tabs;