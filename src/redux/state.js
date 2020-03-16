let state = {
    profilePage :{
        posts:[
        { id: 1, message: "Hello buddy!", likesCounts: 12 },
        { id: 2, message: "What is your name?", likesCounts: 12 }
    ]},
    messagesPage : {
    dialogs:[
  { id: 1, name: "Natalya" },
  { id: 2, name: "Rudick" },
  { id: 3, name: "Denis" },
  { id: 4, name: "David" },
  { id: 5, name: "Rojer" },
  { id: 6, name: "Max" }
],
    messages: [
  { id: 1, message: "Yo!" },
  { id: 2, message: "Hello my friend" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "I am Ok" }
]}
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message:postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
}
export default state;