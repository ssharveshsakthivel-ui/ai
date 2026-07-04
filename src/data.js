export const preprocessingData = [
  {
    id: "intro",
    title: "Why Data Preprocessing is Important",
    description: "Real-world data is messy, incomplete, and noisy. Feeding raw data directly into a machine learning model is like putting unrefined crude oil into a car engine—it won't work and will likely break the system.",
    points: [
      "Garbage In, Garbage Out (GIGO): Poor data quality leads to poor model predictions.",
      "Improves Model Accuracy: Clean data helps algorithms find the true underlying patterns.",
      "Reduces Training Time: Less noise means the model converges faster.",
      "Example: A dataset predicting loan defaults might have a salary of '-$50,000'. Without preprocessing, the model learns incorrect relationships."
    ],
    color: "#ffdf00",
    icon: "AlertTriangle"
  },
  {
    id: "step1",
    title: "1. Data Cleaning",
    description: "The foundational step of identifying and correcting errors, missing values, and inconsistencies in the data.",
    points: [
      "Handling Missing Values: You can Delete rows (if missing data is < 5%) or Impute them (fill with Mean/Median/Mode or use KNN Imputer).",
      "Example: If 'Age' is missing for a user, fill it with the median age of 32.",
      "Removing Duplicates: Exact duplicate rows bias the model. Always drop them.",
      "Fixing Inconsistencies: Standardize formatting. 'Male', 'male', 'M' should all be converted to 'Male'."
    ],
    color: "#00f0ff",
    icon: "Wand2"
  },
  {
    id: "step2",
    title: "2. Data Integration",
    description: "The process of combining data residing in different sources into a single, unified dataset.",
    points: [
      "Entity Identification: Ensuring that 'Cust_ID' in database A is the same as 'CustomerNumber' in database B.",
      "Handling Redundancy: If combining data results in two 'Income' columns, remove one.",
      "Example: An e-commerce company merges 'User Profiles' (MongoDB) with 'Purchase History' (SQL Server) using the 'Email' column as the primary key."
    ],
    color: "#ff0080",
    icon: "Merge"
  },
  {
    id: "step3",
    title: "3. Data Transformation",
    description: "Converting data into a format that machine learning algorithms can easily understand and process.",
    points: [
      "Feature Scaling: Normalization scales data between 0 and 1. Standardization centers data at a mean of 0 (Z-score). Crucial for distance-based ML like KNN.",
      "Encoding Categorical Data: Models only read numbers. Convert 'Red/Blue/Green' into columns using One-Hot Encoding (e.g., is_Red = 1, is_Blue = 0).",
      "Example: Scaling 'Age' (0-100) and 'Salary' (0-1,000,000) so Salary doesn't dominate the algorithm."
    ],
    color: "#a4ff00",
    icon: "RefreshCw"
  },
  {
    id: "step4",
    title: "4. Data Reduction",
    description: "Techniques to reduce the volume of data without losing the core information, combating the 'Curse of Dimensionality'.",
    points: [
      "Dimensionality Reduction: Using algorithms like PCA (Principal Component Analysis) to compress 100 features into 10 principal components.",
      "Numerosity Reduction: Using clustering to replace actual data points with cluster centers.",
      "Example: Compressing a 1080p image (millions of pixels) into a 128-element mathematical vector while retaining the ability to recognize the face in the image."
    ],
    color: "#ff7b00",
    icon: "Minimize2"
  },
  {
    id: "step5",
    title: "5. Handling Outliers",
    description: "Identifying and treating extreme values that deviate significantly from the rest of the observations.",
    points: [
      "Detection: Use Boxplots, Scatter plots, or Z-scores (values > 3 std deviations are outliers).",
      "Treatment: You can cap the values (Winsorization), apply a log transformation to reduce their impact, or delete them if they are clear errors.",
      "Example: In a dataset of human heights, '250 cm' might be valid (an NBA player), but '2500 cm' is a typo and should be removed."
    ],
    color: "#b000ff",
    icon: "Focus"
  },
  {
    id: "step6",
    title: "6. Feature Selection",
    description: "The process of selecting the most relevant variables (columns) to use in model construction.",
    points: [
      "Filter Methods: Dropping columns with very low variance (e.g., a column where every user's country is 'USA').",
      "Wrapper Methods: Training models with different combinations of features to see which subset performs best.",
      "Example: When predicting house prices, 'Square Footage' and 'Zip Code' are kept, but 'Owner's First Name' is dropped because it has no predictive power."
    ],
    color: "#00ff88",
    icon: "CheckSquare"
  },
  {
    id: "step7",
    title: "7. Train-Test Split",
    description: "The critical final step before modeling. Splitting the clean data to evaluate model performance fairly.",
    points: [
      "Training Set (70-80%): The data used to teach the algorithm the underlying patterns.",
      "Testing Set (20-30%): Unseen data used to test if the model actually learned or if it just memorized the answers (overfitting).",
      "Data Leakage Warning: Always split the data BEFORE you do scaling or imputation to prevent test data information from 'leaking' into the training process."
    ],
    color: "#0066ff",
    icon: "Scissors"
  }
];
