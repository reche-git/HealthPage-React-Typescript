export const Message = ({msg, bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: bgColor,
        fontWeight: "bold",
    };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{__html: msg}}/>
    </div>
  );
};

export default Message;
