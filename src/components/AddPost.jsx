import { useState } from "react";
import { Input } from "./Input";
import { useAddPost } from "../shared/hooks";

export const AddPost = () => {
    const { addPost, loading } = useAddPost();

    const [formState, setFormState] = useState({
        title: {
            value: '',
            isValid: false,
            showError: false,
        },
        content: {
            value: '',
            isValid: false,
            showError: false,
        },
        author: {
            value: '',
            isValid: false,
            showError: false,
        },
        img: {
            value: '',
            isValid: false,
            showError: false,
        }
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

    // const handleInputValidationOnBlur = (value, field) => {
    //     let isValid = false;
    //     switch (field) {
    //         case 'title':
    //             isValid = validatePosts(value);
    //             break;
    //         case 'content':
    //             isValid = validatePosts(value);
    //             break;
    //         case 'author':
    //             isValid = validatePosts(value);
    //             break;
    //         case 'img':
    //             isValid = validatePosts(value);
    //             break;
    //         default:
    //             break;
    //     }
    //     setFormState((prevState) => ({
    //         ...prevState,
    //         [field]: {
    //             ...prevState[field],
    //             isValid,
    //             showError: !isValid,
    //         },
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(
            formState.title.value,
            formState.content.value,
            formState.author.value,
            formState.img.value
        );
    };

    // const isSubmitButtonDisabled = loading || !formState.title.isValid || !formState.content.isValid || !formState.author.isValid || !formState.img.isValid;


    return (
        <>
            <div className="design" />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Add Post</h1>
                    <Input
                        field={'title'}
                        label="Title"
                        value={formState.title.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        // onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.title.showError}
                    // validationMessage={validatePostsMessage}
                        className="inputStyle"
                    />
                    <Input
                        field={'content'}
                        label="Content"
                        value={formState.content.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        // onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.content.showError}
                    // validationMessage={validatePostsMessage}
                    />
                    <Input
                        field={'author'}
                        label="Author"
                        value={formState.author.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        // onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.author.showError}
                    // validationMessage={validatePostsMessage}
                    />
                    <Input
                        field={'img'}
                        label="Image"
                        value={formState.img.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        // onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.img.showError}
                    // validationMessage={validatePostsMessage}
                    />
                    <button type="submit">
                        {loading ? 'Loading...' : 'Add Post'}
                    </button>
                </form>
            </div>
        </>
    );
};