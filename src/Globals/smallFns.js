export const  TableData = (props) => {
  return (
    <td className="md:p-5 md:px-8 p-2 px-2  text-white text-[14px]">
      {props.children}
    </td>
  );
};