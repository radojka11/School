if(!this.JSON){this.JSON={};JSON.parse=function(t){return eval("("+t+")")}}CFG={ajaxlogin:"/login.do",ckssn:"ssn29",ckvis:"vis29",ckal:"rel29",ssnttl:14400,ssnmax:84600};function bindFunction(b,c){return function(){return c.apply(b,arguments)}}function cloneData(d){if((d==null)||(typeof(d)!="object")){return d}var c=d.constructor();for(var b in d){if(d.hasOwnProperty(b)){c[b]=cloneData(d[b])}}return c}function T(b){if((typeof(ST)!="undefined")&&(ST[b])){return ST[b]}else{return b}}function When(c){var d=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");var b=new Date(c*1000);document.write(d[b.getMonth()]+" "+b.getDate()+", "+(b.getYear()+(b.getYear()<1900?1900:0)));document.write(" at "+((b.getHours()%12)==0?12:b.getHours()%12)+":"+(b.getMinutes()<10?"0":"")+b.getMinutes()+(b.getHours()<12?"am":"pm"))}function WhenId(c){var d=document.getElementById(c);var f=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");var e=new Date(Date.parse(d.title));var b=f[e.getMonth()]+" "+e.getDate()+", "+(e.getYear()+(e.getYear()<1900?1900:0));b+=" at "+((e.getHours()%12)==0?12:e.getHours()%12)+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()+(e.getHours()<12?"am":"pm");d.innerHTML=b}function WhenAll(){var c=document.getElementsByTagName("span");for(var b=0;b<c.length;b++){if(c[b].id.substr(0,6)=="CH_zTm"){WhenId(c[b].id)}}}function btn(h,g,e,c,d){el=document.createElement("span");var b=new String;if(e){b='<b class="C_ico '+e+'"></b>'+h}var f=' class="C_btn'+(d?" "+d:"")+'"'+(g?' title="'+(g)+'"':"");if(c){b='<a href="'+c+'"'+f+">"+b+"</a>"}else{b="<span"+f+">"+b+"</span>"}el.innerHTML=b;return el}function urlUser(b){return httpprofile+b.replace(" ","_")+"/"}function cookieGet(d){var c=document.cookie;var f=d+"=";var e=c.indexOf("; "+f);if(e==-1){e=c.indexOf(f);if(e!=0){return null}}else{e+=2}var b=document.cookie.indexOf(";",e);if(b==-1){b=c.length}var g=decodeURIComponent(c.substring(e+f.length,b));return g}function cookieSet(b,c){document.cookie=b+"="+encodeURIComponent(c)+"; path=/"}function xhrRequest(){var b;if(window.XMLHttpRequest){b=new XMLHttpRequest()}else{if(window.ActiveXObject){try{b=new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(c){try{b=new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}}}}return b}function xhrAsync(d,g,h){var f=xhrRequest();if(f){f.open(h?"POST":"GET",d,true);f.onreadystatechange=function(){if(f.readyState==4){if(f.status==200){g(f.responseText)}}};if(h){var c=new Array();for(var e=0;e<h.length;e++){if(((h[e].type=="checkbox")||(h[e].type=="radio"))&&(!h[e].checked)){}else{if(h[e]){c.push(escape(h[e].name)+"="+encodeURIComponent(h[e].value))}}}var b=c.join("&");f.setRequestHeader("Content-type","application/x-www-form-urlencoded");f.send(b)}else{f.send()}}return f}function domIdContent(b,c){if(document.getElementById(b)){document.getElementById(b).innerHTML=c;return true}else{return false}}function domByClass(e,g){if(e.getElementsByClassName){return e.getElementsByClassName(g)}var b=new Array();var f=" "+g+" ";if(e.hasChildNodes){for(var d=0;d<e.childNodes.length;++d){var h=" "+e.childNodes[d].className+" ";if(h.indexOf(f)!=-1){b.push(e.childNodes[d])}else{if(e.childNodes[d].hasChildNodes){b=b.concat(domByClass(e.childNodes[d],g))}}}}return b}function domByClassFirst(e,g){if(e.getElementsByClassName){return e.getElementsByClassName(g)[0]}var f=" "+g+" ";if(e.hasChildNodes){for(var d=0;d<e.childNodes.length;++d){var h=" "+e.childNodes[d].className+" ";if(h.indexOf(f)!=-1){return e.childNodes[d]}else{if(e.childNodes[d].hasChildNodes){var b=domByClassFirst(e.childNodes[d],g);if(b){return b}}}}}return null}function bbTag(c,d){if(c.setSelectionRange){c.value=c.value.substring(0,c.selectionStart)+"["+d+"]"+c.value.substring(c.selectionStart,c.selectionEnd)+"[/"+d+"]"+c.value.substring(c.selectionEnd,c.value.length)}else{if(document.selection&&document.selection.createRange){c.focus();var b=document.selection.createRange();b.text="["+d+"]"+b.text+"[/"+d+"]"}else{c.value+="["+d+"][/"+d+"]"}}}function BBEdit(elParent,fields,action,hiddens,onOk,onCancel){this.action=action;this.onOk=onOk;this.onCancel=(typeof(onCancel)!="undefined"?onCancel:onOk);if(!BBEdit.count){BBEdit.count=0}BBEdit.count++;this.objName="editbox"+BBEdit.count;eval(this.objName+"=this;");var txt=new String();txt+='<form name="CH_fedit" action="'+action+'" method="post" onsubmit="return false;"><table>';txt+='<tr><td><textarea name="content" cols="80" rows="15" onfocus="'+this.objName+'.editCount()" onkeydown="'+this.objName+'.editCount()" onkeyup="'+this.objName+'.editCount()"></textarea></td>';txt+="<td><i>"+T("Format")+":</i><br><br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'code\')"><img src="/ico/text_code.png" width="16" height="16" alt="code" title="'+T("Source code")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'output\')"><img src="/ico/text_output.png" width="16" height="16" alt="output" title="'+T("Program output")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'quote\')"><img src="/ico/text_quote.png" width="16" height="16" alt="quote" title="'+T("Quotation")+'"></a>';txt+="<br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'b\')"><img src="/ico/text_b.png" width="16" height="16" alt="bold" title="'+T("Bold")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'i\')"><img src="/ico/text_i.png" width="16" height="16" alt="italics" title="'+T("Italics")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'u\')"><img src="/ico/text_u.png" width="16" height="16" alt="underline" title="'+T("Underline")+'"></a>';txt+="<br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'center\')"><img src="/ico/text_center.png" width="16" height="16" alt="center" title="'+T("Center")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'s\')"><img src="/ico/text_s.png" width="16" height="16" alt="striketrhough" title="'+T("Strikethrough")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'tt\')"><img src="/ico/text_tt.png" width="16" height="16" alt="teletype" title="'+T("Teletype (fixed font)")+'"></a>';txt+="<br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'small\')"><img src="/ico/text_small.png" width="16" height="16" alt="small" title="'+T("Small font")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'sub\')"><img src="/ico/text_sub.png" width="16" height="16" alt="subscript" title="'+T("Subscript")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'sup\')"><img src="/ico/text_sup.png" width="16" height="16" alt="superscript" title="'+T("Superscript")+'"></a>';txt+="<br>";txt+="</td>";txt+="</tr>";txt+='<tr><td colspan="2">Length: <input readonly type="text" name="CH_edtCount" size="4" maxlength="4" style="text-align:right; background-color:#E0E0E0" value=""> '+T("(max=8192)");txt+=' &nbsp; &nbsp; <span id="I_feditholder"></span>';for(var k in hiddens){txt+='<input type="hidden" name="'+k+'" value="'+hiddens[k]+'">'}txt+=' <input type="hidden" name="y" value="1">';txt+="</td></tr></table></form>";txt+='<form name="CH_prevpost" action="'+action+'" target="previewing" method="post"><input type="hidden" name="content" value=""><input type="hidden" name="w" value="preview"></form>';this.el=document.createElement("div");this.el.innerHTML=txt;elParent.appendChild(this.el);var holder=this.el.getElementsByTagName("span")[0];holder.appendChild(btn("Preview","Preview message","eye","javascript:"+this.objName+".editPreview()"));holder.appendChild(btn("Submit","Submit","ok","javascript:"+this.objName+".editSend()"));holder.appendChild(btn("Cancel","Cancel","cancel","javascript:"+this.objName+".editCancel()"));this.elForm=this.el.firstChild;this.elContent=this.elForm.getElementsByTagName("textarea")[0];this.elCount=this.elForm.getElementsByTagName("input")[0];this.elPrevForm=this.el.getElementsByTagName("form")[1];this.elPrevContent=this.elPrevForm.getElementsByTagName("input")[0];this.elContent.focus();if(typeof(fields.content)!="undefined"){this.elContent.value=fields.content}}BBEdit.prototype.editCount=function(){this.elCount.value=this.elContent.value.length};BBEdit.prototype.editTag=function(d){var c=this.elContent;if(c.setSelectionRange){c.value=c.value.substring(0,c.selectionStart)+"["+d+"]"+c.value.substring(c.selectionStart,c.selectionEnd)+"[/"+d+"]"+c.value.substring(c.selectionEnd,c.value.length)}else{if(document.selection&&document.selection.createRange){c.focus();var b=document.selection.createRange();b.text="["+d+"]"+b.text+"[/"+d+"]"}else{c.value+="["+d+"][/"+d+"]"}}};BBEdit.prototype.editCancel=function(){this.el.parentNode.removeChild(this.el);this.onCancel()};BBEdit.prototype.editPreview=function(){this.elPrevContent.value=this.elContent.value;this.elPrevForm.submit()};BBEdit.prototype.editSend=function(){var b=bindFunction(this,function(c){this.el.parentNode.removeChild(this.el);this.onOk(c)});xhrAsync(this.action,b,this.elForm.elements);this.el.innerHTML="Sending. Please wait..."};function onPrint(c,e,b){if(typeof(onPrint.register)=="undefined"){onPrint.register=new Array()}var d=new onPrint_Callback(c,e);if(b){d.args=Array.prototype.slice.call(arguments,2)}onPrint.register.push(d);d.invoke();return d}onPrint.print=function(){onPrint.printed=true;if(typeof(onPrint.register)!="undefined"){for(var b=0;b<onPrint.register.length;b++){onPrint.register[b].invoke()}}};function onPrint_Callback(b,c){this.fn=b;this.obj=c}onPrint_Callback.prototype.invoke=function(){if(typeof(onPrint.printed)=="undefined"){return}if(this.args){this.fn.apply(this.obj,this.args)}else{if(this.obj){this.fn.call(this.obj)}else{this.fn()}}};function onSession(c,e,b){if(typeof(onSession.register)=="undefined"){onSession.register=new Array()}var d=new onSession_Callback(c,e);if(b){d.args=Array.prototype.slice.call(arguments,2)}onSession.register.push(d);d.invoke();return d}onSession.imbue=function(c){onSession.session=c;if(typeof(onSession.register)!="undefined"){for(var b=0;b<onSession.register.length;b++){onSession.register[b].invoke()}}};function onSession_Callback(b,c){this.fn=b;this.obj=c}onSession_Callback.prototype.invoke=function(){if(typeof(onSession.session)=="undefined"){return}if(this.args){var b=this.args;b.splice(0,0,onSession.session);this.fn.apply(this.obj,b)}else{if(this.obj){this.fn.call(this.obj,onSession.session)}else{this.fn(onSession.session)}}};function Session(){this.sessionid="";this.userid=0;this.access=0;this.visited=0;this.seen=0;this.last=0;this.npms=0;this.uniqid="";this.user="";this.ok=false;this.autoArray=new Array();this.setFromCookie(CFG.ckssn,CFG.ckal,CFG.ssnttl,CFG.ssnmax);global_session=this}Session.prototype.doInit=function(){var b=this;onSession.imbue(b)};Session.prototype.setFromCookie=function(g,f,d,b){var e=cookieGet(g);if((typeof e=="string")&&(e.length>0)){var h=new Array();var c=0;this.sessionid=e.substring(c,c+=16);this.userid=parseInt(e.substring(c,c+=8),16);this.access=parseInt(e.substring(c,c+=8),16);this.visited=parseInt(e.substring(c,c+=8),16);this.seen=parseInt(e.substring(c,c+=8),16);this.last=parseInt(e.substring(c,c+=8),16);this.npms=parseInt(e.substring(c,c+=8),16);this.uniqid=e.substring(c,c+=8);this.user=new String();while(c<e.length-1){if(e.substring(c,c+2)=="00"){break}else{this.user+=unescape("%"+e.substring(c,c+=2))}}this.ok=(this.user.length>0)}if(!this.ok){e=cookieGet(f);if((typeof e=="string")&&(e.length>0)){xhrAsync(CFG.ajaxlogin+"?w=auto",bindFunction(this,this.setFromCookieXHR));return}}this.doInit()};Session.prototype.setFromCookieXHR=function(d){var b=new Object();try{b=JSON.parse(d)}catch(c){b.success=false}if(b.success){this.set(b)}};Session.prototype.set=function(b){if(b.user){this.sessionid=b.sessionid;this.userid=b.userid;this.access=b.access;this.visited=b.visited;this.seen=b.seen;this.last=b.last;this.uniqid=b.uniqid;this.user=b.user;this.npms=b.npms}else{this.sessionid="";this.userid=0;this.access=0;this.visited=0;this.seen=0;this.last=0;this.uniqid="";this.user="";this.npms=0}this.ok=(b.user.length>0);this.doInit()};Session.prototype.auth=function(d,b){if((typeof(b)!="undefined")&&(b==this.userid)){return true}if(typeof(d)=="string"){var c={admin:32768,member:2,post:64,report:32,filter:512,approve:1024};bm=c[d]}else{bm=d}if((bm)&&((this.access&bm)==bm)){return true}else{return false}};function LoginBox(elid,bAjax,redirto){this.elid=elid;this.ajax=bAjax;this.timeout=null;this.redirto=(redirto)?redirto:window.location.href;this.objName="el"+elid;eval(this.objName+"=this;");this.cb_drawBox=onSession(this.drawBox,this);this.elcorner=false;this.elfold=false;this.elmsg=false;this.elform=false}LoginBox.prototype.httpaccess="/user/access.cgi";LoginBox.prototype.drawBox=function(d){this.session=d;if(this.timeout){clearTimeout(this.timeout);this.timeout=null}if(!this.elcorner){this.elcorner=document.createElement("div");this.elcorner.id="I_corner";document.getElementById(this.elid).appendChild(this.elcorner);var c=document.createElement("div");c.id="I_userbuttons";document.getElementById(this.elid).appendChild(c)}if(!this.elfold){this.elfold=document.createElement("div");this.elfold.id="I_fold";this.elfold.style.display="none";var b=new String("");b+='<div class="deco"></div>';b+='<form name="I_loginform" id="I_loginform" action="'+this.httpaccess+'"'+(this.ajax?' onsubmit="'+this.objName+'.login(); return false;"':"")+' method="post">';b+='<div class="fields">';b+='<input type="hidden" name="w" value="login"><input type="hidden" name="y" value="1"><input type="hidden" name="to" value="'+this.redirto.replace('"',"")+'">';b+='user name: <input class="txt" name="l" size="8" type="text" title="Type user name"><br>';b+='password: <input class="txt" name="p" size="8" type="password" title="Type password"><br>';b+='<input class="chk" name="rememberme" id="rememberme" value="1" type="checkbox"><label for="rememberme">remember me</label>&nbsp;';b+='<input class="btn" value="sign in" type="submit"><br>';b+='<div class="forgot"><a href="'+this.httpaccess+'?w=lostpass">forgot your password?</a></div>';b+="</div>";b+='<div class="openid">or sign in using:<br>';b+='<a class="google" href="'+this.httpaccess+"?w=login&y=1&pr=google&to="+encodeURIComponent(window.location.pathname)+'" title="Sign in using your google account"><span></span></a>';b+='<a class="yahoo" href="'+this.httpaccess+"?w=login&y=1&pr=yahoo&to="+encodeURIComponent(window.location.pathname)+'" title="Sign in using your Yahoo! account"><span></span></a>';b+=" </div>";b+="</form>";b+='<div id="I_loginwait"></div>';b+='<div id="I_loginfail">';b+='<div id="I_loginfailtext"></div>';b+='<a class="C_bRepeat" href="javascript:'+this.objName+'.modal(1)">try again</a>';b+='<a class="C_bCancel" href="javascript:'+this.objName+'.modal(0)">cancel</a>';b+='<div class="forgot"><a href="'+this.httpaccess+'?w=lostpass">forgot your password?</a></div>';b+="</div>";b+='<div class="close"><a href="javascript:'+this.objName+'.modal(0)" title="cancel log in"><span></span></a></div>';this.elfold.innerHTML=b;document.getElementById(this.elid).appendChild(this.elfold);this.elform=document.getElementById("I_loginform");this.elwait=document.getElementById("I_loginwait");this.elfail=document.getElementById("I_loginfail");this.elfailtext=document.getElementById("I_loginfailtext");this.modal(0)}var b=new String("");if(d.ok){b+='<div id="I_cornerinner"><div id="I_userid">';if((d.npms>0)&&(d.npms!=1000000)){b+='<div><a href="/user/pm.cgi" title="You have '+d.npms+' new PMs"><span class="C_ico mailnew"></span> '+d.npms+"</a></div>"}b+="<div>Logged in as: <b>"+d.user+"</b></div>";b+="</div></div>";b+='<form name="I_logoutform" id="I_logoutform" action="'+this.httpaccess+'"'+(this.ajax?' onsubmit="'+this.objName+'.logout(); return false;"':"")+' method="post">';b+='<input type="hidden" name="w" value="logout"><input type="hidden" name="y" value="1"><input type="hidden" name="to" value="'+this.redirto.replace('"',"")+'">';b+="</form>";document.getElementById("I_userbuttons").innerHTML='<a href="/user/">Account</a><a id="I_btnlogout" href="javascript:'+this.objName+'.logout();">logout</a>'}else{b+='<div id="I_cornerinner"><div id="I_userid">Not logged in</div></div>';document.getElementById("I_userbuttons").innerHTML='<a href="/user/access.cgi?w=signup">register</a><a id="I_btnlogin" href="javascript:'+this.objName+'.modal(1)">log in</a>'}this.elcorner.innerHTML=b};LoginBox.prototype.modal=function(b){this.elform.style.display=(b==1?"block":"none");this.elwait.style.display=(b==2?"block":"none");this.elfail.style.display=(b==3?"block":"none");this.elfold.style.display=(b?"block":"none");this.elcorner.style.display=(b?"none":"block");if(b==1){this.elform.l.focus()}};LoginBox.prototype.login=function(){this.elwait.innerHTML='<div class="loginmessage"><b>logging in</b><br><img src="/img/progress.gif" width="286" height="20"><br>please wait</div>';this.elfailtext.innerHTML="Login timeout";this.timeout=setTimeout(this.objName+".modal(3)",30000);xhrAsync(CFG.ajaxlogin,bindFunction(this,this.loginoutXHR),this.elform.elements)};LoginBox.prototype.loginoutXHR=function(c){var b=new Object();try{b=JSON.parse(c)}catch(d){b.success=false}this.elform.reset();if(b.success){this.modal(0);this.session.set(b)}else{this.elfailtext.innerHTML="Bad user name or password";this.modal(3)}};LoginBox.prototype.logout=function(){if(!this.ajax){document.getElementById("I_logoutform").submit();return}this.elwait.innerHTML='<div class="loginmessage"><b>logging out</b><br><img src="/img/progress.gif" width="286" height="20"><br>please wait</div>';this.timeout=setTimeout('"'+this.objName+'.modal(0)"',30000);xhrAsync(CFG.ajaxlogin,bindFunction(this,this.loginoutXHR),document.getElementById("I_logoutform").elements)};function usr_Menu(c,e,b,d){this.elid=c;this.scr=e;this.httpuser=b;this.accessuseradmin=d;onSession(this.drawUBox,this)}usr_Menu.prototype.drawUBox=function(b){st='<table class="box">';if(b.ok){st+='<tr><th><a href="'+this.httpuser+'account.cgi">'+b.user+"</a></th></tr>";if(this.scr=="account.cgi"){st+='<tr><td class="selected">My account</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'account.cgi">My account</a></td></tr>'}if(this.scr=="profile.cgi"){st+='<tr><td class="selected">My profile</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'profile.cgi">My profile</a></td></tr>'}if(this.scr=="pm.cgi"){st+='<tr><td class="selected">Private Messages ('+b.npms+")</td></tr>"}else{st+='<tr><td><a href="'+this.httpuser+'pm.cgi">Private Messages</a> ('+b.npms+")</td></tr>"}if(b.auth(this.accessuseradmin)){st+='<tr><td class="folder">Admin options:</td></tr>';if(this.scr=="admin.cgi"){st+='<tr><td class="indent selected">Admin</td></tr>'}else{st+='<tr><td class="indent"><a href="'+this.httpuser+'admin.cgi">Admin</a></td></tr>'}}}else{st+='<tr><th><a href="'+this.httpuser+'">Users</a></th></tr>';if(this.scr=="signup.cgi"){st+='<tr><td class="selected">Create account</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'signup.cgi">Create account</a></td></tr>'}if(this.scr=="lostpass.cgi"){st+='<tr><td class="selected">Lost password</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'lostpass.cgi">Lost password</a></td></tr>'}}st+="</table>";document.getElementById(this.elid).innerHTML=st};function Score(parentid,httpscore,unique){this.parentid=parentid;this.httpscore=httpscore;this.unique=unique;this.el=document.createElement("div");this.el.className="C_Score";this.elTop=document.createElement("div");this.elTop.className="top";this.el.appendChild(this.elTop);this.elBot=document.createElement("div");this.elBot.className="bot";this.el.appendChild(this.elBot);this.elVote=document.createElement("div");this.elVote.className="vote";this.el.appendChild(this.elVote);this.objName="score"+unique;eval(this.objName+"=this;");document.getElementById(this.parentid).appendChild(this.el);onSession(this.onSession,this)}Score.prototype.alts=new Array("not rated","poor","weak","normal","great","recommended");Score.prototype.onSession=function(b){this.session=b;xhrAsync(this.httpscore+"?w=get&uq="+this.unique,bindFunction(this,this.drawVoteXHR))};Score.prototype.drawVoteXHR=function(g){try{ret=JSON.parse(g)}catch(h){return}var j;if(ret.success){j=ret.score}if(isNaN(j)){j=0}var c,f;if(j){if((this.session.ok)&&(j!=-1)){c="Change your rating:";f="You rated this with "+j+" star"+(j!=1?"s":"")+" ("+this.alts[j]+")"}else{c="Rate this article";f="You have already rated this."}}else{c="Rate this";f="Please, choose stars to award:"}this.elTop.innerHTML=c;this.elBot.innerHTML=f;if((this.session.ok)||(!j)){var b=new String("");for(var d=1;d<=5;d++){b+='<img src="/ico/24star.png" alt="*" width="24" height="24" id="CH_Star'+this.unique+"_"+d+'" title="'+d+" star"+(d!=1?"s":"")+": "+this.alts[d]+'" onmouseover="'+this.objName+".updateStars("+d+',true)" onmouseout="'+this.objName+".updateStars("+j+',false)" onclick="'+this.objName+".submitVote("+d+')">'}this.elVote.innerHTML=b+"<br>(hover mouse and click)"}else{this.elVote.innerHTML="Please, log in to change your current rating, or sign up to create a new account."}this.updateStars(j,false)};Score.prototype.submitVote=function(b){this.elBot.innerHTML="Thanks for your feedback";this.elVote.innerHTML='<img src="/ico/progress.gif"><br>... Please wait ...';xhrAsync(this.httpscore+"?w=vote&uq="+this.unique+"&q="+b,bindFunction(this,this.drawVoteXHR))};Score.prototype.updateStars=function(d,b){for(var c=1;c<=5;c++){if(elStar=document.getElementById("CH_Star"+this.unique+"_"+c)){if(c<=d){if(b){elStar.src="/ico/24star.png"}else{elStar.src="/ico/24star-gray.png"}}else{elStar.src="/ico/24star-empty.png"}}}};function for_ThreadList(elid,cookiename,now,httpbookmark){this.threadlistcookiename=cookiename;this.now=now;this.httpbookmark=httpbookmark;this.thids=new Array();this.thtms=new Array();this.objName="threadlist";eval(this.objName+"=this;");var el=document.getElementById(elid);if((el)&&(el.hasChildNodes)){for(var i=0;i<el.childNodes.length;++i){if((" "+el.childNodes[i].className+" ").indexOf("C_forThread")!=-1){if(el.childNodes[i].hasChildNodes()){var data=el.childNodes[i].firstChild.title.split(",");this.thids.push(data[0]);this.thtms.push(data[1])}}}}if(cookiename){this.cb_drawNewLabels=onSession(this.drawNewLabels,this)}if(httpbookmark){onSession(this.drawBookmarks,this)}}for_ThreadList.prototype.drawNewLabels=function(d){this.vids=new Array();this.vtms=new Array();var e=cookieGet(this.threadlistcookiename);if(e){for(c=0;c<e.length-15;c+=16){this.vids.push(parseInt(e.substring(c,c+8),16));this.vtms.push(parseInt(e.substring(c+8,c+16),16))}}for(var c=0;c<this.thids.length;++c){seen=true;if((d.ok)&&(d.visited>0)&&(this.thtms[c]>d.last)){seen=false;for(var b=0;b<this.vids.length;b++){if((this.thids[c]==this.vids[b])&&(this.vtms[b]>=this.thtms[c])){seen=true}}}document.getElementById("CH_new"+this.thids[c]).innerHTML=(seen?"":'<img src="/img/new.gif" border="0" alt="New post! (click to mark as read)" title="New post! (click to mark as read)" onclick="'+this.objName+".mark("+this.thids[c]+')">')}};for_ThreadList.prototype.mark=function(c){var e=cookieGet(this.threadlistcookiename);if(!e){e=""}var d=c.toString(16);while(d.length<8){d="0"+d}var b=this.now.toString(16);while(b.length<8){b="0"+b}e+=d+b;cookieSet(this.threadlistcookiename,e);this.cb_drawNewLabels.invoke()};for_ThreadList.prototype.drawBookmarks=function(b){xhrAsync(this.httpbookmark+"?w=get&tt="+this.thids.join("+"),bindFunction(this,this.drawBookmarksXHR))};for_ThreadList.prototype.drawBookmarksXHR=function(c){try{var b=JSON.parse(c)}catch(d){return}if(b.success){for(i=0;i<b.data.length;i++){this.drawOneBookmark(b.data[i])}}else{for(i=0;i<this.thids.length;++i){this.drawOneBookmark({threadid:this.thids[i]})}}return};for_ThreadList.prototype.drawOneBookmark=function(b){document.getElementById("CH_thread"+b.threadid).className=b.participated?"box participated":"box";document.getElementById("CH_icos"+b.threadid).innerHTML="";document.getElementById("CH_bm"+b.threadid).innerHTML="";icos="";el=document.getElementById("CH_bm"+b.threadid);if(b.participated){document.getElementById("CH_thread"+b.threadid).className="box participated";document.getElementById("CH_thread"+b.threadid).title="You have participated in this topic"}if(b.notify){el.appendChild(btn("Unsubscribe","Remove subscription","mailno","javascript:"+this.objName+".bookmark("+b.threadid+",-1)"))}if(b.bookmark){el.appendChild(btn("Remove","Remove bookmark","bookmark","javascript:"+this.objName+".bookmark("+b.threadid+",-1)"))}document.getElementById("CH_icos"+b.threadid).innerHTML=icos};for_ThreadList.prototype.bookmark=function(c,b){document.getElementById("CH_bm"+c).innerHTML="Please wait...";xhrAsync(this.httpbookmark+"?w=bookmark&t="+c+"&q="+b,bindFunction(this,this.drawBookmarksXHR))};function for_PostList(threadid,threadarchived,threadauthor,threadsolved,elidPosts,elidSubscription,elidReply,elidInsNew,elidAuthor,httpthreads,httpposts,httpbookmark,accesspost,accessreport,accessfilter,accesstrusted,accessmod,accessbookmark){this.threadid=threadid;this.threadarchived=threadarchived;this.threadauthor=threadauthor;this.threadsolved=threadsolved;this.elidPosts=elidPosts;this.elidSubscription=elidSubscription;this.elidReply=elidReply;this.elidInsNew=elidInsNew;this.elidAuthor=elidAuthor;this.httpthreads=httpthreads;this.httpposts=httpposts;this.httpbookmark=httpbookmark;this.accesspost=accesspost;this.accessfilter=accessfilter;this.accesstrusted=accesstrusted;this.accessmod=accessmod;this.accessbookmark=accessbookmark;this.objName="thread"+threadid;eval(this.objName+"=this;");if(elidPosts){var elPosts=new Array();var el=document.getElementById(elidPosts);if((el)&&(el.hasChildNodes)){for(var i=0;i<el.childNodes.length;++i){if((" "+el.childNodes[i].className+" ").indexOf("C_forPost")!=-1){elPosts.push(el.childNodes[i])}}}for(i=0;i<elPosts.length;i++){if((i==elPosts.length-1)&&(elidReply)){new for_Post(elPosts[i],httpposts,accesspost,accessreport,accessfilter,accesstrusted,accessmod,threadarchived,true)}else{new for_Post(elPosts[i],httpposts,accesspost,accessreport,accessfilter,accesstrusted,accessmod,threadarchived)}}}if(elidSubscription){this.elSubscription=document.getElementById(elidSubscription);onSession(this.drawSubscription,this)}if(elidReply){this.elReply=document.getElementById(this.elidReply);this.originalReply=this.elReply.innerHTML;this.cb_drawReply=onSession(this.drawReply,this)}if((!this.threadarchived)&&(this.elidAuthor)){this.cb_drawAuthorOptions=onSession(this.drawAuthorOptions,this)}}for_PostList.prototype.drawAuthorOptions=function(c){var b=document.getElementById(this.elidAuthor);if(!b){return}while(b.hasChildNodes()){b.removeChild(b.lastChild)}if((this.threadarchived)&&(!c.auth(this.accessmod))){return}if(c.auth(this.accessmod)||(c.userid==this.threadauthor)){b.appendChild(btn("Edit topic","Edit this topic","edit",this.httpthreads+"?w=edit&t="+this.threadid));if(this.threadsolved){b.appendChild(btn("Remove solved","Removed solved mark","delete","javascript:"+this.objName+".solved(0)"))}else{b.appendChild(btn("Mark as solved","Mark this topic as solved","solved","javascript:"+this.objName+".solved(1)"))}}};for_PostList.prototype.solved=function(b){xhrAsync(this.httpthreads+"?w=solved&t="+this.threadid+"&n="+b,bindFunction(this,this.solvedXHR))};for_PostList.prototype.solvedXHR=function(d){try{var b=JSON.parse(d)}catch(c){alert(d);return}if(b.success){this.threadsolved=b.solved;this.cb_drawAuthorOptions.invoke();window.location.href=window.location.href}};for_PostList.prototype.drawReply=function(b){if((!this.threadarchived)&&(b.auth(this.accesspost))){while(this.elReply.hasChildNodes()){this.elReply.removeChild(this.elReply.lastChild)}this.elButton=this.elReply.appendChild(btn("Reply","Post a new reply","postreply","javascript:"+this.objName+".reply()"))}else{this.elReply.innerHTML=this.originalReply}};for_PostList.prototype.reply=function(){if(this.elButton){this.elButton.parentNode.removeChild(this.elButton);this.elButton=null}new BBEdit(this.elReply,{content:""},this.httpposts,{w:"reply",t:this.threadid},bindFunction(this,this.replyXHR))};for_PostList.prototype.replyXHR=function(c){if(c){if(c.substr(0,5).toLowerCase()=="error"){alert(c);return}var b=document.createElement("div");b.innerHTML=c;b=document.getElementById(this.elidInsNew).appendChild(b);if(b.hasChildNodes){new for_Post(b.firstChild,this.httpposts,this.accesspost,this.accessreport,this.accessfilter,this.accesstrusted,this.accessmod,this.threadarchived,true)}}this.cb_drawReply.invoke();WhenAll()};for_PostList.prototype.drawSubscription=function(b){if((b.ok)&&(b.auth(this.accessbookmark))){this.elSubscription.innerHTML="Loading tracking options...";xhrAsync(this.httpbookmark+"?w=get&tt="+this.threadid,bindFunction(this,this.drawSubscriptionXHR))}else{this.elSubscription.innerHTML=""}};for_PostList.prototype.drawSubscriptionXHR=function(c){try{var b=JSON.parse(c)}catch(d){alert(c);return}if(b.success){data=b.data[0];tx='<form name="fm">Tracking options for this topic: <select name="bmk" onchange="'+this.objName+'.bookmark(fm.bmk.options[fm.bmk.selectedIndex].value,fm.bmk.options[fm.bmk.selectedIndex].text)">';tx+='<option value=""></option>';if(data.bookmark){tx+='<option value="-1">Remove bookmark</option>'}else{tx+='<option value="0">Bookmark (Add to "my topics" list)</option>'}if(data.notify){tx+='<option value="-1">Unsubscribe</option>'}else{if(!this.threadarchived){tx+='<option value="1">Subscribe (Receive an email on new replies)</option>'}}tx+="</select></form>";this.elSubscription.innerHTML=tx}};for_PostList.prototype.bookmark=function(c,b){if(confirm("Are you sure do you want to "+b+"?")){this.elSubscription.innerHTML="Please wait...";xhrAsync(this.httpbookmark+"?w=bookmark&t="+this.threadid+"&q="+c,bindFunction(this,this.drawSubscriptionXHR))}};function for_Post(el,httpcgi,accesspost,accessreport,accessfilter,accesstrusted,accessmod,threadarchived,lastpostinthread){this.el=el;this.httpcgi=httpcgi;this.accesspost=accesspost;this.accessreport=accessreport;this.accessfilter=accessfilter;this.accesstrusted=accesstrusted;this.accessmod=accessmod;this.threadarchived=threadarchived;this.lastpostinthread=lastpostinthread;this.parseHTML();this.objName="post"+this.postid;eval(this.objName+"=this;");this.cb_onSession=onSession(this.onSession,this)}for_Post.prototype.parseHTML=function(){if(this.el.hasChildNodes()){var b=this.el.firstChild.title.split(",");this.postid=b[0];this.author=b[1];this.authoraccess=b[2];this.authornposts=b[3];this.poststatus=b[4];this.eledtEdit=document.getElementById("CH_i"+this.postid);this.elButtons=document.getElementById("CH_btn"+this.postid)}};for_Post.prototype.onSession=function(d){var c=this.elButtons;if(c){while(c.hasChildNodes()){c.removeChild(c.lastChild)}if((this.threadarchived)&&(!d.auth(this.accessmod))){return}if(d.ok){if((d.auth(this.accessmod))||((d.auth(this.accesspost))&&(d.userid==this.author))){c.appendChild(btn("Edit","Edit post","edit","javascript:"+this.objName+".edit()","narrow"))}if(this.poststatus==-1){if(d.auth(this.accessmod)){c.appendChild(btn("Approve","Approve post","stamp","javascript:"+this.objName+".approve()","narrow"))}else{c.appendChild(btn("Reported","This message has been reported","reportoff",false,"narrow"))}}if(((this.authoraccess&this.accesstrusted)!=this.accesstrusted)&&(d.auth(this.accessfilter))&&(!d.auth(this.accessmod))){c.appendChild(btn("Report","Report post as abusive (this will delete the post)","report","javascript:"+this.objName+".filter()","narrow"))}else{if((this.poststatus==0)&&(d.auth(this.accessreport))){c.appendChild(btn("Report","Report post as abusive","report","javascript:"+this.objName+".report()","narrow"))}}if((d.auth(this.accessmod))||(this.lastpostinthread&&(d.userid==this.author))){c.appendChild(btn("Delete","Delete post","delete","javascript:"+this.objName+".del()","narrow"))}}}};for_Post.prototype.edit=function(){this.backup=this.eledtEdit.innerHTML;this.eledtEdit.innerHTML=T("Loading data. Please wait...");this.elButtons.style.display="none";var b=bindFunction(this,function(c){this.eledtEdit.innerHTML="";new BBEdit(this.eledtEdit,{content:c},this.httpcgi,{w:"edit",p:this.postid},bindFunction(this,this.editXHR))});xhrAsync(this.httpcgi+"?w=text&p="+this.postid,b)};for_Post.prototype.editXHR=function(b){if((!b)||(!this.redraw(b))){this.eledtEdit.innerHTML=this.backup;this.elButtons.style.display=""}};for_Post.prototype.report=function(){var b=prompt(T("REPORTING ABUSE: Please, describe the problem with this message:"),"");if(b){xhrAsync(this.httpcgi+"?w=report&p="+this.postid+"&why="+escape(b),bindFunction(this,this.redraw))}};for_Post.prototype.approve=function(){var b=prompt(T("APPROVE MESSAGE: Please, enter the reason (optional):"),"");xhrAsync(this.httpcgi+"?w=approve&p="+this.postid+"&why="+escape(b),bindFunction(this,this.redraw))};for_Post.prototype.filter=function(){var b=prompt(T("WARNING: This action will remove this post from the forum until a moderator can check at the issue.\n\n Please, describe the problem with this message:"),"");if(b){xhrAsync(this.httpcgi+"?w=filter&p="+this.postid+"&why="+escape(b),bindFunction(this,this.redraw))}};for_Post.prototype.del=function(){if(confirm("You are about to delete a post")){xhrAsync(this.httpcgi+"?w=del&p="+this.postid,bindFunction(this,this.redraw))}};for_Post.prototype.redraw=function(d){if(d){if(d.substr(0,5).toLowerCase()=="error"){alert(d);return false}else{var c=document.createElement("div");c.innerHTML=d;var b=c.firstChild;this.el.parentNode.replaceChild(b,this.el);this.el=b;this.parseHTML();this.cb_onSession.invoke();WhenAll();return true}}};function ParseSwitches(c){a=document.getElementsByTagName("div");for(var b=0;b<a.length;++b){if(a[b].className==c){new SwitchCases(a[b])}}}function SwitchCases(el){if(!el.hasChildNodes){return}if(typeof SwitchCases.cx=="undefined"){SwitchCases.cx=0}++SwitchCases.cx;this.objName="switch"+SwitchCases.cx;eval(this.objName+"=this;");this.elMenu=document.createElement("ul");this.labels=new Array();this.nlabels=0;this.views=new Array();this.buttons=new Array();for(var i=0;i<el.childNodes.length;++i){if(el.childNodes[i].title){this.views[this.nlabels]=el.childNodes[i];this.labels[this.nlabels]=el.childNodes[i].title;var opt=document.createElement("li");opt.innerHTML='<a href="javascript:'+this.objName+".select("+(this.nlabels+1)+')">'+el.childNodes[i].title+"</a>";this.buttons[this.nlabels]=opt;this.elMenu.appendChild(opt);++this.nlabels}}var nil=document.createElement("li");nil.className="hide";var txt='<a href="/site/versions/"><b class="C_ico question" title="Help about versions"></b></a>';nil.innerHTML=txt;this.elMenu.appendChild(nil);el.insertBefore(this.elMenu,el.firstChild);this.el=el;var autoselect=new String();autoselect+=cookieGet("autoselect");autoselect=autoselect.split("|");for(var j=0;j<autoselect.length;++j){for(var i=0;i<this.nlabels;++i){if(this.labels[i]==autoselect[j]){this.select(i+1,true);return}}}this.select(1,true)}SwitchCases.prototype.select=function(f,h){if(f){this.selected=f;this.hidden=false}else{if(this.hidden){f=this.selected;this.hidden=false}else{this.hidden=true}}for(var c=0;c<this.nlabels;++c){this.views[c].className=(c==f-1?"on":"off");this.buttons[c].className=(c==f-1?"on":"off")}if(!h){var d=new Array();if(f){d.push(this.labels[f-1])}var g=new String();g+=cookieGet("autoselect");g=g.split("|");for(var b=0;b<g.length;++b){if(b>10){break}var e=false;for(var c=0;c<this.nlabels;++c){if(this.labels[c]==g[b]){e=true}}if(!e){d.push(g[b])}}cookieSet("autoselect",d.join("|"))}};