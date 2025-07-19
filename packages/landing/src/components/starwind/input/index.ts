import Input from "./Input.astro";
import InputFeedback from "./InputFeedback.astro";
import InputLabel from "./InputLabel.astro";
import InputWrapper from "./InputWrapper.astro";

export { Input, InputFeedback, InputLabel, InputWrapper };

export default {
	Root: InputWrapper,
	Label: InputLabel,
	Input: Input,
	Feedback: InputFeedback,
};
