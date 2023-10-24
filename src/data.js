export const files = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false
        },
        {
          name: "node modules",
          isFolder: true,
          items: [
            {
              name: "nodeFiles.js",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "data.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        },
        {
          name: "styles.css",
          isFolder: false
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false
    }
  ]
};
