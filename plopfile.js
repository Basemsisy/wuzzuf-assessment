module.exports = function (plop) {
  plop.setGenerator("Component", {
    description: "create a new component",
    prompts: [
      {
        type: "input",
        name: "compName",
        message: "what is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "src/app/components/{{pascalCase compName}}/{{pascalCase compName}}.tsx",
        templateFile: "plop-templates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path:
          "src/app/components/{{pascalCase compName}}/{{pascalCase compName}}.module.scss",
        templateFile: "plop-templates/Component/Component.styles.hbs",
      },
      {
        type: "add",
        path: "src/app/components/{{pascalCase compName}}/index.js",
        template: "export { default } from './{{pascalCase compName}}'",
      },
    ],
  });

  plop.setGenerator("Page", {
    description: "create an new page",
    prompts: [
      {
        type: "input",
        name: "pageName",
        message: "what is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "src/app/pages/{{pascalCase pageName}}/{{pascalCase pageName}}.tsx",
        templateFile: "plop-templates/Page/Page.tsx.hbs",
      },
      {
        type: "add",
        path:
          "src/app/pages/{{pascalCase pageName}}/{{pascalCase pageName}}.module.scss",
        templateFile: "plop-templates/Page/Page.styles.hbs",
      },
      {
        type: "add",
        path: "src/app/pages/{{pascalCase pageName}}/index.js",
        template: "export { default } from './{{pascalCase pageName}}'",
      },
      {
        type: "append",
        pattern: "/*INJECT_ROUTE*/",
        templateFile: "plop-templates/Page/Route.hbs",
        path: "src/app/routes.ts",
      },
      {
        type: "append",
        pattern: "/*IMPORT_PAGE*/",
        template:
          'import {{pascalCase pageName}} from "./pages/{{pascalCase pageName}}"; ',
        path: "src/app/routes.ts",
      },
    ],
  });
};
