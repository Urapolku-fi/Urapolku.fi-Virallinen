import React, { useRef, useEffect, useCallback } from "react";

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

export default Ball;
