interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="loading">
      <p>{message}</p>
    </div>
  );
};

export default Loading;
