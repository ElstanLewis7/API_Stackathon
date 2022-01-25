import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const infoCards = [
  {
    id: 1,
    color: '#00838f',
    title: 'Latest News',
    text: "What's the latest news",
  },
  {
    id: 2,
    color: '#1565c0',
    title: 'News by Categories',
    info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'What is the latest news on technology',
  },
  {
    id: 3,
    color: '#4527a0',
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 5, Smartphones, JavaScript..',
    text: 'Show me anything on coding',
  },
  {
    id: 4,
    color: '#283593',
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed...',
    text: 'Give me the news from CNN',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              key={infoCard.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(' ')[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
          >
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
