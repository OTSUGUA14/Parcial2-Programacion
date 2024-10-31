// LOCAL STORAGE
//Traer productos local

export const handleGetProductLocalStorage=()=>{
    const product=JSON.parse(localStorage.getItem("products"));

    if (product) {
        return product
    }else{
        return[]
    }
}
//Guardar en localStorage
//recibir elementos
export const setInLocalStorage=(productIn)=>{
    if (productIn) {
         //traer elementos 
        let productInLocal=handleGetProductLocalStorage();
        
        
        const existingIndex=productInLocal.findIndex((productLocal)=>
            productLocal.id==productIn.id
        )
        //verifica si existe
        
        if (existingIndex!=-1) {
            productInLocal[existingIndex]=productIn
            
        }else{
            // si existe se remplaza sino se crea   
            productInLocal.push(productIn)
        }
        //setear el nuevo array
        localStorage.setItem("products",JSON.stringify(productInLocal))
    }
   
}