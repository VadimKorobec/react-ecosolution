import { Children, cloneElement, useEffect, useState } from "react";
import "./Carousel.css";

const PAGE_WIDTH = 450;

export const Carousel = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset,setOffset] = useState(0)

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  const handleClickLeft = () => {
      setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH;
        return Math.min(newOffset, 0);
      });
  };

  const handleClickRight = () => {
      setOffset((currentOffset) => {
          const newOffset = currentOffset - PAGE_WIDTH;
          const maxOffset =  -(PAGE_WIDTH * (pages.length -1))
          return Math.max(newOffset,maxOffset)
    })
  };

  return (
    <div className="main-container">
      <button type="button" onClick={handleClickLeft}>
        Left
      </button>
      <div className="window">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <button type="button" onClick={handleClickRight}>
        Right
      </button>
    </div>
  );
};
