import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { posts } from './Home';

function FullArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((item) => item.id === +id);

  React.useEffect(() => {
    let timeoutId;
    if (!post) {
      timeoutId = setTimeout(() => {
        navigate('/', { replace: true });
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!post) {
    return <h1>Статья не найдена :(</h1>;
  }

  return (
    <div className="full-article">
      <h1 className="full-article__title">{post.title}</h1>
      <img className="full-article__img card-img-top" src={post.imageUrl} alt="post image" />
      <p className="full-article__text">{post.text}</p>
      <Link to="/">
        <button className="btn btn-dark">Назад</button>
      </Link>
    </div>
  );
}

export default FullArticle;
