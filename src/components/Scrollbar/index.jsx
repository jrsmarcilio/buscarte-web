import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };
  return (
    <div style={{ ...style, ...thumbStyle,  msOverflowY: "auto", overflowX: 'hidden' }} {...props} />
  );
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

export default CustomScrollbars;
