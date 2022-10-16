import './App.css';
import Article from './Components/Article';
import Carousel from './Components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <body>

      <div class="container">
        <header class="blog-header lh-1 py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="text-center">
              <a class="blog-header-logo text-dark" href="/">Dee Kay's Travels</a>
            </div>
          </div>
        </header>

        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-center">
            <a class="p-2 link-secondary" href="/">UK</a>
            <a class="p-2 link-secondary" href="/">Europe</a>
            <a class="p-2 link-secondary" href="/">Asia</a>
            <a class="p-2 link-secondary" href="/">Africa</a>
            <a class="p-2 link-secondary" href="/">US</a>
          </nav>
        </div>
      </div>

      <main class="container">
          <Carousel />

        <div class="row g-5">
          <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            <Article/>
          </div>

          <div class="col-md-4">

            <div class="position-sticky">
              {/*</div><div class="position-sticky" style="top: 2rem;">*/} 
              <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
              </div>
            </div>

            
          </div>
        </div>

      </main>

      <footer class="blog-footer">
        <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        <p>
          <a href="/">Back to top</a>
        </p>
      </footer>



    </body>

  );
}

export default App;
