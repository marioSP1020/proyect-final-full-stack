import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoItem = ({videoData,view}) => {
  const { videos_id, author_id, name_author, link, filetype, height, width } = videoData;
//photos_id, author_id, name_author, src_original, src_tiny, height, width
//const { _id, Title, Year, Genre, Actors, Poster } = filmData;

  // const buttonToRender = () => {
  //   let link;
  //   switch (view) {
  //     case 'list':
  //       //link = <Link to={`/film/${_id}`}>Show</Link>
  //       break;
      
  //     // case 'show':
  //     //   link = <Link to={`/film/${_id}/edit`}>Edit</Link>
  //     //   break;
      
  //     default:
  //       link = <></>;
  //       break;
  //   }

  //   return link;

  // };

  return (
    
    <article className="photo">
      <h3>{name_author}</h3>
      <video controls height={300} width={400}>        
        <source src={link} type={filetype} />        
      </video>
                        {/* //pendiente */}
    </article>  
    
  )
}

export default VideoItem;



/*
{buttonToRender()}
*/