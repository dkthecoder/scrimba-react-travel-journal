import './Article.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Article(props) {
  return (
    <div class="blog-post">

      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{props.region}</strong>
          <h3 class="mb-0">{props.title}</h3>
          <div class="mb-1 text-muted">{props.date}</div>
          <p class="card-text mb-auto">{props.text}</p>
        </div>

        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img rounded" width="200" height="250" src={props.img} alt="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>

      </div>

    </div>

  );
}

export default Article;
