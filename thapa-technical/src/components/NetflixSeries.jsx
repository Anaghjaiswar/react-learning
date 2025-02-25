import seriesData from '../api/seriesData.json';
import { SeriesCards } from './SeriesCards';


const NetflixSeries = () => {
  return (
    <ul>
        {seriesData.map((currElement) => (
            <SeriesCards key={currElement.id} currElement = {currElement} />
        ))}
    </ul>
  )
}

// console.log(currElement);

export default NetflixSeries