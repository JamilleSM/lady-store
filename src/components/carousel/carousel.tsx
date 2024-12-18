import './carousel.scss';
import TotalBalance from '../total-balance/total-balance';
import { CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Financial } from '../../interface/financial.interface';
import { useQuery } from '@tanstack/react-query';
import { getFinancial } from '../../data/services/financial.service';


export function CarouselDemo() {

  const { data: financials } = useQuery<Financial[]>({
    queryKey: ['financial'],
    queryFn: getFinancial,
  });

  const totalBalance = financials
  ? financials.reduce((acc, item) => {
    const value =
    typeof item.amount === 'string'
      ? parseFloat(item.amount)
      : item.amount ?? 0;

      if (item.transaction_type=== 'Receita') {
        return acc + value; 
      } else if (item.transaction_type === 'Despesa') {
        return acc - value; 
      }
      return acc;
    }, 0) 
  : 0; 

  
  return (
    <div className='carousel-container'>
      <div className='total-card'>
        <p>{`$${totalBalance.toFixed(2)}`}</p>
        <span>Todas as contas</span>
      </div>
      <Carousel className='md:w-[880px] h-[300px] max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
            >
              <div>
                <CardContent className='flex aspect-square items-center justify-center'>
                  <CarouselItem className='basis-3/3 pl-0 h-[200px]' style={{ margin: 0 }}>
                    <TotalBalance total={totalBalance}/>
                  </CarouselItem>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    </div>
  );
}
