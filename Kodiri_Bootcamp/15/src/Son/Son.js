import React from "react";

export default function Son({ daughtersChoice, dinner}) {
  let sonDetails = {
    name: {
      first: "BBT",
      last: "Yip",
    },
    years: 5,
  };
  let { years, name: { first, last } } = sonDetails;
  return (
    <div>
      <h1>I am the Son</h1>
      <p>I want for dinner {daughtersChoice}</p>
      <p>This is what we are going to have {dinner}</p>
      <p>
        Son's name is {first} {last}, and he is {years} years old
      </p>
    </div>
  );
}
