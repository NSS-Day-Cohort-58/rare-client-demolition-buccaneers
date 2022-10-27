import { useState, useEffect } from "react";
import "./Categories.css"

export const Categories = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8088/categories`)
            .then(response => response.json())
            .then((categoryArray) => {
                setCategory(categoryArray)
            })
    }, [])

    return <article className = "categoryList">
        <table className="categoryBlack">
            <thead>
            <tr>
            <th><center>Categories</center></th>
            </tr>
            </thead>
            {
                category.map(cat =>
                    <tbody key={cat.id} >
                        <tr>
                            <td><center>{cat.label}</center></td>
                        </tr>
                    </tbody>
                )
            }
        </table></article> 
}

