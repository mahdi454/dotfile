import{a as y}from"./chunk-LBVWUYQX.js";import{b as s,g as d}from"./chunk-WIWWLEBZ.js";import{d as C,e as P,h as u,i as w}from"./chunk-YT2MPR4E.js";import{f as b,l as process,m,o as g}from"./chunk-GLD6H5Q5.js";m();g();d();var _=b(y());P();w();var o={act:()=>{}},h=async()=>{let{devid:e}=await C.get("devid");(0,_.setDeviceId)(e),o=(0,_.newInstance)({site:"okex",product:"wallet",commonParams:{platform_type:process.env.MONITOR_PLATFORM==u.EXTENSION?"extension":"mini_wallet"}}),o.setApiEndpoint(`${s()}/amplitude`),o.setDWApiEndpoint(`https://${s()}/jsstat/s.gif`)};var A=({hardwarewallet_brand:e,device_name:t}={})=>{o.act({action:"Web3WalletConnectedSuccess_Btm_Connect_Click",anchor:"Web3WalletConnectedSuccess_Btm_Connect_Click",params:{hardwarewallet_brand:e,device_name:t},actionType:"",elementType:"",ampProject:"web3"})};var E=()=>{o.act({action:"Web3WalletRiskWarning_Tutorials_WordLink_Click",anchor:"Web3WalletRiskWarning_Tutorials_WordLink_Click",params:{},actionType:"",elementType:"",ampProject:"okx"})};var V=({transfer_type:e}={})=>{o.act({action:"Web3WalletTransaction_Pop_RiskWarning_Click",anchor:"Web3WalletTransaction_Pop_RiskWarning_Click",params:{transfer_type:e},actionType:"",elementType:"",ampProject:"okx"})};var f=({is_click_risk_link:e,is_click_cancel_link:t,is_click_advanced_link:n,is_click_advanced_continue_link:i,is_click_advanced_cancel_link:a}={})=>{o.act({action:"Confirmationpage_EOAAuthorizationAlert_Popup_View",anchor:"Confirmationpage_EOAAuthorizationAlert_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t,is_click_advanced_link:n,is_click_advanced_continue_link:i,is_click_advanced_cancel_link:a},actionType:"",elementType:"",ampProject:"web3"})};var F=()=>{o.act({action:"ExtensionWalletBatchTransfer_Confirmation_Send_Click",anchor:"ExtensionWalletBatchTransfer_Confirmation_Send_Click",params:{},actionType:"",elementType:"",ampProject:"okx"})};var j=({is_click_risk_link:e,is_click_cancel_link:t}={})=>{o.act({action:"Confirmationpage_EthsignSignatureAlert_Popup_View",anchor:"Confirmationpage_EthsignSignatureAlert_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t},actionType:"",elementType:"",ampProject:"web3"})};var v=({is_click_risk_link:e,is_click_cancel_link:t}={})=>{o.act({action:"Confirmationpage_SOLAccountOwnershipChangeAlert_Popup_View",anchor:"Confirmationpage_SOLAccountOwnershipChangeAlert_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t},actionType:"",elementType:"",ampProject:"web3"})};var M=({is_click_risk_link:e,is_click_cancel_link:t,is_click_advanced_link:n,is_click_advanced_continue_link:i,is_click_advanced_cancel_link:a}={})=>{o.act({action:"Confirmationpage_TronAccountPermissionUpgradeAlert_Popup_View",anchor:"Confirmationpage_TronAccountPermissionUpgradeAlert_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t,is_click_advanced_link:n,is_click_advanced_continue_link:i,is_click_advanced_cancel_link:a},actionType:"",elementType:"",ampProject:"web3"})};var H=({button_name:e,platform:t}={})=>{o.act({action:"WalletBiometrics_Extension_Button_Click",anchor:"WalletBiometrics_Extension_Button_Click",params:{button_name:e,platform:t},actionType:"",elementType:"",ampProject:"web3"})};var L=({is_click_risk_link:e,is_click_cancel_link:t}={})=>{o.act({action:"Confirmationpage_TronNotSameParam_Popup_View",anchor:"Confirmationpage_TronNotSameParam_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t},actionType:"",elementType:"",ampProject:"web3"})};var I=({is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a}={})=>{o.act({action:"Confirmationpage_BasicAlert_Popup_View",anchor:"Confirmationpage_BasicAlert_Popup_View",params:{is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a},actionType:"",elementType:"",ampProject:"web3"})};var O=({is_click_risk_link:e,is_click_cancel_link:t}={})=>{o.act({action:"Confirmationpage_BasicReject_Popup_View",anchor:"Confirmationpage_BasicReject_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t},actionType:"",elementType:"",ampProject:"web3"})};var N=({is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a}={})=>{o.act({action:"Confirmationpage_PurchaseMaliciousToken_Popup_View",anchor:"Confirmationpage_PurchaseMaliciousToken_Popup_View",params:{is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a},actionType:"",elementType:"",ampProject:"web3"})};var U=({is_click_risk_link:e,is_click_cancel_link:t}={})=>{o.act({action:"Confirmationpage_HighAccuracyBlackAddressAlert_Popup_View",anchor:"Confirmationpage_HighAccuracyBlackAddressAlert_Popup_View",params:{is_click_risk_link:e,is_click_cancel_link:t},actionType:"",elementType:"",ampProject:"web3"})};var G=({is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a}={})=>{o.act({action:"Confirmationpage_NormalBlackAddressAlert_Popup_View",anchor:"Confirmationpage_NormalBlackAddressAlert_Popup_View",params:{is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a},actionType:"",elementType:"",ampProject:"web3"})};var z=()=>{o.act({action:"Web3WalletAddWallet_Selecthardwarewallet_Connect_Click",anchor:"Web3WalletAddWallet_Selecthardwarewallet_Connect_Click",params:{},actionType:"",elementType:"",ampProject:"okx"})};var Q=({button_name:e}={})=>{o.act({action:"ExtensionWalletSettings_Full_WalletSetting_Click",anchor:"ExtensionWalletSettings_Full_WalletSetting_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var X=({pop_up:e,action_after_pop_up:t}={})=>{o.act({action:"SendToAddressPopup_Mid_Popup_View",anchor:"SendToAddressPopup_Mid_Popup_View",params:{pop_up:e,action_after_pop_up:t},actionType:"",elementType:"",ampProject:"web3"})};var K=({specific_risk_scenarios:e,interaction_after_popup_window:t}={})=>{o.act({action:"Confirmationpage_AlertPopup_Popup_View",anchor:"Confirmationpage_AlertPopup_Popup_View",params:{specific_risk_scenarios:e,interaction_after_popup_window:t},actionType:"",elementType:"",ampProject:"web3"})};var Z=({network_type:e,checkbox_status:t}={})=>{o.act({action:"NetworkFee_Footer_AnimationCheckBox_Click",anchor:"NetworkFee_Footer_AnimationCheckBox_Click",params:{network_type:e,checkbox_status:t},actionType:"",elementType:"",ampProject:"web3"})};var $=({mode_type:e}={})=>{o.act({action:"WalletSideBar_Button_ModeSwitch_Click",anchor:"WalletSideBar_Button_ModeSwitch_Click",params:{mode_type:e},actionType:"",elementType:"",ampProject:"web3"})};var q=({wallet_address:e,chain_id:t,transaction_type:n,interactive_address:i}={})=>{o.act({action:"GasRebate_Confirmation_Api_Result",anchor:"GasRebate_Confirmation_Api_Result",params:{wallet_address:e,chain_id:t,transaction_type:n,interactive_address:i},actionType:"",elementType:"",ampProject:"okx"})};var J=({resource:e,black_address:t}={})=>{o.act({action:"Web3RiskBlocking_Sheet_Api_View",anchor:"Web3RiskBlocking_Sheet_Api_View",params:{resource:e,black_address:t},actionType:"",elementType:"",ampProject:"okx"})};var Y=({button_name:e}={})=>{o.act({action:"ExtensionDAppSetting_ChooseTypeBtm_RightClickMenu_Click",anchor:"ExtensionDAppSetting_ChooseTypeBtm_RightClickMenu_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var ee=({button_name:e}={})=>{o.act({action:"Cryptomultisender_ChooseType_RightClickMenu_Click",anchor:"Cryptomultisender_ChooseType_RightClickMenu_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var te=()=>{o.act({action:"Cryptomultisender_SelectNetwork_RightClickMenu_Click",anchor:"Cryptomultisender_SelectNetwork_RightClickMenu_Click",params:{},actionType:"",elementType:"",ampProject:"web3"})};var oe=({connect_method:e,dappurl:t,platform_type:n,dappname:i,chain:a,chain_index:r}={})=>{o.act({action:"Web3ExtensionWalletConnect_Full_Button_Click",anchor:"Web3ExtensionWalletConnect_Full_Button_Click",params:{connect_method:e,dappurl:t,platform_type:n,dappname:i,chain:a,chain_index:r},actionType:"",elementType:"",ampProject:"web3"})};var ne=({dapp_url:e}={})=>{o.act({action:"Web3WalletDecrypt_NostrDecrypt_Button_Success",anchor:"Web3WalletDecrypt_NostrDecrypt_Button_Success",params:{dapp_url:e},actionType:"",elementType:"",ampProject:"web3"})};var ie=({dapp_url:e}={})=>{o.act({action:"Web3WalletDappConnection_ConnectDapp_Button_Success",anchor:"Web3WalletDappConnection_ConnectDapp_Button_Success",params:{dapp_url:e},actionType:"",elementType:"",ampProject:"web3"})};var ae=({dapp_url:e}={})=>{o.act({action:"Web3WalletEncrypt_NostrEncrypt_Button_Success",anchor:"Web3WalletEncrypt_NostrEncrypt_Button_Success",params:{dapp_url:e},actionType:"",elementType:"",ampProject:"web3"})};var re=({transaction_type:e,token:t,chain:n,sending_address_count:i,receiving_address_count:a,sending_amount_type:r,interval_setting:c,gas_level:l,transactions:p}={})=>{o.act({action:"Cryptomultisender_Full_Status_Result",anchor:"Cryptomultisender_Full_Status_Result",params:{transaction_type:e,token:t,chain:n,sending_address_count:i,receiving_address_count:a,sending_amount_type:r,interval_setting:c,gas_level:l,transactions:p},actionType:"",elementType:"",ampProject:"web3"})};var ce=({button_name:e}={})=>{o.act({action:"Web3HomePage_Mid_Button_Click",anchor:"Web3HomePage_Mid_Button_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var le=()=>{o.act({action:"Web3AddWalletSuccess_WalletAddress_Button_Click",anchor:"Web3AddWalletSuccess_WalletAddress_Button_Click",params:{},actionType:"",elementType:"",ampProject:"web3"})};var pe=({accelerate_status:e}={})=>{o.act({action:"BTCAccelerate_Pop_Button_Click",anchor:"BTCAccelerate_Pop_Button_Click",params:{accelerate_status:e},actionType:"",elementType:"",ampProject:"web3"})};var _e=({button_name:e}={})=>{o.act({action:"Web3ExtensionCreation_Full_Button_Click",anchor:"Web3ExtensionCreation_Full_Button_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var se=({button_name:e}={})=>{o.act({action:"Web3ExtensionImport_Full_Button_Click",anchor:"Web3ExtensionImport_Full_Button_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var me=()=>{o.act({action:"Web3ExtensionPassword_Btm_Confirm_Click",anchor:"Web3ExtensionPassword_Btm_Confirm_Click",params:{},actionType:"",elementType:"",ampProject:"web3"})};var ge=({button_name:e}={})=>{o.act({action:"Web3ExtensionSetDefault_Btm_Button_Click",anchor:"Web3ExtensionSetDefault_Btm_Button_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};var Ce=({button_appear:e}={})=>{o.act({action:"BTCAccelerate_Pop_FullPage_View",anchor:"BTCAccelerate_Pop_FullPage_View",params:{button_appear:e},actionType:"",elementType:"",ampProject:"web3"})};var ue=({go_to_website:e}={})=>{o.act({action:"Web3ExtensionApproval_Pop_RiskWarning_Click",anchor:"Web3ExtensionApproval_Pop_RiskWarning_Click",params:{go_to_website:e},actionType:"",elementType:"",ampProject:"web3"})};var We=({transfer_type:e}={})=>{o.act({action:"Web3WalletContractInteraction_Btm_Reject_Click",anchor:"Web3WalletContractInteraction_Btm_Reject_Click",params:{transfer_type:e},actionType:"",elementType:"",ampProject:"okx"})};var Te=()=>{o.act({action:"Cryptomultisender_CustomizeSettings_AnimationCheckBox_Click",anchor:"Cryptomultisender_CustomizeSettings_AnimationCheckBox_Click",params:{},actionType:"",elementType:"",ampProject:"web3"})};var xe=({banner_id:e,click_close:t}={})=>{o.act({action:"ExtensionWalletBanner_WalletBanner_Banner_Click",anchor:"ExtensionWalletBanner_WalletBanner_Banner_Click",params:{banner_id:e,click_close:t},actionType:"",elementType:"",ampProject:"web3"})};var ke=({gas_tracker:e,gas_netwok:t}={})=>{o.act({action:"Web3ExtensionToolkit_Full_GasTracker_Click",anchor:"Web3ExtensionToolkit_Full_GasTracker_Click",params:{gas_tracker:e,gas_netwok:t},actionType:"",elementType:"",ampProject:"web3"})};var be=({wallet_id:e,coin_balance:t,nft_balance:n,defi_balance:i,platform_coin_balance:a,main_coin_number_by_networks:r}={})=>{o.act({action:"web_metax_extension_balance_show",anchor:"web_metax_extension_balance_show",params:{wallet_id:e,coin_balance:t,nft_balance:n,defi_balance:i,platform_coin_balance:a,main_coin_number_by_networks:r},actionType:"",elementType:"",ampProject:"web3"})};var Pe=({dapp_url:e,wallet_id:t,wallet_type:n}={})=>{o.act({action:"Web3WalletSign_SignDapp_Button_Success",anchor:"Web3WalletSign_SignDapp_Button_Success",params:{dapp_url:e,wallet_id:t,wallet_type:n},actionType:"",elementType:"",ampProject:"web3"})};var we=({homepage:e,wallet_type:t}={})=>{o.act({action:"Web3ExtensionHomepage_Full_Button_Click",anchor:"Web3ExtensionHomepage_Full_Button_Click",params:{homepage:e,wallet_type:t},actionType:"",elementType:"",ampProject:"web3"})};var de=({hardwarewallet_brand:e}={})=>{o.act({action:"Web3WalletAddWallet_Selecthardwarewallet_Button_Click",anchor:"Web3WalletAddWallet_Selecthardwarewallet_Button_Click",params:{hardwarewallet_brand:e},actionType:"",elementType:"",ampProject:"okx"})};var ye=({token_name:e,protocol:t}={})=>{o.act({action:"Web3Pending_Sheet_ReleaseUTXO_Submit",anchor:"Web3Pending_Sheet_ReleaseUTXO_Submit",params:{token_name:e,protocol:t},actionType:"",elementType:"",ampProject:"web3"})};var Re=({token_name:e,protocol:t,button_name:n}={})=>{o.act({action:"Web3Pending_Btm_Button_Click",anchor:"Web3Pending_Btm_Button_Click",params:{token_name:e,protocol:t,button_name:n},actionType:"",elementType:"",ampProject:"web3"})};var Se=({token_name:e,protocol:t}={})=>{o.act({action:"Web3Pending_Sheet_Rebroadcast_Submit",anchor:"Web3Pending_Sheet_Rebroadcast_Submit",params:{token_name:e,protocol:t},actionType:"",elementType:"",ampProject:"web3"})};var De=({network:e,wallet:t}={})=>{o.act({action:"ExtensionWalletConnect_Diversion_ConnectWallet_Click",anchor:"ExtensionWalletConnect_Diversion_ConnectWallet_Click",params:{network:e,wallet:t},actionType:"",elementType:"",ampProject:"okx"})};var Be=({transaction_type:e,token:t,chain:n,sending_address_count:i,receiving_address_count:a,sending_amount_type:r,interval_setting:c,gas_level:l,transactions:p}={})=>{o.act({action:"Cryptomultisender_Settings_Confirm_Click",anchor:"Cryptomultisender_Settings_Confirm_Click",params:{transaction_type:e,token:t,chain:n,sending_address_count:i,receiving_address_count:a,sending_amount_type:r,interval_setting:c,gas_level:l,transactions:p},actionType:"",elementType:"",ampProject:"web3"})};var he=({is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a}={})=>{o.act({action:"Confirmationpage_ZeroValuePurchaseAlert_Popup_View",anchor:"Confirmationpage_ZeroValuePurchaseAlert_Popup_View",params:{is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a},actionType:"",elementType:"",ampProject:"web3"})};var Ae=({is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a}={})=>{o.act({action:"Confirmationpage_WithdrawalAddressChangeAlert_Popup_View",anchor:"Confirmationpage_WithdrawalAddressChangeAlert_Popup_View",params:{is_click_cancel_link:e,is_click_advanced_link:t,is_click_advanced_continue_link:n,is_click_advanced_cancel_link:i,is_click_risk_link:a},actionType:"",elementType:"",ampProject:"web3"})};var Ee=({is_click_continue_link:e,is_click_cancel_reject_link:t}={})=>{o.act({action:"Confirmationpage_ContractAddressTransferAlert_Popup_View",anchor:"Confirmationpage_ContractAddressTransferAlert_Popup_View",params:{is_click_continue_link:e,is_click_cancel_reject_link:t},actionType:"",elementType:"",ampProject:"web3"})};var Ve=({tools:e}={})=>{o.act({action:"Web3ExtensionToolkit_Full_Tools_Click",anchor:"Web3ExtensionToolkit_Full_Tools_Click",params:{tools:e},actionType:"",elementType:"",ampProject:"web3"})};var fe=({tx_trminal:e,wallet_type:t}={})=>{o.act({action:"Web3WalletAddWallet_Full_Button_Click",anchor:"Web3WalletAddWallet_Full_Button_Click",params:{tx_trminal:e,wallet_type:t},actionType:"",elementType:"",ampProject:"web3"})};var Fe=({tx_source:e,from_addr:t,to_addr:n,main_token_symbol:i,token_symbol:a,contract_address:r,terminal:c,volume_token:l,volume_usdt:p,tx_hash_unique:W,wallet_type:T,device_id:x,chain_id:k}={})=>{o.act({action:"WalletRPC_Confirmation_Button_Click",anchor:"WalletRPC_Confirmation_Button_Click",params:{tx_source:e,from_addr:t,to_addr:n,main_token_symbol:i,token_symbol:a,contract_address:r,terminal:c,volume_token:l,volume_usdt:p,tx_hash_unique:W,wallet_type:T,device_id:x,chain_id:k},actionType:"",elementType:"",ampProject:"web3"})};var je=({all_confirmation:e,wallet_type:t,page_type:n,network:i,approve:a,network_use:r,dapp_url:c,wallet_id:l}={})=>{o.act({action:"AllConfirmation_Full_Button_Click",anchor:"AllConfirmation_Full_Button_Click",params:{all_confirmation:e,wallet_type:t,page_type:n,network:i,approve:a,network_use:r,dapp_url:c,wallet_id:l},actionType:"",elementType:"",ampProject:"web3"})};var ve=({mev:e}={})=>{o.act({action:"SwapConfirmation_Sheet_Button_Click",anchor:"SwapConfirmation_Sheet_Button_Click",params:{mev:e},actionType:"",elementType:"",ampProject:"web3"})};var Me=({button_name:e}={})=>{o.act({action:"Web3ExtensionOnboard_Btm_Button_Click",anchor:"Web3ExtensionOnboard_Btm_Button_Click",params:{button_name:e},actionType:"",elementType:"",ampProject:"web3"})};export{h as a,A as b,E as c,V as d,f as e,F as f,j as g,v as h,M as i,H as j,L as k,I as l,O as m,N as n,U as o,G as p,z as q,Q as r,X as s,K as t,Z as u,$ as v,q as w,J as x,Y as y,ee as z,te as A,oe as B,ne as C,ie as D,ae as E,re as F,ce as G,le as H,pe as I,_e as J,se as K,me as L,ge as M,Ce as N,ue as O,We as P,Te as Q,xe as R,ke as S,be as T,Pe as U,we as V,de as W,ye as X,Re as Y,Se as Z,De as _,Be as $,he as aa,Ae as ba,Ee as ca,Ve as da,fe as ea,Fe as fa,je as ga,ve as ha,Me as ia};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-FF6KJRSH.js.map