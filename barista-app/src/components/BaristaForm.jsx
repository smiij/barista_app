import React, {Component, useState} from 'react';
import RecipeChoices from './RecipeChoices';
import drinksJson from './drinks.json';

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syryp': '',
        'blended': '',
    })

    const ingridients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple','caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes','turbo', 'no'],}

    const [currentDrink, setCurrentDrink] = useState('')
    
    const [trueRecipe, setTrueRecipe] = useState({
        
    })
    
    const [rightTemp, setRightTemp] = useState('')
    const [rightSyrup, setRightSyrup] = useState('')
    const [rightMilk, setRightMilk] = useState('')
    const [rightBlended, setRightBlended] = useState('')

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']) {
            setRightTemp('wrong')
        }
        else {
            setRightTemp('correct')
        }

        if (trueRecipe.syrup != inputs['syrup']) {
            setRightSyrup('wrong')
        }
        else {
            setRightSyrup('correct')
        }

        if (trueRecipe.milk != inputs['milk']) {
            setRightMilk('wrong')
        }
        else {
            setRightMilk('correct')
        }

        if (trueRecipe.blended != inputs['blended']) {
            setRightBlended('wrong')
        }
        else {
            setRightBlended('correct')
        }
    }
    
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '',
        })
        getNextDrink()
        setRightTemp('')
        setRightSyrup('')
        setRightMilk('')
        setRightBlended('')
    }
    
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length)
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingridients)
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name)
        
    }
    
    
    return (
        <div>
            
            <h2 className='start'>  Hi, I'd like to order a:  </h2>
            <div className='drink-container'>
                <h2 className='mini-header'> {currentDrink}</h2>
                <button type='new-drink-button' className='buttonnewdrink' onClick={onNewDrink}>🔄</button>
            </div>
            <button type='submit' className='button submit' onClick={onCheckAnswer}>Check Answer </button>
            <button type='new-drink-button' className='button submit' onClick={onNewDrink}> New Drink</button>

            <form className='container'>
            <div className='mini-container'>
            <h3 className='description'>Temperature</h3>
            <div className="answer-space" id={rightTemp}>
                {inputs["temperature"]} 
            </div>
            <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="temperature"
            choices={ingridients["temperature"]}
            checked={inputs["temperature"]}
            />
            </div>

            <div className='mini-container'>
            <h3 className='description'>Milk</h3>
            <div className="answer-space" id={rightMilk} >
                {inputs["milk"]} 
            </div>
            <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingridients["milk"]}
            checked={inputs["milk"]}
            />
            </div>

            <div className='mini-container'>
            <h3 className='description'> Syrup</h3>
            <div className="answer-space" id={rightSyrup} >
                {inputs["syrup"]} 
            </div>
            <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingridients["syrup"]}
            checked={inputs["syrup"]}
            />
            </div>

            <div className='mini-container'>
            <h3 className='description'>Blended</h3>
            <div className="answer-space" id={rightBlended}>
                {inputs["blended"]} 
            </div>
            <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingridients["blended"]}
            checked={inputs["blended"]}
            />
            </div>
            </form>
    
        </div>
    )
}

export default BaristaForm;