// Code Keypad Component Here

function Keypad (){
    function keypadChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={keypadChange} />
        </div>
    )
}

export default Keypad;