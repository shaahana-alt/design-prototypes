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
};

const igMetrics = (values: [string, string, string, string, string, string, string]) => [
  { icon: assets.likes, value: values[0], label: "Likes" },
  { icon: assets.comments, value: values[1], label: "Comments" },
  { icon: assets.saves, value: values[2], label: "Saves" },
  { icon: assets.shares, value: values[3], label: "Shares" },
  { icon: assets.reposts, value: values[4], label: "Reposts" },
  { icon: assets.views, value: values[5], label: "Views" },
  { icon: assets.er, value: values[6], label: "Engagement rate" },
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

const excitement: Theme = {
  id: "excitement",
  label: "Color drop",
  headline: "General excitement for the color drop shows up without commenters naming a specific pick",
  dot: assets.themeDotGreen,
  count: 16,
  comments: [
    thread(av[0], "Budget Toddler Mama | Wife & Mama", "3 days ago", "Love the color schemes!"),
    thread(av[1], "Laura Millers-Keaton", "5 days ago", "Wowww 😍", "2 likes", "1 reply"),
    thread(av[2], "Liezl “UGC”", "5 days ago", "Sooo beautiful color 😍💙", "2 likes", "1 reply"),
    thread(av[3], "CLAUDIA", "5 days ago", "I don’t want it.. I NEED IT 🤍✨🫰🏼", "1 like"),
    thread(av[4], "Tommie Cross", "3 days ago", "Colors go crazy!!!"),
    thread(av[5], "Katerina Meneray", "3 days ago", "The fabeletics tanks are the best comfy soft and the girlies look good always 👌"),
    thread(av[6], "Stephanie DeJesus", "3 days ago", "I bringing all the vibes 😍"),
    thread(av[7], "Júlia Castro Jones", "3 days ago", "I loved this set. 😍"),
    thread(av[8], "Mama Magic", "3 days ago", "Fall Cozy vibes here ✨✨"),
    thread(av[9], "T͏Y͏L͏E͏R͏ J͏O͏Y͏", "a day ago", "These are niceeeeeeeee"),
    thread(assets.post1.katrina, "〰️ katrina arambulo hanna", "5 days ago", "Swoon. @amber.cristinaa @emma.powell", "3 likes", "2 replies"),
  ],
};

const allVibes: Theme = {
  id: "allvibes",
  label: "All of them",
  headline: "A large share of commenters can’t settle on one option, saying they want all of them instead of picking",
  dot: assets.themeDotGreen,
  count: 8,
  comments: [
    thread(assets.post1.lettie, "Lettie Quiroz ❀ ugc content creator", "5 days ago", "only right answer: All of the above 🙂‍↔️✨", "3 likes", "1 reply"),
    thread(assets.post1.remy, "Remy | Modern Mom & Lifestyle", "5 days ago", "All of them of course 😍", "2 likes", "2 replies"),
    thread(av[10], "VENUS MOORE, CPT, CSCS", "5 days ago", "All of them!!😍😍😍", "2 likes", "1 reply"),
    thread(av[11], "Izabely • UGC", "5 days ago", "😮😮😮 All of them! 😍😍😍😍", "2 likes", "1 reply"),
    thread(av[12], "Valeria Anais | Florida Content Creator", "4 days ago", "Do I need to pick just one?", "1 like", "1 reply"),
    thread(assets.post1.sophia, "Sophia Edit Co", "5 days ago", "All the above!! Definitely Know where my member credits are going!! This & scrubs for sure!! 😍😍😍😍😍", "1 like"),
    thread(av[13], "Christine Cotton | Fitness + Everyday Vibes", "3 days ago", "❤️ ALL"),
    thread(av[0], "Ryan Trevis Ugc", "a day ago", "The fact that everyone in the comments is saying all of them shows just how well Fabletics nails the colour drops every single time. Stopping real people on the street and asking them to pick just one would make such a fun and genuinely difficult piece of content."),
  ],
};

const specificPick: Theme = {
  id: "picks",
  label: "Specific pick",
  headline: "Another similarly sized group commits to a specific pick, most often landing on blue or navy",
  dot: assets.themeDot1,
  count: 8,
  comments: [
    thread(assets.post3.jessA, "Jess A", "5 days ago", "Love the deep navy!! 😍", "3 likes", "1 reply"),
    thread(av[1], "Lara Collette", "5 days ago", "1 🥂", "2 likes", "1 reply"),
    thread(av[2], "Sheiva", "5 days ago", "The blue is amazing", "2 likes", "1 reply"),
    thread(av[3], "MELISSA", "5 days ago", "1 is calling my name ☁️", "2 likes", "1 reply"),
    thread(av[4], "Nallely Arlene Flores", "5 days ago", "1 ✨", "2 likes", "1 reply"),
    thread(av[5], "Laura K VISUALS", "5 days ago", "White 🤍🤍", "2 likes", "1 reply"),
    thread(av[6], "𝒜𝓂𝓎 𝑅𝑜𝓂𝒶𝓃", "2 days ago", "2/3 all the way! The blue vibe is everything."),
  ],
};

const straightLeg: Theme = {
  id: "straightleg",
  label: "Product gap",
  headline: "A detailed thread flags a real product gap around the lack of straight-leg leggings",
  dot: assets.themeDot2,
  count: 6,
  detail: "A fit complaint about the closest existing style, the foldover not staying in place, rides along in the same thread.",
  comments: [
    thread(assets.post1.michelle, "Michelle Reynolds", "5 days ago", "@fabletics why haven’t we gotten straight leg leggings yet? Every other brand has straight leg except y’all 😭", "2 likes", "3 replies"),
    thread(assets.post1.michelle, "Michelle Reynolds", "5 days ago", "I tried the Pure Luxe foldovers and the foldover didn’t stay in place well enough for my workouts."),
    thread(assets.post1.carlah, "Carlah 🤍", "5 days ago", "we need diversity"),
    thread(assets.post1.pierre, "Pierre", "4 days ago", "First order and loving the working clothes, but the care label situation needs work…it’s sewn straight into the seam (6+ layers long), so there’s no way to remove it without risking the stitching. Even cutting it off leaves a stub that scratches me during workouts. A smaller, softer tag would go a long way that the customer can easily remove. I’m already tired of cutting this off from the few clothes I got, and I can’t do this for every purchase. So will definitely cancel my membership."),
  ],
};

const seeFit: Theme = {
  id: "seefit",
  label: "Show the outfit",
  headline: "Curiosity about the actual fit surfaces, since the POV format keeps it off-screen",
  dot: assets.themeDot1,
  count: 2,
  comments: [
    thread(assets.post2.rathana, "Rathana | LA Foodie + UGC Creator", "a day ago", "This POV .. but I need to see the fit", "1 like", "2 replies"),
    thread(assets.post2.daria, "Daria", "a day ago", "Smart, cause the camera person would've stolen the show 😍 I just KNOW the fit EATS 🍽️🍽️🍽️", "1 like", "1 reply"),
  ],
};

const povPraise: Theme = {
  id: "pov",
  label: "POV praise",
  headline: "A positive reaction to the POV format itself, rather than the product, shows up too",
  dot: assets.themeDotGreen,
  count: 2,
  comments: [
    thread(assets.post2.maurissa, "UTAH MODEL | maurissa ⋮ mom • family travel • ugc", "a day ago", "This correct use of POV makes me very happy 😂🙌🏽", "1 like", "1 reply"),
    thread(assets.post2.lettie, "Lettie Quiroz ❀ ugc content creator", "a day ago", "most accurate POV 😌💪🏼✨", "1 like", "1 reply"),
  ],
};

const buyLooks: Theme = {
  id: "buylooks",
  label: "Purchase intent",
  headline: "Purchase intent for the whole collection dominates, with commenters asking for one of each piece rather than a single item",
  dot: assets.themeDotGreen,
  count: 7,
  comments: [
    thread(assets.post3.nia, "NIA", "2 days ago", "Wait though,🤔she really cute. I have half in my closet and half in my cart 😂", "1 like", "1 reply"),
    thread(av[7], "𝒜𝓂𝓎 𝑅𝑜𝓂𝒶𝓃", "2 days ago", "I'll be taking one of each for every day of the week❤️❤️❤️", "1 like"),
    thread(assets.post2.daria, "Daria", "20 hours ago", "k. Now do it again, except with my head on @keke's body 'cause I need the whole collection in celebration of my virgo sister ♍️🎂🎉 #wedabirthday"),
    thread(assets.post3.taryn, "Taryn | Skincare Reviews & Beauty Finds", "2 days ago", "There soooo cute 😍 need them all!", "1 like", "1 reply"),
    thread(assets.post3.kim, "Kim 💖 | Beauty & Fashion", "2 days ago", "Need them all!", "1 like"),
    thread(assets.post3.sarah, "Sarah ꕤ｡˚⋆♡", "a day ago", "Jeans!!! That’s such a great addition. Just bought two new workout sets. Can’t wait for your next colour collections!! 🔥🔥", "1 like"),
    thread(av[8], "Laura Bateman", "a day ago", "Oh yesssss, give me daily fits!!!!", "1 like"),
  ],
};

const dayOfWeek: Theme = {
  id: "dayofweek",
  label: "Day of week",
  headline: "The post’s day-of-week framing gets picked up directly, with commenters naming their go-to day",
  dot: assets.themeDot1,
  count: 5,
  comments: [
    thread(assets.post3.jessRose, "Jess Rose McDowell | Running Coach & Endurance Specialist", "2 days ago", "i’s like to select to wear friday all week lol", "2 likes", "1 reply"),
    thread(assets.post3.jessA, "Jess A", "2 days ago", "I’m a Friday gal 🙈", "1 like", "1 reply"),
    thread(av[9], "Jasmine Lopez| Faith & Healing", "2 days ago", "Definitely a Monday and Tuesday gal 💜", "1 like"),
    thread(av[10], "chaning alexxis meris 🌴", "2 days ago", "friday & sunday 🔥🔥", "1 like"),
  ],
};

const shoppingFriction: Theme = {
  id: "friction",
  label: "Shopping friction",
  headline: "Two real complaints surface about the shopping experience and pricing",
  dot: assets.themeDot2,
  count: 2,
  detail: "One is a checkout and login bug with a store credit about to expire; the other is a question about a tariff refund.",
  comments: [
    thread(
      av[4],
      "Polliany Colona Randolph",
      "a day ago",
      "I need help. Can’t finalize a purchase bc I’m not a member and can’t log into the app. The actual website doesn’t open the cart once I add stuff on there. Tried with safari and chrome on my phone. HELP. I have a credit that’s about to expire in 5 days.",
    ),
    thread(av[5], "xhriss24", "2 days ago", "when yall giving us our money back for all the tariffs fees we paid"),
  ],
};

export const posts: Record<PostId, Post> = {
  "1": {
    id: "1",
    label: "Fabletics 1",
    dateShort: "Aug 21 2026",
    dateLong: "Aug 21, 2026",
    followers: "2.11M",
    community: "",
    overview: "",
    captionLead: "",
    captionMid: "",
    mentions: ["@lululemon", "@alo"],
    brands: ["@lululemon", "@alo"],
    captionSegments: [
      { text: "August isn’t over yet. Which vibe are you claiming? " },
      { text: "@lululemon", mention: true },
      { text: " " },
      { text: "@alo", mention: true },
    ],
    thumb: assets.post1.thumb,
    media: "carousel",
    slides: [...assets.post1.slides],
    metrics: igMetrics(["361", "54", "0", "0", "415", "N/A", "0%"]),
    postSummary:
      "This carousel post features four distinct visual themes, each presented in a collage format. The first collage showcases a person in soft, neutral-toned loungewear, with a focus on shadows and light, evoking a sense of calm and relaxation. The second collage shifts to a darker, more intense color palette, featuring athletic wear in navy blue, including a sports bra and leggings, alongside fitness accessories like dumbbells and headphones. The third collage uses a vibrant lavender hue for athletic apparel, with imagery of flowers and a person exercising, suggesting an outdoor, active lifestyle. The final collage is a close-up of ice cubes in a dark liquid, possibly implying refreshment or a cool-down. The creator's caption asks, \"August isn’t over yet. Which vibe are you claiming?\", prompting engagement from the audience. The post tags 'lululemon' and 'alo'.",
    brandFocus: "lululemon",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 39,
    pulled: "last pulled today, 8:00am",
    score: 9,
    scoreTone: "positive",
    sentiment: { positive: 82, neutral: 8, negative: 10 },
    paragraph: [
      "General excitement for the color drop dominates the thread, with many commenters reacting positively without naming a specific pick ",
      "excitement",
      ". A similarly large group can’t settle on one option, insisting they want “all of them” ",
      "allvibes",
      ", while another group of the same size commits to a specific pick, most often landing on blue or navy ",
      "picks",
      ". One detailed thread raises a real product gap: michelleroupe_reynolds asks why Fabletics still doesn’t offer straight-leg leggings “like every other brand,” and after trying the Pure Luxe foldovers, says the foldover “didn’t stay in place well enough for my workouts,” with carlahdoesthings agreeing “we need diversity” ",
      "straightleg",
      ". Nothing else in the thread reads as negative, and no safety-relevant content appears.",
    ],
    themes: [excitement, allVibes, specificPick, straightLeg],
    themeList: [excitement, allVibes, specificPick, straightLeg],
    comments: [
      {
        avatar: assets.post1.katrina,
        name: "〰️ katrina arambulo hanna",
        time: "5 days ago",
        text: "Swoon. @amber.cristinaa @emma.powell",
        likes: "3 likes 2 replies",
      },
      {
        avatar: assets.post1.michelle,
        name: "Michelle Reynolds",
        time: "5 days ago",
        text: "@fabletics why haven’t we gotten straight leg leggings yet? Every other brand has straight leg except y’all 😭",
        likes: "2 likes 3 replies",
      },
      {
        avatar: assets.post1.lettie,
        name: "Lettie Quiroz ❀ ugc content creator",
        time: "5 days ago",
        text: "only right answer: All of the above 🙂‍↔️✨",
        likes: "3 likes 1 reply",
      },
      {
        avatar: assets.post1.remy,
        name: "Remy | Modern Mom & Lifestyle",
        time: "5 days ago",
        text: "All of them of course 😍",
        likes: "2 likes 2 replies",
      },
    ],
    transcript: [],
  },
  "2": {
    id: "2",
    label: "Fabletics 2",
    dateShort: "Aug 25 2026",
    dateLong: "Aug 25, 2026",
    followers: "2.11M",
    community: "",
    overview: "",
    captionLead: "",
    captionMid: "",
    mentions: [],
    brands: [],
    captionText: "POV: you’re getting active in our new August collection.",
    thumb: assets.post2.thumb,
    media: "carousel",
    slides: [...assets.post2.slides],
    metrics: igMetrics(["157", "10", "0", "0", "167", "N/A", "0%"]),
    postSummary:
      "The carousel post features a first-person perspective (POV) of someone engaging in physical activity, likely a workout. The first and third slides show hands holding a thick, braided rope, suggesting an exercise like battle ropes or climbing. The background in these slides is a tiled outdoor area. The second and fourth slides show a white water bottle and a neatly folded white towel placed on a large rock, with a modern building facade in the background. The creator's caption states, \"POV: you’re getting active in our new August collection.\" The post tags are not provided in the input, but the content implies a promotion for a new clothing line or fitness gear.",
    brandFocus: "fabletics",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 4,
    pulled: "last pulled today, 8:00am",
    score: 10,
    scoreTone: "positive",
    sentiment: { positive: 100, neutral: 0, negative: 0 },
    paragraph: [
      "Reactions center on the video’s POV format, where the camera stands in for the person trying on the collection rather than showing them directly. One commenter jokes that hiding the model was the right call (“the camera person would’ve stolen the show”) while still hyping the product itself (“I just KNOW the fit EATS”), and two others echo the same anticipation for the actual fit ",
      "seefit",
      ". A separate commenter compliments the format itself, calling it “correct use of POV” ",
      "pov",
      ". Nothing in the thread reads as negative.",
    ],
    themes: [seeFit, povPraise],
    themeList: [seeFit, povPraise],
    comments: [
      {
        avatar: assets.post2.rathana,
        name: "Rathana | LA Foodie + UGC Creator",
        time: "a day ago",
        text: "This POV .. but I need to see the fit",
        likes: "1 like 2 replies",
      },
      {
        avatar: assets.post2.daria,
        name: "Daria",
        time: "a day ago",
        text: "Smart, cause the camera person would've stolen the show 😍 I just KNOW the fit EATS 🍽️🍽️🍽️",
        likes: "1 like 1 reply",
      },
      {
        avatar: assets.post2.maurissa,
        name: "UTAH MODEL | maurissa ⋮ mom • family travel • ugc",
        time: "a day ago",
        text: "This correct use of POV makes me very happy 😂🙌🏽",
        likes: "1 like 1 reply",
      },
      {
        avatar: assets.post2.lettie,
        name: "Lettie Quiroz ❀ ugc content creator",
        time: "a day ago",
        text: "most accurate POV 😌💪🏼✨",
        likes: "1 like 1 reply",
      },
    ],
    transcript: [],
  },
  "3": {
    id: "3",
    label: "Fabletics 3",
    dateShort: "Aug 24 2026",
    dateLong: "Aug 24, 2026",
    followers: "2.11M",
    community: "",
    overview: "",
    captionLead: "",
    captionMid: "",
    mentions: [],
    brands: [],
    captionText: "Consider this week planned. Head to our link in bio to shop all the latest looks.",
    thumb: assets.post3.thumb,
    media: "carousel",
    slides: [...assets.post3.slides],
    metrics: igMetrics(["209", "17", "0", "N/A", "225", "N/A", "0%"]),
    postSummary:
      "This carousel post showcases seven different outfits, one for each day of the week from Monday to Sunday. Each slide features a model wearing a complete outfit, with the day of the week clearly labeled above. The outfits vary in style, from casual to more dressed-up looks. For example, Monday features a denim jacket, white shirt, and wide-leg jeans. Tuesday presents a cropped jacket, shorts, and flats. Wednesday includes a striped polo shirt, white cardigan, and dark jeans. Thursday showcases a black tube top with leopard print pants. Friday has a striped crop top, black shorts, and a jacket draped over the shoulder. Saturday features a white crop top and black pants. Sunday displays a grey t-shirt and distressed light-wash jeans. The creator's caption encourages viewers to 'Consider this week planned' and directs them to 'our link in bio to shop all the latest looks,' indicating that these are shoppable fashion items.",
    brandFocus: "fabletics",
    claimTone: "Neutral",
    claimCopy: "No brand claims found",
    commentCount: 20,
    pulled: "last pulled today, 8:00am",
    score: 8,
    scoreTone: "positive",
    sentiment: { positive: 75, neutral: 15, negative: 10 },
    paragraph: [
      "Most commenters respond with purchase intent, wanting the whole collection rather than a single piece: sonniaw jokes she has “half in my closet and half in my cart,” while themagenticpath, dariaxmonique, and others ask for “one of each” or “the whole collection” ",
      "buylooks",
      ". A second group plays along with the post’s day-of-week framing, naming their go-to day, like “Friday gal” or “Monday and Tuesday gal” ",
      "dayofweek",
      ". Two comments raise real friction: pollycolona can’t complete a purchase due to a login and cart bug with a store credit expiring in 5 days, and xhriss24 asks when Fabletics will refund “tariffs fees” ",
      "friction",
      ". The rest is mostly off-topic tagging between commenters and a couple of generic compliments, including a recurring sportswear-manufacturer account.",
    ],
    themes: [buyLooks, dayOfWeek, shoppingFriction],
    themeList: [buyLooks, dayOfWeek, shoppingFriction],
    comments: [
      {
        avatar: assets.post3.jessRose,
        name: "Jess Rose McDowell | Running Coach & Endurance Specialist",
        time: "2 days ago",
        text: "i’s like to select to wear friday all week lol",
        likes: "2 likes 1 reply",
      },
      {
        avatar: assets.post3.katrina,
        name: "〰️ katrina arambulo hanna",
        time: "2 days ago",
        text: "@darionlleigh our favorite girl 🌞",
        likes: "2 likes 1 reply",
      },
      {
        avatar: assets.post3.jessA,
        name: "Jess A",
        time: "2 days ago",
        text: "I’m a Friday gal 🙈",
        likes: "1 like 1 reply",
      },
      {
        avatar: assets.post3.taryn,
        name: "Taryn | Skincare Reviews & Beauty Finds",
        time: "2 days ago",
        text: "There soooo cute 😍 need them all!",
        likes: "1 like 1 reply",
      },
    ],
    transcript: [],
  },
};
