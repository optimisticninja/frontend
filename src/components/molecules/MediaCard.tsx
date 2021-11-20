import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

type Props = {
    id?: string,
    title?: string,
    summary?: string,
    imageUrl?: string
};

// eslint-disable-next-line max-len
const MediaCard = function MediaCard({
  id, title, summary, imageUrl,
}: Props): React.ReactElement {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/posts/${id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

MediaCard.defaultProps = {
  id: '00000000-0000-0000-0000-000000000000',
  title: 'title',
  summary: 'summary',
  imageUrl: 'https://placeholder.com/image.png',
};

export default MediaCard;
