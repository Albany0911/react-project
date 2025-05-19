import React, { useState, useEffect } from 'react'
import { fetchPokemonByType } from '../../helpers/loadData'
import './Sidebar.css'
import FilterByType from './FilterList/FilterByType';
import FilterByExperienceBase from './FilterList/FilterByExperienceBase';

const Sidebar = ({onFilterChange, filterSelected, pokemons}) => {
  
  const [filter, setFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
    const fetchDataFilter = async () => {
      try {
          const res = await fetchPokemonByType();
          const promises = res.map(async (item) => {
           
              const response = await fetch(item.url);
              const data = await response.json();                            
              return {
                  id: data.id,
                  title: data.name,
              }
          });         
          const filterName = await Promise.all(promises);         
          setFilter(filterName);
             
          return filterName;
      } catch (error) {
          console.log(error);
      }
    }   
    fetchDataFilter();

  }, []);

  return (
    <div>

      <div className="filter-caterory-mobile hidden">
        <div className="filter-category-btn">
          <button onClick={handleToggle} className="btn-filter">
            Filtrar <i className="bi bi-filter-left"></i>
          </button>
        </div>
      </div>

       <div id='filter-content' className='hidden bg-white md:block'>
          <div className='flex flex-col items-left p-6'>
              <h2 className='text-2xl font-bold'>Categorias</h2>
              <div className='filter-category-wrapper'>

                <FilterByType 
                  filter={filter} 
                  filterSelected={filterSelected} 
                  onFilterChange={onFilterChange} />

                <FilterByExperienceBase 
                  filter={filter} 
                  filterSelected={filterSelected} 
                  onFilterChange={onFilterChange}
                  pokemons={pokemons}  />

              </div>
          </div>
      </div>

       <div id='filter-content-mobile' className={`md:hidden fixed w-full bg-white transition-all durarion-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className='flex flex-col items-left p-6'>
              <h2 className='text-2xl font-bold'>Categorias</h2>
              <div className='filter-category-wrapper'>
                  <div className='filter-category'>
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
          </div>
      </div>
      
    </div>
   
  )
}

export default Sidebar
