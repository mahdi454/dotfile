import{X as an}from"./chunk-VPDRXROE.js";import{a as Ue,b as nn}from"./chunk-CYOQISC6.js";import{c as Ze,g as tn}from"./chunk-WIWWLEBZ.js";import{M as en,g as Be}from"./chunk-RIOWPXBZ.js";import{a as Qt}from"./chunk-O337TVCZ.js";import{c as G,f as ke,l as process,m as b,o as k}from"./chunk-GLD6H5Q5.js";var re=G(B=>{"use strict";b();k();var rn=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function on(t,n){return Object.prototype.hasOwnProperty.call(t,n)}B.assign=function(t){for(var n=Array.prototype.slice.call(arguments,1);n.length;){var e=n.shift();if(!!e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(var a in e)on(e,a)&&(t[a]=e[a])}}return t};B.shrinkBuf=function(t,n){return t.length===n?t:t.subarray?t.subarray(0,n):(t.length=n,t)};var sn={arraySet:function(t,n,e,a,f){if(n.subarray&&t.subarray){t.set(n.subarray(e,e+a),f);return}for(var i=0;i<a;i++)t[f+i]=n[e+i]},flattenChunks:function(t){var n,e,a,f,i,l;for(a=0,n=0,e=t.length;n<e;n++)a+=t[n].length;for(l=new Uint8Array(a),f=0,n=0,e=t.length;n<e;n++)i=t[n],l.set(i,f),f+=i.length;return l}},fn={arraySet:function(t,n,e,a,f){for(var i=0;i<a;i++)t[f+i]=n[e+i]},flattenChunks:function(t){return[].concat.apply([],t)}};B.setTyped=function(t){t?(B.Buf8=Uint8Array,B.Buf16=Uint16Array,B.Buf32=Int32Array,B.assign(B,sn)):(B.Buf8=Array,B.Buf16=Array,B.Buf32=Array,B.assign(B,fn))};B.setTyped(rn)});var He=G((jn,Fe)=>{"use strict";b();k();function ln(t,n,e,a){for(var f=t&65535|0,i=t>>>16&65535|0,l=0;e!==0;){l=e>2e3?2e3:e,e-=l;do f=f+n[a++]|0,i=i+f|0;while(--l);f%=65521,i%=65521}return f|i<<16|0}Fe.exports=ln});var We=G(($n,Ge)=>{"use strict";b();k();function cn(){for(var t,n=[],e=0;e<256;e++){t=e;for(var a=0;a<8;a++)t=t&1?3988292384^t>>>1:t>>>1;n[e]=t}return n}var dn=cn();function un(t,n,e,a){var f=dn,i=a+e;t^=-1;for(var l=a;l<i;l++)t=t>>>8^f[(t^n[l])&255];return t^-1}Ge.exports=un});var Ke=G((Qn,Me)=>{"use strict";b();k();var ce=30,hn=12;Me.exports=function(n,e){var a,f,i,l,s,v,o,r,C,h,c,m,g,p,_,D,R,S,d,N,E,w,T,I,x;a=n.state,f=n.next_in,I=n.input,i=f+(n.avail_in-5),l=n.next_out,x=n.output,s=l-(e-n.avail_out),v=l+(n.avail_out-257),o=a.dmax,r=a.wsize,C=a.whave,h=a.wnext,c=a.window,m=a.hold,g=a.bits,p=a.lencode,_=a.distcode,D=(1<<a.lenbits)-1,R=(1<<a.distbits)-1;e:do{g<15&&(m+=I[f++]<<g,g+=8,m+=I[f++]<<g,g+=8),S=p[m&D];t:for(;;){if(d=S>>>24,m>>>=d,g-=d,d=S>>>16&255,d===0)x[l++]=S&65535;else if(d&16){N=S&65535,d&=15,d&&(g<d&&(m+=I[f++]<<g,g+=8),N+=m&(1<<d)-1,m>>>=d,g-=d),g<15&&(m+=I[f++]<<g,g+=8,m+=I[f++]<<g,g+=8),S=_[m&R];n:for(;;){if(d=S>>>24,m>>>=d,g-=d,d=S>>>16&255,d&16){if(E=S&65535,d&=15,g<d&&(m+=I[f++]<<g,g+=8,g<d&&(m+=I[f++]<<g,g+=8)),E+=m&(1<<d)-1,E>o){n.msg="invalid distance too far back",a.mode=ce;break e}if(m>>>=d,g-=d,d=l-s,E>d){if(d=E-d,d>C&&a.sane){n.msg="invalid distance too far back",a.mode=ce;break e}if(w=0,T=c,h===0){if(w+=r-d,d<N){N-=d;do x[l++]=c[w++];while(--d);w=l-E,T=x}}else if(h<d){if(w+=r+h-d,d-=h,d<N){N-=d;do x[l++]=c[w++];while(--d);if(w=0,h<N){d=h,N-=d;do x[l++]=c[w++];while(--d);w=l-E,T=x}}}else if(w+=h-d,d<N){N-=d;do x[l++]=c[w++];while(--d);w=l-E,T=x}for(;N>2;)x[l++]=T[w++],x[l++]=T[w++],x[l++]=T[w++],N-=3;N&&(x[l++]=T[w++],N>1&&(x[l++]=T[w++]))}else{w=l-E;do x[l++]=x[w++],x[l++]=x[w++],x[l++]=x[w++],N-=3;while(N>2);N&&(x[l++]=x[w++],N>1&&(x[l++]=x[w++]))}}else if((d&64)===0){S=_[(S&65535)+(m&(1<<d)-1)];continue n}else{n.msg="invalid distance code",a.mode=ce;break e}break}}else if((d&64)===0){S=p[(S&65535)+(m&(1<<d)-1)];continue t}else if(d&32){a.mode=hn;break e}else{n.msg="invalid literal/length code",a.mode=ce;break e}break}}while(f<i&&l<v);N=g>>3,f-=N,g-=N<<3,m&=(1<<g)-1,n.next_in=f,n.next_out=l,n.avail_in=f<i?5+(i-f):5-(f-i),n.avail_out=l<v?257+(v-l):257-(l-v),a.hold=m,a.bits=g}});var Ve=G((ni,$e)=>{"use strict";b();k();var ze=re(),ee=15,Xe=852,je=592,Ye=0,me=1,Je=2,vn=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],_n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],gn=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],wn=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];$e.exports=function(n,e,a,f,i,l,s,v){var o=v.bits,r=0,C=0,h=0,c=0,m=0,g=0,p=0,_=0,D=0,R=0,S,d,N,E,w,T=null,I=0,x,U=new ze.Buf16(ee+1),u=new ze.Buf16(ee+1),P=null,H=0,J,$,Q;for(r=0;r<=ee;r++)U[r]=0;for(C=0;C<f;C++)U[e[a+C]]++;for(m=o,c=ee;c>=1&&U[c]===0;c--);if(m>c&&(m=c),c===0)return i[l++]=1<<24|64<<16|0,i[l++]=1<<24|64<<16|0,v.bits=1,0;for(h=1;h<c&&U[h]===0;h++);for(m<h&&(m=h),_=1,r=1;r<=ee;r++)if(_<<=1,_-=U[r],_<0)return-1;if(_>0&&(n===Ye||c!==1))return-1;for(u[1]=0,r=1;r<ee;r++)u[r+1]=u[r]+U[r];for(C=0;C<f;C++)e[a+C]!==0&&(s[u[e[a+C]]++]=C);if(n===Ye?(T=P=s,x=19):n===me?(T=vn,I-=257,P=_n,H-=257,x=256):(T=gn,P=wn,x=-1),R=0,C=0,r=h,w=l,g=m,p=0,N=-1,D=1<<m,E=D-1,n===me&&D>Xe||n===Je&&D>je)return 1;for(;;){J=r-p,s[C]<x?($=0,Q=s[C]):s[C]>x?($=P[H+s[C]],Q=T[I+s[C]]):($=32+64,Q=0),S=1<<r-p,d=1<<g,h=d;do d-=S,i[w+(R>>p)+d]=J<<24|$<<16|Q|0;while(d!==0);for(S=1<<r-1;R&S;)S>>=1;if(S!==0?(R&=S-1,R+=S):R=0,C++,--U[r]===0){if(r===c)break;r=e[a+s[C]]}if(r>m&&(R&E)!==N){for(p===0&&(p=m),w+=h,g=r-p,_=1<<g;g+p<c&&(_-=U[g+p],!(_<=0));)g++,_<<=1;if(D+=1<<g,n===me&&D>Xe||n===Je&&D>je)return 1;N=R&E,i[N]=m<<24|g<<16|w-l|0}}return R!==0&&(i[w+R]=r-p<<24|64<<16|0),v.bits=m,0}});var It=G(M=>{"use strict";b();k();var F=re(),Ne=He(),K=We(),xn=Ke(),oe=Ve(),bn=0,St=1,Et=2,qe=4,kn=5,de=6,V=0,mn=1,pn=2,W=-2,Ct=-3,Re=-4,Sn=-5,Qe=8,Tt=1,et=2,tt=3,nt=4,it=5,at=6,rt=7,ot=8,st=9,ft=10,ve=11,z=12,pe=13,lt=14,Se=15,ct=16,dt=17,ut=18,ht=19,ue=20,he=21,vt=22,_t=23,gt=24,wt=25,xt=26,Ee=27,bt=28,kt=29,y=30,Oe=31,En=32,Cn=852,Tn=592,Nn=15,Rn=Nn;function mt(t){return(t>>>24&255)+(t>>>8&65280)+((t&65280)<<8)+((t&255)<<24)}function On(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new F.Buf16(320),this.work=new F.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Nt(t){var n;return!t||!t.state?W:(n=t.state,t.total_in=t.total_out=n.total=0,t.msg="",n.wrap&&(t.adler=n.wrap&1),n.mode=Tt,n.last=0,n.havedict=0,n.dmax=32768,n.head=null,n.hold=0,n.bits=0,n.lencode=n.lendyn=new F.Buf32(Cn),n.distcode=n.distdyn=new F.Buf32(Tn),n.sane=1,n.back=-1,V)}function Rt(t){var n;return!t||!t.state?W:(n=t.state,n.wsize=0,n.whave=0,n.wnext=0,Nt(t))}function Ot(t,n){var e,a;return!t||!t.state||(a=t.state,n<0?(e=0,n=-n):(e=(n>>4)+1,n<48&&(n&=15)),n&&(n<8||n>15))?W:(a.window!==null&&a.wbits!==n&&(a.window=null),a.wrap=e,a.wbits=n,Rt(t))}function Dt(t,n){var e,a;return t?(a=new On,t.state=a,a.window=null,e=Ot(t,n),e!==V&&(t.state=null),e):W}function Dn(t){return Dt(t,Rn)}var pt=!0,Ce,Te;function yn(t){if(pt){var n;for(Ce=new F.Buf32(512),Te=new F.Buf32(32),n=0;n<144;)t.lens[n++]=8;for(;n<256;)t.lens[n++]=9;for(;n<280;)t.lens[n++]=7;for(;n<288;)t.lens[n++]=8;for(oe(St,t.lens,0,288,Ce,0,t.work,{bits:9}),n=0;n<32;)t.lens[n++]=5;oe(Et,t.lens,0,32,Te,0,t.work,{bits:5}),pt=!1}t.lencode=Ce,t.lenbits=9,t.distcode=Te,t.distbits=5}function yt(t,n,e,a){var f,i=t.state;return i.window===null&&(i.wsize=1<<i.wbits,i.wnext=0,i.whave=0,i.window=new F.Buf8(i.wsize)),a>=i.wsize?(F.arraySet(i.window,n,e-i.wsize,i.wsize,0),i.wnext=0,i.whave=i.wsize):(f=i.wsize-i.wnext,f>a&&(f=a),F.arraySet(i.window,n,e-a,f,i.wnext),a-=f,a?(F.arraySet(i.window,n,e-a,a,0),i.wnext=a,i.whave=i.wsize):(i.wnext+=f,i.wnext===i.wsize&&(i.wnext=0),i.whave<i.wsize&&(i.whave+=f))),0}function In(t,n){var e,a,f,i,l,s,v,o,r,C,h,c,m,g,p=0,_,D,R,S,d,N,E,w,T=new F.Buf8(4),I,x,U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&t.avail_in!==0)return W;e=t.state,e.mode===z&&(e.mode=pe),l=t.next_out,f=t.output,v=t.avail_out,i=t.next_in,a=t.input,s=t.avail_in,o=e.hold,r=e.bits,C=s,h=v,w=V;e:for(;;)switch(e.mode){case Tt:if(e.wrap===0){e.mode=pe;break}for(;r<16;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(e.wrap&2&&o===35615){e.check=0,T[0]=o&255,T[1]=o>>>8&255,e.check=K(e.check,T,2,0),o=0,r=0,e.mode=et;break}if(e.flags=0,e.head&&(e.head.done=!1),!(e.wrap&1)||(((o&255)<<8)+(o>>8))%31){t.msg="incorrect header check",e.mode=y;break}if((o&15)!==Qe){t.msg="unknown compression method",e.mode=y;break}if(o>>>=4,r-=4,E=(o&15)+8,e.wbits===0)e.wbits=E;else if(E>e.wbits){t.msg="invalid window size",e.mode=y;break}e.dmax=1<<E,t.adler=e.check=1,e.mode=o&512?ft:z,o=0,r=0;break;case et:for(;r<16;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(e.flags=o,(e.flags&255)!==Qe){t.msg="unknown compression method",e.mode=y;break}if(e.flags&57344){t.msg="unknown header flags set",e.mode=y;break}e.head&&(e.head.text=o>>8&1),e.flags&512&&(T[0]=o&255,T[1]=o>>>8&255,e.check=K(e.check,T,2,0)),o=0,r=0,e.mode=tt;case tt:for(;r<32;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}e.head&&(e.head.time=o),e.flags&512&&(T[0]=o&255,T[1]=o>>>8&255,T[2]=o>>>16&255,T[3]=o>>>24&255,e.check=K(e.check,T,4,0)),o=0,r=0,e.mode=nt;case nt:for(;r<16;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}e.head&&(e.head.xflags=o&255,e.head.os=o>>8),e.flags&512&&(T[0]=o&255,T[1]=o>>>8&255,e.check=K(e.check,T,2,0)),o=0,r=0,e.mode=it;case it:if(e.flags&1024){for(;r<16;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}e.length=o,e.head&&(e.head.extra_len=o),e.flags&512&&(T[0]=o&255,T[1]=o>>>8&255,e.check=K(e.check,T,2,0)),o=0,r=0}else e.head&&(e.head.extra=null);e.mode=at;case at:if(e.flags&1024&&(c=e.length,c>s&&(c=s),c&&(e.head&&(E=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Array(e.head.extra_len)),F.arraySet(e.head.extra,a,i,c,E)),e.flags&512&&(e.check=K(e.check,a,c,i)),s-=c,i+=c,e.length-=c),e.length))break e;e.length=0,e.mode=rt;case rt:if(e.flags&2048){if(s===0)break e;c=0;do E=a[i+c++],e.head&&E&&e.length<65536&&(e.head.name+=String.fromCharCode(E));while(E&&c<s);if(e.flags&512&&(e.check=K(e.check,a,c,i)),s-=c,i+=c,E)break e}else e.head&&(e.head.name=null);e.length=0,e.mode=ot;case ot:if(e.flags&4096){if(s===0)break e;c=0;do E=a[i+c++],e.head&&E&&e.length<65536&&(e.head.comment+=String.fromCharCode(E));while(E&&c<s);if(e.flags&512&&(e.check=K(e.check,a,c,i)),s-=c,i+=c,E)break e}else e.head&&(e.head.comment=null);e.mode=st;case st:if(e.flags&512){for(;r<16;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(o!==(e.check&65535)){t.msg="header crc mismatch",e.mode=y;break}o=0,r=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),t.adler=e.check=0,e.mode=z;break;case ft:for(;r<32;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}t.adler=e.check=mt(o),o=0,r=0,e.mode=ve;case ve:if(e.havedict===0)return t.next_out=l,t.avail_out=v,t.next_in=i,t.avail_in=s,e.hold=o,e.bits=r,pn;t.adler=e.check=1,e.mode=z;case z:if(n===kn||n===de)break e;case pe:if(e.last){o>>>=r&7,r-=r&7,e.mode=Ee;break}for(;r<3;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}switch(e.last=o&1,o>>>=1,r-=1,o&3){case 0:e.mode=lt;break;case 1:if(yn(e),e.mode=ue,n===de){o>>>=2,r-=2;break e}break;case 2:e.mode=dt;break;case 3:t.msg="invalid block type",e.mode=y}o>>>=2,r-=2;break;case lt:for(o>>>=r&7,r-=r&7;r<32;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if((o&65535)!==(o>>>16^65535)){t.msg="invalid stored block lengths",e.mode=y;break}if(e.length=o&65535,o=0,r=0,e.mode=Se,n===de)break e;case Se:e.mode=ct;case ct:if(c=e.length,c){if(c>s&&(c=s),c>v&&(c=v),c===0)break e;F.arraySet(f,a,i,c,l),s-=c,i+=c,v-=c,l+=c,e.length-=c;break}e.mode=z;break;case dt:for(;r<14;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(e.nlen=(o&31)+257,o>>>=5,r-=5,e.ndist=(o&31)+1,o>>>=5,r-=5,e.ncode=(o&15)+4,o>>>=4,r-=4,e.nlen>286||e.ndist>30){t.msg="too many length or distance symbols",e.mode=y;break}e.have=0,e.mode=ut;case ut:for(;e.have<e.ncode;){for(;r<3;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}e.lens[U[e.have++]]=o&7,o>>>=3,r-=3}for(;e.have<19;)e.lens[U[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,I={bits:e.lenbits},w=oe(bn,e.lens,0,19,e.lencode,0,e.work,I),e.lenbits=I.bits,w){t.msg="invalid code lengths set",e.mode=y;break}e.have=0,e.mode=ht;case ht:for(;e.have<e.nlen+e.ndist;){for(;p=e.lencode[o&(1<<e.lenbits)-1],_=p>>>24,D=p>>>16&255,R=p&65535,!(_<=r);){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(R<16)o>>>=_,r-=_,e.lens[e.have++]=R;else{if(R===16){for(x=_+2;r<x;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(o>>>=_,r-=_,e.have===0){t.msg="invalid bit length repeat",e.mode=y;break}E=e.lens[e.have-1],c=3+(o&3),o>>>=2,r-=2}else if(R===17){for(x=_+3;r<x;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}o>>>=_,r-=_,E=0,c=3+(o&7),o>>>=3,r-=3}else{for(x=_+7;r<x;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}o>>>=_,r-=_,E=0,c=11+(o&127),o>>>=7,r-=7}if(e.have+c>e.nlen+e.ndist){t.msg="invalid bit length repeat",e.mode=y;break}for(;c--;)e.lens[e.have++]=E}}if(e.mode===y)break;if(e.lens[256]===0){t.msg="invalid code -- missing end-of-block",e.mode=y;break}if(e.lenbits=9,I={bits:e.lenbits},w=oe(St,e.lens,0,e.nlen,e.lencode,0,e.work,I),e.lenbits=I.bits,w){t.msg="invalid literal/lengths set",e.mode=y;break}if(e.distbits=6,e.distcode=e.distdyn,I={bits:e.distbits},w=oe(Et,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,I),e.distbits=I.bits,w){t.msg="invalid distances set",e.mode=y;break}if(e.mode=ue,n===de)break e;case ue:e.mode=he;case he:if(s>=6&&v>=258){t.next_out=l,t.avail_out=v,t.next_in=i,t.avail_in=s,e.hold=o,e.bits=r,xn(t,h),l=t.next_out,f=t.output,v=t.avail_out,i=t.next_in,a=t.input,s=t.avail_in,o=e.hold,r=e.bits,e.mode===z&&(e.back=-1);break}for(e.back=0;p=e.lencode[o&(1<<e.lenbits)-1],_=p>>>24,D=p>>>16&255,R=p&65535,!(_<=r);){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(D&&(D&240)===0){for(S=_,d=D,N=R;p=e.lencode[N+((o&(1<<S+d)-1)>>S)],_=p>>>24,D=p>>>16&255,R=p&65535,!(S+_<=r);){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}o>>>=S,r-=S,e.back+=S}if(o>>>=_,r-=_,e.back+=_,e.length=R,D===0){e.mode=xt;break}if(D&32){e.back=-1,e.mode=z;break}if(D&64){t.msg="invalid literal/length code",e.mode=y;break}e.extra=D&15,e.mode=vt;case vt:if(e.extra){for(x=e.extra;r<x;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}e.length+=o&(1<<e.extra)-1,o>>>=e.extra,r-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=_t;case _t:for(;p=e.distcode[o&(1<<e.distbits)-1],_=p>>>24,D=p>>>16&255,R=p&65535,!(_<=r);){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if((D&240)===0){for(S=_,d=D,N=R;p=e.distcode[N+((o&(1<<S+d)-1)>>S)],_=p>>>24,D=p>>>16&255,R=p&65535,!(S+_<=r);){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}o>>>=S,r-=S,e.back+=S}if(o>>>=_,r-=_,e.back+=_,D&64){t.msg="invalid distance code",e.mode=y;break}e.offset=R,e.extra=D&15,e.mode=gt;case gt:if(e.extra){for(x=e.extra;r<x;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}e.offset+=o&(1<<e.extra)-1,o>>>=e.extra,r-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){t.msg="invalid distance too far back",e.mode=y;break}e.mode=wt;case wt:if(v===0)break e;if(c=h-v,e.offset>c){if(c=e.offset-c,c>e.whave&&e.sane){t.msg="invalid distance too far back",e.mode=y;break}c>e.wnext?(c-=e.wnext,m=e.wsize-c):m=e.wnext-c,c>e.length&&(c=e.length),g=e.window}else g=f,m=l-e.offset,c=e.length;c>v&&(c=v),v-=c,e.length-=c;do f[l++]=g[m++];while(--c);e.length===0&&(e.mode=he);break;case xt:if(v===0)break e;f[l++]=e.length,v--,e.mode=he;break;case Ee:if(e.wrap){for(;r<32;){if(s===0)break e;s--,o|=a[i++]<<r,r+=8}if(h-=v,t.total_out+=h,e.total+=h,h&&(t.adler=e.check=e.flags?K(e.check,f,h,l-h):Ne(e.check,f,h,l-h)),h=v,(e.flags?o:mt(o))!==e.check){t.msg="incorrect data check",e.mode=y;break}o=0,r=0}e.mode=bt;case bt:if(e.wrap&&e.flags){for(;r<32;){if(s===0)break e;s--,o+=a[i++]<<r,r+=8}if(o!==(e.total&4294967295)){t.msg="incorrect length check",e.mode=y;break}o=0,r=0}e.mode=kt;case kt:w=mn;break e;case y:w=Ct;break e;case Oe:return Re;case En:default:return W}return t.next_out=l,t.avail_out=v,t.next_in=i,t.avail_in=s,e.hold=o,e.bits=r,(e.wsize||h!==t.avail_out&&e.mode<y&&(e.mode<Ee||n!==qe))&&yt(t,t.output,t.next_out,h-t.avail_out)?(e.mode=Oe,Re):(C-=t.avail_in,h-=t.avail_out,t.total_in+=C,t.total_out+=h,e.total+=h,e.wrap&&h&&(t.adler=e.check=e.flags?K(e.check,f,h,t.next_out-h):Ne(e.check,f,h,t.next_out-h)),t.data_type=e.bits+(e.last?64:0)+(e.mode===z?128:0)+(e.mode===ue||e.mode===Se?256:0),(C===0&&h===0||n===qe)&&w===V&&(w=Sn),w)}function An(t){if(!t||!t.state)return W;var n=t.state;return n.window&&(n.window=null),t.state=null,V}function Ln(t,n){var e;return!t||!t.state||(e=t.state,(e.wrap&2)===0)?W:(e.head=n,n.done=!1,V)}function Pn(t,n){var e=n.length,a,f,i;return!t||!t.state||(a=t.state,a.wrap!==0&&a.mode!==ve)?W:a.mode===ve&&(f=1,f=Ne(f,n,e,0),f!==a.check)?Ct:(i=yt(t,n,e,e),i?(a.mode=Oe,Re):(a.havedict=1,V))}M.inflateReset=Rt;M.inflateReset2=Ot;M.inflateResetKeep=Nt;M.inflateInit=Dn;M.inflateInit2=Dt;M.inflate=In;M.inflateEnd=An;M.inflateGetHeader=Ln;M.inflateSetDictionary=Pn;M.inflateInfo="pako inflate (from Nodeca project)"});var Bt=G(te=>{"use strict";b();k();var _e=re(),At=!0,Lt=!0;try{String.fromCharCode.apply(null,[0])}catch{At=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Lt=!1}var se=new _e.Buf8(256);for(X=0;X<256;X++)se[X]=X>=252?6:X>=248?5:X>=240?4:X>=224?3:X>=192?2:1;var X;se[254]=se[254]=1;te.string2buf=function(t){var n,e,a,f,i,l=t.length,s=0;for(f=0;f<l;f++)e=t.charCodeAt(f),(e&64512)===55296&&f+1<l&&(a=t.charCodeAt(f+1),(a&64512)===56320&&(e=65536+(e-55296<<10)+(a-56320),f++)),s+=e<128?1:e<2048?2:e<65536?3:4;for(n=new _e.Buf8(s),i=0,f=0;i<s;f++)e=t.charCodeAt(f),(e&64512)===55296&&f+1<l&&(a=t.charCodeAt(f+1),(a&64512)===56320&&(e=65536+(e-55296<<10)+(a-56320),f++)),e<128?n[i++]=e:e<2048?(n[i++]=192|e>>>6,n[i++]=128|e&63):e<65536?(n[i++]=224|e>>>12,n[i++]=128|e>>>6&63,n[i++]=128|e&63):(n[i++]=240|e>>>18,n[i++]=128|e>>>12&63,n[i++]=128|e>>>6&63,n[i++]=128|e&63);return n};function Pt(t,n){if(n<65534&&(t.subarray&&Lt||!t.subarray&&At))return String.fromCharCode.apply(null,_e.shrinkBuf(t,n));for(var e="",a=0;a<n;a++)e+=String.fromCharCode(t[a]);return e}te.buf2binstring=function(t){return Pt(t,t.length)};te.binstring2buf=function(t){for(var n=new _e.Buf8(t.length),e=0,a=n.length;e<a;e++)n[e]=t.charCodeAt(e);return n};te.buf2string=function(t,n){var e,a,f,i,l=n||t.length,s=new Array(l*2);for(a=0,e=0;e<l;){if(f=t[e++],f<128){s[a++]=f;continue}if(i=se[f],i>4){s[a++]=65533,e+=i-1;continue}for(f&=i===2?31:i===3?15:7;i>1&&e<l;)f=f<<6|t[e++]&63,i--;if(i>1){s[a++]=65533;continue}f<65536?s[a++]=f:(f-=65536,s[a++]=55296|f>>10&1023,s[a++]=56320|f&1023)}return Pt(s,a)};te.utf8border=function(t,n){var e;for(n=n||t.length,n>t.length&&(n=t.length),e=n-1;e>=0&&(t[e]&192)===128;)e--;return e<0||e===0?n:e+se[t[e]]>n?e:n}});var Ut=G((di,Zt)=>{"use strict";b();k();Zt.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}});var Ht=G((vi,Ft)=>{"use strict";b();k();Ft.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}});var Wt=G((wi,Gt)=>{"use strict";b();k();function Bn(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}Gt.exports=Bn});var Kt=G((ki,Mt)=>{"use strict";b();k();function Zn(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}Mt.exports=Zn});var Xt=G(le=>{"use strict";b();k();var ne=It(),fe=re(),ge=Bt(),L=Ut(),De=Ht(),Un=Wt(),Fn=Kt(),zt=Object.prototype.toString;function q(t){if(!(this instanceof q))return new q(t);this.options=fe.assign({chunkSize:16384,windowBits:0,to:""},t||{});var n=this.options;n.raw&&n.windowBits>=0&&n.windowBits<16&&(n.windowBits=-n.windowBits,n.windowBits===0&&(n.windowBits=-15)),n.windowBits>=0&&n.windowBits<16&&!(t&&t.windowBits)&&(n.windowBits+=32),n.windowBits>15&&n.windowBits<48&&(n.windowBits&15)===0&&(n.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Un,this.strm.avail_out=0;var e=ne.inflateInit2(this.strm,n.windowBits);if(e!==L.Z_OK)throw new Error(De[e]);if(this.header=new Fn,ne.inflateGetHeader(this.strm,this.header),n.dictionary&&(typeof n.dictionary=="string"?n.dictionary=ge.string2buf(n.dictionary):zt.call(n.dictionary)==="[object ArrayBuffer]"&&(n.dictionary=new Uint8Array(n.dictionary)),n.raw&&(e=ne.inflateSetDictionary(this.strm,n.dictionary),e!==L.Z_OK)))throw new Error(De[e])}q.prototype.push=function(t,n){var e=this.strm,a=this.options.chunkSize,f=this.options.dictionary,i,l,s,v,o,r=!1;if(this.ended)return!1;l=n===~~n?n:n===!0?L.Z_FINISH:L.Z_NO_FLUSH,typeof t=="string"?e.input=ge.binstring2buf(t):zt.call(t)==="[object ArrayBuffer]"?e.input=new Uint8Array(t):e.input=t,e.next_in=0,e.avail_in=e.input.length;do{if(e.avail_out===0&&(e.output=new fe.Buf8(a),e.next_out=0,e.avail_out=a),i=ne.inflate(e,L.Z_NO_FLUSH),i===L.Z_NEED_DICT&&f&&(i=ne.inflateSetDictionary(this.strm,f)),i===L.Z_BUF_ERROR&&r===!0&&(i=L.Z_OK,r=!1),i!==L.Z_STREAM_END&&i!==L.Z_OK)return this.onEnd(i),this.ended=!0,!1;e.next_out&&(e.avail_out===0||i===L.Z_STREAM_END||e.avail_in===0&&(l===L.Z_FINISH||l===L.Z_SYNC_FLUSH))&&(this.options.to==="string"?(s=ge.utf8border(e.output,e.next_out),v=e.next_out-s,o=ge.buf2string(e.output,s),e.next_out=v,e.avail_out=a-v,v&&fe.arraySet(e.output,e.output,s,v,0),this.onData(o)):this.onData(fe.shrinkBuf(e.output,e.next_out))),e.avail_in===0&&e.avail_out===0&&(r=!0)}while((e.avail_in>0||e.avail_out===0)&&i!==L.Z_STREAM_END);return i===L.Z_STREAM_END&&(l=L.Z_FINISH),l===L.Z_FINISH?(i=ne.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===L.Z_OK):(l===L.Z_SYNC_FLUSH&&(this.onEnd(L.Z_OK),e.avail_out=0),!0)};q.prototype.onData=function(t){this.chunks.push(t)};q.prototype.onEnd=function(t){t===L.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=fe.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};function ye(t,n){var e=new q(n);if(e.push(t,!0),e.err)throw e.msg||De[e.err];return e.result}function Hn(t,n){return n=n||{},n.raw=!0,ye(t,n)}le.Inflate=q;le.inflate=ye;le.inflateRaw=Hn;le.ungzip=ye});b();k();var j=ke(Qt()),qt=ke(an());en();b();k();b();k();var Jt=ke(Xt());b();k();b();k();b();k();b();k();b();k();var we=()=>Boolean(typeof window>"u"||process.env.SSR_ENV);var Ie={PING:"ping",PONG:"pong"},ie={CONNECTED:0,DISCONNECTED:1,PING_PENDING:2,PING_PENDING_OVER:3},Y=!we(),xe=Y&&!window.inOKXExtension;var Gn=/^\{|\[/,jt="";Y&&(jt=window?.okGlobal?.socketBaseUrls?.trade);var be={isPushingJSON(t){return Gn.test(t)},getRealConnectUrl(t=jt){return t}};b();k();var Yt={decode(t){let n=0,e,a,f,i,l,s=[],v=t.length;for(;n<v;)e=t[n++],e<128?l=e:e<224?(a=t[n++],l=(e&31)<<6|a&63):e<240?(a=t[n++],f=t[n++],l=(e&15)<<12|(a&63)<<6|f&63):(a=t[n++],f=t[n++],i=t[n++],l=(e&7)<<18|(a&63)<<12|(f&63)<<6|i&63),s.push(String.fromCodePoint(l));return s.join("")}};var $t=Yt;if(Y&&xe){let{location:t,TextDecoder:n}=window;n&&($t=new n("utf-8")),window.$has_debug_push_param$=t.href.indexOf("debug_push=true")>-1}var Ae={};function Le(t={}){let n=this,e=be.getRealConnectUrl(t.connectUrl),a={maxPendingTime:5e3,maxReconnectTime:1e4,maxWaitingResponseTime:1e4,maxSleepRecoveringTime:3e3,...t,connectUrl:e},f=Ae[a.connectUrl];if(f)return f;let i={isClosingByClient:!1,isKillingUnWakeUp:!1,isPingPending:!1,isErrorOccurred:!1},l,s={reconnectTimer:0,handlePendingTimer:0,discontinueTimer:0,killingUnWakeUpTimer:0,pingPendingTimer:0},v={currReconnectTime:0,lastReceivingTime:0},o=[],r=[],C=[],h=[],c=[],m=()=>{},g=()=>{this.isConnected()&&(m(),s.pingPendingTimer=setTimeout(()=>{i.isErrorOccurred&&this.isConnected()||(i.isErrorOccurred=!1,i.isPingPending=!0,h.forEach(u=>{u(ie.PING_PENDING)}))},a.maxPendingTime))},p=(u,P)=>{for(let H=0;H<u.length;H++)if(u[H]===P){u.splice(H,1);break}},_=()=>{i.isPingPending=!1,clearTimeout(s.pingPendingTimer)},D=()=>{clearInterval(s.handlePendingTimer)},R=()=>{v.currReconnectTime=0,s.reconnectTimer&&(clearTimeout(s.reconnectTimer),delete s.reconnectTimer)},S=()=>{!this.isConnected()&&!this.isConnecting()&&(R(),d())},d=function(){l=new WebSocket(a.connectUrl),l.onopen=N,l.onmessage=w,l.onclose=I,l.onerror=x,s.handlePendingTimer=setInterval(n.handleConnectPending,a.maxPendingTime)},N=function(){i.isClosingByClient=!1,R(),D(),_(),r.forEach(u=>{u(),u.triggered=!0}),h.forEach(u=>{u(ie.CONNECTED)})},E=function(){i.isPingPending&&h.forEach(u=>{u(ie.PING_PENDING_OVER)}),_()},w=function(u){if(v.lastReceivingTime=Date.now(),clearTimeout(s.discontinueTimer),clearTimeout(s.killingUnWakeUpTimer),s.discontinueTimer=setTimeout(g,a.maxPendingTime),u.data instanceof Blob){let P=u.data,H=new FileReader,J={done:!1,resultString:""};c.push(J),H.onload=function($){if($.target.readyState==FileReader.DONE){let Q=(0,Jt.inflateRaw)($.target.result);for(J.done=!0,J.resultString=$t.decode(Q);c[0]&&c[0].done;){let{resultString:ae}=c.shift();ae===Ie.PONG&&E();let Pe=be.isPushingJSON(ae)?JSON.parse(ae):ae;U(Pe),window.$has_debug_push_param$&&(console.log(ae),window.$ok_debug_push_callback$&&window.$ok_debug_push_callback$(Pe))}}},H.readAsArrayBuffer(P)}else{let P=u.data;P===Ie.PONG&&E(),U(be.isPushingJSON(P)?JSON.parse(P):P),window.$has_debug_push_param$&&console.log(P)}},T=function(){_(),r.forEach(u=>{u.triggered=!1})},I=function(){if(i.isKillingUnWakeUp){i.isKillingUnWakeUp=!1;return}i.isClosingByClient?T():s.reconnectTimer||x()},x=function(){T(),D(),i.isErrorOccurred=!0,s.reconnectTimer=setTimeout(d,v.currReconnectTime);let u=v.currReconnectTime+1e3;u>a.maxReconnectTime&&(u=a.maxReconnectTime),v.currReconnectTime=u,o.forEach(P=>{P()}),h.forEach(P=>{P(ie.DISCONNECTED)})},U=function(u){if(u.event==="error"&&Number(u.errorCode)===30026){l.close();return}C.forEach(H=>H(u))};if(this.setPushDataResolver=function(u){return C.push(u),()=>{p(C,u)}},this.connect=function(){if(Y){if(this.isConnected()){r.forEach(u=>{u.triggered||(u(),u.triggered=!0)});return}!this.isConnected()&&!this.isConnecting()&&d()}},this.disconnect=function(){clearTimeout(s.reconnectTimer),clearTimeout(s.discontinueTimer),delete s.reconnectTimer,delete s.discontinueTimer,i.isClosingByClient=!0,l.close(),o.length=0,r.length=0,C.length=0,m=()=>{},delete Ae[a.connectUrl];let{connection:u}=navigator;u&&u.removeEventListener&&u.removeEventListener("change",this.handleConnectionChange),xe&&document.removeEventListener("visibilitychange",this.handleVisibilityChange)},this.isConnecting=function(){return l?.readyState===WebSocket.CONNECTING},this.isConnected=function(){return l?.readyState===WebSocket.OPEN},this.sendChannel=function(u){this.isConnected()?l.send(u):console.error("WebSocket is not in open state, can not send!")},this.onSocketConnected=function(u){return r.push(u),()=>{p(r,u)}},this.onSocketError=function(u){return o.push(u),()=>{p(o,u)}},this.onPushDiscontinue=function(u){return m=u,()=>{}},this.onStatusChange=function(u){return h.push(u),()=>{p(h,u)}},this.handleConnectPending=()=>{this.isConnecting()&&o.forEach(u=>{u()})},this.handleConnectionChange=()=>{navigator.onLine===!0&&S()},this.handleVisibilityChange=()=>{if(document.visibilityState==="visible"){if(!this.isConnected()){S();return}Date.now()-v.lastReceivingTime>a.maxWaitingResponseTime&&(g(),s.killingUnWakeUpTimer=setTimeout(()=>{T(),R(),i.isKillingUnWakeUp=!0,l.close(),d()},a.maxSleepRecoveringTime))}},Y){let{connection:u}=navigator;u&&u.addEventListener&&u.addEventListener("change",this.handleConnectionChange),xe&&document.addEventListener("visibilitychange",this.handleVisibilityChange)}return Ae[a.connectUrl]=this,this}Le.STATUS=ie;Y&&!window.WebSocketCore&&(window.WebSocketCore=Le);var Vt=Le;nn();tn();var O=class{constructor(){this.online=()=>{O.socketPendingData=[...O.socketPendingData,...O.socketPendingDataOffToLine],O.socketPendingDataOffToLine=[],this.init()};this.offline=()=>{this.onSocketError()};this.onSocketError=()=>{O.socketStatus="ERROR",Object.keys(O.onStatusChange).forEach(n=>{O.onStatusChange[n](O.socketStatus)}),O.instance.disconnect()};this.init()}static sendChannel(n){O.socketStatus==="CONNECTED"?(O.instance.sendChannel(JSON.stringify(n)),O.socketPendingDataOffToLine.push(n)):O.socketPendingData.push(n)}async init(){await Ze.setUrlFromLocalAsync(),window.removeEventListener("online",this.online),window.removeEventListener("offline",this.offline),window.addEventListener("online",this.online),window.addEventListener("offline",this.offline),O.instance=new Vt({connectUrl:Ue.serverPushUrl});let n=O.instance;n.onPushDiscontinue(()=>{n.sendChannel("ping")}),n.connect(),n.onSocketError(()=>{O.socketStatus="ERROR",Object.keys(O.onStatusChange).forEach(e=>{O.onStatusChange[e](O.socketStatus)}),O.instance.disconnect()}),n.onSocketConnected(()=>{O.socketStatus="CONNECTED",Object.keys(O.onStatusChange).forEach(e=>{O.onStatusChange[e](O.socketStatus)}),O.socketPendingData.forEach(e=>{O.sendChannel(e)}),O.socketPendingData=[],n.sendChannel("ping")}),n.setPushDataResolver(e=>{let{event:a,arg:f}=e,i="";if(a&&(i=a),f&&f.channel&&!a&&(i=f.channel),!!i&&i&&O.listenChanel[i]){let l=O.listenChanel[i];Object.keys(l).forEach(s=>{l[s](e)})}})}},Z=O;Z.socketStatus="PENDING",Z.socketPendingData=[],Z.socketPendingDataOffToLine=[],Z.listenChanel={},Z.onStatusChange={};var da=new Z;var Wn=3e4,xa=(t,n)=>{let{pollingInterval:e,ready:a=!0}={pollingInterval:Wn,...n},[f,i]=(0,j.useState)(null),[l,s]=(0,j.useState)(Z.socketStatus),v=(0,j.useRef)(0),o=`${Date.now()}-${Be.mathRandom()}`,r=(0,qt.useLatest)(n);return(0,j.useEffect)(()=>{Z.onStatusChange[t+o]=C=>{s(C)}},[]),(0,j.useEffect)(()=>(Z.listenChanel[t]||(Z.listenChanel[t]={}),Z.listenChanel[t][o]=C=>{typeof r.current?.onSuccess=="function"?r.current.onSuccess(C):i(C)},()=>{delete Z.listenChanel[t][o]}),[t]),(0,j.useEffect)(()=>(a&&l==="ERROR"&&typeof r.current?.onError=="function"&&(v.current=window.setInterval(()=>{r.current?.onError?.()},e)),a&&l==="CONNECTED"&&typeof r.current?.onError=="function"&&clearInterval(v.current),()=>{clearInterval(v.current)}),[l,a]),typeof n?.onSuccess=="function"?null:f};b();k();var Mn=(o=>(o.TX="wallet-transaction",o.TX_STATUS="wallet-tx-status-toast",o.TX_CONFIRM="wallet-tx-confirm",o.NFT="wallet-nft",o.NFT_TEAM="nft-operate",o.DEX_ORDER_INFO="dex-across-order-info",o.PENDING_TX="wallet-notice",o.ASSET="wallet-asset",o.DEFI="invest-DeFi",o))(Mn||{}),pa="tickers";var Sa={1:"success",2:"warn",3:"error",4:"success"};var Ea={1:"wallet_transfer_notif_transaction_submit",2:"wallet_transfer_notif_cancel_approval_submit",3:"wallet_transfer_notif_send_success",4:"wallet_transfer_notif_approval_success",5:"wallet_transfer_notif_cancel_approval_success",6:"wallet_transfer_notif_contract_interaction_success",7:"wallet_transfer_notif_swap_transaction_success",8:"wallet_transfer_notif_nft_transaction_success",9:"wallet_transfer_notif_send_fail",10:"wallet_transfer_notif_contract_interaction_fail",11:"wallet_transfer_notif_swap_transaction_fail",12:"wallet_transfer_notif_nft_transaction_fail",13:"wallet_transfer_notif_approval_fail",14:"wallet_transfer_notif_cancel_approval_fail",15:"wallet_extension_toast_register_success",16:"wallet_extension_toast_fail_to_register",17:"wallet_extension_history_toast_withdrawn",18:"",19:"",20:"extension_wallet_transfer_notif_ordi_successfully_inscribed",21:"extension_wallet_transfer_notif_ordi_sending_failed",23:"wallet_extension_freegas_notif_refund_received"};export{Z as a,xa as b,Mn as c,pa as d,Sa as e,Ea as f};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-RIWLOEHK.js.map