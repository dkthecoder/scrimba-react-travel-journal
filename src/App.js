import './App.css';
import Article from './Components/Article';
import Carousel from './Components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import bali from './Components/articleImages/bali.webp';
import oslo from './Components/articleImages/Oslo.jpg';
import albufeira from './Components/articleImages/albufeira.jpg';
import istanbul from './Components/articleImages/istanbul.jpg';

function App() {
  return (
    <div>

        <div class="blog-header lh-1 py-3 row flex-nowrap justify-content-between align-items-center">
          <div class="text-center">
            <a class="blog-header-logo text-dark" href="/">Dee Kay's Travels</a>
          </div>
        </div>

      <main class="container">
        <Carousel />

        <div class="row g-5">
          <div class="">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            <div class="row">
              <div class="col-md-6">
                <Article region="Indonasia" title="Bali" date="2022" text="Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism. It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music. The Indonesian International Film Festival is held every year in Bali." img={bali} />
                <Article region="Norway" title="Oslo" date="2022" text="During the Viking Age the area was part of Viken. Oslo was founded as a city at the end of the Viking Age in 1040 under the name Ánslo," img={oslo} />
              </div>
              <div class="col-md-6">
                <Article region="Portugal" title="Albufeira" date="2022" text="In the first decades of the 20th century, the export of fish and nuts represented the largest contribution to the local economy of the municipality. The town itself had five factories employing 700-800 people, mostly wives of fishermen working in local production. Yet, between 1930 and 1960, there was a considerable decline in fortunes, resulting in the closing of many of these factories, the reduction in fishing boats along the coast and the abandonment of many of the homes." img={albufeira} />
                <Article region="Turkey" title="Istanbul" date="2022" text="Formerly known as Constantinople, is the largest city in Turkey, serving as the country's economic, cultural and historic hub. The city straddles the Bosporus strait, lying in both Europe and Asia, and has a population of over 15 million residents, comprising 19% of the population of Turkey." img={istanbul} />
              </div>

            </div>




          </div>
        </div>

      </main>

    </div>

  );
}

export default App;
