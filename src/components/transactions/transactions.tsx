import { useState } from 'react';
import './transactions.scss';
import Stepper from '../stepper/stepper';
import { getFinancial } from '../../data/services/financial.service';
import { Financial } from '../../interface/financial.interface';
import { useQuery } from '@tanstack/react-query';

function Transactions() {
  const [selectedTable, setSelectedTable] = useState(0);
  const labels = ['Todos', 'Receitas', 'Despesas'];

  const { data: financials } = useQuery<Financial[]>({
    queryKey: ['financial'],
    queryFn: getFinancial,
  });

  const filterTransactions = (type: string): Financial[] | undefined => {
    if (type === 'Todos') return financials;

    return financials?.filter(
      (financial) => financial.transaction_type === type
    );
  };

  return (
    <>
      <div className='container-transactions'>
        <Stepper
          labels={labels}
          selectedIndex={selectedTable}
          onStepChange={setSelectedTable}
          activeColor='#299D91'
        />

        <div className='contents-transactions-total'>
          {selectedTable === 0 && (
            <div className='contents-transactions'>
              {filterTransactions('Todos')?.map(
                (financial: Financial, index: number) => (
                  <>
                    <div className='transactions' key={index}>
                      <p>{financial.description}</p>
                      <p style={{ color: '#525256' }}>R$ {financial.amount}</p>
                    </div>
                    <div className='transactions'>
                      <span>{financial.transaction_type}</span>
                      <span>{financial.transaction_date}</span>
                    </div>
                  </>
                )
              )}
            </div>
          )}
          {selectedTable === 1 && (
            <div className='contents-transactions'>
              {filterTransactions('Receita')?.map(
                (financial: Financial, index: number) => (
                  <>
                    <>
                      <div className='transactions' key={index}>
                        <p>{financial.description}</p>
                        <p style={{ color: '#525256' }}>R$ {financial.amount}</p>
                      </div>
                      <div className='transactions'>
                        <span>{financial.transaction_type}</span>
                        <span>{financial.transaction_date}</span>
                      </div>
                    </>
                  </>
                )
              )}
            </div>
          )}
          {selectedTable === 2 && (
            <div className='contents-transactions'>
              {filterTransactions('Despesa')?.map(
                (financial: Financial, index: number) => (
                  <>
                    <>
                      <div className='transactions' key={index}>
                        <p>{financial.description}</p>
                        <p style={{ color: '#525256' }}>R$ {financial.amount}</p>
                      </div>
                      <div className='transactions'>
                        <span>{financial.transaction_type}</span>
                        <span>{financial.transaction_date}</span>
                      </div>
                    </>
                  </>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Transactions;
