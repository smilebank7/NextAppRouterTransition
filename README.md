# Next App Router Transition

## Simple Page-In & Page-Out Transition for your App Router NextJS App

### Installation

You should write code manually.

It will be added to npm soon.


### Usage
Wrap your app with LayoutTransitionProvider in route level "layout.tsx" in your app folder. 

```javascript
import { LayoutTransitionProvider } from 'next-app-router-transition';

function Layout({ children }) {
  return (
    <LayoutTransitionProvider>
      {children}
    </LayoutTransitionProvider>
  );
}
```

#### Warning
This package is only for NextJS App with App Router. It will not work with other routers.

It only works when you navigate in different level of routes. It will not work when you navigate in the same level of routes.

If you need to use this package in the same level of routes, you can use the manual code.

#### License
MIT
