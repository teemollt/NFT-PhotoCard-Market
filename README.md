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

      ![image-20210831204353659](.\img\req1_vagrant_version)

    - 호스트와 가상 머신 간 파일 전송 플러그인 설치

      ```
      > vagrant plugin install vagrant-scp
      ```

      ![image-20210831204812177](.\img\req1_vagrant_plugin_install)

      

- 이더리움 네트워크 구축용 VM 2대 생성

  - 원하는 작업 디렉토리에서 Vagrant 초기화(설정 파일 생성)

    ```
    > vagrant init
    ```

    ![image-20210831204944567](.\img\req1_vagrant_init)

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
        # The most common configuration options are documented and commented below.
        # For a complete reference, please see the online documentation at
        # https://docs.vagrantup.com.
      
        # Every Vagrant development environment requires a box. You can search for
        # boxes at https://vagrantcloud.com/search.
        # config.vm.box = "base"
      
        # Disable automatic box update checking. If you disable this, then
        # boxes will only be checked for updates when the user runs
        # `vagrant box outdated`. This is not recommended.
        # config.vm.box_check_update = false
      
        # Create a forwarded port mapping which allows access to a specific port
        # within the machine from a port on the host machine. In the example below,
        # accessing "localhost:8080" will access port 80 on the guest machine.
        # NOTE: This will enable public access to the opened port
        # config.vm.network "forwarded_port", guest: 80, host: 8080
      
        # Create a forwarded port mapping which allows access to a specific port
        # within the machine from a port on the host machine and only allow access
        # via 127.0.0.1 to disable public access
        # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"
      
        # Create a private network, which allows host-only access to the machine
        # using a specific IP.
        # config.vm.network "private_network", ip: "192.168.33.10"
      
        # Create a public network, which generally matched to bridged network.
        # Bridged networks make the machine appear as another physical device on
        # your network.
        # config.vm.network "public_network"
      
        # Share an additional folder to the guest VM. The first argument is
        # the path on the host to the actual folder. The second argument is
        # the path on the guest to mount the folder. And the optional third
        # argument is a set of non-required options.
        # config.vm.synced_folder "../data", "/vagrant_data"
      
        # Provider-specific configuration so you can fine-tune various
        # backing providers for Vagrant. These expose provider-specific options.
        # Example for VirtualBox:
        #
        # config.vm.provider "virtualbox" do |vb|
        #   # Display the VirtualBox GUI when booting the machine
        #   vb.gui = true
        #
        #   # Customize the amount of memory on the VM:
        #   vb.memory = "1024"
        # end
        #
        # View the documentation for the provider you are using for more
        # information on available options.
      
        # Enable provisioning with a shell script. Additional provisioners such as
        # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
        # documentation for more information about their specific syntax and use.
        # config.vm.provision "shell", inline: <<-SHELL
        #   apt-get update
        #   apt-get install -y apache2
        # SHELL
        # end
      
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

    ```
    
    ```

  - Issue

    - ![image-20210902135919218](.\img\req1_geth_error)

    - `Fatal: Failed to create the protocol stack: datadir already used by another process`

      - geth 구동 후 제대로 종료되지 않아 datadir를 사용중이라고 함

      - 해결

        - 프로세스의 PID 알아내야함

          ```
          $ ps aux|grep geth
          ```

          ![image-20210902140224625](.\img\req1_geth_error_sol1)

        - kill 

          ```
          $ kill -9 PID
          ex) kill -9 3454
          ```



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

![image-20210902141804311](.\img\req2_coinbase)



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

  ![image-20210902141912271](.\img\req2_mining)



### Req. 3. 이더리움 트랜잭션 생성

- peer 연결

  - eth0 노드의 enode 확인

    ```
    admin.nodeInfo.enode
    ```

    ![image-20210902220937731](.\img\req2_endoe)

  - eht1에서 계정생성 및 peer 추가

    ```
    personal.newAccount("비밀번호")
    admin.addPeer("eth0 enode")
    ```

    ![image-20210902221115706](.\img\req2_addPeer)

    - eth0 노드 연결 시 eth0의 enode의 @뒤 ip를 vm ip로 바꿔주고 discport도 0으로 바꿔줌
    - `192.168.50.10:30303?discport=0`

  - eth0 노드에서 연결된 peer 확인

    ```
    admin.peers
    ```

    ![image-20210902221159408](.\img\req2_peers)

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

      ![image-20210902221623904](.\img\req3_account)

      - 이더 전송 할 노드 , 받을 노드 두 계정다 unlock

      - 해당 에러가 난다면

        ![image-20210902221907500](.\img\req3_unlockAccount_error)

        - geth 설정 시 `--allow-insecure-unlock` 추가 해준다.
        - 자세한 내용은 추후에 알아보자.

    - sendTransaction

      ```
      eth.sendTransaction(
      	{from: 보내는 곳,
      	to: "받는 곳",
      	value: web3.toWei(보낼 금액, "ether")})
      ```

      ![image-20210902222142807](.\img\req3_sendTransaction)

    - 처리하지 않은 Transaction 확인

      ```
      eth.pendingTransactions
      ```

    

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

  ![image-20210902222517809](.\img\req3_Transction_result)

- 계정 잔고 확인

  ![image-20210902223903798](.\img\req3_getBalance)



### Req. 4. 스마트 컨트랙트 배포

##### 4.1 eth0 노드 확인

- VirtualBox 관리자에서 확인한다.

  - `VirtualBox 해당 VM 설정 > 네트워크 > 고급 > 포트 포워딩`

    ![image-20210902222632498](.\img\req4_eth0_portfowarding_1)

    ![image-20210902222656483](.\img\req4_eth0_portfowarding_2)

    ![image-20210902222715677](.\img\req4_eth0_portfowarding_3)

- eth0 VM에 대한 포트 포워딩

  - Host 8545 -> Guest 8545

  

- eth0 keystore json 파일

  - eth0 keystore의 계정 파일이 필요 -> Host OS로 가져와야함

  - VirtualBox의 공유폴더 활용

    - VirtualBox 해당 VM 설정 > 공유폴더

      ![image-20210902222930177](.\img\req4_keystore_1)

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

      ![image-20210902223230851](.\img\req4_keystore_2)

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

      ![image-20210902223526753](.\img\req4_keystore_3)

      ![image-20210902223605522](.\img\req4_keystore_4)

      ![image-20210902223627179](.\img\req4_keystore_5)

      

##### 4.2 Metamask 설정

- Metamask 설치 및 실행

- Metamask Custom RPC 옵션 설정

- Metamask 계정 import

  - VM 공유폴더로 공유된 계정파일을 import 시킨다.

  ![image-20210902190141769](.\img\req4_metamask_2)

  ![image-20210902190206458](.\img\req4_metamask_3)

  

- 계정 및 잔액 정보확인

  ![image-20210902190100128](.\img\req4_metamask_4)

  - ![image-20210902190112423](.\img\req4_metamask_5)

  

##### 4.3 스마트 컨트랙트 배포(Remix)

- Remix 접속

