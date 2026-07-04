export const aiCreationData = [
  {
    id: "create_step1",
    title: "Step 1: Define the Problem",
    description: "Before writing a single line of code, you must define exactly what you want the AI to achieve.",
    points: [
      "What is the goal? (e.g., 'Predict if an email is spam', 'Generate images from text')",
      "Supervised Learning: You have labeled examples.",
      "Unsupervised Learning: You want the AI to group similar data together without labels.",
      "Reinforcement Learning: You want the AI to learn by trial and error."
    ],
    color: "#ffdf00", // Yellow
    icon: "Target"
  },
  {
    id: "create_step2",
    title: "Step 2: Gather the Data",
    description: "Data is the fuel for AI. Your model will only be as good as the data you feed it.",
    points: [
      "Sources: Public datasets (Kaggle), web scraping, APIs, or internal databases.",
      "Volume: Deep learning models require massive amounts of data. Simpler models might only need a few thousand examples."
    ],
    color: "#00f0ff", // Cyan
    icon: "DownloadCloud"
  },
  {
    id: "create_step3",
    title: "Step 3: Data Preprocessing",
    description: "Raw data is messy. You must clean it before feeding it to the AI.",
    points: [
      "Handle missing values and remove duplicates/outliers.",
      "Convert text to numbers (Encoding) and scale the data (Normalization).",
      "Train-Test Split: Divide your data into a Training set (80%) and a Testing set (20%)."
    ],
    color: "#ff0080", // Magenta
    icon: "Filter"
  },
  {
    id: "create_step4",
    title: "Step 4: Choose the Architecture",
    description: "You don't need to reinvent the wheel. Choose an existing algorithm based on your problem.",
    points: [
      "Simple Predictions: Linear Regression, Random Forest.",
      "Image Processing: Convolutional Neural Networks (CNNs).",
      "Text and Language: Transformers (like BERT or GPT architecture).",
      "Libraries: Scikit-Learn, TensorFlow, PyTorch."
    ],
    color: "#a4ff00", // Lime
    icon: "Layout"
  },
  {
    id: "create_step5",
    title: "Step 5: Train the Model",
    description: "This is the computationally heavy part where the 'learning' happens.",
    points: [
      "Forward Pass: The model makes a random guess.",
      "Loss Calculation: The model compares its guess to the actual correct answer (Loss/Error).",
      "Backpropagation: The model uses Calculus to adjust internal weights to reduce the error.",
      "Repeat this process thousands of times (Epochs)."
    ],
    color: "#ff7b00", // Orange
    icon: "Zap"
  },
  {
    id: "create_step6",
    title: "Step 6: Evaluate the Model",
    description: "Test the AI using the 20% Testing Data you set aside.",
    points: [
      "Goal: Ensure the model didn't just memorize the training data (Overfitting).",
      "Metrics: Accuracy, Precision, Recall, Mean Squared Error (MSE)."
    ],
    color: "#b000ff", // Purple
    icon: "CheckCircle"
  },
  {
    id: "create_step7",
    title: "Step 7: Hyperparameter Tuning",
    description: "If the model isn't accurate enough, you tweak the settings.",
    points: [
      "Adjust things like the Learning Rate or the number of layers in your neural network.",
      "Retrain the model with these new settings to try and squeeze out better performance."
    ],
    color: "#00ff88", // Mint
    icon: "Sliders"
  },
  {
    id: "create_step8",
    title: "Step 8: Deployment (MLOps)",
    description: "An AI is useless if it only lives on your laptop. Deploy it so users can interact with it.",
    points: [
      "APIs: Wrap the model in a web framework like FastAPI.",
      "Cloud Hosting: Host the model on AWS SageMaker, Google Cloud, or Hugging Face.",
      "Monitoring: Monitor for Data Drift (data changing over time) and retrain as needed."
    ],
    color: "#0066ff", // Blue
    icon: "Globe"
  }
];
