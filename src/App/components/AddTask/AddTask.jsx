import Button from "@components/Button";
import Input from "@components/Input";

const AddTask = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input />
      <Button>Add</Button>
    </form>
  );
};

export default AddTask;
