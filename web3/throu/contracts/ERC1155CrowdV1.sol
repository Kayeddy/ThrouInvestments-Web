// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// CONTROL ACCESS

// PAUSABLE CONTRACT

// PROXY SIZE LIMIT

// SPLIT CONTRACT

/// @custom:security-contact info@bitsdapps.tech
    contract ProjectCrowdfunding is
    ERC1155,
    ERC1155Holder,
    ERC1155Burnable,
    ERC1155Supply,
    ReentrancyGuard
    {
    
    using SafeERC20 for IERC20;
    IERC20 public cUsd;
    
    
     struct investor {
        uint256 projectOwnerShares; 
        uint256 profitGainsByOwner; 
        uint256 profitClaimedByOwner;
        bool addressProjectHolder;
     }


    struct Project {
        uint256 projectPrice; //ProjectPriceUSD???
        uint256 projectSales;
        uint256 projectProfit;
        uint256 projectTotalSupply;
        address payable[] projectHolders;
        bool projectActive;
        bool crowfundingPhase;
        string projectURI;
        mapping (address => investor) investorInfo; 
    }  

        mapping (uint256 => Project) projectStructs;
        uint256 public totalProjects;
        bytes32 private kyclist;
        address public admin;


        function _onlyAdmin() private view {
            require( admin == msg.sender);
        }

        modifier onlyAdmin(){
            _onlyAdmin();
            _;
        }

        function newAdmin(address _new) public onlyAdmin {
            admin = _new;
        }






        constructor(IERC20 _cUsd) ERC1155("tokenURI/") {
        cUsd = _cUsd;
        admin = msg.sender;
    }

        function setURI(string memory _project_URI, uint256 _id) public onlyAdmin {
            projectStructs[_id].projectURI = _project_URI;
        }

        function uri(uint256 _id) public view virtual override returns(string memory) {
            return (projectStructs[_id].projectURI);
        }


//-------------------------------- SET NEW PROJECT -------------------------------------- 

        function NewProject(uint256 amount,
        uint256 price, string memory project_URI) 
        public
        onlyAdmin
        {
        _mint(address(this), totalProjects, amount,"");
        projectStructs[totalProjects].projectPrice = price;
        projectStructs[totalProjects].projectTotalSupply = amount;
        projectStructs[totalProjects].projectURI = project_URI;
        projectStructs[totalProjects].projectActive = true;
        projectStructs[totalProjects].crowfundingPhase = false;
        totalProjects++;
        }

        function cancelProjectEmergency
        (uint256 _id, bool _cancel)
        public
        onlyAdmin

        {
                projectStructs[_id].projectActive = _cancel;
        }

        function startAndEndCrowfundingProject(uint256 _id, bool x) public onlyAdmin
         {
            projectStructs[_id].crowfundingPhase = x;
        }

// ------------------------------- GET INFO PROJECT --------------------------------------
        
        function getTotalProjectById(uint256 _id) public view 
        returns(
        uint256,
        uint256,
        address payable[] memory,
        uint256,
        uint256,
        bool,
        string memory
        ){
            return(
            projectStructs[_id].projectPrice,
            projectStructs[_id].projectSales,
            projectStructs[_id].projectHolders,
            projectStructs[_id].projectProfit,
            projectStructs[_id].projectTotalSupply,
            projectStructs[_id].projectActive,
            projectStructs[_id].projectURI
            );
        }

        function getPhaseOfProject(uint256 _id)
        public
        view
        returns(bool)
        {
            return projectStructs[_id].crowfundingPhase;
        }


//----------------------------- USER INFO --------------------------------
        function getInfoProjectByAddress(uint256 _id, address _user)
        public
        view
        //
        returns(
            uint256, 
            uint256,
            uint256,
            bool
            )
        {
        return(
        projectStructs[_id].investorInfo[_user].projectOwnerShares,
        projectStructs[_id].investorInfo[_user].profitGainsByOwner,
        projectStructs[_id].investorInfo[_user].profitClaimedByOwner,
        projectStructs[_id].investorInfo[_user].addressProjectHolder
        );
        }

        function getInfoProjectByUser(uint256 _id)
        public
        view
        returns(
            uint256, 
            uint256,
            uint256,
            bool
            )
        {
        return(
        projectStructs[_id].investorInfo[msg.sender].projectOwnerShares,
        projectStructs[_id].investorInfo[msg.sender].profitGainsByOwner,
        projectStructs[_id].investorInfo[msg.sender].profitClaimedByOwner,
        projectStructs[_id].investorInfo[msg.sender].addressProjectHolder
        );
        }

// ------------------------------- PROJECT BUY --------------------------------------

        function pushHolder(uint256 _id) internal {
            if(!projectStructs[_id].investorInfo[msg.sender].addressProjectHolder){
                        projectStructs[_id].projectHolders.push(payable(msg.sender));
                        projectStructs[_id].investorInfo[msg.sender].addressProjectHolder = true;
            }

        }

        //APROVE OFF-CHAIN, FRONT END.
        //PROOF OF MERKLE, OFF-CHAIN, FRONT - END 
        // Buy Project With Celo Dollar (Pays cUSD Fees with ContractKit Off-Chain)

        function buyProject2
        (uint256 _id, uint256 _amount, bytes32[] calldata proof)
        public
        {
        
        if(_amount>1000000000000000000000) { // KYC Validation 1000$
            require(MerkleProof.verify(
                proof,
            kyclist,
            _generateMerkleLeaf(msg.sender)
            ),
            "Complete KYC on Oficial Dapp"
        );
            require(projectStructs[_id].crowfundingPhase,
            "Phase not Activated");
            require(projectStructs[_id].projectActive, "Project is not activated");
            //require(_amount>=projectStructs[_id].projectPrice,"not enough for single token");
            cUsd.transferFrom(msg.sender,address(this),_amount);
            projectStructs[_id].investorInfo[msg.sender].projectOwnerShares += _amount * 10**18/ projectStructs[_id].projectPrice;
            projectStructs[_id].projectSales += _amount;
           _safeTransferFrom(address(this),msg.sender,_id,_amount* 10**18 /projectStructs[_id].projectPrice,'0x0');
            pushHolder(_id);
        }
        else {
            require(projectStructs[_id].crowfundingPhase,"Phase not Activated");
            require(projectStructs[_id].projectActive, "Project is not activated");
            //require(_amount>=projectStructs[_id].projectPrice,"not enough for single token");
            cUsd.transferFrom(msg.sender,address(this),_amount);
            projectStructs[_id].investorInfo[msg.sender].projectOwnerShares += _amount * 10**18/ projectStructs[_id].projectPrice;
            projectStructs[_id].projectSales += _amount;
           _safeTransferFrom(address(this),_msgSender(),_id,_amount * 10**18 /projectStructs[_id].projectPrice,'0x0');
            pushHolder(_id);
        }
        }

        // PAYS OFF CHAIN (FIAT)
        function adminTransfer
        (uint256 _id,
        uint256 amount,
        address buyer
        ) onlyAdmin 
        public
        {
            _safeTransferFrom(address(this),buyer,_id,amount,'0x0');
            projectStructs[_id].investorInfo[msg.sender].projectOwnerShares = amount;
        }


// ------------------------------- PROJECT WITHDRAW --------------------------------------
        
        //Withdraw Profit by ID
        function projectSalesWithdrawl(uint256 _id) 
        public 
        onlyAdmin
        {
           uint256 salesOfProject = projectStructs[_id].projectSales;
           require(salesOfProject>0,"no sales");
           cUsd.transfer(msg.sender,salesOfProject);
           projectStructs[_id].projectSales -= salesOfProject;
        }

// ------------------------------- PROJECT PROFIT and HOLDERS PAYS --------------------------------------

        // APPROVE OFF-CHAIN
        //Project Deposit with assigment profit holders
        function projectProfitDeposit(uint256 _id, uint256 _amount)
        public
        onlyAdmin
        {       

            require(projectStructs[_id].projectActive, "Project is not activated");
            cUsd.safeTransferFrom(msg.sender,address(this),_amount);
            for (uint i=0;i<projectStructs[_id].projectHolders.length;i++){
                address payable addr = projectStructs[_id].projectHolders[i];
                uint256 ownerPercentage = _amount*projectStructs[_id].investorInfo[addr].projectOwnerShares/projectStructs[_id].projectTotalSupply;
                projectStructs[_id].investorInfo[addr].profitGainsByOwner += ownerPercentage;
                cUsd.safeIncreaseAllowance(addr,projectStructs[_id].investorInfo[addr].profitGainsByOwner);
                }
        }

        function projectProfitDistributionByOwnerCall
        (uint256 _id)
        public
        {
            require(projectStructs[_id].investorInfo[msg.sender].addressProjectHolder,"You are not holder project");
            uint256 profitByCaller = projectStructs[_id].investorInfo[msg.sender].profitGainsByOwner;
            cUsd.safeTransfer(msg.sender,profitByCaller);
            cUsd.safeDecreaseAllowance(address(this),profitByCaller);
            projectStructs[_id].investorInfo[msg.sender].profitGainsByOwner -= profitByCaller;
            projectStructs[_id].investorInfo[msg.sender].profitClaimedByOwner += profitByCaller;
        }


        //OFF-CHAIN APROVE
        function projectProfitDepositDistribution(uint256 _id, uint256 _amount)
        public
        {
                require(projectStructs[_id].projectActive, "Project is not activated");
                cUsd.safeTransferFrom(msg.sender,address(this),_amount);
                for (uint i=0;i<projectStructs[_id].projectHolders.length;i++){
                    address payable addr = projectStructs[_id].projectHolders[i];
                    uint256 ownerPercentage = _amount*projectStructs[_id].investorInfo[addr].projectOwnerShares/projectStructs[_id].projectTotalSupply;
                    projectStructs[_id].investorInfo[addr].profitGainsByOwner += ownerPercentage;
                    cUsd.safeTransfer(addr,projectStructs[_id].investorInfo[addr].profitGainsByOwner);
                    projectStructs[_id].investorInfo[addr].profitGainsByOwner -= ownerPercentage;
                    projectStructs[_id].investorInfo[addr].profitClaimedByOwner += ownerPercentage;
            }
            }

//------------------------------------------ MERKLE PROOF ---------------------------

        function onKycList(address minter, bytes32[] calldata proof)
        external
        view
        returns (bool)
    {
        return
            MerkleProof.verify(
                proof,
                kyclist,
                _generateMerkleLeaf(minter)
            );
    }

    /* INTERNAL */

    function _generateMerkleLeaf(address account)
        internal
        pure
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(account));
    }

    function setKyc(bytes32 newRoot) public onlyAdmin 
     {
    kyclist = newRoot;
    }



        function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
            internal
            override(ERC1155, ERC1155Supply)
        {
            super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
        }

        // The following functions are overrides required by Solidity.

        function supportsInterface(bytes4 interfaceId)
            public
            view
            override(ERC1155, ERC1155Receiver)
            returns (bool)
        {
            return super.supportsInterface(interfaceId);
        }

        }
