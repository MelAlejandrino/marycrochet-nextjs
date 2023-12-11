"use client";
import React, { useEffect, useRef } from "react";
import crochet_gif from "@public/crochet_gif.gif";
import Image from "next/image";
import bee from "@public/bee_gif.gif";

const MaryPage = () => {
  const useTextContainerRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    useTextContainerRef.current.forEach((ref) => {
      observer.observe(ref);
    });

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  const story = [
    {
      text: `I started crocheting in December 2021. I still remember how small my
            hook was. With that, I never really finished a decent piece; the tops
            I made are always super tight. Yes, tops - the first one I planned to
            crochet because my sister wouldn't let me borrow hers. So basically,
            it was one of the reasons why I am so into crochet right now.`,
    },
    {
      text: "The first yarn that I used was acrylic; I bought it for 13 pesos at an arts and craft store called MUE. It wasn't the best yarn, but I finished a super tight top tube - so tight that I could not breathe. After that, I stopped crocheting for a fleeting time because I lacked tools and was hesitant to buy them online.",
    },
    {
      text: "I continued in May 2022 because I was planning to make a little bouquet of crocheted flowers for my boyfriend's birthday. My mom bought me my first milk cotton yarns online, and I made a carnation flower, lavender, and forget-me-not out of it.",
    },
    {
      text: `It was just a small bouquet, but it meant everything to my bf because he hadn't received any of those in his entire life. Then I thought about the world. So many sad and depressed people. The sadness doesn't go away in a snap; I know that because I experienced it - we all do. Crochet became my coping mechanism, and every time I finish a flower, it makes me happy because I was able to craft a beautiful piece out of yarn and patience. Little things, right? But those we label "little" have the biggest impact on our lives. I managed to keep my shit together by focusing on these little things.`,
    },
    {
      text: "Then I thought to myself, what can I contribute to the world I live in? I am still a first-year student studying BS Psychology - what could I offer? I've always known that I want to know more about people because, like the universe, people are complex. But despite the complexity, little things never fail to melt us. With my crocheted flowers, I want to uplift one's feelings. I want to be a part of the reason why they feel special.",
    },
    {
      text: "I never felt tired crafting those crocheted pieces because I enjoy what I'm doing. And I also love the fact that people who received my works feel special and loved. I guess that's the least thing I could do for now in contributing to the world I live in. Because in the end, it's always the little things.",
    },
  ];

  return (
    <div className="page">
      <div
        className="text-container | hidden"
        ref={(el) => (useTextContainerRef.current[0] = el)}
      >
        <Image
          src={bee}
          style={{
            width: "3em",
            height: "3em",
            position: "absolute",
            zIndex: "-1",
            transform: "translate(20%,-60%)",
          }}
          alt="bee"
        />
        <p>MARY</p>
      </div>
      {story.map((item, index) => (
        <div
          className="text-container | hidden"
          key={index}
          ref={(el) => (useTextContainerRef.current[index + 1] = el)}
        >

          <p>{item.text}</p>
        </div>
      ))}
      <div
        className="text-container | hidden"
        ref={(el) => (useTextContainerRef.current[story.length + 1] = el)}
      >
        <Image src={crochet_gif} alt={crochet_gif} />
        <p>HAPPY CROCHET!</p>
      </div>
    </div>
  );
};

export default MaryPage;
