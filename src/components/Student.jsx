//function Student(){
function Student({ name }){
    return(
        <div>
            <h2>
                Student Component
            </h2>
            {/* <h3>{props.name}</h3> */}
            <h3> { name } </h3>
            <p>This is our Second reusable component</p>
        </div>
    )
}
export default Student