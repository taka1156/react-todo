type Route = {
  path: string;
  exact?: true;
  children: JSX.Element;
};

type RouteNav = {
  name: string;
  path: string;
}

export { Route, RouteNav };
