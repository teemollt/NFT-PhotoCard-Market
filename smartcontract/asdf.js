const pay = () => {
  // 지갑이 있으면
  walletCheck()
  if (userAddress) {
    // 잔액이 가격+가스비 이상이면
    if (parseFloat(userBalance) > props.price + 0.01) {
      const tokenSer = parseInt(props.itemtoken)
      // 로딩 시작
      setloading(true)
      // 컨트랙트 buycard 호출
      myContract.methods
        .buyCard(tokenSer)
        .send({
          from: userAddress,
          value: props.price * Math.pow(10, 18),
        })
        .then(function (receipt: any) {
          console.log(receipt)
          axios
            .post(
              "/api/auction/buy",
              {
                auctionNo: parseInt(props.auctionNo),
              },
              { headers: { Authorization: localStorage.getItem("token") } }
            )
            .then((res) => {
              console.log(res)
              setOpen(false)
              setloading(false)
              alert("물건을 성공적으로 구매하였습니다")
              history.push({
                pathname: "/market",
              })
              console.log(props.sellerwallet)
              // 성공했으면 소유권 이전 함수 호출
              myContract.methods
                .transferFrom(props.sellerwallet, userAddress, tokenSer)
                .send({
                  from: props.sellerwallet,
                })
                .then(function (receipt: any) {
                  console.log(receipt)
                  walletCheck()
                })
            })
            .catch((err: any) => {
              // api요청 실패
              console.log(err)
              // 구매 실패 alert 띄우기
              // 여기서 환불 함수 호출
              const refund = async () => {
                const tx = {
                  from: props.sellerwallet,
                  gasPrice: "20000000000",
                  gas: "21000",
                  to: userAddress,
                  value: props.price,
                  data: "",
                }
                try {
                  const adminUnlock = await web3.eth.personal.unlockAccount(
                    props.sellerwallet,
                    "123",
                    6000
                  )
                  console.log(adminUnlock)
                  const unlock = await web3.eth.personal.unlockAccount(
                    userAddress,
                    "123",
                    6000
                  )
                  console.log(unlock)
                } catch (err) {
                  console.log(err)
                }
                try {
                  const charge = await web3.eth.sendTransaction(tx, "123")
                  console.log(charge)
                  // 환불 완료 alert 띄우기
                } catch (err) {
                  console.log(err)
                  // 환불실패 돈먹튀당함 ㅅㄱ
                }
              }
              refund()
            })
        } else {
          alert("잔액이 부족합니다. 캐시를 충전해주세요")
        }
      // 가격
      console.log(props.price)
      // 아이템토큰번호
      console.log(props.itemtoken)
      // 옥션번호
      console.log(props.auctionNo)
      // 판매자 주소
      console.log(props.sellerwallet)
      // 잔액체크
      walletCheck()
      // 구매통신보내기

    } else {
      alert("지갑을 생성해주세요")
    }
  };