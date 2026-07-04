export const algorithmsData = [
  {
    id: "algo_supervised",
    title: "1. Supervised Learning",
    description: "The most common form of ML. The algorithm learns from labeled data, where both the input and the correct output (the 'answer key') are provided.",
    points: [
      "Key Algorithms: Linear/Logistic Regression, Decision Trees, Random Forests, Support Vector Machines (SVM), and Gradient Boosting (XGBoost).",
      "Real-World Examples: Spam detection (email marked as spam or not), Disease prediction from medical records, and Credit scoring."
    ],
    color: "#ffdf00", // Yellow
    icon: "GraduationCap"
  },
  {
    id: "algo_unsupervised",
    title: "2. Unsupervised Learning",
    description: "The algorithm is given data without any labels or correct answers. It must independently discover hidden patterns and structures.",
    points: [
      "Key Algorithms: K-Means Clustering, Hierarchical Clustering, DBSCAN, Principal Component Analysis (PCA).",
      "Real-World Examples: Customer segmentation (grouping buyers by purchasing habits), Market basket analysis, and Anomaly/Fraud detection."
    ],
    color: "#00f0ff", // Cyan
    icon: "BrainCircuit"
  },
  {
    id: "algo_semi",
    title: "3. Semi-Supervised Learning",
    description: "A hybrid approach that uses a massive amount of unlabeled data alongside a tiny fraction of labeled data to train highly accurate models.",
    points: [
      "Why use it?: Labeling millions of data points manually is expensive. This approach maximizes efficiency.",
      "Real-World Examples: Medical imaging (where doctors label 50 MRIs, and the AI infers the rest on 50,000 unlabeled MRIs)."
    ],
    color: "#ff0080", // Magenta
    icon: "Network"
  },
  {
    id: "algo_ann",
    title: "4. Artificial Neural Network (ANN)",
    description: "The fundamental building block of deep learning, inspired by the biological neurons in the human brain.",
    points: [
      "How it Works: Information flows from an input layer, through hidden layers that learn complex relationships, to an output layer.",
      "Real-World Examples: Advanced recommendation engines and highly complex classification problems."
    ],
    color: "#a4ff00", // Lime
    icon: "Binary"
  },
  {
    id: "algo_cnn",
    title: "5. Convolutional Neural Network (CNN)",
    description: "A specialized deep learning architecture designed specifically for processing grid-like topology, such as images.",
    points: [
      "How it Works: Uses 'filters' to scan across an image to detect edges, shapes, and eventually complex objects like faces.",
      "Real-World Examples: Facial recognition systems, medical tumor detection, and the vision systems in self-driving cars."
    ],
    color: "#ff7b00", // Orange
    icon: "Image"
  },
  {
    id: "algo_seq_cnn",
    title: "6. Sequence CNN (1D CNN)",
    description: "Adapting the power of Convolutional Networks (normally used for 2D images) to read 1D sequential data.",
    points: [
      "How it Works: Instead of scanning a 2D image matrix, it scans across sequences of words or time-series signals.",
      "Real-World Examples: Heartbeat (ECG) anomaly detection and specialized natural language classification."
    ],
    color: "#b000ff", // Purple
    icon: "Activity"
  },
  {
    id: "algo_rnn",
    title: "7. Recurrent Neural Network (RNN)",
    description: "A neural network with a 'memory' designed to process sequential data by remembering previous inputs in the sequence.",
    points: [
      "The Problem: Standard neural networks treat all inputs as independent. RNNs remember context.",
      "Real-World Examples: Early language translation, speech recognition, and basic time-series forecasting."
    ],
    color: "#00ff88", // Mint
    icon: "History"
  },
  {
    id: "algo_lstm",
    title: "8. Long Short-Term Memory (LSTM)",
    description: "An advanced, highly powerful type of RNN designed to overcome the issue of 'forgetting' long-term context.",
    points: [
      "How it Works: Uses specialized 'gates' to determine exactly what information to remember for a long time, and what to instantly forget.",
      "Real-World Examples: Wall street stock prediction, advanced weather forecasting, and long-form text generation."
    ],
    color: "#0066ff", // Blue
    icon: "DatabaseBackup"
  },
  {
    id: "algo_rag",
    title: "9. Retrieval-Augmented Generation (RAG)",
    description: "The modern paradigm for enterprise AI, combining the conversational power of an LLM with a private, external knowledge base.",
    points: [
      "How it Works: When asked a question, it searches a database for the exact documents, retrieves them, and feeds them to the LLM to generate a factual answer.",
      "Real-World Examples: Enterprise internal document Q&A and zero-hallucination customer support chatbots."
    ],
    color: "#ffdf00", // Yellow
    icon: "FileSearch"
  }
];
