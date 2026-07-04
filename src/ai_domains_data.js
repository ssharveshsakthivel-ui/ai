export const aiDomainsData = [
  {
    id: "ai_gen",
    title: "1. Generative AI (GenAI)",
    description: "Generative AI represents a paradigm shift from analyzing data to creating entirely new data based on learned patterns.",
    points: [
      "How it Works: Uses foundational models (LLMs, Diffusion Models) trained on massive datasets to predict the next sequence of text or pixels.",
      "What it Generates: Text (articles, code), Images (art, logos), Audio/Video (voice synthesis, deepfakes).",
      "Example: ChatGPT drafting a legal contract or Midjourney generating marketing assets."
    ],
    color: "#ffdf00", // Yellow
    icon: "Sparkles"
  },
  {
    id: "ai_agentic",
    title: "2. Agentic AI",
    description: "While Generative AI simply answers prompts, Agentic AI acts on them autonomously to achieve complex goals.",
    points: [
      "How it Works: Combines an LLM with access to external tools (APIs, web browsers, terminal commands).",
      "Capabilities: Planning, Memory, Tool Usage, Self-correction.",
      "Example: AI Coding Agents that build websites, install dependencies, and fix bugs autonomously."
    ],
    color: "#00f0ff", // Cyan
    icon: "Bot"
  },
  {
    id: "ai_predictive",
    title: "3. Predictive AI",
    description: "The traditional backbone of data science, using historical data to forecast future outcomes.",
    points: [
      "How it Works: Uses statistical algorithms (Random Forests, Neural Networks) to find hidden correlations.",
      "Applications: Stock prediction, Weather forecasting, Fraud detection.",
      "Example: Customer Churn Prediction (identifying which users are likely to cancel their subscriptions)."
    ],
    color: "#ff0080", // Magenta
    icon: "TrendingUp"
  },
  {
    id: "ai_conversational",
    title: "4. Conversational AI",
    description: "Focuses on simulating human-like dialogue seamlessly.",
    points: [
      "How it Works: Integrates NLP and RLHF (Reinforcement Learning from Human Feedback) for safe and natural responses.",
      "Applications: Chatbots, Virtual assistants, Customer support.",
      "Example: AI agents handling returns and answering complex FAQs without human intervention."
    ],
    color: "#a4ff00", // Lime
    icon: "MessageSquare"
  },
  {
    id: "ai_cv",
    title: "5. Computer Vision (CV)",
    description: "Giving machines the ability to 'see' and interpret the visual world.",
    points: [
      "How it Works: Uses Convolutional Neural Networks (CNNs) to identify edges, shapes, and complex objects in pixels.",
      "Applications: Face recognition, Medical image analysis, Quality inspection.",
      "Example: Tesla's Autopilot mapping lanes and detecting pedestrians in real-time."
    ],
    color: "#ff7b00", // Orange
    icon: "Eye"
  },
  {
    id: "ai_speech",
    title: "6. Speech AI",
    description: "The science of converting human voice to machine text, and vice versa.",
    points: [
      "How it Works: Uses Recurrent Neural Networks (RNNs) to map phonetic sounds to text dictionaries.",
      "Applications: Speech-to-text, Text-to-speech, Voice cloning.",
      "Example: Real-time closed captioning on YouTube or synthesizing a voice from a 10-second sample."
    ],
    color: "#b000ff", // Purple
    icon: "Mic"
  },
  {
    id: "ai_recommendation",
    title: "7. Recommendation AI",
    description: "The engines that drive modern consumer behavior and content consumption.",
    points: [
      "How it Works: Uses Collaborative Filtering and Content-Based Filtering to rank content.",
      "Applications: Movie recommendations, Shopping suggestions, Social media feeds.",
      "Example: TikTok's 'For You Page' algorithm or Amazon's 'Customers also bought' feature."
    ],
    color: "#00ff88", // Mint
    icon: "ThumbsUp"
  },
  {
    id: "ai_robotics",
    title: "8. Robotics AI",
    description: "Bridging the gap between software brains and physical hardware.",
    points: [
      "How it Works: Combines CV, Reinforcement Learning, and sensor data for physical navigation.",
      "Applications: Manufacturing, Warehouse automation, Surgical robots.",
      "Example: Amazon Kiva robots coordinating in warehouses or the Da Vinci surgical robot."
    ],
    color: "#0066ff", // Blue
    icon: "Cpu"
  },
  {
    id: "ai_expert",
    title: "9. Expert Systems",
    description: "One of the earliest forms of AI, relying on strict rules rather than machine learning.",
    points: [
      "How it Works: Uses a massive database of 'If-Then' rules created by human experts.",
      "Applications: Medical diagnosis, Legal advice, Financial auditing.",
      "Example: Automated tax auditing software flagging non-compliant returns based on tax code rules."
    ],
    color: "#ffdf00", // Yellow
    icon: "Briefcase"
  },
  {
    id: "ai_multimodal",
    title: "10. Multi-Modal AI",
    description: "The cutting edge of AI development—models that can process different types of data simultaneously.",
    points: [
      "How it Works: A single model trained on a unified dataset of text, images, and audio.",
      "Applications: Image question answering, Video understanding.",
      "Example: Uploading a fridge photo and asking 'What can I cook?', receiving a text recipe and audio response."
    ],
    color: "#00f0ff", // Cyan
    icon: "Layers"
  }
];
