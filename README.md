# 원티드 프리온보딩 12th 2팀 2주 차 과제 개인안

※ 본 과제는 [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12)를 바탕으로 진행되었습니다.

## 🤝 프로그램 진행과정 및 목적

### ❓ 진행과정

    ✅ 1. 매 주 멘토님 또는 참여 기업으로부터 과제를 부여받습니다.

    ✅ 2. 모든 팀원은 각자 자신의 스타일로 코드를 작성합니다.

    ✅ 3. 서로의 코드를 리뷰하는 과정을 거치며, 본인의 코드를 동료에게 이해하기 쉽게 설명하고, 타인의 코드를 이해하는 과정을 경험합니다.

    ✅ 4. 기능별로 가장 효율적이라고 판단되는 코드를 Best Practice로 선정하여 최종 결과물에 반영합니다.

### 💡 목적

좋은 코드를 만들 위해 고민하고, 그 과정에서 팀으로 일하는 법에 익숙해집니다.

## 🧑🏻‍💻 프로젝트 정보

### 📌 프로젝트 주제

- 특정 깃헙 레파지토리(https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

- 핵심 기능 : `무한 스크롤`, `에러 처리`, `광고 삽입`, `openAPI활용`, `마크다운 렌더링`, `로딩중 UI 구현` 등

<br/>

### 🗓️ 진행 기간

23년 8월 29일 ~ 23년 8월 31일

<br/>

### ▶️ 실행 방법

- 배포 링크: [http://pre-onboarding-12th-2.s3-website.ap-northeast-2.amazonaws.com](http://pre-onboarding-12th-2.s3-website.ap-northeast-2.amazonaws.com/)
- 링크가 실행되지 않는 경우 아래 명령어를 차례대로 입력하여 실행해주세요.

```jsx
git clone https://github.com/HWAHAEBANG/pre-onboarding-12th-2.git
npm install
npm start
```

<br/>

### 📂 프로젝트 구조

```markdown
📂src
│ App.tsx
│ index.css
│ index.tsx
│ react-app-env.d.ts
├─📂apis # api호출 함수를 모아둔 폴더
│ issue.ts
├─📂components # 컴포넌트 폴더
│ ├─📂common # 공통 컴포넌트
│ │ │ Header.tsx
│ │ │
│ │ └─📂loading-effect
│ │ spinner.module.css
│ │ SpinnerBubble.tsx
│ ├─📂issue-detail-page
│ │ IssueDetail.tsx
│ └─📂issue-list-page
│ Advertisement.tsx
│ IssueItem.tsx
│ IssueListSection.tsx
│ SortBar.tsx
├─📂configs # 인스턴스 설정 폴더
│ axios.ts  
├─📂constants # 상수 폴더
│ advertisemant.ts
│ filter.ts
│ repository.ts
├─📂pages # 페이지 폴더
│ IssueDetailPage.tsx
│ IssueListPage.tsx
│ NotFoundPage.tsx
├─📂routes # 세부 route 폴더
│ router.tsx  
├─📂types # 타입 폴더
│ filterType.ts
│ issueType.ts
└─📂utils # 훅을 제외한 일반 유틸함수 폴더
dateUtil.ts
```

<br/>

### 🖇️ 사용 라이브러리 및 기술

- JavaScript / TypeScript / React
- 라우팅: react-router-dom
- 스타일: styled-components, react-markdown, remark-gfm

```jsx
"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.46",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "axios": "^1.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-markdown": "^8.0.7",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "remark-gfm": "^3.0.1",
    "styled-components": "^6.0.7",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },

  "devDependencies": {
    "eslint": "^8.48.0",
    "eslint-config-prettier": "^9.0.0",
    "husky": "^8.0.3",
    "prettier": "^3.0.3"
  }
```

## 🫱🏻‍🫲🏿 Commit Convention & Branch Strategy

### Commit Convention

e.g. FEAT: 로그인 유효성 검증 기능 구현

| 태그      | 설명 (한국어로만 작성하기)                                     |
| --------- | -------------------------------------------------------------- |
| FEAT:     | 새로운 기능 추가 (변수명 변경 포함)                            |
| FIX:      | 버그 해결                                                      |
| DESIGN:   | CSS 등 사용자 UI 디자인 변경                                   |
| STYLE:    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| REFACTOR: | 프로덕션 코드 리팩토링                                         |
| COMMENT:  | 필요한 주석 추가 및 변경                                       |
| DOCS:     | 문서를 수정한 경우                                             |
| CHORE:    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME:   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| REMOVE:   | 파일을 삭제하는 작업만 수행한 경우                             |
| INIT:     | 초기 커밋을 진행한 경우                                        |

### Branch Strategy

| 브랜치    | 설명                               |
| --------- | ---------------------------------- |
| main      | 배포 및 최종본, 출시 버전의 브랜치 |
| develop   | 개발용 버전의 기준이 되는 브랜치   |
| feature/~ | 세부 기능 개발을 위한 브랜치       |
| refactor  | 리팩토링을 위한 브랜치             |
