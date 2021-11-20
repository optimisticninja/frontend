/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// eslint-disable-next-line max-len
const MarkdownListItem = function MarkdownListItem(props: unknown): React.ReactElement {
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
    pre: {
      component: SyntaxHighlighter,
      props: { style: irBlack },
    },
    code: {
      component: SyntaxHighlighter,
      props: { style: irBlack },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Markdown = function Markdown(props: any): React.ReactElement {
  return <ReactMarkdown options={options} {...props} />;
};

export default Markdown;
