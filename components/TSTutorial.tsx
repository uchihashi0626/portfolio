"use client";
import React, { useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  age: number;
  favoriteFoods: string[];
  hasProgrammingExperience: boolean;
};

const TSTutorial = () => {
  const user: User = {
    firstName: "太郎",
    lastName: "山田",
    age: 24,
    favoriteFoods: ["寿司", "ラーメン", "カレー"],
    hasProgrammingExperience: true,
  };

  let [userName, setUserName] = useState("");

  const getSelfIntroduction = (user: User): string => {
    return (
      "私の名前は" +
      user.firstName +
      user.lastName +
      "です。" +
      user.age +
      "歳です。"
    );
  };

  const handleClick = () => {
    setUserName(getSelfIntroduction(user));
  };

  return (
    <div>
      <button onClick={handleClick}>自己紹介ボタン</button>
      <div>{userName}</div>
    </div>
  );
};

export default TSTutorial;
