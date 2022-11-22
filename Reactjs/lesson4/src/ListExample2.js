function ListExample2(props){
    const state=props.states;
    var statelist=state.map((item)=><li id={item.id}>{item.name}</li>)
    return(
        <div>
            {statelist}
        </div>
    )
}
export default ListExample2;