import React, { useState, useRef } from 'react'
import useInput from '../hooks/use-input';

export const SimpleForms = () => {

    const [name, setname] = useState('');
    const nameRef = useRef('')
    const [namevalidation, setnamevalidation] = useState(true)
    const [namelenvalidation, setnamelenvalidation] = useState(true)

    //value useInput --enterName name  

    const {value:enterName,valueChangeHandler:nameChangeHandler} = useInput()
    const {value:enterEmail,valueChangeHandler:emailChangeHandler} = useInput()
    
    

    let formIsvalid = true;

    if (namevalidation) {
        formIsvalid = true;
    }
    else {
        formIsvalid = false;
    }


    const submit = (e) => {

        e.preventDefault();

        if (name.trim() === '') {

            setnamevalidation(false)
            return;
        }

        if (name.length < 5) {

            setnamelenvalidation(false)
            setname('')
            return;
        }



        console.log("name ==>", name)
        const email = nameRef.current.value;
        console.log(nameRef)
        console.log(email)

    }


    const nameHandler = (e) => {

        console.log("event -->", e)
        setname(e.target.value);
    }

    const onBlurHandler = (e) => {

        if (name.trim() === '') {
            setnamevalidation(false)
            return;
        }
    }


    return (
        <form onSubmit={submit}>
            <div className="form-control">
                <label htmlFor="name">Enter Name</label>
                <input type="text" value={enterName} onChange={nameChangeHandler}
                    onBlur={onBlurHandler}
                ></input>

                {enterName}
                {!namevalidation &&
                    <span>
                        Name must not be empty !
                    </span>
                }

                {!namelenvalidation &&
                    <span>
                        Pls check name size..
                    </span>

                }

            </div>
            <div className="form-control">
                <label htmlFor="email">Enter Email</label>
                <input type="text" ref={nameRef} ></input>
            </div>

            <div className="form-action">
                <button disabled={!formIsvalid}>SUBMIT</button>
            </div>

        </form>
    )
}
