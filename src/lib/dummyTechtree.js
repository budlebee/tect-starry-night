export const dummyTechtree = {
  physics: {
    nodes: [
      {
        id: 0,
        name: "선형대수",
        label: "선대",
        group: 2,
        recentMileage: [1, 2, 4, 5, 6],
        description:
          "비록 물리학과 전공과목은 아니지만, 양자역학을 제대로 이해하기 위해 수강하는것을 추천.",
      },
      {
        id: 1,
        name: "미적분학과벡터해석",
        label: "미적분",
        group: 1,
        recentMileage: [1, 2, 4, 5, 6],
      },
      {
        id: 2,
        name: "고급미적분학",
        label: "고미",
        group: 2,
        recentMileage: [1, 2, 4, 5, 6],
      },
      {
        id: 3,
        name: "현대물리",
        label: "현물",
        group: 2,
        recentMileage: [1, 2, 4, 5, 6],
        description: "현물1은 특수상대론. 현물2는 고체물리 겉핥기.",
      },
      {
        id: 4,
        name: "고전역학",
        label: "일역",
        group: 2,
        recentMileage: [1, 2, 4, 5, 6],
        core: true,
        description:
          "1학기때는 Simple Harmonic Oscillator와 라그랑지안 역학을, 2학기때는 강체와 coupled oscillation 을 배운다. ",
      },
      {
        id: 5,
        name: "열물리",
        label: "열",
        group: 3,
        recentMileage: [1, 2, 4, 5, 6],
        description:
          "통계물리와 겹치는 내용이 많아서, 열물리를 듣지않고 통계를 들어도 큰 문제는 없다. 겹치지 않는 내용(카르노 기관)들은 물리학과 입장에서 그다지 활용할 일 없는 내용이다.",
      },
      {
        id: 6,
        name: "통계물리",
        label: "통계",
        group: 3,
        recentMileage: [1, 2, 4, 5, 6],
        core: true,
      },
      {
        id: 7,
        name: "양자역학",
        label: "양자",
        group: 3,
        recentMileage: [1, 2, 4, 5, 6],
        core: true,
        description: "양자역학을 안배운 물리학과는 고등학교 4학년 5학년일뿐.",
      },
      {
        id: 8,
        name: "전자기학",
        label: "전자기",
        group: 3,
        recentMileage: [1, 2, 4, 5, 6],
        core: true,
      },
      {
        id: 9,
        name: "군론",
        label: "군론",
        group: 3,
        recentMileage: [1, 2, 4, 5, 6],
        description:
          "보통 수리물리 시간때 군론을 배우기는 하는데, 깊게 배우지는 않는다. 핵이나 입자에 관심있다면 따로 공부하는걸 권장",
      },
      {
        id: 10,
        name: "입자물리",
        label: "입자",
        group: 4,
        recentMileage: [1, 2, 4, 5, 6],
      },
      {
        id: 11,
        name: "핵물리",
        label: "핵",
        group: 4,
        recentMileage: [1, 2, 4, 5, 6],
        description:
          "쿼크모델 = 군론 이나 마찬가지라, 군론을 잘 공부했다면 보상받을 수 있다.",
      },
      {
        id: 12,
        name: "상대론",
        label: "상대론",
        group: 4,
        recentMileage: [1, 2, 4, 5, 6],
      },
      {
        id: 13,
        name: "광학",
        label: "광학",
        group: 4,
        recentMileage: [1, 2, 4, 5, 6],
      },
      {
        id: 14,
        name: "고체물리",
        label: "고체",
        group: 4,
        recentMileage: [1, 2, 4, 5, 6],
        description:
          "학부는 주로 Kittel 책을 사용하는데, 1학기때는 고체에 대한 기초 이론을, 2학기에는 고체에서 일어나는 여러 현상들에 대해 배운다.",
      },
      {
        id: 15,
        name: "A1",
        label: "A1",
        group: 4,
        recentMileage: [1, 2, 4, 5, 6],
        description:
          "2학년 전공이지만, 2학년때 보다는 4학년때 듣는걸 추천. 2학년때는 회로이론을 왜 배워야하는지 실감을 못하기 때문.",
      },
      {
        id: 16,
        name: "B1",
        label: "B1",
        group: 3,
        recentMileage: [1, 2, 4, 5, 6],
      },
    ],
    links: [
      {
        source: 0,
        target: 7,
        type: "",
      },
      {
        source: 0,
        target: 9,
        type: "",
      },
      {
        source: 1,
        target: 2,
        type: "",
      },
      {
        source: 1,
        target: 0,
        type: "",
      },
      {
        source: 2,
        target: 4,
        type: "",
      },
      {
        source: 2,
        target: 8,
        type: "",
      },
      {
        source: 3,
        target: 7,
        type: "",
      },
      {
        source: 3,
        target: 12,
        type: "",
      },
      {
        source: 4,
        target: 7,
        type: "",
      },
      {
        source: 5,
        target: 6,
        type: "",
      },
      {
        source: 6,
        target: 14,
        type: "",
      },
      {
        source: 7,
        target: 11,
        type: "",
      },

      {
        source: 7,
        target: 10,
        type: "",
      },
      {
        source: 7,
        target: 13,
        type: "",
      },
      {
        source: 7,
        target: 14,
        type: "",
      },
      {
        source: 8,
        target: 12,
        type: "",
      },
      {
        source: 8,
        target: 13,
        type: "",
      },
      {
        source: 8,
        target: 14,
        type: "",
      },
      {
        source: 9,
        target: 10,
        type: "",
      },
      {
        source: 9,
        target: 11,
        type: "",
      },
      {
        source: 9,
        target: 12,
        type: "",
      },
      {
        source: 1,
        target: 3,
        type: "",
      },
    ],
  },
};
