import { useState } from "react";
import { Input } from "./Input";
import { useAddPost } from "../shared/hooks";

export const AddPost = () => {
  const { addPost, loading } = useAddPost();

  const [formState, setFormState] = useState({
    title: {
      value: "",
      isValid: false,
      showError: false,
    },
    content: {
      value: "",
      isValid: false,
      showError: false,
    },
    author: {
      value: "",
      isValid: false,
      showError: false,
    },
    img: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(
      formState.title.value,
      formState.content.value,
      formState.author.value,
      formState.img.value
    );
  };

  return (
    <>
      <div className="design" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Add Post</h1>
          <Input
            field={"title"}
            label="Title"
            value={formState.title.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            className="inputStyle"
          />
          <Input
            field={"content"}
            label="Content"
            value={formState.content.value}
            onChangeHandler={handleInputValueChange}
            type="text"
          />
          <Input
            field={"author"}
            label="Author"
            value={formState.author.value}
            onChangeHandler={handleInputValueChange}
            type="text"
          />
          <Input
            field={"img"}
            label="Image"
            value={formState.img.value}
            onChangeHandler={handleInputValueChange}
            type="text"
          />
          <button type="submit">{loading ? "Loading..." : "Add Post"}</button>
        </form>
      </div>
    </>
  );
};
