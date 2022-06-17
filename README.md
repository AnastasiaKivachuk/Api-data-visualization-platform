This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It contains [GraphQL - API](https://studio.apollographql.com/public/SpaceX-pxxbxen/home?variant=current) for requests, [Enzyme/Jest](https://enzymejs.github.io/enzyme/) for unit testing, [Playwright](https://playwright.dev/docs/intro) for e2e testing, [Styled Components](https://github.com/styled-components/styled-components) for styling, [Material-UI](https://mui.com/material-ui/getting-started/overview/) for components. 

Project has a couple of pages: 
- home page (with main info about SpaceX)
- users page (with table users and ability create and delete users)
- launches page (with table launches)
- launch details page (with details of launch)

## Commands

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run enzyme/jest tests:

```bash
yarn test
```

Run playwright e2e tests:

```bash
yarn test:e2e
```