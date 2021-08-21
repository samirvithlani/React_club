import {useState} from 'react'

const useInput =()=>{

    const [enterdvalue, setenterdvalue] = useState('')

    const valueChangeHandler = (e)=>{

        setenterdvalue(e.target.value)
        console.log("name change handler...",e.target.value)
    }

    const valueBlurHandler = (e)=>{

        
    }
    const reset =()=>{

        setenterdvalue('')
    }

    return{

        value:enterdvalue,valueBlurHandler,valueChangeHandler,reset
    }


}

export default useInput;