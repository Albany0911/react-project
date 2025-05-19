import React, { useState } from 'react'

const FilterByType = ({filter, filterSelected, onFilterChange}) => {

const [isVisible, setIsVisible] = useState(false);

const handleFilterToggle = () => {
setIsVisible(!isVisible);
}
        
  return (
    <div>
        <h3 className='font-bold' onClick={handleFilterToggle}>Tipo pokemon {isVisible ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>}</h3>
            <div id='filter-type' className={`filter-category ${isVisible ? 'visible' : 'hidden'}`}>
                {filter.map((item) => (
                    <div key={item.id} className='filter-category-item'>
                        <input type="checkbox" 
                        name={item.title} 
                        id={item.id} 
                        className={`checkbox-`+item.id} 
                        checked={filterSelected.includes(item.title)} // checkbox marcado si está seleccionado
                        onChange={() => onFilterChange(item.title)} // activa/desactiva el filtro
                        />
                        <label htmlFor={item.id} className='label pl-3'>{item.title.toUpperCase()}</label>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default FilterByType
