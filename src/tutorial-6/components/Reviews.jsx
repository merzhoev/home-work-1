import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

function Reviews({ items }) {
  return (
    <div className="reviews">
      <h3 className="reviews__title">Отзывы:</h3>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {items.length ? (
          items.map(({ fullName, text, createdAt }, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{fullName[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <div className="list-item__top">
                    <Typography component="div" color="text.primary">
                      {fullName}
                    </Typography>
                    <Typography sx={{ fontSize: '12px' }} component="div" color="text.secondary">
                      {createdAt}
                    </Typography>
                  </div>
                }
                secondary={text}
              />
            </ListItem>
          ))
        ) : (
          <p>Напишите отзыв первым!</p>
        )}
      </List>
    </div>
  );
}

export default Reviews;
