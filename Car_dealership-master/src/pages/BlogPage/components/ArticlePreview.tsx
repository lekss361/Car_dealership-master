import './ArticlePreview.scss';
import { ArticleProps } from '../../ArticlePage/components/Article';
import React from 'react';

export interface ArticlePreviewProps {
  article: ArticleProps;
  date?: string;
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
  const itemBlock = props.article.textBlocks.filter((x) => !!x.image);
  const href = '/blog/' + props.article.id;

  return (
    <div className="article">
      <a href={href}>
        <img src={itemBlock[0].image} alt={itemBlock[0].image} />
      </a>
      <div className="date">{props.date}</div>
      <div className="text">{itemBlock[0].title}</div>
    </div>
  );
};
