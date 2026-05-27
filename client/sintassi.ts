import parser from "@/lib/parser";

const data = {
  content: [
    { name: "Shell", props: { type: "open" } },
    {
      name: "H2",
      text: "",
    },

    //------- TESTO e MATEMATICA INLINE-----------

    {
      name: "P",
      text: "",
    },
    {
      name: "MathML",
      text: "",
    },

    //-------BOX THEORY--------
    { name: "Box", type: "open", props: { variant: "theory" } },
    {
      name: "H4",
      text: "",
    },
    {
      name: "P",
      text: "",
    },
    {
      name: "MathML",
      text: "",
    },
    { name: "Box", type: "close" },

    //----- BOX STEP ------
    { name: "Box", type: "open", props: { variant: "step" } },
    [
      {
        name: "MathML",
        text: "",
      },
    ],
    { name: "Box", type: "close" },

    //-------subparagraph------
    { name: "SubParagraph", type: "open" },
    [
      {
        name: "H3",
        text: "",
      },
      {
        name: "P",
        text: "",
      },
      {
        name: "MathML",
        text: "",
      },
    ],
    { name: "SubParagraph", type: "close" },

    //------------UL----------

    { name: "UL", type: "open" },
    [
      {
        name: "P",
        text: "",
      },
      {
        name: "InlineMath",
        text: "",
      },
    ],
    { name: "UL", type: "close" },
    //----------------------------------------

    { name: "Shell", type: "close" },

    //----PRIMO H2----
    { name: "div", props: { type: "open", className: "mt-3" } },

    //----PARAGRAFO DOPO H3----
    { name: "div", props: { type: "open", className: "mt-5" } },

    //----PARAGRAFO DOPO H2----
    { name: "div", props: { type: "open", className: "mt-6" } },

    { name: "div", props: { type: "close" } },

    { name: "P", type: "open" },
    [],
    { name: "P", type: "close" },
  ],
};
