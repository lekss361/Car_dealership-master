import './BlogPage.scss';
import { ArticlePreview } from './components/ArticlePreview';
import { ArticleProps } from '../ArticlePage/components/Article';
import { Flipper } from '../../components/Flipper/Flipper';
import { articles } from '../../models/Articles';
import React from 'react';

export const Blog = () => {
  function getRandomDate(start: Date) {
    return new Date(start.getTime() + Math.random() * (new Date().getTime() - start.getTime())).toLocaleDateString();
  }

  return (
    <section>
      <div className="header">
        <div className="name">Блог</div>
        <a className="btn" href="blog">
          Все статьи
        </a>
      </div>
      <Flipper
        perView={3}
        node={articles.map((item: ArticleProps) => {
          return <ArticlePreview article={item} date={getRandomDate(new Date(2013, 0, 1))} key={item.id} />;
        })}
      />
    </section>
  );
};
