# Sub PJT 1 - 블록체인 네트워크 구축 및 활용

### Req. 1. 프라이빗 이더리움 네트워크 구축

##### 1.1 가상 머신 구성

- virtual Box & Varant Install

  - Virtual Box - https://www.virtualbox.org/wiki/Downloads

  - Vargrant Install - https://www.vagrantup.com/downloads

    - 설치 여부 및 버전 확인

      ```
      > vagrant version
      ```

    - 호스트와 가상 머신 간 파일 전송 플러그인 설치

      ```
      > vagrant plugin install vagrant-scp

- 이더리움 네트워크 구축용 VM 2대 생성

  - 원하는 작업 디렉토리에서 Vagrant 초기화(설정 파일 생성)

    ```
    > vagrant init
    ```

  - 생성된 vagrantfile 수정

    - ```
      # -*- mode: ruby -*-
      # vi: set ft=ruby :
      
      # All Vagrant configuration is done below. The "2" in Vagrant.configure
      # configures the configuration version (we support older styles for
      # backwards compatibility). Please don't change it unless you know what
      # you're doing.
      VAGRANT_API_VERSION = "2"
      
      vms = {
      	'eth0' => '10',
      	'eth1' => '11'
      }
      
      Vagrant.configure(VAGRANT_API_VERSION) do |config|
      	config.vm.box = "ubuntu/bionic64"
      	vms.each do |key, value|
      		config.vm.define "#{key}" do |node|
      			node.vm.network "private_network", ip: "192.168.50.#{value}"
      			if "#{key}" == "eth0"
      				node.vm.network "forwarded_port", guest: 8545, host: 8545
      			end
      			node.vm.hostname = "#{key}"
      			node.vm.provider "virtualbox" do |nodev|
      				nodev.memory = 2048
      			end
      		end
      	end
      end
      
      ```
  
  - 가상머신 구동

    - ```
      > vagrant up
      ```
  
  - 가상머신 구동 상태 확인

    - ```
      > vagrant status
      ```
  
  - 가상머신 접속(eth0 기준)

    - ```
      > vagrant ssh eth0
      ```
  
      

##### 1.2 이더리움 노드 구성

- | Hostname | eth0                | eth1                |
  | -------- | ------------------- | ------------------- |
  | port     | 30303               | 30303               |
  | Maxpeers | 2                   | 2                   |
  | Datadir  | ~/dev/eth_localdata | ~/dev/eth_localdata |
  | RPC port | 8545                | 8545                |
  | RPC Addr | 0.0.0.0             | localhost           |
  | RPC API  | 사용                | N/A                 |
  | Mining   | True                | True                |

  

- Geth Install

  - PPA 와 Git에서 설치하는 방법 두가지 존재

  - PPA Install

    ```
    $ sudo apt-get update
    $ sudo apt-get install software-properties-common
    $ sudo add-apt-repository -y ppa:ethereum/ethereum
    $ sudo apt-get -y install ethereum
    ```

    

- Genesis Block

  - 초기 블럭 (genesis Block)을 생성

    ```
    $ mkdir -p dev/eth_localdata //작업공간 생성
    $ cd dev/eth_localdata // 작업공간으로 이동
    
    $vi genesis.json // genesis.json 생성
    ```

    - genesis.json

      ```
      {
        "config": {
          "chainId": 921,
          "homesteadBlock": 0,
          "eip150Block": 0,
          "eip155Block": 0,
          "eip158Block": 0
        },
        "alloc": {},
        "coinbase": "0x0000000000000000000000000000000000000000",
        "difficulty": "0x10",
        "extraData": "",
        "gasLimit": "9999999",
        "nonce": "0xdeadbeefdeadbeef",
        "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "timestamp": "0x00"
       }
      ```

  

- Geth 초기화

  ```
  $ geth --datadir ~/dev/eth_localdata init ~/dev/eth_localdata/Genesis.json
  ```

  

- 노드 geth 구동

  - eth0

    ```
    $ geth --networkid 921 --port 30303 --maxpeers 2 --datadir ~/dev/eth_localdata --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,miner,debug,personal,rpc" --allow-insecure-unlock --mine console 2>> geth.log
    ```

  - eth1

    - eth0 같은 과정을 거쳐서 구동해줌


### Req. 2. 이더리움 계정생성

##### 2.1 계정생성

- 계정생성

  ```
  personal.newAccount("password")
  ```

- keystore 파일 확인

  ```
  $ cd dev/eth_localdata
  $ ls
  $ cd keystore
  $ ls
  ```

  

##### 2.2 코인베이스 설정

- 코인베이스 설정

  ```
  miner.setEtherbase(생성한 계정중 하나) //default는 0번 계정
  miner.setEtherbase(eth.accounts[0])
  ```

  - 채굴 후 보상 받을 계정 설정




##### 2.3 마이닝(Mining) 시작 및 결과 확인

- 마이닝

  ```
  mine.start() //시작
  eth.minig // 마이닝 상태
  eth.blockNumber // block 수 확인
  miner.stop() // 마이닝 중지
  eth.mining // 마이닝 상태
  eth.getBalance(eth.coinbase) // 코인베이스 이더 확인
  web3.fromWei(eth.getBalance(eth.coinbase), "ether")
  ```



### Req. 3. 이더리움 트랜잭션 생성

- peer 연결

  - eth0 노드의 enode 확인

    ```
    admin.nodeInfo.enode
    ```


  - eht1에서 계정생성 및 peer 추가

    ```
    eth.newAccount("비밀번호")
    admin.addPeer("eth0 enode")
    ```


    - eth0 노드 연결 시 eth0의 enode의 @뒤 ip를 vm ip로 바꿔주고 discport도 0으로 바꿔줌
    - `192.168.50.10:30303?discport=0`

  - eth0 노드에서 연결된 peer 확인

    ```
    admin.peers
    ```


  - 블럭 확인

    - 각 노드의 마지막 블럭이 같은 지 확인하였음

    ```
    eth.getBlock('latest')
    ```




##### 3.1 트랜잭션 생성

- 이더리움 트랜잭션 생성

  - 트랜잭션 생성

    - Account Unlock

      ```
      personal.unlockAccount(계정, "계정비밀번호")
      ```


      - 이더 전송 할 노드 , 받을 노드 두 계정다 unlock
    
      - 해당 에러가 난다면


        - geth 설정 시 `--allow-insecure-unlock` 추가 해준다.
        - 자세한 내용은 추후에 알아보자.
    
    - sendTransaction
    
      ```
      eth.sendTransaction(
      	{from: 보내는 곳,
      	to: "받는 곳",
      	value: web3.toWei(보낼 금액, "ether")})
      ```
    
    - 처리하지 않은 Transaction 확인
    
      ```
      eth.pendingTransactions
      ```


​    

##### 3.2 트랜잭션 결과 확인

- 트랜잭션 결과는 마이닝 후에 알 수 있다.

- 마이닝 시작 및 중지 , 트랜잭션 상태 조회

  ```
  miner.start()
  eth.mining
  miner.stop()
  eth.mining
  eth.pendingTransactions
  ```


- 계정 잔고 확인


### Req. 4. 스마트 컨트랙트 배포

##### 4.1 eth0 노드 확인

- VirtualBox 관리자에서 확인한다.

  - `VirtualBox 해당 VM 설정 > 네트워크 > 고급 > 포트 포워딩`


- eth0 VM에 대한 포트 포워딩

  - Host 8545 -> Guest 8545

  

- eth0 keystore json 파일

  - eth0 keystore의 계정 파일이 필요 -> Host OS로 가져와야함

  - VirtualBox의 공유폴더 활용

    - VirtualBox 해당 VM 설정 > 공유폴더


      - 기본 폴더가 생성되어있다.
      - 필요시 오른쪽 + 버튼을 통해 폴더를 생성하면 된다.
    
    - vm에서 공유폴더를 마운트
    
      ```
      $ mkdir share // 마운트할 폴더생성
      $ mount -t vboxsf [공유폴더] [마운트할 폴더]
      $ mount -t vboxsf vagrant share
      $ cd share 
      $ ls
      ```
    
      - 해당 디렉토리에 들어가 파일목록을 확인해보면 mount가 된 것을 확인 할 수 있다.
    
    - dev/eth_localdata/keystore에 저장된 계정파일 복사 및 이동
    
      ```
      $ cd dev/eth_localdata/keystore
      $ ls
      $ cp [복사할 파일명] [복사할 위치/복사파일명]
      $ cp UTC--2021-09-02T04-58-03.001996402Z--59123d714061a72016ea63784f5fbd05d0df87e6 ~/share/UTC--2021-09-02T04-58-03.001996402Z--59123d714061a72016ea63784f5fbd05d0df87e6
      $ cd ~/share
      $ ls
      ```


##### 4.2 Metamask 설정

- Metamask 설치 및 실행

- Metamask Custom RPC 옵션 설정

- Metamask 계정 import

  - VM 공유폴더로 공유된 계정파일을 import 시킨다.
  
- 계정 및 잔액 정보확인


##### 4.3 스마트 컨트랙트 배포(Remix)

- Remix 접속

