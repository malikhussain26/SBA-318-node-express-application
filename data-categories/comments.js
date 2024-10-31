const comments = [
    {
      id: 1,
      postId: 1, // reference to post with id 1
      author: 2, // reference to user with id 2
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2023-02-20T15:00:00.000Z"
    },
    {
      id: 2,
      postId: 1, // reference to post with id 1
      author: 1, // reference to user with id 1
      content: "Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      createdAt: "2023-02-20T16:00:00.000Z"
    },
    {
      id: 3,
      postId: 2, // reference to post with id 2
      author: 3, // reference to user with id 3
      content: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2023-02-22T11:00:00.000Z"
    }
  ];
  
  module.exports = comments;