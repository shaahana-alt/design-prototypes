import { assets } from "./assets";
import type { ThreadComment } from "./CommentCount";

export type SummaryMode = "paragraph" | "themes";
export type SentimentMode = "score" | "chart";
export type PostId = "1" | "2" | "3";

export type Theme = {
  id: string;
  label: string;
  headline: string;
  dot: string;
  comments: ThreadComment[];
  detail?: string;
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

const buy: Theme = {
  id: "buy",
  label: "Purchase intent",
  headline: "People want to buy the Enliven cleaner",
  dot: assets.themeDot1,
  comments: [
    { avatar: assets.shakira, name: "@allthingsshakira", time: "2 days ago", text: "I totally need this to do the scrubbing for me 😥", likes: "2 likes", replies: "0 replies" },
    { avatar: assets.avatars[7], name: "@babesontrend", time: "7 days ago", text: "Wow I need", likes: "1 like", replies: "0 replies" },
    { avatar: assets.avatars[11], name: "@itskristinabuehrig", time: "6 days ago", text: "this looks like a lifesaver", likes: "1 like", replies: "0 replies" },
  ],
};

const cheaper: Theme = {
  id: "cheaper",
  label: "Cheaper alternatives",
  headline: "The product isn't worth the money or the time",
  dot: assets.themeDot2,
  comments: [
    { avatar: assets.avatars[9], name: "@occasionaloranges", time: "3 days ago", text: "u can get something like this for $15 at ur local tj maxx btw", likes: "2 likes", replies: "0 replies" },
    { avatar: assets.avatars[2], name: "@mochi_potato12", time: "4 days ago", text: "Or hear me out, you wash it with soap and your hand, in the bathroom sink, without spending excess money you don't need to spend", likes: "5 likes", replies: "0 replies" },
    { avatar: assets.avatars[4], name: "@tracy.cline1980", time: "5 days ago", text: "hot water and Dawn works great", likes: "0 likes", replies: "0 replies" },
  ],
};

const care: Theme = {
  id: "care",
  label: "Brush care",
  headline: "The tutorial itself is being corrected",
  dot: assets.themeDot3,
  comments: [
    { avatar: assets.avatars[3], name: "Cheryl Goguen", time: "7 days ago", text: "No don’t let them dry like that. Water will go down inside it and the metal will tarnish or bacteria will grow", likes: "5 likes", replies: "0 replies" },
    { avatar: assets.avatars[5], name: "@chands", time: "6 days ago", text: "don't leave water sitting in the ferrule while it dries", likes: "2 likes", replies: "0 replies" },
    { avatar: assets.avatars[6], name: "@emmalee", time: "5 days ago", text: "that drying position will get water inside and it can tarnish", likes: "1 like", replies: "0 replies" },
  ],
};

const attack: Theme = {
  id: "attack",
  label: "Presenter thread",
  headline: "Presenter is being attacked, and the community is pushing back",
  dot: assets.themeDot1,
  comments: [
    { avatar: assets.avatars[1], name: "@morelikemak", time: "5 days ago", text: "Holly chopped", likes: "13 likes", replies: "0 replies" },
    { avatar: assets.avatars[12], name: "@pawasocial", time: "3 days ago", text: "post urself", likes: "15 likes", replies: "0 replies" },
    { avatar: assets.avatars[0], name: "@fluffy.qiqi", time: "3 days ago", text: "why are we being mean for no reason", likes: "8 likes", replies: "0 replies" },
    { avatar: assets.avatars[8], name: "@citrusstoner", time: "7 days ago", text: "putting someones looks down doesnt make you any prettier", likes: "0 likes", replies: "0 replies" },
    { avatar: assets.avatars[10], name: "@may_smith652", time: "6 days ago", text: "You are a miserable person", likes: "1 like", replies: "0 replies" },
  ],
};

const praise: Theme = {
  id: "praise",
  label: "Photo praise",
  headline: "The photo is getting strong praise",
  dot: assets.themeDotGreen,
  detail: "Commenters call her “stunning,” “iconic,” and “a timeless beauty.”",
  comments: [
    { avatar: assets.post2.lindsey, name: "Lindsey Turcios", time: "a day ago", text: "She’s a timeless beauty 👏", likes: "1 like", replies: "1 reply" },
    { avatar: assets.post2.huda, name: "Huda Kasim", time: "2 days ago", text: "She’s just stunning", likes: "1 like", replies: "1 reply" },
    { avatar: assets.post2.chands, name: "Chands 🍒", time: "2 days ago", text: "So beautiful 😍", likes: "1 like", replies: "1 reply" },
    { avatar: assets.post2.madison, name: "Madison Ortiz | Beauty & Fashion Creator", time: "2 days ago", text: "Love 😍", likes: "1 like", replies: "1 reply" },
    { avatar: assets.post2.chloe, name: "Chloe Thorp", time: "17 hours ago", text: "🙌🏼 Absolutely iconic! ✨", likes: "0 likes", replies: "0 replies" },
    { avatar: assets.post2.huda, name: "Huda Kasim", time: "2 days ago", text: "this photo is everything", likes: "1 like", replies: "0 replies" },
  ],
};

const cancel: Theme = {
  id: "cancel",
  label: "Cancel subscription",
  headline: "Customers are struggling to cancel their subscriptions",
  dot: assets.themeDot2,
  detail: "One commenter calls the process “so difficult,” while others direct them to customer support.",
  comments: [
    { avatar: assets.post2.lisbeth, name: "Lisbeth Ceballos", time: "2 days ago", text: "Make a tutorial for how to cancel Ipsy subscription:) it's so difficult", likes: "8 likes", replies: "4 replies" },
    { avatar: assets.ipsy, name: "ipsy", time: "2 days ago", text: "Hi! Please DM us and we'll help you cancel.", likes: "2 likes", replies: "1 reply" },
  ],
};

const lookalike: Theme = {
  id: "lookalike",
  label: "Look-alike contact",
  headline: "A support email that isn’t on Ipsy’s domain",
  dot: assets.themeDot3,
  detail: "A commenter replies with a support email that isn’t on Ipsy’s own domain.",
  comments: [
    { avatar: assets.avatars[9], name: "rocky", time: "3 days ago", text: "email ipsysupport-help@gmail.com they got back to me in like 10 min", likes: "1 like", replies: "2 replies" },
  ],
};

const elf: Theme = {
  id: "elf",
  label: "Brand engagement",
  headline: "e.l.f. cosmetics engages playfully on the post",
  dot: assets.themeDotGreen,
  detail: "e.l.f. comments “Real as e.l.f.” and Ipsy replies in kind.",
  comments: [
    { avatar: assets.post3.elf, name: "e.l.f. Cosmetics", time: "7 days ago", text: "Real as e.l.f. 😭😭", likes: "1 like", replies: "1 reply" },
  ],
};

const relate: Theme = {
  id: "relate",
  label: "Relatable",
  headline: "Content feels relatable with “this is so me” reactions",
  dot: assets.themeDotGreen,
  comments: [
    { avatar: assets.post3.ashley, name: "Ashley 🫶🏻", time: "7 days ago", text: "Why is this me omg 😂😂", likes: "1 like", replies: "1 reply" },
    { avatar: assets.post3.dandan, name: "丹丹", time: "7 days ago", text: "So real!! 😭😅", likes: "1 like", replies: "1 reply" },
    { avatar: assets.post3.ashley, name: "Ashley 🫶🏻", time: "7 days ago", text: "this is so me", likes: "1 like", replies: "0 replies" },
  ],
};

const disco: Theme = {
  id: "disco",
  label: "Disco aside",
  headline: "One comment makes an unrelated “disco disco” reference",
  dot: assets.themeDot1,
  comments: [
    { avatar: assets.post3.holly, name: "ASHLEY HOLLY", time: "6 days ago", text: "disco disco 🕺🏻", likes: "0 likes", replies: "0 replies" },
  ],
};

export const posts: Record<PostId, Post> = {
  "1": {
    id: "1",
    label: "Ipsy 1",
    dateShort: "Aug 17 2026",
    dateLong: "Aug 17, 2026",
    followers: "3.3M",
    community: "Beauty Community",
    overview: "A creator shows how to clean makeup brushes and sponges using the Ace Beaute Enliven™ Makeup Brush & Sponge Cleaner.",
    captionLead: "Your brushes work hard... show them a little love. 🫧 Here's how to clean them the right way using ",
    captionMid: " Enliven™ Makeup Brush & Sponge Cleaner. Did you snag these Mega Drop Shop finds? Mega Drop Shop Products: ",
    mentions: ["@acebeaute", "@realperfectioncosmetics", "@acebeaute"],
    brands: ["@realperfectioncosmetics", "@acebeaute"],
    metrics: metrics(["328.3K", "2.68K", "29", "0", "68", "2.77K", "0.8%", "0.1%"]),
    media: "video",
    postSummary:
      "The video demonstrates how to clean makeup brushes and sponges using the Ace Beaute Enliven™ Makeup Brush & Sponge Cleaner. The creator shows the device in action, emphasizing its ability to clean thoroughly between bristles and also clean sponges. The video highlights that keeping brushes clean can improve makeup application. The creator also mentions that the device helps extend the life of brushes by allowing them to dry properly. The video concludes by promoting the product as an easy way to enhance a makeup routine.",
    brandFocus: "real perfection cosmetics",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 29,
    pulled: "last pulled today, 8:00am",
    score: 4,
    sentiment: { positive: 30, neutral: 25, negative: 45 },
    paragraph: [
      "Reactions to this brush-cleaner tutorial lean mixed. A few commenters say they want to buy the Enliven cleaner ",
      "buy",
      ", while a recurring pushback thread argues cheaper alternatives work just as well: soap and water, or a $15 dupe from TJ Maxx ",
      "cheaper",
      ". One comment flags a real care issue, warning that letting the brush dry with water inside can tarnish the metal or grow bacteria ",
      "care",
      ". The largest thread on the post, though, isn't about the product at all: it's commenters attacking the presenter and four others defending her ",
      "attack",
      ".",
    ],
    themes: [buy, cheaper, care, attack],
    themeList: [
      {
        ...cheaper,
        headline: "Customers question whether the cleaner is worth the price",
        detail: "Commenters say cheaper options like soap and water or a $15 TJ Maxx dupe work just as well.",
      },
      {
        ...care,
        headline: "Viewers flag a potential brush-care issue",
        dot: assets.themeDot2,
        detail: "Commenters warn that leaving water inside the brush while it dries could tarnish the metal or grow bacteria.",
      },
      {
        ...attack,
        headline: "Criticism of the presenter sparks pushback",
        detail: "The largest thread is unrelated to the product, with commenters attacking the presenter and others defending her.",
      },
      {
        ...buy,
        headline: "Some viewers show purchase interest",
        dot: assets.themeDotGreen,
        detail: "A few commenters say they want to buy the Enliven cleaner.",
      },
    ],
    comments: [
      { avatar: assets.avatars[1], name: "@morelikemak", time: "5 days ago", text: "Holly chopped", likes: "13 likes" },
      { avatar: assets.avatars[12], name: "@pawasocial", time: "3 days ago", text: "post urself", likes: "15 likes" },
      { avatar: assets.avatars[0], name: "@fluffy.qiqi", time: "3 days ago", text: "why are we being mean for no reason", likes: "8 likes" },
      { avatar: assets.avatars[2], name: "@mochi_potato12", time: "4 days ago", text: "Or hear me out, you wash it with soap and your hand, in the bathroom sink, without spending excess money you don't need to spend", likes: "5 likes" },
      { avatar: assets.avatars[3], name: "Cheryl Goguen", time: "7 days ago", text: "No don’t let them dry like that. Water will go down inside it and the metal will tarnish or bacteria will grow", likes: "5 likes" },
      { avatar: assets.shakira, name: "@allthingsshakira", time: "7 days ago", text: "I totally need this to do the scrubbing for me 😥", likes: "2 likes" },
      { avatar: assets.avatars[6], name: "emmalee ⭐︎", time: "2 days ago", image: assets.commentImage, likes: "2 replies" },
      { avatar: assets.avatars[9], name: "@occasionaloranges", time: "3 days ago", text: "u can get something like this for $15 at ur local tj maxx btw", likes: "2 likes" },
      { avatar: assets.avatars[7], name: "@babesontrend", time: "7 days ago", text: "Wow I need", likes: "1 like" },
      { avatar: assets.avatars[11], name: "@itskristinabuehrig", time: "6 days ago", text: "this looks like a lifesaver", likes: "1 like" },
      { avatar: assets.avatars[10], name: "@may_smith652", time: "6 days ago", text: "You are a miserable person", likes: "1 like" },
      { avatar: assets.avatars[13], name: "@melez_2pou", time: "20 hours ago", text: "Nah this is to much time", likes: "1 like" },
      { avatar: assets.avatars[8], name: "@citrusstoner", time: "7 days ago", text: "putting someones looks down doesnt make you any prettier", likes: "0 likes" },
      { avatar: assets.avatars[4], name: "@tracy.cline1980", time: "5 days ago", text: "hot water and Dawn works great", likes: "0 likes" },
    ],
    transcript: [
      { time: "00:00", text: "get right in between those bristles, so you get a really clean brush every time." },
      { time: "00:00", text: "If you always skip washing your makeup brushes, this might be why your makeup's not sitting right." },
      { time: "00:00", text: "This is the perfect set." },
      { time: "00:00", text: "Not only are you getting everything you need to do your full face, but being able to keep them clean, you're going to get a lot more life out of your brushes." },
      { time: "00:14", text: "The built-in scrubbing pad makes it so much easier to get right in between those bristles, so you get a really clean brush every time." },
      { time: "00:14", text: "Not only does this clean your makeup brushes, but you can also clean your sponges." },
      { time: "00:14", text: "Once it's clean, you can out the water and then place it in the top to dry." },
      { time: "00:33", text: "This is the easiest way to give your makeup routine the glow up it needed." },
    ],
  },
  "2": {
    id: "2",
    label: "Ipsy 2",
    dateShort: "Aug 22 2026",
    dateLong: "Aug 22, 2026",
    followers: "3.3M",
    community: "Beauty Community",
    overview: "",
    captionLead: "",
    captionMid: "",
    mentions: [],
    brands: [],
    captionText: "She is MOTHER. 😍 Image credit: Getty",
    thumb: assets.post2.thumb,
    media: "carousel",
    slides: [...assets.post2.slides],
    metrics: [
      { icon: assets.likes, value: "2.24K", label: "Likes" },
      { icon: assets.comments, value: "15", label: "Comments" },
      { icon: assets.saves, value: "0", label: "Saves" },
      { icon: assets.shares, value: "0", label: "Shares" },
      { icon: assets.reposts, value: "2.26K", label: "Reposts" },
      { icon: assets.views, value: "N/A", label: "Views" },
      { icon: assets.er, value: "0.1%", label: "Engagement rate" },
    ],
    postSummary:
      "The carousel features actress Anne Hathaway, showcasing her best beauty moments from the year. Each slide highlights a specific makeup look or hairstyle, with text overlays describing it. For example, one slide shows her with sunglasses and a leopard print coat, labeled 'Anne Hathaway's Best Beauty Moments This Year'. Another slide focuses on her eye makeup, described as 'Brown Monochromatic Shadow'. Other looks include 'Soft Goddess Updo', 'Modern Hollywood Glam', 'Cherry Red Lip', 'Chic Minimalist Flush', 'Blurred Red Lip', and 'Coral Red Lip'. The 'IPSY' logo is visible on several slides, indicating a partnership or feature by the beauty subscription service. The caption simply states 'She is MOTHER. 😍' and credits Getty for the image.",
    brandFocus: "ipsy",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 15,
    pulled: "last pulled today, 8:00am",
    score: 7,
    sentiment: { positive: 78, neutral: 0, negative: 22 },
    paragraph: [
      "Reactions to this photo lean overwhelmingly positive, with commenters calling her “stunning,” “iconic,” and “a timeless beauty” ",
      "praise",
      ". The thread worth flagging is smaller but more consequential: a commenter asks for a tutorial on canceling a subscription and calls the process “so difficult” ",
      "cancel",
      ". In that same thread, another commenter replies with a support email that isn’t on Ipsy’s own domain, worth checking as a possible look-alike contact ",
      "lookalike",
      ".",
    ],
    themes: [praise, cancel, lookalike],
    themeList: [
      {
        ...cancel,
        comments: [...cancel.comments, ...lookalike.comments],
      },
      praise,
    ],
    comments: [
      { avatar: assets.post2.lisbeth, name: "Lisbeth Ceballos", time: "2 days ago", text: "Make a tutorial for how to cancel Ipsy subscription:) it's so difficult", likes: "8 likes 4 replies" },
      { avatar: assets.post2.lindsey, name: "Lindsey Turcios", time: "a day ago", text: "She’s a timeless beauty 👏", likes: "1 like 1 reply" },
      { avatar: assets.post2.huda, name: "Huda Kasim", time: "2 days ago", text: "She’s just stunning", likes: "1 like 1 reply" },
      { avatar: assets.post2.chands, name: "Chands 🍒", time: "2 days ago", text: "So beautiful 😍", likes: "1 like 1 reply" },
      { avatar: assets.post2.madison, name: "Madison Ortiz | Beauty & Fashion Creator", time: "2 days ago", text: "Love 😍", likes: "1 like 1 reply" },
      { avatar: assets.post2.chloe, name: "Chloe Thorp", time: "17 hours ago", text: "🙌🏼 Absolutely iconic! ✨", likes: "0 likes" },
    ],
    transcript: [],
  },
  "3": {
    id: "3",
    label: "Ipsy 3",
    dateShort: "Aug 17 2026",
    dateLong: "Aug 17, 2026",
    followers: "3.3M",
    community: "Beauty Community",
    overview:
      "A creator humorously contrasts aspirational 'hot girl summer' activities with daily chores and work, while showcasing IPSY beauty products.",
    captionLead: "",
    captionMid: "",
    mentions: ["@toofaced", "@lauragellerbeauty", "@tartecosmetics"],
    brands: ["@toofaced", "@tartecosmetics", "@lauragellerbeauty"],
    captionSegments: [
      { text: "We're just trying to have a hot girl summer. 🥲 IPSY Products: " },
      { text: "@toofaced", mention: true },
      { text: " Too Faced Cosmetics Cloud Crush Berry Dream Blush " },
      { text: "@lauragellerbeauty", mention: true },
      { text: " Laura Geller On & On Lashes Lengthening Mascara in Black " },
      { text: "@tartecosmetics", mention: true },
      { text: " Tarte™ Maracuja Juicy Lip Vinyl Gloss" },
    ],
    thumb: assets.post3.image,
    media: "image",
    mediaSrc: assets.post3.image,
    metrics: [
      { icon: assets.likes, value: "400", label: "Likes" },
      { icon: assets.comments, value: "10", label: "Comments" },
      { icon: assets.saves, value: "0", label: "Saves" },
      { icon: assets.shares, value: "0", label: "Shares" },
      { icon: assets.reposts, value: "410", label: "Reposts" },
      { icon: assets.views, value: "N/A", label: "Views" },
      { icon: assets.er, value: "0%", label: "Engagement rate" },
    ],
    postSummary:
      "The image is divided into two sections. The top section, labeled 'Where I'm at mentally:', displays items associated with leisure and fun: a cocktail, a disco ball, a curling iron, a digital camera, a blush compact, mascara, and a lipstick. The bottom section, labeled 'What I'm actually doing:', shows items representing daily chores and work: a full grocery cart, a laptop, a smartphone displaying the Slack logo, and a logo for Asana. The caption reads 'We're just trying to have a hot girl summer. 🥲'. The post also lists specific IPSY products: Too Faced Cosmetics Cloud Crush Berry Dream Blush, Laura Geller On & On Lashes Lengthening Mascara in Black, and Tarte Maracuja Juicy Lip Vinyl Gloss.",
    brandFocus: "ipsy",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 10,
    pulled: "last pulled today, 8:00am",
    score: 8,
    scoreTone: "positive",
    sentiment: { positive: 80, neutral: 15, negative: 5 },
    paragraph: [
      "The most notable comment here isn't from a customer at all: e.l.f. cosmetics, a separate brand's verified account, comments playfully on the post (\"Real as e.l.f.\"), and Ipsy replies in kind ",
      "elf",
      ". Otherwise reactions are relatable, low-stakes humor about the video itself, people saying it feels like them or \"so real\" ",
      "relate",
      ". One aside references dancing/disco that doesn't clearly tie to the product ",
      "disco",
      ".",
    ],
    themes: [elf, relate, disco],
    themeList: [elf, relate, disco],
    comments: [
      { avatar: assets.post3.elf, name: "e.l.f. Cosmetics", time: "7 days ago", text: "Real as e.l.f. 😭😭", likes: "1 like 1 reply" },
      { avatar: assets.post3.ashley, name: "Ashley 🫶🏻", time: "7 days ago", text: "Why is this me omg 😂😂", likes: "1 like 1 reply" },
      { avatar: assets.post3.dandan, name: "丹丹", time: "7 days ago", text: "So real!! 😭😅", likes: "1 like 1 reply" },
      { avatar: assets.post3.dani, name: "Dani Valparaiso Fattaleh", time: "7 days ago", text: "Not the slacks", likes: "1 like 1 reply" },
      { avatar: assets.post3.holly, name: "ASHLEY HOLLY", time: "6 days ago", text: "disco disco 🕺🏻", likes: "0 likes" },
    ],
    transcript: [],
  },
};
