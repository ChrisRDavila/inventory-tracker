import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetails from './CoffeeDetails';
import EditCoffeeForm from './EditCoffeeForm';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false,
    };
  }
  
  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)  
      .concat(coffeeToEdit); 
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
      });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  handleChangeSelectCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleBuyClick = () => {
    const selectedCoffee = this.state.selectedCoffee;

    if (selectedCoffee.amount > 0) {
    this.setState({mainCoffeeList: this.state.mainCoffeeList.filter(coffee => coffee.id !== selectedCoffee.id).concat({...selectedCoffee, amount: selectedCoffee.amount - 1}), selectedCoffee: null})
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
      );
      buttonText = 'Coffee List';
    } 
    else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetails coffee={this.state.selectedCoffee} onClickingDelete={this.handleDeletingCoffee} onClickingEdit={this.handleEditClick}  onClickingBuy={this.handleBuyClick}
      />

      buttonText = "Coffee List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleNewCoffeeToList} />;

      buttonText = "Coffee List"; 
    } 
    else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelect={this.handleChangeSelectCoffee}/>;
      buttonText = "update";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl; 