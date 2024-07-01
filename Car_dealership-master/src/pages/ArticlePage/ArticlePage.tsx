import '../../index.scss';
import './ArticlePage.scss';
import { Article, ArticleProps } from './components/Article';
import { Navigate, useParams } from 'react-router-dom';
import { articles } from '../../models/Articles';
import React from 'react';

export const ArticlePage = () => {
  const params = useParams();
  const article = articles.find((x: ArticleProps) => x.id.toString() === params.id);
  if (!article) {
    return <Navigate to="*" />;
  }

  return (
    <section className="article-section">
      <Article id={article.id} header={article.header} textBlocks={article.textBlocks} />
    </section>
  );
};
