//ICT JUNE 2011

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "What term is given to a situation where people are allowed to work from home using a computer network?",
        answer: "Teleworking",
        options: [
          " Distance Learning",
          "Internet",
          "Teleworking",
          "Teleconferencing"
        ]
      },
      {
        numb: 2,
        question: "An application software that is knowledge based capable of making decisions or solving problems in a particular field is known as:",
        answer: "Expert system",
        options: [
          "Expert system",
          "Database management system",
          "Information system",
          " Flight reservation system"
        ]
      },
      {
        numb: 3,
        question: "The data in Data Protection Act refers to:",
        answer: "Information about living or dead people",
        options: [
          "All unprocessed facts",
          " Information about individuals who are alive",
          "Information about living or dead people",
          "Data that has been input in a computer"
        ]
      },
      {
        numb: 4,
        question: "Information that is copyrighted can only be used",
        answer: "With the authorization of the author",
        options: [
          "If it is kept confidential",
          "On one page of a document",
          " Within the year the copyright was issued",
          "With the authorization of the author"
        ]
      },
      {
        numb: 5,
        question: "Writing malicious code is an offence under",
        answer: "The Data Protection Act",
        options: [
          "The Computer Misuse Act",
          "The Data Protection Act",
          "Copyright and patents act",
          "The Health and Safety at work Act"
        ]
      },
      {
        numb: 6,
        question: "The process of encoding information in an attempt to make it secure from unauthorized users is known as",
        answer: "Encryption",
        options: [
          "Encryption",
          "Encapsulation",
          "Decryption",
          "Decoding"
        ]
      },
      {
        numb: 7,
        question: "The practice of making an unauthorised transmission appear to come from an authorised user is called",
        answer: "spoofing",
        options: [
          "spooling",
          "spoofing",
          "Cracking",
          "Hacking"
        ]
      },
      {
        numb: 8,
        question: "The fifth generation of computers combine",
        answer: "Large scale integrated circuits and artificial intelligence",
        options: [
          "Vacuum tubes and semi-conductors",
          "Transistors and punched cards",
          "Large scale integrated circuits and transistors",
          "Large scale integrated circuits and artificial intelligence"
        ]
      },
      {
        numb: 9,
        question: "Which of the following is NOT an applications software type?",
        answer: "Desktop publisher",
        options: [
          "Database",
          "Desktop publisher",
          "An antivirus",
          "Spreadsheet"
        ]
      },
      {
        numb: 10,
        question: "Which of the following certainly lose its data when the computer is switched off?",
        answer: "RAM",
        options: [
          "ROM",
          "Hard disc",
          "Flash disc",
          "RAM"
        ]
      },
      {
        numb: 11,
        question: "In the domain of processor architecture, the acronym MIMD stands for",
        answer: "Multiple instruction multiple data",
        options: [
          " Multipurpose internet mail device",
          "Multipurpose inline memory data",
          "Multiple instruction multiple data",
          "Multiple inline multiple data"
        ]
      },
      {
        numb: 12,
        question: "A serious concern and limitation of any data communication network is",
        answer: "Security and privacy concerns",
        options: [
          "Security and privacy concerns",
          "Speed of communication",
          "Resources and data sharing",
          "Distributed computing"
        ]
      },
      {
        numb: 13,
        question: "What acts as an intermediary between hardware and applications software?",
        answer: "Operating system",
        options: [
          "Master boot record (MBR)",
          "BIOS",
          "RAM",
          "Operating system"
        ]
      },
      {
        numb: 14,
        question: "An operating system interface that uses pictures to represent programs is called",
        answer: "GUI",
        options: [
          "MDI",
          "GUI",
          "VDU",
          "BIOS"
        ]
      },
      {
        numb: 15,
        question: "What allows a user to work with more than one piece of software in the same computer session?",
        answer: "Multitasking",
        options: [
          " Multiuser",
          "Multiprogramming",
          "Multidevice",
          "Multitasking"
        ]
      },
      {
        numb: 16,
        question: "A student who intends to pursue a career in ICT with responsibilities of designing and setting up computer \
networks for customers has come to you for advice, What career training option would you advice the \
student to follow?",
        answer: "Correct answer of the question is here",
        options: [
          " Network manager",
          "Network analyst",
          " Network engineer",
          "Systems engineer"
        ]
      },
      {
        numb: 17,
        question: "An information system is built to manage",
        answer: "Correct answer of the question is here",
        options: [
          "Data and information",
          " Data and people",
          " Data and machinery",
          "Transmission of data"
        ]
      },
      {
        numb: 18,
        question: "A system that reads data and produces a list of items that can be used in decision making is",
        answer: "Correct answer of the question is here",
        options: [
          "Data processing system",
          " Operating information system",
          "Geographical information system",
          "Health information system"
        ]
      },
      {
        numb: 19,
        question: "Feedback is when",
        answer: "Correct answer of the question is here",
        options: [
          "Output of the system affects input",
          "Input of the system affects the output",
          " Input of the system affects the processing",
          "The output of the system becomes the input"
        ]
      },
      {
        numb: 20,
        question: "What processing system would you select for financial record-keeping and inventory record-tracking \
that receives information and updates the master files immediately in a DBMS?",
        answer: "Correct answer of the question is here",
        options: [
          "Online transaction processing",
          " Batch processing",
          " Distributed systems processing",
          "Control systems processing"
        ]
      },
      {
        numb: 21,
        question: "Which of the following can NOT be represented by ASCII code?",
        answer: "Correct answer of the question is here",
        options: [
          "Letters",
          "Numerals",
          "Punctuation signs",
          "Graphics"
        ]
      },
      {
        numb: 22,
        question: "How many files of size 512Kb can be stored in 64MB storage media?",
        answer: "Correct answer of the question is here",
        options: [
          "8",
          " 128",
          "1024",
          "8000"
        ]
      },
      {
        numb: 23,
        question: "Which of the following is NOT true of digital data?",
        answer: "Correct answer of the question is here",
        options: [
          "Digital data is described by on/off state",
          "Digital is described by pulse",
          "Digital data takes values from 0 to 9",
          "Digital data is discrete"
        ]
      },
      {
        numb: 24,
        question: "A project that can be accomplished entirely by organisation’s available resources is",
        answer: "Correct answer of the question is here",
        options: [
          " Technically feasible",
          "Operationally feasible",
          " Financially feasible",
          "Tangibly feasible"
        ]
      },
      {
        numb: 25,
        question: "In order to speed up program development small existing modules are put together to form the application \
by specialised software called",
        answer: "Correct answer of the question is here",
        options: [
          "Report generator",
          "Program generator",
          " Query language",
          "rogramming environment"
        ]
      },
      {
        numb: 26,
        question: "Project plans are often graphically represented by means of",
        answer: "Correct answer of the question is here",
        options: [
          " GANTT chart",
          " Pie chart",
          "Histogram",
          "GRANT chart"
        ]
      },
      {
        numb: 27,
        question: "A group of logically related fields in a database is a",
        answer: "Correct answer of the question is here",
        options: [
          "Database file",
          "Record",
          "Data warehouse",
          "Field"
        ]
      },
      {
        numb: 28,
        question: "Which of the following methods will help an organisation to ensure that data entered into its database is \
correct?",
        answer: "Correct answer of the question is here",
        options: [
          " Two persons enter the same data for the computer to compare",
          "Using validity check software",
          "Using experienced data operators",
          "Avoiding noise in the work environment"
        ]
      },
      {
        numb: 29,
        question: "The access for data from a database by an application is called",
        answer: "Correct answer of the question is here",
        options: [
          "Relational database system",
          "Query",
          "A database management system",
          "Database administrator"
        ]
      },
      {
        numb: 30,
        question: "A foreign key in a database table refers to the field that",
        answer: "Correct answer of the question is here",
        options: [
          "Is related to the primary key in the second table",
          "Is not in any other table in a database",
          "Can be referenced by all the tables",
          "Is unique in the table"
        ]
      },
      {
        numb: 31,
        question: "A machine-independent, high-level non-procedural language that uses human words and symbols to program diverse \
computer systems is a",
        answer: "Correct answer of the question is here",
        options: [
          "Fourth generation language (4GL)",
          "Third generation language (3GL)",
          " Second generation language (2GL)",
          "First generation language (1GL)"
        ]
      },
      {
        numb: 32,
        question: "The control unit of a microprocessor",
        answer: "Correct answer of the question is here",
        options: [
          "Stores all the computer’s instructions",
          "Directs data from the keyboard to the monitor",
          " Performs Arithmetic and logic functions",
          "Issues commands to all elements of the computer"
        ]
      },
      {
        numb: 33,
        question: "Communication paths within a computer are called",
        answer: "Correct answer of the question is here",
        options: [
          "Cables",
          "Clusters",
          "Buses",
          "Pathways"
        ]
      },
      {
        numb: 34,
        question: "Which of the following is NOT a typical interface that can fit in an expansion slot connector?",
        answer: "Correct answer of the question is here",
        options: [
          "modem",
          "keyboard",
          "Game controller",
          "Video display adapter"
        ]
      },
      {
        numb: 35,
        question: "A programming language that has the ability to work with a variety of \
        computer hardware and operating systems is said to be:",
        answer: "Correct answer of the question is here",
        options: [
          "multiuser",
          "multitasking",
          "portable",
          "parallel"
        ]
      },
      {
        numb: 36,
        question: "The technical name for a convention through which a web page is identified on the internet is?",
        answer: "Correct answer of the question is here",
        options: [
          "Resource domain name",
          "Universal resource locator (URL)",
          "Protocol",
          "Top level domain name"
        ]
      },
      {
        numb: 37,
        question: "A utility that rewrites all the parts of a file into contiguous clusters of a hard disk is called",
        answer: "Correct answer of the question is here",
        options: [
          "Scandisk",
          "Antivirus",
          "File manager",
          "Defragmenter"
        ]
      },
      {
        numb: 38,
        question: "Which of the following is a task carried out by the operating system?",
        answer: "Correct answer of the question is here",
        options: [
          " Data logging",
          "Providing help in an application software",
          " Transferring data to a printer",
          "Compiling programs"
        ]
      },
      {
        numb: 39,
        question: "The feasibility study of a possible ICT system for an organisation is carried out mostly by",
        answer: "Correct answer of the question is here",
        options: [
          " The system analyst",
          " A computer programmer",
          "The end users of the organisation",
          "The managing director of the organisation"
        ]
      },
      {
        numb: 40,
        question: "Which of the following is likely to be found in the specification document of a system?",
        answer: "Correct answer of the question is here",
        options: [
          "Data handling programs only",
          " Designs of screen layouts only",
          " Security issues only",
          "All of the above"
        ]
      },
      {
        numb: 41,
        question: "The phase of the SDLC in which you model a system from a logical point of view is the",
        answer: "Correct answer of the question is here",
        options: [
          " System investigation phase",
          " System analysis phase",
          " System design phase",
          "System implementation phase"
        ]
      },
      {
        numb: 42,
        question: "One method that may be used by a system analyst to get information for a system is called",
        answer: "Correct answer of the question is here",
        options: [
          "Questionnaires",
          "News paper",
          "Television",
          "Browsing the net"
        ]
      },
      {
        numb: 43,
        question: "A management information system report that shows only the subject of \
        available information based on some selected criteria is",
        answer: "Correct answer of the question is here",
        options: [
          "Periodic report",
          " Summarized report",
          "Exception report",
          "Comparative report"
        ]
      },
      {
        numb: 44,
        question: "What is the data structure that supports FIFO?",
        answer: "Correct answer of the question is here",
        options: [
          "Queues",
          "Stacks",
          "Arrays",
          "Harsh table"
        ]
      },
      {
        numb: 45,
        question: "A data flow diagram shows",
        answer: "Correct answer of the question is here",
        options: [
          "How computers are connected in a network",
          " What software will be used to process data",
          " The way organizational data and information are handled",
          "The parts of the system that process specific data"
        ]
      },
      {
        numb: 46,
        question: "A programming paradigm in which a program is a collection of discrete \
        reusable routines and data that are self contained is called",
        answer: "Correct answer of the question is here",
        options: [
          " Procedural programming",
          " Sequential programming",
          "Object oriented programming",
          "Control programming"
        ]
      },
      {
        numb: 47,
        question: "It is the term used to describe the diagnosis and correction of errors during program or system testing",
        answer: "Correct answer of the question is here",
        options: [
          "Debugging",
          "Validation",
          "Prototyping",
          "Verification"
        ]
      },
      {
        numb: 48,
        question: "Which of the following processes indicates that there is an error in a \
        system but does not pinpoint where'",
        answer: "Correct answer of the question is here",
        options: [
          "Debugging",
          "Testing",
          "Decoding",
          "Verification"
        ]
      },
      {
        numb: 49,
        question: "The decimal for the binary number 1011",
        answer: "Correct answer of the question is here",
        options: [
          "3",
          "11",
          "13",
          "13"
        ]
      },
      {
        numb: 50,
        question: "Your Question is Here",
        answer: "Correct answer of the question is here",
        options: [
          "̅y̅ + z",
          "( x̅̅+̅̅̅y ̅̅̅ ) z",
          "",
          "x̅̅̅+̅̅y̅ + z"
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