const GET = 'GET';

export const getStore = () => ({ type: GET });

const initialState = [
  {
    id: 1, title: '영화관람권', type: 'ticket', item: [
      {
        id: 1,
        name: 'CGV 영화관람권',
        desc: '일반 영화관람권',
        price: '12,000원'
      },
      {
        id: 2,
        name: 'CGV 골드클래스',
        desc: '골드클래스 관람권',
        price: '40,000원'
      },
      {
        id: 3,
        name: 'CGV 씨네드쉐프 관람권',
        desc: '씨네드쉐프 관람권',
        price: '50,000원'
      },
      {
        id: 4,
        name: '4DX 관람권',
        desc: '4DX 영화관람권',
        price: '19,000원'
      },
      {
        id: 5,
        name: 'IMAX 관람권',
        desc: 'IMAX 영화관람권',
        price: '18,000원'
      }
    ]
  },
  {
    id: 2, title: '기프트카드', type: 'gift_card', item: [
      {
        id: 1,
        name: '복받으씨집',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 2,
        name: '나홀로씨집',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 3,
        name: 'PACONNIE A형',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 4,
        name: 'PACONNIE B형',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 5,
        name: 'PACONNIE C형',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 6,
        name: 'CGV 기프트카드(무비아트A)',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 7,
        name: 'CGV 기프트카드(무비아트B)',
        desc: '충전형 선불 카드',
        price: '금액충전형'
      },
      {
        id: 8,
        name: 'CJ 기프트카드',
        desc: '충전형 선불 카드',
        price: 'CJ ONE에서 구매'
      }
    ]
  },
  {
    id: 3, title: '콤보', type: 'combo', item: [
      {
        id: 1,
        name: 'CGV 콤보',
        desc: '팝콘(L)1 + 탄산음료(M)2',
        price: '9,000원'
      },
      {
        id: 2,
        name: '더블 콤보',
        desc: '팝콘(M)2 + 탄산음료(M)2',
        price: '12,000원'
      },
      {
        id: 3,
        name: '스몰 세트',
        desc: '팝콘(M)1 + 탄산음료(M)1',
        price: '6,500원'
      },
      {
        id: 4,
        name: '라지 콤보',
        desc: '팝콘(L)2 + 탄산음료(L)2',
        price: '14,000원'
      }
    ]
  },
  {
    id: 4, title: '음료', type: 'drink', item: [
      {
        id: 1,
        name: '탄산음료(M)',
        desc: '탄산음료(M)',
        price: '2,500원'
      },
      {
        id: 2,
        name: '아메리카노(HOT)',
        desc: '아메리카노(HOT)',
        price: '3,500원'
      },
      {
        id: 3,
        name: '아메리카노(ICE)',
        desc: '아메리카노(ICE)',
        price: '4,000원'
      },
      {
        id: 4,
        name: '탄산음료(L)',
        desc: '탄산음료(L)',
        price: '3,000원'
      }
    ]
  },
  {
    id: 5, title: '팝콘', type: 'popcorn', item: [
      {
        id: 1,
        name: '고소팝콘(L)',
        desc: '고소팝콘(L)',
        price: '5,000원'
      },
      {
        id: 2,
        name: '달콤팝콘(L)',
        desc: '달콤팝콘(L)',
        price: '6,000원'
      },
      {
        id: 3,
        name: '더블치즈팝콘(L)',
        desc: '더블치즈팝콘(L)',
        price: '6,000원'
      },
      {
        id: 4,
        name: '바질어니언팝콘(L)',
        desc: '바질어니언팝콘(L)',
        price: '6,000원'
      },
      {
        id: 5,
        name: '바질어니언팝콘(M)',
        desc: '바질어니언팝콘(M)',
        price: '5,000원'
      },
      {
        id: 6,
        name: '더블치즈팝콘(M)',
        desc: '더블치즈팝콘(M)',
        price: '5,500원'
      },
      {
        id: 7,
        name: '고소팝콘(M)',
        desc: '고소팝콘(M)',
        price: '4,500원'
      },
      {
        id: 8,
        name: '달콤팝콘(M)',
        desc: '달콤팝콘(M)',
        price: '5,500원'
      }
    ]
  },
  {
    id: 6, title: '스낵', type: 'snack', item: [
      {
        id: 1,
        name: '칠리치즈나쵸',
        desc: '칠리치즈나쵸',
        price: '4,900원'
      },
      {
        id: 2,
        name: '플레인핫도그',
        desc: '플레인핫도그',
        price: '4,500원'
      },
      {
        id: 3,
        name: '칠리치즈핫도그',
        desc: '칠리치즈핫도그',
        price: '5,000원'
      },
      {
        id: 4,
        name: '맛밤',
        desc: '맛밤',
        price: '3,500원'
      },
      {
        id: 5,
        name: '오징어(완제품)',
        desc: '오징어(완제품)',
        price: '3,500원'
      },
    ]
  }
];

export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    default:
      return state;
  }
}