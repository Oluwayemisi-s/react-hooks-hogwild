export default function Filter({handleChange}) {
    return (
        <div className="filter" style = {{padding:20}}>
        <label>Select Category
            <select name="filter" onChange = {(e) => {handleChange(e)}}>
                <option value="All">Filter by category</option>
                <option value="greased">Greased</option>
                <option value="not-greased">Not Greased</option>
            </select>
        </label>
        </div>
    )
}