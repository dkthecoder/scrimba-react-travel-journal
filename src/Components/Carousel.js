import './Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import tokyo from './carousel/tokyo.webp';
import india from './carousel/India.jpg';
import durban from './carousel/Durban.jpg';

function Article() {
  return (
    <div id="myCarousel" class="carousel carousel-dark carousel-fade slide p-4 p-md-5 mb-4 rounded" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" class="active" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">

        <div class="carousel-item">
          <img class="bd-placeholder-img rounded" width="100%" height="100%" src={ india } alt="india" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <div class="container">
            <div class="carousel-caption">
              <h1 class= "text-light">India</h1>
              <p class= "text-light">It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast.</p>
            </div>
          </div>
        </div>

        <div class="carousel-item active">
          <img class="bd-placeholder-img rounded" width="100%" height="100%" src={ tokyo } alt="tokyo" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <div class="container">
            <div class="carousel-caption">
              <h1 class= "text-light">Tokyo</h1>
              <p class= "text-light">Formerly known as Edo, its metropolitan area (spanning 13,452 square kilometres or 5,194 square miles) is the most populous in the world, with an estimated 37.468 million residents as of 2018; the city proper has a population of 13.99 million people.</p>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img class="bd-placeholder-img rounded" width="100%" height="150%" src={ durban } alt="durban" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          <div class="container">
            <div class="carousel-caption">
              <h1 class= "text-light">Durban</h1>
              <p class= "text-light">Durban was formerly named Port Natal due to its position as the chief seaport of South Africa, and its location on the Natal Bay of the Indian Ocean. Durban is a highly ethnically diverse city, with large Zulu, White, and Indian/Asian populations.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Article;
