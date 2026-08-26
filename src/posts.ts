import { assets } from "./assets";
import type { ThreadComment } from "./CommentCount";

export type SummaryMode = "paragraph" | "themes";
export type SentimentMode = "score" | "chart";
export type PostId = "1" | "2";

export type Theme = {
  id: string;
  label: string;
  headline: string;
  dot: string;
  comments: ThreadComment[];
  detail?: string;
  count?: number;
};

export type AdditionalComments = {
  copy: string;
  comments: ThreadComment[];
};

export type Post = {
  id: PostId;
  label: string;
  dateShort: string;
  dateLong: string;
  followers: string;
  community: string;
  overview: string;
  captionLead: string;
  captionMid: string;
  mentions: string[];
  brands: string[];
  metrics: { icon: string; value: string; label: string }[];
  media: "video" | "carousel" | "image";
  mediaSrc?: string;
  slides?: string[];
  thumb?: string;
  captionText?: string;
  captionSegments?: { text: string; mention?: boolean }[];
  scoreTone?: "positive" | "mixed" | "negative";
  postSummary: string;
  brandFocus: string;
  claimTone: "Neutral" | "Positive" | "Negative";
  claimCopy: string;
  commentCount: number;
  pulled: string;
  score: number;
  sentiment: { positive: number; neutral: number; negative: number };
  paragraph: string[];
  themes: Theme[];
  themeList?: Theme[];
  additional?: AdditionalComments;
  comments: {
    avatar: string;
    name: string;
    time: string;
    text?: string;
    image?: string;
    likes: string;
  }[];
  transcript: { time: string; text: string }[];
  duration?: string;
};

const metrics = (values: [string, string, string, string, string, string, string, string]) => [
  { icon: assets.views, value: values[0], label: "Views" },
  { icon: assets.likes, value: values[1], label: "Likes" },
  { icon: assets.comments, value: values[2], label: "Comments" },
  { icon: assets.saves, value: values[3], label: "Saves" },
  { icon: assets.shares, value: values[4], label: "Shares" },
  { icon: assets.reposts, value: values[5], label: "Reposts" },
  { icon: assets.er, value: values[6], label: "Engagement rate" },
  { icon: assets.ctr, value: values[7], label: "Click-through rate" },
];

const av = assets.avatars;
const thread = (
  avatar: string,
  name: string,
  time: string,
  text: string,
  likes = "0 likes",
  replies = "0 replies",
): ThreadComment => ({ avatar, name, time, text, likes, replies });

const highlight: Theme = {
  id: "highlight",
  label: "City recap",
  headline: "Attendees say the Summer Series stops were a highlight of their summer, thanking lululemon for bringing the event to their city.",
  dot: assets.themeDotGreen,
  count: 17,
  comments: [
    thread(av[0], "laforme_pilates", "2 days ago", "We loved being a part of St. Louis' Summer Series.", "2 likes"),
    thread(av[1], "Polow’s World | Running, Wellness & Motivation", "2 days ago", "We Had A Great Summer Series in Atlanta 🙌🏾💙", "2 likes"),
    thread(av[2], "Christa", "2 days ago", "Whistler crushed it too!", "1 like"),
    thread(av[3], "Apryl Lopez", "2 days ago", "Was so honored to be a part of this! ❤️", "2 likes", "1 reply"),
    thread(av[4], "Shayla Oulette Stonechild", "2 days ago", "Was one of my fave days of summer ❤️😍", "1 like"),
  ],
};

const hearts: Theme = {
  id: "hearts",
  label: "Emoji reactions",
  headline: "A wave of heart-eyes and heart-only emoji reactions echoes the same enthusiasm without any text.",
  dot: assets.themeDotGreen,
  count: 9,
  comments: [
    thread(av[5], "Adriana Guads | Facilitator of Mindful Experiences", "2 days ago", "😍😍😍 @shayla0h", "2 likes"),
    thread(av[6], "Mary Ann Morgan-Fried | Yoga & Wellness", "2 days ago", "Yes @lululemon ❤️", "1 like"),
    thread(av[7], "Miracle | Seattle Content Creator", "2 days ago", "❤️🥰 this looks amazing", "1 like"),
  ],
};

const nextCity: Theme = {
  id: "nextCity",
  label: "New cities",
  headline: "A few commenters ask lululemon to bring the Summer Series to their own city next.",
  dot: assets.themeDot1,
  count: 3,
  comments: [
    thread(av[8], "hannahrobbii", "2 days ago", "Next time Chicago please😢", "2 likes"),
    thread(av[9], "Greg Dawson", "2 days ago", "Summer Series UK please? 🙏🏼 😍🧘🏻‍♂️", "2 likes", "2 replies"),
    thread(av[10], "Good Energy Club", "a day ago", "Summer series in Australia’s Capital, Canberra please", "0 likes"),
  ],
};

const service: Theme = {
  id: "service",
  label: "Customer service",
  headline: "One commenter raises an unresolved customer service complaint unrelated to the event content.",
  dot: assets.themeDot2,
  count: 1,
  comments: [
    thread(
      av[11],
      "benkinglondon",
      "2 days ago",
      "@lululemon the worst customer service I have ever experienced ordered nearly two weeks ago and paid for express delivery, phone line just cuts you off and no one responds on live chat! Don’t even know how to get a refund as the item still hasn’t shipped. Any help on a way forward would be much appreciated",
      "0 likes",
      "1 reply",
    ),
  ],
};

const lewis: Theme = {
  id: "lewis",
  label: "Lewis praise",
  headline: "Fans praise Lewis by name, calling him funny and “irresistible cute,” and thank lululemon for the content.",
  dot: assets.themeDotGreen,
  count: 18,
  comments: [
    thread(av[0], "francineray", "a month ago", "Been waiting for this one! Lewis is hilarious", "50 likes", "5 replies"),
    thread(av[1], "Selam Busson", "a month ago", "Sir Lewis Hamilton good at everything 🙌", "43 likes", "2 replies"),
    thread(av[2], "Khans Goss", "a month ago", "Is there anything you can't do Lewis 😍", "7 likes", "3 replies"),
  ],
};

const fire: Theme = {
  id: "fire",
  label: "Emoji reactions",
  headline: "A wave of fire emojis, hearts, and claps registers pure excitement without any added text.",
  dot: assets.themeDotGreen,
  count: 11,
  comments: [
    thread(av[3], "georgia episkopou", "a month ago", "🔥🔥🔥", "50 likes", "5 replies"),
    thread(av[4], "Pia Sountri", "a month ago", "❤️👏", "17 likes", "1 reply"),
  ],
};

const questions: Theme = {
  id: "questions",
  label: "Product questions",
  headline: "A few commenters ask practical questions, requesting the featured shirt, episode count, and a Chicago Summer Series stop.",
  dot: assets.themeDot1,
  count: 4,
  comments: [
    thread(av[5], "kenddddall_", "a month ago", "What is the shirt called? I can't find it on the website", "14 likes"),
    thread(av[6], "Greg Dawson", "a month ago", "Next time Chicago please", "2 likes"),
  ],
};

const complaints: Theme = {
  id: "complaints",
  label: "Order issues",
  headline: "Two commenters raise complaints unrelated to the video's content.",
  dot: assets.themeDot2,
  count: 2,
  comments: [
    thread(
      av[7],
      "blackur1314",
      "a month ago",
      "Why do you always cancel my order? I placed three orders, all of which were cancelled by you.",
      "9 likes",
      "1 reply",
    ),
    thread(
      av[8],
      "Maja",
      "a month ago",
      "@lululemon Maybe instead of posting nonsense you can better train your customer service to handle issues when items in a pick up order a missing.",
      "7 likes",
    ),
  ],
};

export const posts: Record<PostId, Post> = {
  "1": {
    id: "1",
    label: "Lululemon 1",
    dateShort: "Aug 24 2026",
    dateLong: "Aug 24, 2026",
    followers: "5.86M",
    community: "Pilates",
    overview: "Lululemon's summer series included Pilates classes, inviting 50,000 participants across North America to move and connect.",
    captionLead: "",
    captionMid: "",
    mentions: ["@shayla0h"],
    brands: ["@shayla0h"],
    captionSegments: [
      {
        text: "Because one intentional flow can shift everything. This summer, 50,000 of you rolled out your mats, slowed down, and moved together. Through yoga, Pilates, and Sculpt classes hosted across North America, we created space to connect, reset, and feel. Thank you to the instructors, Ambassadors, and thousands of you who joined us. See you next summer?",
      },
    ],
    thumb: assets.post1.thumb,
    media: "video",
    mediaSrc: assets.post1.video,
    duration: "00:00 / 00:26",
    metrics: metrics(["107.72K", "1.65K", "69", "0", "89", "1.81K", "1.7%", "0%"]),
    postSummary:
      "This video showcases a summer yoga, Pilates, and Sculpt class event hosted outdoors, likely on a waterfront with a city skyline in the background. It features instructors and participants of diverse backgrounds engaging in various fitness activities. The overarching message emphasizes creating space for connection, resetting, and feeling, highlighting the positive impact of intentional movement. The event appears to be part of a larger series, possibly organized by Lululemon, as suggested by on-screen text and the tagged creator, Shayla Oulette Stonechild, who is a prominent figure in the wellness community. The video aims to evoke feelings of community, mindfulness, and personal transformation through physical activity.",
    brandFocus: "lululemon",
    claimTone: "Positive",
    claimCopy:
      "The video showcases participants wearing athletic apparel during the fitness session, but it never comments on the apparel itself; the focus is on community, mindfulness, and the event's ambiance. The implied presence of Lululemon clothing is merely incidental, with no direct evaluation of the brand's products or services. Thus, overall sentiment is positive due to the uplifting event messaging, but it is not a direct endorsement of Lululemon.",
    commentCount: 31,
    pulled: "last pulled today, 8:00am",
    score: 9,
    scoreTone: "positive",
    sentiment: { positive: 90, neutral: 6, negative: 3 },
    paragraph: [
      "Attendees overwhelmingly call their local Summer Series stop a highlight of the summer, several naming their city directly, including St. Louis, Atlanta, and Whistler ",
      "highlight",
      ". A separate wave of heart and heart-eyes emoji reactions carries the same enthusiasm with no accompanying text ",
      "hearts",
      ". A few commenters ask lululemon to bring the series to a new city next, naming Chicago and Canberra ",
      "nextCity",
      ". One commenter raises an unresolved customer service complaint, describing a nearly two-week wait on an order paid for express delivery with no response on the phone line or live chat ",
      "service",
      ".",
    ],
    themes: [highlight, hearts, nextCity, service],
    themeList: [highlight, hearts, nextCity, service],
    comments: [
      { avatar: av[9], name: "Greg Dawson", time: "2 days ago", text: "Summer Series UK please? 🙏🏼 😍🧘🏻‍♂️", likes: "2 likes 2 replies" },
      { avatar: av[8], name: "hannahrobbii", time: "2 days ago", text: "Next time Chicago please😢", likes: "2 likes" },
      { avatar: av[1], name: "Polow’s World | Running, Wellness & Motivation", time: "2 days ago", text: "We Had A Great Summer Series in Atlanta 🙌🏾💙", likes: "2 likes" },
      { avatar: av[0], name: "laforme_pilates", time: "2 days ago", text: "We loved being a part of St. Louis' Summer Series.", likes: "2 likes" },
      { avatar: av[11], name: "benkinglondon", time: "2 days ago", text: "the phone line just cuts you off and no one responds on live chat", likes: "1 reply" },
      { avatar: av[4], name: "Shayla Oulette Stonechild", time: "2 days ago", text: "Was one of my fave days of summer ❤️😍", likes: "1 like" },
    ],
    transcript: [
      { time: "00:00", text: "In a world full of distractions, we created space for our community to slow down, breathe, and move with intention." },
      { time: "00:07", text: "A place to feel, to move, to sweat, and to connect. Whether you're seeking clarity, release, or simply a reset." },
      { time: "00:18", text: "Find the space to feel. Because one intentional flow can shift everything." },
    ],
  },
  "2": {
    id: "2",
    label: "Lululemon 2",
    dateShort: "Jul 15 2026",
    dateLong: "Jul 15, 2026",
    followers: "5.86M",
    community: "Sports Ambassadors",
    overview: "Lewis Hamilton, a Lululemon sports ambassador, engages in a golf wager with Min Woo Lee.",
    captionLead: "",
    captionMid: "",
    mentions: ["@lewishamilton", "@minwoo27lee"],
    brands: ["@lewishamilton", "@minwoo27lee"],
    captionSegments: [
      { text: "Who dropped and gave 15—" },
      { text: "@lewishamilton", mention: true },
      { text: " or " },
      { text: "@minwoo27lee", mention: true },
      { text: "? Watch the full episode on YouTube and find out—link in bio ⛳️" },
    ],
    thumb: assets.post2.luluThumb,
    media: "video",
    mediaSrc: assets.post2.video,
    duration: "00:00 / 00:20",
    metrics: metrics(["2.32M", "6.01K", "193", "0", "462", "6.66K", "0.3%", "0.1%"]),
    postSummary:
      "The video features a golf interaction between Lewis Hamilton and Min Woo Lee. It begins with Lewis Hamilton proposing a wager: the loser has to do 15 push-ups. The condition is for the shot closest to the hole. Min Woo Lee counters, suggesting a handicap of four shots if it's a one-on-one situation. Hamilton negotiates down to three shots, questioning Lee's confidence. Hamilton then proceeds to take his shot, eliciting a surprised 'Oh, wow' from Lee. Hamilton is seen wearing a black polo shirt with a Lululemon logo and a white cap, while Lee is in a light-colored polo shirt and a cap. The video is set on a golf course with a body of water visible in the background.",
    brandFocus: "lululemon",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 37,
    pulled: "last pulled today, 8:00am",
    score: 9,
    scoreTone: "positive",
    sentiment: { positive: 78, neutral: 16, negative: 5 },
    paragraph: [
      "Fans repeatedly praise Lewis by name, calling him funny and “irresistible cute,” with several saying this is one of lululemon’s best-received videos yet ",
      "lewis",
      ". A separate wave of fire, heart, and clap emoji reactions carries the same energy with no accompanying text ",
      "fire",
      ". A handful of practical questions come up too, about the featured shirt, episode count, and a request to bring Summer Series to Chicago ",
      "questions",
      ". Two commenters raise real complaints unrelated to the video itself ",
      "complaints",
      ".",
    ],
    themes: [lewis, fire, questions, complaints],
    themeList: [lewis, fire, questions, complaints],
    comments: [
      { avatar: av[0], name: "francineray", time: "a month ago", text: "Been waiting for this one! Lewis is hilarious", likes: "50 likes 5 replies" },
      { avatar: av[1], name: "Selam Busson", time: "a month ago", text: "Sir Lewis Hamilton good at everything 🙌", likes: "43 likes 2 replies" },
      { avatar: av[5], name: "kenddddall_", time: "a month ago", text: "What is the shirt called? I can't find it on the website", likes: "14 likes" },
      { avatar: av[7], name: "blackur1314", time: "a month ago", text: "Why do you always cancel my order? I placed three orders, all of which were cancelled by you.", likes: "9 likes 1 reply" },
    ],
    transcript: [
      { time: "00:00", text: "Alright, what about a bit of a wager on this one? Closest to the hole... 15 push-ups right on the spot. Right here." },
      { time: "00:05", text: "Well, I don't think it's fair if it's one ball to one." },
      { time: "00:11", text: "Four shots? Let's do three. Three? Ok. You're that confident?" },
      { time: "00:16", text: "Oh, wow." },
    ],
  },
};
