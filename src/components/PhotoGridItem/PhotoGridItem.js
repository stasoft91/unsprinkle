import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcset = () => ['.jpg 1x', '@2x.jpg 2x', '@3x.jpg 3x'].map((ext) => `${src.replace('.jpg', ext)}`).join(', ')
  const srcsetForAvif = () => ['.avif 1x', '@2x.avif 2x', '@3x.avif 3x'].map((ext) => `${src.replace('.jpg', ext)}`).join(', ')

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={srcsetForAvif()} />
          <source type="image/jpeg" srcSet={srcset()} />
          <Image src={src} alt={alt}/>
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}><TagWrapper>{tag}</TagWrapper></Tag>
        ))}
      </Tags>
    </article>
  );
};

const TagWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default PhotoGridItem;
