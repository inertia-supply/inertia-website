(this["webpackJsonpinertia-website"]=this["webpackJsonpinertia-website"]||[]).push([[14],{227:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(5),a=n.n(r),l=n(92),o=n(251),c=n(97),i=n(17),s=n(236),C=n(254);function u(e,t,n){if(!e)return"...";if(e.length<=t)return e;var r=t-(n=n||"...").length,a=Math.ceil(r/2),l=Math.floor(r/2);return e.substr(0,a)+n+e.substr(e.length-l)}var p=function(e,t){return Object(o.a)(a.a.mark((function n(){var r,o,i,C,u,p,f,b,m,j,d=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=d.length,o=new Array(r),i=0;i<r;i++)o[i]=d[i];if(C=o[0],u=o[1],p=o.slice(2),!Object(s.isAddress)(C)){n.next=10;break}return f=C,b=u,m=new c.a(f,t,e),n.next=8,m[b].apply(m,Object(l.a)(p));case 8:return j=n.sent,n.abrupt("return",j);case 10:case"end":return n.stop()}}),n)})))},f=function(e,t){return Object(o.a)(a.a.mark((function n(){var r,l,o,C,u,p,f,b,m,j,d,h,O,g,y,v,_=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=_.length,l=new Array(r),o=0;o<r;o++)l[o]=_[o];if(C=l[0],u=l[1],p=l[2],!Object(s.isAddress)(C)){n.next=15;break}for(f=C,b=u,m=p,j=new c.a(f,t,e),d=[],h=0;h<m.length;h++)d.push(j[b](m[h]));return n.next=11,Promise.all(d);case 11:for(O=n.sent,g=i.a.from("0"),y=0;y<O.length;y++)v=g.add(O[y]),g=v;return n.abrupt("return",g);case 15:case"end":return n.stop()}}),n)})))},b=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=r[0],i=r[1],C=r.slice(2);if(Object(s.isAddress)(o)){var u=o,p=i,f=new c.a(u,t,e.getSigner());return f[p].apply(f,Object(l.a)(C))}var b=o;return e[b].apply(e,[i].concat(Object(l.a)(C)))}},m=function(){return function(e){return Object(C.request)("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",e)}}},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createElement("path",{fill:"#73328D",d:"M421.797816,232.25 C422.701925,240.931507 429.462199,247.691781 437.712199,247.691781 C445.91083,247.691781 452.722473,240.931507 453.626583,232.25 C462.677953,230.90411 468.585487,224.205479 468.85261,223.835616 C470.393706,222.068493 470.239597,219.325342 468.482747,217.722603 C466.777268,216.109589 464.116309,216.273973 462.575213,218.041096 C462.523843,218.092466 458.424528,222.705479 452.465624,223.568493 C452.095761,222.55137 451.612884,221.534247 451.027268,220.619863 C451.027268,220.568493 448.951925,201.366438 448.951925,201.366438 C448.951925,200.667808 448.212199,200.082192 447.297816,200.082192 L426.801241,200.082192 C425.897131,200.082192 425.147131,200.678082 425.147131,201.366438 C425.147131,201.366438 423.657405,221.15411 423.975898,221.369863 C423.554665,222.068493 423.174528,222.818493 422.907405,223.568493 C417.051241,222.705479 412.951925,218.15411 412.849186,218.041096 C411.30809,216.273973 408.647131,216.109589 406.880008,217.722603 C405.174528,219.273973 405.020419,222.068493 406.561514,223.835616 C406.838912,224.205479 412.695076,230.914384 421.797816,232.25 Z M426.051241,221.739726 L449.311514,221.739726 C449.732747,222.386986 450.051241,223.023973 450.318364,223.722603 L425.044391,223.722603 C425.362884,223.023973 425.681378,222.386986 426.051241,221.739726 Z M451.551241,232.414384 C450.595761,239.873288 444.739597,245.606164 437.66083,245.606164 C430.633432,245.606164 424.828638,239.863014 423.821788,232.414384 L451.551241,232.414384 Z M399.708775,232.743151 C399.708775,236.174658 397.900556,239.174658 395.239597,240.787671 L395.239597,223.886986 L393.431378,223.886986 L393.431378,241.640411 C392.044391,242.020548 389.763569,242.071918 388.325213,241.640411 L388.325213,223.886986 L386.465624,223.886986 L386.465624,240.828767 C383.753295,239.277397 381.883432,236.215753 381.883432,232.732877 L381.883432,223.886986 L380.013569,223.886986 L380.013569,232.732877 C380.013569,238.630137 384.380008,243.407534 389.917679,243.890411 L389.917679,272.256849 L391.838912,272.256849 L391.838912,243.890411 C397.273843,243.356164 401.578638,238.578767 401.578638,232.732877 L401.578638,223.886986 L399.708775,223.886986 L399.708775,232.743151 Z M441.595761,249.304795 L441.338912,249.273973 C440.167679,249.140411 438.986172,249.047945 437.784117,249.047945 L437.712199,249.047945 L437.599186,249.058219 C436.427953,249.058219 435.287542,249.150685 434.157405,249.273973 L433.746446,249.325342 C421.130008,250.917808 410.630008,259.958904 406.150556,272.267123 L469.273843,272.267123 C464.784117,259.917808 454.243021,250.856164 441.595761,249.304795 Z",transform:"translate(-380 -200)"});function c(e,t){var n=e.title,c=e.titleId,i=l(e,["title","titleId"]);return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:90,height:73,viewBox:"0 0 90 73",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,o)}var i=r.forwardRef(c);n.p},471:function(e,t,n){},505:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(1),l=n(19),o=n(23),c=n(116),i=n(339),s=n(227),C=n(220),u=n(508),p=n(302);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.createElement("g",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(1 1)"},a.createElement("polygon",{fill:"#E2761B",stroke:"#E2761B",points:"56.977 .117 33.656 17.438 37.969 7.219"}),a.createElement("g",{fill:"#E4761B",stroke:"#E4761B",transform:"translate(.469)"},a.createElement("polygon",{points:"2.672 .117 25.805 17.602 21.703 7.219"}),a.createElement("polygon",{points:"48.117 40.266 41.906 49.781 55.195 53.438 59.016 40.477"}),a.createElement("polygon",{points:".211 40.477 4.008 53.438 17.297 49.781 11.086 40.266"}),a.createElement("polygon",{points:"16.547 24.188 12.844 29.789 26.039 30.375 25.57 16.195"}),a.createElement("polygon",{points:"42.633 24.188 33.492 16.031 33.188 30.375 46.359 29.789"}),a.createElement("polygon",{points:"17.297 49.781 25.219 45.914 18.375 40.57"}),a.createElement("polygon",{points:"33.961 45.914 41.906 49.781 40.805 40.57"})),a.createElement("g",{fill:"#D7C1B3",stroke:"#D7C1B3",transform:"translate(17.578 45.703)"},a.createElement("polygon",{points:"24.797 4.078 16.852 .211 17.484 5.391 17.414 7.57"}),a.createElement("polygon",{points:".188 4.078 7.57 7.57 7.523 5.391 8.109 .211"})),a.createElement("polygon",{fill:"#233447",stroke:"#233447",points:"25.266 37.148 18.656 35.203 23.32 33.07"}),a.createElement("polygon",{fill:"#233447",stroke:"#233447",points:"34.852 37.148 36.797 33.07 41.484 35.203"}),a.createElement("g",{fill:"#CD6116",stroke:"#CD6116",transform:"translate(11.484 29.766)"},a.createElement("polygon",{points:"6.281 20.016 7.406 10.5 .07 10.711"}),a.createElement("polygon",{points:"29.766 10.5 30.891 20.016 37.102 10.711"}),a.createElement("polygon",{points:"35.344 .023 22.172 .609 23.391 7.383 25.336 3.305 30.023 5.438"}),a.createElement("polygon",{points:"7.172 5.438 11.859 3.305 13.781 7.383 15.023 .609 1.828 .023"})),a.createElement("g",{fill:"#E4751F",stroke:"#E4751F",transform:"translate(13.125 29.766)"},a.createElement("polygon",{points:".188 .023 5.719 10.805 5.531 5.438"}),a.createElement("polygon",{points:"28.383 5.438 28.148 10.805 33.703 .023"}),a.createElement("polygon",{points:"13.383 .609 12.141 7.383 13.688 15.375 14.039 4.852"}),a.createElement("polygon",{points:"20.531 .609 19.898 4.828 20.18 15.375 21.75 7.383"})),a.createElement("polygon",{fill:"#F6851B",stroke:"#F6851B",points:"34.875 37.148 33.305 45.141 34.43 45.914 41.273 40.57 41.508 35.203"}),a.createElement("polygon",{fill:"#F6851B",stroke:"#F6851B",points:"18.656 35.203 18.844 40.57 25.688 45.914 26.813 45.141 25.266 37.148"}),a.createElement("polygon",{fill:"#C0AD9E",stroke:"#C0AD9E",points:"34.992 53.273 35.063 51.094 34.477 50.578 25.641 50.578 25.102 51.094 25.148 53.273 17.766 49.781 20.344 51.891 25.57 55.523 34.547 55.523 39.797 51.891 42.375 49.781"}),a.createElement("polygon",{fill:"#161616",stroke:"#161616",points:"34.43 45.914 33.305 45.141 26.813 45.141 25.688 45.914 25.102 51.094 25.641 50.578 34.477 50.578 35.063 51.094"}),a.createElement("g",{fill:"#763D16",stroke:"#763D16"},a.createElement("polygon",{points:"57.961 18.563 59.953 9 56.977 .117 34.43 16.852 43.102 24.188 55.359 27.773 58.078 24.609 56.906 23.766 58.781 22.055 57.328 20.93 59.203 19.5"}),a.createElement("polygon",{points:".188 9 2.18 18.563 .914 19.5 2.789 20.93 1.359 22.055 3.234 23.766 2.063 24.609 4.758 27.773 17.016 24.188 25.688 16.852 3.141 .117"})),a.createElement("polygon",{fill:"#F6851B",stroke:"#F6851B",points:"55.359 27.773 43.102 24.188 46.828 29.789 41.273 40.57 48.586 40.477 59.484 40.477"}),a.createElement("polygon",{fill:"#F6851B",stroke:"#F6851B",points:"17.016 24.188 4.758 27.773 .68 40.477 11.555 40.477 18.844 40.57 13.313 29.789"}),a.createElement("polygon",{fill:"#F6851B",stroke:"#F6851B",points:"33.656 30.375 34.43 16.852 37.992 7.219 22.172 7.219 25.688 16.852 26.508 30.375 26.789 34.641 26.813 45.141 33.305 45.141 33.352 34.641"}));function j(e,t){var n=e.title,r=e.titleId,l=b(e,["title","titleId"]);return a.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:62,height:58,viewBox:"0 0 62 58",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,m)}var d=a.forwardRef(j);n.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=a.createElement("path",{d:"M59.6506849,1.93150685 C59.0273973,0.520547945 57.8424658,0.00684931507 56.3561644,0.00684931507 C47.5753425,0.0273972603 38.8013699,0.0273972603 30.0068493,0.0273972603 L3.85616438,0.0273972603 C1.23972603,0.0273972603 0.0342465753,1.21232877 0.0342465753,3.81506849 L0.0342465753,47.0068493 C0.0342465753,48.0068493 0.260273973,48.890411 0.993150685,49.609589 C1.74657534,50.3630137 2.70547945,50.5342466 3.7260274,50.5342466 L56.4315068,50.5342466 C58.6164384,50.5342466 59.9520548,49.2328767 59.9520548,47.1027397 C59.9726027,32.5616438 59.9726027,18 59.9520548,3.43835616 C59.9520548,2.93150685 59.8561644,2.38356164 59.6506849,1.93150685 Z M16.5753425,3.96575342 C17.630137,3.96575342 18.1780822,4.49315068 18.1780822,5.54794521 C18.1780822,6.62328767 17.6849315,7.13013699 16.6164384,7.15068493 C15.5205479,7.15068493 15.0342466,6.67808219 15.0342466,5.5890411 C15.0273973,4.47945205 15.5,3.98630137 16.5753425,3.96575342 Z M11.0753425,3.96575342 C12.1506849,3.96575342 12.6232877,4.45205479 12.6232877,5.56849315 C12.6232877,6.69863014 12.1917808,7.13013699 11.0753425,7.15068493 C10,7.15068493 9.49315068,6.64383562 9.49315068,5.56849315 C9.49315068,4.51369863 10.0205479,3.98630137 11.0753425,3.96575342 Z M5.53424658,3.96575342 C6.56849315,3.96575342 7.1369863,4.49315068 7.15068493,5.54794521 C7.17123288,6.60273973 6.64383562,7.13013699 5.5890411,7.15068493 C4.47945205,7.15068493 3.98630137,6.67808219 3.96575342,5.60958904 C3.95205479,4.53424658 4.47945205,3.98630137 5.53424658,3.96575342 Z M58.390411,46.8013699 C58.390411,48.4041096 57.8630137,48.9109589 56.2808219,48.9109589 L3.65068493,48.9109589 C2.14383562,48.9109589 1.59589041,48.3835616 1.59589041,46.8767123 L1.59589041,11.1232877 L58.3835616,11.1232877 L58.390411,46.8013699 Z M28.0410959,43.4657534 C30.3150685,42.9178082 31.3972603,40.5410959 30.3356164,38.4520548 C30.2739726,38.3287671 30.260274,38.1027397 30.3356164,38 C31.2260274,36.7808219 32.130137,35.5821918 33.0410959,34.3835616 C33.1027397,34.3082192 33.2671233,34.2465753 33.3630137,34.2739726 C34.3287671,34.5136986 35.2191781,34.3287671 36.0821918,33.8082192 C36.1780822,33.8767123 36.260274,33.9246575 36.3356164,33.9794521 C37.5205479,34.869863 38.7054795,35.7534247 39.8767123,36.6506849 C39.9657534,36.7191781 40,36.9178082 40,37.0547945 C40,37.4726027 39.9178082,37.8972603 39.9657534,38.3013699 C40.1438356,39.7534247 41.2123288,40.869863 42.6780822,41.1849315 C44.0410959,41.4794521 45.5136986,40.8356164 46.260274,39.630137 C47.0342466,38.3767123 46.9520548,36.8082192 46.0342466,35.6712329 C45.869863,35.4657534 45.8630137,35.3287671 45.9794521,35.109589 C47.2054795,32.6780822 48.4246575,30.239726 49.6369863,27.7945205 C49.760274,27.5479452 49.8835616,27.4589041 50.1849315,27.4726027 C52.0684932,27.5547945 53.6712329,25.9589041 53.6712329,24.0479452 C53.6712329,22.1438356 52.0479452,20.5273973 50.1780822,20.609589 C48.7739726,20.6712329 47.6986301,21.3287671 47.1164384,22.6164384 C46.5547945,23.8630137 46.6986301,25.0753425 47.5479452,26.1780822 C47.6849315,26.3561644 47.7465753,26.4863014 47.630137,26.7191781 C46.3835616,29.1849315 45.1438356,31.6643836 43.890411,34.130137 C43.8287671,34.2465753 43.6369863,34.369863 43.5068493,34.369863 C42.8493151,34.3630137 42.239726,34.4931507 41.6712329,34.8219178 C41.4863014,34.9315068 41.3767123,34.9041096 41.2123288,34.7808219 C40.0753425,33.9178082 38.9383562,33.0616438 37.7876712,32.2191781 C37.5410959,32.0342466 37.4589041,31.8767123 37.5273973,31.5547945 C38.0479452,29.1986301 35.8082192,27.0136986 33.4589041,27.5684932 C31.1643836,28.109589 30.0821918,30.5068493 31.1643836,32.609589 C31.2191781,32.7191781 31.2191781,32.9315068 31.1506849,33.0273973 C30.2671233,34.2328767 29.369863,35.4246575 28.4657534,36.609589 C28.390411,36.7054795 28.2054795,36.7534247 28.0753425,36.7534247 C27.6027397,36.760274 27.1232877,36.6712329 26.6643836,36.739726 C24.8082192,37.0205479 23.5547945,38.8972603 23.9178082,40.7876712 C24.2945205,42.6438356 26.2191781,43.8972603 28.0410959,43.4657534 Z M12.2534247,34.7808219 C15.9794521,36.0342466 19.4246575,34.6506849 21.2876712,32.6438356 C21.2739726,32.6232877 21.2671233,32.5958904 21.2465753,32.5753425 L19.0273973,30.6506849 C17.6369863,29.4452055 16.239726,28.2465753 14.8561644,27.0342466 C14.7260274,26.9178082 14.6164384,26.7465753 14.5616438,26.5753425 C13.9109589,24.5958904 13.2808219,22.6164384 12.6369863,20.6369863 C12.390411,19.8767123 12.1438356,19.1232877 11.890411,18.3424658 C8.91780822,19.4726027 6.31506849,22.5616438 6.30821918,26.5684932 C6.31506849,30.1917808 8.74657534,33.6027397 12.2534247,34.7808219 Z M15.8287671,26.5958904 C16.2123288,26.9246575 16.5890411,27.2534247 16.9657534,27.5821918 C18.1849315,28.6369863 19.4041096,29.6917808 20.630137,30.7465753 C21.0684932,31.130137 21.5136986,31.5068493 21.9520548,31.8835616 C25.5479452,27.2739726 23.5205479,21.2260274 19.6917808,19.1027397 C19.6712329,19.1232877 19.6506849,19.1369863 19.6369863,19.1575342 C18.3493151,21.5342466 17.0547945,23.9178082 15.760274,26.2945205 C15.6917808,26.4383562 15.7328767,26.5136986 15.8287671,26.5958904 Z M18.8219178,18.6164384 C17.3013699,17.7465753 14.5479452,17.5068493 12.8356164,18.0684932 C13.6164384,20.4863014 14.390411,22.8972603 15.1849315,25.3630137 C16.4246575,23.0753425 17.6232877,20.8424658 18.8219178,18.6164384 Z",transform:"translate(0 .798)"});function y(e,t){var n=e.title,r=e.titleId,l=O(e,["title","titleId"]);return a.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:60,height:52,viewBox:"0 0 60 52",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,g)}var v=a.forwardRef(y);n.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=a.createElement("path",{d:"M58.8176255,51.877601 L41.4785802,21.9363525 C41.2656059,21.5691554 41.0452876,21.2166463 41.0526316,20.746634 C41.0746634,18.3818849 41.0746634,16.0097919 41.0599755,13.6450428 C41.0599755,13.1676867 41.1334149,12.9620563 41.6988984,12.9326805 C43.9241126,12.8078335 45.6352509,11.3096695 46.119951,9.12117503 C46.376989,7.9755202 46.2154223,6.81517748 46.2227662,5.6621787 C46.252142,2.8494492 44.1738066,0.734394125 41.3684211,0.727050184 C33.4002448,0.712362301 25.4394125,0.719706242 17.4712362,0.734394125 C15.1578947,0.741738066 13.2998776,2.27662179 12.8004896,4.55324357 C12.5434517,5.72093023 12.6903305,6.91064871 12.6903305,8.09302326 C12.6903305,10.7368421 14.5924113,12.7784578 17.2141983,12.9326805 C17.7796818,12.9694002 17.8604651,13.1676867 17.8531212,13.6523868 C17.8310894,15.9143207 17.8310894,18.1689106 17.8531212,20.4381885 C17.8604651,20.996328 17.7135863,21.4736842 17.4492044,21.9657283 C12.1028152,31.9094247 6.76376989,41.8531212 1.4247246,51.8041616 C0.976744186,52.6340269 0.572827417,53.4785802 0.323133415,54.3965728 C-0.484700122,57.2827417 0.440636475,59.6695226 2.79069767,60.7711138 C3.83353733,61.255814 4.94247246,61.4247246 6.08812729,61.4247246 L29.4198286,61.4247246 C35.5813953,61.4247246 41.7429621,61.4467564 47.9045288,61.4173807 C50.1370869,61.4100367 52.369645,61.6009792 54.5948592,61.2631579 C57.4149327,60.8372093 59.4565483,58.9865361 59.875153,56.4381885 C60.1468788,54.7784578 59.625459,53.2802938 58.8176255,51.877601 Z M54.8151775,58.5312118 C54.1028152,58.7955936 53.3537332,58.8617625 52.5973072,58.8617625 C44.871481,58.8543452 37.1529988,58.8617625 29.4271726,58.8617625 L6.66095471,58.8617625 C6.04406365,58.8617625 5.42717258,58.869033 4.81028152,58.7368421 C3.01835985,58.3623011 2.30599755,57.3121175 2.66585067,55.5201958 C2.8494492,54.6168911 3.23133415,53.7870257 3.66462668,52.9791922 C9.10648715,42.8445532 14.5483476,32.7099143 20.004896,22.5826193 C20.2839657,22.0685435 20.4014688,21.5544676 20.4014688,20.9742962 C20.379437,17.7209302 20.379437,14.4602203 20.4014688,11.2068543 C20.4088127,10.6046512 20.2913097,10.3255814 19.6156671,10.3916769 C18.9253366,10.4577723 18.2129743,10.4210526 17.5152999,10.3990208 C16.1860465,10.3623011 15.253366,9.42962056 15.2166463,8.09302326 C15.1946144,7.31456548 15.2093023,6.52876377 15.2166463,5.750306 C15.2313341,4.16401469 16.1419829,3.25336597 17.7356181,3.25336597 C24.4920441,3.24602203 31.2411261,3.25336597 37.997552,3.25336597 C39.0991432,3.25336597 40.2007344,3.23867809 41.3096695,3.26070991 C42.749082,3.29008568 43.6670747,4.20807834 43.6891065,5.64749082 C43.7037944,6.45532436 43.6964504,7.26315789 43.6817625,8.07099143 C43.6523868,9.45165239 42.7197062,10.376989 41.3243574,10.3990208 C40.5752754,10.4137087 39.8188494,10.4283966 39.0624235,10.3990208 C38.6364749,10.3843329 38.5116279,10.5238678 38.5116279,10.9498164 C38.5263158,14.4749082 38.5263158,18 38.5116279,21.5250918 C38.5116279,21.9290086 38.7099143,22.244798 38.8861689,22.5679315 C44.372093,32.7686659 49.8580171,42.9694002 55.3365973,53.1774786 C55.8873929,54.2056304 56.3427173,55.255814 56.2913097,56.4602203 C56.25459,57.5104039 55.7992656,58.1713586 54.8151775,58.5312118 Z M37.9314565,26.871481 C37.6523868,26.3574051 37.4100367,26.3353733 36.9326805,26.5850673 C34.9351285,27.6425949 33.2239902,29.0526316 31.6891065,30.6976744 C30.7564259,31.7037944 29.8384333,32.7172583 28.869033,33.6940024 C27.3488372,35.2288862 25.4908201,35.8090575 23.3463892,35.5740514 C21.4443084,35.3610771 19.5569155,35.0599755 17.750306,34.4504284 C17.0746634,34.2227662 16.8249694,34.4137087 16.5165239,34.9791922 C14.1664627,39.3268054 11.7723378,43.6597307 9.40758874,47.9926561 C8.11505508,50.3500612 6.81517748,52.7001224 5.56670747,55.0795594 C5.00856793,56.1444308 5.09669523,56.2325581 6.28641371,56.2325581 L51.9657283,56.2325581 C54,56.2325581 54.0146879,56.2252142 53.0379437,54.4406365 C48.0073439,45.253366 42.9547124,36.0660955 37.9314565,26.871481 Z M32.5703794,50.5777234 C30.9326805,51.0477356 29.2068543,50.0709914 28.75153,48.4186047 C28.2815177,46.7221542 29.1995104,45.0844553 30.8812729,44.5997552 C32.5336597,44.122399 34.252142,45.0697674 34.7221542,46.7221542 C35.1921665,48.3378213 34.1933905,50.1150551 32.5703794,50.5777234 Z M39.6572827,43.747858 C37.747858,44.3133415 35.6842105,43.1529988 35.1481028,41.2068543 C34.6119951,39.2680539 35.7943696,37.2117503 37.7258262,36.7197062 C39.6572827,36.2276622 41.5960832,37.3586291 42.124847,39.2900857 C42.6536108,41.2288862 41.5667075,43.1823745 39.6572827,43.747858 Z M29.8971848,17.0159288 C32.8567931,17.0085679 35.2362301,14.6438188 35.2435911,11.6988984 C35.250918,8.70257038 32.878825,6.3378213 29.8678091,6.33047736 C26.9228886,6.33047736 24.514059,8.71725826 24.514059,11.6474908 C24.5067319,14.6364749 26.9008568,17.0232558 29.8971848,17.0159288 Z M27.7600979,27.5985312 C29.9265606,27.5618115 31.5936353,25.8286414 31.5716034,23.6474908 C31.5495716,21.5544676 29.8531212,19.8947368 27.74541,19.9020565 C25.5716034,19.9094247 23.8384333,21.6425949 23.8678091,23.7870257 C23.8898409,25.880049 25.6891065,27.6425949 27.7600979,27.5985312 Z",transform:"translate(.5 .086)"});function x(e,t){var n=e.title,r=e.titleId,l=L(e,["title","titleId"]);return a.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:61,height:63,viewBox:"0 0 61 63",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,w)}var E=a.forwardRef(x);n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=a.createElement("path",{d:"M58.8424658,38.5616438 C55.9246575,42.3630137 51.5,44.5410959 46.0068493,44.5410959 C40.7671233,44.5410959 34.8082192,42.6232877 28.2945205,38.8493151 C23.0547945,35.8082192 17.6438356,34.8424658 12.869863,33.9931507 C8.56849315,33.2191781 4.19863014,32.4246575 1.18493151,29.9383562 C0.506849315,29.3767123 0.0479452055,29.5479452 0.157534247,30.4178082 C1.5890411,41.9931507 15.9041096,36.6849315 29.6506849,44.6438356 C46.5068493,54.4178082 57.1164384,49.7191781 59.4657534,38.8150685 C59.6506849,37.9657534 59.369863,37.869863 58.8424658,38.5616438 Z M15.1164384,26.9520548 C19.6575342,27.6917808 24.8013699,28.5205479 29.9794521,31.2328767 C35.3767123,34.0684932 40.2260274,35.4931507 44.4041096,35.4931507 C48.1164384,35.4931507 51.1849315,34.3082192 53.260274,32.0616438 C55.2671233,29.890411 56.3287671,26.7808219 56.3287671,23.0684932 C56.3287671,11.8767123 44.3835616,2.76712329 29.6917808,2.76712329 C13.1575342,2.76712329 3.68490069,8.53424658 3.68490069,18.5890411 C3.67123288,25.1027397 8.2260274,25.8424658 15.1164384,26.9520548 Z M18.8630137,8.7739726 C23,8.7739726 26.3561644,11.3767123 26.3561644,14.5753425 C26.3561644,17.7808219 23,20.3767123 18.8630137,20.3767123 C14.7191781,20.3767123 11.3630137,17.7808219 11.3630137,14.5753425 C11.3630137,11.3767123 14.7191781,8.7739726 18.8630137,8.7739726 Z M29.6506849,36.5 C48.8493151,47.630137 59.9657534,39.9931507 59.9657534,25.7739726 C59.9657534,11.5616438 46.3972603,0.0410958904 29.6506849,0.0410958904 C12.9041096,0.0410958904 0.0342465753,6.04794521 0.0342465753,20.260274 C0.0342465753,34.4726027 15.1643836,28.1027397 29.6506849,36.5 Z M29.6849315,1.5 C45.0821918,1.5 57.5958904,11.1780822 57.5958904,23.0821918 C57.5958904,27.1232877 56.4178082,30.5273973 54.1849315,32.9383562 C51.8630137,35.4520548 48.4794521,36.7808219 44.3972603,36.7808219 C40.0068493,36.7808219 34.9589041,35.2945205 29.3835616,32.3767123 C24.3972603,29.760274 19.3561644,28.9452055 14.9109589,28.2260274 C7.92465753,27.0821918 2.40410959,26.1849315 2.40410959,18.5958904 C2.40410959,7.73287671 12.3493151,1.5 29.6849315,1.5 Z M22.5821918,14.5821918 C22.5821918,16.1712329 20.9178082,17.4589041 18.8630137,17.4589041 C16.8082192,17.4589041 15.1438356,16.1712329 15.1438356,14.5821918 C15.1438356,12.9931507 16.8082192,11.7054795 18.8630137,11.7054795 C20.9178082,11.7054795 22.5821918,12.9931507 22.5821918,14.5821918 Z",transform:"translate(0 .39)"});function N(e,t){var n=e.title,r=e.titleId,l=M(e,["title","titleId"]);return a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:60,height:51,viewBox:"0 0 60 51",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,Z)}var P=a.forwardRef(N);n.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=a.createElement("path",{d:"M50.2910448,26.9253731 L46.5149254,26.9253731 L46.5149254,19.4029851 C47.9253731,18.0746269 48.7835821,16.1268657 48.6492537,13.9925373 C48.4328358,10.5895522 45.6791045,7.81343284 42.2686567,7.59701493 C42.119403,7.58955224 41.9552239,7.57462687 41.8059701,7.57462687 C41.1268657,7.57462687 40.4850746,7.67164179 39.8656716,7.85074627 C39.738806,7.8880597 39.619403,7.91044776 39.5,7.91044776 C39.0223881,7.91044776 38.5746269,7.64925373 38.3283582,7.20895522 C37,4.81343284 34.4253731,3.18656716 31.4850746,3.18656716 C29.8880597,3.18656716 28.4029851,3.6641791 27.1641791,4.49253731 C26.9477612,4.63432836 26.6940299,4.70895522 26.4552239,4.70895522 C26.0447761,4.70895522 25.6492537,4.51492537 25.3880597,4.14925373 C23.6940299,1.67164179 20.7910448,0.052238806 17.5746269,0.052238806 C12.380597,0.052238806 8.11940299,4.25373134 8.11940299,9.43283582 L8.11940299,9.47761194 C8.35074627,9.97014925 7.85820896,10.3208955 7.36567164,10.3208955 C7.26865672,10.3208955 7.18656716,10.3134328 7.08955224,10.2985075 C6.59701493,10.141791 6.08208955,10.0671642 5.55223881,10.0671642 C5.40298507,10.0671642 5.26119403,10.0671642 5.1119403,10.0746269 C2.82089552,10.261194 0.858208955,11.7910448 0.231343284,14.0074627 C-0.708955224,17.3134328 1.3358209,20.3507463 4.2761194,21.0522388 L4.2761194,54.9477612 C4.2761194,60.6940299 8.93283582,65.358209 14.6716418,65.358209 L36.119403,65.358209 C41.3358209,65.358209 45.641791,61.5149254 46.380597,56.5074627 C53.9552239,56.1044776 59.9850842,49.8358209 59.9850842,42.1641791 L59.9850842,36.6567164 C59.9925373,31.2835821 55.6492537,26.9253731 50.2910448,26.9253731 Z M16.1492537,51.5149254 C16.1492537,51.9477612 15.6343284,52.2835821 14.9925373,52.2835821 C14.3507463,52.2835821 13.8358209,51.9477612 13.8358209,51.5149254 L13.8358209,36.1044776 C13.8358209,35.6791045 14.3507463,35.3358209 14.9925373,35.3358209 C15.6343284,35.3358209 16.1492537,35.6791045 16.1492537,36.1044776 L16.1492537,51.5149254 Z M23.0746269,51.5149254 C23.0746269,51.9477612 22.5597015,52.2835821 21.9179104,52.2835821 C21.2761194,52.2835821 20.761194,51.9477612 20.761194,51.5149254 L20.761194,36.1044776 C20.761194,35.6791045 21.2761194,35.3358209 21.9179104,35.3358209 C22.5597015,35.3358209 23.0746269,35.6791045 23.0746269,36.1044776 L23.0746269,51.5149254 Z M30.0074627,51.5149254 C30.0074627,51.9477612 29.4925373,52.2835821 28.8507463,52.2835821 C28.2089552,52.2835821 27.6940299,51.9477612 27.6940299,51.5149254 L27.6940299,36.1044776 C27.6940299,35.6791045 28.2089552,35.3358209 28.8507463,35.3358209 C29.4925373,35.3358209 30.0074627,35.6791045 30.0074627,36.1044776 L30.0074627,51.5149254 Z M36.9328358,51.5149254 C36.9328358,51.9477612 36.4179104,52.2835821 35.7761194,52.2835821 C35.1343284,52.2835821 34.619403,51.9477612 34.619403,51.5149254 L34.619403,36.1044776 C34.619403,35.6791045 35.1343284,35.3358209 35.7761194,35.3358209 C36.4179104,35.3358209 36.9328358,35.6791045 36.9328358,36.1044776 L36.9328358,51.5149254 Z M45.2835821,17.7014925 C44.3731343,18.6641791 43.141791,19.2014925 41.8134328,19.2014925 L40.2313433,19.2014925 L22.1567164,19.1268657 C21.6119403,19.1268657 21.0895522,19.358209 20.6865672,19.7313433 C20.2985075,20.119403 20.0820896,20.6492537 20.0820896,21.2014925 L20.0820896,25.2686567 C20.0820896,26.0671642 19.4328358,26.7238806 18.6268657,26.7238806 L17.9850746,26.7238806 C17.1865672,26.7238806 16.5298507,26.0671642 16.5298507,25.2686567 L16.5298507,21.1791045 C16.5298507,20.0447761 15.6119403,19.1119403 14.4626866,19.1044776 L5.08955224,19.0820896 C4.1119403,18.9402985 3.23134328,18.3955224 2.6641791,17.5597015 C2.08208955,16.6865672 1.93283582,15.619403 2.23134328,14.5597015 C2.61940299,13.1940299 3.81343284,12.2462687 5.28358209,12.1343284 C5.38059701,12.1268657 5.46268657,12.1268657 5.55970149,12.1268657 C5.88059701,12.1268657 6.20149254,12.1716418 6.52238806,12.2686567 C6.79850746,12.3507463 7.08208955,12.3955224 7.38059701,12.3955224 C8.40298507,12.3955224 9.36567164,11.8880597 9.88059701,11.0746269 C10.238806,10.5074627 10.3507463,9.84328358 10.2164179,9.18656716 C10.3432836,5.26119403 13.5970149,2.1119403 17.5820896,2.1119403 C20.0447761,2.1119403 22.3208955,3.29104478 23.6791045,5.29850746 C24.3059701,6.20895522 25.3432836,6.76865672 26.4552239,6.76865672 C27.119403,6.76865672 27.7761194,6.57462687 28.3208955,6.19402985 C29.261194,5.57462687 30.3656716,5.24626866 31.5,5.24626866 C33.5746269,5.24626866 35.5,6.37313433 36.5223881,8.19402985 C37.1268657,9.29850746 38.2686567,9.97014925 39.5223881,9.97014925 C39.8432836,9.97014925 40.1641791,9.92537313 40.4701493,9.84328358 C40.9029851,9.71641791 41.3656716,9.64925373 41.8134328,9.64925373 C41.9253731,9.64925373 42.0298507,9.64925373 42.1492537,9.65671642 C44.4850746,9.82089552 46.4328358,11.7761194 46.5746269,14.119403 C46.6567164,15.4626866 46.2014925,16.7313433 45.2835821,17.7014925 Z M57.9179104,42.141791 C57.9179104,48.619403 52.880597,53.9552239 46.5149254,54.4179104 L46.5149254,29 L50.2985075,29 C54.5,29 57.9253731,32.4253731 57.9253731,36.6343284 L57.9179104,42.141791 Z",transform:"translate(0 .819)"});function A(e,t){var n=e.title,r=e.titleId,l=I(e,["title","titleId"]);return a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:60,height:67,viewBox:"0 0 60 67",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,S)}var F=a.forwardRef(A);n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z=a.createElement("path",{d:"M29.5068493,27.369863 C21.4383562,23.4041096 6.40410959,16.0616438 1.5890411,13.7260274 C0.746575342,13.3219178 0.0684931507,13.7465753 0.0684931507,14.6780822 L0.0684931507,41.8150685 C0.0684931507,42.7465753 0.821917808,43.5068493 1.75342466,43.5068493 L58.2328767,43.5068493 C59.1643836,43.5068493 59.9246575,42.7534247 59.9246575,41.8219178 L59.9246575,14.7123288 C59.9246575,13.7808219 59.2465753,13.3561644 58.4109589,13.7671233 C53.630137,16.109589 38.7671233,23.4246575 30.8013699,27.3767123 C30.3219178,27.6164384 29.9657534,27.5958904 29.5068493,27.369863 Z M7.98630137,11.6575342 C15.1917808,15.1849315 22.3972603,18.7191781 29.609589,22.2260274 C29.8835616,22.3630137 30.3150685,22.4041096 30.5821918,22.2739726 C40.2260274,17.5410959 49.8561644,12.7739726 59.4931507,8.02739726 C59.8424658,7.85616438 59.9657534,7.65753425 59.9657534,7.25342466 C59.9520548,5.84931507 59.9657534,3.36986301 59.9726027,1.71232877 C59.9726027,0.780821918 59.2123288,0.0205479452 58.2808219,0.0205479452 L1.73287671,0.0205479452 C0.801369863,0.0205479452 0.0342465753,0.773972603 0.0342465753,1.71232877 C0.0342465753,3.37671233 0.0479452055,5.8630137 0.0684931507,7.32191781 C0.0753424658,7.55479452 0.328767123,7.89041096 0.547945205,8 C3.02054795,9.23972603 5.50684932,10.4383562 7.98630137,11.6575342 Z",transform:"translate(0 .736)"});function J(e,t){var n=e.title,r=e.titleId,l=R(e,["title","titleId"]);return a.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:60,height:45,viewBox:"0 0 60 45",ref:t,"aria-labelledby":r},l),n?a.createElement("title",{id:r},n):null,z)}var q=a.forwardRef(J),H=(n.p,n(471),C.a.Content),V=C.a.Sider,W=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(13)]).then(n.bind(null,514))})),G=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(11)]).then(n.bind(null,511))})),K=Object(a.lazy)((function(){return n.e(17).then(n.bind(null,499))})),Q=Object(a.lazy)((function(){return n.e(18).then(n.bind(null,500))}));t.default=function(e){var t=e.url,n=new i.a({supportedChainIds:[1,3]}),f=Object(c.c)(),b=f.account,m=f.activate,j=f.active,h=f.error;return Object(a.useEffect)((function(){var e=h instanceof i.c,t=h instanceof i.b;h instanceof c.a?u.b.error({content:"Please connect to main network",duration:3,className:"message-error"}):t?u.b.error({content:"Metamask not found",duration:3,className:"message-error"}):e&&u.b.error({content:"Cannot connect to metamask",duration:3,className:"message-error"})}),[h]),Object(r.jsxs)(C.a,{className:"Lab",children:[Object(r.jsxs)(V,{breakpoint:"lg",collapsedWidth:"60",width:200,className:"Lab__sider",children:[Object(r.jsx)("div",{className:"Lab__account",children:j?Object(r.jsxs)("div",{className:"Lab__account__user",children:[Object(r.jsx)(p.a,{className:"Lab__account__icon"}),Object(r.jsx)("h5",{children:Object(s.e)(b,15,"...")})]}):Object(r.jsxs)("button",{className:"Btn Btn--primary Lab__account__btn",onClick:function(){return m(n)},children:[Object(r.jsx)(d,{className:"Lab__menu__icon Lab__menu__icon--metamask"})," ",Object(r.jsx)("span",{className:"Lab__menu__text",children:"Connect to metamask"})]})}),Object(r.jsxs)("div",{className:"Lab__menu",children:[Object(r.jsxs)(l.c,{to:"".concat(t),isActive:function(e){return!(!e||!e.isExact)},className:"Lab__menu__item",children:[Object(r.jsx)(v,{className:"Lab__menu__icon"})," ",Object(r.jsx)("span",{className:"Lab__menu__text",children:"Dashboard"})]}),Object(r.jsxs)(l.c,{to:"".concat(t,"/products"),isActive:function(e){return!!e},className:"Lab__menu__item",children:[Object(r.jsx)(E,{className:"Lab__menu__icon"})," ",Object(r.jsx)("span",{className:"Lab__menu__text",children:"Products"})]}),Object(r.jsxs)(l.c,{to:"".concat(t,"/stake"),isActive:function(e){return!!e},className:"Lab__menu__item",children:[Object(r.jsx)(P,{className:"Lab__menu__icon"})," ",Object(r.jsx)("span",{className:"Lab__menu__text",children:"Stake"})]}),Object(r.jsxs)(l.c,{to:"".concat(t,"/propose"),isActive:function(e){return!!e},className:"Lab__menu__item",children:[Object(r.jsx)(F,{className:"Lab__menu__icon"})," ",Object(r.jsx)("span",{className:"Lab__menu__text",children:"Propose"})]}),Object(r.jsxs)(l.c,{to:"".concat(t,"/vote"),isActive:function(e){return!!e},className:"Lab__menu__item",children:[Object(r.jsx)(q,{className:"Lab__menu__icon"})," ",Object(r.jsx)("span",{className:"Lab__menu__text",children:"Vote"})]})]})]}),Object(r.jsx)(C.a,{className:"Lab__content__wrapper",children:Object(r.jsxs)(H,{className:"Lab__content",children:[Object(r.jsx)(o.a,{exact:!0,path:t,children:Object(r.jsx)("h3",{children:"Home"})}),Object(r.jsx)(o.a,{path:"".concat(t,"/products"),children:Object(r.jsx)(W,{url:t})}),Object(r.jsx)(o.a,{path:"".concat(t,"/stake"),children:Object(r.jsx)(G,{url:t})}),Object(r.jsx)(o.a,{exact:!0,path:"".concat(t,"/propose"),children:Object(r.jsx)(K,{})}),Object(r.jsx)(o.a,{exact:!0,path:"".concat(t,"/vote"),children:Object(r.jsx)(Q,{})})]})})]})}}}]);
//# sourceMappingURL=14.7af44059.chunk.js.map