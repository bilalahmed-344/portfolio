type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="index-page">{children}</div>;
};

export default Container;
