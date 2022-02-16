module.exports = plop => {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'Page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/pages/{{pascalCase name}}/styles.ts',
        templateFile: 'styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/pages/{{pascalCase name}}/test.tsx',
        templateFile: 'test.tsx.hbs'
      }
    ]
  });
};
