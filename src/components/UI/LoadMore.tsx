import React from "react";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
  return <button onClick={onClick}>Load More</button>;
};

export default LoadMore;
