"use client";
import React from "react";
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text";

export default function RotatingTextLib() {
  return (
    <div className="flex h-8 items-center text-4xl font-bold">
      <span>혹시 지금&nbsp;</span>
      <RotatingText
        className="mx-1"
        text={[
          "무선 이어폰",
          "공기청정기",
          "핸드백",
          "책상",
          "청소기",
          "에어컨",
          "냉장고",
          "피아노",
          "노트북",
          "컴퓨터",
        ]}
      />
      <span>&nbsp;필요하신가요?</span>
    </div>
  );
}
