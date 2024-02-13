/** @format */
type Props = {
  fname?: string;
  className?: string;
  fulname?: string;
  size?: number;
};
export const MyImage = (props: Props) => {
  let fname = "./" + props.fname;
  let fulname = props.fulname;
  let className = props.className;
  let size = props.size + "px";
  return (
    <img
      className={className}
      width={size}
      src={props.fname ? fname : fulname}
    />
  );
};
