import './total-balance.scss';
import { ArrowUpRight } from 'react-feather';

interface TotalBalanceProps {
    total: number;
  }

function TotalBalance({total}: TotalBalanceProps) {
    return (
        <>
          <div className='container-balance md:w-[300px]'>
            <div className='balance'>
                <span>Tipo de conta</span>
                <p>Cartão de débito</p>
                <span>**** **** **** 2598</span>
            </div>
            <div className='icon-balance-contents'>
                <img src="src/assets/mastercard-logo.png" alt="Bandeira MasterCard" />
                <div className='wrapper-icon'>
                    <p>{`$${total.toFixed(2)}`}</p>
                    <div className='icon-balance'>
                        <ArrowUpRight color='#299D91' />
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default TotalBalance;