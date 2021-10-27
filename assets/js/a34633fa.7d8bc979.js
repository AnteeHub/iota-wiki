"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95798],{95801:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),s=["components"],o={id:"smart-contracts-chains",title:"Chains",description:"In this article you will learn how the IOTA Smart Contract Chains works.",keywords:["Chains","Smart Contracts","wasp","ISCP","Multi-Chain"],image:"/img/learn/multichain.png"},c=void 0,l={unversionedId:"future/smart-contracts/smart-contracts-chains",id:"future/smart-contracts/smart-contracts-chains",isDocsHomePage:!1,title:"Chains",description:"In this article you will learn how the IOTA Smart Contract Chains works.",source:"@site/internal/learn/future/smart-contracts/04_chains.md",sourceDirName:"future/smart-contracts",slug:"/future/smart-contracts/smart-contracts-chains",permalink:"/learn/future/smart-contracts/smart-contracts-chains",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/smart-contracts/04_chains.md",tags:[],version:"current",lastUpdatedAt:1635347155,formattedLastUpdatedAt:"10/27/2021",sidebarPosition:4,frontMatter:{id:"smart-contracts-chains",title:"Chains",description:"In this article you will learn how the IOTA Smart Contract Chains works.",keywords:["Chains","Smart Contracts","wasp","ISCP","Multi-Chain"],image:"/img/learn/multichain.png"},sidebar:"learn",previous:{title:"Validators",permalink:"/learn/future/smart-contracts/smart-contracts-validators"},next:{title:"Decentralized Applications",permalink:"/learn/future/smart-contracts/smart-contracts-dapps"}},u=[{value:"State of the Chain",id:"state-of-the-chain",children:[],level:2},{value:"Digital Assets on the Chain",id:"digital-assets-on-the-chain",children:[],level:2},{value:"Further Readings\u200b",id:"further-readings",children:[],level:2}],h={toc:u};function p(t){var e=t.components,o=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"IOTA Smart Contracts is a ",(0,i.kt)("strong",{parentName:"p"},"multi-chain")," environment, that means, you can run many ",(0,i.kt)("strong",{parentName:"p"},"parallel chains")," on the IOTA Tangle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each chain has its own state, which can be updated in parallel, on Layer Two (L2)."),(0,i.kt)("li",{parentName:"ul"},"Each chain state is anchored on the IOTA Tangle (UTXO Ledger), on Layer One (L1)."),(0,i.kt)("li",{parentName:"ul"},"Each chain is validated by a set of validators, the committee."),(0,i.kt)("li",{parentName:"ul"},"Each chain can contain multiple smart contracts."),(0,i.kt)("li",{parentName:"ul"},"Each smart contract can exchange assets with other smart contracts on other chains in a trustless and distributed manner.")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(29485).Z},(0,i.kt)("img",{alt:"Multi-Chain environment",src:a(43309).Z}))),(0,i.kt)("p",null,"IOTA Smart Contracts are defined as immutable state machines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"State machine"),": Each smart contract has a state, which is attached to the Tangle. The state contains data such as account balances, input conditions, and consequences over time. Each state update represents a state transition on the Tangle.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Immutable"),": The state and the smart contract program code are both immutable because they are stored on the Tangle. The state can be incrementally updated by attaching new transactions to the Tangle."))),(0,i.kt)("p",null,"The Tangle provides a verifiable audit trail of the state transitions. It allows us to trust that the state transitions are valid and they cannot be corrupted by malicious or erroneous nodes."),(0,i.kt)("h2",{id:"state-of-the-chain"},"State of the Chain"),(0,i.kt)("p",null,"The state of the chain consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balances of the native IOTA digital assets, or colored tokens"),": The chain acts as a custodian for those assets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A collection of arbitrary key/value pairs, the data state"),": Represents use case-specific data stored in the chain by its smart contracts outside of the UTXO ledger.")),(0,i.kt)("p",null,"The state of the chain is append-only (immutable) data structure maintained by the distributed\nconsensus of its validators."),(0,i.kt)("p",null,"The chain also contains an on-ledger backlog of unprocessed requests."),(0,i.kt)("p",null,"The data state is stored outside of the ledger, on the distributed database maintained by validators nodes."),(0,i.kt)("h2",{id:"digital-assets-on-the-chain"},"Digital Assets on the Chain"),(0,i.kt)("p",null,"The native L1 accounts of the IOTA UTXO ledger are represented by addresses, each controlled by the entity holding the corresponding private and public key pair. The L1 account is a collection of UTXOs belonging to the address."),(0,i.kt)("p",null,"Similarly, the chain holds all tokens entrusted to it in one special UTXO, the state output which is always located in the address controlled by the chain.\nIt is similar to how a bank holds all deposits in its vault. This way, the chain (entity controlling the\nstate output) becomes a custodian for the assets owned by its clients, in the same sense the bank\u2019s client owns the money deposited in the bank."),(0,i.kt)("h2",{id:"further-readings"},"Further Readings\u200b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn more about ",(0,i.kt)("a",{parentName:"li",href:"/wasp/guide/core_concepts/states"},"State, Transitions, and State Anchoring"),"."),(0,i.kt)("li",{parentName:"ul"},"Participate on ",(0,i.kt)("a",{parentName:"li",href:"/wasp/guide/chains_and_nodes/testnet"},"the public Testnet"),"."),(0,i.kt)("li",{parentName:"ul"},"Build ",(0,i.kt)("a",{parentName:"li",href:"/wasp/guide/chains_and_nodes/setting-up-a-chain"},"a chain on your committee"),".")))}p.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=l(a),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return a?n.createElement(m,s(s({ref:e},u),{},{components:a})):n.createElement(m,s({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},29485:function(t,e,a){e.Z=a.p+"assets/files/multichain-15b5a968088023b3bba05fe8441a2f20.png"},43309:function(t,e,a){e.Z=a.p+"assets/images/multichain-15b5a968088023b3bba05fe8441a2f20.png"}}]);