import { motion } from 'framer-motion'
import { slipeUp } from '../../utility/animation'
import { Link } from 'react-router-dom'

const LineItem = ({pokemon}) => {
  return (
    <div id='card'>
      <motion.div
            variants={slipeUp(0.3)}
            initial='initial'
            animate='animate'
            key={pokemon.id} 
            className='p-6 flex flex-col shadow-md rounded-xl bg-white'>
            <h2 className='text-xl font-bold capitalize'>{pokemon.name}</h2>
            <img src={pokemon.imgOfficial} alt={pokemon.name} className='w-32 h-32 mx-auto' />
            <p><b>HP:</b> {pokemon.hp}</p>
            <p><b>Attack:</b> {pokemon.attack}</p>
            <p><b>Defense:</b> {pokemon.defense}</p>
            <p><b>Type:</b> {pokemon.type}</p>
            <Link id='btn-pay' className='items-center cursor-pointer' 
                to={`/item/${pokemon.id}`}>
                    Pedir Ahora 
              <i className="bi bi-credit-card text-xl ml-2"></i>
            </Link>
        </motion.div>
    </div>
  )
}

export default LineItem
