var state = {
    currentvalue: "0",
    previousvalue: null,
    operator: null
}

document.querySelector('.screen').innerHTML = state.currentvalue

function handleClick(type, value) {
    if(type == 'number'){
        console.log(state.currentvalue)
       return handleNumber(value)
    }
    else{
       return handleOperator(value)
    }
}

function handleNumber(value){
    if(state.currentvalue == 0){
        return{
            currentvalue: value
        }
    }
    else{
        return{
            currentvalue: `${state.currentvalue}``${value}`
        }
    }
}


function handleOperator(value, state) {

}
