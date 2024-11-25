//write way to create a wrapper
function App(){
    return <div>
        <cardWrapper>
            hi there
        </cardWrapper>
    </div>

}


//a component which takes react component as input
function cardWrapper({children}){
    return <div style = {{border: "2px solid black"}}>
        {children}
    </div>
}

export default App