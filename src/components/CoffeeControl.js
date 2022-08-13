import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null){
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      })
    } else {
    this.setState(prevState=> ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

handleLessCoffeeAmount = (id) =>{
  const selectedCoffee = this.state.mainCoffeeList.filter((coffee)=> coffee.id === id )[0];
  if(selectedCoffee.amount>0){
    selectedCoffee.amount -=1;
    const updatedMainCoffeeList = this.state.mainCoffeeList.filter((coffee)=> coffee.id !== id).concat(selectedCoffee);
    this.setState({
        mainCoffeeList: updatedMainCoffeeList
      })
  } else {
      alert("sold out!");
  }
}

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  };

  handleChangingSelectedCoffee =(id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter((coffee)=> coffee.id ===id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null,
      editing: false
    });
  }

  handleEditClick =() => {
    this.setState({editing:true})
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee}
      onEditCoffee = {this.handleEditingCoffeeInList}/>
      buttonText= "return to coffee list";
    }
      else if (this.state.selectedCoffee != null){
      currentlyVisibleState = 
      <CoffeeDetail 
        coffee = {this.state.selectedCoffee} 
        onClickingDelete = {this.handleDeletingCoffee} 
        onLessCoffee = {this.handleLessCoffeeAmount} 
        onClickingEdit ={this.handleEditClick}/> 
        buttonText= "return to coffee list";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation ={this.handleAddingNewCoffeeToList} />;
      buttonText= "return to coffee list";
    } else {
      currentlyVisibleState =<CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection ={this.handleChangingSelectedCoffee} onLessCoffee = {this.handleLessCoffeeAmount}/>;
      buttonText= "Add a coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick ={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;