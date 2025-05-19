import React, { useEffect, useState } from 'react'

const FilterByExperienceBase = ({pokemons, filterSelected, onFilterChange}) => {
    
    const [isVisible, setIsVisible] = useState(false);

    const handleFilterToggle = () => {
        setIsVisible(!isVisible);
    }

    console.log(pokemons);  

    useEffect(() => {
        
    }, []);
           
  return (
    <div>
        <h3 className='font-bold' onClick={handleFilterToggle}>
            Experiencia pokemon 
            {isVisible 
            ? 
            <i className="bi bi-chevron-down"></i> 
            : 
            <i className="bi bi-chevron-up"></i>}
        </h3>
        <div id='filter-type' className={`filter-category ${isVisible ? 'visible' : 'hidden'}`}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div> 
    </div>
  )
}

export default FilterByExperienceBase
