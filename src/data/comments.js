const commentsData = [
  {
    id: 1,
    user: "Praveen",
    comment: "This is the root of the first big conversation.",
    replies: [
      {
        id: 2,
        user: "Sandeep",
        comment: "I'm a nested reply at level 2!",
        replies: [
          {
            id: 3,
            user: "Ananya",
            comment: "And I am level 3, replying to Sandeep.",
            replies: [
              {
                id: 4,
                user: "TechLead_99",
                comment: "Deepest level (4) reached here. Recursion check!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        user: "Vijay",
        comment: "I am a second child of Praveen (sibling to Sandeep).",
        replies: [],
      },
    ],
  },
  {
    id: 6,
    user: "Developer_X",
    comment: "Starting a fresh top-level thread here.",
    replies: [
      {
        id: 7,
        user: "Junior_Dev",
        comment: "How do you handle the left-border styling?",
        replies: [
          {
            id: 8,
            user: "Developer_X",
            comment: "Just add a border-left and some padding in the CSS!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    user: "System_Admin",
    comment: "Quick stand-alone comment with no replies.",
    replies: [],
  },
  {
    id: 10,
    user: "Guest_User",
    comment: "Final root item to test the list's end.",
    replies: [],
  },
];

export default commentsData;