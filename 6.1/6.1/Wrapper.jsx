function App(){
    return <div>
        <cardWrapper innerComponent =  {<TextComponent/>}></cardWrapper>
    </div>

}

function TextComponent(){
    return<div>
        hi there
    </div>
}


//a component which takes react component as input
function cardWrapper({TextComponent}){
    return <div style = {{border: "2px solid black"}}>
        {TextComponent}
    </div>
}

export default App