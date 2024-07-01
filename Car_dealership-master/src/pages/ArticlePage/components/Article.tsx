import './Article.scss';
import React from 'react';

export interface ArticleProps {
  id: number;
  header: string;
  textBlocks: ArticleTextBlock[];
}

export interface ArticleTextBlock {
  title: string;
  image?: string;
  text: string[];
}

export const Article = (props: ArticleProps) => {
  return (
    <>
      <h1>{props.header}</h1>
      {props.textBlocks.map((item) => (
        <div className="article-block" key={item.title}>
          <hr />
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.image} />
          {item.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      ))}
    </>
  );
};
