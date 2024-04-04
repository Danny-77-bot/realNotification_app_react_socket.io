import React from 'react';
import { posts } from './posts';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {posts.map((post) => (
        <div className='flex flex-col justify-center items-center w-80 shadow-md mb-4' key={post.id}>
          <img className='w-full' src={post.img} alt={post.name} />
          <p>{post.name}</p>
          <p>{post.skill}</p>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col items-center">
              <img className='w-10 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcObWz-v-Tb1pcrg0f6SqJOcmH6tOh44wPiAjSWHlaw&s" alt="like" />
              <span>likes</span>
            </div>
            <div className="flex flex-col items-center">
              <img className='w-10 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/60/60993.png" alt="heart" />
              <span>favorites</span>
            </div>
            <div className="flex flex-col items-center">
              <img className='w-10 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZj6vWaEsHb-EdmMNK_-9YdgAanBWk8KI6qmp1DpsEkkMsotx4scuyNUi6BI-LuVdmLiE&usqp=CAU" alt="comment" />
              <span>comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
