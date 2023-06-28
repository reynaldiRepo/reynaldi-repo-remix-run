import type { V2_MetaFunction } from "@remix-run/node";
import { Fragment } from "react";
import { useHydrated } from "remix-utils";
import Home from "~/page/Home";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Reynaldi Repo" },
    { name: "description", content: "I am a software developer who is experienced in making various software projects, especially website and mobile app. worked professionally since 2019 as a freelance employee in the field of software development and now working as Web Developer at Pictura Creative (AU)" },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ];
};

export default function Index() {
  let hydrated = useHydrated();
  return (
    <Fragment>
      {hydrated ? <Home /> : null}
    </Fragment>
  );
}
