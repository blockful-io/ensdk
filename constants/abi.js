export const contractABIs = {
  OldETHRegistrarController: [
    "constructor(address _base, address _prices, uint256 _minCommitmentAge, uint256 _maxCommitmentAge)",
    "event NameRegistered(string name, bytes32 indexed label, address indexed owner, uint256 cost, uint256 expires)",
    "event NameRenewed(string name, bytes32 indexed label, uint256 cost, uint256 expires)",
    "event NewPriceOracle(address indexed oracle)",
    "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    "function MIN_REGISTRATION_DURATION() view returns (uint256)",
    "function available(string name) view returns (bool)",
    "function commit(bytes32 commitment)",
    "function commitments(bytes32) view returns (uint256)",
    "function isOwner() view returns (bool)",
    "function makeCommitment(string name, address owner, bytes32 secret) pure returns (bytes32)",
    "function makeCommitmentWithConfig(string name, address owner, bytes32 secret, address resolver, address addr) pure returns (bytes32)",
    "function maxCommitmentAge() view returns (uint256)",
    "function minCommitmentAge() view returns (uint256)",
    "function owner() view returns (address)",
    "function register(string name, address owner, uint256 duration, bytes32 secret) payable",
    "function registerWithConfig(string name, address owner, uint256 duration, bytes32 secret, address resolver, address addr) payable",
    "function renew(string name, uint256 duration) payable",
    "function renounceOwnership()",
    "function rentPrice(string name, uint256 duration) view returns (uint256)",
    "function setCommitmentAges(uint256 _minCommitmentAge, uint256 _maxCommitmentAge)",
    "function setPriceOracle(address _prices)",
    "function supportsInterface(bytes4 interfaceID) pure returns (bool)",
    "function transferOwnership(address newOwner)",
    "function valid(string name) pure returns (bool)",
    "function withdraw()",
  ],
  NewETHRegistrarController: [
    "constructor(address _base, address _prices, uint256 _minCommitmentAge, uint256 _maxCommitmentAge, address _reverseRegistrar, address _nameWrapper, address _ens)",
    "error CommitmentTooNew(bytes32 commitment)",
    "error CommitmentTooOld(bytes32 commitment)",
    "error DurationTooShort(uint256 duration)",
    "error InsufficientValue()",
    "error MaxCommitmentAgeTooHigh()",
    "error MaxCommitmentAgeTooLow()",
    "error NameNotAvailable(string name)",
    "error ResolverRequiredWhenDataSupplied()",
    "error UnexpiredCommitmentExists(bytes32 commitment)",
    "event NameRegistered(string name, bytes32 indexed label, address indexed owner, uint256 baseCost, uint256 premium, uint256 expires)",
    "event NameRenewed(string name, bytes32 indexed label, uint256 cost, uint256 expires)",
    "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    "function MIN_REGISTRATION_DURATION() view returns (uint256)",
    "function available(string name) view returns (bool)",
    "function commit(bytes32 commitment)",
    "function commitments(bytes32) view returns (uint256)",
    "function makeCommitment(string name, address owner, uint256 duration, bytes32 secret, address resolver, bytes[] data, bool reverseRecord, uint16 ownerControlledFuses) pure returns (bytes32)",
    "function maxCommitmentAge() view returns (uint256)",
    "function minCommitmentAge() view returns (uint256)",
    "function nameWrapper() view returns (address)",
    "function owner() view returns (address)",
    "function prices() view returns (address)",
    "function recoverFunds(address _token, address _to, uint256 _amount)",
    "function register(string name, address owner, uint256 duration, bytes32 secret, address resolver, bytes[] data, bool reverseRecord, uint16 ownerControlledFuses) payable",
    "function renew(string name, uint256 duration) payable",
    "function renounceOwnership()",
    "function rentPrice(string name, uint256 duration) view returns (tuple(uint256 base, uint256 premium) price)",
    "function reverseRegistrar() view returns (address)",
    "function supportsInterface(bytes4 interfaceID) pure returns (bool)",
    "function transferOwnership(address newOwner)",
    "function valid(string name) pure returns (bool)",
    "function withdraw()",
  ],
  BaseRegistrar: [
    "constructor(address _ens, bytes32 _baseNode)",
    "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
    "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
    "event ControllerAdded(address indexed controller)",
    "event ControllerRemoved(address indexed controller)",
    "event NameMigrated(uint256 indexed id, address indexed owner, uint256 expires)",
    "event NameRegistered(uint256 indexed id, address indexed owner, uint256 expires)",
    "event NameRenewed(uint256 indexed id, uint256 expires)",
    "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    "function GRACE_PERIOD() view returns (uint256)",
    "function addController(address controller)",
    "function approve(address to, uint256 tokenId)",
    "function available(uint256 id) view returns (bool)",
    "function balanceOf(address owner) view returns (uint256)",
    "function baseNode() view returns (bytes32)",
    "function controllers(address) view returns (bool)",
    "function ens() view returns (address)",
    "function getApproved(uint256 tokenId) view returns (address)",
    "function isApprovedForAll(address owner, address operator) view returns (bool)",
    "function isOwner() view returns (bool)",
    "function nameExpires(uint256 id) view returns (uint256)",
    "function owner() view returns (address)",
    "function ownerOf(uint256 tokenId) view returns (address)",
    "function reclaim(uint256 id, address owner)",
    "function register(uint256 id, address owner, uint256 duration) returns (uint256)",
    "function registerOnly(uint256 id, address owner, uint256 duration) returns (uint256)",
    "function removeController(address controller)",
    "function renew(uint256 id, uint256 duration) returns (uint256)",
    "function renounceOwnership()",
    "function safeTransferFrom(address from, address to, uint256 tokenId)",
    "function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)",
    "function setApprovalForAll(address to, bool approved)",
    "function setResolver(address resolver)",
    "function supportsInterface(bytes4 interfaceID) view returns (bool)",
    "function transferFrom(address from, address to, uint256 tokenId)",
    "function transferOwnership(address newOwner)",
  ],
  DNSRegistrar: [
    "constructor(address _dnssec, address _suffixes, address _ens)",
    "event Claim(bytes32 indexed node, address indexed owner, bytes dnsname)",
    "event NewOracle(address oracle)",
    "event NewPublicSuffixList(address suffixes)",
    "function claim(bytes name, bytes proof)",
    "function ens() view returns (address)",
    "function oracle() view returns (address)",
    "function proveAndClaim(bytes name, tuple(bytes rrset, bytes sig)[] input, bytes proof)",
    "function proveAndClaimWithResolver(bytes name, tuple(bytes rrset, bytes sig)[] input, bytes proof, address resolver, address addr)",
    "function setOracle(address _dnssec)",
    "function setPublicSuffixList(address _suffixes)",
    "function suffixes() view returns (address)",
    "function supportsInterface(bytes4 interfaceID) pure returns (bool)",
  ],
  NameWrapper: [
    "constructor(address _ens, address _registrar, address _metadataService)",
    "error CannotUpgrade()",
    "error IncompatibleParent()",
    "error IncorrectTargetOwner(address owner)",
    "error IncorrectTokenType()",
    "error LabelMismatch(bytes32 labelHash, bytes32 expectedLabelhash)",
    "error LabelTooLong(string label)",
    "error LabelTooShort()",
    "error NameIsNotWrapped()",
    "error OperationProhibited(bytes32 node)",
    "error Unauthorised(bytes32 node, address addr)",
    "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
    "event ApprovalForAll(address indexed account, address indexed operator, bool approved)",
    "event ControllerChanged(address indexed controller, bool active)",
    "event ExpiryExtended(bytes32 indexed node, uint64 expiry)",
    "event FusesSet(bytes32 indexed node, uint32 fuses)",
    "event NameUnwrapped(bytes32 indexed node, address owner)",
    "event NameWrapped(bytes32 indexed node, bytes name, address owner, uint32 fuses, uint64 expiry)",
    "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
    "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
    "event URI(string value, uint256 indexed id)",
    "function _tokens(uint256) view returns (uint256)",
    "function allFusesBurned(bytes32 node, uint32 fuseMask) view returns (bool)",
    "function approve(address to, uint256 tokenId)",
    "function balanceOf(address account, uint256 id) view returns (uint256)",
    "function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
    "function canExtendSubnames(bytes32 node, address addr) view returns (bool)",
    "function canModifyName(bytes32 node, address addr) view returns (bool)",
    "function controllers(address) view returns (bool)",
    "function ens() view returns (address)",
    "function extendExpiry(bytes32 parentNode, bytes32 labelhash, uint64 expiry) returns (uint64)",
    "function getApproved(uint256 id) view returns (address operator)",
    "function getData(uint256 id) view returns (address owner, uint32 fuses, uint64 expiry)",
    "function isApprovedForAll(address account, address operator) view returns (bool)",
    "function isWrapped(bytes32 parentNode, bytes32 labelhash) view returns (bool)",
    "function isWrapped(bytes32 node) view returns (bool)",
    "function metadataService() view returns (address)",
    "function name() view returns (string)",
    "function names(bytes32) view returns (bytes)",
    "function onERC721Received(address to, address, uint256 tokenId, bytes data) returns (bytes4)",
    "function owner() view returns (address)",
    "function ownerOf(uint256 id) view returns (address owner)",
    "function recoverFunds(address _token, address _to, uint256 _amount)",
    "function registerAndWrapETH2LD(string label, address wrappedOwner, uint256 duration, address resolver, uint16 ownerControlledFuses) returns (uint256 registrarExpiry)",
    "function registrar() view returns (address)",
    "function renew(uint256 tokenId, uint256 duration) returns (uint256 expires)",
    "function renounceOwnership()",
    "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)",
    "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
    "function setApprovalForAll(address operator, bool approved)",
    "function setChildFuses(bytes32 parentNode, bytes32 labelhash, uint32 fuses, uint64 expiry)",
    "function setController(address controller, bool active)",
    "function setFuses(bytes32 node, uint16 ownerControlledFuses) returns (uint32)",
    "function setMetadataService(address _metadataService)",
    "function setRecord(bytes32 node, address owner, address resolver, uint64 ttl)",
    "function setResolver(bytes32 node, address resolver)",
    "function setSubnodeOwner(bytes32 parentNode, string label, address owner, uint32 fuses, uint64 expiry) returns (bytes32 node)",
    "function setSubnodeRecord(bytes32 parentNode, string label, address owner, address resolver, uint64 ttl, uint32 fuses, uint64 expiry) returns (bytes32 node)",
    "function setTTL(bytes32 node, uint64 ttl)",
    "function setUpgradeContract(address _upgradeAddress)",
    "function supportsInterface(bytes4 interfaceId) view returns (bool)",
    "function transferOwnership(address newOwner)",
    "function unwrap(bytes32 parentNode, bytes32 labelhash, address controller)",
    "function unwrapETH2LD(bytes32 labelhash, address registrant, address controller)",
    "function upgrade(bytes name, bytes extraData)",
    "function upgradeContract() view returns (address)",
    "function uri(uint256 tokenId) view returns (string)",
    "function wrap(bytes name, address wrappedOwner, address resolver)",
    "function wrapETH2LD(string label, address wrappedOwner, uint16 ownerControlledFuses, address resolver) returns (uint64 expiry)",
  ],
  PublicResolver: [
    "constructor(address _ens, address wrapperAddress, address _trustedETHController, address _trustedReverseRegistrar)",
    "event ABIChanged(bytes32 indexed node, uint256 indexed contentType)",
    "event AddrChanged(bytes32 indexed node, address a)",
    "event AddressChanged(bytes32 indexed node, uint256 coinType, bytes newAddress)",
    "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
    "event Approved(address owner, bytes32 indexed node, address indexed delegate, bool indexed approved)",
    "event ContenthashChanged(bytes32 indexed node, bytes hash)",
    "event DNSRecordChanged(bytes32 indexed node, bytes name, uint16 resource, bytes record)",
    "event DNSRecordDeleted(bytes32 indexed node, bytes name, uint16 resource)",
    "event DNSZonehashChanged(bytes32 indexed node, bytes lastzonehash, bytes zonehash)",
    "event InterfaceChanged(bytes32 indexed node, bytes4 indexed interfaceID, address implementer)",
    "event NameChanged(bytes32 indexed node, string name)",
    "event PubkeyChanged(bytes32 indexed node, bytes32 x, bytes32 y)",
    "event TextChanged(bytes32 indexed node, string indexed indexedKey, string key, string value)",
    "event VersionChanged(bytes32 indexed node, uint64 newVersion)",
    "function ABI(bytes32 node, uint256 contentTypes) view returns (uint256, bytes)",
    "function addr(bytes32 node) view returns (address)",
    "function addr(bytes32 node, uint256 coinType) view returns (bytes)",
    "function approve(bytes32 node, address delegate, bool approved)",
    "function clearRecords(bytes32 node)",
    "function contenthash(bytes32 node) view returns (bytes)",
    "function dnsRecord(bytes32 node, bytes32 name, uint16 resource) view returns (bytes)",
    "function hasDNSRecords(bytes32 node, bytes32 name) view returns (bool)",
    "function interfaceImplementer(bytes32 node, bytes4 interfaceID) view returns (address)",
    "function isApprovedFor(address owner, bytes32 node, address delegate) view returns (bool)",
    "function isApprovedForAll(address account, address operator) view returns (bool)",
    "function multicall(bytes[] data) returns (bytes[] results)",
    "function multicallWithNodeCheck(bytes32 nodehash, bytes[] data) returns (bytes[] results)",
    "function name(bytes32 node) view returns (string)",
    "function pubkey(bytes32 node) view returns (bytes32 x, bytes32 y)",
    "function recordVersions(bytes32) view returns (uint64)",
    "function setABI(bytes32 node, uint256 contentType, bytes data)",
    "function setAddr(bytes32 node, uint256 coinType, bytes a)",
    "function setAddr(bytes32 node, address a)",
    "function setApprovalForAll(address operator, bool approved)",
    "function setContenthash(bytes32 node, bytes hash)",
    "function setDNSRecords(bytes32 node, bytes data)",
    "function setInterface(bytes32 node, bytes4 interfaceID, address implementer)",
    "function setName(bytes32 node, string newName)",
    "function setPubkey(bytes32 node, bytes32 x, bytes32 y)",
    "function setText(bytes32 node, string key, string value)",
    "function setZonehash(bytes32 node, bytes hash)",
    "function supportsInterface(bytes4 interfaceID) view returns (bool)",
    "function text(bytes32 node, string key) view returns (string)",
    "function zonehash(bytes32 node) view returns (bytes)",
  ],
  Registry: [
    "constructor(address _old)",
    "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
    "event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner)",
    "event NewResolver(bytes32 indexed node, address resolver)",
    "event NewTTL(bytes32 indexed node, uint64 ttl)",
    "event Transfer(bytes32 indexed node, address owner)",
    "function isApprovedForAll(address owner, address operator) view returns (bool)",
    "function old() view returns (address)",
    "function owner(bytes32 node) view returns (address)",
    "function recordExists(bytes32 node) view returns (bool)",
    "function resolver(bytes32 node) view returns (address)",
    "function setApprovalForAll(address operator, bool approved)",
    "function setOwner(bytes32 node, address owner)",
    "function setRecord(bytes32 node, address owner, address resolver, uint64 ttl)",
    "function setResolver(bytes32 node, address resolver)",
    "function setSubnodeOwner(bytes32 node, bytes32 label, address owner) returns (bytes32)",
    "function setSubnodeRecord(bytes32 node, bytes32 label, address owner, address resolver, uint64 ttl)",
    "function setTTL(bytes32 node, uint64 ttl)",
    "function ttl(bytes32 node) view returns (uint64)",
  ],
  ReverseRegistrar: [
    "constructor(address ensAddr)",
    "event ControllerChanged(address indexed controller, bool enabled)",
    "event DefaultResolverChanged(address indexed resolver)",
    "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    "event ReverseClaimed(address indexed addr, bytes32 indexed node)",
    "function claim(address owner) returns (bytes32)",
    "function claimForAddr(address addr, address owner, address resolver) returns (bytes32)",
    "function claimWithResolver(address owner, address resolver) returns (bytes32)",
    "function controllers(address) view returns (bool)",
    "function defaultResolver() view returns (address)",
    "function ens() view returns (address)",
    "function node(address addr) pure returns (bytes32)",
    "function owner() view returns (address)",
    "function renounceOwnership()",
    "function setController(address controller, bool enabled)",
    "function setDefaultResolver(address resolver)",
    "function setName(string name) returns (bytes32)",
    "function setNameForAddr(address addr, address owner, address resolver, string name) returns (bytes32)",
    "function transferOwnership(address newOwner)",
  ],
};
