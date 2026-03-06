export type MenuCard = {
  title: string;
  desc: string;
  price: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  by: string;
};

export const menuCards: readonly MenuCard[] = [
  {
    title: "House Blend Latte",
    desc: "ミルクの甘さとナッツの余韻。毎日飲める定番。",
    price: "¥640",
    image:
      "https://images.unsplash.com/photo-1617821573011-408cbbe44416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzEwNjg3NjF8&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Single Origin Pour Over",
    desc: "果実感のある香りを、温度帯ごとに楽しむ一杯。",
    price: "¥780",
    image:
      "https://images.unsplash.com/photo-1618666185791-a38c6a412428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzEwNjg3NjJ8&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Weekend Beans 200g",
    desc: "朝と夜で違う表情。自宅用に人気の季節ブレンド。",
    price: "¥1,680",
    image:
      "https://images.unsplash.com/photo-1690983325192-a4c13c2e331d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzEwNjg3NjJ8&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    quote: "朝の会議前に必ず寄ります。香りだけで気持ちが切り替わる。",
    by: "- Product Manager / 30s",
  },
  {
    quote: "豆を買って帰るようになって、家の朝も楽しみになりました。",
    by: "- Designer / 20s",
  },
  {
    quote: "接客が丁寧で、好みに合わせた提案がいつも的確です。",
    by: "- Engineer / 40s",
  },
];
