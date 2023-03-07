This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Reads users from JSON and renders the list of users as a list of cards 
- Clicking on each accordion item expands it to reveal profile information
- Each user's icon is color-coded according their role (Administrator, User, or Viewer)
- Uses `@svgr/webpack` to handle svg images
- Includes type checking in the `<AccordionItem/>` component