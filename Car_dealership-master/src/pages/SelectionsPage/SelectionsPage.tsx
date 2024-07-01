import '../../index.scss';
import './SelectionsPage.scss';
import { ArticleProps } from '../ArticlePage/components/Article';
import { articles } from '../../models/Articles';
import React, { useState } from 'react';

export const SelectionsPage = () => {
  const maxCount = articles.length;
  const counter = 3;
  const [articleCount, setArticleCount] = useState(counter);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const reviewArray = articles.slice(0, articleCount);

  const addContent = () => {
    const count = reviewArray.length + counter;
    setArticleCount(count);
    setButtonDisabled(count >= maxCount);
  };

  return (
    <section className="selection-section">
      <div className="header">Наши подборки</div>

      <div className="selection-block">
        {reviewArray.map((item: ArticleProps) => {
          const itemBlock = item.textBlocks.filter((x) => !!x.image);
          const href = '/blog/' + item.id;

          return (
            <div className="selection-card" key={item.id}>
              <img className="image" src={itemBlock[0].image} alt={itemBlock[0].image} />
              <div className="title">{item.header}</div>
              <a className="btn" href={href}>
                Посмотреть
              </a>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <button className="btn" onClick={addContent} hidden={buttonDisabled}>
          Показать ещё
        </button>
      </div>
    </section>
  );
};
