import { createMemoryHistory } from "history";

const instance = createMemoryHistory();

export const navigateTo = (path) => instance.push(path);
export const goBack = () => instance.goBack();

export default instance;
