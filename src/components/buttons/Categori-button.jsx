const CategoryButton = ({onclick, text})=>{
    return (
        <>
        <button onClick={onclick}>{text}</button>
        </>
    )
}
export default CategoryButton