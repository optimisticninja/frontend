/* eslint-disable max-len */
import React, { useEffect } from 'react';

import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
{ PostsApi, ListPostsResponse } from '@optimisticninja/posts-api-js-client';
import { Grid } from '@mui/material';
import { banner } from '../../constants';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { StyledPre } from '../atoms';
import { useGlobalState } from '../../hooks';
import { GlobalStateInterface } from '../../state/GlobalStateProvider';
import { Posts } from '../organisms';

const Home = function Home(): React.ReactElement {
  const { setState } = useGlobalState();
  useDocumentTitle('Home');
  useEffect(() => {
    const apiInstance = new PostsApi();
    const opts = {
      page: 0, // Number | page offset
      size: 6, // Number | page size
    };
    apiInstance.getPosts(opts).then((data: ListPostsResponse) => {
      setState((prev: GlobalStateInterface) => ({ ...prev, posts: data.posts }));
    }, (error: unknown) => {
      console.error(error);
    });
  }, [setState]);
  return (
    <>
      <Grid container spacing={2} xs justifyItems="center" justifyContent="center">
        <Grid item>

          <StyledPre
            baseFontSize="0.09em"
            largeFontSize="0.05em"
            mediumFontSize="0.025em"
            smallFontSize="0.025em"
          >
            {banner}
          </StyledPre>
        </Grid>
      </Grid>
      <Posts />
    </>
  );
};

export default Home;
