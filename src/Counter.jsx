
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD, ADD_NUMBER, RESET, SUBTRACT, TOOGLE_AUTH } from './store/Action'

const Counter = () => {

  const count = useSelector(state => state.count)
  const auth = useSelector(state=> state.auth)
  const dispatch = useDispatch()

  
  
  return (
    <>
    <div className="home">
        
      <div className="counter">
          <button className='home-btn btn' onClick={() => dispatch(TOOGLE_AUTH())}>{ auth ? 'sign in' :'sign out'}</button>
          {auth ? <h2>please log in to react counter app</h2> : (
            <>
              <h2>react redux counter app</h2>
          <h1>{ count}</h1>
          <button className='home-btn' onClick={()=>dispatch(ADD())}>ADD</button>
          <button className='home-btn' onClick={()=>dispatch(RESET())}>RESET</button>
          <button className='home-btn' onClick={()=>dispatch(SUBTRACT())}>SUBTRACT</button>
          <button className='home-btn' onClick={()=>dispatch(ADD_NUMBER(4))}>ADD NUMBER 4</button>
            </>
          )}

      </div>
    </div>
    </>
  )
}

export default Counter
