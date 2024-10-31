const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      author: 1, // reference to user with id 1
      createdAt: "2023-02-20T14:30:00.000Z"
    },
    {
      id: 2,
      title: "Consectetur adipiscing elit",
      content: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: 2, // reference to user with id 2
      createdAt: "2023-02-22T10:00:00.000Z"
    },
    {
      id: 3,
      title: "Sed sit amet nulla auctor",
      content: "Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      author: 1, // reference to user with id 1
      createdAt: "2023-02-25T12:00:00.000Z"
    }
  ];
  
  module.exports = posts;