/* eslint-disable max-len */
import React, { useEffect } from 'react';

import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
{ PostsApi, ListPostsResponse, Post } from '@optimisticninja/posts-api-js-client';
import { Grid } from '@mui/material';
import { banner } from '../../constants';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { StyledPre } from '../atoms';
import { useGlobalState } from '../../hooks/useGlobalState';
import MediaCard from '../molecules/MediaCard';
import { GlobalStateInterface } from '../../state/GlobalStateProvider';

const Home = function Home(): React.ReactElement {
  const { state, setState } = useGlobalState();
  useDocumentTitle('Home');
  useEffect(() => {
    const apiInstance = new PostsApi();
    const opts = {
      page: 0, // Number | page offset
      size: 6, // Number | page size
    };
    apiInstance.getPosts(opts).then((data: ListPostsResponse) => {
      setState((prev: GlobalStateInterface) => ({ ...prev, posts: data.posts }));
    }, (error: any) => {
      console.error(error);
    });
  }, [setState]);
  const cards = state?.posts?.map((post: Post) => (
    <Grid item xs={8} md={4} justifyContent="center">
      <MediaCard id={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} />
    </Grid>
  ));
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
      <Grid container spacing={2} justifyItems="center" justifyContent="center">
        {cards}
      </Grid>
    </>
  );
};

export default Home;
