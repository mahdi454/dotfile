import{G,f as te,o as re}from"./chunk-VNNHZNYI.js";import{f as Y,h as m,i as b,n as g}from"./chunk-3KENBVE7.js";m();g();m();g();m();g();var U=new Error("Unknown error"),D=new Error("Invalid entropy length"),S=new Error("Invalid mn*monic sentence length"),j=new Error("Invalid checksum"),J=new RangeError("Invalid mn*monic word"),z=new RangeError("Invalid wordlist"),V=new RangeError("Invalid wordlist index"),p=(e,t)=>{if(!e)throw t};function h(e){p(e>=128,D),p(e<=256,D),p(e%32===0,D)}function I(e){p(e>=12,S),p(e<=24,S),p(e%3===0,S)}function w(e){p(e.length===2048,z),p(e.every(t=>typeof t=="string"),z)}function W(e,t){return I(e),t(e*4/3)}async function T(e,t){let s=e.length*8;h(s);let o=s/32,a=await t(e),[l]=a,r=8-o,i=l>>>r<<r>>>0,n=new Uint8Array(e.length+1);return n.set(e,0),n[n.length-1]=i,n}function N(e){let t=(e.length-1)*8;h(t);let s=t/32,o=(t+s)/11,a=new ArrayBuffer(o*4),l=new DataView(a),r=0,i=0,n=0;for(let c of e)if(n+=8,i|=c<<32-n,i>>>=0,n>=11){let u=i>>>21;p(u>=0&&u<=2047,V),l.setUint32(r*4,u,!0),r++,i<<=11,i>>>=0,n-=11}return p(r===o,S),new Uint32Array(a)}function Q(e){let t=e.length;I(t);let s=11,o=e.length*s,a=new ArrayBuffer(Math.ceil(o/8)),l=new DataView(a),r=new DataView(e.buffer),i=e.length,n=0,c=0,u=0,d=8;for(let y=0;y<i;y++){let M=r.getUint32(y*4,!0);p(M<2048,V);let B=s;for(;B>0;){let ee=32-B,f=B>=d?d:B;n|=M>>32-ee-f&(1<<f)-1,c+=f,n<<=d-f,n>>>=0,B-=f,d-=f,d<=0&&(d=8),c%8===0&&(l.setUint8(u,n),u++,n=0)}}return i%8!==0&&l.setUint8(u,n),new Uint8Array(a)}function _(e){I(e.length);let t=Q(e),s=t.slice(0,t.length-1);return t.fill(0),s}async function v(e,t){let s=e.length*8;h(s);let o=await T(e,t),a=N(o);return o.fill(0),a}function q(e,t){w(t);let s=new Set(t),o=new Uint32Array(24),a=0,l="";for(let i=0;i<e.length;i++){let n=e[i],c=n===32,u=i===e.length-1;if(u&&(l+=String.fromCharCode(n)),c||u){p(s.has(l),J);let d=0;for(let y of t){if(l===y)break;d++}o[a++]=d,l=""}else l+=String.fromCharCode(n)}I(a);let r=o.slice(0,a);return o.fill(0),r}async function k(e,t,s){let o=await v(e,s),a=new Uint8Array(o.reduce((r,i)=>r+t[i].length+1,-1)),l=0;for(let r of o){l>0&&(a[l++]=32);let i=t[r];for(let n of i)a[l++]=n.charCodeAt(0)}return o.fill(0),a}var P=Uint8Array.of(109,110,101,109,111,110,105,99);async function E(e,t,s,o,a){let l=await k(e,s,o),r=new Uint8Array(P.length+t.length);r.set(P,0),r.set(t,P.length);let i=await a(l,r,2048,64,"sha512");return r.fill(0),l.fill(0),i}m();g();var A=Y(re());m();g();var Z=["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"];async function H(e){switch(e){case"english":return Z}}function K(e){return t=>new e(t)}function F(e,t){return async s=>{let o=null,a=null,l=null,r=null,i=null;try{a=_(s),l=await T(a,t),r=N(l);let n=s[s.length-1],c=r[r.length-1];if(n!==c)throw j;i=e.fromEntropy(a)}catch(n){n instanceof Error?o=n:(console.error(n),o=U)}finally{if(a?.fill(0),l?.fill(0),r?.fill(0),o)throw o;return i}}}function O(e,t){return async s=>{let o=null,a=null,l=null;try{a=q(s,t),l=await e.fromIndexes(a)}catch(r){r instanceof Error?o=r:(console.error(r),o=U)}finally{if(a?.fill(0),o)throw o;return l}}}function X(e,t){return s=>{let o=null,a=null,l=null;try{a=W(s,t),l=e.fromEntropy(a)}catch(r){r instanceof Error?o=r:(console.error(r),o=U)}finally{if(a?.fill(0),o)throw o;return l}}}var x=class{static async webCrypto(t){let s=typeof t=="string"?await H(t):t;w(s);let o=r=>self.crypto.getRandomValues(new Uint8Array(r)),a=async r=>new Uint8Array(await self.crypto.subtle.digest("SHA-256",r)),l=async(r,i,n,c,u)=>{let d="SHA-"+u.substring(3),y=await self.crypto.subtle.importKey("raw",r,"PBKDF2",!1,["deriveBits"]),M=await self.crypto.subtle.deriveBits({name:"PBKDF2",salt:i,iterations:n,hash:d},y,c*8);return new Uint8Array(M)};return class C{constructor(i){this.deriveSeed=(i=new Uint8Array)=>E(this.#e,i,s,a,l);this.getEntropy=()=>this.#e.slice();this.getIndexes=()=>v(this.#e,a);this.getMnemonic=()=>k(this.#e,s,a);this.getSentenceLength=()=>{let i=this.#e.length*8,n=i/32;return(i+n)/11};h(i.length*8),this.#e=i.slice()}static{this.fromEntropy=K(C)}static{this.fromIndexes=F(C,a)}static{this.fromMnemonic=O(C,s)}static{this.fromSentenceLength=X(C,o)}static{this.wordlist=s}#e}}static async nodeCrypto(t){let s=typeof t=="string"?await H(t):t;w(s);let o=r=>new Uint8Array((0,A.randomBytes)(r).buffer),a=r=>new Uint8Array((0,A.createHash)("sha256").update(r).digest().buffer),l=(...r)=>new Promise((i,n)=>{(0,A.pbkdf2)(...r,(c,u)=>{if(c)return n(c);i(new Uint8Array(u.buffer))})});return class L{constructor(i){this.deriveSeed=(i=new Uint8Array)=>E(this.#e,i,s,a,l);this.getEntropy=()=>this.#e.slice();this.getIndexes=()=>v(this.#e,a);this.getMnemonic=()=>k(this.#e,s,a);this.getSentenceLength=()=>{let i=this.#e.length*8,n=i/32;return(i+n)/11};h(i.length*8),this.#e=i.slice()}static{this.fromEntropy=K(L)}static{this.fromIndexes=F(L,a)}static{this.fromMnemonic=O(L,s)}static{this.fromSentenceLength=X(L,o)}static{this.wordlist=s}#e}}static async customCrypto(t,s){let o=typeof t=="string"?await H(t):t;w(o);let{random:a,sha256:l,pbkdf2:r}=s;return class R{constructor(n){this.deriveSeed=(n=new Uint8Array)=>E(this.#e,n,o,l,r);this.getEntropy=()=>this.#e.slice();this.getIndexes=()=>v(this.#e,l);this.getMnemonic=()=>k(this.#e,o,l);this.getSentenceLength=()=>{let n=this.#e.length*8,c=n/32;return(n+c)/11};h(n.length*8),this.#e=n.slice()}static{this.fromEntropy=K(R)}static{this.fromIndexes=F(R,l)}static{this.fromMnemonic=O(R,o)}static{this.fromSentenceLength=X(R,a)}static{this.wordlist=o}#e}}};var $=Y(te()),ke=(()=>{let e=null;return async()=>(e||(G(b.CUSTOM_CRYPTO_BIP39)?e=await x.customCrypto("english",{random(t){return self.crypto.getRandomValues(new Uint8Array(t))},async sha256(t){return new Uint8Array(await self.crypto.subtle.digest("SHA-256",t))},pbkdf2(t,s,o,a,l){return new Promise((r,i)=>{(0,$.pbkdf2)(t,s,o,a,l,(n,c)=>{n?i(n):r(c)})})}}):e=await x.webCrypto("english")),e)})();export{ke as a};
//# sourceMappingURL=chunk-J3Y4UZBD.js.map