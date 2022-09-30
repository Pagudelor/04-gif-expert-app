import {useState} from 'react';
import {AddCategory,GifGrid} from './components';

export const GifExpertApp =() => {
    const [categories, setCategories] = useState(['taylor swift', 'camila cabello']);

    const onAddCategory = (newCategory) =>{
        if ( categories.includes(newCategory))return;
        setCategories([newCategory, ...categories]);
        //setCategories( cat =>[...cat,'hola mundo']);
    }

    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory
        onNewCategory = { (value) => onAddCategory(value) }
        />
            { categories.map ( (category) => (
                <GifGrid
                    key ={category}
                    category ={category}/>
            ))}
        </>
    )
}