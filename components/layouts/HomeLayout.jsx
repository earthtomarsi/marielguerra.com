import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ThemedLayout from './ThemedLayout';
import * as S from './HomeLayout.styles';

const HomeLayout = ({ page, themeStyle }) => {
  return (
    <ThemedLayout themeStyle={themeStyle}>
      <Head>
        <meta name="theme-color" content="#000000" />
      </Head>

      <S.PageWrapper data-sb-object-id={page.__id}>
        {renderBackground(page.background)}

        <S.PageContent>
          {renderTitle(page.title)}
          {renderLink(page.link)}
        </S.PageContent>
      </S.PageWrapper>
    </ThemedLayout>
  );
};

const renderBackground = (background) => {
  if (!background?.url) {
    return null;
  } else if (background.type === 'Image') {
    return (
      <S.BackgroundWrapper>
        <Image
          src={background.url}
          alt={background.altText}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          data-sb-field-path=".background.url#@src .background.altText#@alt"
        />
      </S.BackgroundWrapper>
    );
  } else if (background.type === 'Video') {
    return (
      <S.BackgroundWrapper>
        <S.BackgroundVideo
          src={background.url}
          title={background.title}
          autoPlay
          loop
          muted
          playsInline
        ></S.BackgroundVideo>
      </S.BackgroundWrapper>
    );
  }
  return null;
};

const renderTitle = (title) => {
  if (!title) {
    return null;
  }
  return <S.Title data-sb-field-path=".title">{title}</S.Title>;
};

const renderLink = (link) => {
  if (!link) {
    return null;
  }
  return (
    <Link href={link.url} passHref>
      <S.Link data-sb-field-path=".link.url#@href .link.label">
        {link.label}
      </S.Link>
    </Link>
  );
};

export default HomeLayout;
