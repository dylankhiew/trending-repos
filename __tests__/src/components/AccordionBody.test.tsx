import React from "react";
import renderer from "react-test-renderer";

import AccordionBody from "../../../src/components/AccordionBody";

const repo: app.RepositoryItem = {
  rank: 1,
  username: "Nutlope",
  repositoryName: "roomGPT",
  url: "https://github.com/Nutlope/roomGPT",
  description:
    "Upload a photo of your room to generate your dream room with AI.",
  language: "TypeScript",
  languageColor: "#3178c6",
  totalStars: 2940,
  forks: 227,
  starsSince: 806,
  since: "daily",
  builtBy: [
    {
      username: "Nutlope",
      url: "https://github.com/Nutlope",
      avatar: "https://avatars.githubusercontent.com/u/63742054?s=40&v=4",
    },
  ],
};

it(" should render correctly", () => {
  const tree = renderer.create(<AccordionBody repository={repo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
