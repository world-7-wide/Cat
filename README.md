<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The ultimate</title>
      <style>
      .cardss {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    background-color: radial-gradient(40% 90%, black white);
    z-index: 3;
    background: radial-gradient(350% 100%, rgb(0, 0, 0), rgb(84, 78, 78));
}
.containerOfFlipCard {
    position: relative;
    height: 400px;
    width: 350px;
}
.thecard {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: CARD infinite ease-in-out 5s;
}
.thecard:hover {
    animation: CARD infinite ease-in-out 5s paused;
}
@keyframes CARD {
    0% {
        transform: rotateY(0deg) rotateZ(0deg);
    }
    50% {
        transform: rotateY(180deg) rotateZ(0deg);
    }
    100% {
        transform: rotateY(360deg) rotateZ(0deg);
    }
}

.front {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    color: #000000;
    text-align: center;
    font-size: 4rem;
    align-items: center;
    display: flex;
    border: 10px solid rgb(50, 50, 50);
    background-color: #ff34344c;
}
.back {
    width: 100%;
    height: 100%;
    background-image: url(frog.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    backface-visibility: hidden;
    color: #ffffff;
    transform: rotateY(180deg);
    border: 10px solid rgb(177, 176, 176);
}
.containerOfFlipCard1 {
    position: relative;
    height: 360px;
    width: 250px;
    border-radius: 5%;
    animation: CARD1 infinite ease-in-out 5s;
    z-index: 1;
}
.thecard1 {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: CARD1 infinite ease-in-out 5s;
}
.thecard1:hover {
    animation: CARD1 infinite ease-in-out 5s paused;
}
.containerOfFlipCard1:hover {
    animation: CARD1 infinite ease-in-out 5s paused;
}
@keyframes CARD1 {
    0% {
        transform: rotateY(0deg) rotateZ(40deg) scaleY(10px);

        left: 150px;
    }
    50% {
        transform: rotateY(180deg) rotateZ(25deg) rotateZ(360deg);
        left: 0px;
    }
    100% {
        transform: rotateY(360deg) rotateZ(45deg) scaleY(10px);
        left: 150px;
    }
}

.front1 {
    width: 100%;
    height: 100%;
    background-image: url(backside.png);
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    backface-visibility: hidden;
    color: #ffffff;

    border-radius: 5%;
}
.back1 {
    width: 100%;
    height: 100%;
    background-image: url(Daco_4217100.png);
    background-color: white;
    background-repeat: no-repeat;
    position: absolute;
    background-size: 93%;
    background-position: center;
    backface-visibility: hidden;
    color: #ffffff;
    transform: rotateY(180deg);
    border-radius: 5%;
}

.containerOfFlipCard3 {
    position: relative;
    height: 360px;
    width: 250px;
    border-radius: 5%;
    animation: CARDDDD infinite ease-in-out 5s;
}
.thecard3 {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: CARDDDD infinite ease-in-out 5s;
}
.containerOfFlipCard3:hover {
    animation: CARDDDD infinite ease-in-out 5s paused;
}
.thecard3:hover {
    animation: CARDDDD infinite ease-in-out 5s paused;
}
@keyframes CARDDDD {
    0% {
        transform: rotateY(0deg) rotateZ(40deg) scaleY(10px);
        right: 180px;
    }
    50% {
        transform: rotateY(180deg) rotateZ(20deg) rotateZ(720deg);
        right: 0px;
    }
    100% {
        transform: rotateY(360deg) rotateZ(20deg) scaleY(5px);
        right: 180px;
    }
}

.front3 {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    color: #000000;
    text-align: center;
    font-size: 4rem;
    display: flex;
    background-image: url(/Daco_4216281.png);
    background-size: 99%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
    border-radius: 5%;
}
.back3 {
    width: 100%;
    height: 100%;
    background-image: url(backside.png);
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    backface-visibility: hidden;
    color: #ffffff;
    transform: rotateY(180deg);
    border-radius: 5%;
}
.cube {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;

    animation: cubic 4s reverse linear infinite;
}
@keyframes cubic {
    0% {
        transform: rotateX(10deg) rotateY(0deg);
    }
    50% {
        transform: rotateX(-30deg) rotateY(180deg);
    }
    100% {
        transform: rotateX(10deg) rotateY(360deg);
    }
}
.cube:hover {
    animation: cubic 4s reverse linear infinite paused;
}
.cube div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}
.cube div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            217deg,
            rgba(255, 0, 0, 0.8),
            rgba(255, 0, 0, 0) 70.71%
        ),
        linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
}
.top {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 0;
    height: 0;
    background: linear-gradient(
            217deg,
            rgba(255, 0, 0, 0.8),
            rgba(255, 0, 0, 0) 70.71%
        ),
        linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 0.2) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 1) 70.71%);
    transform: rotateX(90deg) translateZ(150px);
}
.figu {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 0;
    height: 0;
    background: white;
    transform: rotateX(90deg) translateZ(-100px);
}
.bottom {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 0;
    height: 0;
    background: linear-gradient(
            217deg,
            rgba(255, 255, 255, 0.8),
            rgba(0, 0, 0, 0) 70.71%
        ),
        linear-gradient(127deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.2) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 0, 0.1), rgb(255, 255, 255) 70.71%);
    transform: rotateX(90deg) translateZ(-150px);
}
/* shadow 
.bottom::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            217deg,
            rgba(255, 0, 0, 0.8),
            rgba(255, 0, 0, 0) 70.71%
        ),
        linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    transform: translateZ(-50px);
    filter: blur(20px) brightness(1);
    box-shadow: 0 0 120px rgba(145, 145, 145, 0.2),
        0 0 200px rgba(145, 145, 145, 0.4), 0 0 300px rgba(145, 145, 145, 0.6),
        0 0 400px rgba(145, 145, 145, 0.8);
}
*/
.containerOfFlipCardIN {
    position: relative;
    height: 80px;
    width: 60px;
    left: 120px;
    bottom: -120px;
    transform: rotateY(90deg) rotateZ(-500deg);
    border-radius: 5%;
    animation: CARDIN infinite ease-in-out 5s;
    z-index: 1;
}
.thecardIN {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: CARDIN infinite ease-in-out 5s;
}
.thecardIN:hover {
    animation: CARDIN infinite ease-in-out 5s paused;
}
.containerOfFlipCardIN:hover {
    animation: CARDIN infinite ease-in-out 3s paused;
}
@keyframes CARDIN {
    0% {
        transform: rotateY(0deg) rotateZ(100deg) scaleY(10px);
    }

    100% {
        transform: rotateY(300deg) rotateZ(90deg) scaleY(200px);
    }
}

.frontIN {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-image: url(backside.png);
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    backface-visibility: hidden;
    color: #ffffff;

    border-radius: 5%;
}
.backIN {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-image: url(Daco_4217100.png);
    background-color: white;
    background-repeat: no-repeat;
    position: absolute;
    background-size: 93%;
    background-position: center;
    backface-visibility: hidden;
    color: #ffffff;
    transform: rotateY(180deg);
    border-radius: 5%;
}

      </style>
    </head>
    <body>
        <section class="cardss">
            <article class="containerOfFlipCard1">
                <div class="thecard1">
                    <div class="front1">
                        <h3></h3>
                    </div>
                    <div class="back1"></div>
                </div>
            </article>
            <article class="containerOfFlipCard3">
                <div class="thecard3">
                    <div class="front3"></div>
                    <div class="back3"></div>
                </div>
            </article>
        </section>
            </article>
           
       
    </body>
</html>

