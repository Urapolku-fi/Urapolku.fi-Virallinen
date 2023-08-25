import React, { useRef, useEffect, useCallback } from "react";
import "../css/HoverTest.css";
import Articles from "./Dashboard-components/Articles";
import News from "./Dashboard-components/News";
const boxes = [
  {
    header:
      "This is a ball with 100% opacity on hover - Ball size is 30px x 30px",
    index: 1,
  },
  {
    header: "This is a ball with 80% opacity on hover Ball size is 30px x 30px",
    index: 2,
  },
  {
    header: "This is a ball with 60% opacity on hover Ball size is 30px x 30px",
    index: 3,
  },
  {
    header: "This is a ball with 50% opacity on hover Ball size is 30px x 30px",
    index: 3,
  },
];
const cards = [
  {
    header: "This is a card : ball scale is 40px x 40px",
    index: 1,
  },
  {
    header: "This is a card : ball scale is 60px x 60px",
    index: 2,
  },
  {
    header: "This is a card : ball scale is 70px x 70px ",
    index: 3,
  },
];
const articlesData = [
  {
    backgroundImage: "/pictures/temp/First-article-image.png",
    text: "Cracking the Code: Unconventional Strategies for Landing Your Dream Job",
    url: "/",
  },
  {
    backgroundImage: "/pictures/temp/Second-article-image.png",
    text: "The Art of Becoming: Uncover Your True Self and Harness Your Potential",
    url: "/",
  },
];

const BoxStyle = {
  width: "100%",
  height: "200px",
  backgroundColor: "white",
  padding: "2%",
};
const ArticleStyle = {
  width: "30%",
  height: "400px",
  backgroundColor: "white",
  padding: "2%",
};
const Ball = () => {
  const ballRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let ballX = 0;
  let ballY = 0;
  const speed = 0.2;

  const animate = useCallback(() => {
    if (ballRef && ballRef.current) {
      const distX = mouseX - ballX;
      const distY = mouseY - ballY;
      ballX = ballX + distX * speed;
      ballY = ballY + distY * speed;
      ballRef.current.style.left = ballX + "px";
      ballRef.current.style.top = ballY + "px";
    }
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMouseMove = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", onMouseMove);

    animate();

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [animate]);

  return <div ref={ballRef} className="ball"></div>;
};

const Box = (props) => {
  return (
    <div className={`box${props.index}`} style={BoxStyle}>
      <h3>{props.text}</h3>
      <Ball />
    </div>
  );
};
const Card = (props) => {
  return (
    <div className={`card${props.index}`} style={ArticleStyle}>
      <h3>{props.text}</h3>
      <Ball />
    </div>
  );
};
const HoverTest = () => {
  console.log(boxes);
  return (
    <div className="test">
      <div
        className="Boxes"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {boxes.map((item, i) => (
          <Box text={item.header} key={i} index={item.index} />
        ))}
      </div>
      <div
        className="Articles"
        style={{ display: "flex", gap: "20px", margin: "5%" }}
      >
        {cards.map((item, i) => (
          <Card text={item.header} key={i} index={item.index} />
        ))}
      </div>
      <div className="Dashboard-card" style={{ gap: "20px", color: "white" }}>
        <h1>This is 1 article card and 1 news card from Dashboard.</h1>
        <h1>(The ball is pretty buggy on these will fix later)</h1>
        <h1>The opacity is 80% on hover. Size is 30px x 30px</h1>
        <div className="Articles" style={{ display: "flex" }}>
          <Articles articles={articlesData} />
          <Ball />
        </div>
      </div>
      <h1>Opacity is 60% on hover. Size is 40px x 40px</h1>
      <div className="News-cards">
        <News news={articlesData} />
        <Ball />
      </div>
    </div>
  );
};
export default HoverTest;
