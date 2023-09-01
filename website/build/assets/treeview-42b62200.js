(function () {
  new TreeView(
    [
      {
        name: "TECH",
        children: [
          { name: "Company Maintenance", children: [] },
          { name: "Employees", children: [] },
          { name: "Human Resources", children: [] },
        ],
      },
      {
        name: "XRP",
        expanded: !0,
        children: [
          { name: "Company Maintenance", children: [] },
          {
            name: "Employees ",
            expanded: !0,
            children: [
              { name: "Company Maintenance-1", children: [] },
              {
                name: "Employees-1",
                expanded: !0,
                children: [
                  { name: "Company Maintenance-2", children: [] },
                  { name: "Employees-2", children: [] },
                  { name: "Human Resources-2", children: [] },
                ],
              },
              { name: "Human Resources", children: [] },
            ],
          },
          { name: "Employees ", children: [] },
        ],
      },
      {
        name: "Tech2",
        expanded: !1,
        children: [
          { name: "Company Maintenance", children: [] },
          {
            name: "Employees ",
            children: [
              { name: "Company Maintenance", children: [] },
              {
                name: "Employees",
                children: [
                  { name: "Company Maintenance", children: [] },
                  { name: "Employees", children: [] },
                  { name: "Human Resources", children: [] },
                ],
              },
              { name: "Human Resources", children: [] },
            ],
          },
        ],
      },
      { name: "TECH3", children: [] },
    ],
    "tree"
  );
})();
