import { useEffect, useState } from 'react';

const ThemedLayout = ({ children, themeStyle }) => {
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    if (sheet) {
      document.adoptedStyleSheets = [sheet];
    } else {
      try {
        setSheet(new CSSStyleSheet());
      } catch (error) {
        console.warn('CSSStyleSheet is not yet supported in this browser.');
      }
    }
  }, [sheet]);

  useEffect(() => {
    if (!sheet) {
      return;
    }
    sheet.replace(`
      :root {
        --bg-body: ${themeStyle['bg-body']};
        --primary: ${themeStyle['primary']};
        --fg-primary: ${themeStyle['fg-primary']};
        --inverted: ${themeStyle['inverted']};
        --fg-inverted: ${themeStyle['fg-inverted']};
        --complementary: ${themeStyle['complementary']};
        --fg-complementary: ${themeStyle['fg-complementary']};
      }
    `);
  }, [sheet, themeStyle]);

  return children;
};

export default ThemedLayout;
