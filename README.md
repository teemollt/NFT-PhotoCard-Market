# The Fan

> **아이돌 포토카드 NFT 마켓 플레이스**

<div align="center" style="text-align: center">
<img src="https://img.shields.io/badge/React 17.0.2-9cf?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Typescript 4.4.2-2496ED?style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/SpringBoot 2.5.2-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white">
<img src="https://img.shields.io/badge/java 1.8-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/MariaDB-brown?style=for-the-badge&logo=MariaDB&logoColor=white">
<img src="https://img.shields.io/badge/Geth 1.10.8-lightgrey?style=for-the-badge&logo=Ethereum&logoColor=white">
<img src="https://img.shields.io/badge/Solidity 0.5.0-black?style=for-the-badge&logo=Solidity&logoColor=white">
<img src="https://img.shields.io/badge/Web3.js 1.5.3-orange?style=for-the-badge&logo=Web3.js&logoColor=white">
<img src="https://img.shields.io/badge/Web3.j 4.8.7-yellow?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">
<img src="https://img.shields.io/badge/Visual Studio Code 1.59.0-blue?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
<img src="https://img.shields.io/badge/Remix IDE 0.19.0-navy?style=for-the-badge&logo=remix&logoColor=white">
<img src="https://img.shields.io/badge/Jira-2496ED?style=for-the-badge&logo=Jira&logoColor=white">   
<h2 style="text-align: center">Main</h2>
<div align="center" style="text-align: center">
<img align="center" src="README.assets/main.gif" width="70%" style="text-align: center"/>
</div>

<h2 style="text-align: center">My page</h2>
<div align="center" style="text-align: center">
<img align="center" src="README.assets/myPage.gif" width="70%" style="text-align: center"/>
</div>

<h2 style="text-align: center">카드팩 구매</h2>
<div align="center" style="text-align: center">
<img align="center" src="README.assets/cardpack.gif" width="70%" style="text-align: center"/>
</div>

<h2 style="text-align: center">유저간 카드 거래</h2>
<div align="center" style="text-align: center">
<img align="center" src="README.assets/cardMarket.gif" width="70%" style="text-align: center"/>
<h4 style="text-align: center">유저간 카드 거래 - 구매</h4>
<img align="center" src="README.assets/cardSell.gif" width="70%" style="text-align: center"/>
<h4 style="text-align: center">유저간 카드 거래 - 등록</h4>
</div>

<h2 style="text-align: center">갤러리</h2>
<div align="center" style="text-align: center">
<img align="center" src="README.assets/myGalary.gif" width="70%" style="text-align: center"/>
<h4 style="text-align: center">갤러리 - 내 갤러리</h4>
<img align="center" src="README.assets/galaryBoard.gif" width="70%" style="text-align: center"/>
<h4 style="text-align: center">갤러리 - 갤러리 게시판</h4>
</div>


#### 서비스 설명

아이돌 소속사와 협력한다는 가정 하에 포토카드 NFT를 출시하고 이를 거래할 수 있는 웹서비스 입니다.
이더리움 프라이빗 네트워크를 구성해 그 안에서 유저의 개인계정과 이더리움을 통해 거래를 할 수 있게 하였고  NFT를 발행해 포토카드에 희소성과 고유성을 부여하고 소유자를 인증해주었습니다.
포토카드에 등급을 부여했고 등급별로 출시 개수를 달리했습니다. 5장씩 들어있는 종류별 카드팩을 통해 랜덤으로 카드를 얻을 수 있게하는 재미 요소를 추가했습니다. 
또한 유저간 거래를 통해 높은 등급 카드의 가치가 자연스레 높아지도록 했고 갤러리와 갤러리 게시판을 통해 전시도 가능하게 하여 유저들의 수집욕구를 더욱 높였습니다.

#### 파일구조

- Frontend

```
📦Frontend
├─ 📂public
│  ├─ 📂image
│  └─ 📂videos
└─ 📂src
    └─ 📂components
        ├─ 📂account
        │  ├─ 📂join
        │  ├─ 📂login
        │  └─ 📂mypage
        │      ├─ 📂market
        │      ├─ 📂shop
        │      └─ 📂update
        ├─ 📂cardpackshop
        ├─ 📂gallery
        ├─ 📂main
        ├─ 📂market
        ├─ 📂pages
        └─ 📂service
```

- Backend

```
📦backend
    📂gradle
    │  📂7.1.1
    │  │  📂dependencies-accessors
    │  │  📂executionHistory
    │  │  📂fileChanges
    │  │  📂fileHashes
    │  │  📂vcsMetadata-1
    │  📂buildOutputCleanup
    │  📂checksums
    │  📂vcs-1
    📂settings
    📂bin
    │  📂default
    │  │  📂com
    │  │      📂blockChain
    │  │          📂domain
    │  📂main
    │  │  📂com
    │  │      📂blockChain
    │  │          📂config
    │  │          📂controller
    │  │          📂domain
    │  │          📂dto
    │  │          📂jwt
    │  │          📂repository
    │  │          │  📂Impl
    │  │          📂service
    │  📂test
    │      📂com
    │          📂blockChain
    │              📂backend
    📂build
    │  📂classes
    │  │  📂java
    │  │      📂main
    │  │      │  📂com
    │  │      │      📂blockChain
    │  │      │          📂config
    │  │      │          📂controller
    │  │      │          📂domain
    │  │      │          📂dto
    │  │      │          📂wt
    │  │      │          📂repository
    │  │      │          │  📂Impl
    │  │      │         📂service
    │  │      📂test
    │  │          📂com
    │  │              📂blockChain
    │  │                  📂backend
    │  📂generated
    │  │  📂sources
    │  │      📂annotationProcessor
    │  │      │  📂java
    │  │      │      📂main
    │  │      │      │  📂com
    │  │      │      │      📂blockChain
    │  │      │      │          📂domain
    │  │      │      📂test
    │  │      📂headers
    │  │          📂java
    │  │              📂main
    │  │              📂test
    │  📂libs
    │  📂reports
    │  │  📂tests
    │  │      📂test
    │  │          📂classes
    │  │          📂css
    │  │          📂js
    │  │          📂packages
    │  📂resources
    │  │  📂main
    │  📂test-results
    │  │  📂test
    │  │      📂binary
    │  📂tmp
    │      📂bootJar
    │      📂compileJava
    │      📂compileTestJava
    │      📂jar
    │      📂test
    📂gradle
    │  📂wrapper
    📂src
        📂main
        │  📂java
        │  │  📂com
        │  │      📂blockChain
        │  │          📂config
        │  │          📂controller
        │  │          📂domain
        │  │          📂dto
        │  │          📂jwt
        │  │          📂repository
        │  │          │  📂Impl
        │  │          📂service
        │  📂resources
        📂test
            📂java
                📂com
                    📂blockChain
                        📂backend
```

#### 사용 방법

##### 1) 사이트 접속(현재 서버 내림)

![image-20211006111150153](README.assets/image-20211006111150153.png)



##### 2) 상단 메뉴에서 JOIN 클릭

![image-20211006111426558](README.assets/image-20211006111426558.png)



##### 3) 회원가입

<img src="README.assets/image-20211006111449875.png" width="70%" height="60%">

- 아이디, 비밀번호, 닉네임은 조건 충족 필요
- 아이디, 닉네임, 이메일 중복 확인 필요



##### 4) 회원가입 성공 후, 상단 메뉴에서 LOGIN 클릭

![image-20211006111332573](README.assets/image-20211006111332573.png)



##### 5) 가입한 아이디와 비밀번호 입력

![image-20211006111635466](README.assets/image-20211006111635466.png)



##### 6) 상단 메뉴에서 MY PAGE 클릭

![image-20211006113252065](README.assets/image-20211006113252065.png)



##### 7) 지갑 생성 버튼 클릭

![image-20211006113312160](README.assets/image-20211006113312160.png)

- 시간이 다소 소요될 수 있음
- 지갑 생성 중이라는 표시가 사라지고, 닉네임 옆에 잔액 칸이 생성되면 지갑 생성 성공



##### 8) COIN 충전 버튼 클릭

![image-20211006113403157](README.assets/image-20211006113403157.png)

- 시간이 다소 소요될 수 있음
- 잔액이 7이되면 COIN 충전이 완료된 것



##### 9) 상단 메뉴에서 SHOP 클릭

![image-20211006113452090](README.assets/image-20211006113452090.png)



##### 10) 원하는 카드팩을 선택하여 클릭

![image-20211007172714983](README.assets/image-20211007172714983.png)



##### 11) 구매하기 버튼 클릭

![image-20211006113529631](README.assets/image-20211006113529631.png)

- 시간이 다소 소요될 수 있음



##### 12) 구매에 성공하면 뽑은 카드 확인 가능

![image-20211006113626280](README.assets/image-20211006113626280.png)



##### 13) 상단 메뉴에 GALLERY 클릭

![image-20211006113650575](README.assets/image-20211006113650575.png)



##### 14) 뽑은 카드 확인 

![image-20211006113722422](README.assets/image-20211006113722422.png)



##### 15) 상단 메뉴에서 BOARD 클릭

![image-20211006113804132](README.assets/image-20211006113804132.png)



##### 16) 갤러리 게시판

![image-20211006113827126](README.assets/image-20211006113827126.png)

- 작성 버튼 클릭해 게시글 작성 가능
- 게시글 클릭을 통해 다른 사람 갤러리로 이동 가능



##### 17) 상단 메뉴에서 MARKET 클릭

![image-20211006113749323](README.assets/image-20211006113749323.png)



##### 18) MARKET

![image-20211006114314967](README.assets/image-20211006114314967.png)



##### 19) 물품 등록 클릭

![image-20211006113916307](README.assets/image-20211006113916307.png)

- 내가 가진 카드들 중 판매하고 싶은 카드를 선택
- 제목, 내용, 가격을 작성해 카드를 MARKET에 등록 가능



##### 20) MARKET 카드 검색

![image-20211006131047830](README.assets/image-20211006131047830.png)

- 카드 이름이 아닌, MARKET 제목으로 검색 



##### 21) MARKET 카드 구매

<img src="README.assets/image-20211006114334123.png" width="70%" height="60%">

- 시간이 다소 소요될 수 있음
- 구매가 완료되면 구매 진행창이 사라짐



##### 21) 갤러리에서 구매 카드 확인

![image-20211006114624097](README.assets/image-20211006114624097.png)
