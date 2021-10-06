let productsDB = [
    {
      id: 1,
      title: "headphone item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "large",
      imageUrl: "../images/headphone.jpg",
      qty: 1,
      isMe: "N",
      price: 120,
    },
    {
      id: 2,
      title: "labtop item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "small",
      imageUrl: "../images/lab.jpg",
      qty: 1,
      isMe: "N",
      price: 250,


    },
    {
      id: 3,
      title: "watch item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "medium",
      imageUrl: "../images/watch.jpg",
      qty: 1,
      isMe: "N",
      price: 130,


    },
    {
      id: 4,
      title: "glasses item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "large",
      imageUrl: "../images/glasses.jpg",
      qty: 1,
      isMe: "N",
      price: 100,

    },
    {
      id: 5,
      title: "Bag item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "medium",
      imageUrl: "../images/product1.jpg",
      qty: 1,
      isMe: "N",
      price: 90,

    },
    {
      id: 6,
      title: "Suit-shirt item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "large",
      imageUrl: "../images/product2.jpg",
      qty: 1,
      isMe: "N",
      price: 115,

    },
    {
      id: 7,
      title: "Shoas item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "small",
      imageUrl: "../images/product3.jpg",
      qty: 1,
      isMe: "N",
      price: 100,

    },
    {
      id: 8,
      title: "Formal item",
      desc: "Lorem ipsum, dolor sit amet consectetur.",
      size: "large",
      imageUrl: "../images/product5.jpg",
      qty: 1,
      isMe: "N",
      price: 190,

    },
  ];
  
  localStorage.setItem("products", JSON.stringify(productsDB));