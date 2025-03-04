interface HeadingProps {
  title: string;
  position?: "left" | "center" | "right";
}

const Heading = ({ title, position = "center" }: HeadingProps) => {
  const getPositionClass = () => {
    switch (position) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <h2
      className={`text-primaryBlack text-2xl font-bold ${getPositionClass()}`}
    >
      {title}
    </h2>
  );
};

export default Heading;
