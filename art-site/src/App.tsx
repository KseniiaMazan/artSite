import React from 'react';
import s from './App.module.css';
import { PhotoComponent } from './photoComponent/PhtoComponent';

function App() {
  return (
    <div className={s.App}>
      {/* <div className={s.ImageContainer}> */}
      <div className={s.Intro}>
        {/* <h1 className={s.IntroText}>Kseniia Mazan</h1>
        <h2 className={s.IntroSubText}>Art works</h2> */}
        <img className={s.Logo} src={`${process.env.PUBLIC_URL}/assets/Logo.jpg`} />
      </div>
      <div className={s.GradientFirst} />
        <div className={s.FirstContainer}>
          <PhotoComponent imageSrc={`${process.env.PUBLIC_URL}/assets/first.jpg`}/>
        </div>
        <div className={s.GradientSecond} />
        <div className={s.SecondContainer}>
          <PhotoComponent imageSrc={`${process.env.PUBLIC_URL}/assets/second.jpg`}/>
        </div>
        <div className={s.GradientThird} />
        <div className={s.ThirdContainer}>
          <PhotoComponent imageSrc={`${process.env.PUBLIC_URL}/assets/third.jpg`}/>
        </div>
        <div className={s.GradientFourth} />
        <div className={s.FourthContainer}>
          <PhotoComponent imageSrc={`${process.env.PUBLIC_URL}/assets/fourth.jpg`}/>
        </div>
        <div className={s.GradientFifth} />
        <div className={s.FifthContainer}>
          <PhotoComponent imageSrc={`${process.env.PUBLIC_URL}/assets/fifth.jpg`}/>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
