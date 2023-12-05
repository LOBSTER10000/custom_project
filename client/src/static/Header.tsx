import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import '../asset/scss/Header.scss';

export default function header() {
  const [isLogin, setLogin] = useState<boolean>(false); 
  return (
    <>
    <div>
        <header className='headers'>
            <div className=''>
                
            </div>
        </header>
    </div>
    </>
  )
}
