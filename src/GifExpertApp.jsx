import React, { useState } from "react";
import { AddCategry, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categries, setCategries] = useState(["One Punch", "Dragon Ball Z"]);

  const onAddCategory = (newCategory) => {
    if (categries.includes(newCategory)) return;

    setCategries([newCategory, ...categries]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategry onNewCategory={onAddCategory} />

      {categries.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
