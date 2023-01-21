//ICT JUNE2019

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "A(n) __ is installed when a new hardware is
connected to the computer:",
        answer: "Correct answer of the question is here",
        options: [
          "Defragmenter",
          "Device driver",
          "Operating system",
          "Translator"
        ]
      },
      {
        numb: 2,
        question: "A technique that can capture data by converting text information on paper into editable text in the computer. ________",
        answer: "Correct answer of the question is here",
        options: [
          "OCR",
          "MICR",
          "Scanning",
          "OMR"
        ]
      },
      {
        numb: 3,
        question: "Components in the CPU communicate through the: ___________",
        answer: "Correct answer of the question is here",
        options: [
          "NIC",
          "RAM",
          "Register",
          "Bus"
        ]
      },
      {
        numb: 4,
        question: "Eyestrain can be reduced by:",
        answer: "Correct answer of the question is here",
        options: [
          "reducing room light intensity.",
          "using LCD monitors.",
          "using CRT monitors.",
          "avoiding breaking eye contact with monitor."
        ]
      },
      {
        numb: 5,
        question: "Which of the following is a volatile medium?",
        answer: "Correct answer of the question is here",
        options: [
          "DVD",
          "Main memory",
          "ROM",
          "Flash memory"
        ]
      },
      {
        numb: 6,
        question: "A task in a project was programmed to take 6 days although it can be finished in 4 days. This task is said to:",
        answer: "Correct answer of the question is here",
        options: [
          "Be a lag task.",
          "Be a critical task.",
          "Have a successor",
          "Be a milestone task."
        ]
      },
      {
        numb: 7,
        question: "The technique of developing a system model and testing to make adjustments until an acceptable product is realized is known as: ____",
        answer: "Correct answer of the question is here",
        options: [
          "Waterfall technique.",
          "SDLC.",
          "Flow charting.",
          "Prototyping."
        ]
      },
      {
        numb: 8,
        question: "The equivalence of the binary number 111110 in hexa decimal is:",
        answer: "Correct answer of the question is here",
        options: [
          "3E",
          "F2",
          "76",
          "D3"
        ]
      },
      {
        numb: 9,
        question: "A tool necessary to make payments in e-commerce is:",
        answer: "Correct answer of the question is here",
        options: [
          "ISP",
          "ATM",
          "Credit card",
          "ADSL"
        ]
      },
      {
        numb: 10,
        question: "The component that is used by the computer to represent data is: ........... ",
        answer: "Correct answer of the question is here",
        options: [
          "Keyboard",
          "Logic Gates",
          "Motherboard",
          "Control unit"
        ]
      },
      {
        numb: 11,
        question: "A network topology in which each device is directly connected to all other devices by a separate cable is known as: _______________",
        answer: "Correct answer of the question is here",
        options: [
          "Ring",
          "Star",
          "Mesh",
          "Hybrid"
        ]
      },
      {
        numb: 12,
        question: "A measure that will ensure that transmitted data is error free is known as:",
        answer: "Correct answer of the question is here",
        options: [
          "Data Debugging",
          "Data integrity",
          "Data encryption",
          "Data validity"
        ]
      },
      {
        numb: 13,
        question: "If two users attempt to update the same record in a database",
        answer: "Correct answer of the question is here",
        options: [
          "the DBMS blocks the record to one user",
          "the DBMS will freeze.",
          "the DBMS will allow both updates to be saved.",
          "the DBMS will shut down"
        ]
      },
      {
        numb: 14,
        question: "Which of the following are stages of the machine cycle in the control unit? _______ ____________",
        answer: "Correct answer of the question is here",
        options: [
          "Control, Execute",
          "Fetch, Execute",
          "Execute, store",
          "Decode, Fetch"
        ]
      },
      {
        numb: 15,
        question: "Study the algorithm below Start
Give two integers, N and M If N is greater than M
Then Set M to M-2
Else Set M to N+ 3 EndIF
Print M.
Stop.
Given that the input in the first statement are
N=5, M=7, what is the value of the output?",
        answer: "Correct answer of the question is here",
        options: [
          "15",
          "8",
          "13",
          "5"
        ]
      },
      {
        numb: 16,
        question: "Which of the following is NOT an activity in the design phase of system development? _______",
        answer: "Correct answer of the question is here",
        options: [
          "Selecting hardware needed",
          "Writing algorithms",
          "Draw up strategies for implementation",
          "Writing codes for interface"
        ]
      },
      {
        numb: 17,
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
        numb: 18,
        question: "Bits of data from many wires are to be transmitted over a single wire. The device needed",
        answer: "Correct answer of the question is here",
        options: [
          "Modem",
          "Bus",
          "Multiplexer",
          "Switch"
        ]
      },
      {
        numb: 19,
        question: "the control structure that executes a set of C HTTP instructions a number of times based on a condition is called a?",
        answer: "Correct answer of the question is here",
        options: [
          "Logic",
          "Choice",
          "Loop",
          "Sequence"
        ]
      },
      {
        numb: 20,
        question: "A system building tool that can be used to predict failures:",
        answer: "Correct answer of the question is here",
        options: [
          "SDLC",
          "Simulation",
          "Try-by-error",
          "Top-down"
        ]
      },
      {
        numb: 21,
        question: "The software that attributes file formats is:",
        answer: "Correct answer of the question is here",
        options: [
          "Application software",
          "Kernel",
          "Operating system",
          "Format software"
        ]
      },
      {
        numb: 22,
        question: "Any instruction to be processed by the CPU must be broken down to correspond to the....",
        answer: "Correct answer of the question is here",
        options: [
          "ALU",
          "Instruction set",
          "Program",
          "g2"
        ]
      },
      {
        numb: 23,
        question: "The method used by organization to completely do away with the old system to use a new system is known as implementation?",
        answer: "Correct answer of the question is here",
        options: [
          "Direct",
          "Complete",
          "Parallel",
          "Piecemeal"
        ]
      },
      {
        numb: 24,
        question: "Communication circuits that transmit data in both directions but not at the same time are said to be 33. The equivalence of the Boolean expression NOT(A+B) is: operating in?",
        answer: "Correct answer of the question is here",
        options: [
          "Simplex mode",
          "Half-duplex mode",
          "Asynchronous mode",
          "option 4"
        ]
      },
      {
        numb: 25,
        question: "A software that can convert codes written by programmers into machine code is: _______",
        answer: "Correct answer of the question is here",
        options: [
          "Defragmenter",
          "Operating system",
          "Application sotfware",
          "Compiler"
        ]
      },
      {
        numb: 26,
        question: "A design method that uses successive improvement on a model to arrive at the desired result is:",
        answer: "Correct answer of the question is here",
        options: [
          "iteration",
          "simulation",
          "prototyping",
          "SDLC"
        ]
      },
      {
        numb: 27,
        question: "The protocol that defines the process of requesting and transferring HTML webpages across the internet is?",
        answer: "Correct answer of the question is here",
        options: [
          "FTP",
          "TCP",
          "HTTP",
          "POP3"
        ]
      },
      {
        numb: 28,
        question: "Which of the following is utility software",
        answer: "Correct answer of the question is here",
        options: [
          "Compression software",
          "Operating system",
          "DBMS",
          "Word processor"
        ]
      },
      {
        numb: 29,
        question: "The process that programmers take to eliminate errors in a code is known as?",
        answer: "Correct answer of the question is here",
        options: [
          "Debugging",
          "Syntax",
          "Simulation",
          "Prototyping"
        ]
      },
      {
        numb: 30,
        question: "displaylay which of the following enables the monitor to ay images?",
        answer: "Correct answer of the question is here",
        options: [
          "Motherboard",
          "Monitor viewer",
          "Video controller",
          "Video player"
        ]
      },
      {
        numb: 31,
        question: "Consider the sentence below: 
 John is a boy 
set The HTML statement tor the sentence is:",
        answer: "Correct answer of the question is here",
        options: [
          "<b>John is a <i>boy</b></i>",
          "<b><i>John is a boy</b></i>",
          "<b>John</b> is a <i>boy</i>",
          "<b>John is a <i>boy</i></b>"
        ]
      },
      {
        numb: 32,
        question: "Which of the following is a pointing device?",
        answer: "Correct answer of the question is here",
        options: [
          "Touchpad",
          "Keyboard",
          "Monitor",
          "Scanner"
        ]
      },
      {
        numb: 33,
        question: "The equivalence of the Boolean expression NOT(A+B) is:",
        answer: "Correct answer of the question is here",
        options: [
          "Option 1",
          "option 2",
          "option 3",
          "option 4"
        ]
      },
      {
        numb: 34,
        question: "Two students communicating through the
Internet noticed that the communication speed",
        answer: "Correct answer of the question is here",
        options: [
          "Poor computer performance",
          "Small RAM size",
          "The bandwidth is low",
          "The distance of the users is wide"
        ]
      },
      {
        numb: 35,
        question: "The technology that can be used by a teacher to simultaneously deliver live lectures to students in more than one location:",
        answer: "Correct answer of the question is here",
        options: [
          "Teleworking",
          "Distance learning",
          "Video conferencing",
          "Computer assisted learning"
        ]
      },
      {
        numb: 36,
        question: "The business organization that sells Internet access to people is known as:",
        answer: "Correct answer of the question is here",
        options: [
          "ISP",
          "Google",
          "Microsoft",
          "Linux"
        ]
      },
      {
        numb: 37,
        question: "Parts of the same file that are scattered within the harddisk can be arranged to exist together by?",
        answer: "Correct answer of the question is here",
        options: [
          "Antivirus software",
          "Operating system",
          "Translators",
          "Defragmenter"
        ]
      },
      {
        numb: 38,
        question: "Which of the following CANNOT tell the duration of a projects?",
        answer: "Correct answer of the question is here",
        options: [
          "Gantt chart",
          "SDLC",
          "Critical path analysis",
          "PERT"
        ]
      },
      {
        numb: 39,
        question: "The device that selects the path to be taken by network signals as they move from one network 47 An advantage of writing codes in machine language is? to another is",
        answer: "Correct answer of the question is here",
        options: [
          "Server",
          "Bridge",
          "Switch",
          "Router"
        ]
      },
      {
        numb: 40,
        question: "A procedure that verifies that a user of a A series of strings that identity a by ITS network location is known as? computer system is genuine is called?",
        answer: "Correct answer of the question is here",
        options: [
          "Authorisation",
          "Authentication",
          "Identification",
          "Encryption"
        ]
      },
      {
        numb: 41,
        question: "1012 + 10012 =",
        answer: "Correct answer of the question is here",
        options: [
          "11010",
          "11111",
          "10110",
          "10101"
        ]
      },
      {
        numb: 42,
        question: "A system that can predict weather condition is called:",
        answer: "Correct answer of the question is here",
        options: [
          "Transaction processing system",
          "Geographic information system",
          "Management information system",
          "Knowledge based system"
        ]
      },
      {
        numb: 43,
        question: "A user of the Internet can be confident that information sent to a friend will only be received by him. This is possible through:",
        answer: "Correct answer of the question is here",
        options: [
          "Hyper links",
          "URL",
          "Protocol",
          "Packets of data"
        ]
      },
      {
        numb: 44,
        question: "A language that can be used to extract specific information from a database is:",
        answer: "Correct answer of the question is here",
        options: [
          "Pascal",
          "SQL",
          "BASIC",
          "Query"
        ]
      },
      {
        numb: 45,
        question: "A hardware device that controls access between the Internet and the computer system is:",
        answer: "Correct answer of the question is here",
        options: [
          "Proxy server",
          "Firewall",
          "Active switch",
          "Router"
        ]
      },
      {
        numb: 46,
        question: "A process that will translate a code written in 38. Which of the following CANNOT tell the duration of a projects? high level language to a machine code is:",
        answer: "Correct answer of the question is here",
        options: [
          "Compilation",
          "Debugging",
          "Decoding",
          "Synthesis"
        ]
      },
      {
        numb: 47,
        question: "An advantage of writing codes in machine language is?",
        answer: "Correct answer of the question is here",
        options: [
          "It needs to be compiled",
          "The code executes faster",
          "Coding is easier to understand",
          "Little memorization is needed"
        ]
      },
      {
        numb: 48,
        question: "A series of strings that identity a by ITS network location is known as?",
        answer: "Correct answer of the question is here",
        options: [
          "IP address",
          "Website",
          "Protocol",
          "URL"
        ]
      },
      {
        numb: 49,
        question: "A process in which a customer gains access to a company’s computer network for malicious intentions is called:",
        answer: "Correct answer of the question is here",
        options: [
          "Hacking",
          "Masquerading",
          "Phishing",
          "scamming"
        ]
      },
      {
        numb: 50,
        question: "A system that accumulates data for a period of A Transaction processing system time before processing takes place is called:",
        answer: "Correct answer of the question is here",
        options: [
          "Transaction system",
          "Real-time system",
          "Batch system",
          "Reservation system"
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