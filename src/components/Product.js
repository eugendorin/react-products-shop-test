import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImageWrapper, LoadingSpinner } from './';
import { formatPrice } from 'utils';
import { useImage } from 'hooks';

export function Product({
  name,
  description,
  price,
  image,
  onClick
}) {
  const { hasError, hasLoaded } = useImage(image);

  return (
    <Card>
      <ImageWrapper>
        {hasError
          ? (
            <div className='w-100 h-100 center-content'>
              <div class="alert alert-danger" role="alert">
                Error while loading this image
              </div>
            </div>
            )
          : hasLoaded
            ? (<Card.Img alt={`${name}`} src={image}/>)
            : (<LoadingSpinner />)
        }
      </ImageWrapper>

      <Card.Body>
        <Card.Title className="mt-1">{name}</Card.Title>
        <Card.Text className="height text-truncate">{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>{formatPrice(price)}</div>
          <Button onClick={onClick}>Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
