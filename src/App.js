import React from 'react';
import useFetch from './components/UseFetch';

// https://v2.jokeapi.dev/joke/Any
 
function App() {
    const { data: joke, loading, error } = useFetch ("https://v2.jokeapi.dev/joke/Any");
    
    if (loading ) return <h1> LOADING...</h1>

    if (error) console.log(error); 

    return (
       <div className='header'>
            <h1>
                {joke?.setup} : {joke?.delivery}
            </h1>
       </div>
    )
}
export default App;

