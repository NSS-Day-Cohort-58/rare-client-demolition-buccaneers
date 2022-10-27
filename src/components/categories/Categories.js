import { useState, useEffect } from "react";

export const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8088/categories`)
            .then(response => response.json())
            .then((categoryArray) => {
                setPosts(categoryArray)
            })
    }, [])
}