# Budget tracker - Frontend

Since `create-react-app` has been officially **deprecated** for few years, this is a [Next.js](https://nextjs.org) project, recommended on [React's official website](https://react.dev/learn/creating-a-react-app). Basically, the app is still React with few extra out-of-the-box features.

## Getting Started

Install depencies
```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

For SPA, I chose to go with App Router of Next, no need to install **React Router**, so new pages can be added under `app/`. More info [here]()

```
budget-tracker/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── budget-entry/
│   │   │   ├── budgetEntry.css
│   │   │   └── budgetEntry.tsx
│   │   ├── budget-input/
│   │   │   └── budgetInput.tsx
│   │   ├── budget-list/
│   │   │   ├── budgetList.css
│   │   │   └── budgetList.tsx
│   │   └── header/
│   │       └── header.tsx
│   ├── providers/
│   │   └── provider.tsx
│   ├── reducer/
│   │   └── reducer.ts
│   └── types/
│       └── types.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```



## Components

- BudgetInput: a form used to add new budget entry. Required fileds are `description` and `budget`.
- BudgetEntry: Similar to BudgetInput with a slightly different use case. An editable entry which shown in the budget list. The component can switch between **readonly** and **edit** mode. 
- BudgetList: to diplay all the added entries.
- Header: display the total budget and BudgetInput.

## Feature
- Form validation: `react-hook-form` is used to make sure that required values are provided and submitted values are always in correct type.
- Error handling: `react-hook-form` watches and update state when errors occur, for example, invalid required fields will be highligted. In case of failing `dispatch` actions, `try catch` statement make sure the app doesn't crash but error message will still be shown.
- State management: `Context API` is used to make the editting and updating entries more convenient.
- Styling: Tailwind CSS is ultilized to guarantee a consistent design throughout the app. However, I also showcase my CSS skills in `global.css`, `budgetEntry.css` and `budgetList.css`
- Code style: Follow the general recommended style of ESLint and I use Prettier to automatically fix all the linting error.

