/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownListItem = function MarkdownListItem(props: any): React.ReactElement {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
};

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
    code: {
      component: SyntaxHighlighter,
      props: { style: dark },
    },
  },
};

const Markdown = function Markdown(props: any): React.ReactElement {
  return <ReactMarkdown options={options} {...props} />;
};

export default Markdown;
