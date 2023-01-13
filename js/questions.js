//AL 2014 ICT P1

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "The Internet can be defined as:?",
    answer: "Worldwide network of computers that share resources.",
    options: [
      "Network of computer networks that share resources.",
      "Interconnection of computers that share resources across regions.",
      "Worldwide network of computers that share resources.",
      "World Wide Web."
    ]
  },
    {
    numb: 2,
    question: "Which of the following, is true about multitasking",
    answer: "A CPU can process several tasks at a time.",
    options: [
      "operating systems? Several CPUs are needed to process a task at a time.",
      "A CPU can process several tasks at a time.",
      "Several users can access the same task at a time.",
      "Several CPUs with each processing a separate task."
    ]
  },
    {
    numb: 3,
    question: "The performance of a network does NOT depend on the:",
    answer: "Distance between connecting devices",
    options: [
      "Number of users.",
      "Capabilities of the connected hardware",
      "Bandwidth",
      "Distance between connecting devices"
    ]
  },
    {
    numb: 4,
    question: "The basic device that acts as a central controller to all the computers on a school network is called;",
    answer: "Server",
    options: [
      "Modem",
      "Switch",
      "Server",
      "RJ45 connector"
    ]
  },
    {
    numb: 5,
    question: "The number of separate cables needed in a mesh topology of FIVE computers is:",
    answer: "10",
    options: [
      "10",
      "5",
      "4",
      "8"
    ]
  },
  {
    numb: 6,
    question: "Which of the following cables is the fastest channel of communication in computer networks?",
    answer: "Fibre optic",
    options: [
      "Fibre optic",
      "Coaxial cable",
      "Unshielded twisted pair",
      "Shielded twisted pair"
    ]
  },
  {
    numb: 7,
    question: "The correct spreadsheet formula for the average of two cells A1 and A2 where A1 is possibly blank is:",
    answer: "Correct answer of the question is here",
    options: [
      "=(Al:A2)/2 :",
      "=average(Al+A2)",
      " =AVERAGE((Al+A2)/2)",
      "=average(A 1, A2)"
    ]
  },
  {
    numb: 8,
    question: "Which of the following is NOT possible in a word processing software?",
    answer: "Correct answer of the question is here",
    options: [
      "Add values in a table",
      "Merge cells in a table",
      "Wrap text in a table",
      "Link cells in different tables."
    ]
  },
  {
    numb: 9,
    question: "The application software that is best used to project reports to an audience using a digital projector is:",
    answer: "Correct answer of the question is here",
    options: [
      "Word-processing software",
      "Scanner software",
      "Presentation software",
      "Spreadsheet software"
    ]
  },
  {
    numb: 10,
    question: "Which of the following is AGAINST copyright laws for acquired software?",
    answer: "Correct answer of the question is here",
    options: [
      "Making a backup copy of the software",
      "Installing the software in unlimited number of computers",
      "Using the software in a country different to that in which it was bought",
      "Using the software for unlimited period of time"
    ]
  },
  {
    numb: 11,
    question: "A method to reduce piracy of software supplied on CDs is:",
    answer: "Correct answer of the question is here",
    options: [
      "Use of serial numbers",
      "Write protect CDs",
      "Production of tutorials",
      " Identifying end user"
    ]
  },
  {
    numb: 12,
    question: "The collection of principles that judge whether people’s actions are correct or wrong is known as:",
    answer: "Correct answer of the question is here",
    options: [
      "Legislation",
      "Data Protection Act",
      "Ergonomics",
      "Ethics"
    ]
  },
  {
    numb: 13,
    question: "A UPS is a device that CANNOT be used to:",
    answer: "Correct answer of the question is here",
    options: [
      "Provide power to a computer when electricity supply fails",
      "Stop excess flow of electricity into a computer",
      "Stabilises electricity flow into a computer",
      "Automatically stop electricity flow into a computer"
    ]
  },
  {
    numb: 14,
    question: "A tool that can recognize and execute a sequence of instructions written in a programming language is:",
    answer: "Correct answer of the question is here",
    options: [
      "Compiler",
      "Translator",
      "Assembler",
      "Interpreter"
    ]
  },
  {
    numb: 15,
    question: "In writing codes in a programming language, one must follow the rules of the language called:",
    answer: "Correct answer of the question is here",
    options: [
      "Coding",
      "Protocol",
      "Syntax",
      "Semantics"
    ]
  },
  {
    numb: 16,
    question: "An error in a program code is also known as a(n):",
    answer: "Correct answer of the question is here",
    options: [
      "Syntax",
      "Interrupt",
      "Codec",
      "Bug"
    ]
  },
  {
    numb: 17,
    question: "At which of the following stages will the programmer concentrate on devicing a test plan?",
    answer: "Correct answer of the question is here",
    options: [
      "Requirement analysis",
      "Procedural implementation",
      "Design",
      "Investigation"
    ]
  },
  {
    numb: 18,
    question: "How many CDs of 700 MB capacity can contain 100 newsletters from a digital library assuming that the average number of characters of each newsletter is 1000?",
    answer: "Correct answer of the question is here",
    options: [
      "10",
      "11",
      "1",
      "70"
    ]
  },
  {
    numb: 19,
    question: "A functional requirements report indicates the work done in the phase",
    answer: "Correct answer of the question is here",
    options: [
      "Development",
      "Investigation",
      "Design",
      "Analysis"
    ]
  },
  {
    numb: 20,
    question: "The bit pattern of the digit 0 in ASCII code is 00110000. What would be the bit pattern for the digit 2 assuming that the representation of adjacent digits corresponds to adjacent binary numbers?",
    answer: "Correct answer of the question is here",
    options: [
      "00111000",
      "00110100",
      "00110001",
      "00110010"
    ]
  },
  {
    numb: 21,
    question: "Which of the following is a recommended practice in writing good algorithms?",
    answer: "Correct answer of the question is here",
    options: [
      "It must be written in English",
      "It must not be too long; at most 20 lines",
      "Keywords must be written in capital letters",
      "It must have finite number of steps"
    ]
  },
  {
    numb: 22,
    question: "One characteristic of algorithms is that:",
    answer: "Correct answer of the question is here",
    options: [
      "They can easily be executed by the computer",
      "They can easily be executed by a compiler",
      "They can run on most computers",
      "Non-programmers can understand it"
    ]
  },
  {
    numb: 23,
    question: "In low level programming languagesIn low level programming languages",
    answer: "Correct answer of the question is here",
    options: [
      "Codes are written in a form that the computer can execute directly",
      "Programmers easily write codes using them",
      "Programs are cheaper to design",
      "Codes cannot be used to write programs for difficult tasks"
    ]
  },
  {
    numb: 24,
    question: "One advantage of high level programming languages over low level programming languages is:",
    answer: "Correct answer of the question is here",
    options: [
      " It is written in a language easily understood by programmers",
      "It is cheaper to get associated software",
      "Its Software is more common in the software market",
      "It’s less bulky in relation to memory space"
    ]
  },
  {
    numb: 25,
    question: "In Object Oriented Programming, programmers are able to:",
    answer: "Correct answer of the question is here",
    options: [
      "Program objects that serve human beings",
      "Create relationships between objects",
      "Describe behaviour of objects in terms of their characteristics",
      " Represent program codes as objects"
    ]
  },
  {
    numb: 26,
    question: "The machine cycle includes Fetch, Decode, ....... and Store",
    answer: "Correct answer of the question is here",
    options: [
      "Execute",
      "Coding",
      "Process",
      "Run"
    ]
  },
  {
    numb: 27,
    question: "Sequential files may be accessed by a:",
    answer: "Correct answer of the question is here",
    options: [
      "Key field",
      "Loop",
      "Memory registers",
      "Pointer"
    ]
  },
  {
    numb: 28,
    question: "In relation to database, a file is defined as a collection of:",
    answer: "Correct answer of the question is here",
    options: [
      "Similar items",
      "Related records",
      "Related fields",
      "Tables"
    ]
  },
  {
    numb: 29,
    question: "A file organization (and relevant access method) is most dependent on the:",
    answer: "Correct answer of the question is here",
    options: [
      "Ordering of records in the file",
      "Layout of the records in the file",
      "Characteristics of the storage medium",
      "Components of records in the file"
    ]
  },
  {
    numb: 30,
    question: "One advantage of hashed organization of files is that it:",
    answer: "Correct answer of the question is here",
    options: [
      "Is faster to access files by considering their frequency of usage",
      " Permits direct access of records that are placed randomly",
      "Discourages file defragmentation for easy access",
      "Compresses records and thus uses less storage"
    ]
  },
  {
    numb: 31,
    question: "A flat file database is different from a relational database in that;",
    answer: "Correct answer of the question is here",
    options: [
      "Its tables have more fields",
      "It is made up of one table",
      "It eliminates redundancy",
      "It contains a unique primary key"
    ]
  },
  {
    numb: 32,
    question: "One possible way to create a table using a DBMS is in:",
    answer: "Correct answer of the question is here",
    options: [
      "Design view",
      "Datasheet view",
      "Table view",
      "Query view"
    ]
  },
  {
    numb: 33,
    question: "Which of the following database objects is used to enter data into a relation?",
    answer: "Correct answer of the question is here",
    options: [
      "Queries",
      "Reports",
      "Forms",
      "Relationships"
    ]
  },
  {
    numb: 34,
    question: "An information system that does NOT directly assist in the management of an organisation is:",
    answer: "Correct answer of the question is here",
    options: [
      "Management Information System",
      "Geographic Information System",
      "Health Information System",
      "Decision Support System"
    ]
  },
  {
    numb: 35,
    question: "A field that can be used to sort data in a table is called a(n):",
    answer: "Correct answer of the question is here",
    options: [
      "Primary key",
      "Foreign key",
      "Secondary key",
      "Identity key"
    ]
  },
  {
    numb: 36,
    question: "Which of the following is true about database tables?",
    answer: "Correct answer of the question is here",
    options: [
      "The number of tables in a database must be less than six",
      "The number of fields must exceed two",
      "The order of the fields is not important",
      "The primary key must be the first field"
    ]
  },
  {
    numb: 37,
    question: "Consider the following logic Arithmetic for AND gate, where: A=0 AND 0, B=1 AND 0, C=1 AND 1. The truth values A, B and C is:",
    answer: "Correct answer of the question is here",
    options: [
      "A=0, B=l, C=1",
      "A=1, B=0, C=0",
      "A=0, B=0, C=1",
      "A=0, B=l, C=0"
    ]
  },
  {
    numb: 38,
    question: "Your Question is Here",
    answer: "Correct answer of the question is here",
    options: [
      "Option 1",
      "option 2",
      "option 3",
      "option 4"
    ]
  },
  {
    numb: 39,
    question: "Which of the following is an activity of system implementation?",
    answer: "Correct answer of the question is here",
    options: [
      "Decide on which hardware to use",
      "Writing algorithms",
      "Training of users",
      "Describing output formats"
    ]
  },
  {
    numb: 40,
    question: "Which of the following defines pilot implementation of a system in an organisation?",
    answer: "Correct answer of the question is here",
    options: [
      "Abandon the old system and switch to the new one",
      "Use the old system alongside the new one",
      "Use the new system only in a department; then later extend to others",
      "Use just part of the system processes; then later use the new"
    ]
  },
  {
    numb: 41,
    question: "One detail found in the user’s guide of a system is:",
    answer: "Correct answer of the question is here",
    options: [
      "Users’ job description",
      "Upgrade possibilities",
      "Algorithms",
      "Codes of various tasks"
    ]
  },
  {
    numb: 42,
    question: "The number 4683 is not a possible number in octal because it:",
    answer: "Correct answer of the question is here",
    options: [
      "Neither contains binary digits",
      "Contains only four digits",
      "Contains the digit 8",
      " is not divisible by 8"
    ]
  },
  {
    numb: 43,
    question: "One way to avoid repetitive stress injury is to:",
    answer: "Correct answer of the question is here",
    options: [
      "Use LCD monitors",
      "Avoid eye contact with the monitor",
      "Use level tables",
      "Use adjustable chair"
    ]
  },
  {
    numb: 44,
    question: "Different programmers can write program \
     modules in different platforms using high-level \
    non procedural languages. Which generation of \
    programming languages could be most easily \
    used to integrate their different modules?",
    answer: "Correct answer of the question is here",
    options: [
      "First",
      "Second",
      "Third",
      "Fourth"
    ]
  },
  {
    numb: 45,
    question: "Which of the following determines whether a \
    project should be carried out?",
    answer: "Correct answer of the question is here",
    options: [
      "Identification",
      "Feasibility assessment",
      "Program specification",
      "System evaluation"
    ]
  },
  {
    numb: 46,
    question: "In the analysis phase, the development of which of \
    the following clearly states the goals and \
    objectives of the project",
    answer: "Correct answer of the question is here",
    options: [
      "Flowchart",
      "Program specification",
      "Design",
      "Documentation"
    ]
  },
  {
    numb: 47,
    question: "What would be the main advantage of using a \
    prototype in the design phase of an information System?",
    answer: "Correct answer of the question is here",
    options: [
      "Provides enough evidence of functionality",
      "Is the final design of the information system",
      "Helps automate the task of documentation",
      "Helps to train the users before conversion"
    ]
  },
  {
    numb: 48,
    question: "The organized process or set of steps that needs \
    to be followed to build an ICT system is known as:",
    answer: "Correct answer of the question is here",
    options: [
      "Information System Analysis",
      "Project Management",
      "System development life cycle",
      "Software development life cycle"
    ]
  },
  {
    numb: 49,
    question: "A manager who needs a type of information \
    system that would enable the importation of \
    veryreliable and recent data from a database \
    should acquire:",
    answer: "Correct answer of the question is here",
    options: [
      "A management information system",
      "Real time processing system",
      "An executive information system",
      "A transaction processing system"
    ]
  },
  {
    numb: 50,
    question: "After a system has been successfully designed, the \
    end users must evaluate to see that it meets \
    their needs and functions correctly. This type of \
    testing is",
    answer: "Correct answer of the question is here",
    options: [
      "Unit testing",
      "Program testing",
      "Acceptance testing",
      "Module testing"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];