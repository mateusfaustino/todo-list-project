export const handleDefault = (variable, defaultValue) =>
    variable ? defaultValue : variable;

    // function searchAdress(url,parameters, handleError,handleResolve) {
    //     const parameters = handleDefault(parameters,{
    //         method:'GET',
    //         mode:'cors',
    //         cache:'default'
    //     })
        
    //     fetch(url, parameters)
    //     .then(response => response.json()
    //     ).then((data) => {
    //         return(data)
    //     })
    //     .catch((error) => {
    //         handleError()
    //     })
    // }
