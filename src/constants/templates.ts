export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "<p></p>",
    queries: []
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the software project goes here.</p>
      <h2>Objectives</h2>
      <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
      </ul>
      <h2>Proposed Solution</h2>
      <p>Detailed explanation of the proposed software solution.</p>
      <h2>Timeline</h2>
      <table>
        <tr>
          <th>Phase</th>
          <th>Duration</th>
        </tr>
        <tr>
          <td>Planning</td>
          <td>2 weeks</td>
        </tr>
        <tr>
          <td>Development</td>
          <td>8 weeks</td>
        </tr>
        <tr>
          <td>Testing</td>
          <td>2 weeks</td>
        </tr>
      </table>
      <h2>Budget</h2>
      <p>Proposed budget details go here.</p>
    `,
    queries: [
      "What is the name of the software project?",
      "What is the main objective of this project?",
      "What is the proposed budget range?",
      "Who is the target client or company?"
    ]
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Executive Summary</h2>
      <p>A brief overview of the project proposal goes here.</p>
      <h2>Project Description</h2>
      <p>Detailed description of the project, its goals, and expected outcomes.</p>
      <h2>Methodology</h2>
      <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>
      <h2>Resources Required</h2>
      <ul>
        <li>Human Resources</li>
        <li>Material Resources</li>
        <li>Financial Resources</li>
      </ul>
      <h2>Timeline</h2>
      <p>Project timeline and milestones go here.</p>
      <h2>Budget</h2>
      <p>Detailed budget breakdown goes here.</p>
    `,
    queries: [
      "What is the name of your project?",
      "What is the main objective of this project?",
      "What is the proposed timeline for completion?",
      "What is the estimated budget range?",
      "Who are the key stakeholders?"
    ]
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <div class="letter-head">
        <p>Your Name</p>
        <p>Your Address</p>
        <p>City, State ZIP Code</p>
      </div>
      <p class="date">[Current Date]</p>
      <div class="recipient">
        <p>Recipient Name</p>
        <p>Company Name</p>
        <p>Address</p>
        <p>City, State ZIP Code</p>
      </div>
      <p>Dear [Recipient's Name],</p>
      <p>Introduction paragraph goes here.</p>
      <p>Body paragraph 1 goes here.</p>
      <p>Body paragraph 2 goes here.</p>
      <p>Closing paragraph goes here.</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
    queries: [
      "What is your name and title?",
      "What is your company name and address?",
      "Who is the recipient and their company?",
      "What is the purpose of this letter?",
      "What are the key points you want to communicate?"
    ]
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>Your Name</h1>
      <p>Email: your.email@example.com | Phone: (123) 456-7890</p>
      <h2>Professional Summary</h2>
      <p>A brief summary of your professional experience and skills goes here.</p>
      <h2>Work Experience</h2>
      <h3>Job Title, Company Name</h3>
      <p>Employment Period</p>
      <ul>
        <li>Key responsibility or achievement 1</li>
        <li>Key responsibility or achievement 2</li>
        <li>Key responsibility or achievement 3</li>
      </ul>
      <h2>Education</h2>
      <h3>Degree, Major</h3>
      <p>University Name, Graduation Year</p>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    `,
    queries: [
      "What is your full name?",
      "What is your email and phone number?",
      "What is your professional summary or objective?",
      "What is your most recent job title and company?",
      "What are your key skills and qualifications?",
      "What is your highest level of education?"
    ]
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <div class="letter-head">
        <p>Your Name</p>
        <p>Your Address</p>
        <p>City, State ZIP Code</p>
        <p>Your Email</p>
        <p>Your Phone Number</p>
      </div>
      <p class="date">[Current Date]</p>
      <div class="recipient">
        <p>Hiring Manager's Name</p>
        <p>Company Name</p>
        <p>Company Address</p>
        <p>City, State ZIP Code</p>
      </div>
      <p>Dear Hiring Manager,</p>
      <p>Opening paragraph: Mention the position you're applying for and how you found out about it.</p>
      <p>Second paragraph: Highlight your relevant skills and experiences that make you a strong candidate for the position.</p>
      <p>Third paragraph: Explain why you're interested in the position and the company.</p>
      <p>Closing paragraph: Thank the reader for their time and consideration. Mention that you look forward to discussing the opportunity further.</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
    queries: [
      "What is your full name and contact information?",
      "What position are you applying for?",
      "What company are you applying to?",
      "What are your key qualifications for this role?",
      "Why are you interested in this position and company?"
    ]
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <div class="sender-info">
        <p>Your Name</p>
        <p>Your Address</p>
        <p>City, State ZIP Code</p>
      </div>
      <p class="date">[Current Date]</p>
      <div class="recipient-info">
        <p>Recipient's Name</p>
        <p>Recipient's Address</p>
        <p>City, State ZIP Code</p>
      </div>
      <p>Dear [Recipient's Name],</p>
      <p>First paragraph: Introduce yourself and state the purpose of your letter.</p>
      <p>Second paragraph: Provide more details or context related to the purpose of your letter.</p>
      <p>Third paragraph: Conclude your letter, summarizing your main points or stating any actions you expect from the recipient.</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p class="signature">[Your Signature]</p>
    `,
    queries: [
      "What is your name and address?",
      "Who is the recipient and their address?",
      "What is the purpose of this letter?",
      "What are the main points you want to communicate?",
      "What action do you expect from the recipient?"
    ]
  },
  {
    id: "invoice",
    label: "Invoice",
    imageUrl: "/invoice.svg",
    queries: [
      "Party Role Adjustment",
      "Gender-Neutral Version",
      "Case Type Specific",
      "Language Simplification",
      "Affidavit Embedded",
      "Electronic Filing Version",
      "Additional Grounds for Indigency",
      "Prayer Section Expansion"
    ],
    initialContent: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "1.5", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" },
                { "type": "underline" }
              ],
              "text": "APPLICATION TO SUE AS AN INDIGENT PERSON"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "130%", "textAlign": "center" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" }
              ],
              "text": "IN THE COURT OF……….., ROHINI COURT (DIST…..), DELHI SUIT NO…….OF……."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" }
              ],
              "text": "IN THE MATTER OF :"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "X "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "underline" }
              ],
              "text": "                   "
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "S/o "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "underline" }
              ],
              "text": "                              "
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "R/o "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "underline" }
              ],
              "text": "                "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": ", New Delhi"
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "                                          "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "…APPLICANT/PLAINTIFF"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "center" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Versus"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Y "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "underline" }
              ],
              "text": "                   "
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "S/o "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "underline" }
              ],
              "text": "                              "
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "R/o "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "underline" }
              ],
              "text": "                "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": ", New Delhi"
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "                                   "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "…RESPONDENT/DEFENDANT"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": " "
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" },
                { "type": "underline" }
              ],
              "text": "APPLICATION UNDER ORDER XXXIII READ WITH SECTION 151 OF THE"
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" }
              ],
              "text": " "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" },
                { "type": "underline" }
              ],
              "text": "CODE OF CIVIL PROCEDURE, 1908"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "103%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" }
              ],
              "text": "MOST RESPECTFULLY SHOWETH:"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "justify" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "1."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                   "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "That the applicant has filed the above titled suit which is pending disposal before this Hon’ble Court."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "justify" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "2."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                  "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "That the contents of the accompanying suit may kindly be read as a part and parcel of this application which are not repeated here for the sake of brevity."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "justify" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "3."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                  "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "That the applicant is an indigent person and has no movable or immovable property and has no source of income. Therefore is unable to pay the requisite amount of court fee stamp as required by law."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "justify" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "4."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                   "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "That the applicant undertakes to pay the entire court fee if the case is decreed in his favour."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "100%", "textAlign": "justify" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "5."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                   "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "That there are sufficient reasons for the acceptance of the present application and for granting permission to the applicant to institute the present suit as an indigent person."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "104%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" }
              ],
              "text": "PRAYER:"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "104%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "It is therefore most respectfully prayed that the Hon’ble Court may:"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "105%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "a."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                   "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "allowed to sue as an indigent person in the interest of justice."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "b."
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\"",
                    "color": "",
                    "fontSize": "7pt"
                  }
                }
              ],
              "text": "                   "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "to pass such further orders/directions as it may deem fit and proper."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": " "
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "105%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Applicant"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "105%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Date:"
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "                                                                                                    "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Through"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "105%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Place:"
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                }
              ],
              "text": "                                                                                                               "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "Advocate"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "105%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "["
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                },
                { "type": "bold" },
                { "type": "italic" }
              ],
              "text": "Note: "
            },
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "The petition must be supported by an affidavit]."
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "105%", "textAlign": "left" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": {
                    "fontFamily": "\"Times New Roman\", serif",
                    "color": "",
                    "fontSize": ""
                  }
                }
              ],
              "text": "* * * * *"
            }
          ]
        },
        {
          "type": "paragraph",
          "attrs": { "lineHeight": "normal", "textAlign": "center" },
          "content": [
            {
              "type": "text",
              "marks": [
                {
                  "type": "textStyle",
                  "attrs": { "fontFamily": "", "color": "", "fontSize": "" }
                },
                { "type": "bold" },
                { "type": "underline" }
              ],
              "text": " "
            }
          ]
        }
      ]
    }
  ,
    
  },
];
