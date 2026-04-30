/* ============================================================
   SITE DATA — Edit this section to add/update content easily
   ============================================================ */

const SITE_DATA = {

  /* ── Professor Info ──────────────────────────────────────── */
  professor: {
    name: "Prof. Swati Sah",
    title: "Professor",
    institution: "Sharda University, India",
    email: "iswatisah19@gmail.com",
    linkedin: "https://www.linkedin.com/in/dr-swati-sah-39a36413a/",
    googleScholar: "#",   // UPDATE with real URL
    orcid: "#",           // UPDATE with real URL
    photo: "./assets/cropped_circle_image.png",       // Landing page circle image
    aboutPhoto: "./assets/swati maam's photo.jpeg",    // New square image for About section
    shortBio: `Prof. Swati Sah, Professor at Sharda University, India, has 12+ years of academic and research experience in Artificial Intelligence, Machine Learning, Federated Learning and Cyber Security. She has served in leading institutions across India, Uzbekistan, and Nepal, published extensively, and is authoring books on AI-driven applications in finance, healthcare, and cyber resilience.`,
    stats: [
      { num: "12+", label: "Years Experience" },
      { num: "29+", label: "Publications" },
      { num: "6",   label: "Institutions" },
      { num: "4+",  label: "Books" },
    ],
  },

  /* ── About Page ──────────────────────────────────────────── */
  about: {
    fullBio: [
      `Prof. Swati Sah is a distinguished academic and researcher with over 12 years of experience spanning Artificial Intelligence, Machine Learning, Federated Learning, and Cyber Security. She holds a faculty position at Sharda University, Greater Noida, India, where she has shaped the intellectual development of hundreds of students and contributed significantly to the institution's research culture.`,
      `Her international footprint spans multiple countries — India, the United Kingdom, and Uzbekistan — where she has held teaching and research positions at leading institutions including the University of Bedfordshire (UK), Amity University (Tashkent), JAIN University (Bangalore), Ajeenkya DY Patil University, and Bharati Vidyapeeth University (Pune). This global exposure has enriched her pedagogical approach, allowing her to bring multicultural perspectives into the classroom and into her interdisciplinary research.`,
      `Prof. Sah's research is characterized by its applied focus: she bridges foundational theory with real-world challenges in finance, healthcare, and cyber resilience. She is currently authoring multiple books that distill her expertise into accessible frameworks for researchers and practitioners alike. Her published work spans 29+ papers in reputed IEEE, Springer, Elsevier, and ACM venues.`,
    ],
    experience: [
      // ── ADD/EDIT POSITIONS HERE ──
      { period: "Present", title: "Professor", org: "Sharda University, Greater Noida, UP, India", icon: "🎓" },
      { period: "Previous", title: "Faculty", org: "University of Bedfordshire, United Kingdom", icon: "🇬🇧" },
      { period: "Previous", title: "Faculty", org: "JAIN University, Bangalore, India", icon: "🎓" },
      { period: "Previous", title: "Faculty", org: "Ajeenkya DY Patil University, India", icon: "🎓" },
      { period: "Previous", title: "Faculty", org: "Amity University, Tashkent, Uzbekistan", icon: "🌏" },
      { period: "Previous", title: "Faculty", org: "Bharati Vidyapeeth University, Pune, India", icon: "🎓" },
    ],
  },

  /* ── Qualifications ──────────────────────────────────────── */
  qualifications: [
    // ── ADD/EDIT QUALIFICATIONS HERE ──
    { degree: "Ph.D.", field: "Computer Science & Engineering", university: "University Name, Year", specialization: "Machine Learning & Cyber Security" },
    { degree: "M.Tech.", field: "Computer Science", university: "University Name, Year", specialization: "Artificial Intelligence" },
    { degree: "B.Tech.", field: "Computer Science & Engineering", university: "University Name, Year", specialization: "" },
  ],

  /* ── Recognitions / Awards DATA ───────────────────────────────── */
  recognitions: [
    // ── ADD/EDIT RECOGNITIONS HERE ──
    // { icon: "🏆", title: "Best Researcher Award", body: "Recognized for outstanding contributions to Federated Learning research, Sharda University, 2023." },
    // { icon: "🌟", title: "International Faculty Excellence Award", body: "Awarded for exemplary teaching and research contributions across multiple countries including India and the UK." },
    // { icon: "📚", title: "Distinguished Author Recognition", body: "Acknowledged for authoring influential books on AI-driven applications in healthcare and finance." },
    // { icon: "🤝", title: "International Collaboration Award", body: "Recognized for fostering academic partnerships between India, United Kingdom, and Uzbekistan." },
    // { icon: "🔬", title: "Cyber Security Research Grant", body: "Principal Investigator on a funded research project on AI-driven cyber resilience frameworks." },
  ],

  /* ── Universities & Courses ──────────────────────────────── */
  /*
   * HOW TO ADD A NEW UNIVERSITY:
   * Copy a university block below and add it to the array.
   * key: short URL-safe identifier (no spaces)
   * icon: any emoji
   *
   * HOW TO ADD A NEW COURSE:
   * Find the university block and add to its `courses` array.
   * syllabusUrl / notesUrl / assignmentsUrl: file path or external URL
   */
  universities: [
    {
      key: "sharda",
      name: "Sharda University",
      location: "Greater Noida, UP, India",
      icon: "🏛️",
      courses: [
        {
          key: "pps",
          code: "",
          title: "Programming for Problem Solving",
          description: "An introductory course covering fundamental programming concepts using C/Python to develop systematic problem-solving skills. Students learn to design algorithms, trace logic flows, and write clean, structured code.",
          topics: [
            "Introduction to Programming & Problem Solving",
            "Algorithms, Flowcharts & Pseudocode",
            "Variables, Data Types & Operators",
            "Control Flow: Conditions & Loops",
            "Functions & Recursion",
            "Arrays and Strings",
            "Introduction to Object-Oriented Concepts",
            "File I/O and Exception Handling",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "ds-sharda",
          code: "",
          title: "Data Structures",
          description: "Study of fundamental data structures and their algorithmic applications for efficient program design and memory management.",
          topics: [
            "Introduction to Data Structures & Complexity",
            "Arrays and Linked Lists",
            "Stacks and Queues",
            "Trees: Binary, BST, AVL",
            "Heaps and Priority Queues",
            "Graphs: Representation & Traversal (BFS/DFS)",
            "Hashing Techniques",
            "Sorting and Searching Algorithms",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "dbms",
          code: "",
          title: "Database Management System",
          description: "Comprehensive study of database design, SQL querying, normalization theory, and modern database technologies.",
          topics: [
            "Introduction to DBMS & Data Models",
            "Entity-Relationship Modeling",
            "Relational Algebra & Calculus",
            "Structured Query Language (SQL)",
            "Normalization (1NF – BCNF)",
            "Transaction Management & Concurrency Control",
            "Indexing and Query Optimization",
            "NoSQL & Modern Database Trends",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "daa",
          code: "",
          title: "Design Analysis & Algorithms",
          description: "Analysis of algorithm design paradigms including divide-and-conquer, greedy methods, dynamic programming, and an introduction to NP-completeness theory.",
          topics: [
            "Algorithm Complexity & Asymptotic Analysis",
            "Divide and Conquer Strategies",
            "Greedy Algorithms",
            "Dynamic Programming",
            "Graph Algorithms (Shortest Path, MST)",
            "Backtracking & Branch and Bound",
            "NP-Completeness Theory",
            "Approximation Algorithms",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
      ],
    },
    {
      key: "jain",
      name: "JAIN University",
      location: "Bangalore, Karnataka, India",
      icon: "🎓",
      courses: [
        {
          key: "c-prog",
          code: "",
          title: "C Programming",
          description: "Foundational course in C programming covering structured programming, pointers, memory management, and file handling.",
          topics: [
            "Introduction to C & Program Structure",
            "Variables, Data Types & Operators",
            "Control Statements & Loops",
            "Functions & Recursion",
            "Arrays & Strings",
            "Pointers & Memory Management",
            "Structures and Unions",
            "File Handling in C",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "ds-jain",
          code: "",
          title: "Data Structures",
          description: "Study of data organization techniques including linear and non-linear structures with algorithmic applications.",
          topics: [
            "Introduction to Data Structures",
            "Linked Lists (Singly, Doubly, Circular)",
            "Stacks and Queues",
            "Trees and Binary Search Trees",
            "Graph Algorithms",
            "Hashing",
            "Sorting Techniques",
            "Algorithm Complexity Analysis",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "bda",
          code: "",
          title: "Big Data Analytics (BDA)",
          description: "Introduction to big data technologies, distributed computing, and analytics frameworks for processing large-scale datasets.",
          topics: [
            "Introduction to Big Data & V's of Big Data",
            "Hadoop Ecosystem & HDFS",
            "MapReduce Programming Model",
            "Apache Spark Fundamentals",
            "NoSQL Databases",
            "Data Warehousing Concepts",
            "Real-time Stream Processing",
            "Big Data Visualization",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "python-jain",
          code: "",
          title: "Python Programming",
          description: "Comprehensive Python programming course covering core syntax, data structures, OOP, and practical applications.",
          topics: [
            "Python Basics & Environment Setup",
            "Data Types, Variables & Operators",
            "Control Flow & Functions",
            "Lists, Tuples, Dictionaries & Sets",
            "Object-Oriented Programming in Python",
            "File Handling & Exceptions",
            "Python Libraries: NumPy & Pandas",
            "Introduction to Data Visualization",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "ml-jain",
          code: "",
          title: "Machine Learning using Python",
          description: "Hands-on machine learning course implementing supervised and unsupervised algorithms using Python's scikit-learn, NumPy, and Pandas.",
          topics: [
            "Introduction to Machine Learning",
            "Python for ML: NumPy, Pandas, Matplotlib",
            "Linear & Logistic Regression",
            "Decision Trees & Random Forests",
            "Support Vector Machines",
            "K-Means & Hierarchical Clustering",
            "Dimensionality Reduction (PCA)",
            "Model Evaluation & Cross-Validation",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
      ],
    },
    {
      key: "adypatil",
      name: "Ajeenkya DY Patil University",
      location: "Pune, Maharashtra, India",
      icon: "🏫",
      courses: [
        {
          key: "sql-analytics",
          code: "",
          title: "Data Analytics using SQL",
          description: "Practical course on extracting insights from relational databases using advanced SQL queries, joins, aggregations, and window functions.",
          topics: [
            "Introduction to Databases & SQL",
            "SELECT Statements & Filtering",
            "Joins: INNER, LEFT, RIGHT, FULL",
            "Aggregate Functions & GROUP BY",
            "Subqueries & CTEs",
            "Window Functions (RANK, ROW_NUMBER, etc.)",
            "Database Design for Analytics",
            "Hands-on Case Studies",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "aiml-adyp",
          code: "",
          title: "AI & ML",
          description: "Comprehensive overview of Artificial Intelligence and Machine Learning concepts, algorithms, and real-world applications.",
          topics: [
            "Introduction to AI & ML",
            "Supervised vs Unsupervised Learning",
            "Regression & Classification Algorithms",
            "Neural Networks & Deep Learning Basics",
            "Natural Language Processing Overview",
            "Computer Vision Fundamentals",
            "Ethical AI & Bias",
            "Industry Applications of AI & ML",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
      ],
    },
    {
      key: "amity",
      name: "Amity University",
      location: "Tashkent, Uzbekistan",
      icon: "🌏",
      courses: [
        {
          key: "spm",
          code: "",
          title: "Software Project Management",
          description: "Covers frameworks, tools, and best practices for planning, executing, and closing software projects on time and within budget.",
          topics: [
            "Introduction to Project Management",
            "Software Development Life Cycles (SDLC)",
            "Agile & Scrum Methodologies",
            "Project Planning & Estimation",
            "Risk Management",
            "Quality Assurance & Testing",
            "Team Management & Communication",
            "Project Monitoring & Closure",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "isd",
          code: "",
          title: "Introduction to Software Development",
          description: "Introductory course covering the principles of software engineering, development methodologies, and basic coding practices.",
          topics: [
            "Software Engineering Principles",
            "Requirements Engineering",
            "Software Design Patterns",
            "Version Control with Git",
            "Testing Fundamentals",
            "Introduction to Agile",
            "Code Documentation & Review",
            "Deployment Basics",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "dip",
          code: "",
          title: "Digital Image Processing",
          description: "Fundamentals of image acquisition, transformation, enhancement, segmentation, and compression using computational methods.",
          topics: [
            "Introduction to Digital Images",
            "Image Acquisition & Representation",
            "Spatial Domain Filtering",
            "Frequency Domain Techniques (Fourier)",
            "Image Enhancement & Restoration",
            "Morphological Processing",
            "Image Segmentation",
            "Image Compression Standards",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
      ],
    },
    {
      key: "bedfordshire",
      name: "University of Bedfordshire",
      location: "United Kingdom",
      icon: "🇬🇧",
      courses: [
        {
          key: "research-meth",
          code: "",
          title: "Research Methodology",
          description: "Develops research skills including literature review, research design, data collection, analysis, and academic writing for postgraduate students.",
          topics: [
            "Introduction to Research & Types",
            "Literature Review & Citation",
            "Research Design & Paradigms",
            "Quantitative Research Methods",
            "Qualitative Research Methods",
            "Data Collection Techniques",
            "Statistical Analysis Fundamentals",
            "Academic Writing & Dissertation Structure",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "proj-mgmt",
          code: "",
          title: "Project Management",
          description: "Covers principles and practices of managing projects effectively using traditional and agile frameworks with global project contexts.",
          topics: [
            "Project Management Fundamentals",
            "Project Life Cycle & Phases",
            "Scope, Time & Cost Management",
            "Risk & Stakeholder Management",
            "Agile & Prince2 Overview",
            "Resource Management",
            "Project Communication Plans",
            "Case Studies in Global Projects",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "python-beds",
          code: "",
          title: "Python Programming",
          description: "Practical Python course with emphasis on scripting, data processing, and applied computing for modern software challenges.",
          topics: [
            "Python Syntax & Environment",
            "Control Flow & Functions",
            "Data Structures in Python",
            "Object-Oriented Programming",
            "File I/O & Regular Expressions",
            "Python for Data Processing",
            "API Integration & Web Scraping",
            "Testing & Debugging",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "ai-concepts",
          code: "",
          title: "Concepts and Technologies of AI",
          description: "Explores the theoretical foundations and emerging technologies of Artificial Intelligence, including current trends and societal implications.",
          topics: [
            "History & Philosophy of AI",
            "Problem Solving & Search Algorithms",
            "Knowledge Representation",
            "Machine Learning Concepts",
            "Deep Learning & Neural Networks",
            "Natural Language Processing",
            "AI in Industry: Case Studies",
            "Ethics, Bias & Future of AI",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
      ],
    },
    {
      key: "bharatividya",
      name: "Bharati Vidyapeeth University",
      location: "Pune, Maharashtra, India",
      icon: "🏛",
      courses: [
        {
          key: "html-bvp",
          code: "",
          title: "Introduction to HTML",
          description: "Beginner course covering the structure and semantics of HTML for building well-formed, accessible web pages.",
          topics: [
            "Introduction to the Web & HTML",
            "HTML Document Structure",
            "Text Formatting & Semantic Tags",
            "Links, Images & Media",
            "Tables & Lists",
            "HTML Forms & Input Types",
            "Introduction to CSS Basics",
            "Building a Simple Webpage",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "c-bvp",
          code: "",
          title: "C Programming",
          description: "Foundational C programming course for engineering students emphasizing logic building and structured programming techniques.",
          topics: [
            "C Language Fundamentals",
            "Data Types, Variables & Constants",
            "Operators & Expressions",
            "Control Structures",
            "Functions",
            "Arrays & Strings",
            "Pointers",
            "File Handling",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
        {
          key: "ds-bvp",
          code: "",
          title: "Data Structures",
          description: "Introduction to data organization, storage, and algorithmic manipulation using C programming.",
          topics: [
            "Introduction & Complexity Analysis",
            "Arrays & Linked Lists",
            "Stacks & Queues",
            "Trees & Binary Search Trees",
            "Graphs",
            "Hashing",
            "Sorting Algorithms",
            "Searching Algorithms",
          ],
          syllabusUrl: "#",
          notesUrl: "#",
          assignmentsUrl: "#",
        },
      ],
    },
  ],

  /* ── Conference Papers ───────────────────────────────────── */
  /*
   * HOW TO ADD A PAPER:
   * Add an object to this array.
   * url: link to Google Scholar / DOI / publisher page
   * tags: short keyword labels
   */
  papers: [
    { title: "The implementation of machine learning in the insurance industry with big data analytics", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["Machine Learning", "Big Data", "Insurance"], url: "https://scholar.google.com/scholar?q=implementation+machine+learning+insurance+industry+big+data+analytics" },
    { title: "Artificial intelligence biosensing system on hand gesture recognition for the hearing impaired", authors: "Swati Sah et al.", venue: "IEEE", tags: ["AI", "Biosensing", "Gesture Recognition"], url: "https://scholar.google.com/scholar?q=artificial+intelligence+biosensing+hand+gesture+recognition+hearing+impaired" },
    { title: "SARIMA Techniques for Predictive Resource Provisioning in Cloud Environments", authors: "Swati Sah et al.", venue: "Springer", tags: ["Cloud Computing", "SARIMA", "Resource Provisioning"], url: "https://scholar.google.com/scholar?q=SARIMA+Techniques+Predictive+Resource+Provisioning+Cloud+Environments" },
    { title: "Evaluating Pattern Classification Techniques of Neural Network Using k-Means Clustering Algorithm", authors: "Swati Sah et al.", venue: "IEEE", tags: ["Neural Network", "k-Means", "Pattern Classification"], url: "https://scholar.google.com/scholar?q=Evaluating+Pattern+Classification+Neural+Network+k-Means+Clustering" },
    { title: "Dynamic imaging of pancreatic nuclear factor κB (NF-κB) activation in live mice using adeno-associated virus (AAV) infusion and bioluminescence", authors: "Swati Sah et al.", venue: "Journal Publication", tags: ["Biomedical", "NF-κB", "Bioluminescence"], url: "https://scholar.google.com/scholar?q=Dynamic+imaging+pancreatic+NF-kB+activation+live+mice+AAV+bioluminescence" },
    { title: "Analysis Application of Big Data-based Analysis of Network Security and Intelligence", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["Big Data", "Network Security", "Intelligence"], url: "https://scholar.google.com/scholar?q=Big+Data+Analysis+Network+Security+Intelligence" },
    { title: "Evaluating Optimal Clustering Techniques for Efficient Storage Retrieval Methods in Large Database Using Soft Computing Techniques", authors: "Swati Sah et al.", venue: "Springer", tags: ["Clustering", "Soft Computing", "Database"], url: "https://scholar.google.com/scholar?q=Optimal+Clustering+Techniques+Storage+Retrieval+Large+Database+Soft+Computing" },
    { title: "Performance Evaluation of Back Propagation Algorithm vs Back Propagation Through Time Algorithm in Pattern Recognition", authors: "Swati Sah et al.", venue: "IEEE", tags: ["Backpropagation", "BPTT", "Pattern Recognition"], url: "https://scholar.google.com/scholar?q=Performance+Evaluation+Back+Propagation+Algorithm+Back+Propagation+Through+Time+Pattern+Recognition" },
    { title: "Accident detection system using IoT based cloud computing technology", authors: "Swati Sah et al.", venue: "IEEE", tags: ["IoT", "Cloud Computing", "Accident Detection"], url: "https://scholar.google.com/scholar?q=Accident+detection+system+IoT+cloud+computing+technology" },
    { title: "Advancements in fake news detection: integrating NLP and multi-modal approaches", authors: "Swati Sah et al.", venue: "Springer / Elsevier", tags: ["NLP", "Fake News Detection", "Multi-modal AI"], url: "https://scholar.google.com/scholar?q=Advancements+fake+news+detection+NLP+multi-modal+approaches" },
    { title: "Plant Disease Classification using Convolutional Neural Network", authors: "Swati Sah et al.", venue: "IEEE", tags: ["CNN", "Plant Disease", "Image Classification"], url: "https://scholar.google.com/scholar?q=Plant+Disease+Classification+Convolutional+Neural+Network" },
    { title: "Empowering Leather Quality Assurance: Leveraging Convolutional Neural Networks for Precise Defect Detection and Classification", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["CNN", "Quality Assurance", "Defect Detection"], url: "https://scholar.google.com/scholar?q=Leather+Quality+Assurance+Convolutional+Neural+Networks+Defect+Detection+Classification" },
    { title: "Predicting the Hardness of Low Alloy Metal using Machine Learning Model", authors: "Swati Sah et al.", venue: "Springer", tags: ["Machine Learning", "Materials Science", "Prediction"], url: "https://scholar.google.com/scholar?q=Predicting+Hardness+Low+Alloy+Metal+Machine+Learning+Model" },
    { title: "Enhancing IoT security with self-adaptive blockchain-based intrusion detection system", authors: "Swati Sah et al.", venue: "Elsevier / IEEE", tags: ["IoT Security", "Blockchain", "Intrusion Detection"], url: "https://scholar.google.com/scholar?q=IoT+security+self-adaptive+blockchain+intrusion+detection+system" },
    { title: "Detr-dc5 approaches for improved spatial object detection in satellite imagery", authors: "Swati Sah et al.", venue: "IEEE", tags: ["Object Detection", "Satellite Imagery", "DETR"], url: "https://scholar.google.com/scholar?q=Detr-dc5+spatial+object+detection+satellite+imagery" },
    { title: "Accurate Prediction of the Diabetic Retinopathy Using Fundonet Memory Classifier", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["Healthcare", "Diabetic Retinopathy", "Deep Learning"], url: "https://scholar.google.com/scholar?q=Accurate+Prediction+Diabetic+Retinopathy+Fundonet+Memory+Classifier" },
    { title: "Optimized Machine Learning Models for Diabetes Prediction — Hyperparameter Tuned Comparative Study", authors: "Swati Sah et al.", venue: "Springer", tags: ["Diabetes Prediction", "Hyperparameter Tuning", "ML"], url: "https://scholar.google.com/scholar?q=Optimized+Machine+Learning+Models+Diabetes+Prediction+Hyperparameter+Tuned" },
    { title: "Docker Based Decentralised Vulnerability Assessment with Port Scanning Powered by Artificial Intelligence", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["Docker", "Cyber Security", "Vulnerability Assessment", "AI"], url: "https://scholar.google.com/scholar?q=Docker+Decentralised+Vulnerability+Assessment+Port+Scanning+Artificial+Intelligence" },
    { title: "Enhancing Aquaculture Sustainability with Deep Learning Techniques: Fish Species Detection and Disease Diagnosis", authors: "Swati Sah et al.", venue: "Springer / Elsevier", tags: ["Deep Learning", "Aquaculture", "Disease Diagnosis"], url: "https://scholar.google.com/scholar?q=Aquaculture+Sustainability+Deep+Learning+Fish+Species+Detection+Disease+Diagnosis" },
    { title: "Classification of Brain Tumor Using Support Vector Machine (SVM)", authors: "Swati Sah et al.", venue: "IEEE", tags: ["Healthcare", "Brain Tumor", "SVM"], url: "https://scholar.google.com/scholar?q=Classification+Brain+Tumor+Support+Vector+Machine+SVM" },
    { title: "Decoding Heart Health: A Predictive Model for Demographic-Based Cardiovascular Risk", authors: "Swati Sah et al.", venue: "Springer / Elsevier", tags: ["Healthcare", "Cardiovascular", "Predictive Model"], url: "https://scholar.google.com/scholar?q=Decoding+Heart+Health+Predictive+Model+Demographic+Cardiovascular+Risk" },
    { title: "Detection of Diabetic Retinopathy Using Deep Learning", authors: "Swati Sah et al.", venue: "IEEE", tags: ["Healthcare", "Deep Learning", "Retinopathy"], url: "https://scholar.google.com/scholar?q=Detection+Diabetic+Retinopathy+Deep+Learning" },
    { title: "Geospatial Object Detection in Hyperspectral Imagery Using Spectral-Spatial Networks", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["Hyperspectral", "Object Detection", "Remote Sensing"], url: "https://scholar.google.com/scholar?q=Geospatial+Object+Detection+Hyperspectral+Imagery+Spectral-Spatial+Networks" },
    { title: "Online Proctoring using AI", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["AI", "EdTech", "Online Proctoring"], url: "https://scholar.google.com/scholar?q=Online+Proctoring+using+AI" },
    { title: "Utility of Waste Water for Farming using Artificial Intelligence", authors: "Swati Sah et al.", venue: "Springer", tags: ["AI", "Agriculture", "Waste Water"], url: "https://scholar.google.com/scholar?q=Utility+Waste+Water+Farming+Artificial+Intelligence" },
    { title: "Design of a solution for a biometric face recognition task", authors: "Swati Sah et al.", venue: "IEEE", tags: ["Biometrics", "Face Recognition", "Computer Vision"], url: "https://scholar.google.com/scholar?q=Design+solution+biometric+face+recognition+task" },
    { title: "Stock Price Prediction Using Support Vector Machine (SVM) and Long Short-Term Memory (LSTM) Algorithms", authors: "Swati Sah et al.", venue: "IEEE / Elsevier", tags: ["Finance", "SVM", "LSTM", "Stock Prediction"], url: "https://scholar.google.com/scholar?q=Stock+Price+Prediction+Support+Vector+Machine+SVM+Long+Short+Term+Memory+LSTM" },
    { title: "Docker Based Decentralized Vulnerability Assessment with Port Scanning Powered by Artificial Intelligence", authors: "Swati Sah et al.", venue: "IEEE / Springer", tags: ["Docker", "Cyber Security", "AI", "Port Scanning"], url: "https://scholar.google.com/scholar?q=Docker+Decentralized+Vulnerability+Assessment+Port+Scanning+Artificial+Intelligence" },
    { title: "Empowering Leather Quality Assurance: Leveraging CNNs for Precise Defect Detection and Classification (Extended)", authors: "Swati Sah et al.", venue: "Springer", tags: ["CNN", "Quality Assurance", "Manufacturing"], url: "https://scholar.google.com/scholar?q=Leather+Quality+CNN+Defect+Detection+Classification+Extended" },
  ],

  /* ── Articles & Journals Data ─────────────────────────────────── */
  articles: [
    // ── ADD/EDIT ARTICLES HERE ──
    // { title: "The Future of Federated Learning in Healthcare", journal: "Journal of Biomedical Informatics", year: "2024", url: "#", tags: ["Survey", "Healthcare", "Federated Learning"] },
    // { title: "Machine Learning Approaches in Cyber Threat Intelligence", journal: "Computers & Security (Elsevier)", year: "2023", url: "#", tags: ["Survey", "Cyber Security", "ML"] },
    // { title: "AI Ethics and Bias Mitigation in Financial Services", journal: "IEEE Transactions on Neural Networks", year: "2023", url: "#", tags: ["AI Ethics", "Finance", "Bias"] },
  ],

  /* ── Books Data ───────────────────────────────────────────────── */
  books: [
    // ── ADD/EDIT BOOKS HERE ──
    // { title: "AI-Driven Applications in Finance", subtitle: "Intelligent Systems for Modern Banking", status: "Forthcoming", publisher: "Publisher Name", year: "2025", cover: "assets/book1.jpg", description: "A comprehensive guide to applying artificial intelligence in financial services, covering algorithmic trading, fraud detection, and risk assessment." },
    // { title: "AI in Healthcare & Diagnostics", subtitle: "Machine Learning for Medical Intelligence", status: "Forthcoming", publisher: "Publisher Name", year: "2025", cover: "assets/book2.jpg", description: "Explores deep learning, federated learning, and NLP techniques for clinical decision support, medical imaging, and patient monitoring." },
    // { title: "Cyber Resilience Framework", subtitle: "AI-Powered Defense Strategies", status: "Forthcoming", publisher: "Publisher Name", year: "2026", cover: "assets/book3.jpg", description: "A practitioner's guide to building adaptive, AI-driven cyber resilience systems against evolving threat landscapes." },
    // { title: "Federated Learning: Principles & Practice", subtitle: "Privacy-Preserving Distributed AI", status: "In Progress", publisher: "Publisher Name", year: "2026", cover: "assets/book4.jpg", description: "Deep dive into federated learning frameworks, optimization techniques, and real-world deployment across healthcare, finance, and IoT." },
  ],

  /* ── Workshops Data ───────────────────────────────────────────── */
  workshops: {
    ongoing: [
    //   {
    //   title: "AI in Healthcare Workshop",
    //   date: "12–14 May 2026",
    //   time: "10:00 AM – 4:00 PM",
    //   location: "Sharda University, Greater Noida",
    //   attendees: "120+ Participants",
    //   link: "https://example.com"
    // }
    ],
    upcoming: [
    //   {
    //   title: "Federated Learning FDP",
    //   date: "20 June 2026",
    //   time: "11:00 AM – 3:00 PM",
    //   location: "Online (Zoom)"
    // }
    ],
    past: [
      {
      title: "India AI Impact Summit 2026",
      date: "09 Feb 2026",
      time: "10:40 am - 11:30 am",
      location: "202C Lab, Block 3, Sharda University",
      link: "https://drive.google.com/file/d/15SUbiK0IRWEKjciKPljGNLuzUdn4V2-W/view?usp=sharing"
      },
      {
      title: "Research Retreat",
      date: "09 Oct 2024",
      time: "10:20 am - 12:10 pm",
      location: "007D Lab, Block 3, Sharda University",
      link: "https://drive.google.com/file/d/1iJgU2OKnKC33d3QgLOgYtObQz3Y9qosq/view?usp=sharing"
      }
    ]
  },

  /* ── Lectures (YouTube) ──────────────────────────────────── */
  lectures: [
    // ── ADD/EDIT YOUTUBE VIDEOS HERE ──
    // thumbnailUrl: YouTube thumbnail URL or leave "" for placeholder
    { title: "Random Search & Grid Search", playlist: "", youtubeUrl: "https://youtu.be/bZBeflYLLss?si=nVr94DcPJHu0ac_8", thumbnailUrl: "" },
    { title: "Travelling Salesman Problem in AI", playlist: "", youtubeUrl: "https://youtu.be/qcS_h-wVaME?si=_Xsja5vybUh-26hf", thumbnailUrl: "" },
    { title: "Search in AI", playlist: "", youtubeUrl: "https://youtu.be/xPXpPjnxFtM?si=Abl_I4nWWJKGcg2_", thumbnailUrl: "" },
    { title: "Doubly linked list in data structure", playlist: "", youtubeUrl: "https://youtu.be/IkUqog5q5XQ?si=KyM6dZG1GZIEBfnQ", thumbnailUrl: "" },
    { title: "Project Management", playlist: "", youtubeUrl: "https://youtu.be/9JOJmnW89yw?si=tdcy5YtFaL0QDdjP", thumbnailUrl: "" },
    { title: "ITProgManagement", playlist: "", youtubeUrl: "https://youtu.be/h2QXiQ4lYqA?si=pnb6GzI17Gj2jZgy", thumbnailUrl: "" },
  ],
  youtubeChannel: "https://www.youtube.com/@swatisah6041",
};


/* ============================================================
   DARK MODE TOGGLE
   ============================================================ */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleIcon();
}

function updateToggleIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const btn = document.getElementById('themeToggle');

  if (!btn) return;

  btn.innerHTML = isDark
    ? `
      <svg width="18" height="18" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `
    : `
      <svg width="18" height="18" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.8A9 9 0 1111.2 3
        7 7 0 0021 12.8z"></path>
      </svg>
    `;
}

initTheme();


/* ============================================================
   ROUTER — Hash-based SPA
   ============================================================ */
const routes = {
  home:           renderHome,
  about:          renderAbout,
  recognitions:   renderRecognitions,
  qualifications: renderQualifications,
  workshops:      renderWorkshops,
  lectures:       renderLectures,
  books:          renderBooks,
  papers:         renderPapers,
  articles:       renderArticles,
  contact:        renderContact,
  course:         renderCourse,
};

function navigate(route, params = {}) {
  const qs = Object.keys(params).length ? '?' + new URLSearchParams(params).toString() : '';
  window.location.hash = '#' + route + qs;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function parseHash() {
  const raw = window.location.hash.replace('#', '') || 'home';
  const [route, search] = raw.split('?');
  const params = search ? Object.fromEntries(new URLSearchParams(search)) : {};
  return { route, params };
}

function router() {
  const { route, params } = parseHash();
  const fn = routes[route] || renderHome;
  fn(params);
  updateNavActive(route);
  updateToggleIcon();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

function updateNavActive(route) {
  document.querySelectorAll('.nav-link[data-route]').forEach(el => {
    el.classList.toggle('active', el.dataset.route === route);
  });
}


/* ============================================================
   LAYOUT HELPERS
   ============================================================ */
function getNavbar() {
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-logo" onclick="navigate('home')">Prof. <span>Swati Sah</span></div>

    <div class="nav-links" id="navLinks">
      <div class="nav-item">
        <a class="nav-link" href="#home" data-route="home">Home</a>
      </div>

      <div class="nav-item">
        <div class="nav-link">About
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </div>
        <div class="dropdown">
          <a href="#about">Overview</a>
          <a href="#recognitions">Recognitions &amp; Awards</a>
          <a href="#qualifications">Qualifications</a>
        </div>
      </div>

      <div class="nav-item">
        <div class="nav-link">Work
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </div>
        <div class="dropdown">
          <a href="#workshops">Workshops</a>
          <a href="#lectures">Lectures &amp; Videos</a>
          <a href="#books">Books</a>
          <a href="#papers">Conference Papers</a>
          <a href="#articles">Articles &amp; Journals</a>
        </div>
      </div>

      <div class="nav-item">
        <a class="nav-link" href="#contact" data-route="contact">Contact</a>
      </div>
    </div>

    <div class="nav-right">
      <button class="dark-toggle" id="themeToggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
      <button class="nav-mobile-toggle" onclick="toggleMobileNav()" aria-label="Toggle menu">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="2" y1="6" x2="20" y2="6"/>
          <line x1="2" y1="11" x2="20" y2="11"/>
          <line x1="2" y1="16" x2="20" y2="16"/>
        </svg>
      </button>
    </div>
  </nav>`;
}

function toggleMobileNav() {
  document.getElementById('navbar').classList.toggle('nav-mobile-open');
}

function getFooter() {
  const p = SITE_DATA.professor;
  return `
  <footer>
    <div class="footer-name">${p.name}</div>
    <div>${p.title} · ${p.institution}</div>
    <div style="margin-top:.75rem;display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;">
      <a href="mailto:${p.email}">${p.email}</a>
      <a href="${p.linkedin}" target="_blank">LinkedIn</a>
      <a href="${p.googleScholar}" target="_blank">Google Scholar</a>
      <a href="${SITE_DATA.youtubeChannel}" target="_blank">YouTube</a>
    </div>
    <div style="margin-top:1rem;font-size:.78rem;opacity:.5;">© ${new Date().getFullYear()} ${p.name} · All rights reserved</div>
  </footer>`;
}

function setPage(html) {
  document.getElementById('app').innerHTML =
    getNavbar() +
    `<div class="page-container">${html}</div>` +
    getFooter();
  updateToggleIcon();
}

function pageHeader(label, title, sub = '') {
  return `
  <div class="page-header">
    <div class="page-header-inner">
      <div class="page-header-label">${label}</div>
      <h1 class="page-header-title">${title}</h1>
      ${sub ? `<p class="page-header-sub">${sub}</p>` : ''}
    </div>
  </div>`;
}


/* ============================================================
   PAGE RENDERERS
   ============================================================ */

/* ── HOME ────────────────────────────────────────────────────── */
function renderHome() {
  const p = SITE_DATA.professor;

  const statsHtml = p.stats.map(s => `
    <div class="stat-item">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  const universitiesHtml = SITE_DATA.universities.map(uni => {
    const coursesHtml = uni.courses.map(c => `
      <div class="course-link" onclick="navigate('course',{uni:'${uni.key}',course:'${c.key}'})">
        <span style="font-size:.9rem;flex-shrink:0;">📖</span>
        <span class="course-link-text">
          <span class="course-name">${c.title}</span>
          ${c.code ? `<span class="course-code">${c.code}</span>` : ''}
        </span>
        <span style="font-size:.75rem;opacity:.45;flex-shrink:0;">→</span>
      </div>`).join('');

    return `
    <div class="university-block">
      <div class="university-header">
        <div class="university-icon">${uni.icon}</div>
        <div>
          <div class="university-name">${uni.name}</div>
          <div class="university-location">${uni.location}</div>
        </div>
      </div>
      <div class="courses-list">${coursesHtml}</div>
    </div>`;
  }).join('');

  setPage(`
    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-photo-wrap fade-up delay-1">
          <div class="hero-photo-ring">
            <div class="hero-photo">
              <img src="${p.photo}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.innerHTML='👩‍🏫'">
            </div>
          </div>
          <div class="hero-photo-badge">12+ Years Experience</div>
        </div>

        <div class="hero-content">
          <div class="hero-eyebrow fade-up delay-1">Professor · Researcher · Author</div>
          <h1 class="hero-name fade-up delay-2">${p.name}</h1>
          <p class="hero-desc fade-up delay-3">${p.shortBio}</p>
          <div class="hero-actions fade-up delay-4">
            <a class="btn btn-primary" href="#about">Know More</a>
            <a class="btn btn-outline" href="#contact">Get in Touch</a>
          </div>
          <div class="hero-stats fade-up delay-5">${statsHtml}</div>
        </div>
      </div>
    </section>

    <!-- COURSES SECTION -->
    <section class="courses-section">
      <div class="courses-inner">
        <div class="section-label">Teaching Portfolio</div>
        <h2 class="section-title">Courses Taught</h2>
        <div class="section-divider"></div>
        ${universitiesHtml}
      </div>
    </section>
  `);
}


/* ── ABOUT ───────────────────────────────────────────────────── */
function renderAbout() {
  const p = SITE_DATA.professor;
  const a = SITE_DATA.about;

  const bioHtml = a.fullBio.map(para => `<p>${para}</p>`).join('');

  const expHtml = a.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot">${e.icon}</div>
      <div class="timeline-body">
        <div class="timeline-title">${e.title}</div>
        <div class="timeline-org">${e.org}</div>
        <div class="timeline-period">${e.period}</div>
      </div>
    </div>`).join('');

  setPage(`
    ${pageHeader('Academic Profile', p.name, p.title + ' · ' + p.institution)}
    <div class="section">
      <div class="about-grid">
        <aside class="about-sidebar">
          <div class="about-photo">
            <img src="${p.aboutPhoto}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.innerHTML='👩‍🏫'">
          </div>
          <div class="about-sidebar-info">
            <div class="sidebar-label">Institution</div>
            <div class="sidebar-value">${p.institution}</div>

            <div class="sidebar-label">Research Areas</div>
            <div class="sidebar-value">AI · ML · Federated Learning · Cyber Security</div>

            <div class="sidebar-label">Email</div>
            <div class="sidebar-value">
              <a href="mailto:${p.email}" style="color:var(--gold)">${p.email}</a>
            </div>

            <div class="sidebar-label">Links</div>
            <div class="sidebar-value" style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.4rem;">
              <a href="${p.googleScholar}" class="btn btn-outline btn-sm" target="_blank">Scholar</a>
              <a href="${p.linkedin}" class="btn btn-outline btn-sm" target="_blank">LinkedIn</a>
              <a href="${SITE_DATA.youtubeChannel}" class="btn btn-outline btn-sm" target="_blank">YouTube</a>
            </div>
          </div>
        </aside>

        <div class="about-content">
          <div class="section-label">Biography</div>
          <h2>About Prof. Swati Sah</h2>
          <div class="section-divider"></div>
          ${bioHtml}

          <div class="section-label mt-4">Academic Journey</div>
          <h2>Experience</h2>
          <div class="section-divider"></div>
          <div class="timeline">${expHtml}</div>

          <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);">
            <a href="./assets/swati-sah-resume.docx" download class="btn btn-primary">
              ⬇&nbsp; Download Full CV / Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  `);
}


/* ── RECOGNITIONS ────────────────────────────────────────────── */
function renderRecognitions() {
  const itemsHtml = SITE_DATA.recognitions.map(r => `
    <div class="recognition-item">
      <div class="recognition-icon">${r.icon}</div>
      <div>
        <div class="recognition-title">${r.title}</div>
        <div class="recognition-body">${r.body}</div>
      </div>
    </div>`).join('');

  setPage(`
    ${pageHeader('Honours & Awards', 'Recognitions', 'Awards, Honours and Distinguished Achievements')}
    <div class="section">
      <div class="section-label">Achievements</div>
      <h2 class="section-title">Awards &amp; Recognitions</h2>
      <div class="section-divider"></div>
      ${itemsHtml}
    </div>
  `);
}


/* ── QUALIFICATIONS ──────────────────────────────────────────── */
function renderQualifications() {
  const cardsHtml = SITE_DATA.qualifications.map(q => `
    <div class="qual-card">
      <div class="qual-degree">${q.degree}</div>
      <div class="qual-field">${q.field}</div>
      <div class="qual-univ">${q.university}</div>
      ${q.specialization ? `<div style="font-size:.8rem;color:var(--gold);margin-top:.5rem;">${q.specialization}</div>` : ''}
    </div>`).join('');

  setPage(`
    ${pageHeader('Academic Background', 'Qualifications', 'Educational Credentials & Academic Training')}
    <div class="section">
      <div class="section-label">Education</div>
      <h2 class="section-title">Academic Qualifications</h2>
      <div class="section-divider"></div>
      <div class="qualifications-grid">${cardsHtml}</div>
    </div>
  `);
}


/* ── COURSE DETAIL ───────────────────────────────────────────── */
function renderCourse({ uni: uniKey, course: courseKey }) {
  const uni = SITE_DATA.universities.find(u => u.key === uniKey);
  if (!uni) { renderHome(); return; }
  const course = uni.courses.find(c => c.key === courseKey);
  if (!course) { renderHome(); return; }

  const topicsHtml = course.topics.map((t, i) => `
    <div class="course-topic-item">
      <span class="topic-num">${String(i + 1).padStart(2, '0')}</span>
      <span>${t}</span>
    </div>`).join('');

  setPage(`
    ${pageHeader(uni.name + ' · ' + uni.location,
      course.title + (course.code ? ` <span style="font-size:1.1rem;opacity:.55;font-weight:400">[${course.code}]</span>` : ''))}

    <div class="section">
      <a href="#home" class="btn btn-outline btn-sm" style="margin-bottom:2rem;">← Back to Home</a>

      <div class="course-detail-grid">
        <div>
          <div class="section-label">Course Overview</div>
          <h2 class="section-title" style="font-size:1.8rem;">${course.title}</h2>
          <div class="section-divider"></div>
          <p style="color:var(--text-mid);line-height:1.85;margin-bottom:2rem;">${course.description}</p>

          <div class="section-label">Syllabus Topics</div>
          <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:var(--brown-deep);margin-bottom:1rem;">Course Content</h3>
          <div style="border:1px solid var(--border);border-radius:16px;overflow:hidden;background:var(--bg-card);">
            ${topicsHtml}
          </div>
        </div>

        <aside>
          <div class="course-sidebar-card">
            <h3>Course Resources</h3>
            <p style="font-size:.85rem;opacity:.7;margin-bottom:1.5rem;">${uni.name}</p>
            <a href="${course.syllabusUrl}" class="resource-btn" target="_blank">📄&nbsp; View Syllabus</a>
            <a href="${course.notesUrl}" class="resource-btn" target="_blank">📝&nbsp; Lecture Notes</a>
            <a href="${course.assignmentsUrl}" class="resource-btn" target="_blank">📋&nbsp; Assignments</a>
          </div>

          <div class="card" style="margin-top:1.5rem;">
            <div class="section-label">Institution</div>
            <div style="font-weight:600;color:var(--brown-deep);margin:.3rem 0;">${uni.name}</div>
            <div style="font-size:.85rem;color:var(--text-light);">${uni.location}</div>
          </div>
        </aside>
      </div>
    </div>
  `);
}


/* ── WORKSHOPS ───────────────────────────────────────────────── */
function workshopSection(title, workshops) {
  // If no workshops → show message
  if (!workshops || workshops.length === 0) {
    return `
      <div class="empty-workshop">
        No workshops available currently.
      </div>
    `;
  }

  const cards = workshops.map(w => `
    <div class="workshop-card">
      <div class="workshop-date">${w.date}</div>
      <div class="workshop-title">${w.title}</div>
      <div class="workshop-venue">📍 ${w.location}</div>
      <div class="workshop-time">⏰ ${w.time}</div>
      ${w.attendees ? `<div class="workshop-attendees">👥 ${w.attendees}</div>` : ''}
      ${w.link ? `<a href="${w.link}" target="_blank" class="btn btn-outline btn-sm">View Details</a>` : ''}
    </div>
  `).join('');

  return `
    <h3 class="workshop-section-title">${title}</h3>
    <div class="workshop-grid">${cards}</div>
  `;
}

function renderWorkshops() {
  const w = SITE_DATA.workshops;

  setPage(`
    ${pageHeader('Academic Events','Workshops','Workshops, FDPs & Training Programs')}

    <div class="section">
      <div class="section-label">Events</div>
      <h2 class="section-title">Workshops</h2>
      <div class="section-divider"></div>

      ${workshopSection("Ongoing Workshops", w.ongoing)}
      ${workshopSection("Upcoming Workshops", w.upcoming)}
      ${workshopSection("Past Workshops", w.past)}

    </div>
  `);
}


/* ── LECTURES ────────────────────────────────────────────────── */
function renderLectures() {
  const videosHtml = SITE_DATA.lectures.map(v => `
    <div class="video-card">
      <a href="${v.youtubeUrl}" target="_blank">
        <div class="video-thumb">
          ${v.thumbnailUrl
            ? `<img src="${v.thumbnailUrl}" alt="${v.title}">`
            : '▶'}
        </div>
      </a>
      <div class="video-info">
        <div class="video-title">${v.title}</div>
        <div class="video-meta">${v.playlist}</div>
        <a href="${v.youtubeUrl}" target="_blank" class="btn btn-outline btn-sm" style="margin-top:.75rem;">Watch on YouTube</a>
      </div>
    </div>`).join('');

  setPage(`
    ${pageHeader('Video Lectures', 'Lectures &amp; Videos', 'Educational content available on YouTube')}
    <div class="section">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
        <div>
          <div class="section-label">YouTube Content</div>
          <h2 class="section-title">Video Lectures</h2>
          <div class="section-divider"></div>
        </div>
        <a href="${SITE_DATA.youtubeChannel}" target="_blank" class="btn btn-primary" style="flex-shrink:0;">
          ▶&nbsp; Visit YouTube Channel
        </a>
      </div>
      <div class="video-grid">${videosHtml}</div>
    </div>
  `);
}


/* ── BOOKS ───────────────────────────────────────────────────── */
function renderBooks() {
  const cardsHtml = SITE_DATA.books.map(b => `
    <div class="book-card">
      <div class="book-cover">
        ${b.cover
          ? `<img src="${b.cover}" alt="${b.title}" onerror="this.style.display='none';this.parentElement.innerHTML='📚'">`
          : '📚'}
      </div>
      <div class="book-info">
        <div class="book-title">${b.title}</div>
        <div style="font-size:.82rem;color:var(--text-mid);font-style:italic;margin-bottom:.4rem;">${b.subtitle}</div>
        <div class="book-meta">${b.publisher} · ${b.year}</div>
        <div class="book-status">${b.status}</div>
        <p style="font-size:.82rem;color:var(--text-light);line-height:1.6;margin-top:.75rem;">${b.description}</p>
      </div>
    </div>`).join('');

  setPage(`
    ${pageHeader('Publications', 'Books', 'Authored &amp; co-authored academic books')}
    <div class="section">
      <div class="section-label">Academic Books</div>
      <h2 class="section-title">Books</h2>
      <div class="section-divider"></div>
      <div class="book-grid">${cardsHtml}</div>
    </div>
  `);
}


/* ── PAPERS ──────────────────────────────────────────────────── */
function renderPapers() {
  const papersHtml = SITE_DATA.papers.map((paper, idx) => `
    <div class="paper-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
        <div style="flex:1;">
          <div class="paper-title">
            <a href="${paper.url}" target="_blank" rel="noopener noreferrer">${paper.title}</a>
          </div>
          <div class="paper-authors">${paper.authors}</div>
          <div class="paper-venue">${paper.venue}</div>
        </div>
        <a href="${paper.url}" target="_blank" rel="noopener noreferrer"
           class="btn btn-outline btn-sm" style="flex-shrink:0;white-space:nowrap;">
          View Paper →
        </a>
      </div>
      <div class="paper-tags">${paper.tags.map(t => `<span class="paper-tag">${t}</span>`).join('')}</div>
    </div>`).join('');

  setPage(`
    ${pageHeader('Research Output', 'Conference Papers', `${SITE_DATA.papers.length} peer-reviewed conference contributions`)}
    <div class="section">
      <div class="section-label">Research Papers</div>
      <h2 class="section-title">Conference Papers</h2>
      <div class="section-divider"></div>
      <p style="color:var(--text-light);font-size:.875rem;margin-bottom:2rem;">
        Click <strong>"View Paper →"</strong> on any entry to open it on Google Scholar.
      </p>
      ${papersHtml}
    </div>
  `);
}


/* ── ARTICLES ────────────────────────────────────────────────── */
function renderArticles() {
  const articlesHtml = SITE_DATA.articles.map(a => `
    <div class="paper-item">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
        <div style="flex:1;">
          <div class="paper-title">
            <a href="${a.url}" target="_blank" rel="noopener noreferrer">${a.title}</a>
          </div>
          <div class="paper-venue">${a.journal} · ${a.year}</div>
        </div>
        <a href="${a.url}" target="_blank" rel="noopener noreferrer"
           class="btn btn-outline btn-sm" style="flex-shrink:0;white-space:nowrap;">
          View Article
        </a>
      </div>
      <div class="paper-tags">${a.tags.map(t => `<span class="paper-tag">${t}</span>`).join('')}</div>
    </div>`).join('');

  setPage(`
    ${pageHeader('Research Output', 'Articles &amp; Journals', 'Journal articles and research publications')}
    <div class="section">
      <div class="section-label">Journal Publications</div>
      <h2 class="section-title">Articles &amp; Journals</h2>
      <div class="section-divider"></div>
      ${articlesHtml}
    </div>
  `);
}


/* ── CONTACT ─────────────────────────────────────────────────── */
function renderContact() {
  const p = SITE_DATA.professor;
  setPage(`
    ${pageHeader('Get in Touch', 'Contact', 'Reach out for collaborations, speaking invitations, or academic enquiries')}
    <div class="section">
      <div class="contact-grid">
        <div class="contact-info-card">
          <h2>Contact Information</h2>
          <div class="contact-item">
            <div class="contact-icon">✉</div>
            <div>
              <div class="contact-label">Email</div>
              <div class="contact-value"><a href="mailto:${p.email}">${p.email}</a></div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">🏛</div>
            <div>
              <div class="contact-label">Institution</div>
              <div class="contact-value">${p.institution}</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">🔗</div>
            <div>
              <div class="contact-label">LinkedIn</div>
              <div class="contact-value"><a href="${p.linkedin}" target="_blank">View Profile</a></div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">🎓</div>
            <div>
              <div class="contact-label">Google Scholar</div>
              <div class="contact-value"><a href="${p.googleScholar}" target="_blank">View Publications</a></div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📺</div>
            <div>
              <div class="contact-label">YouTube</div>
              <div class="contact-value"><a href="${SITE_DATA.youtubeChannel}" target="_blank">@swatisah6041</a></div>
            </div>
          </div>
        </div>

        <div class="contact-form-card">
          <h2>Send a Message</h2>
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input class="form-input" type="text" placeholder="Your name">
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input class="form-input" type="email" placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label class="form-label">Subject</label>
            <input class="form-input" type="text" placeholder="Research collaboration / Speaking invite / Other">
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea class="form-textarea" placeholder="Your message..."></textarea>
          </div>
          <button class="btn btn-primary" style="width:100%;justify-content:center;"
            onclick="alert('Thank you! Your message will be sent once the backend email service is configured.')">
            Send Message
          </button>
          <p style="font-size:.78rem;color:var(--text-light);margin-top:1rem;text-align:center;">
            Or email directly at <a href="mailto:${p.email}" style="color:var(--gold)">${p.email}</a>
          </p>
        </div>
      </div>
    </div>
  `);
}
