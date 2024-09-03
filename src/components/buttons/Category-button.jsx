import "./Category-button.css"
const CategoryButton = ({onclick, text})=>{
    return (
        <>
        <button className="category-btn" onClick={onclick}>{text}</button>
        </>
    )
}
export default CategoryButton