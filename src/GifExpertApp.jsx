import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //TODO: WE DON'T PUT OUR HOOKS INSIDE CONDITIONS LIKE IF, NEVER!!!

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories([...categories, 'Halo']);
        // setCategories(cat => [...cat, 'Halo']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // categories={categories} setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp
