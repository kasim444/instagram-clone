import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import './post.css'

function Post({ username, caption, imageUrl }) {
  return (
    <Card className='post'>
      <CardHeader
        avatar={<Avatar>{username[0].toUpperCase()}</Avatar>}
        action={
          <IconButton aria-label='settings'>
            <MoreHorizIcon />
          </IconButton>
        }
        title={username}
      />
      <CardMedia image={imageUrl} title={caption} className='post__media' />
      <CardContent>
        <Typography variant='body2' component='p'>
          <b>{username}</b> {caption}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Post
