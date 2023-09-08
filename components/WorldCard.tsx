/* eslint-disable @next/next/no-img-element */
import React from "react";

function WorldCard(props: {
  imgUrl: string;
  textStyles: string;
  title: string;
}) {
  const { imgUrl, textStyles, title } = props;
  return (
    <div className={textStyles}>
      <img src={imgUrl} alt='people' className='w-full h-full rounded-[24px]' />
      <div className='people-container'>
        <div className='flex'>
          <div className='group-image-container'>
            <img src='/icon-1.png' alt='people' className='group-image-a' />
            <img src='/icon-2.png' alt='people' className='group-image-b' />
            <img src='/icon-3.png' alt='people' className='group-image-c' />
          </div>
          <p className='group-text'>+264 has joined</p>
        </div>
        <p className='people-text'>{title}</p>
      </div>
    </div>
  );
}

export function AvatarCard(props: { textStyles: string; imgUrl: string }) {
  return (
    <div className={props.textStyles}>
      <div className='people-wrap'>
        <img src='/Union.png' alt='avatar' className='w-full h-full ' />
        <img src={props.imgUrl} alt='people' className='people-location' />
      </div>
    </div>
  );
}

export default WorldCard;
