type Obj = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean
  }
};

function Card({ cityInfo }: Obj) {
  const { city, country, imageUrl } = cityInfo;
  return (
    <div>
      <p>{city}</p>
      <p>{country}</p>
      <img src={ imageUrl } alt={ city } />
      <p>{cityInfo.visited ? 'Já Fui!' : 'Não Fui.'}</p>
    </div>
  );
}

export default Card;
