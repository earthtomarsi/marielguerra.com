import Image from 'next/image';

const Education = ({
  thumbnail,
  title,
  institution,
  duration,
  annotationPrefix = '',
}) => {
  return (
    <article data-sb-field-path={annotationPrefix}>
      {renderThumbnail(thumbnail)}
      {renderTitle(title)}
      {renderInstitution(institution)}
      {renderDuration(duration)}
    </article>
  );
};

const renderThumbnail = (thumbnail) => {
  if (!thumbnail?.url) {
    return null;
  }
  return (
    <Image
      src={thumbnail.url}
      alt={thumbnail.altText}
      width="420"
      height="240"
      data-sb-field-path=".thumbnail.url#@src .thumbnail.altText#@alt"
    />
  );
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <h2 data-sb-field-path=".title">{title}</h2>;
};

const renderInstitution = (institution) => {
  if (!institution) {
    return null;
  }
  return <h3 data-sb-field-path=".institution">{institution}</h3>;
};

const renderDuration = (duration) => {
  if (!duration) {
    return null;
  }
  return <p data-sb-field-path=".duration">{duration}</p>;
};

export default Education;
