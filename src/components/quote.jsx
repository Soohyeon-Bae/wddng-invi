import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png"; // 이미지 경로 확인

// styled-components 정의 (기존 코드 유지)
const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-family: "mom_to_daughter"; /* 폰트 로딩 확인 필요 */
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;

  font-size: 1.76vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 5.2vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 5.7vw;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

// 새로 추가된 스타일 컴포넌트
const CountdownText = styled.p`
  font-family: "mom_to_daughter"; /* 기존 Quote 텍스트와 같은 폰트 사용 */
  font-size: 1.5vw;
  text-align: center;
  color: var(--title-color);
  margin-top: 40px; /* 기존 컨텐츠와 간격 조절 */
  margin-bottom: 20px;
  font-weight: bold;
  opacity: 0.85;

  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 4.5vw;
  }
`;

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 300px; /* 달력 너비 조절 */
  margin: 20px auto 42px auto; /* 중앙 정렬 및 여백 */
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  background-color: white; /* 달력 배경색 */

  @media screen and (max-width: 480px) {
    max-width: 280px;
    padding: 10px;
  }
`;

const CalendarHeader = styled.div`
  font-family: "mom_to_daughter";
  font-size: 1.2vw;
  font-weight: bold;
  color: var(--title-color);
  text-align: center;
  margin-bottom: 15px;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px; /* 날짜 셀 사이 간격 */
`;

const DayOfWeek = styled.div`
  font-family: "mom_to_daughter";
  font-size: 1vw;
  text-align: center;
  color: var(--title-color);
  opacity: 0.7;
  padding-bottom: 8px;

  /* 일요일 빨간색 */
  &:first-child {
    color: #f44336; 
  }
  /* 토요일 파란색 */
  &:last-child {
    color: #2196f3;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.8vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 3.2vw;
  }
`;

const DayCell = styled.div`
  font-family: "mom_to_daughter";
  font-size: 1.1vw;
  height: 40px; /* 셀 높이 고정 */
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--title-color);
  opacity: 0.8;
  border-radius: 50%; /* 원형 모양 */
  position: relative;
  transition: background-color 0.2s ease;

  &.empty {
    opacity: 0.3;
    color: lightgray;
  }

  &.highlighted {
    background-color: rgba(255, 192, 203, 0.4); /* 연한 분홍색 (반투명) */
    font-weight: bold;
    color: var(--title-color); /* 글자색 유지 */
  }

  .heart-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
    color: rgba(217, 125, 131, 0.7); /* 하트 색상 (빨간색에서 살짝 투명도) */
    opacity: 0.9;
    pointer-events: none; /* 하트 위로 마우스 이벤트 통과 */
    z-index: 1; /* 날짜 위로 올라오도록 */

    /* 모바일에서 하트 크기 조절 */
    @media screen and (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 3.2vw;
    height: 35px;
  }
  @media screen and (max-width: 480px) {
    font-size: 3.8vw;
    height: 30px;
  }
`;

const Quote = () => {
  // 1. 남은 일수 계산
  // 현재 날짜를 2025년 9월 3일 오후 12시 56분 53초로 고정
  const today = new Date('2025-09-03T12:56:53');
  const weddingDate = new Date('2025-12-21T00:00:00'); // 결혼 날짜 (12월 21일)
  
  // 날짜 간의 차이 계산 (밀리초 단위)
  const diffTime = weddingDate.getTime() - today.getTime();
  // 밀리초를 일수로 변환 (하루 = 1000ms * 60s * 60min * 24h)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 올림하여 남은 일수 정확히 표시

  // 2. 2025년 12월 달력 데이터 생성
  const year = 2025;
  const month = 11; // 12월 (JavaScript Date 객체는 0부터 시작)
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 해당 월의 마지막 날짜
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 해당 월의 첫째 날 요일 (0:일, 1:월, ..., 6:토)

  const calendarDays = [];
  // 달력 시작 전 빈 칸 채우기 (일요일부터 시작하므로)
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  // 해당 월의 날짜 채우기
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const highlightedDay = 21; // 하이라이트할 날짜

  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" alt="장식용 꽃 이미지" /> {/* alt 속성 추가 */}
      <Content data-aos="fade-up">
        나는 당신 자체를 사랑할 뿐 아니라,
        <br />
        당신과 함께 있을 때의 나를 사랑합니다.
        <br />
        <br />
        나는 당신이 이룬 것을 사랑할 뿐 아니라,
        <br />
        당신이 나를 만들어가는 모습을 사랑합니다.
        <br />
        <br />
        - Roy Croft, Love -
        <br />
        <br />
      </Content>

      {/* 새롭게 추가된 카운트다운 텍스트 */}
      <CountdownText data-aos="fade-up" data-aos-delay="100">
        호상&수현의 결혼식이 <span style={{ color: 'rgba(217, 125, 131, 0.9)' }}>{diffDays}</span>일 남았습니다.
      </CountdownText>

      {/* 새롭게 추가된 달력 */}
      <CalendarContainer data-aos="fade-up" data-aos-delay="200">
        <CalendarHeader>{year}년 12월</CalendarHeader>
        <CalendarGrid>
          {dayNames.map((day, index) => (
            <DayOfWeek key={index}>{day}</DayOfWeek>
          ))}
          {calendarDays.map((day, index) => (
            <DayCell 
              key={index} 
              className={day === null ? "empty" : (day === highlightedDay ? "highlighted" : "")}
            >
              {day}
              {day === highlightedDay && <span className="heart-icon">❤️</span>}
            </DayCell>
          ))}
        </CalendarGrid>
      </CalendarContainer>
    </Wrapper>
  );
};

export default Quote;