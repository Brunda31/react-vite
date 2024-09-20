let count = 0;

const Message = () => {
  // let count = 0; //inside, same output for components pure
  console.log("Message called ", count);
  count++;
  console.log("Message called ", count); // doesnt call count1 and count 3 because of strict mode in react. checks the machine.
  return <div> Message {count} </div>;
};

export default Message;
