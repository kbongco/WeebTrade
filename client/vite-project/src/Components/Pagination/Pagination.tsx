import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from '../../Interfaces/component-interface';

export default function Pagination({ totalNumber, itemsPerPage, currentPage, onPageChange, lastPage }: Pagination) {
  return (
    <>
      <div className='chbi-pagination-container'>
        <div className='chbi-pagination'>
          
        </div>
      </div>
    </>
  )
}
