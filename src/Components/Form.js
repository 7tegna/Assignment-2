import {useState} from 'react'



const Form= ()=> {
    const [first, setFirst] =useState ('');
    const [last,setLast] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const name= {first, last};
 

    }
    return(
        
    <div >
    <h2 id="title"> Assignment II </h2>
    <p> {first } </p>
    <p> {last} </p> 
    
        <form onSubmit={handleSubmit} // onSubmit-> creating a function that will be attached to the submit acction. 
            // the actual function ln 8
            // upon creation the submit will erase to default. 
            // to avoid default - use event.preventDefault function
             >

            
            
            <div>  

                <lable> First Name </lable>

                <input 
                type='text'
                name ="fname"
                required
                value={first}
                onChange= {(e) => setFirst(e.target.value) } 
                // e= event-> will give access to the value in the setTitle func. 
                // target-> any value uder the above <input>
                // upone typing in the box. this will triger ln 17 and update info in ln 6 ...('')
                // to display the input text use --- <p> {} </p> -- linking code. 

                />

               
            </div>
            <div> 
                <lable> Last Name: </lable>
                <input 
                type='text' 
                name='lname'
                required
                value ={last}
                onChange = {(e) => setLast(e.target.value)}
                />

            </div>
        
    
 
    <button type="button"> Click to Submit! </button>
    </form>
        
    </div>
   
    
    
    );
    
}
export default Form 