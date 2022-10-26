import Spinner from 'react-bootstrap/Spinner';

export function LoadingSpinner () {
  return (
    <div className='w-100 h-100 center-content'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
