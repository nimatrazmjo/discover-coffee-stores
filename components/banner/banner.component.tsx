import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import style from './banner.module.css';

const Banner = (props: any) =>{ 
  const { changeHandler } = props;
  return (
  <div className={style.container}>
    <h1 className={style.title}>
      <span className={style.title1}>Coffee</span><span className={style.title2}> Connoisser</span></h1>
    <p className={style.subTitle}>Discover your local coffee shops! </p>
    <div className={style.buttonWrapper}>
      <button className={style.button} onClick={changeHandler}> View sotre near by</button>
    </div>
  </div>
)}

export default Banner