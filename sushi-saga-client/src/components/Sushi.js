import React from 'react'

export default class Sushi extends React.Component
{
  state = 
  {
    eaten:false
  }

  handleEaten = () => 
  {
    if (this.props.money > 0)
    {
      this.setState({
        eaten: true
      })
      this.props.handleMoneyChange(this.props.sushi.price);
    }


  }

  render() 
  {
    console.log(this.props)
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleEaten}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            // !true ?
            //   null
            // :
            //   <img src={this.props.sushi.img_url} width="100%" />
            this.state.eaten == false ? <img src={this.props.sushi.img_url} width="100%" /> : null 
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}
