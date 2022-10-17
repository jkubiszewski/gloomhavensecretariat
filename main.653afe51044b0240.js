"use strict";(self.webpackChunkgloomhavensecretary=self.webpackChunkgloomhavensecretary||[]).push([[179],{1188:(bt,it,D)=>{D.d(it,{v:()=>J});var t=D(641),V=D(2713),B=D(3735),Y=D(1599),q=D(1412),st=D(83),x=D(1502),S=D(9239),F=D(7342),E=D(8386),R=D(62),U=D(1723);class ct{constructor(f){this.game=f}addModifier(f,y,P=-1){(P<0||P>f.cards.length)&&(P=Math.floor(Math.random()*(f.cards.length-f.current))+f.current+1),f.cards.splice(P,0,y)}drawModifier(f){f.current=f.current+1,f.current==f.cards.length&&this.shuffleModifiers(f)}shuffleModifiers(f){f.cards=f.cards.filter((y,P)=>P>f.current||y.type!=R.kl.bless&&y.type!=R.kl.curse),f.current=-1,f.cards=f.cards.map(y=>({value:y,sort:Math.random()})).sort((y,P)=>y.sort-P.sort).map(({value:y})=>y)}removeDrawnDiscards(f){const y=f.cards.length;f.cards=f.cards.filter((P,I)=>I>f.current||P.type!=R.kl.bless&&P.type!=R.kl.curse),f.current=f.current-(y-f.cards.length)}next(){this.checkShuffle(this.game.monsterAttackModifierDeck),this.game.figures.forEach(f=>{f instanceof t.z&&this.checkShuffle(f.attackModifierDeck)})}draw(){this.shuffleModifiers(this.game.monsterAttackModifierDeck),this.game.figures.forEach(f=>{f instanceof t.z&&this.shuffleModifiers(f.attackModifierDeck)})}checkShuffle(f){f.cards.some((y,P)=>P<=f.current&&y.shuffle)&&this.shuffleModifiers(f)}buildCharacterAttackModifierDeck(f){const y=new R.ut;let P=0;return f.perks.forEach(I=>{I.cards&&I.cards.forEach((et,yt)=>{if(I.type==U.Ib.add||I.type==U.Ib.replace){let Pt=Object.assign(new R.YY(et.attackModifier.type),et.attackModifier);Pt.id="perk"+P,(!this.findByAttackModifier(R.UO,Pt)||I.type==U.Ib.add||yt>0)&&(Pt.character=!0),this.findByAttackModifier(y.attackModifiers,Pt)||(P++,y.attackModifiers.push(Pt))}})}),f.progress&&f.progress.perks&&f.progress.perks.forEach((I,et)=>{for(let yt=0;yt<I;yt++){const Pt=f.perks[et];Pt.cards=Pt.cards||[],Pt.cards.forEach((Nt,bi)=>{(!this.findByAttackModifier(R.UO,Nt.attackModifier)||Pt.type==U.Ib.add||Pt.type==U.Ib.replace&&bi>0)&&(Nt.attackModifier.character=!0)}),Pt.type==U.Ib.add?this.addCards(y,Pt.cards):Pt.type==U.Ib.remove?this.removeCards(y,Pt.cards):Pt.type==U.Ib.replace&&(this.removeCards(y,[Pt.cards[0]]),this.addCards(y,Pt.cards.slice(1,Pt.cards.length)))}}),y}findByAttackModifier(f,y){return f.find(P=>{let I=Object.assign(new R.YY(y.type),y);I.id="",I.revealed=!1;let et=Object.assign(new R.YY(P.type),P);return et.id="",et.revealed=!1,JSON.stringify(I)==JSON.stringify(et)})}addCards(f,y){y.forEach(P=>{for(let I=0;I<P.count;I++){const et=this.findByAttackModifier(f.attackModifiers,P.attackModifier);if(et){let yt=Object.assign(new R.YY(et.type),et);f.cards.push(yt)}else console.warn("Did not found AM to add: ",P.attackModifier,f)}})}removeCards(f,y){y.forEach(P=>{for(let I=0;I<P.count;I++){const et=this.findByAttackModifier(f.cards,P.attackModifier);if(et){const yt=f.cards.indexOf(et);f.cards.splice(yt,1)}else console.warn("Did not found AM to replace: ",P.attackModifier,f)}})}}var z=D(6998),X=D(8557),W=D(2944),lt=D(2679),rt=D(554);class Ct{constructor(f){this.xpMap=[0,45,95,150,210,275,345,420,500],this.game=f}characterIcon(f){return f.iconUrl?f.iconUrl:"./assets/images/character/icons/"+f.edition+"-"+f.name+".svg"}characterThumbnail(f){return f.thumbnailUrl?f.thumbnailUrl:"./assets/images/character/thumbnail/"+f.edition+"-"+f.name+".png"}addCharacter(f,y){if(!this.game.figures.some(P=>P instanceof t.z&&P.name==f.name&&P.edition==f.edition)){let P=new t.z(f,y);for(P.availableSummons.filter(I=>I.special).forEach(I=>this.createSpecialSummon(P,I)),P.number=1;J.game.figures.some(I=>I instanceof t.z&&I.number==P.number);)P.number++;this.game.figures.push(P),this.game.state==st.D2.next&&J.attackModifierManager.shuffleModifiers(P.attackModifierDeck),J.sortFigures()}this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}removeCharacter(f){if(this.game.figures.splice(this.game.figures.indexOf(f),1),f.marker){const y=f.edition+"-"+f.name;this.game.figures.forEach(P=>{P instanceof t.z?(P.markers.splice(P.markers.indexOf(y),1),P.summons&&P.summons.forEach(I=>{I.markers.splice(I.markers.indexOf(y),1)})):P instanceof E.C?P.markers.splice(P.markers.indexOf(y),1):P instanceof x.Q&&P.entities.forEach(I=>{I.markers.splice(I.markers.indexOf(y),1)})})}this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}addSummon(f,y){f.summons=f.summons.filter(P=>P.name!=y.name||P.number!=y.number||P.color!=y.color),f.summons.push(y)}removeSummon(f,y){f.summons.splice(f.summons.indexOf(y),1)}addObjective(f){let y=0;for(;this.game.figures.some(I=>I instanceof E.C&&I.id==y);)y++;let P=new E.C(y);f&&(P.name=f.name,P.maxHealth=f.health,P.health=(0,W.j9)(""+f.health),P.escort=f.escort,f.initiative&&(P.initiative=f.initiative)),this.game.figures.push(P),J.sortFigures()}removeObjective(f){this.game.sections.some(y=>y.objectives&&y.objectives.length>0)&&(this.game.sections=[]),this.game.figures.splice(this.game.figures.indexOf(f),1)}next(){this.game.figures.forEach(f=>{f instanceof t.z?(f.initiative=0,f.initiativeVisible=!1,f.off=!1,f.summons=f.summons.filter(y=>!y.dead&&y.health>0),rt.r.settings.expireConditions&&(f.entityConditions=f.entityConditions.filter(y=>!y.expired),f.summons.forEach(y=>{y.entityConditions=y.entityConditions.filter(P=>!P.expired)})),rt.r.settings.applyConditions&&(f.entityConditions.filter(y=>-1!=y.types.indexOf(X.CP.turn)).forEach(y=>y.state=X.tT.normal),f.summons.forEach(y=>{y.entityConditions.filter(P=>-1!=P.types.indexOf(X.CP.turn)).forEach(P=>P.state=X.tT.normal)}))):f instanceof E.C&&(f.off=!1,rt.r.settings.expireConditions&&(f.entityConditions=f.entityConditions.filter(y=>!y.expired)),rt.r.settings.applyConditions&&f.entityConditions.filter(y=>-1!=y.types.indexOf(X.CP.turn)).forEach(y=>y.state=X.tT.normal))})}addXP(f,y){f.progress.experience+=y,this.xpMap.forEach((P,I)=>{f.progress.experience>=P&&(I<this.xpMap.length-1&&f.progress.experience<this.xpMap[I+1]||I==this.xpMap.length-1)&&this.setLevel(f,I+1)})}setLevel(f,y){const P=f.stats.find(I=>I.level==y);P?f.stat=P:(f.errors=f.errors||[],!f.errors.find(I=>I.type==q.r.unknown)&&!f.errors.find(I=>I.type==q.r.stat)&&(console.error("No character stat found for level: "+y),f.errors.push(new q.o(q.r.stat,"character",f.name,f.edition,"",""+y))),f.stat=new z.a(y,0)),f.level=y,f.health==f.maxHealth&&(f.health=f.stat.health),f.maxHealth=f.stat.health,f.health>f.maxHealth&&(f.health=f.maxHealth),f.availableSummons.filter(I=>I.special).forEach(I=>this.createSpecialSummon(f,I)),(f.progress.experience<J.characterManager.xpMap[y-1]||f.progress.experience>=J.characterManager.xpMap[y])&&(f.progress.experience=J.characterManager.xpMap[y-1]),this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}createSpecialSummon(f,y){if(f.summons=f.summons.filter(P=>P.name!=y.name||0!=P.number||P.color!=lt.mp.custom),!y.level||y.level<=f.level){let P=new lt.eU(y.name,f.level,0,lt.mp.custom);P.maxHealth="number"==typeof y.health?y.health:(0,W.j9)(y.health,f.level),P.attack="number"==typeof y.attack?y.attack:(0,W.j9)(y.attack,f.level),P.movement="number"==typeof y.movement?y.movement:(0,W.j9)(y.movement,f.level),P.range="number"==typeof y.range?y.range:(0,W.j9)(y.range,f.level),P.health=P.maxHealth,P.state=lt.HY.true,P.init=!1,this.addSummon(f,P)}}applyDonations(f){for(let y=0;y<f.donations;y++)J.attackModifierManager.addModifier(f.attackModifierDeck,new R.YY(R.kl.bless)),J.attackModifierManager.addModifier(f.attackModifierDeck,new R.YY(R.kl.bless));f.donations=0}draw(){this.game.figures.forEach(f=>{f instanceof t.z&&(f.initiativeVisible=!0,this.applyDonations(f)),(f instanceof t.z||f instanceof E.C)&&!f.exhausted&&f.health>0&&(f.off=!1)})}}var ie=D(982),gt=D(7918),at=D(3951);class Lt{constructor(f){this.game=f}monsterThumbnail(f){return f.thumbnailUrl?f.thumbnailUrl:(f.thumbnail||(f.thumbnail=f.edition+"-"+f.name),"./assets/images/monster/thumbnail/"+f.thumbnail+".png")}getStat(f,y){return f.stats.find(I=>I.level==f.level&&I.type==y)||(f.errors=f.errors||[],!f.errors.find(I=>I.type==q.r.unknown)&&!f.errors.find(I=>I.type==q.r.stat)&&(console.error("Could not find '"+y+"' stats for monster: "+f.name+" level: "+f.level),f.errors.push(new q.o(q.r.stat,"monster",f.name,f.edition,y,""+f.level))),new S.c(y,f.level,0,0,0,0))}addMonster(f){this.game.scenario||J.scenarioManager.setScenario(new gt.$(new at.t("","",[],[],[],[],[],[],[],""),!0));let y=this.game.figures.find(P=>P instanceof Y.A&&P.name==f.name&&P.edition==f.edition);if(!y){if(y=new x.Q(f),y.level=J.game.level,y.off=!0,!this.applySameDeck(y)){if(!y.abilities||0==y.abilities.length){const P=J.abilities(y);y.abilities=P.filter(I=>isNaN(+I.level)||+I.level<=(y&&y.level||0)).map(I=>P.indexOf(I))}this.shuffleAbilities(y)}this.game.figures.push(y),J.game.state==st.D2.next&&J.sortFigures()}return y}removeMonster(f){f.entities=[],this.game.figures.splice(this.game.figures.indexOf(f),1),f.drawExtra||this.game.figures.forEach(y=>{y instanceof x.Q&&y.drawExtra&&(y.name!=f.name||y.edition!=f.edition)&&J.deckData(y).name==J.deckData(f).name&&J.deckData(y).edition==J.deckData(f).edition&&(this.getSameDeckMonster(y)||(y.drawExtra=!1))})}addMonsterEntity(f,y,P,I=!1){if(!f.stats.some(yt=>yt.type==P))return f.errors=f.errors||[],void(!f.errors.find(yt=>yt.type==q.r.unknown)&&!f.errors.find(yt=>yt.type==q.r.monsterType)&&(console.error("Missing type '"+P+"' for "+f.name),f.errors.push(new q.o(q.r.monsterType,"monster",f.name,f.edition,P))));let et=new ie.g(y,P,f);I&&(et.summon=lt.HY.new),f.entities.push(et),this.game.state==st.D2.next&&-1==f.ability&&(this.applySameDeck(f)?-1==f.ability&&(f.ability=0):f.ability=0),this.game.state==st.D2.next&&1==f.entities.filter(yt=>!yt.dead&&yt.health>0).length&&J.sortFigures(),f.off&&(f.off=!1,this.game.state==st.D2.next&&(f.active=!J.game.figures.some(yt=>yt.active))),this.game.state==st.D2.next&&(et.active=et.active||J.game.figures.some(yt=>yt.active&&yt.getInitiative()>f.getInitiative()),et.off=!1)}removeMonsterEntity(f,y){f.entities.splice(f.entities.indexOf(y),1),(0==f.entities.length||f.entities.every(P=>P.dead||P.health<=0))&&(f.off||J.game.state!=st.D2.next?f.off=!0:(J.roundManager.toggleFigure(f),f.active=!1))}toggleActive(f,y){this.game.state==st.D2.next&&(f.active?(y.active=!y.active,f.entities.every(P=>P.dead||P.health<=0||!P.active)&&J.roundManager.toggleFigure(f)):y.active?(y.active=!1,f.entities.every(P=>P.dead||P.health<=0||!P.active)&&(f.off=!0)):(f.off=!1,y.active=!0),y.active?(y.off=!1,!f.active&&this.game.figures.every(P=>!P.active)&&(f.active=!0)):y.off=!0)}getSameDeckMonster(f){return this.game.figures.find(y=>y instanceof x.Q&&(y.name!=f.name||y.edition!=f.edition)&&J.deckData(y).name==J.deckData(f).name&&J.deckData(y).edition==J.deckData(f).edition&&!y.drawExtra)}applySameDeck(f){const y=this.getSameDeckMonster(f);return!!y&&(f.abilities=JSON.parse(JSON.stringify(y.abilities)),f.ability=y.ability,f.drawExtra&&this.drawExtra(f),!0)}drawExtra(f){if(f.drawExtra){f.ability=-1;const y=this.getSameDeckMonster(f);if(!y)return console.error("Draw extra for '"+f.name+"' ("+f.deck+" not possible, not same deck monster found!"),void(f.drawExtra=!1);f.ability=y.ability+1+this.game.figures.filter(P=>P instanceof x.Q&&(P.name!=f.name||P.edition!=f.edition)&&J.deckData(P).name==J.deckData(f).name&&J.deckData(P).edition==J.deckData(f).edition&&P.drawExtra&&P.ability>y.ability).length,f.ability>=f.abilities.length&&this.shuffleAbilities(f)}else this.applySameDeck(f)}next(){this.game.figures.forEach(f=>{if(f instanceof x.Q){const y=this.getAbility(f);y&&(y.shuffle||f.ability>=f.abilities.length)&&this.shuffleAbilities(f),rt.r.settings.expireConditions&&f.entities.forEach(P=>{P.entityConditions=P.entityConditions.filter(I=>!I.expired)}),rt.r.settings.applyConditions&&f.entities.forEach(P=>{P.entityConditions.filter(I=>-1!=I.types.indexOf(X.CP.turn)).forEach(I=>I.state=X.tT.normal)}),f.entities=f.entities.filter(P=>!P.dead&&P.health>0),f.off=0==f.entities.length}})}draw(){this.game.figures.filter(f=>f instanceof x.Q&&!f.drawExtra).forEach(f=>{f instanceof x.Q&&f.entities.length>0&&f.entities.some(y=>!y.dead&&y.health>0)&&(f.ability=f.ability+1+this.game.figures.filter(y=>y instanceof x.Q&&(y.name!=f.name||y.edition!=f.edition)&&J.deckData(y).name==J.deckData(f).name&&J.deckData(y).edition==J.deckData(f).edition&&y.drawExtra&&y.ability>-1).length,f.ability>=f.abilities.length&&this.shuffleAbilities(f))}),this.game.figures.filter(f=>f instanceof x.Q&&f.drawExtra).forEach(f=>{f instanceof x.Q&&(this.drawExtra(f),f.ability>=f.abilities.length&&this.shuffleAbilities(f))})}shuffleAbilities(f){if(f.ability=J.game.state==st.D2.draw||0==f.entities.length?-1:0,f.drawExtra){const y=this.getSameDeckMonster(f);return y?void this.shuffleAbilities(y):(console.error("Shuffle for '"+f.name+"' ("+f.deck+" not possible, not same deck monster found!"),f.drawExtra=!1,void this.shuffleAbilities(f))}f.abilities=f.abilities.map(y=>({value:y,sort:Math.random()})).sort((y,P)=>y.sort-P.sort).map(({value:y})=>y),this.game.figures.filter(y=>y instanceof x.Q&&this.getSameDeckMonster(y)&&this.getSameDeckMonster(y)==f).map(y=>y).forEach(y=>{y.abilities=JSON.parse(JSON.stringify(f.abilities)),J.game.state==st.D2.draw?y.ability=-1:(y.ability=f.ability,y.drawExtra&&this.drawExtra(y))})}drawAbility(f){if(f.drawExtra){const y=this.getSameDeckMonster(f);return y?void this.drawAbility(y):(console.error("Draw for '"+f.name+"' ("+f.deck+" not possible, not same deck monster found!"),f.drawExtra=!1,void this.drawAbility(f))}f.ability+=1,this.game.figures.forEach(y=>{y instanceof x.Q&&this.getSameDeckMonster(y)&&(y.ability=f.ability,y.drawExtra&&this.drawExtra(y))})}getAbility(f){if(f.ability<0||f.ability>=f.abilities.length)return;const y=J.abilities(f);return y?y[f.abilities[f.ability]]:void 0}}class oe{constructor(f){this.undos=[],this.redos=[],this.undoInfos=[],this.game=f,this.lastSaveTimestamp=(new Date).getTime()}init(){const f=localStorage.getItem("ghs-game");if(null!=f){const P=Object.assign(new st.i4,JSON.parse(f));this.game.fromModel(P),J.uiChange.emit()}else localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel()));if(rt.r.settings.serverUrl&&rt.r.settings.serverPort&&rt.r.settings.serverPassword&&rt.r.settings.serverAutoconnect&&this.connect(),rt.r.settings.browserNavigation){const P=+(localStorage.getItem("ghs-popstate")&&"number"==typeof localStorage.getItem("ghs-popstate")&&localStorage.getItem("ghs-popstate")||"0");localStorage.setItem("ghs-popstate",""+P),history.replaceState(P,"")}window.addEventListener("popstate",P=>{if(rt.r.settings.browserNavigation){const I=+(localStorage.getItem("ghs-popstate")||"0");localStorage.setItem("ghs-popstate",P.state),I<P.state?this.redo():I>P.state&&this.undo()}}),this.loadLocalStorage();const y=this.undos.length+this.redos.length-this.undoInfos.length;for(let P=0;P<y;P++)this.undoInfos.unshift([])}loadLocalStorage(){this.undos=[];const f=localStorage.getItem("ghs-undo");if(null!=f){this.undos=JSON.parse(f);let I=1,et=localStorage.getItem("ghs-undo-"+I);for(;et;){const yt=JSON.parse(et);this.undos.push(...yt),I++,et=localStorage.getItem("ghs-undo-"+I)}}this.redos=[];const y=localStorage.getItem("ghs-redo");if(null!=y){this.redos=JSON.parse(y);let I=1,et=localStorage.getItem("ghs-redo-"+I);for(;et;){const yt=JSON.parse(et);this.redos.push(...yt),I++,et=localStorage.getItem("ghs-redo-"+I)}}this.undoInfos=[];const P=localStorage.getItem("ghs-undo-infos");if(null!=P){this.undoInfos=JSON.parse(P);let I=1,et=localStorage.getItem("ghs-undo-infos-"+I);for(;et;){const yt=JSON.parse(et);this.undoInfos.push(...yt),I++,et=localStorage.getItem("ghs-undo-infos-"+I)}}}saveLocalStorage(){this.clearLocalStorage();let f=250;if(this.undos.length<f)localStorage.setItem("ghs-undo",JSON.stringify(this.undos));else{let y=1;for(localStorage.setItem("ghs-undo",JSON.stringify(this.undos.slice(0,f)));this.undos.length>y*f;)localStorage.setItem("ghs-undo-"+y,JSON.stringify(this.undos.slice(y*f,y*f+f))),y++}if(this.redos.length<f)localStorage.setItem("ghs-redo",JSON.stringify(this.redos));else{let y=1;for(localStorage.setItem("ghs-redo",JSON.stringify(this.redos.slice(0,f)));this.redos.length>y*f;)localStorage.setItem("ghs-redo-"+y,JSON.stringify(this.redos.slice(y*f,y*f+f))),y++}if(f=1e3,this.undoInfos.length<f)localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos));else{let y=1;for(localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos.slice(0,f)));this.undoInfos.length>y*f;)localStorage.setItem("ghs-undo-infos-"+y,JSON.stringify(this.undoInfos.slice(y*f,y*f+f))),y++}}clearLocalStorage(){let f=1;for(localStorage.removeItem("ghs-undo");localStorage.getItem("ghs-undo-"+f);)localStorage.removeItem("ghs-undo-"+f);for(f=1,localStorage.removeItem("ghs-redo");localStorage.getItem("ghs-redo-"+f);)localStorage.removeItem("ghs-redo-"+f);for(f=1,localStorage.removeItem("ghs-undo-infos");localStorage.getItem("ghs-undo-infos-"+f);)localStorage.removeItem("ghs-undo-infos-"+f)}buildWsUrl(f,y,P){let I=y.split("/");const et=I[0];let yt="";return I.length>1&&(yt="/"+I.splice(1,I.length+1).join("/")),yt=f+et+":"+P+yt,yt}connect(){rt.r.settings.serverUrl&&rt.r.settings.serverPort&&rt.r.settings.serverPassword&&(this.disconnect(),this.ws=new WebSocket(this.buildWsUrl(rt.r.settings.serverWss?"wss://":"ws://",rt.r.settings.serverUrl,rt.r.settings.serverPort)),this.ws.onmessage=this.onMessage,this.ws.onopen=this.onOpen)}disconnect(){this.permissions=void 0,this.ws&&this.ws.readyState!=WebSocket.CLOSED&&this.ws.close()}onMessage(f){try{const y=JSON.parse(f.data);switch(y.type){case"game":window.document.body.classList.add("working");let P=y.payload;const I=y.undoinfo;I&&(I.length>0&&"serverSync"==I[0]?J.stateManager.before("serverSync",...I.slice(1)):J.stateManager.before("serverSync",...I)),J.game.fromModel(P,!0),J.stateManager.saveLocal(),J.uiChange.emit(),setTimeout(()=>{window.document.body.classList.remove("working")},1);break;case"settings":if(rt.r.settings.serverSettings){let et=y.payload;et.serverUrl||(et.serverUrl=rt.r.settings.serverUrl),et.serverPort||(et.serverPort=rt.r.settings.serverPort),et.serverPassword||(et.serverPassword=rt.r.settings.serverPassword),et.serverSettings||(et.serverSettings=rt.r.settings.serverSettings),rt.r.settings=et,localStorage.setItem("ghs-settings",JSON.stringify(rt.r.settings))}break;case"permissions":J.stateManager.permissions=y.payload||void 0;break;case"error":console.warn("[GHS] Error: "+y.message),"Permission(s) missing"==y.message&&J.stateManager.undo(),y.message.startsWith("Invalid password")&&(console.warn("Disconnect..."),f.target?.close())}}catch(y){console.error("[GHS] "+f.data,y)}}onOpen(f){const y=f.target;y&&y.readyState==WebSocket.OPEN&&rt.r.settings.serverPassword&&(y.send(JSON.stringify({password:rt.r.settings.serverPassword,type:"request-game"})),rt.r.settings.serverSettings&&y.send(JSON.stringify({password:rt.r.settings.serverPassword,type:"request-settings"})))}requestSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&rt.r.settings.serverPassword&&rt.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:rt.r.settings.serverPassword,type:"request-settings"}))}wsState(){return rt.r.settings.serverUrl&&rt.r.settings.serverPort&&rt.r.settings.serverPassword?this.ws&&this.ws.readyState||-1:-99}reset(){this.game=new st.lA,localStorage.removeItem("ghs-game"),this.clearLocalStorage()}saveLocal(){localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel())),this.lastSaveTimestamp=(new Date).getTime()}saveSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&rt.r.settings.serverPassword&&rt.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:rt.r.settings.serverPassword,type:"settings",payload:rt.r.settings}))}before(...f){window.document.body.classList.add("working"),this.addToUndo(f||[])}after(f=1){if(this.saveLocal(),this.ws&&this.ws.readyState==WebSocket.OPEN&&rt.r.settings.serverPassword){let y={password:rt.r.settings.serverPassword,type:"game",payload:this.game.toModel(),undoinfo:this.undoInfos[this.undos.length-1]};this.ws.send(JSON.stringify(y))}J.uiChange.emit(),f?setTimeout(()=>{window.document.body.classList.remove("working")},f):window.document.body.classList.remove("working")}addToUndo(f){if(this.game.toModel()!=this.undos[this.undos.length-1]&&(this.undos.push(this.game.toModel()),this.undos.length>rt.r.settings.maxUndo&&this.undos.splice(0,this.undos.length-rt.r.settings.maxUndo),this.undoInfos.splice(this.undoInfos.length-this.redos.length,this.redos.length),this.undoInfos.push(f),this.undoInfos.length>this.undos.length&&this.undoInfos.splice(0,this.undoInfos.length-this.undos.length),this.redos=[],this.saveLocalStorage(),rt.r.settings.browserNavigation)){const y="number"==typeof history.state?history.state+1:1;history.pushState(y,""),localStorage.setItem("ghs-popstate",""+y)}}hasUndo(){return this.undos.length>0}undo(){if(this.undos.length>0){window.document.body.classList.add("working"),this.redos.push(this.game.toModel());const f=this.undos.splice(this.undos.length-1,1)[0];this.game.fromModel(f),this.saveLocalStorage(),this.after()}}hasRedo(){return this.redos.length>0}redo(){if(this.redos.length>0){window.document.body.classList.add("working"),this.undos.push(this.game.toModel());const f=this.redos.splice(this.redos.length-1,1)[0];this.game.fromModel(f),this.saveLocalStorage(),this.after()}}savePermissions(f,y){this.ws&&this.ws.readyState==WebSocket.OPEN&&rt.r.settings.serverPassword&&this.ws.send(JSON.stringify({password:rt.r.settings.serverPassword,type:"permissions",payload:{permissions:y,password:f}}))}hasCharacterPermission(f){return null==this.permissions||this.permissions.characters||this.permissions.character.some(y=>y.name==f.name&&y.edition==f.edition)}hasMonsterPermission(f){return null==this.permissions||this.permissions.monsters||this.permissions.monster.some(y=>y.name==f.name&&y.edition==f.edition)}}class kt{constructor(f){this.game=f}changeHealth(f,y){this.changeHealthHighlightConditions(f,y),f.health+=y,f.health>f.maxHealth?f.health=(0,W.j9)(""+f.maxHealth):f.health<0&&(f.health=0)}changeHealthHighlightConditions(f,y){if(rt.r.settings.applyConditions){f.entityConditions.filter(et=>et.name==X.fT.poison||et.name==X.fT.poison_x).forEach(et=>{et.highlight=y<0&&!et.expired});const P=f.entityConditions.find(et=>!et.expired&&et.name==X.fT.ward),I=f.entityConditions.find(et=>!et.expired&&et.name==X.fT.brittle);y<0&&P&&!I?(P.value-=y,P.highlight=!0):P&&(P.highlight=!1),y<0&&I&&!P?(I.value-=y,I.highlight=!0):I&&(I.highlight=!1),I&&P&&(I.highlight=!1,P.highlight=!1)}}hasCondition(f,y){return f.entityConditions.some(P=>P.name==y.name&&!P.expired)}activeConditions(f){return f.entityConditions.filter(y=>!y.expired)}isImmune(f,y,P){const I=f.stats.find(yt=>yt.level==y.level&&yt.type==y.type);let et=null!=I&&null!=I.immunities&&-1!=I.immunities.indexOf(P);if(!et){if(P==X.fT.wound_x)return this.isImmune(f,y,X.fT.wound);if(P==X.fT.poison_x)return this.isImmune(f,y,X.fT.poison);if(P==X.fT.rupture)return this.isImmune(f,y,X.fT.wound);if(P==X.fT.infect)return this.isImmune(f,y,X.fT.poison);if(P==X.fT.chill)return this.isImmune(f,y,X.fT.immobilize)||this.isImmune(f,y,X.fT.muddle)}return et}toggleCondition(f,y,P,I){if(this.hasCondition(f,y))f.entityConditions=f.entityConditions.filter(et=>et.name!=y.name);else{let et=f.entityConditions.find(yt=>yt.name==y.name);et?(et.expired=!1,et.state=X.tT.normal):(et=new X.hT(y.name,y.value),f.entityConditions.push(et)),P||-1==et.types.indexOf(X.CP.expire)?P&&-1!=et.types.indexOf(X.CP.turn)&&(et.state=X.tT.turn):et.state=X.tT.expire,I&&-1!=et.types.indexOf(X.CP.turn)&&(et.state=X.tT.expire)}}applyCondition(f,y){const P=f.entityConditions.find(I=>I.name==y&&!I.expired&&-1!=I.types.indexOf(X.CP.apply));P&&((P.name==X.fT.poison||P.name==X.fT.poison_x)&&(f.health-=P.value,f.health<0&&(f.health=0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),P.highlight=!1),P.name==X.fT.ward&&(f.health+=Math.floor((P.value-1)/2),f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth)),f.health>0&&(f instanceof ie.g||f instanceof lt.eU)&&f.dead&&(f.dead=!1),P.value=1,P.expired=!0,P.highlight=!1),P.name==X.fT.brittle&&(f.health-=Math.floor((P.value-1)/2),f.health<0&&(f.health=0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),P.value=1,P.expired=!0,P.highlight=!1))}declineApplyCondition(f,y){const P=f.entityConditions.find(I=>I.name==y&&!I.expired&&-1!=I.types.indexOf(X.CP.apply));P&&(P.highlight=!1,P.name==X.fT.ward&&(P.value=1,P.expired=!0),P.name==X.fT.brittle&&(P.value=1,P.expired=!0))}restoreConditions(f){f.entityConditions.forEach(y=>{y.name==X.fT.chill&&(y.expired?y.expired=!1:y.value++),-1!=y.types.indexOf(X.CP.expire)&&(y.expired?y.expired=!1:y.state==X.tT.expire&&(y.state=X.tT.normal))})}expireConditions(f){f.entityConditions.forEach(y=>{y.name==X.fT.chill&&(1==y.value?y.expired=!0:y.value--)}),f.entityConditions.forEach(y=>{-1!=y.types.indexOf(X.CP.expire)&&(y.state==X.tT.normal?y.state=X.tT.expire:y.state==X.tT.expire&&(y.expired=!0))})}applyConditionsTurn(f){const y=f.entityConditions.find(P=>!P.expired&&P.state==X.tT.normal&&P.name==X.fT.regenerate);if(y){const P=f.entityConditions.every(I=>I.expired||-1==I.types.indexOf(X.CP.preventHeal))&&f.health<f.maxHealth;f.entityConditions.filter(I=>!I.expired&&-1!=I.types.indexOf(X.CP.clearHeal)).forEach(I=>I.expired=!0),P&&(y.state=X.tT.expire,f.health+=y.value,f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth))),y.highlight=!0,setTimeout(()=>{y.highlight=!1},1e3)}f.entityConditions.filter(P=>!P.expired&&P.state==X.tT.normal&&-1!=P.types.indexOf(X.CP.turn)).forEach(P=>{P.state=X.tT.turn,(P.name==X.fT.wound||P.name==X.fT.wound_x)&&(f.health=f.health-P.value,f.health<0&&(f.health=0),0==f.health&&(f instanceof t.z||f instanceof E.C)&&!f.exhausted&&(f.exhausted=!0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),P.highlight=!0,setTimeout(()=>{P.highlight=!1},1e3))})}unapplyConditionsTurn(f){f.entityConditions.filter(P=>P.state==X.tT.turn&&-1!=P.types.indexOf(X.CP.turn)).forEach(P=>{P.expired?P.expired=!1:(P.state=X.tT.normal,(P.name==X.fT.wound||P.name==X.fT.wound_x)&&(f.health=f.health+P.value,f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth)),f.health>0&&(f instanceof ie.g||f instanceof lt.eU)&&f.dead&&(f.dead=!1)))});const y=f.entityConditions.find(P=>P.name==X.fT.regenerate);if(y){const P=f.entityConditions.every(I=>-1==I.types.indexOf(X.CP.preventHeal))&&y.state==X.tT.expire;f.entityConditions.filter(I=>I.expired&&-1!=I.types.indexOf(X.CP.clearHeal)).forEach(I=>I.expired=!1),P&&(y.state=X.tT.normal,f.health-=y.value,f.health<0&&(f.health=0))}}applyConditionsAfter(f){const y=f.entityConditions.find(P=>!P.expired&&P.name==X.fT.bane);y&&(f.health=f.health-10,f.health<0&&(f.health=0),0==f.health&&(f instanceof ie.g||f instanceof lt.eU)&&!f.dead&&(f.dead=!0),y.expired=!0,y.highlight=!0,setTimeout(()=>{y.highlight=!1},1e3))}unapplyConditionsAfter(f){const y=f.entityConditions.find(P=>P.expired&&P.name==X.fT.bane);y&&(f.health=f.health+10,f.health>(0,W.j9)(""+f.maxHealth)&&(f.health=(0,W.j9)(""+f.maxHealth)),f.health>0&&(f instanceof ie.g||f instanceof lt.eU)&&f.dead&&(f.dead=!1),y.highlight=!1,y.expired=!1)}highlightedConditions(f){return f.entityConditions.filter(y=>y.highlight)}hasMarker(f,y){return f.markers&&-1!=f.markers.indexOf(y)}toggleMarker(f,y){this.hasMarker(f,y)?f.markers.splice(f.markers.indexOf(y),1):f.markers.push(y)}undoInfos(f,y,P){let I=[];return f instanceof t.z&&y instanceof t.z?I.push(P+".char","data.character."+f.name):f instanceof lt.eU&&y instanceof t.z?I.push(P+".summon","data.character."+y.name,"data.summon."+f.name):f instanceof E.C?I.push(P+".objective",f.title||f.name):y instanceof x.Q&&f instanceof ie.g&&I.push(P+".monster","data.monster."+y.name,"monster."+f.type,""+f.number),I}}var vt=D(1571);class wt{constructor(f){this.game=f}ge5PlayerOffset(){if(!this.game.ge5Player)return 0;const f=this.game.figures.filter(y=>y instanceof t.z&&!y.absent).length;return f<=4?0:f-3}adjustedLevel(){const f=this.game.level-this.ge5PlayerOffset()+this.game.bonusAdjustment;return f<0?0:f>7?7:f}trap(){return 2+this.game.level}experience(){return 4+2*this.adjustedLevel()}loot(){let f=2+Math.floor(this.adjustedLevel()/2);return this.adjustedLevel()>=7&&(f=6),f}terrain(){return 1+Math.ceil(this.game.level/3)}scenarioLevel(){const f=this.game.figures.filter(P=>P instanceof t.z&&!P.absent).length;if(0==f)return 0;const y=this.game.figures.filter(P=>P instanceof t.z&&!P.absent).map(P=>P.level).reduce((P,I)=>P+I);return Math.ceil((y/f+(this.game.solo?1:0))/2)+this.ge5PlayerOffset()}calculateScenarioLevel(){this.game.levelAdjustment>6?this.game.levelAdjustment=6:this.game.levelAdjustment<-6&&(this.game.levelAdjustment=-6);let f=this.scenarioLevel()+this.game.levelAdjustment;f>7?f=7:f<0&&(f=0),this.setLevel(f)}setLevel(f){this.game.level!=f&&(this.game.level=f,this.game.figures.forEach(y=>{y instanceof x.Q&&(y.level=f,y.entities.forEach(P=>{P.level=f}))}))}}class K{constructor(f){this.game=f}setScenario(f){if(this.game.scenario=f?new gt.$(f,f.custom):void 0,f&&!f.custom){const y=J.editionData.find(P=>P.edition==f.edition);if(!y)return void console.error("Could not find edition data!");J.roundManager.resetScenario(),this.applyScenarioData(y,f)}else f||J.roundManager.resetScenario()}finishScenario(f=!0){this.game.figures.forEach(y=>{y instanceof t.z&&(J.characterManager.addXP(y,(f?J.levelManager.experience():0)+y.experience),y.progress.gold+=y.loot*J.levelManager.loot())}),f&&this.game.party&&this.game.scenario&&(this.game.party.scenarios.push(new at._(this.game.scenario.index,this.game.scenario.edition,this.game.scenario.group,this.game.scenario.custom,this.game.scenario.custom?this.game.scenario.name:"")),this.game.party.manualScenarios=this.game.party.manualScenarios.filter(y=>this.game.scenario&&(this.game.scenario.index!=y.index||this.game.scenario.edition!=y.edition||this.game.scenario.group!=y.group))),this.game.scenario=void 0,this.game.sections=[],J.roundManager.resetScenario()}addSection(f){const y=J.editionData.find(P=>P.edition==f.edition);y?this.game.sections.some(P=>P.edition==f.edition&&P.index==f.index&&P.group==f.group)||(this.game.sections.push(f),this.applyScenarioData(y,f)):console.error("Could not find edition data!")}applyScenarioData(f,y){if(y.monsters&&y.monsters.forEach(P=>{let I=J.monstersData(!0).find(et=>et.name==P&&(et.edition==f.edition||f.extensions&&-1!=f.extensions.indexOf(et.edition)));if(I||(console.warn("Monster not found: '"+P+"' for edition :"+f.edition),I=J.monstersData(!0).find(et=>et.name==P)),I){let et=J.monsterManager.addMonster(I);y.allies&&-1!=y.allies.indexOf(et.name)&&(et.isAlly=!0)}else console.error("Monster not found: '"+P+"'")}),y.solo&&(J.game.figures=J.game.figures.filter(P=>!(P instanceof t.z)||P.name==y.solo&&P.edition==y.edition),!J.game.figures.some(P=>P instanceof t.z&&P.name==y.solo&&P.edition==y.edition))){const P=J.charactersData(!0).find(I=>I.name==y.solo&&I.edition==y.edition);P?J.characterManager.addCharacter(P,1):console.error("Solo Scneario Character not found: '"+y.solo+"' ("+y.name+")")}y.objectives&&y.objectives.forEach(P=>{J.characterManager.addObjective(P)})}scenarioData(f){const y=J.editionData.filter(P=>-1!=rt.r.settings.editions.indexOf(P.edition)).map(P=>P.scenarios).flat();return f?this.game.party.campaignMode&&y.some(P=>P.initial)?y.filter(P=>{if(P.edition!=f)return!1;if(P.initial||this.game.party.scenarios.find(yt=>P.index==yt.index&&P.edition==yt.edition&&P.group==yt.group)||this.game.party.manualScenarios.find(yt=>P.index==yt.index&&P.edition==yt.edition&&P.group==yt.group))return!0;let I=!1,et=!P.requires||0==P.requires.length;return this.game.party.scenarios.forEach(yt=>{const Pt=y.find(Nt=>Nt.index==yt.index&&Nt.edition==yt.edition&&Nt.group==yt.group);Pt&&Pt.group==P.group&&Pt.unlocks&&-1!=Pt.unlocks.indexOf(P.index)&&(I=!0)}),et||(et=P.requires.some(yt=>yt.every(Pt=>this.game.party.scenarios.find(Nt=>Nt.index==Pt&&Nt.group==P.group&&Nt.edition==P.edition)))),I&&et}):y.filter(P=>P.edition==f):y}isBlocked(f){let y=!1;const P=J.editionData.find(I=>I.edition==f.edition);return P&&this.game.party.scenarios.forEach(I=>{const et=P.scenarios.find(yt=>yt.index==I.index&&yt.edition==I.edition&&yt.group==I.group);et&&et.blocks&&-1!=et.blocks.indexOf(f.index)&&(y=!0)}),y}scenarioUndoArgs(f){return(f=f||J.game.scenario)?[f.index,"data.scenario."+f.name,f.custom?"scenario.custom":"data.edition."+f.edition]:["","",""]}scenarioDataForModel(f){if(f.isCustom)return new at.t(f.custom,"",[],[],[],[],[],[],[],"");const y=J.scenarioData(!0).find(P=>P.index==f.index&&P.edition==f.edition&&P.group==f.group);if(y)return new at.t(y.name,y.index,y.unlocks,y.blocks,y.requires,y.links,y.monsters,y.allies,y.objectives,y.edition,y.group,y.spoiler);console.warn("Invalid scenario data:",f)}sectionDataForModel(f){const y=J.sectionData(!0).find(P=>P.index==f.index&&P.edition==f.edition&&P.group==f.group);if(y)return new at.t(y.name,y.index,y.unlocks,y.blocks,y.requires,y.links,y.monsters,y.allies,y.objectives,y.edition,y.group,y.spoiler);console.warn("Invalid section data:",f)}toModel(f,y=!1,P=""){return new at._(f.index,f.edition,f.group,y,P)}}var $=D(4922);class ot{constructor(f){this.working=!1,this.game=f}nextAvailable(){return this.game.figures.length>0&&(this.game.state==st.D2.next||this.game.figures.every(f=>f instanceof x.Q||f instanceof E.C&&(f.getInitiative()>0||f.exhausted||!rt.r.settings.initiativeRequired)||f instanceof t.z&&(f.getInitiative()>0||f.exhausted||f.absent||!rt.r.settings.initiativeRequired)))}nextGameState(){this.working=!0,this.game.totalSeconds+=this.game.playSeconds,this.game.playSeconds=0,this.game.state==st.D2.next?(this.game.state=st.D2.draw,J.characterManager.next(),J.monsterManager.next(),J.attackModifierManager.next(),rt.r.settings.moveElements&&this.game.elementBoard.forEach(f=>{f.state==$.fq.strong?f.state=$.fq.waning:f.state==$.fq.waning&&(f.state=$.fq.inert)}),J.sortFigures(),this.game.figures.forEach(f=>f.active=!1)):this.nextAvailable()&&(0==this.game.round&&J.attackModifierManager.draw(),this.game.state=st.D2.next,this.game.round++,J.characterManager.draw(),J.monsterManager.draw(),rt.r.settings.moveElements&&this.game.elementBoard.forEach(f=>{f.state==$.fq.new&&(f.state=$.fq.strong)}),J.sortFigures(),this.game.figures.length>0&&this.toggleFigure(this.game.figures[0])),J.uiChange.emit(),setTimeout(()=>this.working=!1,1)}toggleFigure(f){const y=this.game.figures,P=y.indexOf(f);if(-1!=P){f.active||f.off?f.active&&!f.off?this.afterTurn(f):y.some((I,et)=>et<P&&I.active)?this.beforeTurn(f):f.active=!0:this.turn(f),this.permanentDead(f)&&this.afterTurn(f);for(let I=0;I<y.length;I++){const et=y[I],yt=et instanceof t.z&&et.absent;f.active&&(I!=P&&(et.active=!1),I<P?this.afterTurn(et):(!(et instanceof x.Q)||et instanceof x.Q&&et.entities.length>0)&&this.beforeTurn(et)),f.off&&!this.permanentDead(et)&&(I<P&&!et.off&&!y.some(Pt=>Pt.active)&&!yt?this.turn(et):I>P&&(!(et instanceof x.Q)||et instanceof x.Q&&et.entities.length>0)&&(!et.off&&I>P&&!y.some((Pt,Nt)=>Pt.active&&Nt<I)&&!yt?this.turn(et):et.active=!1))}}else console.error("Invalid figure")}beforeTurn(f){f.off?(f.off=!1,f instanceof x.Q&&f.entities.forEach(y=>{y.active=f.active&&!y.off}),rt.r.settings.expireConditions&&(f instanceof t.z?(J.entityManager.restoreConditions(f),f.summons.forEach(y=>{J.entityManager.restoreConditions(y)})):f instanceof E.C?J.entityManager.restoreConditions(f):f instanceof x.Q&&f.entities.forEach(y=>{J.entityManager.restoreConditions(y)}))):f instanceof x.Q&&f.entities.forEach(y=>{y.active=f.active,y.off=!1}),rt.r.settings.applyConditions&&(f.active||(f instanceof t.z?(J.entityManager.unapplyConditionsTurn(f),f.summons.forEach(y=>{J.entityManager.unapplyConditionsTurn(y)})):f instanceof E.C?J.entityManager.unapplyConditionsTurn(f):f instanceof x.Q&&f.entities.forEach(y=>{J.entityManager.unapplyConditionsTurn(y)}))),rt.r.settings.applyConditions&&(f instanceof t.z?(J.entityManager.unapplyConditionsAfter(f),f.summons.forEach(y=>{J.entityManager.unapplyConditionsAfter(y)})):f instanceof E.C?J.entityManager.unapplyConditionsAfter(f):f instanceof x.Q&&f.entities.forEach(y=>{J.entityManager.unapplyConditionsAfter(y)}),f.off&&!this.permanentDead(f)&&(f.off=!1))}turn(f){f.active=!0,f instanceof x.Q&&f.entities.every(y=>!y.off)&&f.entities.forEach(y=>{y.active=!0}),this.game.elementBoard.forEach(y=>{y.state==$.fq.new&&(y.state=$.fq.strong)}),rt.r.settings.applyConditions&&(f instanceof t.z?(J.entityManager.applyConditionsTurn(f),f.summons.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),f.exhausted&&this.toggleFigure(f)):f instanceof E.C?(J.entityManager.applyConditionsTurn(f),f.exhausted&&this.toggleFigure(f)):f instanceof x.Q&&(f.entities.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),f.entities.every(y=>y.dead)&&this.toggleFigure(f)))}afterTurn(f){if(!f.off)if(f.off=!0,f.active=!1,f instanceof x.Q&&f.entities.forEach(y=>{y.active=!1,y.off=!0}),rt.r.settings.expireConditions&&(f instanceof t.z?(J.entityManager.expireConditions(f),f.summons.forEach(y=>{J.entityManager.expireConditions(y)})):f instanceof E.C?J.entityManager.expireConditions(f):f instanceof x.Q&&f.entities.forEach(y=>{J.entityManager.expireConditions(y)})),rt.r.settings.applyConditions&&(f instanceof t.z?(J.entityManager.applyConditionsTurn(f),f.summons.forEach(y=>{J.entityManager.applyConditionsTurn(y)})):f instanceof E.C?J.entityManager.applyConditionsTurn(f):f instanceof x.Q&&f.entities.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),f instanceof t.z?(J.entityManager.applyConditionsAfter(f),f.summons.forEach(y=>{J.entityManager.applyConditionsAfter(y)})):f instanceof E.C?J.entityManager.applyConditionsAfter(f):f instanceof x.Q&&f.entities.forEach(y=>{J.entityManager.applyConditionsAfter(y)})),f instanceof t.z)for(let y of f.summons)y.state==lt.HY.new&&(y.state=lt.HY.true);else f instanceof x.Q&&f.entities.forEach(y=>{y.summon==lt.HY.new&&(y.summon=lt.HY.true)})}permanentDead(f){return(f instanceof t.z||f instanceof E.C)&&(f.exhausted||f.health<=0)||f instanceof x.Q&&f.entities.every(y=>y.dead||y.health<=0)}resetScenario(){this.game.playSeconds=0,this.game.sections=[],this.game.round=0,this.game.state=st.D2.draw,this.game.elementBoard.forEach(f=>f.state=$.fq.inert),this.game.monsterAttackModifierDeck=new R.ut,this.game.figures=this.game.figures.filter(f=>f instanceof t.z),this.game.figures.forEach(f=>{f instanceof t.z&&(f.health=f.maxHealth,f.loot=0,f.experience=0,f.entityConditions=[],f.summons=[],f.initiative=0,f.active=!1,f.off=!1,f.exhausted=!1,f.absent=!1,f.availableSummons.filter(y=>y.special).forEach(y=>J.characterManager.createSpecialSummon(f,y)),f.attackModifierDeck=J.attackModifierManager.buildCharacterAttackModifierDeck(f),J.characterManager.applyDonations(f))}),J.uiChange.emit()}}const J=new class tt{constructor(){this.game=new st.lA,this.editionData=[],this.uiChange=new vt.vpe,this.stateManager=new oe(this.game),this.entityManager=new kt(this.game),this.characterManager=new Ct(this.game),this.monsterManager=new Lt(this.game),this.attackModifierManager=new ct(this.game),this.levelManager=new wt(this.game),this.scenarioManager=new K(this.game),this.roundManager=new ot(this.game),this.uiChange.subscribe({next:()=>{this.game.levelCalculation&&this.levelManager.calculateScenarioLevel()}})}editions(f=!1){return this.editionData.map(y=>y.edition).filter(y=>-1!=rt.r.settings.editions.indexOf(y))}currentEditions(){return this.game.edition?[this.game.edition,...this.editionExtensions(this.game.edition)]:this.editions()}editionExtensions(f){const y=this.editionData.find(P=>P.edition==f);return y&&y.extensions||[]}charactersData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extensions&&-1!=y.extensions.indexOf(this.game.edition)).map(y=>y.characters).flat().filter((y,P,I)=>y.replace||!y.replace&&!I.find(et=>et.replace&&et.name==y.name&&et.edition==y.edition))}monstersData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extensions&&-1!=y.extensions.indexOf(this.game.edition)).map(y=>y.monsters).flat().filter((y,P,I)=>y.replace||!y.replace&&!I.find(et=>et.replace&&et.name==y.name&&et.edition==y.edition))}decksData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extensions&&-1!=y.extensions.indexOf(this.game.edition)).map(y=>y.decks).flat()}scenarioData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extensions&&-1!=y.extensions.indexOf(this.game.edition)).map(y=>y.scenarios).flat()}sectionData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extensions&&-1!=y.extensions.indexOf(this.game.edition)).map(y=>y.sections).flat()}itemData(f=!1){return this.editionData.filter(y=>f||!this.game.edition||y.edition==this.game.edition||y.extensions&&-1!=y.extensions.indexOf(this.game.edition)).map(y=>y.items).flat()}item(f,y){return this.itemData(!0).find(P=>P&&P.id==f&&P.edition==y)}hazardousTerrain(){return!!this.game.edition&&this.editionData.some(f=>f.edition==this.game.edition&&f.hazardousTerrain)}conditions(f=!1){if(f||!this.game.edition)return X.G3;const y=this.editionData.find(P=>P.edition==this.game.edition);return y&&y.conditions?y.conditions.map(P=>P.split(":").length>1?new X.gP(P.split(":")[0],+P.split(":")[1]):new X.gP(P)):[]}conditionsForTypes(...f){return this.conditions(!1).filter(y=>f.every(P=>-1!=y.types.indexOf(P)))}allConditionsForTypes(...f){return this.conditions(!0).filter(y=>f.every(P=>-1!=y.types.indexOf(P)))}markers(){return this.game.figures.filter(f=>f instanceof t.z&&f.marker).map(f=>f.edition+"-"+f.name)}sortFigures(){this.game.figures.sort((f,y)=>this.game.state==st.D2.draw?this.sortFiguresByTypeAndName(f,y):rt.r.settings.initiativeRequired?f.getInitiative()==y.getInitiative()?this.sortFiguresByTypeAndName(f,y):f.getInitiative()-y.getInitiative():0)}sortFiguresByTypeAndName(f,y){let P=f.name.toLowerCase();f instanceof t.z?P=f.title.toLowerCase()||rt.r.getLabel("data.character."+f.name).toLowerCase():f instanceof x.Q?P=rt.r.getLabel("data.monster."+f.name).toLowerCase():f instanceof E.C&&(P=f.title?f.title:rt.r.getLabel(f.name?"data.objective."+f.name:f.escort?"escort":"objective").toLowerCase());let I=y.name.toLowerCase();return y instanceof t.z?I=y.title.toLowerCase()||rt.r.getLabel("data.character."+y.name).toLowerCase():y instanceof x.Q?I=rt.r.getLabel("data.monster."+y.name).toLowerCase():y instanceof E.C&&(I=y.title?y.title:rt.r.getLabel(y.name?"data.objective."+y.name:y.escort?"escort":"objective").toLowerCase()),f instanceof t.z&&y instanceof x.Q?-1:f instanceof x.Q&&y instanceof t.z?1:f instanceof t.z&&y instanceof E.C?-1:f instanceof E.C&&y instanceof t.z?1:f instanceof x.Q&&y instanceof E.C?-1:f instanceof E.C&&y instanceof x.Q?1:f instanceof x.Q&&y instanceof x.Q?0:P<I?-1:1}deckData(f){let y=this.decksData(!0).find(P=>(P.name==f.deck||P.name==f.name)&&P.edition==f.edition);return y||(y=this.decksData(!0).find(P=>(P.name==f.deck||P.name==f.name)&&-1!=this.editionExtensions(f.edition).indexOf(P.edition))),y||(f.errors=f.errors||[],!f.errors.find(P=>P.type==q.r.unknown)&&!f.errors.find(P=>P.type==q.r.deck)&&(console.error("Unknwon deck: "+f.name+(f.deck?"["+f.deck+"]":"")+" for "+f.edition),f.errors.push(new q.o(q.r.deck,f instanceof t.z?"character":"monster",f.name,f.edition,f.deck))),new B.x("",[],""))}abilities(f){return this.deckData(f).abilities||[]}getCharacterData(f,y){let P=this.charactersData(!0).find(I=>I.name==f&&I.edition==y);return P||(P=this.charactersData(!0).find(I=>I.name==f),P||(P=new V.x,P.name=f,P.edition=y,P.errors=P.errors||[],P.errors.find(I=>I.type==q.r.unknown)||(console.error("unknown character '"+f+"' for edition '"+y+"'"),P.errors.push(new q.o(q.r.unknown,"character",f,y)))),P)}isCharacter(f){return f instanceof t.z}isObjective(f){return f instanceof E.C}isMonster(f){return f instanceof x.Q}isMonsterEntity(f){return f instanceof ie.g}isSummon(f){return f instanceof lt.eU}toCharacter(f){return f}toObjective(f){return f}toMonster(f){return f}toMonsterEntity(f){return f}toSummon(f){return f}getEdition(f){return this.game.figures.some(y=>typeof f==typeof y&&f.name==y.name&&f.edition!=y.edition||this.game.edition&&f.edition!=this.game.edition)?f.edition:""}getMonsterData(f,y){let P=this.monstersData(!0).find(I=>I.name==f&&I.edition==y);return P||(P=this.monstersData(!0).find(I=>I.name==f),P||(P=new Y.A(f,0,new S.c(F.M.normal,0,0,0,0,0),[],""),P.errors=P.errors||[],P.name=f,P.edition=y,P.errors.find(I=>I.type==q.r.unknown)||(console.error("unknown monster '"+f+"' for edition '"+y+"'"),P.errors.push(new q.o(q.r.unknown,"monster",f,y)))),P)}}},554:(bt,it,D)=>{D.d(it,{r:()=>q});var t=D(5861),V=D(3692),B=D(1188);const q=new class Y{constructor(){this.defaultLocale="en",this.defaultEditions=["gh","fc","jotl","fh","cs","solo"],this.defaultEditionDataUrls=["./assets/data/gh.json","./assets/data/fc.json","./assets/data/jotl.json","./assets/data/fh.json","./assets/data/cs.json","./assets/data/solo.json","./assets/data/sox.json","./assets/data/bas.json"],this.settings=new V.Z,this.label={},this.locales=["en","de","fr"],this.loadSettings()}reset(){localStorage.removeItem("ghs-settings"),this.loadSettings()}loadSettings(){var x=this;return(0,t.Z)(function*(){const S=localStorage.getItem("ghs-settings");if(null!=S)x.settings=Object.assign(new V.Z,JSON.parse(S));else try{yield fetch("./ghs-settings-default.json").then(F=>{if(!F.ok)throw Error();return F.json()}).then(F=>{x.settings=Object.assign(new V.Z,F)})}catch{x.settings=new V.Z}if((!x.settings.editions||0==x.settings.editions.length)&&x.settings.editions.push(...x.defaultEditions),!x.settings.editionDataUrls||0==x.settings.editionDataUrls.length)for(let F of x.defaultEditionDataUrls)-1==x.settings.editionDataUrls.indexOf(F)&&-1==x.settings.excludeEditionDataUrls.indexOf(F)&&x.settings.editionDataUrls.push(F);x.setLocale(x.settings.locale),x.sortSpoilers()})()}init(){var x=this;return(0,t.Z)(function*(){for(let S of x.defaultEditionDataUrls)-1==q.settings.editionDataUrls.indexOf(S)&&-1==q.settings.excludeEditionDataUrls.indexOf(S)&&q.settings.editionDataUrls.push(S);for(let S of q.settings.editionDataUrls)yield q.loadEditionData(S)})()}storeSettings(){localStorage.setItem("ghs-settings",JSON.stringify(this.settings)),this.settings.serverSettings&&B.v.stateManager.saveSettings(),B.v.uiChange.emit()}setCalculate(x){this.settings.calculate=x,this.storeSettings()}setCalculateStats(x){this.settings.calculateStats=x,this.storeSettings()}setAbilityNumbers(x){this.settings.abilityNumbers=x,this.storeSettings()}setEliteFirst(x){this.settings.eliteFirst=x,this.storeSettings()}setExpireConditions(x){this.settings.expireConditions=x,this.storeSettings()}setApplyConditions(x){this.settings.applyConditions=x,this.storeSettings()}setActiveApplyConditions(x){this.settings.activeApplyConditions=x,this.storeSettings()}setMoveElements(x){this.settings.moveElements=x,this.storeSettings()}setHideStats(x){this.settings.hideStats=x,this.storeSettings()}setRandomStandees(x){this.settings.randomStandees=x,this.storeSettings()}setActiveStandees(x){this.settings.activeStandees=x,this.storeSettings()}setAllyAttackModifierDeck(x){this.settings.allyAttackModifierDeck=x,this.storeSettings()}setInitiativeRequired(x){this.settings.initiativeRequired=x,this.storeSettings()}setDisableStandees(x){this.settings.disableStandees=x,this.storeSettings()}setDragValues(x){this.settings.dragValues=x,this.storeSettings()}setHideAbsent(x){this.settings.hideAbsent=x,this.storeSettings()}setFullscreen(x){this.settings.fullscreen=x,this.storeSettings()}setFhStyle(x){this.settings.fhStyle=x,this.storeSettings()}setDisableColumns(x){this.settings.disableColumns=x,this.storeSettings()}setAutoscroll(x){this.settings.autoscroll=x,this.storeSettings()}setHints(x){this.settings.hints=x,this.storeSettings()}setBrowserNavigation(x){this.settings.browserNavigation=x,this.storeSettings()}setZoom(x){this.settings.zoom=x,this.storeSettings()}setBarsize(x){this.settings.barsize=x,this.storeSettings()}setFontsize(x){this.settings.fontsize=x,this.storeSettings()}setServerAutoconnect(x){this.settings.serverAutoconnect=x,this.storeSettings()}setServerSettings(x){this.settings.serverSettings=x,x?B.v.stateManager.requestSettings():this.storeSettings()}setServerWss(x){this.settings.serverWss=x,this.storeSettings()}setServer(x,S,F){this.settings.serverUrl=x,this.settings.serverPort=S,this.settings.serverPassword=F,this.storeSettings()}setMaxUndo(x){this.settings.maxUndo=x,this.storeSettings()}setDebugRightClick(x){this.settings.debugRightClick=x,this.storeSettings()}addSpoiler(x){-1==this.settings.spoilers.indexOf(x)&&(this.settings.spoilers.push(x),this.sortSpoilers(),this.storeSettings())}addSpoilers(x){for(let S of x)-1==this.settings.spoilers.indexOf(S.name)&&this.settings.spoilers.push(S.name);this.storeSettings()}removeSpoiler(x){-1!=this.settings.spoilers.indexOf(x)&&(this.settings.spoilers.splice(this.settings.spoilers.indexOf(x),1),this.storeSettings())}removeAllSpoilers(){this.settings.spoilers=[],this.storeSettings()}addEdition(x){-1==this.settings.editions.indexOf(x)&&(this.settings.editions.push(x),this.storeSettings())}removeEdition(x){this.settings.editions.splice(this.settings.editions.indexOf(x),1),this.storeSettings()}sortSpoilers(){this.settings.spoilers.sort((x,S)=>x.toLowerCase()>S.toLowerCase()?1:x.toLowerCase()<S.toLowerCase()?-1:0)}cleanEditionData(){B.v.editionData=[]}loadEditionData(x){var S=this;return(0,t.Z)(function*(){try{return yield fetch(x).then(E=>{if(E.ok)return E.json();console.warn("Invalid data url: "+x+" ["+E.statusText+"]")}).then(E=>-1!=B.v.editions().indexOf(E.edition)?(console.warn("Edition already exists: "+E.edition),!1):(E.url=x,B.v.editionData.push(E),B.v.editionData.sort((R,U)=>S.settings.editionDataUrls.indexOf(R.url)-S.settings.editionDataUrls.indexOf(U.url)),S.loadDataLabel(E),!0))}catch(F){return console.warn("Invalid data url: "+x+" ["+F+"]"),!1}})()}loadDataLabel(x){this.label.data||(this.label.data={}),this.settings.locale!=this.defaultLocale&&x.label&&x.label[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,x.label[this.defaultLocale]),x.labelSpoiler&&x.labelSpoiler[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,x.labelSpoiler[this.defaultLocale]))),x.label&&x.label[this.settings.locale]&&(this.label.data=this.merge(this.label.data,x.label[this.settings.locale])),x.labelSpoiler&&x.labelSpoiler[this.settings.locale]&&(this.label.data=this.merge(this.label.data,x.labelSpoiler[this.settings.locale])),this.label.data.edition||(this.label.data.edition={}),this.label.data.character||(this.label.data.character={}),this.label.data.monster||(this.label.data.monster={}),this.label.data.deck||(this.label.data.deck={}),this.label.data.ability||(this.label.data.ability={}),this.label.data.scenario||(this.label.data.scenario={}),this.label.data.scenario.group||(this.label.data.scenario.group={}),this.label.data.section||(this.label.data.section={}),this.label.data.objective||(this.label.data.objective={}),this.label.data.summon||(this.label.data.summon={})}isObject(x){return x&&"object"==typeof x&&!Array.isArray(x)}merge(x,...S){if(!S.length)return x;const F=x;if(this.isObject(F)){const E=S.length;for(let R=0;R<E;R+=1){const U=S[R];if(this.isObject(U))for(const ct in U)U.hasOwnProperty(ct)&&(this.isObject(U[ct])?((!F[ct]||!this.isObject(F[ct]))&&(F[ct]={}),this.merge(F[ct],U[ct])):F[ct]=Array.isArray(F[ct])&&Array.isArray(U[ct])?Array.from(new Set(F[ct].concat(U[ct]))):U[ct])}}return F}getEditionByUrl(x){if(B.v.editionData.some(S=>S.url==x))return B.v.editionData.find(S=>S.url==x)?.edition;console.error("No edition data found for url '"+x+"'")}addEditionDataUrl(x){var S=this;return(0,t.Z)(function*(){return!(-1!=S.settings.editionDataUrls.indexOf(x)||!(yield S.loadEditionData(x))||(S.settings.editionDataUrls.push(x),B.v.editionData.sort((E,R)=>S.settings.editionDataUrls.indexOf(E.url)-S.settings.editionDataUrls.indexOf(R.url)),-1!=S.settings.excludeEditionDataUrls.indexOf(x)&&S.settings.excludeEditionDataUrls.splice(S.settings.excludeEditionDataUrls.indexOf(x),1),S.storeSettings(),0))})()}removeEditionDataUrl(x){var S=this;return(0,t.Z)(function*(){-1!=S.settings.editionDataUrls.indexOf(x)&&(B.v.editionData=B.v.editionData.filter(F=>F.url!=x),S.settings.editionDataUrls.splice(S.settings.editionDataUrls.indexOf(x),1),-1!=S.defaultEditionDataUrls.indexOf(x)&&S.settings.excludeEditionDataUrls.push(x),S.storeSettings())})()}restoreDefaultEditionDataUrls(){var x=this;return(0,t.Z)(function*(){for(let S of x.defaultEditionDataUrls)-1==x.settings.editionDataUrls.indexOf(S)&&(x.settings.editionDataUrls.push(S),yield x.loadEditionData(S));x.settings.editionDataUrls.sort((S,F)=>-1!=x.defaultEditionDataUrls.indexOf(S)&&-1!=x.defaultEditionDataUrls.indexOf(F)?x.defaultEditionDataUrls.indexOf(S)-x.defaultEditionDataUrls.indexOf(F):-1!=x.defaultEditionDataUrls.indexOf(S)&&-1==x.defaultEditionDataUrls.indexOf(F)?-1:-1==x.defaultEditionDataUrls.indexOf(S)&&-1!=x.defaultEditionDataUrls.indexOf(F)?1:x.settings.editionDataUrls.indexOf(S)-x.settings.editionDataUrls.indexOf(F)),B.v.editionData.sort((S,F)=>x.settings.editionDataUrls.indexOf(S.url)-x.settings.editionDataUrls.indexOf(F.url)),x.storeSettings()})()}setLocale(x){var S=this;return(0,t.Z)(function*(){x!=S.defaultLocale&&(yield fetch("./assets/locales/"+S.defaultLocale+".json").then(F=>F.json()).then(F=>{S.label=S.merge(S.label,F)}).catch(F=>{console.error("Invalid locale: "+x,F)})),yield fetch("./assets/locales/"+x+".json").then(F=>(S.settings.locale=x,F.json())).then(F=>{S.label=S.merge(S.label,F),S.storeSettings()}).catch(F=>{console.error("Invalid locale: "+x,F)}),S.label.data={};for(let F of B.v.editionData)S.loadDataLabel(F)})()}getLabel(x,S=[],F=!0,E=this.label,R="",U=!1){if(x+="",!E)return U?this.emptyLabel(x,S,R):R&&x?this.getLabel(x):x||"";if(E[x])return"object"==typeof E[x]?E[x]["."]?this.insertLabelArguments(E[x]["."],S,F):U?this.emptyLabel(x,S,R):R&&x?this.getLabel(x):x||"":this.insertLabelArguments(E[x],S,F);{let ct=x.split(".");if(E[ct[0]])return x=ct.slice(1,ct.length).join("."),this.getLabel(x,S,F,E[ct[0]],R+ct[0]+".",U)}return U?this.emptyLabel(x,S,R):R&&x?this.getLabel(x):x||""}emptyLabel(x,S,F){return(F?F+(F.endsWith(".")?"":"."):"")+x+(S&&S.length>0?" ["+S+"]":"")}insertLabelArguments(x,S,F){if(S)for(let E in S)for(;-1!=x.indexOf(`{${E}}`);)x=x.replace(`{${E}}`,F?this.getLabel(S[E]):S[E]);return x}}},62:(bt,it,D)=>{D.d(it,{UO:()=>st,US:()=>Y,YY:()=>B,fy:()=>F,kl:()=>t,tI:()=>V,u$:()=>x,ut:()=>S});var t=(()=>{return(E=t||(t={})).plus0="plus0",E.plus1="plus1",E.plus2="plus2",E.plus3="plus3",E.plus4="plus4",E.plusX="plusX",E.minus1="minus1",E.minus2="minus2",E.null="null",E.double="double",E.bless="bless",E.curse="curse",E.invalid="invalid",t;var E})(),V=(()=>{return(E=V||(V={})).plus="plus",E.minus="minus",E.multiply="multiply",V;var E})();class B{constructor(R,U,ct=[],z=!1){switch(this.value=0,this.valueType=V.plus,this.shuffle=!1,this.revealed=!1,this.character=!1,this.type=R,this.id=U||R,this.effects=ct,this.rolling=z,R){case t.plus0:this.value=0;break;case t.plus1:this.value=1;break;case t.plus2:this.value=2;break;case t.plus3:this.value=3;break;case t.plus4:this.value=4;break;case t.minus1:this.valueType=V.minus,this.value=1;break;case t.minus2:this.valueType=V.minus,this.value=2;break;case t.null:this.valueType=V.multiply,this.value=0,this.shuffle=!0;break;case t.double:this.valueType=V.multiply,this.value=2,this.shuffle=!0;break;case t.bless:this.valueType=V.multiply,this.value=2;break;case t.curse:this.valueType=V.multiply,this.value=0}}}var Y=(()=>{return(E=Y||(Y={})).changeType="changeType",E.condition="condition",E.custom="custom",E.element="element",E.elementHalf="elementHalf",E.heal="heal",E.pierce="pierce",E.pull="pull",E.push="push",E.range="range",E.refreshItem="refreshItem",E.retaliate="retaliate",E.shield="shield",E.specialTarget="specialTarget",E.summon="summon",E.swing="swing",E.target="target",Y;var E})();const st=[new B(t.plus0),new B(t.plus1),new B(t.minus1),new B(t.plus2),new B(t.minus2),new B(t.double),new B(t.null),new B(t.bless),new B(t.curse)],x=[t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus1,t.plus1,t.plus1,t.plus1,t.plus1,t.minus1,t.minus1,t.minus1,t.minus1,t.minus1,t.plus2,t.minus2,t.double,t.null];class S{constructor(){this.attackModifiers=JSON.parse(JSON.stringify(st)),this.current=-1,this.cards=x.map(R=>this.cardById(R)||new B(t.invalid))}cardById(R){let U=this.attackModifiers.find(ct=>ct.id==R);if(U)return JSON.parse(JSON.stringify(U))}toModel(){return new F(this.current,this.cards.map(R=>R&&R.id||""))}fromModel(R){R.current!=this.current&&(this.current=+R.current),this.cards=R.cards.map(U=>this.cardById(U)||new B(t.invalid))}}class F{constructor(R,U){this.current=R,this.cards=U}}},641:(bt,it,D)=>{D.d(it,{z:()=>F});var t=D(6998),V=D(2713),B=D(2679),Y=D(1188),q=D(1412),st=D(8557),x=D(5205),S=D(62);class F extends V.x{constructor(U,ct){super(U),this.title="",this.initiative=0,this.experience=0,this.loot=0,this.exhausted=!1,this.summons=[],this.donations=0,this.initiativeVisible=!1,this.attackModifierDeckVisible=!1,this.fullview=!1,this.number=0,this.absent=!1,this.off=!1,this.active=!1,this.entityConditions=[],this.markers=[],this.errors=U.errors||[],ct<1?ct=1:ct>9&&(ct=9);const z=this.stats.find(X=>X.level==ct);z?(this.stat=z,this.level=ct,this.maxHealth=this.stat.health):(!this.errors.find(X=>X.type==q.r.unknown)&&!this.errors.find(X=>X.type==q.r.stat)&&(console.error("No character stat found for level: "+ct),this.errors.push(new q.o(q.r.stat,"character",U.name,U.edition,"",""+ct))),this.stat=new t.a(ct,0),this.level=0,this.maxHealth=0),this.health=this.maxHealth,this.progress=new x.f,"jotl"!=this.edition&&0==this.progress.gold&&(this.progress.gold=15*(this.level+1)),this.attackModifierDeck=Y.v.attackModifierManager.buildCharacterAttackModifierDeck(this)}getInitiative(){return this.absent?200:this.exhausted||this.health<=0?100:this.initiative}toModel(){return new E(this.name,this.edition,this.marker,this.title,this.initiative,this.experience,this.loot,this.exhausted,this.level,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(U=>U.toModel()),this.markers,this.summons.map(U=>U.toModel()),this.progress,this.initiativeVisible,this.attackModifierDeckVisible,this.fullview,this.number,this.attackModifierDeck.toModel(),this.donations,this.absent)}fromModel(U){if(this.edition=U.edition,!this.edition){const z=Y.v.charactersData(!0).find(X=>X.name==U.name);this.edition=z?z.edition:""}if(this.marker=U.marker||this.marker,this.title=U.title,(!this.initiativeVisible||U.initiative<=0||this.initiative!=U.initiative)&&(this.initiativeVisible=U.initiativeVisible),U.number)this.number=U.number;else for(this.number=1;Y.v.game.figures.some(z=>z instanceof F&&(z.name!=this.name||z.edition!=this.edition)&&z.number==this.number);)this.number++;this.initiative=U.initiative,this.experience=U.experience,this.loot=U.loot,this.exhausted=U.exhausted,this.level=U.level,this.off=U.off,this.active=U.active,this.health=U.health,this.maxHealth=U.maxHealth,this.entityConditions=[],U.entityConditions&&(this.entityConditions=U.entityConditions.map(z=>{let X=new st.hT(z.name,z.value);return X.fromModel(z),X})),this.markers=U.markers,this.summons=this.summons.filter(z=>{let X=!1;return U.summons.forEach(W=>{W.number!=z.number||W.color!=z.color||(X=!0)}),X}),U.summons.forEach(z=>{let X=this.summons.find(W=>W.name==W.name&&W.number==z.number&&W.color==z.color);X||(X=new B.eU(z.name,z.level,z.number,z.color),this.summons.push(X)),X.fromModel(z)}),this.progress=new x.f,U.progress&&(this.progress=Object.assign(new x.f,U.progress)),this.progress.loot&&!this.progress.gold&&(this.progress.gold=this.progress.loot,this.progress.loot=0);let ct=Y.v.attackModifierManager.buildCharacterAttackModifierDeck(this);U.attackModifierDeck&&ct.fromModel(U.attackModifierDeck),this.mergeAttackModifierDeck(ct),U.attackModifierDeckVisible&&(this.attackModifierDeckVisible=!0),this.fullview=U.fullview,this.donations=U.donations||0,this.absent=U.absent}mergeAttackModifierDeck(U){let ct=!1;return this.attackModifierDeck||(this.attackModifierDeck=new S.ut,ct=!0),this.attackModifierDeck.current!=U.current&&(this.attackModifierDeck.current=U.current,ct=!0),(this.attackModifierDeck.attackModifiers.length!=U.attackModifiers.length||!this.attackModifierDeck.attackModifiers.map(z=>z.id).every((z,X)=>U.attackModifiers[X].id==z))&&(this.attackModifierDeck.attackModifiers=U.attackModifiers,ct=!0),(this.attackModifierDeck.cards.length!=U.cards.length||!this.attackModifierDeck.cards.map(z=>z.id).every((z,X)=>U.cards[X].id==z))&&(this.attackModifierDeck.cards=U.cards,ct=!0),ct}}class E{constructor(U,ct,z,X,W,lt,rt,Ct,ie,gt,at,Lt,oe,kt,vt,wt,K,$,ot,tt,J,ft,f,y){this.name=U,this.edition=ct,this.marker=z,this.title=X,this.initiative=W,this.experience=lt,this.loot=rt,this.exhausted=Ct,this.level=ie,this.off=gt,this.active=at,this.health=Lt,this.maxHealth=oe,this.entityConditions=JSON.parse(JSON.stringify(kt)),this.markers=vt,this.summons=wt,this.progress=JSON.parse(JSON.stringify(K)),this.initiativeVisible=$,this.attackModifierDeckVisible=ot,this.fullview=tt,this.number=J,this.attackModifierDeck=ft,this.donations=f,this.absent=y}}},5205:(bt,it,D)=>{D.d(it,{f:()=>t});class t{constructor(){this.experience=0,this.gold=0,this.loot=0,this.items=[],this.personalQuest=0,this.battleGoals=0,this.notes="",this.retired=!1,this.retirements=0,this.perks=[],this.donations=0}}},6998:(bt,it,D)=>{D.d(it,{a:()=>t});class t{constructor(B,Y){this.level=B,this.health=Y}}},8557:(bt,it,D)=>{D.d(it,{CP:()=>V,G3:()=>x,fT:()=>t,gP:()=>Y,hT:()=>q,tT:()=>B});var t=(()=>{return(S=t||(t={})).stun="stun",S.immobilize="immobilize",S.disarm="disarm",S.wound="wound",S.muddle="muddle",S.poison="poison",S.invisible="invisible",S.strengthen="strengthen",S.curse="curse",S.bless="bless",S.regenerate="regenerate",S.chill="chill",S.infect="infect",S.ward="ward",S.bane="bane",S.brittle="brittle",S.impair="impair",S.rupture="rupture",S.poison_x="poison_x",S.wound_x="wound_x",t;var S})(),V=(()=>{return(S=V||(V={})).action="action",S.standard="standard",S.entity="entity",S.character="character",S.monster="monster",S.upgrade="upgrade",S.stack="stack",S.turn="turn",S.expire="expire",S.value="value",S.clearHeal="clearHeal",S.preventHeal="preventHeal",S.apply="apply",S.positive="positive",S.negative="negative",V;var S})(),B=(()=>{return(S=B||(B={})).normal="normal",S.expire="expire",S.turn="turn",B;var S})();class Y{constructor(F,E=1){this.types=[],this.value=1,this.name=F,this.value=E,this.types.push(V.action),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.ward,t.rupture,t.poison_x,t.wound_x].indexOf(this.name)&&this.types.push(V.entity),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.impair,t.rupture,t.ward].indexOf(this.name)&&this.types.push(V.standard),(-1!=this.types.indexOf(V.entity)||-1!=[t.chill,t.impair,t.ward].indexOf(this.name))&&this.types.push(V.character),-1!=this.types.indexOf(V.entity)&&this.types.push(V.monster),-1!=[t.poison_x,t.wound_x].indexOf(this.name)&&(this.types.push(V.upgrade),this.types.push(V.value)),-1!=[t.chill].indexOf(this.name)&&this.types.push(V.stack),-1!=[t.wound,t.wound_x,t.regenerate].indexOf(this.name)&&this.types.push(V.turn),-1!=[t.wound,t.wound_x,t.poison,t.poison_x,t.bane,t.brittle,t.infect,t.rupture].indexOf(this.name)&&this.types.push(V.clearHeal),-1!=[t.poison,t.poison_x,t.ward,t.brittle].indexOf(this.name)&&this.types.push(V.apply),-1!=[t.poison,t.poison_x,t.infect].indexOf(this.name)&&this.types.push(V.preventHeal),-1!=[t.stun,t.immobilize,t.disarm,t.muddle,t.invisible,t.strengthen,t.impair].indexOf(this.name)&&this.types.push(V.expire),-1!=[t.regenerate,t.ward,t.invisible,t.strengthen,t.bless].indexOf(this.name)&&this.types.push(V.positive),-1==this.types.indexOf(V.positive)&&this.types.push(V.negative)}}class q extends Y{constructor(F,E=1){super(F,E),this.expired=!1,this.highlight=!1,this.state=B.normal}toModel(){return new st(this.name,this.value,this.state,this.expired,this.highlight)}fromModel(F){this.name=F.name,this.value=F.value,this.state=F.state,this.expired=F.expired,this.highlight=F.highlight}}class st{constructor(F,E,R,U,ct){this.highlight=!1,this.name=F,this.value=E,this.state=R,this.expired=U,this.highlight=ct}}const x=Object.values(t).map(S=>new Y(S))},4922:(bt,it,D)=>{D.d(it,{W_:()=>t,fq:()=>V,gf:()=>Y});var t=(()=>{return(q=t||(t={})).all="all",q.fire="fire",q.ice="ice",q.air="air",q.earth="earth",q.light="light",q.dark="dark",t;var q})(),V=(()=>{return(q=V||(V={})).strong="strong",q.waning="waning",q.inert="inert",q.new="new",V;var q})();class B{constructor(st){this.state=V.inert,this.type=st}}const Y=[new B(t.fire),new B(t.ice),new B(t.air),new B(t.earth),new B(t.light),new B(t.dark)]},2944:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GB:()=>EntityExpressionRegex,HY:()=>EntityValueRegex,j9:()=>EntityValueFunction});var _businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1188),_Character__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(641);const EntityExpressionRegex=/^([xCL0-9\+\/\-\*\(\)]+)$/,EntityValueRegex=/\[([xCL0-9\+\/\-\*\(\)]+)(\{(.*)\})?\]/;function EntityValueFunction(value,L){if(!value)return 0;let expression=value,func;const match=value.match(EntityValueRegex);match&&match[0].length==value.length&&(expression=match[1],func=match[3]);let C=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.figures.filter(bt=>bt instanceof _Character__WEBPACK_IMPORTED_MODULE_1__.z).length;C<1&&(C=1),null==L&&(L=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.level),expression=expression.replace(/[x]/g,"*"),expression=expression.replace(/[C]/g,""+C),expression=expression.replace(/[L]/g,""+L);let result=eval(expression);if(func&&func.startsWith("%")&&(func=func.replace("%","")),func)switch(func){case"math.ceil":result=Math.ceil(result);break;case"math.floor":result=Math.floor(result);break;default:console.error("Unknown expression: "+func+"("+match+")")}return Math.round(result)}},1412:(bt,it,D)=>{D.d(it,{o:()=>V,r:()=>t});var t=(()=>{return(B=t||(t={})).deck="deck",B.stat="stat",B.monsterType="monsterType",B.unknown="unknown",t;var B})();class V{constructor(Y,...q){this.type=Y,this.args=q}}},83:(bt,it,D)=>{D.d(it,{D2:()=>R,i4:()=>U,lA:()=>E});var t=D(1188),V=D(554),B=D(62),Y=D(641),q=D(4922),st=D(1502),x=D(8386),S=D(2721),F=D(7918);class E{constructor(){this.edition=void 0,this.figures=[],this.state=R.draw,this.scenario=void 0,this.sections=[],this.level=1,this.levelCalculation=!0,this.levelAdjustment=0,this.bonusAdjustment=0,this.ge5Player=!0,this.round=0,this.playSeconds=0,this.totalSeconds=0,this.monsterAttackModifierDeck=new B.ut,this.allyAttackModifierDeck=new B.ut,this.solo=!1,this.elementBoard=JSON.parse(JSON.stringify(q.gf)),this.party=new S.f,this.parties=[this.party]}toModel(){return new U(this.edition,this.figures.map(z=>z.name),this.figures.filter(z=>z instanceof Y.z).map(z=>z.toModel()),this.figures.filter(z=>z instanceof st.Q).map(z=>z.toModel()),this.figures.filter(z=>z instanceof x.C).map(z=>z.toModel()),this.state,this.scenario&&t.v.scenarioManager.toModel(this.scenario,this.scenario.custom,this.scenario.custom?this.scenario.name:"")||void 0,this.sections.map(z=>t.v.scenarioManager.toModel(z)),this.level,this.levelCalculation,this.levelAdjustment,this.bonusAdjustment,this.ge5Player,this.round,this.playSeconds,this.totalSeconds,this.monsterAttackModifierDeck.toModel(),this.allyAttackModifierDeck.toModel(),this.elementBoard,this.solo,this.party,this.parties)}fromModel(z,X=!1){if(this.edition=z.edition,this.figures=this.figures.filter(W=>-1!=z.characters.map(lt=>lt.name).indexOf(W.name)||-1!=z.monsters.map(lt=>lt.name).indexOf(W.name)||-1!=z.objectives.map(lt=>lt.name).indexOf(W.name)),z.characters.forEach(W=>{let lt=this.figures.find(rt=>rt instanceof Y.z&&rt.name==W.name&&rt.edition==W.edition);lt||(lt=new Y.z(t.v.getCharacterData(W.name,W.edition),W.level),this.figures.push(lt)),lt.fromModel(W)}),z.monsters.forEach(W=>{let lt=this.figures.find(rt=>rt instanceof st.Q&&rt.name==W.name&&rt.edition==W.edition);lt||(lt=new st.Q(t.v.getMonsterData(W.name,W.edition)),this.figures.push(lt)),lt.fromModel(W)}),z.objectives.forEach(W=>{let lt=this.figures.find(rt=>rt instanceof x.C&&rt.id==W.id);if(!lt){if(!W.id)for(W.id=0;this.figures.some(rt=>rt instanceof x.C&&rt.id==W.id);)W.id++;lt=new x.C(W.id),this.figures.push(lt)}lt.fromModel(W)}),this.figures=this.figures.filter(W=>!(W instanceof x.C)||z.objectives.some(lt=>lt.id==W.id)),this.figures.sort((W,lt)=>z.figures.indexOf(W.name)-z.figures.indexOf(lt.name)),this.state=z.state,z.scenario){const W=t.v.scenarioManager.scenarioDataForModel(z.scenario);this.scenario=W?new F.$(W,z.scenario.isCustom):void 0}else this.scenario=void 0;this.sections=[],z.sections.forEach(W=>{const lt=t.v.scenarioManager.sectionDataForModel(W);lt&&this.sections.push(lt)}),this.level=z.level,null!=V.r.settings.levelCalculation&&(z.levelCalculation=V.r.settings.levelCalculation,V.r.settings.levelCalculation=void 0,V.r.storeSettings()),null!=V.r.settings.levelAdjustment&&(z.levelAdjustment=V.r.settings.levelAdjustment,V.r.settings.levelAdjustment=void 0,V.r.storeSettings()),null!=V.r.settings.bonusAdjustment&&(z.bonusAdjustment=V.r.settings.bonusAdjustment,V.r.settings.bonusAdjustment=void 0,V.r.storeSettings()),null!=V.r.settings.ge5Player&&(z.ge5Player=V.r.settings.ge5Player,V.r.settings.ge5Player=void 0,V.r.storeSettings()),this.levelCalculation=z.levelCalculation,this.levelAdjustment=z.levelAdjustment,this.bonusAdjustment=z.bonusAdjustment,this.ge5Player=z.ge5Player,this.round=z.round,z.playSeconds>this.playSeconds&&(this.playSeconds=z.playSeconds),z.totalSeconds>this.totalSeconds&&(this.totalSeconds=z.totalSeconds),this.monsterAttackModifierDeck=this.monsterAttackModifierDeck||new B.ut,z.monsterAttackModifierDeck&&z.monsterAttackModifierDeck.cards&&z.monsterAttackModifierDeck.cards.length>0&&this.monsterAttackModifierDeck.fromModel(z.monsterAttackModifierDeck),z.attackModifier&&z.attackModifiers&&this.monsterAttackModifierDeck.fromModel(new B.fy(z.attackModifier,z.attackModifiers)),this.allyAttackModifierDeck=this.allyAttackModifierDeck||new B.ut,z.allyAttackModifierDeck&&z.allyAttackModifierDeck.cards&&z.allyAttackModifierDeck.cards.length>0&&this.allyAttackModifierDeck.fromModel(z.allyAttackModifierDeck),this.elementBoard=this.elementBoard||q.gf,z.elementBoard&&z.elementBoard.forEach((W,lt)=>this.elementBoard[lt].state=W.state),z.newElements.forEach(W=>{const lt=this.elementBoard.find(rt=>rt.type==W);lt&&(lt.state=q.fq.new)}),z.strongElements.forEach(W=>{const lt=this.elementBoard.find(rt=>rt.type==W);lt&&(lt.state=q.fq.strong)}),z.elements.forEach(W=>{const lt=this.elementBoard.find(rt=>rt.type==W);lt&&(lt.state=q.fq.waning)}),this.solo=z.solo,this.party=z.party?Object.assign(new S.f,z.party):new S.f,this.parties=[this.party],z.parties&&z.parties.forEach(W=>{W.id!=this.party.id&&this.parties.push(Object.assign(new S.f,W))})}}var R=(()=>{return(ct=R||(R={})).draw="draw",ct.next="next",R;var ct})();class U{constructor(z,X=[],W=[],lt=[],rt=[],Ct=R.next,ie,gt=[],at=0,Lt=!0,oe=0,kt=0,vt=!0,wt=0,K=0,$=0,ot=new B.fy(-1,B.u$),tt=new B.fy(-1,B.u$),J=[],ft=!1,f=new S.f,y=[]){this.sections=[],this.newElements=[],this.strongElements=[],this.elements=[],this.edition=z,this.figures=X,this.characters=W,this.monsters=lt,this.objectives=rt,this.state=Ct,this.scenario=ie,this.sections=gt,this.level=at,this.levelCalculation=Lt,this.levelAdjustment=oe,this.bonusAdjustment=kt,this.ge5Player=vt,this.round=wt,this.playSeconds=K,this.totalSeconds=$,this.monsterAttackModifierDeck=ot,this.allyAttackModifierDeck=tt,this.elementBoard=JSON.parse(JSON.stringify(J)),this.solo=ft,this.party=JSON.parse(JSON.stringify(f)),this.parties=JSON.parse(JSON.stringify(y))}}},1502:(bt,it,D)=>{D.d(it,{Q:()=>q});var t=D(982),V=D(1599),B=D(1188),Y=D(2679);class q extends V.A{constructor(S){if(super(S.name,S.count,S.baseStat,S.stats,S.edition,S.deck,S.boss,S.flying,S.thumbnail,S.thumbnailUrl,S.spoiler),this.summonColor=Y.mp.blue,this.level=1,this.off=!1,this.active=!1,this.drawExtra=!1,this.ability=-1,this.abilities=[],this.entities=[],this.isAlly=!1,this.errors=S.errors,S.baseStat)for(let F of S.stats){if(!F.health&&0!=F.health&&(F.health=S.baseStat.health||0),!F.movement&&0!=F.movement&&(F.movement=S.baseStat.movement||0),!F.attack&&0!=F.attack&&(F.attack=S.baseStat.attack||0),!F.range&&0!=F.range&&(F.range=S.baseStat.range||0),F.actions||(F.actions=Object.assign([],S.baseStat.actions)),F.immunities||(F.immunities=Object.assign([],S.baseStat.immunities)),!F.special&&(F.special=[],S.baseStat.special))for(let E of S.baseStat.special)F.special.push(Object.assign([],E));F.note||(F.note=S.baseStat.note),F.type||(F.type=S.baseStat.type)}}getInitiative(){const S=B.v.monsterManager.getAbility(this);return this.entities.length>0&&this.entities.some(F=>!F.dead&&F.health>0)&&S&&S.initiative||100}toModel(){return new st(this.name,this.edition,this.level,this.off,this.active,this.drawExtra,this.ability,this.abilities,this.entities.map(S=>S.toModel()),this.isAlly)}fromModel(S){if(this.edition=S.edition,!this.edition){const F=B.v.monstersData(!0).find(E=>E.name==S.name);this.edition=F?F.edition:""}this.level=S.level,this.off=S.off,this.active=S.active,this.drawExtra=S.drawExtra,this.abilities=S.abilities&&S.abilities.length>0&&S.abilities||B.v.abilities(this)&&B.v.abilities(this).map((F,E)=>E)||[],this.ability=S.ability,this.entities=this.entities.filter(F=>-1!=S.entities.map(E=>E.number).indexOf(F.number)),S.entities.forEach(F=>{let E=this.entities.find(R=>R.number==F.number);E||(E=new t.g(F.number,F.type,this),this.entities.push(E)),E.fromModel(F)}),this.isAlly=S.isAlly}}class st{constructor(S,F,E,R,U,ct,z,X,W,lt){this.name=S,this.edition=F,this.level=E,this.off=R,this.active=U,this.drawExtra=ct,this.ability=z,this.abilities=X,this.entities=W,this.isAlly=lt}}},982:(bt,it,D)=>{D.d(it,{g:()=>st});var t=D(8557),V=D(2944),B=D(1412),Y=D(9239),q=D(2679);class st{constructor(F,E,R){this.dead=!1,this.summon=q.HY.false,this.active=!1,this.off=!1,this.entityConditions=[],this.markers=[],this.number=F,this.type=E;const U=R.stats.find(ct=>ct.level==R.level&&ct.type==E);U?this.stat=U:(this.stat=new Y.c(E,R.level,0,0,0,0),R.errors=R.errors||[],!R.errors.find(ct=>ct.type==B.r.unknown)&&!R.errors.find(ct=>ct.type==B.r.stat)&&(console.error("Could not find '"+E+"' stats for monster: "+R.name+" level: "+R.level),R.errors.push(new B.o(B.r.stat,"monster",R.name,R.edition,E,""+R.level)))),this.maxHealth="number"==typeof this.stat.health?this.stat.health:(0,V.j9)(this.stat.health,R.level),this.health=this.maxHealth,this.level=R.level}toModel(){return new x(this.number,this.type,this.dead,this.summon,this.active,this.off,this.health,this.maxHealth,this.entityConditions.map(F=>F.toModel()),this.markers)}fromModel(F){this.dead=F.dead,this.summon=F.summon,this.active=F.active,this.off=F.off,this.health=F.health,this.maxHealth=F.maxHealth,this.entityConditions=[],F.entityConditions&&(this.entityConditions=F.entityConditions.map(E=>{let R=new t.hT(E.name,E.value);return R.fromModel(E),R})),this.markers=F.markers}}class x{constructor(F,E,R,U,ct,z,X,W,lt,rt){this.number=F,this.type=E,this.dead=R,this.summon=U,this.active=ct,this.off=z,this.health=X,this.maxHealth=W,this.entityConditions=JSON.parse(JSON.stringify(lt)),this.markers=JSON.parse(JSON.stringify(rt))}}},9239:(bt,it,D)=>{D.d(it,{c:()=>t});class t{constructor(B,Y,q,st,x,S,F=[],E=[],R=[],U=""){this.type=B,this.level=Y,this.health=q,this.movement=st,this.attack=x,this.range=S,this.actions=F||[],this.immunities=E||[],this.special=R||[],this.note=U}}},7342:(bt,it,D)=>{D.d(it,{M:()=>t});var t=(()=>{return(V=t||(t={})).normal="normal",V.elite="elite",V.boss="boss",t;var V})()},8386:(bt,it,D)=>{D.d(it,{C:()=>V});var t=D(8557);class V{constructor(q){this.title="",this.exhausted=!1,this.escort=!1,this.name="",this.level=0,this.off=!1,this.active=!1,this.edition="",this.health=7,this.maxHealth=7,this.entityConditions=[],this.markers=[],this.initiative=99,this.id=q}getInitiative(){return this.exhausted||this.health<=0?100:this.initiative}toModel(){return new B(this.id,this.title,this.name,this.escort,this.level,this.exhausted,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(q=>q.toModel()),this.markers,this.initiative)}fromModel(q){this.id=q.id,this.title=q.title,this.name=q.name,this.escort=q.escort,this.level=q.level,this.exhausted=q.exhausted,this.off=q.off,this.active=q.active,this.health=q.health,this.maxHealth=q.maxHealth,this.entityConditions=[],q.entityConditions&&(this.entityConditions=q.entityConditions.map(st=>{let x=new t.hT(st.name,st.value);return x.fromModel(st),x})),this.markers=q.markers,this.initiative=q.initiative}}class B{constructor(q,st,x,S,F,E,R,U,ct,z,X,W,lt){this.entityConditions=[],this.markers=[],this.id=q,this.title=st,this.name=x,this.escort=S,this.level=F,this.exhausted=E,this.off=R,this.active=U,this.health=ct,this.maxHealth=z,this.entityConditions=JSON.parse(JSON.stringify(X)),this.markers=JSON.parse(JSON.stringify(W)),this.initiative=lt}}},2721:(bt,it,D)=>{D.d(it,{f:()=>t});class t{constructor(){this.id=0,this.name="",this.location="",this.notes="",this.achievements="",this.reputation=0,this.prosperity=0,this.scenarios=[],this.manualScenarios=[],this.campaignMode=!1,this.globalAchievements="",this.treasures=[],this.donations=0,this.characters=[]}}},1723:(bt,it,D)=>{D.d(it,{Ib:()=>Y}),D(62);var Y=(()=>{return(q=Y||(Y={})).add="add",q.remove="remove",q.replace="replace",q.custom="custom",Y;var q})()},7918:(bt,it,D)=>{D.d(it,{$:()=>V});var t=D(3951);class V extends t.t{constructor(Y,q=!1){super(Y.name,Y.index,Y.unlocks,Y.blocks,Y.requires,Y.links,Y.monsters,Y.allies,Y.objectives,Y.edition,Y.group,Y.spoiler),this.solo=Y.solo,this.custom=q}}},3692:(bt,it,D)=>{D.d(it,{Z:()=>t});class t{constructor(){this.calculate=!0,this.calculateStats=!0,this.abilityNumbers=!0,this.eliteFirst=!0,this.expireConditions=!0,this.applyConditions=!0,this.activeApplyConditions=!0,this.moveElements=!0,this.hideStats=!0,this.randomStandees=!1,this.activeStandees=!0,this.allyAttackModifierDeck=!0,this.initiativeRequired=!0,this.levelCalculation=void 0,this.levelAdjustment=void 0,this.bonusAdjustment=void 0,this.ge5Player=void 0,this.disableStandees=!1,this.fullscreen=!1,this.fhStyle=!1,this.autoscroll=!0,this.disableColumns=!1,this.dragValues=!0,this.hideAbsent=!1,this.hints=!0,this.zoom=100,this.barsize=1,this.fontsize=1,this.locale="en",this.editions=[],this.editionDataUrls=[],this.excludeEditionDataUrls=[],this.spoilers=[],this.browserNavigation=!1,this.serverAutoconnect=!0,this.serverSettings=!1,this.serverWss=!1,this.maxUndo=50,this.debugRightClick=!1}}},2679:(bt,it,D)=>{D.d(it,{HY:()=>V,eU:()=>Y,mp:()=>B});var t=D(8557),V=(()=>{return(st=V||(V={})).new="new",st.true="true",st.false="false",V;var st})(),B=(()=>{return(st=B||(B={})).blue="blue",st.green="green",st.yellow="yellow",st.orange="orange",st.white="white",st.purple="purple",st.pink="pink",st.red="red",st.custom="custom",B;var st})();class Y{constructor(x,S,F,E,R=2,U=0,ct=0,z=0){this.dead=!1,this.state=V.new,this.init=!0,this.entityConditions=[],this.markers=[],this.name=x,this.level=S,this.number=F,this.color=E,this.health=R,this.maxHealth=R,this.attack=U,this.movement=ct,this.range=z}toModel(){return new q(this.name,this.number,this.color,this.attack,this.movement,this.range,this.dead,this.state,this.level,this.health,this.maxHealth,this.entityConditions.map(x=>x.toModel()),this.markers)}fromModel(x){this.name=x.name||"",this.number=x.number,this.color=x.color,this.attack=x.attack,this.movement=x.movement,this.range=x.range,this.dead=x.dead,this.state=x.state,this.level=x.level,this.health=x.health,this.maxHealth=x.maxHealth,this.entityConditions=[],x.entityConditions&&(this.entityConditions=x.entityConditions.map(S=>{let F=new t.hT(S.name,S.value);return F.fromModel(S),F})),this.markers=x.markers,this.init=!1}}class q{constructor(x,S,F,E,R,U,ct,z,X,W,lt,rt,Ct){this.name=x,this.number=S,this.color=F,this.attack=E,this.movement=R,this.range=U,this.dead=ct,this.state=z,this.level=X,this.health=W,this.maxHealth=lt,this.entityConditions=rt,this.markers=Ct}}},2713:(bt,it,D)=>{D.d(it,{x:()=>V});class V{constructor(Y){this.name="",this.stats=[],this.availableSummons=[],this.color="#000000",this.marker=!1,this.deck="",this.perks=[],this.edition="",this.spoiler=!1,this.replace=!1,Y&&(this.errors=Y.errors||[],this.name=Y.name,this.stats=Y.stats||[],this.characterClass=Y.characterClass||void 0,this.availableSummons=Y.availableSummons||[],this.edition=Y.edition||"",this.iconUrl=Y.iconUrl||void 0,this.thumbnailUrl=Y.thumbnailUrl||void 0,this.color=Y.color||"#00000",this.marker=Y.marker||!1,this.spoiler=Y.spoiler||!1,this.deck=Y.deck,Y.deck&&(this.deck=Y.deck),this.perks=Y.perks||[])}}},3735:(bt,it,D)=>{D.d(it,{x:()=>t});class t{constructor(B,Y,q){this.name=B,this.abilities=Y,this.edition=q}}},1599:(bt,it,D)=>{D.d(it,{A:()=>t});class t{constructor(B,Y,q,st,x,S,F=!1,E=!1,R,U,ct=!1){this.errors=[],this.hidden=!1,this.replace=!1,this.errors=[],this.name=B,this.count=Y,this.baseStat=q,this.stats=st,this.edition=x,this.deck=B,S&&(this.deck=S),this.boss=F,this.flying=E,this.thumbnail=R,this.thumbnailUrl=U,this.spoiler=!0}}},3951:(bt,it,D)=>{D.d(it,{_:()=>V,t:()=>t});class t{constructor(Y,q,st,x,S,F,E,R,U,ct,z,X=!1){this.initial=!1,this.name=Y,this.index=q,this.unlocks=st,this.blocks=x,this.requires=S,this.links=F,this.monsters=E,this.allies=R,this.edition=ct,this.objectives=U,this.group=z,this.spoiler=X}}class V{constructor(Y,q,st,x=!1,S=""){this.index=Y,this.edition=q,this.group=st,this.isCustom=x,this.custom=S}}},2525:(bt,it,D)=>{var t=D(1571);
/**
       * @license Angular v14.2.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let V=null;function B(){return V}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const x=new t.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let S=(()=>{class i{historyGo(e){throw new Error("Not implemented")}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:function(){return function F(){return(0,t.LFG)(R)}()},providedIn:"platform"}),i})();const E=new t.OlP("Location Initialized");let R=(()=>{class i extends S{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return B().getBaseHref(this._doc)}onPopState(e){const n=B().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){const n=B().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,n,a){U()?this._history.pushState(e,n,a):this.location.hash=a}replaceState(e,n,a){U()?this._history.replaceState(e,n,a):this.location.hash=a}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:function(){return function ct(){return new R((0,t.LFG)(x))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),i})();function U(){return!!window.history.pushState}function z(i,o){if(0==i.length)return o;if(0==o.length)return i;let e=0;return i.endsWith("/")&&e++,o.startsWith("/")&&e++,2==e?i+o.substring(1):1==e?i+o:i+"/"+o}function X(i){const o=i.match(/#|\?|$/),e=o&&o.index||i.length;return i.slice(0,e-("/"===i[e-1]?1:0))+i.slice(e)}function W(i){return i&&"?"!==i[0]?"?"+i:i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let lt=(()=>{class i{historyGo(e){throw new Error("Not implemented")}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:function(){return(0,t.f3M)(Ct)},providedIn:"root"}),i})();const rt=new t.OlP("appBaseHref");let Ct=(()=>{class i extends lt{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??(0,t.f3M)(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return z(this._baseHref,e)}path(e=!1){const n=this._platformLocation.pathname+W(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${n}${a}`:n}pushState(e,n,a,l){const h=this.prepareExternalUrl(a+W(l));this._platformLocation.pushState(e,n,h)}replaceState(e,n,a,l){const h=this.prepareExternalUrl(a+W(l));this._platformLocation.replaceState(e,n,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(S),t.LFG(rt,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),ie=(()=>{class i extends lt{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=n&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash;return null==n&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(e){const n=z(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,a,l){let h=this.prepareExternalUrl(a+W(l));0==h.length&&(h=this._platformLocation.pathname),this._platformLocation.pushState(e,n,h)}replaceState(e,n,a,l){let h=this.prepareExternalUrl(a+W(l));0==h.length&&(h=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(S),t.LFG(rt,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})(),gt=(()=>{class i{constructor(e){this._subject=new t.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const n=this._locationStrategy.getBaseHref();this._baseHref=X(oe(n)),this._locationStrategy.onPopState(a=>{this._subject.emit({url:this.path(!0),pop:!0,state:a.state,type:a.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+W(n))}normalize(e){return i.stripTrailingSlash(function Lt(i,o){return i&&o.startsWith(i)?o.substring(i.length):o}(this._baseHref,oe(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",a=null){this._locationStrategy.pushState(a,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+W(n)),a)}replaceState(e,n="",a=null){this._locationStrategy.replaceState(a,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+W(n)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{const n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(a=>a(e,n))}subscribe(e,n,a){return this._subject.subscribe({next:e,error:n,complete:a})}}return i.normalizeQueryParams=W,i.joinWithSlash=z,i.stripTrailingSlash=X,i.\u0275fac=function(e){return new(e||i)(t.LFG(lt))},i.\u0275prov=t.Yz7({token:i,factory:function(){return function at(){return new gt((0,t.LFG)(lt))}()},providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oe(i){return i.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Rt=(()=>{class i{constructor(e,n,a,l){this._iterableDiffers=e,this._keyValueDiffers=n,this._ngEl=a,this._renderer=l,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&((0,t.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachChangedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachRemovedItem(n=>{n.previousValue&&this._toggleClass(n.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(n=>{if("string"!=typeof n.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,t.AaK)(n.item)}`);this._toggleClass(n.item,!0)}),e.forEachRemovedItem(n=>this._toggleClass(n.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!0)):Object.keys(e).forEach(n=>this._toggleClass(n,!!e[n])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!1)):Object.keys(e).forEach(n=>this._toggleClass(n,!1)))}_toggleClass(e,n){(e=e.trim())&&e.split(/\s+/g).forEach(a=>{n?this._renderer.addClass(this._ngEl.nativeElement,a):this._renderer.removeClass(this._ngEl.nativeElement,a)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.ZZ4),t.Y36(t.aQg),t.Y36(t.SBq),t.Y36(t.Qsj))},i.\u0275dir=t.lG2({type:i,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fe{constructor(o,e,n,a){this.$implicit=o,this.ngForOf=e,this.index=n,this.count=a}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Yt=(()=>{class i{constructor(e,n,a){this._viewContainer=e,this._template=n,this._differs=a,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const n=this._viewContainer;e.forEachOperation((a,l,h)=>{if(null==a.previousIndex)n.createEmbeddedView(this._template,new fe(a.item,this._ngForOf,-1,-1),null===h?void 0:h);else if(null==h)n.remove(null===l?void 0:l);else if(null!==l){const v=n.get(l);n.move(v,h),uh(v,a)}});for(let a=0,l=n.length;a<l;a++){const v=n.get(a).context;v.index=a,v.count=l,v.ngForOf=this._ngForOf}e.forEachIdentityChange(a=>{uh(n.get(a.currentIndex),a)})}static ngTemplateContextGuard(e,n){return!0}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(t.ZZ4))},i.\u0275dir=t.lG2({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),i})();function uh(i,o){i.context.$implicit=o.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Bt=(()=>{class i{constructor(e,n){this._viewContainer=e,this._context=new fs,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ps("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ps("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.s_b),t.Y36(t.Rgc))},i.\u0275dir=t.lG2({type:i,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),i})();class fs{constructor(){this.$implicit=null,this.ngIf=null}}function ps(i,o){if(o&&!o.createEmbeddedView)throw new Error(`${i} must be a TemplateRef, but received '${(0,t.AaK)(o)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xi{constructor(o,e){this._viewContainerRef=o,this._templateRef=e,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(o){o&&!this._created?this.create():!o&&this._created&&this.destroy()}}let Oe=(()=>{class i{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const n=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let n=0;n<this._defaultViews.length;n++)this._defaultViews[n].enforceState(e)}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=t.lG2({type:i,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0}),i})(),or=(()=>{class i{constructor(e,n,a){this.ngSwitch=a,a._addCase(),this._view=new xi(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(Oe,9))},i.\u0275dir=t.lG2({type:i,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0}),i})(),Be=(()=>{class i{constructor(e,n,a){a._addDefault(new xi(e,n))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(Oe,9))},i.\u0275dir=t.lG2({type:i,selectors:[["","ngSwitchDefault",""]],standalone:!0}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ya=(()=>{class i{transform(e,n,a){if(null==e)return null;if(!this.supports(e))
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
throw function li(i,o){return new t.vHH(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return e.slice(n,a)}supports(e){return"string"==typeof e||Array.isArray(e)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"slice",type:i,pure:!1,standalone:!0}),i})(),gv=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const hh="browser";function _s(i){return i===hh}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Gl=(()=>{class i{}return i.\u0275prov=(0,t.Yz7)({token:i,providedIn:"root",factory:()=>new dv((0,t.LFG)(x),window)}),i})();class dv{constructor(o,e){this.document=o,this.window=e,this.offset=()=>[0,0]}setOffset(o){this.offset=Array.isArray(o)?()=>o:o}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(o){this.supportsScrolling()&&this.window.scrollTo(o[0],o[1])}scrollToAnchor(o){if(!this.supportsScrolling())return;const e=function Le(i,o){const e=i.getElementById(o)||i.getElementsByName(o)[0];if(e)return e;if("function"==typeof i.createTreeWalker&&i.body&&(i.body.createShadowRoot||i.body.attachShadow)){const n=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT);let a=n.currentNode;for(;a;){const l=a.shadowRoot;if(l){const h=l.getElementById(o)||l.querySelector(`[name="${o}"]`);if(h)return h}a=n.nextNode()}}return null}(this.document,o);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(o){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=o)}}scrollToElement(o){const e=o.getBoundingClientRect(),n=e.left+this.window.pageXOffset,a=e.top+this.window.pageYOffset,l=this.offset();this.window.scrollTo(n-l[0],a-l[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const o=hv(this.window.history)||hv(Object.getPrototypeOf(this.window.history));return!(!o||!o.writable&&!o.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function hv(i){return Object.getOwnPropertyDescriptor(i,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xa extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class tg extends class st{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function q(i){V||(V=i)}(new Xa)}onAndCancel(o,e,n){return o.addEventListener(e,n,!1),()=>{o.removeEventListener(e,n,!1)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.parentNode&&o.parentNode.removeChild(o)}createElement(o,e){return(e=e||this.getDefaultDocument()).createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return"window"===e?window:"document"===e?o:"body"===e?o.body:null}getBaseHref(o){const e=function Ph(){return sr=sr||document.querySelector("base"),sr?sr.getAttribute("href"):null}();return null==e?null:function eg(i){ys=ys||document.createElement("a"),ys.setAttribute("href",i);const o=ys.pathname;return"/"===o.charAt(0)?o:`/${o}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}resetBaseElement(){sr=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function hs(i,o){o=encodeURIComponent(o);for(const e of i.split(";")){const n=e.indexOf("="),[a,l]=-1==n?[e,""]:[e.slice(0,n),e.slice(n+1)];if(a.trim()===o)return decodeURIComponent(l)}return null}(document.cookie,o)}}let ys,sr=null;const xh=new t.OlP("TRANSITION_ID"),fn=[{provide:t.ip1,useFactory:function Dv(i,o,e){return()=>{e.get(t.CZH).donePromise.then(()=>{const n=B(),a=o.querySelectorAll(`style[ng-transition="${i}"]`);for(let l=0;l<a.length;l++)n.remove(a[l])})}},deps:[xh,x,t.zs3],multi:!0}];let we=(()=>{class i{build(){return new XMLHttpRequest}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tc=new t.OlP("EventManagerPlugins");let ec=(()=>{class i{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(a=>a.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,n,a){return this._findPluginFor(n).addEventListener(e,n,a)}addGlobalEventListener(e,n,a){return this._findPluginFor(n).addGlobalEventListener(e,n,a)}getZone(){return this._zone}_findPluginFor(e){const n=this._eventNameToPlugin.get(e);if(n)return n;const a=this._plugins;for(let l=0;l<a.length;l++){const h=a[l];if(h.supports(e))return this._eventNameToPlugin.set(e,h),h}throw new Error(`No event manager plugin found for event ${e}`)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(tc),t.LFG(t.R0b))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();class wh{constructor(o){this._doc=o}addGlobalEventListener(o,e,n){const a=B().getGlobalEventTarget(this._doc,o);if(!a)throw new Error(`Unsupported event target ${a} for event ${e}`);return this.addEventListener(a,e,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Dh=(()=>{class i{constructor(){this._stylesSet=new Set}addStyles(e){const n=new Set;e.forEach(a=>{this._stylesSet.has(a)||(this._stylesSet.add(a),n.add(a))}),this.onStylesAdded(n)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})(),Os=(()=>{class i extends Dh{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,n,a){e.forEach(l=>{const h=this._doc.createElement("style");h.textContent=l,a.push(n.appendChild(h))})}addHost(e){const n=[];this._addStylesToHost(this._stylesSet,e,n),this._hostNodes.set(e,n)}removeHost(e){const n=this._hostNodes.get(e);n&&n.forEach(kh),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((n,a)=>{this._addStylesToHost(e,a,n)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(kh))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();function kh(i){B().remove(i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ar={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},cr=/%COMP%/g;function ic(i,o,e){for(let n=0;n<o.length;n++){let a=o[n];Array.isArray(a)?ic(i,a,e):(a=a.replace(cr,i),e.push(a))}return e}function Th(i){return o=>{if("__ngUnwrap__"===o)return i;!1===i(o)&&(o.preventDefault(),o.returnValue=!1)}}let xs=(()=>{class i{constructor(e,n,a){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.rendererByCompId=new Map,this.defaultRenderer=new ng(e)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;switch(n.encapsulation){case t.ifc.Emulated:{let a=this.rendererByCompId.get(n.id);return a||(a=new rc(this.eventManager,this.sharedStylesHost,n,this.appId),this.rendererByCompId.set(n.id,a)),a.applyToHost(e),a}case 1:case t.ifc.ShadowDom:return new Eh(this.eventManager,this.sharedStylesHost,e,n);default:if(!this.rendererByCompId.has(n.id)){const a=ic(n.id,n.styles,[]);this.sharedStylesHost.addStyles(a),this.rendererByCompId.set(n.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(ec),t.LFG(Os),t.LFG(t.AFp))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();class ng{constructor(o){this.eventManager=o,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(o,e){return e?document.createElementNS(ar[e]||e,o):document.createElement(o)}createComment(o){return document.createComment(o)}createText(o){return document.createTextNode(o)}appendChild(o,e){(Ev(o)?o.content:o).appendChild(e)}insertBefore(o,e,n){o&&(Ev(o)?o.content:o).insertBefore(e,n)}removeChild(o,e){o&&o.removeChild(e)}selectRootElement(o,e){let n="string"==typeof o?document.querySelector(o):o;if(!n)throw new Error(`The selector "${o}" did not match any elements`);return e||(n.textContent=""),n}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,n,a){if(a){e=a+":"+e;const l=ar[a];l?o.setAttributeNS(l,e,n):o.setAttribute(e,n)}else o.setAttribute(e,n)}removeAttribute(o,e,n){if(n){const a=ar[n];a?o.removeAttributeNS(a,e):o.removeAttribute(`${n}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,n,a){a&(t.JOm.DashCase|t.JOm.Important)?o.style.setProperty(e,n,a&t.JOm.Important?"important":""):o.style[e]=n}removeStyle(o,e,n){n&t.JOm.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,n){o[e]=n}setValue(o,e){o.nodeValue=e}listen(o,e,n){return"string"==typeof o?this.eventManager.addGlobalEventListener(o,e,Th(n)):this.eventManager.addEventListener(o,e,Th(n))}}function Ev(i){return"TEMPLATE"===i.tagName&&void 0!==i.content}class rc extends ng{constructor(o,e,n,a){super(o),this.component=n;const l=ic(a+"-"+n.id,n.styles,[]);e.addStyles(l),this.contentAttr=function zi(i){return"_ngcontent-%COMP%".replace(cr,i)}(a+"-"+n.id),this.hostAttr=function Ps(i){return"_nghost-%COMP%".replace(cr,i)}(a+"-"+n.id)}applyToHost(o){super.setAttribute(o,this.hostAttr,"")}createElement(o,e){const n=super.createElement(o,e);return super.setAttribute(n,this.contentAttr,""),n}}class Eh extends ng{constructor(o,e,n,a){super(o),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const l=ic(a.id,a.styles,[]);for(let h=0;h<l.length;h++){const v=document.createElement("style");v.textContent=l[h],this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,n){return super.insertBefore(this.nodeOrShadowRoot(o),e,n)}removeChild(o,e){return super.removeChild(this.nodeOrShadowRoot(o),e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Sh=(()=>{class i extends wh{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a){return e.addEventListener(n,a,!1),()=>this.removeEventListener(e,n,a)}removeEventListener(e,n,a){return e.removeEventListener(n,a)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ws=["alt","control","meta","shift"],Ih={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Lh={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey};let lr=(()=>{class i extends wh{constructor(e){super(e)}supports(e){return null!=i.parseEventName(e)}addEventListener(e,n,a){const l=i.parseEventName(n),h=i.eventCallback(l.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>B().onAndCancel(e,l.domEventName,h))}static parseEventName(e){const n=e.toLowerCase().split("."),a=n.shift();if(0===n.length||"keydown"!==a&&"keyup"!==a)return null;const l=i._normalizeKey(n.pop());let h="",v=n.indexOf("code");if(v>-1&&(n.splice(v,1),h="code."),ws.forEach(T=>{const H=n.indexOf(T);H>-1&&(n.splice(H,1),h+=T+".")}),h+=l,0!=n.length||0===l.length)return null;const b={};return b.domEventName=a,b.fullKey=h,b}static matchEventFullKeyCode(e,n){let a=Ih[e.key]||e.key,l="";return n.indexOf("code.")>-1&&(a=e.code,l="code."),!(null==a||!a)&&(a=a.toLowerCase()," "===a?a="space":"."===a&&(a="dot"),ws.forEach(h=>{h!==a&&(0,Lh[h])(e)&&(l+=h+".")}),l+=a,l===n)}static eventCallback(e,n,a){return l=>{i.matchEventFullKeyCode(l,e)&&a.runGuarded(()=>n(l))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Iv=(0,t.eFA)(t._c5,"browser",[{provide:t.Lbi,useValue:hh},{provide:t.g9A,useValue:function Zh(){Xa.makeCurrent()},multi:!0},{provide:x,useFactory:function Sv(){return(0,t.RDi)(document),document},deps:[]}]),gr=new t.OlP(""),sc=[{provide:t.rWj,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bi{addToWindow(o){t.dqk.getAngularTestability=(n,a=!0)=>{const l=o.findTestabilityInTree(n,a);if(null==l)throw new Error("Could not find testability for element.");return l},t.dqk.getAllAngularTestabilities=()=>o.getAllTestabilities(),t.dqk.getAllAngularRootElements=()=>o.getAllRootElements(),t.dqk.frameworkStabilizers||(t.dqk.frameworkStabilizers=[]),t.dqk.frameworkStabilizers.push(n=>{const a=t.dqk.getAllAngularTestabilities();let l=a.length,h=!1;const v=function(b){h=h||b,l--,0==l&&n(h)};a.forEach(function(b){b.whenStable(v)})})}findTestabilityInTree(o,e,n){return null==e?null:o.getTestability(e)??(n?B().isShadowRoot(e)?this.findTestabilityInTree(o,e.host,!0):this.findTestabilityInTree(o,e.parentElement,!0):null)}},deps:[]},{provide:t.lri,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]},{provide:t.dDg,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]}],ac=[{provide:t.zSh,useValue:"root"},{provide:t.qLn,useFactory:function Fh(){return new t.qLn},deps:[]},{provide:tc,useClass:Sh,multi:!0,deps:[x,t.R0b,t.Lbi]},{provide:tc,useClass:lr,multi:!0,deps:[x]},{provide:xs,useClass:xs,deps:[ec,Os,t.AFp]},{provide:t.FYo,useExisting:xs},{provide:Dh,useExisting:Os},{provide:Os,useClass:Os,deps:[x]},{provide:ec,useClass:ec,deps:[tc,t.R0b]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class FO{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,useClass:we,deps:[]},[]];let cc=(()=>{class i{constructor(e){}static withServerTransition(e){return{ngModule:i,providers:[{provide:t.AFp,useValue:e.appId},{provide:xh,useExisting:t.AFp},fn]}}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(gr,12))},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[...ac,...sc],imports:[gv,t.hGG]}),i})(),rg=(()=>{class i{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:function(e){let n=null;return n=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rh(){return new rg((0,t.LFG)(x))}(),n},providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */typeof window<"u"&&window;let Uv=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:function(e){let n=null;return n=e?new(e||i):t.LFG(jv),n},providedIn:"root"}),i})(),jv=(()=>{class i extends Uv{constructor(e){super(),this._doc=e}sanitize(e,n){if(null==n)return null;switch(e){case t.q3G.NONE:return n;case t.q3G.HTML:return(0,t.qzn)(n,"HTML")?(0,t.z3N)(n):(0,t.EiD)(this._doc,String(n)).toString();case t.q3G.STYLE:return(0,t.qzn)(n,"Style")?(0,t.z3N)(n):n;case t.q3G.SCRIPT:if((0,t.qzn)(n,"Script"))return(0,t.z3N)(n);throw new Error("unsafe value used in a script context");case t.q3G.URL:return(0,t.qzn)(n,"URL")?(0,t.z3N)(n):(0,t.mCW)(String(n));case t.q3G.RESOURCE_URL:if((0,t.qzn)(n,"ResourceURL"))return(0,t.z3N)(n);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,t.JVY)(e)}bypassSecurityTrustStyle(e){return(0,t.L6k)(e)}bypassSecurityTrustScript(e){return(0,t.eBb)(e)}bypassSecurityTrustUrl(e){return(0,t.LAX)(e)}bypassSecurityTrustResourceUrl(e){return(0,t.pB0)(e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:function(e){let n=null;return n=e?new e:function QO(i){return new jv(i.get(x))}(t.LFG(t.zs3)),n},providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zn(i){return null!=i&&"false"!=`${i}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vv(i,o=0){return function GO(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i)?Number(i):o}function be(i){return Array.isArray(i)?i:[i]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function De(i){return null==i?"":"string"==typeof i?i:`${i}px`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Te(i){return i instanceof t.SBq?i.nativeElement:i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Gt=D(7579),$e=D(3269),he=D(2076);function At(...i){const o=(0,$e.yG)(i);return(0,he.D)(i,o)}var Ye=D(9751),Zn=D(8421),Ke=D(5577),Hv=D(1144),Fn=D(576),Kt=D(4004);const{isArray:$O}=Array;function pn(i){return(0,Kt.U)(o=>function Jh(i,o){return $O(o)?i(...o):i(o)}(i,o))}const gg=["addListener","removeListener"],hr=["addEventListener","removeEventListener"],YO=["on","off"];function Do(i,o,e,n){if((0,Fn.m)(e)&&(n=e,e=void 0),n)return Do(i,o,e).pipe(pn(n));const[a,l]=function Bv(i){return(0,Fn.m)(i.addEventListener)&&(0,Fn.m)(i.removeEventListener)}(i)?hr.map(h=>v=>i[h](o,v,e)):function qv(i){return(0,Fn.m)(i.addListener)&&(0,Fn.m)(i.removeListener)}(i)?gg.map(Bh(i,o)):function Jv(i){return(0,Fn.m)(i.on)&&(0,Fn.m)(i.off)}(i)?YO.map(Bh(i,o)):[];if(!a&&(0,Hv.z)(i))return(0,Ke.z)(h=>Do(h,o,e))((0,Zn.Xf)(i));if(!a)throw new TypeError("Invalid event target");return new Ye.y(h=>{const v=(...b)=>h.next(1<b.length?b:b[0]);return a(v),()=>l(v)})}function Bh(i,o){return e=>n=>i[e](o,n)}var Qn=D(727);class zv extends Qn.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const fr={setInterval(i,o,...e){const{delegate:n}=fr;return n?.setInterval?n.setInterval(i,o,...e):setInterval(i,o,...e)},clearInterval(i){const{delegate:o}=fr;return(o?.clearInterval||clearInterval)(i)},delegate:void 0};var gc=D(8737);class zh extends zv{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var n;if(this.closed)return this;this.state=o;const a=this.id,l=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(l,a,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(l,this.id,e),this}requestAsyncId(o,e,n=0){return fr.setInterval(o.flush.bind(o,this),n)}recycleAsyncId(o,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&fr.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(o,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let a,n=!1;try{this.work(o)}catch(l){n=!0,a=l||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,gc.P)(n,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}}const ki={schedule(i){let o=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:n}=ki;n&&(o=n.requestAnimationFrame,e=n.cancelAnimationFrame);const a=o(l=>{e=void 0,i(l)});return new Qn.w0(()=>e?.(a))},requestAnimationFrame(...i){const{delegate:o}=ki;return(o?.requestAnimationFrame||requestAnimationFrame)(...i)},cancelAnimationFrame(...i){const{delegate:o}=ki;return(o?.cancelAnimationFrame||cancelAnimationFrame)(...i)},delegate:void 0},Ss={now:()=>(Ss.delegate||Date).now(),delegate:void 0};class Is{constructor(o,e=Is.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,n){return new this.schedulerActionCtor(this,o).schedule(n,e)}}Is.now=Ss.now;class dg extends Is{constructor(o,e=Is.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let n;this._active=!0;do{if(n=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,n){for(;o=e.shift();)o.unsubscribe();throw n}}}const hg=new class Qv extends dg{flush(o){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let a;o=o||n.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=n[0])&&o.id===e&&n.shift());if(this._active=!1,a){for(;(o=n[0])&&o.id===e&&n.shift();)o.unsubscribe();throw a}}}(class ug extends zh{constructor(o,e){super(o,e),this.scheduler=o,this.work=e}requestAsyncId(o,e,n=0){return null!==n&&n>0?super.requestAsyncId(o,e,n):(o.actions.push(this),o._scheduled||(o._scheduled=ki.requestAnimationFrame(()=>o.flush(void 0))))}recycleAsyncId(o,e,n=0){var a;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(o,e,n);const{actions:l}=o;null!=e&&(null===(a=l[l.length-1])||void 0===a?void 0:a.id)!==e&&(ki.cancelAnimationFrame(e),o._scheduled=void 0)}});let fg,pr=1;const Pe={};function pg(i){return i in Pe&&(delete Pe[i],!0)}const Qh={setImmediate(i){const o=pr++;return Pe[o]=!0,fg||(fg=Promise.resolve()),fg.then(()=>pg(o)&&i()),o},clearImmediate(i){pg(i)}},{setImmediate:Ls,clearImmediate:Gv}=Qh,dc={setImmediate(...i){const{delegate:o}=dc;return(o?.setImmediate||Ls)(...i)},clearImmediate(i){const{delegate:o}=dc;return(o?.clearImmediate||Gv)(i)},delegate:void 0},Ai=(new class _g extends dg{flush(o){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let a;o=o||n.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=n[0])&&o.id===e&&n.shift());if(this._active=!1,a){for(;(o=n[0])&&o.id===e&&n.shift();)o.unsubscribe();throw a}}}(class $v extends zh{constructor(o,e){super(o,e),this.scheduler=o,this.work=e}requestAsyncId(o,e,n=0){return null!==n&&n>0?super.requestAsyncId(o,e,n):(o.actions.push(this),o._scheduled||(o._scheduled=dc.setImmediate(o.flush.bind(o,void 0))))}recycleAsyncId(o,e,n=0){var a;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(o,e,n);const{actions:l}=o;null!=e&&(null===(a=l[l.length-1])||void 0===a?void 0:a.id)!==e&&(dc.clearImmediate(e),o._scheduled=void 0)}}),new dg(zh)),Kv=Ai;var Ee=D(4482),me=D(5403),$h=D(3532);function mg(i=0,o,e=Kv){let n=-1;return null!=o&&((0,$h.K)(o)?e=o:n=o),new Ye.y(a=>{let l=function Wv(i){return i instanceof Date&&!isNaN(i)}(i)?+i-e.now():i;l<0&&(l=0);let h=0;return e.schedule(function(){a.closed||(a.next(h++),0<=n?this.schedule(void 0,n):a.complete())},l)})}function ko(i,o=Ai){return function hc(i){return(0,Ee.e)((o,e)=>{let n=!1,a=null,l=null,h=!1;const v=()=>{if(l?.unsubscribe(),l=null,n){n=!1;const T=a;a=null,e.next(T)}h&&e.complete()},b=()=>{l=null,h&&e.complete()};o.subscribe((0,me.x)(e,T=>{n=!0,a=T,l||(0,Zn.Xf)(i(T)).subscribe(l=(0,me.x)(e,v,b))},()=>{h=!0,(!n||!l||l.closed)&&e.complete()}))})}(()=>mg(i,o))}function Ne(i,o){return(0,Ee.e)((e,n)=>{let a=0;e.subscribe((0,me.x)(n,l=>i.call(o,l,a++)&&n.next(l)))})}var vg=D(5032);function Ao(i){return(0,Ee.e)((o,e)=>{(0,Zn.Xf)(i).subscribe((0,me.x)(e,()=>e.complete(),vg.Z)),!e.closed&&o.subscribe(e)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let fc;try{fc=typeof Intl<"u"&&Intl.v8BreakIterator}catch{fc=!1}let Qi,Fs,mr,Rs,ui=(()=>{class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?_s(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!fc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.Lbi))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zs(i){return function Kh(){if(null==Qi&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Qi=!0}))}finally{Qi=Qi||!1}return Qi}()?i:!!i.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cg(){if(null==mr){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return mr=!1,mr;if("scrollBehavior"in document.documentElement.style)mr=!0;else{const i=Element.prototype.scrollTo;mr=!!i&&!/\{\s*\[native code\]\s*\}/.test(i.toString())}}return mr}function pc(){if("object"!=typeof document||!document)return 0;if(null==Fs){const i=document.createElement("div"),o=i.style;i.dir="rtl",o.width="1px",o.overflow="auto",o.visibility="hidden",o.pointerEvents="none",o.position="absolute";const e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",i.appendChild(e),document.body.appendChild(i),Fs=0,0===i.scrollLeft&&(i.scrollLeft=1,Fs=0===i.scrollLeft?1:2),i.remove()}return Fs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _c(i){if(function Xv(){if(null==Rs){const i=typeof document<"u"?document.head:null;Rs=!(!i||!i.createShadowRoot&&!i.attachShadow)}return Rs}()){const o=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function vr(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){const o=i.shadowRoot.activeElement;if(o===i)break;i=o}return i}function wn(i){return i.composedPath?i.composedPath()[0]:i.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function To(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tC=new t.OlP("cdk-dir-doc",{providedIn:"root",factory:function eC(){return(0,t.f3M)(x)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}),WO=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let Gi=(()=>{class i{constructor(e){if(this.value="ltr",this.change=new t.vpe,e){const a=e.documentElement?e.documentElement.dir:null;this.value=function mc(i){const o=i?.toLowerCase()||"";return"auto"===o&&typeof navigator<"u"&&navigator?.language?WO.test(navigator.language)?"rtl":"ltr":"rtl"===o?"rtl":"ltr"}((e.body?e.body.dir:null)||a||"ltr")}}ngOnDestroy(){this.change.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(tC,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),vc=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})(),Gn=(()=>{class i{constructor(e,n,a){this._ngZone=e,this._platform=n,this._scrolled=new Gt.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=a}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new Ye.y(n=>{this._globalSubscription||this._addGlobalListener();const a=e>0?this._scrolled.pipe(ko(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):At()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){const a=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(Ne(l=>!l||a.indexOf(l)>-1))}getAncestorScrollContainers(e){const n=[];return this.scrollContainers.forEach((a,l)=>{this._scrollableContainsElement(l,e)&&n.push(l)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,n){let a=Te(n),l=e.getElementRef().nativeElement;do{if(a==l)return!0}while(a=a.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>Do(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.R0b),t.LFG(ui),t.LFG(x,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Mr=(()=>{class i{constructor(e,n,a,l){this.elementRef=e,this.scrollDispatcher=n,this.ngZone=a,this.dir=l,this._destroyed=new Gt.x,this._elementScrolled=new Ye.y(h=>this.ngZone.runOutsideAngular(()=>Do(this.elementRef.nativeElement,"scroll").pipe(Ao(this._destroyed)).subscribe(h)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const n=this.elementRef.nativeElement,a=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=a?e.end:e.start),null==e.right&&(e.right=a?e.start:e.end),null!=e.bottom&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),a&&0!=pc()?(null!=e.left&&(e.right=n.scrollWidth-n.clientWidth-e.left),2==pc()?e.left=e.right:1==pc()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const n=this.elementRef.nativeElement;Cg()?n.scrollTo(e):(null!=e.top&&(n.scrollTop=e.top),null!=e.left&&(n.scrollLeft=e.left))}measureScrollOffset(e){const n="left",a="right",l=this.elementRef.nativeElement;if("top"==e)return l.scrollTop;if("bottom"==e)return l.scrollHeight-l.clientHeight-l.scrollTop;const h=this.dir&&"rtl"==this.dir.value;return"start"==e?e=h?a:n:"end"==e&&(e=h?n:a),h&&2==pc()?e==n?l.scrollWidth-l.clientWidth-l.scrollLeft:l.scrollLeft:h&&1==pc()?e==n?l.scrollLeft+l.scrollWidth-l.clientWidth:-l.scrollLeft:e==n?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(Gn),t.Y36(t.R0b),t.Y36(Gi,8))},i.\u0275dir=t.lG2({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),i})(),Mg=(()=>{class i{constructor(e,n,a){this._platform=e,this._change=new Gt.x,this._changeListener=l=>{this._change.next(l)},this._document=a,n.runOutsideAngular(()=>{if(e.isBrowser){const l=this._getWindow();l.addEventListener("resize",this._changeListener),l.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:n,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+n,height:a,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,n=this._getWindow(),a=e.documentElement,l=a.getBoundingClientRect();return{top:-l.top||e.body.scrollTop||n.scrollY||a.scrollTop||0,left:-l.left||e.body.scrollLeft||n.scrollX||a.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(ko(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(ui),t.LFG(t.R0b),t.LFG(x,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),yr=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})(),di=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[vc,yr,vc,yr]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class an extends Gt.x{constructor(o){super(),this._value=o}get value(){return this.getValue()}_subscribe(o){const e=super._subscribe(o);return!e.closed&&o.next(this._value),e}getValue(){const{hasError:o,thrownError:e,_value:n}=this;if(o)throw e;return this._throwIfClosed(),n}next(o){super.next(this._value=o)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Se=D(515);function Fe(i){return i<=0?()=>Se.E:(0,Ee.e)((o,e)=>{let n=0;o.subscribe((0,me.x)(e,a=>{++n<=i&&(e.next(a),i<=n&&e.complete())}))})}function Dg(i){return Ne((o,e)=>i<=e)}var $i=D(4671);function Vs(i,o){return i===o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _f=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),mf=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[_f]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const{isArray:NC}=Array,{getPrototypeOf:vf,prototype:ZC,keys:Cf}=Object;function Mf(i){if(1===i.length){const o=i[0];if(NC(o))return{args:o,keys:null};if(function FC(i){return i&&"object"==typeof i&&vf(i)===ZC}(o)){const e=Cf(o);return{args:e.map(n=>o[n]),keys:e}}}return{args:i,keys:null}}function yf(i,o){return i.reduce((e,n,a)=>(e[n]=o[a],e),{})}var RC=D(9672);function kg(...i){const o=(0,$e.yG)(i),e=(0,$e.jO)(i),{args:n,keys:a}=Mf(i);if(0===n.length)return(0,he.D)([],o);const l=new Ye.y(function Pr(i,o,e=$i.y){return n=>{hi(o,()=>{const{length:a}=i,l=new Array(a);let h=a,v=a;for(let b=0;b<a;b++)hi(o,()=>{const T=(0,he.D)(i[b],o);let H=!1;T.subscribe((0,me.x)(n,Q=>{l[b]=Q,H||(H=!0,v--),v||n.next(e(l.slice()))},()=>{--h||n.complete()}))},n)},n)}}(n,o,a?h=>yf(a,h):$i.y));return e?l.pipe(pn(e)):l}function hi(i,o,e){i?(0,RC.f)(e,i,o):o()}var Hs=D(8189);function qs(...i){return function UC(){return(0,Hs.J)(1)}()((0,he.D)(i,(0,$e.yG)(i)))}function Eo(...i){const o=(0,$e.yG)(i);return(0,Ee.e)((e,n)=>{(o?qs(i,e,o):qs(i,e)).subscribe(n)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const $n=new Set;let Yi,Ag=(()=>{class i{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Of}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function jC(i){if(!$n.has(i))try{Yi||(Yi=document.createElement("style"),Yi.setAttribute("type","text/css"),document.head.appendChild(Yi)),Yi.sheet&&(Yi.sheet.insertRule(`@media ${i} {body{ }}`,0),$n.add(i))}catch(o){console.error(o)}}(e),this._matchMedia(e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(ui))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function Of(i){return{matches:"all"===i||""===i,media:i,addListener:()=>{},removeListener:()=>{}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let VC=(()=>{class i{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new Gt.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return xr(be(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let l=kg(xr(be(e)).map(h=>this._registerQuery(h).observable));return l=qs(l.pipe(Fe(1)),l.pipe(Dg(1),function oP(i,o=Ai){return(0,Ee.e)((e,n)=>{let a=null,l=null,h=null;const v=()=>{if(a){a.unsubscribe(),a=null;const T=l;l=null,n.next(T)}};function b(){const T=h+i,H=o.now();if(H<T)return a=this.schedule(void 0,T-H),void n.add(a);v()}e.subscribe((0,me.x)(n,T=>{l=T,h=o.now(),a||(a=o.schedule(b,i),n.add(a))},()=>{v(),n.complete()},void 0,()=>{l=a=null}))})}(0))),l.pipe((0,Kt.U)(h=>{const v={matches:!1,breakpoints:{}};return h.forEach(({matches:b,query:T})=>{v.matches=v.matches||b,v.breakpoints[T]=b}),v}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const n=this._mediaMatcher.matchMedia(e),l={observable:new Ye.y(h=>{const v=b=>this._zone.run(()=>h.next(b));return n.addListener(v),()=>{n.removeListener(v)}}).pipe(Eo(n),(0,Kt.U)(({matches:h})=>({query:e,matches:h})),Ao(this._destroySubject)),mql:n};return this._queries.set(e,l),l}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Ag),t.LFG(t.R0b))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function xr(i){return i.map(o=>o.split(",")).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Af=(()=>{class i{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function Eg(i){return!!(i.offsetWidth||i.offsetHeight||"function"==typeof i.getClientRects&&i.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const n=function Tf(i){try{return i.frameElement}catch{return null}}(function JC(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e));if(n&&(-1===Ki(n)||!this.isVisible(n)))return!1;let a=e.nodeName.toLowerCase(),l=Ki(e);return e.hasAttribute("contenteditable")?-1!==l:!("iframe"===a||"object"===a||this._platform.WEBKIT&&this._platform.IOS&&!function If(i){let o=i.nodeName.toLowerCase(),e="input"===o&&i.type;return"text"===e||"password"===e||"select"===o||"textarea"===o}(e))&&("audio"===a?!!e.hasAttribute("controls")&&-1!==l:"video"===a?-1!==l&&(null!==l||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,n){return function Lf(i){return!function Sg(i){return function qC(i){return"input"==i.nodeName.toLowerCase()}(i)&&"hidden"==i.type}(i)&&(function Ef(i){let o=i.nodeName.toLowerCase();return"input"===o||"select"===o||"button"===o||"textarea"===o}(i)||function HC(i){return function Sf(i){return"a"==i.nodeName.toLowerCase()}(i)&&i.hasAttribute("href")}(i)||i.hasAttribute("contenteditable")||Ig(i))}(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(ui))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function Ig(i){if(!i.hasAttribute("tabindex")||void 0===i.tabIndex)return!1;let o=i.getAttribute("tabindex");return!(!o||isNaN(parseInt(o,10)))}function Ki(i){if(!Ig(i))return null;const o=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}class dP{constructor(o,e,n,a,l=!1){this._element=o,this._checker=e,this._ngZone=n,this._document=a,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,l||this.attachAnchors()}get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}destroy(){const o=this._startAnchor,e=this._endAnchor;o&&(o.removeEventListener("focus",this.startAnchorListener),o.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){const e=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return"start"==o?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const n=this._getFirstTabbableElement(e);return n?.focus(o),!!n}return e.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){const e=this._getRegionBoundary("start");return e&&e.focus(o),!!e}focusLastTabbableElement(o){const e=this._getRegionBoundary("end");return e&&e.focus(o),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;const e=o.children;for(let n=0;n<e.length;n++){const a=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(a)return a}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;const e=o.children;for(let n=e.length-1;n>=0;n--){const a=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(a)return a}return null}_createAnchor(){const o=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add("cdk-visually-hidden"),o.classList.add("cdk-focus-trap-anchor"),o.setAttribute("aria-hidden","true"),o}_toggleAnchorTabIndex(o,e){o?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){this._ngZone.isStable?o():this._ngZone.onStable.pipe(Fe(1)).subscribe(o)}}let bc=(()=>{class i{constructor(e,n,a){this._checker=e,this._ngZone=n,this._document=a}create(e,n=!1){return new dP(e,this._checker,this._ngZone,this._document,n)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Af),t.LFG(t.R0b),t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Js(i){return 0===i.buttons||0===i.offsetX&&0===i.offsetY}function Bs(i){const o=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!(!o||-1!==o.identifier||null!=o.radiusX&&1!==o.radiusX||null!=o.radiusY&&1!==o.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Zf=new t.OlP("cdk-input-modality-detector-options"),Lg={ignoreKeys:[18,17,224,91,16]},Wi=Zs({passive:!0,capture:!0});let zs=(()=>{class i{constructor(e,n,a,l){this._platform=e,this._mostRecentTarget=null,this._modality=new an(null),this._lastTouchMs=0,this._onKeydown=h=>{this._options?.ignoreKeys?.some(v=>v===h.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=wn(h))},this._onMousedown=h=>{Date.now()-this._lastTouchMs<650||(this._modality.next(Js(h)?"keyboard":"mouse"),this._mostRecentTarget=wn(h))},this._onTouchstart=h=>{Bs(h)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=wn(h))},this._options={...Lg,...l},this.modalityDetected=this._modality.pipe(Dg(1)),this.modalityChanged=this.modalityDetected.pipe(function cn(i,o=$i.y){return i=i??Vs,(0,Ee.e)((e,n)=>{let a,l=!0;e.subscribe((0,me.x)(n,h=>{const v=o(h);(l||!i(a,v))&&(l=!1,a=v,n.next(h))}))})}()),e.isBrowser&&n.runOutsideAngular(()=>{a.addEventListener("keydown",this._onKeydown,Wi),a.addEventListener("mousedown",this._onMousedown,Wi),a.addEventListener("touchstart",this._onTouchstart,Wi)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,Wi),document.removeEventListener("mousedown",this._onMousedown,Wi),document.removeEventListener("touchstart",this._onTouchstart,Wi))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(ui),t.LFG(t.R0b),t.LFG(x),t.LFG(Zf,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Zg=new t.OlP("cdk-focus-monitor-default-options"),Qs=Zs({passive:!0,capture:!0});let mP=(()=>{class i{constructor(e,n,a,l,h){this._ngZone=e,this._platform=n,this._inputModalityDetector=a,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new Gt.x,this._rootNodeFocusAndBlurListener=v=>{for(let T=wn(v);T;T=T.parentElement)"focus"===v.type?this._onFocus(v,T):this._onBlur(v,T)},this._document=l,this._detectionMode=h?.detectionMode||0}monitor(e,n=!1){const a=Te(e);if(!this._platform.isBrowser||1!==a.nodeType)return At(null);const l=_c(a)||this._getDocument(),h=this._elementInfo.get(a);if(h)return n&&(h.checkChildren=!0),h.subject;const v={checkChildren:n,subject:new Gt.x,rootNode:l};return this._elementInfo.set(a,v),this._registerGlobalListeners(v),v.subject}stopMonitoring(e){const n=Te(e),a=this._elementInfo.get(n);a&&(a.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(a))}focusVia(e,n,a){const l=Te(e);l===this._getDocument().activeElement?this._getClosestElementsInfo(l).forEach(([v,b])=>this._originChanged(v,n,b)):(this._setOrigin(n),"function"==typeof l.focus&&l.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused","touch"===n),e.classList.toggle("cdk-keyboard-focused","keyboard"===n),e.classList.toggle("cdk-mouse-focused","mouse"===n),e.classList.toggle("cdk-program-focused","program"===n)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&n,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,n){const a=this._elementInfo.get(n),l=wn(e);!a||!a.checkChildren&&n!==l||this._originChanged(n,this._getFocusOrigin(l),a)}_onBlur(e,n){const a=this._elementInfo.get(n);!a||a.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(a,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const n=e.rootNode,a=this._rootNodeFocusListenerCount.get(n)||0;a||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Qs),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Qs)}),this._rootNodeFocusListenerCount.set(n,a+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ao(this._stopInputModalityDetector)).subscribe(l=>{this._setOrigin(l,!0)}))}_removeGlobalListeners(e){const n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){const a=this._rootNodeFocusListenerCount.get(n);a>1?this._rootNodeFocusListenerCount.set(n,a-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Qs),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Qs),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,a){this._setClasses(e,n),this._emitOrigin(a,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){const n=[];return this._elementInfo.forEach((a,l)=>{(l===e||a.checkChildren&&l.contains(e))&&n.push([l,a])}),n}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:n,mostRecentModality:a}=this._inputModalityDetector;if("mouse"!==a||!n||n===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const l=e.labels;if(l)for(let h=0;h<l.length;h++)if(l[h].contains(n))return!0;return!1}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.R0b),t.LFG(ui),t.LFG(zs),t.LFG(x,8),t.LFG(Zg,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Rf="cdk-high-contrast-black-on-white",Fg="cdk-high-contrast-white-on-black",Rg="cdk-high-contrast-active";let KC=(()=>{class i{constructor(e,n){this._platform=e,this._document=n,this._breakpointSubscription=(0,t.f3M)(VC).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(e):null,l=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),l){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(Rg,Rf,Fg),this._hasCheckedHighContrastMode=!0;const n=this.getHighContrastMode();1===n?e.add(Rg,Rf):2===n&&e.add(Rg,Fg)}}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(ui),t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Yn=(()=>{class i{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(KC))},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[mf]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Dr=D(6451);function We(i,o,e){const n=(0,Fn.m)(i)||o||e?{next:i,error:o,complete:e}:i;return n?(0,Ee.e)((a,l)=>{var h;null===(h=n.subscribe)||void 0===h||h.call(n);let v=!0;a.subscribe((0,me.x)(l,b=>{var T;null===(T=n.next)||void 0===T||T.call(n,b),l.next(b)},()=>{var b;v=!1,null===(b=n.complete)||void 0===b||b.call(n),l.complete()},b=>{var T;v=!1,null===(T=n.error)||void 0===T||T.call(n,b),l.error(b)},()=>{var b,T;v&&(null===(b=n.unsubscribe)||void 0===b||b.call(n)),null===(T=n.finalize)||void 0===T||T.call(n)}))}):$i.y}function _n(i,o){return(0,Ee.e)((e,n)=>{let a=null,l=0,h=!1;const v=()=>h&&!a&&n.complete();e.subscribe((0,me.x)(n,b=>{a?.unsubscribe();let T=0;const H=l++;(0,Zn.Xf)(i(b,H)).subscribe(a=(0,me.x)(n,Q=>n.next(o?o(b,Q,H,T++):Q),()=>{a=null,v()}))},()=>{h=!0,v()}))})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ug(i,o,e){for(let n in o)if(o.hasOwnProperty(n)){const a=o[n];a?i.setProperty(n,a,e?.has(n)?"important":""):i.removeProperty(n)}return i}function kr(i,o){const e=o?"":"none";Ug(i.style,{"touch-action":o?"":"none","-webkit-user-drag":o?"":"none","-webkit-tap-highlight-color":o?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function jg(i,o,e){Ug(i.style,{position:o?"":"fixed",top:o?"":"0",opacity:o?"":"0",left:o?"":"-999em"},e)}function Pc(i,o){return o&&"none"!=o?i+" "+o:i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Uf(i){const o=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*o}function zt(i,o){return i.getPropertyValue(o).split(",").map(n=>n.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xc(i){const o=i.getBoundingClientRect();return{top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height,x:o.x,y:o.y}}function wc(i,o,e){const{top:n,bottom:a,left:l,right:h}=i;return e>=n&&e<=a&&o>=l&&o<=h}function Ar(i,o,e){i.top+=o,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function jf(i,o,e,n){const{top:a,right:l,bottom:h,left:v,width:b,height:T}=i,H=b*o,Q=T*o;return n>a-Q&&n<h+Q&&e>v-H&&e<l+H}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vf{constructor(o){this._document=o,this.positions=new Map}clear(){this.positions.clear()}cache(o){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),o.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:xc(e)})})}handleScroll(o){const e=wn(o),n=this.positions.get(e);if(!n)return null;const a=n.scrollPosition;let l,h;if(e===this._document){const T=this.getViewportScrollPosition();l=T.top,h=T.left}else l=e.scrollTop,h=e.scrollLeft;const v=a.top-l,b=a.left-h;return this.positions.forEach((T,H)=>{T.clientRect&&e!==H&&e.contains(H)&&Ar(T.clientRect,v,b)}),a.top=l,a.left=h,{top:v,left:b}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vg(i){const o=i.cloneNode(!0),e=o.querySelectorAll("[id]"),n=i.nodeName.toLowerCase();o.removeAttribute("id");for(let a=0;a<e.length;a++)e[a].removeAttribute("id");return"canvas"===n?Bf(i,o):("input"===n||"select"===n||"textarea"===n)&&Jf(i,o),Hf("canvas",i,o,Bf),Hf("input, textarea, select",i,o,Jf),o}function Hf(i,o,e,n){const a=o.querySelectorAll(i);if(a.length){const l=e.querySelectorAll(i);for(let h=0;h<a.length;h++)n(a[h],l[h])}}let qf=0;function Jf(i,o){"file"!==o.type&&(o.value=i.value),"radio"===o.type&&o.name&&(o.name=`mat-clone-${o.name}-${qf++}`)}function Bf(i,o){const e=o.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tM=Zs({passive:!0}),Gs=Zs({passive:!1}),Ti=new Set(["position"]);class eM{constructor(o,e,n,a,l,h){this._config=e,this._document=n,this._ngZone=a,this._viewportRuler=l,this._dragDropRegistry=h,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new Gt.x,this._pointerMoveSubscription=Qn.w0.EMPTY,this._pointerUpSubscription=Qn.w0.EMPTY,this._scrollSubscription=Qn.w0.EMPTY,this._resizeSubscription=Qn.w0.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new Gt.x,this.started=new Gt.x,this.released=new Gt.x,this.ended=new Gt.x,this.entered=new Gt.x,this.exited=new Gt.x,this.dropped=new Gt.x,this.moved=this._moveEvents,this._pointerDown=v=>{if(this.beforeStarted.next(),this._handles.length){const b=this._getTargetHandle(v);b&&!this._disabledHandles.has(b)&&!this.disabled&&this._initializeDragSequence(b,v)}else this.disabled||this._initializeDragSequence(this._rootElement,v)},this._pointerMove=v=>{const b=this._getPointerPositionOnPage(v);if(!this._hasStartedDragging){if(Math.abs(b.x-this._pickupPositionOnPage.x)+Math.abs(b.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const xt=Date.now()>=this._dragStartTime+this._getDragStartDelay(v),jt=this._dropContainer;if(!xt)return void this._endDragSequence(v);(!jt||!jt.isDragging()&&!jt.isReceiving())&&(v.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(v)))}return}v.preventDefault();const T=this._getConstrainedPointerPosition(b);if(this._hasMoved=!0,this._lastKnownPointerPosition=b,this._updatePointerDirectionDelta(T),this._dropContainer)this._updateActiveDropContainer(T,b);else{const H=this.constrainPosition?this._initialClientRect:this._pickupPositionOnPage,Q=this._activeTransform;Q.x=T.x-H.x+this._passiveTransform.x,Q.y=T.y-H.y+this._passiveTransform.y,this._applyRootElementTransform(Q.x,Q.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:T,event:v,distance:this._getDragDistance(T),delta:this._pointerDirectionDelta})})},this._pointerUp=v=>{this._endDragSequence(v)},this._nativeDragStart=v=>{if(this._handles.length){const b=this._getTargetHandle(v);b&&!this._disabledHandles.has(b)&&!this.disabled&&v.preventDefault()}else this.disabled||v.preventDefault()},this.withRootElement(o).withParent(e.parentDragRef||null),this._parentPositions=new Vf(n),h.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(o){const e=zn(o);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(n=>kr(n,e)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(o){this._handles=o.map(n=>Te(n)),this._handles.forEach(n=>kr(n,this.disabled)),this._toggleNativeDragInteractions();const e=new Set;return this._disabledHandles.forEach(n=>{this._handles.indexOf(n)>-1&&e.add(n)}),this._disabledHandles=e,this}withPreviewTemplate(o){return this._previewTemplate=o,this}withPlaceholderTemplate(o){return this._placeholderTemplate=o,this}withRootElement(o){const e=Te(o);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this._pointerDown,Gs),e.addEventListener("touchstart",this._pointerDown,tM),e.addEventListener("dragstart",this._nativeDragStart,Gs)}),this._initialTransform=void 0,this._rootElement=e),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(o){return this._boundaryElement=o?Te(o):null,this._resizeSubscription.unsubscribe(),o&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(o){return this._parentDragRef=o,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(o){!this._disabledHandles.has(o)&&this._handles.indexOf(o)>-1&&(this._disabledHandles.add(o),kr(o,!0))}enableHandle(o){this._disabledHandles.has(o)&&(this._disabledHandles.delete(o),kr(o,this.disabled))}withDirection(o){return this._direction=o,this}_withDropContainer(o){this._dropContainer=o}getFreeDragPosition(){const o=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:o.x,y:o.y}}setFreeDragPosition(o){return this._activeTransform={x:0,y:0},this._passiveTransform.x=o.x,this._passiveTransform.y=o.y,this._dropContainer||this._applyRootElementTransform(o.x,o.y),this}withPreviewContainer(o){return this._previewContainer=o,this}_sortFromLastPointerPosition(){const o=this._lastKnownPointerPosition;o&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(o),o)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(o){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this,event:o}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(o),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const e=this._getPointerPositionOnPage(o);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:o})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(o){$s(o)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const e=this._dropContainer;if(e){const n=this._rootElement,a=n.parentNode,l=this._placeholder=this._createPlaceholderElement(),h=this._anchor=this._anchor||this._document.createComment(""),v=this._getShadowRoot();a.insertBefore(h,n),this._initialTransform=n.style.transform||"",this._preview=this._createPreviewElement(),jg(n,!1,Ti),this._document.body.appendChild(a.replaceChild(l,n)),this._getPreviewInsertionPoint(a,v).appendChild(this._preview),this.started.next({source:this,event:o}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this,event:o}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(o,e){this._parentDragRef&&e.stopPropagation();const n=this.isDragging(),a=$s(e),l=!a&&0!==e.button,h=this._rootElement,v=wn(e),b=!a&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),T=a?Bs(e):Js(e);if(v&&v.draggable&&"mousedown"===e.type&&e.preventDefault(),n||l||b||T)return;if(this._handles.length){const _t=h.style;this._rootElementTapHighlight=_t.webkitTapHighlightColor||"",_t.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._initialClientRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(_t=>this._updateOnScroll(_t)),this._boundaryElement&&(this._boundaryRect=xc(this._boundaryElement));const H=this._previewTemplate;this._pickupPositionInElement=H&&H.template&&!H.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialClientRect,o,e);const Q=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:Q.x,y:Q.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(o){jg(this._rootElement,!0,Ti),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._initialClientRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const e=this._dropContainer,n=e.getItemIndex(this),a=this._getPointerPositionOnPage(o),l=this._getDragDistance(a),h=e._isOverContainer(a.x,a.y);this.ended.next({source:this,distance:l,dropPoint:a,event:o}),this.dropped.next({item:this,currentIndex:n,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:h,distance:l,dropPoint:a,event:o}),e.drop(this,n,this._initialIndex,this._initialContainer,h,l,a,o),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:o,y:e},{x:n,y:a}){let l=this._initialContainer._getSiblingContainerFromPosition(this,o,e);!l&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(o,e)&&(l=this._initialContainer),l&&l!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=l,this._dropContainer.enter(this,o,e,l===this._initialContainer&&l.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:l,currentIndex:l.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(n,a),this._dropContainer._sortItem(this,o,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(o,e):this._applyPreviewTransform(o-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_createPreviewElement(){const o=this._previewTemplate,e=this.previewClass,n=o?o.template:null;let a;if(n&&o){const l=o.matchSize?this._initialClientRect:null,h=o.viewContainer.createEmbeddedView(n,o.context);h.detectChanges(),a=nM(h,this._document),this._previewRef=h,o.matchSize?iM(a,l):a.style.transform=Tr(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else a=Vg(this._rootElement),iM(a,this._initialClientRect),this._initialTransform&&(a.style.transform=this._initialTransform);return Ug(a.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},Ti),kr(a,!1),a.classList.add("cdk-drag-preview"),a.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(l=>a.classList.add(l)):a.classList.add(e)),a}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const o=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(o.left,o.top);const e=function XC(i){const o=getComputedStyle(i),e=zt(o,"transition-property"),n=e.find(v=>"transform"===v||"all"===v);if(!n)return 0;const a=e.indexOf(n),l=zt(o,"transition-duration"),h=zt(o,"transition-delay");return Uf(l[a])+Uf(h[a])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(n=>{const a=h=>{(!h||wn(h)===this._preview&&"transform"===h.propertyName)&&(this._preview?.removeEventListener("transitionend",a),n(),clearTimeout(l))},l=setTimeout(a,1.5*e);this._preview.addEventListener("transitionend",a)}))}_createPlaceholderElement(){const o=this._placeholderTemplate,e=o?o.template:null;let n;return e?(this._placeholderRef=o.viewContainer.createEmbeddedView(e,o.context),this._placeholderRef.detectChanges(),n=nM(this._placeholderRef,this._document)):n=Vg(this._rootElement),n.style.pointerEvents="none",n.classList.add("cdk-drag-placeholder"),n}_getPointerPositionInElement(o,e,n){const a=e===this._rootElement?null:e,l=a?a.getBoundingClientRect():o,h=$s(n)?n.targetTouches[0]:n,v=this._getViewportScrollPosition();return{x:l.left-o.left+(h.pageX-l.left-v.left),y:l.top-o.top+(h.pageY-l.top-v.top)}}_getPointerPositionOnPage(o){const e=this._getViewportScrollPosition(),n=$s(o)?o.touches[0]||o.changedTouches[0]||{pageX:0,pageY:0}:o,a=n.pageX-e.left,l=n.pageY-e.top;if(this._ownerSVGElement){const h=this._ownerSVGElement.getScreenCTM();if(h){const v=this._ownerSVGElement.createSVGPoint();return v.x=a,v.y=l,v.matrixTransform(h.inverse())}}return{x:a,y:l}}_getConstrainedPointerPosition(o){const e=this._dropContainer?this._dropContainer.lockAxis:null;let{x:n,y:a}=this.constrainPosition?this.constrainPosition(o,this,this._initialClientRect,this._pickupPositionInElement):o;if("x"===this.lockAxis||"x"===e?a=this._pickupPositionOnPage.y:("y"===this.lockAxis||"y"===e)&&(n=this._pickupPositionOnPage.x),this._boundaryRect){const{x:l,y:h}=this._pickupPositionInElement,v=this._boundaryRect,{width:b,height:T}=this._getPreviewRect(),H=v.top+h,Q=v.bottom-(T-h);n=Dc(n,v.left+l,v.right-(b-l)),a=Dc(a,H,Q)}return{x:n,y:a}}_updatePointerDirectionDelta(o){const{x:e,y:n}=o,a=this._pointerDirectionDelta,l=this._pointerPositionAtLastDirectionChange,h=Math.abs(e-l.x),v=Math.abs(n-l.y);return h>this._config.pointerDirectionChangeThreshold&&(a.x=e>l.x?1:-1,l.x=e),v>this._config.pointerDirectionChangeThreshold&&(a.y=n>l.y?1:-1,l.y=n),a}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const o=this._handles.length>0||!this.isDragging();o!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=o,kr(this._rootElement,o))}_removeRootElementListeners(o){o.removeEventListener("mousedown",this._pointerDown,Gs),o.removeEventListener("touchstart",this._pointerDown,tM),o.removeEventListener("dragstart",this._nativeDragStart,Gs)}_applyRootElementTransform(o,e){const n=Tr(o,e),a=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=a.transform&&"none"!=a.transform?a.transform:""),a.transform=Pc(n,this._initialTransform)}_applyPreviewTransform(o,e){const n=this._previewTemplate?.template?void 0:this._initialTransform,a=Tr(o,e);this._preview.style.transform=Pc(a,n)}_getDragDistance(o){const e=this._pickupPositionOnPage;return e?{x:o.x-e.x,y:o.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:o,y:e}=this._passiveTransform;if(0===o&&0===e||this.isDragging()||!this._boundaryElement)return;const n=this._rootElement.getBoundingClientRect(),a=this._boundaryElement.getBoundingClientRect();if(0===a.width&&0===a.height||0===n.width&&0===n.height)return;const l=a.left-n.left,h=n.right-a.right,v=a.top-n.top,b=n.bottom-a.bottom;a.width>n.width?(l>0&&(o+=l),h>0&&(o-=h)):o=0,a.height>n.height?(v>0&&(e+=v),b>0&&(e-=b)):e=0,(o!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:o})}_getDragStartDelay(o){const e=this.dragStartDelay;return"number"==typeof e?e:$s(o)?e.touch:e?e.mouse:0}_updateOnScroll(o){const e=this._parentPositions.handleScroll(o);if(e){const n=wn(o);this._boundaryRect&&n!==this._boundaryElement&&n.contains(this._boundaryElement)&&Ar(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=_c(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(o,e){const n=this._previewContainer||"global";if("parent"===n)return o;if("global"===n){const a=this._document;return e||a.fullscreenElement||a.webkitFullscreenElement||a.mozFullScreenElement||a.msFullscreenElement||a.body}return Te(n)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialClientRect),this._previewRect}_getTargetHandle(o){return this._handles.find(e=>o.target&&(o.target===e||e.contains(o.target)))}}function Tr(i,o){return`translate3d(${Math.round(i)}px, ${Math.round(o)}px, 0)`}function Dc(i,o,e){return Math.max(o,Math.min(e,i))}function $s(i){return"t"===i.type[0]}function nM(i,o){const e=i.rootNodes;if(1===e.length&&e[0].nodeType===o.ELEMENT_NODE)return e[0];const n=o.createElement("div");return e.forEach(a=>n.appendChild(a)),n}function iM(i,o){i.style.width=`${o.width}px`,i.style.height=`${o.height}px`,i.style.transform=Tr(o.left,o.top)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function mn(i,o,e){const n=kc(o,i.length-1),a=kc(e,i.length-1);if(n===a)return;const l=i[n],h=a<n?-1:1;for(let v=n;v!==a;v+=h)i[v]=i[v+h];i[a]=l}function kc(i,o){return Math.max(0,Math.min(o,i))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rM{constructor(o,e){this._element=o,this._dragDropRegistry=e,this._itemPositions=[],this.orientation="vertical",this._previousSwap={drag:null,delta:0,overlaps:!1}}start(o){this.withItems(o)}sort(o,e,n,a){const l=this._itemPositions,h=this._getItemIndexFromPointerPosition(o,e,n,a);if(-1===h&&l.length>0)return null;const v="horizontal"===this.orientation,b=l.findIndex(ee=>ee.drag===o),T=l[h],Q=T.clientRect,_t=b>h?1:-1,xt=this._getItemOffsetPx(l[b].clientRect,Q,_t),jt=this._getSiblingOffsetPx(b,l,_t),ae=l.slice();return mn(l,b,h),l.forEach((ee,Oi)=>{if(ae[Oi]===ee)return;const yn=ee.drag===o,yo=yn?xt:jt,Zl=yn?o.getPlaceholderElement():ee.drag.getRootElement();ee.offset+=yo,v?(Zl.style.transform=Pc(`translate3d(${Math.round(ee.offset)}px, 0, 0)`,ee.initialTransform),Ar(ee.clientRect,0,yo)):(Zl.style.transform=Pc(`translate3d(0, ${Math.round(ee.offset)}px, 0)`,ee.initialTransform),Ar(ee.clientRect,yo,0))}),this._previousSwap.overlaps=wc(Q,e,n),this._previousSwap.drag=T.drag,this._previousSwap.delta=v?a.x:a.y,{previousIndex:b,currentIndex:h}}enter(o,e,n,a){const l=null==a||a<0?this._getItemIndexFromPointerPosition(o,e,n):a,h=this._activeDraggables,v=h.indexOf(o),b=o.getPlaceholderElement();let T=h[l];if(T===o&&(T=h[l+1]),!T&&(null==l||-1===l||l<h.length-1)&&this._shouldEnterAsFirstChild(e,n)&&(T=h[0]),v>-1&&h.splice(v,1),T&&!this._dragDropRegistry.isDragging(T)){const H=T.getRootElement();H.parentElement.insertBefore(b,H),h.splice(l,0,o)}else Te(this._element).appendChild(b),h.push(o);b.style.transform="",this._cacheItemPositions()}withItems(o){this._activeDraggables=o.slice(),this._cacheItemPositions()}withSortPredicate(o){this._sortPredicate=o}reset(){this._activeDraggables.forEach(o=>{const e=o.getRootElement();if(e){const n=this._itemPositions.find(a=>a.drag===o)?.initialTransform;e.style.transform=n||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(o){return("horizontal"===this.orientation&&"rtl"===this.direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(n=>n.drag===o)}updateOnScroll(o,e){this._itemPositions.forEach(({clientRect:n})=>{Ar(n,o,e)}),this._itemPositions.forEach(({drag:n})=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}_cacheItemPositions(){const o="horizontal"===this.orientation;this._itemPositions=this._activeDraggables.map(e=>{const n=e.getVisibleElement();return{drag:e,offset:0,initialTransform:n.style.transform||"",clientRect:xc(n)}}).sort((e,n)=>o?e.clientRect.left-n.clientRect.left:e.clientRect.top-n.clientRect.top)}_getItemOffsetPx(o,e,n){const a="horizontal"===this.orientation;let l=a?e.left-o.left:e.top-o.top;return-1===n&&(l+=a?e.width-o.width:e.height-o.height),l}_getSiblingOffsetPx(o,e,n){const a="horizontal"===this.orientation,l=e[o].clientRect,h=e[o+-1*n];let v=l[a?"width":"height"]*n;if(h){const b=a?"left":"top",T=a?"right":"bottom";-1===n?v-=h.clientRect[b]-l[T]:v+=l[b]-h.clientRect[T]}return v}_shouldEnterAsFirstChild(o,e){if(!this._activeDraggables.length)return!1;const n=this._itemPositions,a="horizontal"===this.orientation;if(n[0].drag!==this._activeDraggables[0]){const h=n[n.length-1].clientRect;return a?o>=h.right:e>=h.bottom}{const h=n[0].clientRect;return a?o<=h.left:e<=h.top}}_getItemIndexFromPointerPosition(o,e,n,a){const l="horizontal"===this.orientation,h=this._itemPositions.findIndex(({drag:v,clientRect:b})=>{if(v===o)return!1;if(a){const T=l?a.x:a.y;if(v===this._previousSwap.drag&&this._previousSwap.overlaps&&T===this._previousSwap.delta)return!1}return l?e>=Math.floor(b.left)&&e<Math.floor(b.right):n>=Math.floor(b.top)&&n<Math.floor(b.bottom)});return-1!==h&&this._sortPredicate(h,o)?h:-1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Gf{constructor(o,e,n,a,l){this._dragDropRegistry=e,this._ngZone=a,this._viewportRuler=l,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new Gt.x,this.entered=new Gt.x,this.exited=new Gt.x,this.dropped=new Gt.x,this.sorted=new Gt.x,this._isDragging=!1,this._draggables=[],this._siblings=[],this._activeSiblings=new Set,this._viewportScrollSubscription=Qn.w0.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new Gt.x,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function WC(i=0,o=Ai){return i<0&&(i=0),mg(i,i,o)}(0,hg).pipe(Ao(this._stopScrollTimers)).subscribe(()=>{const h=this._scrollNode,v=this.autoScrollStep;1===this._verticalScrollDirection?h.scrollBy(0,-v):2===this._verticalScrollDirection&&h.scrollBy(0,v),1===this._horizontalScrollDirection?h.scrollBy(-v,0):2===this._horizontalScrollDirection&&h.scrollBy(v,0)})},this.element=Te(o),this._document=n,this.withScrollableParents([this.element]),e.registerDropContainer(this),this._parentPositions=new Vf(n),this._sortStrategy=new rM(this.element,e),this._sortStrategy.withSortPredicate((h,v)=>this.sortPredicate(h,v,this))}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(o,e,n,a){this._draggingStarted(),null==a&&this.sortingDisabled&&(a=this._draggables.indexOf(o)),this._sortStrategy.enter(o,e,n,a),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:o,container:this,currentIndex:this.getItemIndex(o)})}exit(o){this._reset(),this.exited.next({item:o,container:this})}drop(o,e,n,a,l,h,v,b={}){this._reset(),this.dropped.next({item:o,currentIndex:e,previousIndex:n,container:this,previousContainer:a,isPointerOverContainer:l,distance:h,dropPoint:v,event:b})}withItems(o){const e=this._draggables;return this._draggables=o,o.forEach(n=>n._withDropContainer(this)),this.isDragging()&&(e.filter(a=>a.isDragging()).every(a=>-1===o.indexOf(a))?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(o){return this._sortStrategy.direction=o,this}connectedTo(o){return this._siblings=o.slice(),this}withOrientation(o){return this._sortStrategy.orientation=o,this}withScrollableParents(o){const e=Te(this.element);return this._scrollableElements=-1===o.indexOf(e)?[e,...o]:o.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(o){return this._isDragging?this._sortStrategy.getItemIndex(o):this._draggables.indexOf(o)}isReceiving(){return this._activeSiblings.size>0}_sortItem(o,e,n,a){if(this.sortingDisabled||!this._clientRect||!jf(this._clientRect,.05,e,n))return;const l=this._sortStrategy.sort(o,e,n,a);l&&this.sorted.next({previousIndex:l.previousIndex,currentIndex:l.currentIndex,container:this,item:o})}_startScrollingIfNecessary(o,e){if(this.autoScrollDisabled)return;let n,a=0,l=0;if(this._parentPositions.positions.forEach((h,v)=>{v===this._document||!h.clientRect||n||jf(h.clientRect,.05,o,e)&&([a,l]=function Yf(i,o,e,n){const a=Ys(o,n),l=$f(o,e);let h=0,v=0;if(a){const b=i.scrollTop;1===a?b>0&&(h=1):i.scrollHeight-b>i.clientHeight&&(h=2)}if(l){const b=i.scrollLeft;1===l?b>0&&(v=1):i.scrollWidth-b>i.clientWidth&&(v=2)}return[h,v]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(v,h.clientRect,o,e),(a||l)&&(n=v))}),!a&&!l){const{width:h,height:v}=this._viewportRuler.getViewportSize(),b={width:h,height:v,top:0,right:h,bottom:v,left:0};a=Ys(b,e),l=$f(b,o),n=window}n&&(a!==this._verticalScrollDirection||l!==this._horizontalScrollDirection||n!==this._scrollNode)&&(this._verticalScrollDirection=a,this._horizontalScrollDirection=l,this._scrollNode=n,(a||l)&&n?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const o=Te(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=o.msScrollSnapType||o.scrollSnapType||"",o.scrollSnapType=o.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const o=Te(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(o).clientRect}_reset(){this._isDragging=!1;const o=Te(this.element).style;o.scrollSnapType=o.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_isOverContainer(o,e){return null!=this._clientRect&&wc(this._clientRect,o,e)}_getSiblingContainerFromPosition(o,e,n){return this._siblings.find(a=>a._canReceive(o,e,n))}_canReceive(o,e,n){if(!this._clientRect||!wc(this._clientRect,e,n)||!this.enterPredicate(o,this))return!1;const a=this._getShadowRoot().elementFromPoint(e,n);if(!a)return!1;const l=Te(this.element);return a===l||l.contains(a)}_startReceiving(o,e){const n=this._activeSiblings;!n.has(o)&&e.every(a=>this.enterPredicate(a,this)||this._draggables.indexOf(a)>-1)&&(n.add(o),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(o){this._activeSiblings.delete(o),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(o=>{if(this.isDragging()){const e=this._parentPositions.handleScroll(o);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const o=_c(Te(this.element));this._cachedShadowRoot=o||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const o=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,o))}}function Ys(i,o){const{top:e,bottom:n,height:a}=i,l=.05*a;return o>=e-l&&o<=e+l?1:o>=n-l&&o<=n+l?2:0}function $f(i,o){const{left:e,right:n,width:a}=i,l=.05*a;return o>=e-l&&o<=e+l?1:o>=n-l&&o<=n+l?2:0}const Ac=Zs({passive:!1,capture:!0});let sM=(()=>{class i{constructor(e,n){this._ngZone=e,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=a=>a.isDragging(),this.pointerMove=new Gt.x,this.pointerUp=new Gt.x,this.scroll=new Gt.x,this._preventDefaultWhileDragging=a=>{this._activeDragInstances.length>0&&a.preventDefault()},this._persistentTouchmoveListener=a=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&a.preventDefault(),this.pointerMove.next(a))},this._document=n}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,Ac)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,Ac)}startDragging(e,n){if(!(this._activeDragInstances.indexOf(e)>-1)&&(this._activeDragInstances.push(e),1===this._activeDragInstances.length)){const a=n.type.startsWith("touch");this._globalListeners.set(a?"touchend":"mouseup",{handler:l=>this.pointerUp.next(l),options:!0}).set("scroll",{handler:l=>this.scroll.next(l),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:Ac}),a||this._globalListeners.set("mousemove",{handler:l=>this.pointerMove.next(l),options:Ac}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((l,h)=>{this._document.addEventListener(h,l.handler,l.options)})})}}stopDragging(e){const n=this._activeDragInstances.indexOf(e);n>-1&&(this._activeDragInstances.splice(n,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(e){return this._activeDragInstances.indexOf(e)>-1}scrolled(e){const n=[this.scroll];return e&&e!==this._document&&n.push(new Ye.y(a=>this._ngZone.runOutsideAngular(()=>{const h=v=>{this._activeDragInstances.length&&a.next(v)};return e.addEventListener("scroll",h,!0),()=>{e.removeEventListener("scroll",h,!0)}}))),(0,Dr.T)(...n)}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((e,n)=>{this._document.removeEventListener(n,e.handler,e.options)}),this._globalListeners.clear()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.R0b),t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const aM={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let Hg=(()=>{class i{constructor(e,n,a,l){this._document=e,this._ngZone=n,this._viewportRuler=a,this._dragDropRegistry=l}createDrag(e,n=aM){return new eM(e,n,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(e){return new Gf(e,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x),t.LFG(t.R0b),t.LFG(Mg),t.LFG(sM))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qg=new t.OlP("CDK_DRAG_PARENT"),Tc=new t.OlP("CdkDropListGroup");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let cM=(()=>{class i{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=zn(e)}ngOnDestroy(){this._items.clear()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=t.lG2({type:i,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:["cdkDropListGroupDisabled","disabled"]},exportAs:["cdkDropListGroup"],features:[t._Bn([{provide:Tc,useExisting:i}])]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Jg=new t.OlP("CDK_DRAG_CONFIG");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Bg=0;const gM=new t.OlP("CdkDropList");let Er=(()=>{class i{constructor(e,n,a,l,h,v,b){this.element=e,this._changeDetectorRef=a,this._scrollDispatcher=l,this._dir=h,this._group=v,this._destroyed=new Gt.x,this.connectedTo=[],this.id="cdk-drop-list-"+Bg++,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.dropped=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.sorted=new t.vpe,this._unsortedItems=new Set,this._dropListRef=n.createDropList(e),this._dropListRef.data=this,b&&this._assignDefaults(b),this._dropListRef.enterPredicate=(T,H)=>this.enterPredicate(T.data,H.data),this._dropListRef.sortPredicate=(T,H,Q)=>this.sortPredicate(T,H.data,Q.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),v&&v._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=zn(e)}addItem(e){this._unsortedItems.add(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}removeItem(e){this._unsortedItems.delete(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}getSortedItems(){return Array.from(this._unsortedItems).sort((e,n)=>e._dragRef.getVisibleElement().compareDocumentPosition(n._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){const e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Eo(this._dir.value),Ao(this._destroyed)).subscribe(n=>e.withDirection(n)),e.beforeStarted.subscribe(()=>{const n=be(this.connectedTo).map(a=>"string"==typeof a?i._dropLists.find(h=>h.id===a):a);if(this._group&&this._group._items.forEach(a=>{-1===n.indexOf(a)&&n.push(a)}),!this._scrollableParentsResolved){const a=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(l=>l.getElementRef().nativeElement);this._dropListRef.withScrollableParents(a),this._scrollableParentsResolved=!0}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=zn(this.sortingDisabled),e.autoScrollDisabled=zn(this.autoScrollDisabled),e.autoScrollStep=Vv(this.autoScrollStep,2),e.connectedTo(n.filter(a=>a&&a!==this).map(a=>a._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(n=>{this.entered.emit({container:this,item:n.item.data,currentIndex:n.currentIndex})}),e.exited.subscribe(n=>{this.exited.emit({container:this,item:n.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(n=>{this.sorted.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,container:this,item:n.item.data})}),e.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,item:n.item.data,isPointerOverContainer:n.isPointerOverContainer,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()})}_assignDefaults(e){const{lockAxis:n,draggingDisabled:a,sortingDisabled:l,listAutoScrollDisabled:h,listOrientation:v}=e;this.disabled=a??!1,this.sortingDisabled=l??!1,this.autoScrollDisabled=h??!1,this.orientation=v||"vertical",n&&(this.lockAxis=n)}_syncItemsWithRef(){this._dropListRef.withItems(this.getSortedItems().map(e=>e._dragRef))}}return i._dropLists=[],i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(Hg),t.Y36(t.sBO),t.Y36(Gn),t.Y36(Gi,8),t.Y36(Tc,12),t.Y36(Jg,8))},i.\u0275dir=t.lG2({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,n){2&e&&(t.uIk("id",n.id),t.ekj("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:["cdkDropListConnectedTo","connectedTo"],data:["cdkDropListData","data"],orientation:["cdkDropListOrientation","orientation"],id:"id",lockAxis:["cdkDropListLockAxis","lockAxis"],disabled:["cdkDropListDisabled","disabled"],sortingDisabled:["cdkDropListSortingDisabled","sortingDisabled"],enterPredicate:["cdkDropListEnterPredicate","enterPredicate"],sortPredicate:["cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:["cdkDropListAutoScrollDisabled","autoScrollDisabled"],autoScrollStep:["cdkDropListAutoScrollStep","autoScrollStep"]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[t._Bn([{provide:Tc,useValue:void 0},{provide:gM,useExisting:i}])]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zg=new t.OlP("CdkDragHandle");let Kf=(()=>{class i{constructor(e,n){this.element=e,this._stateChanges=new Gt.x,this._disabled=!1,this._parentDrag=n}get disabled(){return this._disabled}set disabled(e){this._disabled=zn(e),this._stateChanges.next(this)}ngOnDestroy(){this._stateChanges.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(qg,12))},i.\u0275dir=t.lG2({type:i,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:["cdkDragHandleDisabled","disabled"]},features:[t._Bn([{provide:zg,useExisting:i}])]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sr=new t.OlP("CdkDragPlaceholder"),Wf=new t.OlP("CdkDragPreview");let Ks=(()=>{class i{constructor(e,n,a,l,h,v,b,T,H,Q,_t){this.element=e,this.dropContainer=n,this._ngZone=l,this._viewContainerRef=h,this._dir=b,this._changeDetectorRef=H,this._selfHandle=Q,this._parentDrag=_t,this._destroyed=new Gt.x,this.started=new t.vpe,this.released=new t.vpe,this.ended=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.dropped=new t.vpe,this.moved=new Ye.y(xt=>{const jt=this._dragRef.moved.pipe((0,Kt.U)(ae=>({source:this,pointerPosition:ae.pointerPosition,event:ae.event,delta:ae.delta,distance:ae.distance}))).subscribe(xt);return()=>{jt.unsubscribe()}}),this._dragRef=T.createDrag(e,{dragStartThreshold:v&&null!=v.dragStartThreshold?v.dragStartThreshold:5,pointerDirectionChangeThreshold:v&&null!=v.pointerDirectionChangeThreshold?v.pointerDirectionChangeThreshold:5,zIndex:v?.zIndex}),this._dragRef.data=this,i._dragInstances.push(this),v&&this._assignDefaults(v),n&&(this._dragRef._withDropContainer(n._dropListRef),n.addItem(this)),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(e){this._disabled=zn(e),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Fe(1),Ao(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._setupHandlesListener(),this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)})})}ngOnChanges(e){const n=e.rootElementSelector,a=e.freeDragPosition;n&&!n.firstChange&&this._updateRootElement(),a&&!a.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this);const e=i._dragInstances.indexOf(this);e>-1&&i._dragInstances.splice(e,1),this._ngZone.runOutsideAngular(()=>{this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_updateRootElement(){const e=this.element.nativeElement;let n=e;this.rootElementSelector&&(n=void 0!==e.closest?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(n||e)}_getBoundaryElement(){const e=this.boundaryElement;return e?"string"==typeof e?this.element.nativeElement.closest(e):Te(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){const n=this._dir,a=this.dragStartDelay,l=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,h=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.dragStartDelay="object"==typeof a&&a?a:Vv(a),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(l).withPreviewTemplate(h).withPreviewContainer(this.previewContainer||"global"),n&&e.withDirection(n.value)}}),e.beforeStarted.pipe(Fe(1)).subscribe(()=>{if(this._parentDrag)return void e.withParent(this._parentDrag._dragRef);let n=this.element.nativeElement.parentElement;for(;n;){if(n.classList.contains("cdk-drag")){e.withParent(i._dragInstances.find(a=>a.element.nativeElement===n)?._dragRef||null);break}n=n.parentElement}})}_handleEvents(e){e.started.subscribe(n=>{this.started.emit({source:this,event:n.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(n=>{this.released.emit({source:this,event:n.event})}),e.ended.subscribe(n=>{this.ended.emit({source:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(n=>{this.entered.emit({container:n.container.data,item:this,currentIndex:n.currentIndex})}),e.exited.subscribe(n=>{this.exited.emit({container:n.container.data,item:this})}),e.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,isPointerOverContainer:n.isPointerOverContainer,item:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event})})}_assignDefaults(e){const{lockAxis:n,dragStartDelay:a,constrainPosition:l,previewClass:h,boundaryElement:v,draggingDisabled:b,rootElementSelector:T,previewContainer:H}=e;this.disabled=b??!1,this.dragStartDelay=a||0,n&&(this.lockAxis=n),l&&(this.constrainPosition=l),h&&(this.previewClass=h),v&&(this.boundaryElement=v),T&&(this.rootElementSelector=T),H&&(this.previewContainer=H)}_setupHandlesListener(){this._handles.changes.pipe(Eo(this._handles),We(e=>{const n=e.filter(a=>a._parentDrag===this).map(a=>a.element);this._selfHandle&&this.rootElementSelector&&n.push(this.element),this._dragRef.withHandles(n)}),_n(e=>(0,Dr.T)(...e.map(n=>n._stateChanges.pipe(Eo(n))))),Ao(this._destroyed)).subscribe(e=>{const n=this._dragRef,a=e.element.nativeElement;e.disabled?n.disableHandle(a):n.enableHandle(a)})}}return i._dragInstances=[],i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(gM,12),t.Y36(x),t.Y36(t.R0b),t.Y36(t.s_b),t.Y36(Jg,8),t.Y36(Gi,8),t.Y36(Hg),t.Y36(t.sBO),t.Y36(zg,10),t.Y36(qg,12))},i.\u0275dir=t.lG2({type:i,selectors:[["","cdkDrag",""]],contentQueries:function(e,n,a){if(1&e&&(t.Suo(a,Wf,5),t.Suo(a,Sr,5),t.Suo(a,zg,5)),2&e){let l;t.iGM(l=t.CRH())&&(n._previewTemplate=l.first),t.iGM(l=t.CRH())&&(n._placeholderTemplate=l.first),t.iGM(l=t.CRH())&&(n._handles=l)}},hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,n){2&e&&t.ekj("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:["cdkDragData","data"],lockAxis:["cdkDragLockAxis","lockAxis"],rootElementSelector:["cdkDragRootElement","rootElementSelector"],boundaryElement:["cdkDragBoundary","boundaryElement"],dragStartDelay:["cdkDragStartDelay","dragStartDelay"],freeDragPosition:["cdkDragFreeDragPosition","freeDragPosition"],disabled:["cdkDragDisabled","disabled"],constrainPosition:["cdkDragConstrainPosition","constrainPosition"],previewClass:["cdkDragPreviewClass","previewClass"],previewContainer:["cdkDragPreviewContainer","previewContainer"]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[t._Bn([{provide:qg,useExisting:i}]),t.TTD]}),i})(),dM=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[Hg],imports:[yr]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ec{attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;null!=o&&(this._attachedHost=null,o.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(o){this._attachedHost=o}}class np extends Ec{constructor(o,e,n,a){super(),this.component=o,this.viewContainerRef=e,this.injector=n,this.componentFactoryResolver=a}}class Ws extends Ec{constructor(o,e,n,a){super(),this.templateRef=o,this.viewContainerRef=e,this.context=n,this.injector=a}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}}class Sc extends Ec{constructor(o){super(),this.element=o instanceof t.SBq?o.nativeElement:o}}class Xs{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(o){return o instanceof np?(this._attachedPortal=o,this.attachComponentPortal(o)):o instanceof Ws?(this._attachedPortal=o,this.attachTemplatePortal(o)):this.attachDomPortal&&o instanceof Sc?(this._attachedPortal=o,this.attachDomPortal(o)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Gg extends Xs{constructor(o,e,n,a,l){super(),this.outletElement=o,this._componentFactoryResolver=e,this._appRef=n,this._defaultInjector=a,this.attachDomPortal=h=>{const v=h.element,b=this._document.createComment("dom-portal");v.parentNode.insertBefore(b,v),this.outletElement.appendChild(v),this._attachedPortal=h,super.setDisposeFn(()=>{b.parentNode&&b.parentNode.replaceChild(v,b)})},this._document=l}attachComponentPortal(o){const n=(o.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(o.component);let a;return o.viewContainerRef?(a=o.viewContainerRef.createComponent(n,o.viewContainerRef.length,o.injector||o.viewContainerRef.injector),this.setDisposeFn(()=>a.destroy())):(a=n.create(o.injector||this._defaultInjector||t.zs3.NULL),this._appRef.attachView(a.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(a.hostView),a.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(a)),this._attachedPortal=o,a}attachTemplatePortal(o){let e=o.viewContainerRef,n=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return n.rootNodes.forEach(a=>this.outletElement.appendChild(a)),n.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(n);-1!==a&&e.remove(a)}),this._attachedPortal=o,n}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let op=(()=>{class i extends Xs{constructor(e,n,a){super(),this._componentFactoryResolver=e,this._viewContainerRef=n,this._isInitialized=!1,this.attached=new t.vpe,this.attachDomPortal=l=>{const h=l.element,v=this._document.createComment("dom-portal");l.setAttachedHost(this),h.parentNode.insertBefore(v,h),this._getRootNode().appendChild(h),this._attachedPortal=l,super.setDisposeFn(()=>{v.parentNode&&v.parentNode.replaceChild(h,v)})},this._document=a}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const n=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,l=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),h=n.createComponent(l,n.length,e.injector||n.injector);return n!==this._viewContainerRef&&this._getRootNode().appendChild(h.hostView.rootNodes[0]),super.setDisposeFn(()=>h.destroy()),this._attachedPortal=e,this._attachedRef=h,this.attached.emit(h),h}attachTemplatePortal(e){e.setAttachedHost(this);const n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36(x))},i.\u0275dir=t.lG2({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[t.qOj]}),i})(),Ic=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const rp=Cg();class OP{constructor(o,e){this._viewportRuler=o,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=De(-this._previousScrollPosition.left),o.style.top=De(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const o=this._document.documentElement,n=o.style,a=this._document.body.style,l=n.scrollBehavior||"",h=a.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),rp&&(n.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),rp&&(n.scrollBehavior=l,a.scrollBehavior=h)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const e=this._document.body,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class sp{constructor(o,e,n,a){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=n,this._config=a,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(o){this._overlayRef=o}enable(){if(this._scrollSubscription)return;const o=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{const e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ap{enable(){}disable(){}attach(){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ta(i,o){return o.some(e=>i.bottom<e.top||i.top>e.bottom||i.right<e.left||i.left>e.right)}function pM(i,o){return o.some(e=>i.top<e.top||i.bottom>e.bottom||i.left<e.left||i.right>e.right)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bP{constructor(o,e,n,a){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=n,this._config=a,this._scrollSubscription=null}attach(o){this._overlayRef=o}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:a}=this._viewportRuler.getViewportSize();ta(e,[{width:n,height:a,bottom:a,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let PP=(()=>{class i{constructor(e,n,a,l){this._scrollDispatcher=e,this._viewportRuler=n,this._ngZone=a,this.noop=()=>new ap,this.close=h=>new sp(this._scrollDispatcher,this._ngZone,this._viewportRuler,h),this.block=()=>new OP(this._viewportRuler,this._document),this.reposition=h=>new bP(this._scrollDispatcher,this._viewportRuler,this._ngZone,h),this._document=l}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Gn),t.LFG(Mg),t.LFG(t.R0b),t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _M{constructor(o){if(this.scrollStrategy=new ap,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,o){const e=Object.keys(o);for(const n of e)void 0!==o[n]&&(this[n]=o[n])}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Dn{constructor(o,e,n,a,l){this.offsetX=n,this.offsetY=a,this.panelClass=l,this.originX=o.originX,this.originY=o.originY,this.overlayX=e.overlayX,this.overlayY=e.overlayY}}class xP{constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let mM=(()=>{class i{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){const n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),0===this._attachedOverlays.length&&this.detach()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),to=(()=>{class i extends mM{constructor(e,n){super(e),this._ngZone=n,this._keydownListener=a=>{const l=this._attachedOverlays;for(let h=l.length-1;h>-1;h--)if(l[h]._keydownEvents.observers.length>0){const v=l[h]._keydownEvents;this._ngZone?this._ngZone.run(()=>v.next(a)):v.next(a);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x),t.LFG(t.R0b,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),$g=(()=>{class i extends mM{constructor(e,n,a){super(e),this._platform=n,this._ngZone=a,this._cursorStyleIsSet=!1,this._pointerDownListener=l=>{this._pointerDownEventTarget=wn(l)},this._clickListener=l=>{const h=wn(l),v="click"===l.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:h;this._pointerDownEventTarget=null;const b=this._attachedOverlays.slice();for(let T=b.length-1;T>-1;T--){const H=b[T];if(H._outsidePointerEvents.observers.length<1||!H.hasAttached())continue;if(H.overlayElement.contains(h)||H.overlayElement.contains(v))break;const Q=H._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>Q.next(l)):Q.next(l)}}}add(e){if(super.add(e),!this._isAttached){const n=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(n)):this._addEventListeners(n),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x),t.LFG(ui),t.LFG(t.R0b,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Yg=(()=>{class i{constructor(e,n){this._platform=n,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const e="cdk-overlay-container";if(this._platform.isBrowser||To()){const a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let l=0;l<a.length;l++)a[l].remove()}const n=this._document.createElement("div");n.classList.add(e),To()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(x),t.LFG(ui))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Lc{constructor(o,e,n,a,l,h,v,b,T,H=!1){this._portalOutlet=o,this._host=e,this._pane=n,this._config=a,this._ngZone=l,this._keyboardDispatcher=h,this._document=v,this._location=b,this._outsideClickDispatcher=T,this._animationsDisabled=H,this._backdropElement=null,this._backdropClick=new Gt.x,this._attachments=new Gt.x,this._detachments=new Gt.x,this._locationChanges=Qn.w0.EMPTY,this._backdropClickHandler=Q=>this._backdropClick.next(Q),this._backdropTransitionendHandler=Q=>{this._disposeBackdrop(Q.target)},this._keydownEvents=new Gt.x,this._outsidePointerEvents=new Gt.x,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(o){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const e=this._portalOutlet.attach(o);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(Fe(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof e?.onDestroy&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const o=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){const o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,o&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config={...this._config,...o},this._updateElementSize()}setDirection(o){this._config={...this._config,direction:o},this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){const o=this._config.direction;return o?"string"==typeof o?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const o=this._pane.style;o.width=De(this._config.width),o.height=De(this._config.height),o.minWidth=De(this._config.minWidth),o.minHeight=De(this._config.minHeight),o.maxWidth=De(this._config.maxWidth),o.maxHeight=De(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachBackdrop(){const o="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(o)})}):this._backdropElement.classList.add(o)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const o=this._backdropElement;if(o){if(this._animationsDisabled)return void this._disposeBackdrop(o);o.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{o.addEventListener("transitionend",this._backdropTransitionendHandler)}),o.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(o)},500))}}_toggleClasses(o,e,n){const a=be(e||[]).filter(l=>!!l);a.length&&(n?o.classList.add(...a):o.classList.remove(...a))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const o=this._ngZone.onStable.pipe(Ao((0,Dr.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),o.unsubscribe())})})}_disposeScrollStrategy(){const o=this._scrollStrategy;o&&(o.disable(),o.detach&&o.detach())}_disposeBackdrop(o){o&&(o.removeEventListener("click",this._backdropClickHandler),o.removeEventListener("transitionend",this._backdropTransitionendHandler),o.remove(),this._backdropElement===o&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nc="cdk-overlay-connected-position-bounding-box",cp=/([A-Za-z%]+)$/;class Kg{constructor(o,e,n,a,l){this._viewportRuler=e,this._document=n,this._platform=a,this._overlayContainer=l,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Gt.x,this._resizeSubscription=Qn.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(o)}get positions(){return this._preferredPositions}attach(o){this._validatePositions(),o.hostElement.classList.add(Nc),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const o=this._originRect,e=this._overlayRect,n=this._viewportRect,a=this._containerRect,l=[];let h;for(let v of this._preferredPositions){let b=this._getOriginPoint(o,a,v),T=this._getOverlayPoint(b,e,v),H=this._getOverlayFit(T,e,n,v);if(H.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(v,b);this._canFitWithFlexibleDimensions(H,T,n)?l.push({position:v,origin:b,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(b,v)}):(!h||h.overlayFit.visibleArea<H.visibleArea)&&(h={overlayFit:H,overlayPoint:T,originPoint:b,position:v,overlayRect:e})}if(l.length){let v=null,b=-1;for(const T of l){const H=T.boundingBoxRect.width*T.boundingBoxRect.height*(T.position.weight||1);H>b&&(b=H,v=T)}return this._isPushed=!1,void this._applyPosition(v.position,v.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(h.position,h.originPoint);this._applyPosition(h.position,h.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Io(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Nc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const o=this._lastPosition;if(o){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const e=this._getOriginPoint(this._originRect,this._containerRect,o);this._applyPosition(o,e)}else this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,-1===o.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}_getOriginPoint(o,e,n){let a,l;if("center"==n.originX)a=o.left+o.width/2;else{const h=this._isRtl()?o.right:o.left,v=this._isRtl()?o.left:o.right;a="start"==n.originX?h:v}return e.left<0&&(a-=e.left),l="center"==n.originY?o.top+o.height/2:"top"==n.originY?o.top:o.bottom,e.top<0&&(l-=e.top),{x:a,y:l}}_getOverlayPoint(o,e,n){let a,l;return a="center"==n.overlayX?-e.width/2:"start"===n.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,l="center"==n.overlayY?-e.height/2:"top"==n.overlayY?0:-e.height,{x:o.x+a,y:o.y+l}}_getOverlayFit(o,e,n,a){const l=Wg(e);let{x:h,y:v}=o,b=this._getOffset(a,"x"),T=this._getOffset(a,"y");b&&(h+=b),T&&(v+=T);let _t=0-v,xt=v+l.height-n.height,jt=this._subtractOverflows(l.width,0-h,h+l.width-n.width),ae=this._subtractOverflows(l.height,_t,xt),ee=jt*ae;return{visibleArea:ee,isCompletelyWithinViewport:l.width*l.height===ee,fitsInViewportVertically:ae===l.height,fitsInViewportHorizontally:jt==l.width}}_canFitWithFlexibleDimensions(o,e,n){if(this._hasFlexibleDimensions){const a=n.bottom-e.y,l=n.right-e.x,h=Ei(this._overlayRef.getConfig().minHeight),v=Ei(this._overlayRef.getConfig().minWidth),T=o.fitsInViewportHorizontally||null!=v&&v<=l;return(o.fitsInViewportVertically||null!=h&&h<=a)&&T}return!1}_pushOverlayOnScreen(o,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};const a=Wg(e),l=this._viewportRect,h=Math.max(o.x+a.width-l.width,0),v=Math.max(o.y+a.height-l.height,0),b=Math.max(l.top-n.top-o.y,0),T=Math.max(l.left-n.left-o.x,0);let H=0,Q=0;return H=a.width<=l.width?T||-h:o.x<this._viewportMargin?l.left-n.left-o.x:0,Q=a.height<=l.height?b||-v:o.y<this._viewportMargin?l.top-n.top-o.y:0,this._previousPushAmount={x:H,y:Q},{x:o.x+H,y:o.y+Q}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._lastPosition=o,this._positionChanges.observers.length){const n=this._getScrollVisibility(),a=new xP(o,n);this._positionChanges.next(a)}this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let n,a=o.overlayY;n="center"===o.overlayX?"center":this._isRtl()?"start"===o.overlayX?"right":"left":"start"===o.overlayX?"left":"right";for(let l=0;l<e.length;l++)e[l].style.transformOrigin=`${n} ${a}`}_calculateBoundingBoxRect(o,e){const n=this._viewportRect,a=this._isRtl();let l,h,v,H,Q,_t;if("top"===e.overlayY)h=o.y,l=n.height-h+this._viewportMargin;else if("bottom"===e.overlayY)v=n.height-o.y+2*this._viewportMargin,l=n.height-v+this._viewportMargin;else{const xt=Math.min(n.bottom-o.y+n.top,o.y),jt=this._lastBoundingBoxSize.height;l=2*xt,h=o.y-xt,l>jt&&!this._isInitialRender&&!this._growAfterOpen&&(h=o.y-jt/2)}if("end"===e.overlayX&&!a||"start"===e.overlayX&&a)_t=n.width-o.x+this._viewportMargin,H=o.x-this._viewportMargin;else if("start"===e.overlayX&&!a||"end"===e.overlayX&&a)Q=o.x,H=n.right-o.x;else{const xt=Math.min(n.right-o.x+n.left,o.x),jt=this._lastBoundingBoxSize.width;H=2*xt,Q=o.x-xt,H>jt&&!this._isInitialRender&&!this._growAfterOpen&&(Q=o.x-jt/2)}return{top:h,left:Q,bottom:v,right:_t,width:H,height:l}}_setBoundingBoxStyles(o,e){const n=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));const a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right=a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{const l=this._overlayRef.getConfig().maxHeight,h=this._overlayRef.getConfig().maxWidth;a.height=De(n.height),a.top=De(n.top),a.bottom=De(n.bottom),a.width=De(n.width),a.left=De(n.left),a.right=De(n.right),a.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",a.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",l&&(a.maxHeight=De(l)),h&&(a.maxWidth=De(h))}this._lastBoundingBoxSize=n,Io(this._boundingBox.style,a)}_resetBoundingBoxStyles(){Io(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Io(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,e){const n={},a=this._hasExactPosition(),l=this._hasFlexibleDimensions,h=this._overlayRef.getConfig();if(a){const H=this._viewportRuler.getViewportScrollPosition();Io(n,this._getExactOverlayY(e,o,H)),Io(n,this._getExactOverlayX(e,o,H))}else n.position="static";let v="",b=this._getOffset(e,"x"),T=this._getOffset(e,"y");b&&(v+=`translateX(${b}px) `),T&&(v+=`translateY(${T}px)`),n.transform=v.trim(),h.maxHeight&&(a?n.maxHeight=De(h.maxHeight):l&&(n.maxHeight="")),h.maxWidth&&(a?n.maxWidth=De(h.maxWidth):l&&(n.maxWidth="")),Io(this._pane.style,n)}_getExactOverlayY(o,e,n){let a={top:"",bottom:""},l=this._getOverlayPoint(e,this._overlayRect,o);return this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,n)),"bottom"===o.overlayY?a.bottom=this._document.documentElement.clientHeight-(l.y+this._overlayRect.height)+"px":a.top=De(l.y),a}_getExactOverlayX(o,e,n){let h,a={left:"",right:""},l=this._getOverlayPoint(e,this._overlayRect,o);return this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,n)),h=this._isRtl()?"end"===o.overlayX?"left":"right":"end"===o.overlayX?"right":"left","right"===h?a.right=this._document.documentElement.clientWidth-(l.x+this._overlayRect.width)+"px":a.left=De(l.x),a}_getScrollVisibility(){const o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:pM(o,n),isOriginOutsideView:ta(o,n),isOverlayClipped:pM(e,n),isOverlayOutsideView:ta(e,n)}}_subtractOverflows(o,...e){return e.reduce((n,a)=>n-Math.max(a,0),o)}_getNarrowedViewportRect(){const o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._viewportMargin,left:n.left+this._viewportMargin,right:n.left+o-this._viewportMargin,bottom:n.top+e-this._viewportMargin,width:o-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return"x"===e?o.offsetX??this._offsetX:o.offsetY??this._offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&be(o).forEach(e=>{""!==e&&-1===this._appliedPanelClasses.indexOf(e)&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getOriginRect(){const o=this._origin;if(o instanceof t.SBq)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();const e=o.width||0,n=o.height||0;return{top:o.y,bottom:o.y+n,left:o.x,right:o.x+e,height:n,width:e}}}function Io(i,o){for(let e in o)o.hasOwnProperty(e)&&(i[e]=o[e]);return i}function Ei(i){if("number"!=typeof i&&null!=i){const[o,e]=i.split(cp);return e&&"px"!==e?null:parseFloat(o)}return i||null}function Wg(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}const Xg="cdk-global-overlay-wrapper";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vM{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(o){const e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(Xg),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:a,height:l,maxWidth:h,maxHeight:v}=n,b=!("100%"!==a&&"100vw"!==a||h&&"100%"!==h&&"100vw"!==h),T=!("100%"!==l&&"100vh"!==l||v&&"100%"!==v&&"100vh"!==v),H=this._xPosition,Q=this._xOffset,_t="rtl"===this._overlayRef.getConfig().direction;let xt="",jt="",ae="";b?ae="flex-start":"center"===H?(ae="center",_t?jt=Q:xt=Q):_t?"left"===H||"end"===H?(ae="flex-end",xt=Q):("right"===H||"start"===H)&&(ae="flex-start",jt=Q):"left"===H||"start"===H?(ae="flex-start",xt=Q):("right"===H||"end"===H)&&(ae="flex-end",jt=Q),o.position=this._cssPosition,o.marginLeft=b?"0":xt,o.marginTop=T?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=b?"0":jt,e.justifyContent=ae,e.alignItems=T?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(Xg),n.justifyContent=n.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let CM=(()=>{class i{constructor(e,n,a,l){this._viewportRuler=e,this._document=n,this._platform=a,this._overlayContainer=l}global(){return new vM}flexibleConnectedTo(e){return new Kg(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Mg),t.LFG(x),t.LFG(ui),t.LFG(Yg))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Zc=0,Re=(()=>{class i{constructor(e,n,a,l,h,v,b,T,H,Q,_t,xt){this.scrollStrategies=e,this._overlayContainer=n,this._componentFactoryResolver=a,this._positionBuilder=l,this._keyboardDispatcher=h,this._injector=v,this._ngZone=b,this._document=T,this._directionality=H,this._location=Q,this._outsideClickDispatcher=_t,this._animationsModuleType=xt}create(e){const n=this._createHostElement(),a=this._createPaneElement(n),l=this._createPortalOutlet(a),h=new _M(e);return h.direction=h.direction||this._directionality.value,new Lc(l,n,a,h,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(e){const n=this._document.createElement("div");return n.id="cdk-overlay-"+Zc++,n.classList.add("cdk-overlay-pane"),e.appendChild(n),n}_createHostElement(){const e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(t.z2F)),new Gg(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(PP),t.LFG(Yg),t.LFG(t._Vd),t.LFG(CM),t.LFG(to),t.LFG(t.zs3),t.LFG(t.R0b),t.LFG(x),t.LFG(Gi),t.LFG(gt),t.LFG($g),t.LFG(t.QbO,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dp={provide:new t.OlP("cdk-connected-overlay-scroll-strategy"),deps:[Re],useFactory:function up(i){return()=>i.scrollStrategies.reposition()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let eu=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[Re,dp],imports:[vc,Ic,di,di]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lr(i){return new Ye.y(o=>{(0,Zn.Xf)(i()).subscribe(o)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nu(i,o){}class iu{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let MM=(()=>{class i extends Xs{constructor(e,n,a,l,h,v,b,T){super(),this._elementRef=e,this._focusTrapFactory=n,this._config=l,this._interactivityChecker=h,this._ngZone=v,this._overlayRef=b,this._focusMonitor=T,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=H=>{this._portalOutlet.hasAttached();const Q=this._portalOutlet.attachDomPortal(H);return this._contentAttached(),Q},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=a}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();const n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const a=()=>{e.removeEventListener("blur",a),e.removeEventListener("mousedown",a),e.removeAttribute("tabindex")};e.addEventListener("blur",a),e.addEventListener("mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(n=>{n||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let n=null;if("string"==typeof e?n=this._document.querySelector(e):"boolean"==typeof e?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&"function"==typeof n.focus){const a=vr(),l=this._elementRef.nativeElement;(!a||a===this._document.body||a===l||l.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,n=vr();return e===n||e.contains(n)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=vr())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(bc),t.Y36(x,8),t.Y36(iu),t.Y36(Af),t.Y36(t.R0b),t.Y36(Lc),t.Y36(mP))},i.\u0275cmp=t.Xpm({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,n){if(1&e&&t.Gf(op,7),2&e){let a;t.iGM(a=t.CRH())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,n){2&e&&t.uIk("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledBy)("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[t.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,n){1&e&&t.YNc(0,nu,0,0,"ng-template",0)},dependencies:[op],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class en{constructor(o,e){this.overlayRef=o,this.config=e,this.closed=new Gt.x,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{27===n.keyCode&&!this.disableClose&&!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function LC(i,...o){return o.length?o.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(o,e){if(this.containerInstance){const n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),n.next(o),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const fp=new t.OlP("DialogScrollStrategy"),nn=new t.OlP("DialogData"),ou=new t.OlP("DefaultDialogConfig"),kn={provide:fp,deps:[Re],useFactory:function yM(i){return()=>i.scrollStrategies.block()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let pp=0,Ue=(()=>{class i{constructor(e,n,a,l,h,v){this._overlay=e,this._injector=n,this._defaultOptions=a,this._parentDialog=l,this._overlayContainer=h,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new Gt.x,this._afterOpenedAtThisLevel=new Gt.x,this._ariaHiddenElements=new Map,this.afterAllClosed=Lr(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Eo(void 0))),this._scrollStrategy=v}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,n){(n={...this._defaultOptions||new iu,...n}).id=n.id||"cdk-dialog-"+pp++,n.id&&this.getDialogById(n.id);const l=this._getOverlayConfig(n),h=this._overlay.create(l),v=new en(h,n),b=this._attachContainer(h,v,n);return v.containerInstance=b,this._attachDialogContent(e,v,b,n),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(v),v.closed.subscribe(()=>this._removeOpenDialog(v,!0)),this.afterOpened.next(v),v}closeAll(){_p(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){_p(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),_p(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const n=new _M({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,a){const l=a.injector||a.viewContainerRef?.injector,h=[{provide:iu,useValue:a},{provide:en,useValue:n},{provide:Lc,useValue:e}];let v;a.container?"function"==typeof a.container?v=a.container:(v=a.container.type,h.push(...a.container.providers(a))):v=MM;const b=new np(v,a.viewContainerRef,t.zs3.create({parent:l||this._injector,providers:h}),a.componentFactoryResolver);return e.attach(b).instance}_attachDialogContent(e,n,a,l){if(e instanceof t.Rgc){const h=this._createInjector(l,n,a,void 0);let v={$implicit:l.data,dialogRef:n};l.templateContext&&(v={...v,..."function"==typeof l.templateContext?l.templateContext():l.templateContext}),a.attachTemplatePortal(new Ws(e,null,v,h))}else{const h=this._createInjector(l,n,a,this._injector),v=a.attachComponentPortal(new np(e,l.viewContainerRef,h,l.componentFactoryResolver));n.componentInstance=v.instance}}_createInjector(e,n,a,l){const h=e.injector||e.viewContainerRef?.injector,v=[{provide:nn,useValue:e.data},{provide:en,useValue:n}];return e.providers&&("function"==typeof e.providers?v.push(...e.providers(n,e,a)):v.push(...e.providers)),e.direction&&(!h||!h.get(Gi,null,t.XFs.Optional))&&v.push({provide:Gi,useValue:{value:e.direction,change:At()}}),t.zs3.create({parent:h||l,providers:v})}_removeOpenDialog(e,n){const a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((l,h)=>{l?h.setAttribute("aria-hidden",l):h.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const n=e.parentElement.children;for(let a=n.length-1;a>-1;a--){const l=n[a];l!==e&&"SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName&&!l.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(l,l.getAttribute("aria-hidden")),l.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Re),t.LFG(t.zs3),t.LFG(ou,8),t.LFG(i,12),t.LFG(Yg),t.LFG(fp))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();function _p(i,o){let e=i.length;for(;e--;)o(i[e])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let OM=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[Ue,kn],imports:[eu,Ic,Yn,Ic]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function eo(i,o){const e=(0,Fn.m)(i)?i:()=>i,n=a=>a.error(e());return new Ye.y(o?a=>o.schedule(n,0,a):n)}const Si=new Ye.y(vg.Z);function ru(){return(0,Ee.e)((i,o)=>{let e=null;i._refCount++;const n=(0,me.x)(o,void 0,void 0,void 0,()=>{if(!i||i._refCount<=0||0<--i._refCount)return void(e=null);const a=i._connection,l=e;e=null,a&&(!l||a===l)&&a.unsubscribe(),o.unsubscribe()});i.subscribe(n),n.closed||(e=i.connect())})}class su extends Ye.y{constructor(o,e){super(),this.source=o,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,(0,Ee.A)(o)&&(this.lift=o.lift)}_subscribe(o){return this.getSubject().subscribe(o)}getSubject(){const o=this._subject;return(!o||o.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:o}=this;this._subject=this._connection=null,o?.unsubscribe()}connect(){let o=this._connection;if(!o){o=this._connection=new Qn.w0;const e=this.getSubject();o.add(this.source.subscribe((0,me.x)(e,void 0,()=>{this._teardown(),e.complete()},n=>{this._teardown(),e.error(n)},()=>this._teardown()))),o.closed&&(this._connection=null,o=Qn.w0.EMPTY)}return o}refCount(){return ru()(this)}}const bM={connector:()=>new Gt.x};function au(i,o=bM){const{connector:e}=o;return(0,Ee.e)((n,a)=>{const l=e();(0,Zn.Xf)(i(function mp(i){return new Ye.y(o=>i.subscribe(o))}(l))).subscribe(a),a.add(n.subscribe(l))})}function cu(i){return(0,Kt.U)(()=>i)}function Cp(i,o){return o?e=>qs(o.pipe(Fe(1),function vp(){return(0,Ee.e)((i,o)=>{i.subscribe((0,me.x)(o,vg.Z))})}()),e.pipe(Cp(i))):(0,Ke.z)((e,n)=>i(e,n).pipe(Fe(1),cu(e)))}
/**
       * @license Angular v14.2.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Lo="Service workers are disabled or not supported by this browser";class Fc{constructor(o){if(this.serviceWorker=o,o){const n=Do(o,"controllerchange").pipe((0,Kt.U)(()=>o.controller)),l=qs(Lr(()=>At(o.controller)),n);this.worker=l.pipe(Ne(H=>!!H)),this.registration=this.worker.pipe(_n(()=>o.getRegistration()));const T=Do(o,"message").pipe((0,Kt.U)(H=>H.data)).pipe(Ne(H=>H&&H.type)).pipe(function xM(i){return i?o=>au(i)(o):o=>function PM(i,o){const e=(0,Fn.m)(i)?i:()=>i;return(0,Fn.m)(o)?au(o,{connector:e}):n=>new su(n,e)}(new Gt.x)(o)}());T.connect(),this.events=T}else this.worker=this.events=this.registration=function wM(i){return Lr(()=>eo(new Error(i)))}(Lo)}postMessage(o,e){return this.worker.pipe(Fe(1),We(n=>{n.postMessage({action:o,...e})})).toPromise().then(()=>{})}postMessageWithOperation(o,e,n){const a=this.waitForOperationCompleted(n),l=this.postMessage(o,e);return Promise.all([l,a]).then(([,h])=>h)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(o){let e;return e="string"==typeof o?n=>n.type===o:n=>o.includes(n.type),this.events.pipe(Ne(e))}nextEventOfType(o){return this.eventsOfType(o).pipe(Fe(1))}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(Ne(e=>e.nonce===o),Fe(1),(0,Kt.U)(e=>{if(void 0!==e.result)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let AP=(()=>{class i{constructor(e){if(this.sw=e,this.subscriptionChanges=new Gt.x,!e.isEnabled)return this.messages=Si,this.notificationClicks=Si,void(this.subscription=Si);this.messages=this.sw.eventsOfType("PUSH").pipe((0,Kt.U)(a=>a.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,Kt.U)(a=>a.data)),this.pushManager=this.sw.registration.pipe((0,Kt.U)(a=>a.pushManager));const n=this.pushManager.pipe(_n(a=>a.getSubscription()));this.subscription=(0,Dr.T)(n,this.subscriptionChanges)}get isEnabled(){return this.sw.isEnabled}requestSubscription(e){if(!this.sw.isEnabled)return Promise.reject(new Error(Lo));const n={userVisibleOnly:!0};let a=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(a.length));for(let h=0;h<a.length;h++)l[h]=a.charCodeAt(h);return n.applicationServerKey=l,this.pushManager.pipe(_n(h=>h.subscribe(n)),Fe(1)).toPromise().then(h=>(this.subscriptionChanges.next(h),h))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe(Fe(1),_n(n=>{if(null===n)throw new Error("Not subscribed to push notifications.");return n.unsubscribe().then(a=>{if(!a)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(Lo))}decodeBase64(e){return atob(e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Fc))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})(),lu=(()=>{class i{constructor(e){if(this.sw=e,!e.isEnabled)return this.versionUpdates=Si,this.available=Si,this.activated=Si,void(this.unrecoverable=Si);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.available=this.versionUpdates.pipe(Ne(n=>"VERSION_READY"===n.type),(0,Kt.U)(n=>({type:"UPDATE_AVAILABLE",current:n.currentVersion,available:n.latestVersion}))),this.activated=this.sw.eventsOfType("UPDATE_ACTIVATED"),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}get isEnabled(){return this.sw.isEnabled}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Lo));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Lo));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Fc))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class gu{}const Mp=new t.OlP("NGSW_REGISTER_SCRIPT");function DM(i,o,e,n){return()=>{if(!_s(n)||!("serviceWorker"in navigator)||!1===e.enabled)return;let a;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof e.registrationStrategy)a=e.registrationStrategy();else{const[h,...v]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(h){case"registerImmediately":a=At(null);break;case"registerWithDelay":a=Rc(+v[0]||0);break;case"registerWhenStable":a=v[0]?(0,Dr.T)(yp(i),Rc(+v[0])):yp(i);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}i.get(t.R0b).runOutsideAngular(()=>a.pipe(Fe(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(h=>console.error("Service worker registration failed with:",h))))}}function Rc(i){return At(null).pipe(function fi(i,o=Ai){const e=mg(i,o);return Cp(()=>e)}(i))}function yp(i){return i.get(t.z2F).isStable.pipe(Ne(e=>e))}function kM(i,o){return new Fc(_s(o)&&!1!==i.enabled?navigator.serviceWorker:void 0)}let Uc=(()=>{class i{static register(e,n={}){return{ngModule:i,providers:[{provide:Mp,useValue:e},{provide:gu,useValue:n},{provide:Fc,useFactory:kM,deps:[gu,t.Lbi]},{provide:t.ip1,useFactory:DM,deps:[t.zs3,Mp,gu,t.Lbi],multi:!0}]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[AP,lu]}),i})(),ea=(()=>{class i{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=a=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.Qsj),t.Y36(t.SBq))},i.\u0275dir=t.lG2({type:i}),i})(),Nr=(()=>{class i extends ea{}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,features:[t.qOj]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Rn=new t.OlP("NgValueAccessor"),TP={provide:Rn,useExisting:(0,t.Gpc)(()=>jc),multi:!0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jc=(()=>{class i extends Nr{writeValue(e){this.setProperty("checked",e)}}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,n){1&e&&t.NdJ("change",function(l){return n.onChange(l.target.checked)})("blur",function(){return n.onTouched()})},features:[t._Bn([TP]),t.qOj]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Op={provide:Rn,useExisting:(0,t.Gpc)(()=>no),multi:!0},Pp=new t.OlP("CompositionEventMode");let no=(()=>{class i extends ea{constructor(e,n,a){super(e,n),this._compositionMode=a,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function bp(){const i=B()?B().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(Pp,8))},i.\u0275dir=t.lG2({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,n){1&e&&t.NdJ("input",function(l){return n._handleInput(l.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(l){return n._compositionEnd(l.target.value)})},features:[t._Bn([Op]),t.qOj]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wn(i){return null==i||("string"==typeof i||Array.isArray(i))&&0===i.length}const je=new t.OlP("NgValidators"),io=new t.OlP("NgAsyncValidators");function Vc(i){return null}function Tp(i){return null!=i}function hu(i){return(0,t.QGY)(i)?(0,he.D)(i):i}function Hc(i){let o={};return i.forEach(e=>{o=null!=e?{...o,...e}:o}),0===Object.keys(o).length?null:o}function Ep(i,o){return o.map(e=>e(i))}function Sp(i){return i.map(o=>function fu(i){return!i.validate}(o)?o:e=>o.validate(e))}function pu(i){return null!=i?function Ip(i){if(!i)return null;const o=i.filter(Tp);return 0==o.length?null:function(e){return Hc(Ep(e,o))}}(Sp(i)):null}function _u(i){return null!=i?function Lp(i){if(!i)return null;const o=i.filter(Tp);return 0==o.length?null:function(e){return function uu(...i){const o=(0,$e.jO)(i),{args:e,keys:n}=Mf(i),a=new Ye.y(l=>{const{length:h}=e;if(!h)return void l.complete();const v=new Array(h);let b=h,T=h;for(let H=0;H<h;H++){let Q=!1;(0,Zn.Xf)(e[H]).subscribe((0,me.x)(l,_t=>{Q||(Q=!0,T--),v[H]=_t},()=>b--,void 0,()=>{(!b||!Q)&&(T||l.next(n?yf(n,v):v),l.complete())}))}});return o?a.pipe(pn(o)):a}
/**
       * @license Angular v14.2.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ep(e,o).map(hu)).pipe((0,Kt.U)(Hc))}}(Sp(i)):null}function Np(i,o){return null===i?[o]:Array.isArray(i)?[...i,o]:[i,o]}function Zp(i){return i?Array.isArray(i)?i:[i]:[]}function ro(i,o){return Array.isArray(i)?i.includes(o):i===o}function Fp(i,o){const e=Zp(o);return Zp(i).forEach(a=>{ro(e,a)||e.push(a)}),e}function Rp(i,o){return Zp(o).filter(e=>!ro(i,e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class qc{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=pu(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=_u(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o){this.control&&this.control.reset(o)}hasError(o,e){return!!this.control&&this.control.hasError(o,e)}getError(o,e){return this.control?this.control.getError(o,e):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vn extends qc{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class on extends qc{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let No=(()=>{class i extends class Fr{constructor(o){this._cd=o}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(e){super(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(on,2))},i.\u0275dir=t.lG2({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,n){2&e&&t.ekj("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[t.qOj]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Vr="VALID",Bc="INVALID",Hr="PENDING",qr="DISABLED";function Cu(i){return Array.isArray(i)?pu(i):i||null}function zc(i){return Array.isArray(i)?_u(i):i||null}function Qc(i){return null!=i&&!Array.isArray(i)&&"object"==typeof i}function Br(i,o){(function bu(i,o){const e=function ia(i){return i._rawValidators}(i);null!==o.validator?i.setValidators(Np(e,o.validator)):"function"==typeof e&&i.setValidators([e]);const n=function oo(i){return i._rawAsyncValidators}(i);null!==o.asyncValidator?i.setAsyncValidators(Np(n,o.asyncValidator)):"function"==typeof n&&i.setAsyncValidators([n]);const a=()=>i.updateValueAndValidity();zr(o._rawValidators,a),zr(o._rawAsyncValidators,a)})(i,o),o.valueAccessor.writeValue(i.value),i.disabled&&o.valueAccessor.setDisabledState?.(!0),function Bp(i,o){o.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,"change"===i.updateOn&&Pu(i,o)})}(i,o),function NM(i,o){const e=(n,a)=>{o.valueAccessor.writeValue(n),a&&o.viewToModelUpdate(n)};i.registerOnChange(e),o._registerOnDestroy(()=>{i._unregisterOnChange(e)})}(i,o),function zp(i,o){o.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,"blur"===i.updateOn&&i._pendingChange&&Pu(i,o),"submit"!==i.updateOn&&i.markAsTouched()})}(i,o),function Jp(i,o){if(o.valueAccessor.setDisabledState){const e=n=>{o.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),o._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}(i,o)}function zr(i,o){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Pu(i,o){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ku(i,o){const e=i.indexOf(o);e>-1&&i.splice(e,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Kp(i){return"object"==typeof i&&null!==i&&2===Object.keys(i).length&&"value"in i&&"disabled"in i}const JM={provide:on,useExisting:(0,t.Gpc)(()=>_a)},Au=(()=>Promise.resolve())();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _a=(()=>{class i extends on{constructor(e,n,a,l,h){super(),this._changeDetectorRef=h,this.control=new class extends class Gc{constructor(o,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=o,this._rawAsyncValidators=e,this._composedValidatorFn=Cu(this._rawValidators),this._composedAsyncValidatorFn=zc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get valid(){return this.status===Vr}get invalid(){return this.status===Bc}get pending(){return this.status==Hr}get disabled(){return this.status===qr}get enabled(){return this.status!==qr}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._rawValidators=o,this._composedValidatorFn=Cu(o)}setAsyncValidators(o){this._rawAsyncValidators=o,this._composedAsyncValidatorFn=zc(o)}addValidators(o){this.setValidators(Fp(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Fp(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Rp(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Rp(o,this._rawAsyncValidators))}hasValidator(o){return ro(this._rawValidators,o)}hasAsyncValidator(o){return ro(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){this.touched=!0,this._parent&&!o.onlySelf&&this._parent.markAsTouched(o)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(o=>o.markAllAsTouched())}markAsUntouched(o={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o)}markAsDirty(o={}){this.pristine=!1,this._parent&&!o.onlySelf&&this._parent.markAsDirty(o)}markAsPristine(o={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o)}markAsPending(o={}){this.status=Hr,!1!==o.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!o.onlySelf&&this._parent.markAsPending(o)}disable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=qr,this.errors=null,this._forEachChild(n=>{n.disable({...o,onlySelf:!0})}),this._updateValue(),!1!==o.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...o,skipPristineCheck:e}),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=Vr,this._forEachChild(n=>{n.enable({...o,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors({...o,skipPristineCheck:e}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vr||this.status===Hr)&&this._runAsyncValidator(o.emitEvent)),!1!==o.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(o)}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?qr:Vr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o){if(this.asyncValidator){this.status=Hr,this._hasOwnPendingAsyncValidator=!0;const e=hu(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:o})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(!1!==e.emitEvent)}get(o){let e=o;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((n,a)=>n&&n._find(a),this)}getError(o,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(o)}_initObservables(){this.valueChanges=new t.vpe,this.statusChanges=new t.vpe}_calculateStatus(){return this._allControlsDisabled()?qr:this.errors?Bc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Hr)?Hr:this._anyControlsHaveStatus(Bc)?Bc:Vr}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o={}){this.pristine=!this._anyControlsDirty(),this._parent&&!o.onlySelf&&this._parent._updatePristine(o)}_updateTouched(o={}){this.touched=this._anyControlsTouched(),this._parent&&!o.onlySelf&&this._parent._updateTouched(o)}_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Qc(o)&&null!=o.updateOn&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(o){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(o=null,e,n){super(function vu(i){return(Qc(i)?i.validators:i)||null}(e),function ga(i,o){return(Qc(o)?o.asyncValidators:i)||null}(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Qc(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Kp(o)?o.value:o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){ku(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){ku(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(o){Kp(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}},this._registered=!1,this.update=new t.vpe,this._parent=e,this._setValidators(n),this._setAsyncValidators(a),this.valueAccessor=function Kc(i,o){if(!o)return null;let e,n,a;return Array.isArray(o),o.forEach(l=>{l.constructor===no?e=l:function $p(i){return Object.getPrototypeOf(i.constructor)===Nr}(l)?n=l:a=l}),a||n||e||null}(0,l)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Yc(i,o){if(!i.hasOwnProperty("model"))return!1;const e=i.model;return!!e.isFirstChange()||!Object.is(o,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Br(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Au.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const n=e.isDisabled.currentValue,a=0!==n&&(0,t.D6c)(n);Au.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Jr(i,o){return[...o.path,i]}(e,this._parent):[e]}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(vn,9),t.Y36(je,10),t.Y36(io,10),t.Y36(Rn,10),t.Y36(t.sBO,8))},i.\u0275dir=t.lG2({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[t._Bn([JM]),t.qOj,t.TTD]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const IP={provide:Rn,useExisting:(0,t.Gpc)(()=>Gr),multi:!0};let Gr=(()=>{class i extends Nr{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=n=>{e(""==n?null:parseFloat(n))}}}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,n){1&e&&t.NdJ("input",function(l){return n.onChange(l.target.value)})("blur",function(){return n.onTouched()})},features:[t._Bn([IP]),t.qOj]}),i})(),e_=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const r_={provide:Rn,useExisting:(0,t.Gpc)(()=>Ma),multi:!0};function Ca(i,o){return null==i?`${o}`:(o&&"object"==typeof o&&(o="Object"),`${i}: ${o}`.slice(0,50))}let Ma=(()=>{class i extends Nr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const a=Ca(this._getOptionId(e),e);this.setProperty("value",a)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const n of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){const n=function GM(i){return i.split(":")[0]}(e);return this._optionMap.has(n)?this._optionMap.get(n):e}}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,n){1&e&&t.NdJ("change",function(l){return n.onChange(l.target.value)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([r_]),t.qOj]}),i})(),Zo=(()=>{class i{constructor(e,n,a){this._element=e,this._renderer=n,this._select=a,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(Ca(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Ma,9))},i.\u0275dir=t.lG2({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Zu={provide:Rn,useExisting:(0,t.Gpc)(()=>Oa),multi:!0};function ya(i,o){return null==i?`${o}`:("string"==typeof o&&(o=`'${o}'`),o&&"object"==typeof o&&(o="Object"),`${i}: ${o}`.slice(0,50))}let Oa=(()=>{class i extends Nr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let n;if(this.value=e,Array.isArray(e)){const a=e.map(l=>this._getOptionId(l));n=(l,h)=>{l._setSelected(a.indexOf(h.toString())>-1)}}else n=(a,l)=>{a._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{const a=[],l=n.selectedOptions;if(void 0!==l){const h=l;for(let v=0;v<h.length;v++){const T=this._getOptionValue(h[v].value);a.push(T)}}else{const h=n.options;for(let v=0;v<h.length;v++){const b=h[v];if(b.selected){const T=this._getOptionValue(b.value);a.push(T)}}}this.value=a,e(a)}}_registerOption(e){const n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(const n of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){const n=function Fu(i){return i.split(":")[0]}(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,n){1&e&&t.NdJ("change",function(l){return n.onChange(l.target)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([Zu]),t.qOj]}),i})(),Fo=(()=>{class i{constructor(e,n,a){this._element=e,this._renderer=n,this._select=a,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(ya(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(ya(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(Oa,9))},i.\u0275dir=t.lG2({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Uu(i){return"number"==typeof i?i:parseFloat(i)}let ao=(()=>{class i{constructor(){this._validator=Vc}ngOnChanges(e){if(this.inputName in e){const n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Vc,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=t.lG2({type:i,features:[t.TTD]}),i})();const a_={provide:je,useExisting:(0,t.Gpc)(()=>Wc),multi:!0};let Wc=(()=>{class i extends ao{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=e=>Uu(e),this.createValidator=e=>function wp(i){return o=>{if(Wn(o.value)||Wn(i))return null;const e=parseFloat(o.value);return!isNaN(e)&&e>i?{max:{max:i,actual:o.value}}:null}}(e)}}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&t.uIk("max",n._enabled?n.max:null)},inputs:{max:"max"},features:[t._Bn([a_]),t.qOj]}),i})();const $M={provide:je,useExisting:(0,t.Gpc)(()=>Xc),multi:!0};let Xc=(()=>{class i extends ao{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>Uu(e),this.createValidator=e=>function xp(i){return o=>{if(Wn(o.value)||Wn(i))return null;const e=parseFloat(o.value);return!isNaN(e)&&e<i?{min:{min:i,actual:o.value}}:null}}(e)}}return i.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&t.uIk("min",n._enabled?n.min:null)},inputs:{min:"min"},features:[t._Bn([$M]),t.qOj]}),i})(),h_=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[e_]}),i})(),f_=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h_]}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var _=D(1188),j=D(554);const Zi=(0,D(3888).d)(i=>function(){i(this),this.name="EmptyError",this.message="no elements in sequence"});var FP=D(9635);function $r(i){return(0,Ee.e)((o,e)=>{let n=!1;o.subscribe((0,me.x)(e,a=>{n=!0,e.next(a)},()=>{n||e.next(i),e.complete()}))})}function uy(i=__){return(0,Ee.e)((o,e)=>{let n=!1;o.subscribe((0,me.x)(e,a=>{n=!0,e.next(a)},()=>n?e.complete():e.error(i())))})}function __(){return new Zi}function Fi(i,o){const e=arguments.length>=2;return n=>n.pipe(i?Ne((a,l)=>i(a,l,n)):$i.y,Fe(1),e?$r(o):uy(()=>new Zi))}function Yr(i,o){return(0,Fn.m)(o)?(0,Ke.z)(i,o,1):(0,Ke.z)(i,1)}function Tt(i){return(0,Ee.e)((o,e)=>{let l,n=null,a=!1;n=o.subscribe((0,me.x)(e,void 0,void 0,h=>{l=(0,Zn.Xf)(i(h,Tt(i)(o))),n?(n.unsubscribe(),n=null,l.subscribe(e)):a=!0})),a&&(n.unsubscribe(),n=null,l.subscribe(e))})}function dy(i,o,e,n,a){return(l,h)=>{let v=e,b=o,T=0;l.subscribe((0,me.x)(h,H=>{const Q=T++;b=v?i(b,H,Q):(v=!0,H),n&&h.next(b)},a&&(()=>{v&&h.next(b),h.complete()})))}}function m_(i,o){return(0,Ee.e)(dy(i,o,arguments.length>=2,!0))}function Vu(i){return i<=0?()=>Se.E:(0,Ee.e)((o,e)=>{let n=[];o.subscribe((0,me.x)(e,a=>{n.push(a),i<n.length&&n.shift()},()=>{for(const a of n)e.next(a);e.complete()},void 0,()=>{n=null}))})}function Ro(i,o){const e=arguments.length>=2;return n=>n.pipe(i?Ne((a,l)=>i(a,l,n)):$i.y,Vu(1),e?$r(o):uy(()=>new Zi))}function Kr(i){return(0,Ee.e)((o,e)=>{try{o.subscribe(e)}finally{e.add(i)}})}
/**
       * @license Angular v14.2.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wt="primary",_e=Symbol("RouteTitle");class RP{constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){const e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){const e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function Uo(i){return new RP(i)}function v_(i,o,e){const n=e.path.split("/");if(n.length>i.length||"full"===e.pathMatch&&(o.hasChildren()||n.length<i.length))return null;const a={};for(let l=0;l<n.length;l++){const h=n[l],v=i[l];if(h.startsWith(":"))a[h.substring(1)]=v;else if(h!==v.path)return null}return{consumed:i.slice(0,n.length),posParams:a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ei(i,o){const e=i?Object.keys(i):void 0,n=o?Object.keys(o):void 0;if(!e||!n||e.length!=n.length)return!1;let a;for(let l=0;l<e.length;l++)if(a=e[l],!Hu(i[a],o[a]))return!1;return!0}function Hu(i,o){if(Array.isArray(i)&&Array.isArray(o)){if(i.length!==o.length)return!1;const e=[...i].sort(),n=[...o].sort();return e.every((a,l)=>n[l]===a)}return i===o}function qu(i){return Array.prototype.concat.apply([],i)}function Ju(i){return i.length>0?i[i.length-1]:null}function rn(i,o){for(const e in i)i.hasOwnProperty(e)&&o(i[e],e)}function co(i){return(0,t.CqO)(i)?i:(0,t.QGY)(i)?(0,he.D)(Promise.resolve(i)):At(i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _y={exact:function Bu(i,o,e){if(!go(i.segments,o.segments)||!lo(i.segments,o.segments,e)||i.numberOfChildren!==o.numberOfChildren)return!1;for(const n in o.children)if(!i.children[n]||!Bu(i.children[n],o.children[n],e))return!1;return!0},subset:O_},C_={exact:function M_(i,o){return ei(i,o)},subset:function y_(i,o){return Object.keys(o).length<=Object.keys(i).length&&Object.keys(o).every(e=>Hu(i[e],o[e]))},ignored:()=>!0};function ba(i,o,e){return _y[e.paths](i.root,o.root,e.matrixParams)&&C_[e.queryParams](i.queryParams,o.queryParams)&&!("exact"===e.fragment&&i.fragment!==o.fragment)}function O_(i,o,e){return Wr(i,o,o.segments,e)}function Wr(i,o,e,n){if(i.segments.length>e.length){const a=i.segments.slice(0,e.length);return!(!go(a,e)||o.hasChildren()||!lo(a,e,n))}if(i.segments.length===e.length){if(!go(i.segments,e)||!lo(i.segments,e,n))return!1;for(const a in o.children)if(!i.children[a]||!O_(i.children[a],o.children[a],n))return!1;return!0}{const a=e.slice(0,i.segments.length),l=e.slice(i.segments.length);return!!(go(i.segments,a)&&lo(i.segments,a,n)&&i.children[Wt])&&Wr(i.children[Wt],o,l,n)}}function lo(i,o,e){return o.every((n,a)=>C_[e](i[a].parameters,n.parameters))}class Vo{constructor(o,e,n){this.root=o,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Uo(this.queryParams)),this._queryParamMap}toString(){return my.serialize(this)}}class te{constructor(o,e){this.segments=o,this.children=e,this.parent=null,rn(e,(n,a)=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return el(this)}}class Pa{constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=Uo(this.parameters)),this._parameterMap}toString(){return D_(this)}}function go(i,o){return i.length===o.length&&i.every((e,n)=>e.path===o[n].path)}let x_=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:function(){return new tl},providedIn:"root"}),i})();class tl{parse(o){const e=new by(o);return new Vo(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){const e=`/${nl(o.root,!0)}`,n=function xa(i){const o=Object.keys(i).map(e=>{const n=i[e];return Array.isArray(n)?n.map(a=>`${zu(e)}=${zu(a)}`).join("&"):`${zu(e)}=${zu(n)}`}).filter(e=>!!e);return o.length?`?${o.join("&")}`:""}(o.queryParams);return`${e}${n}${"string"==typeof o.fragment?`#${function jP(i){return encodeURI(i)}(o.fragment)}`:""}`}}const my=new tl;function el(i){return i.segments.map(o=>D_(o)).join("/")}function nl(i,o){if(!i.hasChildren())return el(i);if(o){const e=i.children[Wt]?nl(i.children[Wt],!1):"",n=[];return rn(i.children,(a,l)=>{l!==Wt&&n.push(`${l}:${nl(a,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}{const e=function P_(i,o){let e=[];return rn(i.children,(n,a)=>{a===Wt&&(e=e.concat(o(n,a)))}),rn(i.children,(n,a)=>{a!==Wt&&(e=e.concat(o(n,a)))}),e}(i,(n,a)=>a===Wt?[nl(i.children[Wt],!1)]:[`${a}:${nl(n,!1)}`]);return 1===Object.keys(i.children).length&&null!=i.children[Wt]?`${el(i)}/${e[0]}`:`${el(i)}/(${e.join("//")})`}}function vy(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zu(i){return vy(i).replace(/%3B/gi,";")}function il(i){return vy(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ho(i){return decodeURIComponent(i)}function w_(i){return Ho(i.replace(/\+/g,"%20"))}function D_(i){return`${il(i.path)}${function k_(i){return Object.keys(i).map(o=>`;${il(o)}=${il(i[o])}`).join("")}(i.parameters)}`}const Cy=/^[^\/()?;=#]+/;function ol(i){const o=i.match(Cy);return o?o[0]:""}const My=/^[^=?&#]+/,Oy=/^[^&#]+/;class by{constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){const o={};if(this.consumeOptional("?"))do{this.parseQueryParam(o)}while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(o.length>0||Object.keys(e).length>0)&&(n[Wt]=new te(o,e)),n}parseSegment(){const o=ol(this.remaining);if(""===o&&this.peekStartsWith(";"))throw new t.vHH(4009,!1);return this.capture(o),new Pa(Ho(o),this.parseMatrixParams())}parseMatrixParams(){const o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){const e=ol(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const a=ol(this.remaining);a&&(n=a,this.capture(n))}o[Ho(e)]=Ho(n)}parseQueryParam(o){const e=function yy(i){const o=i.match(My);return o?o[0]:""}(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const h=function A_(i){const o=i.match(Oy);return o?o[0]:""}(this.remaining);h&&(n=h,this.capture(n))}const a=w_(e),l=w_(n);if(o.hasOwnProperty(a)){let h=o[a];Array.isArray(h)||(h=[h],o[a]=h),h.push(l)}else o[a]=l}parseParens(o){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=ol(this.remaining),a=this.remaining[n.length];if("/"!==a&&")"!==a&&";"!==a)throw new t.vHH(4010,!1);let l;n.indexOf(":")>-1?(l=n.slice(0,n.indexOf(":")),this.capture(l),this.capture(":")):o&&(l=Wt);const h=this.parseChildren();e[l]=1===Object.keys(h).length?h[Wt]:new te([],h),this.consumeOptional("//")}return e}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return!!this.peekStartsWith(o)&&(this.remaining=this.remaining.substring(o.length),!0)}capture(o){if(!this.consumeOptional(o))throw new t.vHH(4011,!1)}}function Qu(i){return i.segments.length>0?new te([],{[Wt]:i}):i}function uo(i){const o={};for(const n of Object.keys(i.children)){const l=uo(i.children[n]);(l.segments.length>0||l.hasChildren())&&(o[n]=l)}return function Py(i){if(1===i.numberOfChildren&&i.children[Wt]){const o=i.children[Wt];return new te(i.segments.concat(o.segments),o.children)}return i}(new te(i.segments,o))}function ho(i){return i instanceof Vo}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dy(i,o,e,n,a){if(0===e.length)return Jo(o.root,o.root,o.root,n,a);const l=function S_(i){if("string"==typeof i[0]&&1===i.length&&"/"===i[0])return new E_(!0,0,i);let o=0,e=!1;const n=i.reduce((a,l,h)=>{if("object"==typeof l&&null!=l){if(l.outlets){const v={};return rn(l.outlets,(b,T)=>{v[T]="string"==typeof b?b.split("/"):b}),[...a,{outlets:v}]}if(l.segmentPath)return[...a,l.segmentPath]}return"string"!=typeof l?[...a,l]:0===h?(l.split("/").forEach((v,b)=>{0==b&&"."===v||(0==b&&""===v?e=!0:".."===v?o++:""!=v&&a.push(v))}),a):[...a,l]},[]);return new E_(e,o,n)}(e);return l.toRoot()?Jo(o.root,o.root,new te([],{}),n,a):function h(b){const T=function ky(i,o,e,n){if(i.isAbsolute)return new Xr(o.root,!0,0);if(-1===n)return new Xr(e,e===o.root,0);return function Ku(i,o,e){let n=i,a=o,l=e;for(;l>a;){if(l-=a,n=n.parent,!n)throw new t.vHH(4005,!1);a=n.segments.length}return new Xr(n,!1,a-l)}(e,n+(qo(i.commands[0])?0:1),i.numberOfDoubleDots)}(l,o,i.snapshot?._urlSegment,b),H=T.processChildren?Da(T.segmentGroup,T.index,l.commands):Wu(T.segmentGroup,T.index,l.commands);return Jo(o.root,T.segmentGroup,H,n,a)}(i.snapshot?._lastPathIndex)}function qo(i){return"object"==typeof i&&null!=i&&!i.outlets&&!i.segmentPath}function wa(i){return"object"==typeof i&&null!=i&&i.outlets}function Jo(i,o,e,n,a){let h,l={};n&&rn(n,(b,T)=>{l[T]=Array.isArray(b)?b.map(H=>`${H}`):`${b}`}),h=i===o?e:$u(i,o,e);const v=Qu(uo(h));return new Vo(v,l,a)}function $u(i,o,e){const n={};return rn(i.children,(a,l)=>{n[l]=a===o?e:$u(a,o,e)}),new te(i.segments,n)}class E_{constructor(o,e,n){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=n,o&&n.length>0&&qo(n[0]))throw new t.vHH(4003,!1);const a=n.find(wa);if(a&&a!==Ju(n))throw new t.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Xr{constructor(o,e,n){this.segmentGroup=o,this.processChildren=e,this.index=n}}function Wu(i,o,e){if(i||(i=new te([],{})),0===i.segments.length&&i.hasChildren())return Da(i,o,e);const n=function Ty(i,o,e){let n=0,a=o;const l={match:!1,pathIndex:0,commandIndex:0};for(;a<i.segments.length;){if(n>=e.length)return l;const h=i.segments[a],v=e[n];if(wa(v))break;const b=`${v}`,T=n<e.length-1?e[n+1]:null;if(a>0&&void 0===b)break;if(b&&T&&"object"==typeof T&&void 0===T.outlets){if(!L_(b,T,h))return l;n+=2}else{if(!L_(b,{},h))return l;n++}a++}return{match:!0,pathIndex:a,commandIndex:n}}(i,o,e),a=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){const l=new te(i.segments.slice(0,n.pathIndex),{});return l.children[Wt]=new te(i.segments.slice(n.pathIndex),i.children),Da(l,0,a)}return n.match&&0===a.length?new te(i.segments,{}):n.match&&!i.hasChildren()?Xu(i,o,e):n.match?Da(i,0,a):Xu(i,o,e)}function Da(i,o,e){if(0===e.length)return new te(i.segments,{});{const n=function Ay(i){return wa(i[0])?i[0].outlets:{[Wt]:i}}(e),a={};return rn(n,(l,h)=>{"string"==typeof l&&(l=[l]),null!==l&&(a[h]=Wu(i.children[h],o,l))}),rn(i.children,(l,h)=>{void 0===n[h]&&(a[h]=l)}),new te(i.segments,a)}}function Xu(i,o,e){const n=i.segments.slice(0,o);let a=0;for(;a<e.length;){const l=e[a];if(wa(l)){const b=Ey(l.outlets);return new te(n,b)}if(0===a&&qo(e[0])){n.push(new Pa(i.segments[o].path,I_(e[0]))),a++;continue}const h=wa(l)?l.outlets[Wt]:`${l}`,v=a<e.length-1?e[a+1]:null;h&&v&&qo(v)?(n.push(new Pa(h,I_(v))),a+=2):(n.push(new Pa(h,{})),a++)}return new te(n,{})}function Ey(i){const o={};return rn(i,(e,n)=>{"string"==typeof e&&(e=[e]),null!==e&&(o[n]=Xu(new te([],{}),0,e))}),o}function I_(i){const o={};return rn(i,(e,n)=>o[n]=`${e}`),o}function L_(i,o,e){return i==e.path&&ei(o,e.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pi{constructor(o,e){this.id=o,this.url=e}}class rl extends pi{constructor(o,e,n="imperative",a=null){super(o,e),this.type=0,this.navigationTrigger=n,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Bo extends pi{constructor(o,e,n){super(o,e),this.urlAfterRedirects=n,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class sl extends pi{constructor(o,e,n,a){super(o,e),this.reason=n,this.code=a,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class td extends pi{constructor(o,e,n,a){super(o,e),this.error=n,this.target=a,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Sy extends pi{constructor(o,e,n,a){super(o,e),this.urlAfterRedirects=n,this.state=a,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Iy extends pi{constructor(o,e,n,a){super(o,e),this.urlAfterRedirects=n,this.state=a,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ly extends pi{constructor(o,e,n,a,l){super(o,e),this.urlAfterRedirects=n,this.state=a,this.shouldActivate=l,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class ed extends pi{constructor(o,e,n,a){super(o,e),this.urlAfterRedirects=n,this.state=a,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class nd extends pi{constructor(o,e,n,a){super(o,e),this.urlAfterRedirects=n,this.state=a,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class N_{constructor(o){this.route=o,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class id{constructor(o){this.route=o,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ny{constructor(o){this.snapshot=o,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Zy{constructor(o){this.snapshot=o,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class od{constructor(o){this.snapshot=o,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Fy{constructor(o){this.snapshot=o,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class rd{constructor(o,e,n){this.routerEvent=o,this.position=e,this.anchor=n,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class sd{constructor(o){this._root=o}get root(){return this._root.value}parent(o){const e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){const e=ad(o,this._root);return e?e.children.map(n=>n.value):[]}firstChild(o){const e=ad(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){const e=Z_(o,this._root);return e.length<2?[]:e[e.length-2].children.map(a=>a.value).filter(a=>a!==o)}pathFromRoot(o){return Z_(o,this._root).map(e=>e.value)}}function ad(i,o){if(i===o.value)return o;for(const e of o.children){const n=ad(i,e);if(n)return n}return null}function Z_(i,o){if(i===o.value)return[o];for(const e of o.children){const n=Z_(i,e);if(n.length)return n.unshift(o),n}return[]}class _i{constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}}function fo(i){const o={};return i&&i.children.forEach(e=>o[e.value.outlet]=e),o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class F_ extends sd{constructor(o,e){super(o),this.snapshot=e,ll(this,o)}toString(){return this.snapshot.toString()}}function al(i,o){const e=function Ry(i,o){const h=new ka([],{},{},"",{},Wt,o,null,i.root,-1,{});return new cd("",new _i(h,[]))}(i,o),n=new an([new Pa("",{})]),a=new an({}),l=new an({}),h=new an({}),v=new an(""),b=new po(n,a,h,v,l,Wt,o,e.root);return b.snapshot=e.root,new F_(new _i(b,[]),e)}class po{constructor(o,e,n,a,l,h,v,b){this.url=o,this.params=e,this.queryParams=n,this.fragment=a,this.data=l,this.outlet=h,this.component=v,this.title=this.data?.pipe((0,Kt.U)(T=>T[_e]))??At(void 0),this._futureSnapshot=b}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Kt.U)(o=>Uo(o)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Kt.U)(o=>Uo(o)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function cl(i,o="emptyOnly"){const e=i.pathFromRoot;let n=0;if("always"!==o)for(n=e.length-1;n>=1;){const a=e[n],l=e[n-1];if(a.routeConfig&&""===a.routeConfig.path)n--;else{if(l.component)break;n--}}return function R_(i){return i.reduce((o,e)=>({params:{...o.params,...e.params},data:{...o.data,...e.data},resolve:{...e.data,...o.resolve,...e.routeConfig?.data,...e._resolvedData}}),{params:{},data:{},resolve:{}})}(e.slice(n))}class ka{constructor(o,e,n,a,l,h,v,b,T,H,Q,_t){this.url=o,this.params=e,this.queryParams=n,this.fragment=a,this.data=l,this.outlet=h,this.component=v,this.title=this.data?.[_e],this.routeConfig=b,this._urlSegment=T,this._lastPathIndex=H,this._correctedLastPathIndex=_t??H,this._resolve=Q}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Uo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Uo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(n=>n.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class cd extends sd{constructor(o,e){super(e),this.url=o,ll(this,e)}toString(){return U_(this._root)}}function ll(i,o){o.value._routerState=i,o.children.forEach(e=>ll(i,e))}function U_(i){const o=i.children.length>0?` { ${i.children.map(U_).join(", ")} } `:"";return`${i.value}${o}`}function ld(i){if(i.snapshot){const o=i.snapshot,e=i._futureSnapshot;i.snapshot=e,ei(o.queryParams,e.queryParams)||i.queryParams.next(e.queryParams),o.fragment!==e.fragment&&i.fragment.next(e.fragment),ei(o.params,e.params)||i.params.next(e.params),function fy(i,o){if(i.length!==o.length)return!1;for(let e=0;e<i.length;++e)if(!ei(i[e],o[e]))return!1;return!0}(o.url,e.url)||i.url.next(e.url),ei(o.data,e.data)||i.data.next(e.data)}else i.snapshot=i._futureSnapshot,i.data.next(i._futureSnapshot.data)}function gd(i,o){const e=ei(i.params,o.params)&&function b_(i,o){return go(i,o)&&i.every((e,n)=>ei(e.parameters,o[n].parameters))}(i.url,o.url);return e&&!(!i.parent!=!o.parent)&&(!i.parent||gd(i.parent,o.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function es(i,o,e){if(e&&i.shouldReuseRoute(o.value,e.value.snapshot)){const n=e.value;n._futureSnapshot=o.value;const a=function VP(i,o,e){return o.children.map(n=>{for(const a of e.children)if(i.shouldReuseRoute(n.value,a.value.snapshot))return es(i,n,a);return es(i,n)})}(i,o,e);return new _i(n,a)}{if(i.shouldAttach(o.value)){const l=i.retrieve(o.value);if(null!==l){const h=l.route;return h.value._futureSnapshot=o.value,h.children=o.children.map(v=>es(i,v)),h}}const n=function j_(i){return new po(new an(i.url),new an(i.params),new an(i.queryParams),new an(i.fragment),new an(i.data),i.outlet,i.component,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o.value),a=o.children.map(l=>es(i,l));return new _i(n,a)}}const ud="ngNavigationCancelingError";function V_(i,o){const{redirectTo:e,navigationBehaviorOptions:n}=ho(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,a=jy(!1,0,o);return a.url=e,a.navigationBehaviorOptions=n,a}function jy(i,o,e){const n=new Error("NavigationCancelingError: "+(i||""));return n[ud]=!0,n.cancellationCode=o,e&&(n.url=e),n}function Vy(i){return H_(i)&&ho(i.url)}function H_(i){return i&&i[ud]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hy{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new ns,this.attachRef=null}}let ns=(()=>{class i{constructor(){this.contexts=new Map}onChildOutletCreated(e,n){const a=this.getOrCreateContext(e);a.outlet=n,this.contexts.set(e,a)}onChildOutletDestroyed(e){const n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Hy,this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Aa=!1;let gl=(()=>{class i{constructor(e,n,a,l,h){this.parentContexts=e,this.location=n,this.changeDetector=l,this.environmentInjector=h,this.activated=null,this._activatedRoute=null,this.activateEvents=new t.vpe,this.deactivateEvents=new t.vpe,this.attachEvents=new t.vpe,this.detachEvents=new t.vpe,this.name=a||Wt,e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new t.vHH(4012,Aa);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new t.vHH(4012,Aa);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new t.vHH(4012,Aa);this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new t.vHH(4013,Aa);this._activatedRoute=e;const a=this.location,h=e._futureSnapshot.component,v=this.parentContexts.getOrCreateContext(this.name).children,b=new q_(e,v,a.injector);if(n&&function J_(i){return!!i.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)){const T=n.resolveComponentFactory(h);this.activated=a.createComponent(T,a.length,b)}else this.activated=a.createComponent(h,{index:a.length,injector:b,environmentInjector:n??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(ns),t.Y36(t.s_b),t.$8M("name"),t.Y36(t.sBO),t.Y36(t.lqb))},i.\u0275dir=t.lG2({type:i,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),i})();class q_{constructor(o,e,n){this.route=o,this.childContexts=e,this.parent=n}get(o,e){return o===po?this.route:o===ns?this.childContexts:this.parent.get(o,e)}}let ul=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[gl],encapsulation:2}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dd(i,o){return i.providers&&!i._injector&&(i._injector=(0,t.MMx)(i.providers,o,`Route: ${i.path}`)),i._injector??o}function fl(i){const o=i.children&&i.children.map(fl),e=o?{...i,children:o}:{...i};return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==Wt&&(e.component=ul),e}function An(i){return i.outlet||Wt}function G_(i,o){const e=i.filter(n=>An(n)===o);return e.push(...i.filter(n=>An(n)!==o)),e}function pl(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let o=i.parent;o;o=o.parent){const e=o.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Y_{constructor(o,e,n,a){this.routeReuseStrategy=o,this.futureState=e,this.currState=n,this.forwardEvent=a}activate(o){const e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,o),ld(this.futureState.root),this.activateChildRoutes(e,n,o)}deactivateChildRoutes(o,e,n){const a=fo(e);o.children.forEach(l=>{const h=l.value.outlet;this.deactivateRoutes(l,a[h],n),delete a[h]}),rn(a,(l,h)=>{this.deactivateRouteAndItsChildren(l,n)})}deactivateRoutes(o,e,n){const a=o.value,l=e?e.value:null;if(a===l)if(a.component){const h=n.getContext(a.outlet);h&&this.deactivateChildRoutes(o,e,h.children)}else this.deactivateChildRoutes(o,e,n);else l&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){const n=e.getContext(o.value.outlet),a=n&&o.value.component?n.children:e,l=fo(o);for(const h of Object.keys(l))this.deactivateRouteAndItsChildren(l[h],a);if(n&&n.outlet){const h=n.outlet.detach(),v=n.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:h,route:o,contexts:v})}}deactivateRouteAndOutlet(o,e){const n=e.getContext(o.value.outlet),a=n&&o.value.component?n.children:e,l=fo(o);for(const h of Object.keys(l))this.deactivateRouteAndItsChildren(l[h],a);n&&n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated(),n.attachRef=null,n.resolver=null,n.route=null)}activateChildRoutes(o,e,n){const a=fo(e);o.children.forEach(l=>{this.activateRoutes(l,a[l.value.outlet],n),this.forwardEvent(new Fy(l.value.snapshot))}),o.children.length&&this.forwardEvent(new Zy(o.value.snapshot))}activateRoutes(o,e,n){const a=o.value,l=e?e.value:null;if(ld(a),a===l)if(a.component){const h=n.getOrCreateContext(a.outlet);this.activateChildRoutes(o,e,h.children)}else this.activateChildRoutes(o,e,n);else if(a.component){const h=n.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){const v=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),h.children.onOutletReAttached(v.contexts),h.attachRef=v.componentRef,h.route=v.route.value,h.outlet&&h.outlet.attach(v.componentRef,v.route.value),ld(v.route.value),this.activateChildRoutes(o,null,h.children)}else{const v=pl(a.snapshot),b=v?.get(t._Vd)??null;h.attachRef=null,h.route=a,h.resolver=b,h.injector=v,h.outlet&&h.outlet.activateWith(a,h.injector),this.activateChildRoutes(o,null,h.children)}}else this.activateChildRoutes(o,null,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class hd{constructor(o){this.path=o,this.route=this.path[this.path.length-1]}}class _l{constructor(o,e){this.component=o,this.route=e}}function Jy(i,o,e){const n=i._root;return zo(n,o?o._root:null,e,[n.value])}function is(i,o){const e=Symbol(),n=o.get(i,e);return n===e?"function"!=typeof i||(0,t.Z0I)(i)?o.get(i):i:n}function zo(i,o,e,n,a={canDeactivateChecks:[],canActivateChecks:[]}){const l=fo(o);return i.children.forEach(h=>{(function mi(i,o,e,n,a={canDeactivateChecks:[],canActivateChecks:[]}){const l=i.value,h=o?o.value:null,v=e?e.getContext(i.value.outlet):null;if(h&&l.routeConfig===h.routeConfig){const b=function By(i,o,e){if("function"==typeof e)return e(i,o);switch(e){case"pathParamsChange":return!go(i.url,o.url);case"pathParamsOrQueryParamsChange":return!go(i.url,o.url)||!ei(i.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!gd(i,o)||!ei(i.queryParams,o.queryParams);default:return!gd(i,o)}}(h,l,l.routeConfig.runGuardsAndResolvers);b?a.canActivateChecks.push(new hd(n)):(l.data=h.data,l._resolvedData=h._resolvedData),zo(i,o,l.component?v?v.children:null:e,n,a),b&&v&&v.outlet&&v.outlet.isActivated&&a.canDeactivateChecks.push(new _l(v.outlet.component,h))}else h&&Qo(o,v,a),a.canActivateChecks.push(new hd(n)),zo(i,null,l.component?v?v.children:null:e,n,a)})(h,l[h.value.outlet],e,n.concat([h.value]),a),delete l[h.value.outlet]}),rn(l,(h,v)=>Qo(h,e.getContext(v),a)),a}function Qo(i,o,e){const n=fo(i),a=i.value;rn(n,(l,h)=>{Qo(l,a.component?o?o.children.getContext(h):null:o,e)}),e.canDeactivateChecks.push(new _l(a.component&&o&&o.outlet&&o.outlet.isActivated?o.outlet.component:null,a))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ri(i){return"function"==typeof i}function Cl(i){return i instanceof Zi||"EmptyError"===i?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const os=Symbol("INITIAL_VALUE");function Go(){return _n(i=>kg(i.map(o=>o.pipe(Fe(1),Eo(os)))).pipe((0,Kt.U)(o=>{for(const e of o)if(!0!==e){if(e===os)return os;if(!1===e||e instanceof Vo)return e}return!0}),Ne(o=>o!==os),Fe(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function X_(i){return(0,FP.z)(We(o=>{if(ho(o))throw V_(0,o)}),(0,Kt.U)(o=>!0===o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const vd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Cd(i,o,e,n,a){const l=Ea(i,o,e);return l.matched?function Xy(i,o,e,n){const a=o.canMatch;return a&&0!==a.length?At(a.map(h=>{const v=is(h,i);return co(function $y(i){return i&&Ri(i.canMatch)}(v)?v.canMatch(o,e):i.runInContext(()=>v(o,e)))})).pipe(Go(),X_()):At(!0)}(n=dd(o,n),o,e).pipe((0,Kt.U)(h=>!0===h?l:{...vd})):At(l)}function Ea(i,o,e){if(""===o.path)return"full"===o.pathMatch&&(i.hasChildren()||e.length>0)?{...vd}:{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};const a=(o.matcher||v_)(e,i,o);if(!a)return{...vd};const l={};rn(a.posParams,(v,b)=>{l[b]=v.path});const h=a.consumed.length>0?{...l,...a.consumed[a.consumed.length-1].parameters}:l;return{matched:!0,consumedSegments:a.consumed,remainingSegments:e.slice(a.consumed.length),parameters:h,positionalParamSegments:a.posParams??{}}}function Sa(i,o,e,n,a="corrected"){if(e.length>0&&function nm(i,o,e){return e.some(n=>Ia(i,o,n)&&An(n)!==Wt)}(i,e,n)){const h=new te(o,function em(i,o,e,n){const a={};a[Wt]=n,n._sourceSegment=i,n._segmentIndexShift=o.length;for(const l of e)if(""===l.path&&An(l)!==Wt){const h=new te([],{});h._sourceSegment=i,h._segmentIndexShift=o.length,a[An(l)]=h}return a}(i,o,n,new te(e,i.children)));return h._sourceSegment=i,h._segmentIndexShift=o.length,{segmentGroup:h,slicedSegments:[]}}if(0===e.length&&function t1(i,o,e){return e.some(n=>Ia(i,o,n))}(i,e,n)){const h=new te(i.segments,function tm(i,o,e,n,a,l){const h={};for(const v of n)if(Ia(i,e,v)&&!a[An(v)]){const b=new te([],{});b._sourceSegment=i,b._segmentIndexShift="legacy"===l?i.segments.length:o.length,h[An(v)]=b}return{...a,...h}}(i,o,e,n,i.children,a));return h._sourceSegment=i,h._segmentIndexShift=o.length,{segmentGroup:h,slicedSegments:e}}const l=new te(i.segments,i.children);return l._sourceSegment=i,l._segmentIndexShift=o.length,{segmentGroup:l,slicedSegments:e}}function Ia(i,o,e){return(!(i.hasChildren()||o.length>0)||"full"!==e.pathMatch)&&""===e.path}function Md(i,o,e,n){return!!(An(i)===n||n!==Wt&&Ia(o,e,i))&&("**"===i.path||Ea(o,i,e).matched)}function im(i,o,e){return 0===o.length&&!i.children[e]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const La=!1;class Ml{constructor(o){this.segmentGroup=o||null}}class ln{constructor(o){this.urlTree=o}}function vi(i){return eo(new Ml(i))}function om(i){return eo(new ln(i))}class rm{constructor(o,e,n,a,l){this.injector=o,this.configLoader=e,this.urlSerializer=n,this.urlTree=a,this.config=l,this.allowRedirects=!0}apply(){const o=Sa(this.urlTree.root,[],[],this.config).segmentGroup,e=new te(o.segments,o.children);return this.expandSegmentGroup(this.injector,this.config,e,Wt).pipe((0,Kt.U)(l=>this.createUrlTree(uo(l),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Tt(l=>{if(l instanceof ln)return this.allowRedirects=!1,this.match(l.urlTree);throw l instanceof Ml?this.noMatchError(l):l}))}match(o){return this.expandSegmentGroup(this.injector,this.config,o.root,Wt).pipe((0,Kt.U)(a=>this.createUrlTree(uo(a),o.queryParams,o.fragment))).pipe(Tt(a=>{throw a instanceof Ml?this.noMatchError(a):a}))}noMatchError(o){return new t.vHH(4002,La)}createUrlTree(o,e,n){const a=Qu(o);return new Vo(a,e,n)}expandSegmentGroup(o,e,n,a){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(o,e,n).pipe((0,Kt.U)(l=>new te([],l))):this.expandSegment(o,n,e,n.segments,a,!0)}expandChildren(o,e,n){const a=[];for(const l of Object.keys(n.children))"primary"===l?a.unshift(l):a.push(l);return(0,he.D)(a).pipe(Yr(l=>{const h=n.children[l],v=G_(e,l);return this.expandSegmentGroup(o,v,h,l).pipe((0,Kt.U)(b=>({segment:b,outlet:l})))}),m_((l,h)=>(l[h.outlet]=h.segment,l),{}),Ro())}expandSegment(o,e,n,a,l,h){return(0,he.D)(n).pipe(Yr(v=>this.expandSegmentAgainstRoute(o,e,n,v,a,l,h).pipe(Tt(T=>{if(T instanceof Ml)return At(null);throw T}))),Fi(v=>!!v),Tt((v,b)=>{if(Cl(v))return im(e,a,l)?At(new te([],{})):vi(e);throw v}))}expandSegmentAgainstRoute(o,e,n,a,l,h,v){return Md(a,e,l,h)?void 0===a.redirectTo?this.matchSegmentAgainstRoute(o,e,a,l,h):v&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(o,e,n,a,l,h):vi(e):vi(e)}expandSegmentAgainstRouteUsingRedirect(o,e,n,a,l,h){return"**"===a.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(o,n,a,h):this.expandRegularSegmentAgainstRouteUsingRedirect(o,e,n,a,l,h)}expandWildCardWithParamsAgainstRouteUsingRedirect(o,e,n,a){const l=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?om(l):this.lineralizeSegments(n,l).pipe((0,Ke.z)(h=>{const v=new te(h,{});return this.expandSegment(o,v,e,h,a,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(o,e,n,a,l,h){const{matched:v,consumedSegments:b,remainingSegments:T,positionalParamSegments:H}=Ea(e,a,l);if(!v)return vi(e);const Q=this.applyRedirectCommands(b,a.redirectTo,H);return a.redirectTo.startsWith("/")?om(Q):this.lineralizeSegments(a,Q).pipe((0,Ke.z)(_t=>this.expandSegment(o,e,n,_t.concat(T),h,!1)))}matchSegmentAgainstRoute(o,e,n,a,l){return"**"===n.path?(o=dd(n,o),n.loadChildren?(n._loadedRoutes?At({routes:n._loadedRoutes,injector:n._loadedInjector}):this.configLoader.loadChildren(o,n)).pipe((0,Kt.U)(v=>(n._loadedRoutes=v.routes,n._loadedInjector=v.injector,new te(a,{})))):At(new te(a,{}))):Cd(e,n,a,o).pipe(_n(({matched:h,consumedSegments:v,remainingSegments:b})=>h?this.getChildConfig(o=n._injector??o,n,a).pipe((0,Ke.z)(H=>{const Q=H.injector??o,_t=H.routes,{segmentGroup:xt,slicedSegments:jt}=Sa(e,v,b,_t),ae=new te(xt.segments,xt.children);if(0===jt.length&&ae.hasChildren())return this.expandChildren(Q,_t,ae).pipe((0,Kt.U)(yo=>new te(v,yo)));if(0===_t.length&&0===jt.length)return At(new te(v,{}));const ee=An(n)===l;return this.expandSegment(Q,ae,_t,jt,ee?Wt:l,!0).pipe((0,Kt.U)(yn=>new te(v.concat(yn.segments),yn.children)))})):vi(e)))}getChildConfig(o,e,n){return e.children?At({routes:e.children,injector:o}):e.loadChildren?void 0!==e._loadedRoutes?At({routes:e._loadedRoutes,injector:e._loadedInjector}):function Wy(i,o,e,n){const a=o.canLoad;return void 0===a||0===a.length?At(!0):At(a.map(h=>{const v=is(h,i);return co(function Qy(i){return i&&Ri(i.canLoad)}(v)?v.canLoad(o,e):i.runInContext(()=>v(o,e)))})).pipe(Go(),X_())}(o,e,n).pipe((0,Ke.z)(a=>a?this.configLoader.loadChildren(o,e).pipe(We(l=>{e._loadedRoutes=l.routes,e._loadedInjector=l.injector})):function zP(i){return eo(jy(La,3))}())):At({routes:[],injector:o})}lineralizeSegments(o,e){let n=[],a=e.root;for(;;){if(n=n.concat(a.segments),0===a.numberOfChildren)return At(n);if(a.numberOfChildren>1||!a.children[Wt])return eo(new t.vHH(4e3,La));a=a.children[Wt]}}applyRedirectCommands(o,e,n){return this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),o,n)}applyRedirectCreateUrlTree(o,e,n,a){const l=this.createSegmentGroup(o,e.root,n,a);return new Vo(l,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){const n={};return rn(o,(a,l)=>{if("string"==typeof a&&a.startsWith(":")){const v=a.substring(1);n[l]=e[v]}else n[l]=a}),n}createSegmentGroup(o,e,n,a){const l=this.createSegments(o,e.segments,n,a);let h={};return rn(e.children,(v,b)=>{h[b]=this.createSegmentGroup(o,v,n,a)}),new te(l,h)}createSegments(o,e,n,a){return e.map(l=>l.path.startsWith(":")?this.findPosParam(o,l,a):this.findOrReturn(l,n))}findPosParam(o,e,n){const a=n[e.path.substring(1)];if(!a)throw new t.vHH(4001,La);return a}findOrReturn(o,e){let n=0;for(const a of e){if(a.path===o.path)return e.splice(n),a;n++}return o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class n1{}class am{constructor(o,e,n,a,l,h,v,b){this.injector=o,this.rootComponentType=e,this.config=n,this.urlTree=a,this.url=l,this.paramsInheritanceStrategy=h,this.relativeLinkResolution=v,this.urlSerializer=b}recognize(){const o=Sa(this.urlTree.root,[],[],this.config.filter(e=>void 0===e.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,o,Wt).pipe((0,Kt.U)(e=>{if(null===e)return null;const n=new ka([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Wt,this.rootComponentType,null,this.urlTree.root,-1,{}),a=new _i(n,e),l=new cd(this.url,a);return this.inheritParamsAndData(l._root),l}))}inheritParamsAndData(o){const e=o.value,n=cl(e,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),o.children.forEach(a=>this.inheritParamsAndData(a))}processSegmentGroup(o,e,n,a){return 0===n.segments.length&&n.hasChildren()?this.processChildren(o,e,n):this.processSegment(o,e,n,n.segments,a)}processChildren(o,e,n){return(0,he.D)(Object.keys(n.children)).pipe(Yr(a=>{const l=n.children[a],h=G_(e,a);return this.processSegmentGroup(o,h,l,a)}),m_((a,l)=>a&&l?(a.push(...l),a):null),function hy(i,o=!1){return(0,Ee.e)((e,n)=>{let a=0;e.subscribe((0,me.x)(n,l=>{const h=i(l,a++);(h||o)&&n.next(l),!h&&n.complete()}))})}(a=>null!==a),$r(null),Ro(),(0,Kt.U)(a=>{if(null===a)return null;const l=yl(a);return function r1(i){i.sort((o,e)=>o.value.outlet===Wt?-1:e.value.outlet===Wt?1:o.value.outlet.localeCompare(e.value.outlet))}(l),l}))}processSegment(o,e,n,a,l){return(0,he.D)(e).pipe(Yr(h=>this.processSegmentAgainstRoute(h._injector??o,h,n,a,l)),Fi(h=>!!h),Tt(h=>{if(Cl(h))return im(n,a,l)?At([]):At(null);throw h}))}processSegmentAgainstRoute(o,e,n,a,l){if(e.redirectTo||!Md(e,n,a,l))return At(null);let h;if("**"===e.path){const v=a.length>0?Ju(a).parameters:{},b=Na(n)+a.length;h=At({snapshot:new ka(a,v,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,c1(e),An(e),e.component??e._loadedComponent??null,e,Od(n),b,bd(e),b),consumedSegments:[],remainingSegments:[]})}else h=Cd(n,e,a,o).pipe((0,Kt.U)(({matched:v,consumedSegments:b,remainingSegments:T,parameters:H})=>{if(!v)return null;const Q=Na(n)+b.length;return{snapshot:new ka(b,H,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,c1(e),An(e),e.component??e._loadedComponent??null,e,Od(n),Q,bd(e),Q),consumedSegments:b,remainingSegments:T}}));return h.pipe(_n(v=>{if(null===v)return At(null);const{snapshot:b,consumedSegments:T,remainingSegments:H}=v;o=e._injector??o;const Q=e._loadedInjector??o,_t=function s1(i){return i.children?i.children:i.loadChildren?i._loadedRoutes:[]}(e),{segmentGroup:xt,slicedSegments:jt}=Sa(n,T,H,_t.filter(ee=>void 0===ee.redirectTo),this.relativeLinkResolution);if(0===jt.length&&xt.hasChildren())return this.processChildren(Q,_t,xt).pipe((0,Kt.U)(ee=>null===ee?null:[new _i(b,ee)]));if(0===_t.length&&0===jt.length)return At([new _i(b,[])]);const ae=An(e)===l;return this.processSegment(Q,_t,xt,jt,ae?Wt:l).pipe((0,Kt.U)(ee=>null===ee?null:[new _i(b,ee)]))}))}}function a1(i){const o=i.value.routeConfig;return o&&""===o.path&&void 0===o.redirectTo}function yl(i){const o=[],e=new Set;for(const n of i){if(!a1(n)){o.push(n);continue}const a=o.find(l=>n.value.routeConfig===l.value.routeConfig);void 0!==a?(a.children.push(...n.children),e.add(a)):o.push(n)}for(const n of e){const a=yl(n.children);o.push(new _i(n.value,a))}return o.filter(n=>!e.has(n))}function Od(i){let o=i;for(;o._sourceSegment;)o=o._sourceSegment;return o}function Na(i){let o=i,e=o._segmentIndexShift??0;for(;o._sourceSegment;)o=o._sourceSegment,e+=o._segmentIndexShift??0;return e-1}function c1(i){return i.data||{}}function bd(i){return i.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function u1(i){return"string"==typeof i.title||null===i.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xd(i){return _n(o=>{const e=i(o);return e?(0,he.D)(e).pipe((0,Kt.U)(()=>o)):At(o)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let d1=(()=>{class i{buildTitle(e){let n,a=e.root;for(;void 0!==a;)n=this.getResolvedTitleForRoute(a)??n,a=a.children.find(l=>l.outlet===Wt);return n}getResolvedTitleForRoute(e){return e.data[_e]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:function(){return(0,t.f3M)(um)},providedIn:"root"}),i})(),um=(()=>{class i extends d1{constructor(e){super(),this.title=e}updateTitle(e){const n=this.buildTitle(e);void 0!==n&&this.title.setTitle(n)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(rg))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class h1{}class hm extends class dm{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Za=new t.OlP("",{providedIn:"root",factory:()=>({})}),Dd=new t.OlP("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kd=(()=>{class i{constructor(e,n){this.injector=e,this.compiler=n,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return At(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);const n=co(e.loadComponent()).pipe(We(l=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=l}),Kr(()=>{this.componentLoaders.delete(e)})),a=new su(n,()=>new Gt.x).pipe(ru());return this.componentLoaders.set(e,a),a}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return At({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);const l=this.loadModuleFactoryOrRoutes(n.loadChildren).pipe((0,Kt.U)(v=>{this.onLoadEndListener&&this.onLoadEndListener(n);let b,T,H=!1;Array.isArray(v)?T=v:(b=v.create(e).injector,T=qu(b.get(Dd,[],t.XFs.Self|t.XFs.Optional)));return{routes:T.map(fl),injector:b}}),Kr(()=>{this.childrenLoaders.delete(n)})),h=new su(l,()=>new Gt.x).pipe(ru());return this.childrenLoaders.set(n,h),h}loadModuleFactoryOrRoutes(e){return co(e()).pipe((0,Ke.z)(n=>n instanceof t.YKP||Array.isArray(n)?At(n):(0,he.D)(this.compiler.compileModuleAsync(n))))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.zs3),t.LFG(t.Sil))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fm{}class p1{shouldProcessUrl(o){return!0}extract(o){return o}merge(o,e){return o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pm(i){throw i}function _m(i,o,e){return o.parse("/")}const mm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},_1={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function v1(){const i=(0,t.f3M)(x_),o=(0,t.f3M)(ns),e=(0,t.f3M)(gt),n=(0,t.f3M)(t.zs3),a=(0,t.f3M)(t.Sil),l=(0,t.f3M)(Dd,{optional:!0})??[],h=(0,t.f3M)(Za,{optional:!0})??{},v=(0,t.f3M)(um),b=(0,t.f3M)(d1,{optional:!0}),T=(0,t.f3M)(fm,{optional:!0}),H=(0,t.f3M)(h1,{optional:!0}),Q=new Xe(null,i,o,e,n,a,qu(l));return T&&(Q.urlHandlingStrategy=T),H&&(Q.routeReuseStrategy=H),Q.titleStrategy=b??v,function m1(i,o){i.errorHandler&&(o.errorHandler=i.errorHandler),i.malformedUriErrorHandler&&(o.malformedUriErrorHandler=i.malformedUriErrorHandler),i.onSameUrlNavigation&&(o.onSameUrlNavigation=i.onSameUrlNavigation),i.paramsInheritanceStrategy&&(o.paramsInheritanceStrategy=i.paramsInheritanceStrategy),i.relativeLinkResolution&&(o.relativeLinkResolution=i.relativeLinkResolution),i.urlUpdateStrategy&&(o.urlUpdateStrategy=i.urlUpdateStrategy),i.canceledNavigationResolution&&(o.canceledNavigationResolution=i.canceledNavigationResolution)}(h,Q),Q}let Xe=(()=>{class i{constructor(e,n,a,l,h,v,b){this.rootComponentType=e,this.urlSerializer=n,this.rootContexts=a,this.location=l,this.config=b,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Gt.x,this.errorHandler=pm,this.malformedUriErrorHandler=_m,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>At(void 0),this.urlHandlingStrategy=new p1,this.routeReuseStrategy=new hm,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=h.get(kd),this.configLoader.onLoadEndListener=_t=>this.triggerEvent(new id(_t)),this.configLoader.onLoadStartListener=_t=>this.triggerEvent(new N_(_t)),this.ngModule=h.get(t.h0i),this.console=h.get(t.c2e);const Q=h.get(t.R0b);this.isNgZoneEnabled=Q instanceof t.R0b&&t.R0b.isInAngularZone(),this.resetConfig(b),this.currentUrlTree=function py(){return new Vo(new te([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=al(this.currentUrlTree,this.rootComponentType),this.transitions=new an({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(e){const n=this.events;return e.pipe(Ne(a=>0!==a.id),(0,Kt.U)(a=>({...a,extractedUrl:this.urlHandlingStrategy.extract(a.rawUrl)})),_n(a=>{let l=!1,h=!1;return At(a).pipe(We(v=>{this.currentNavigation={id:v.id,initialUrl:v.rawUrl,extractedUrl:v.extractedUrl,trigger:v.source,extras:v.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),_n(v=>{const b=this.browserUrlTree.toString(),T=!this.navigated||v.extractedUrl.toString()!==b||b!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||T)&&this.urlHandlingStrategy.shouldProcessUrl(v.rawUrl))return C1(v.source)&&(this.browserUrlTree=v.extractedUrl),At(v).pipe(_n(Q=>{const _t=this.transitions.getValue();return n.next(new rl(Q.id,this.serializeUrl(Q.extractedUrl),Q.source,Q.restoredState)),_t!==this.transitions.getValue()?Se.E:Promise.resolve(Q)}),function sm(i,o,e,n){return _n(a=>function QP(i,o,e,n,a){return new rm(i,o,e,n,a).apply()}(i,o,e,a.extractedUrl,n).pipe((0,Kt.U)(l=>({...a,urlAfterRedirects:l}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),We(Q=>{this.currentNavigation={...this.currentNavigation,finalUrl:Q.urlAfterRedirects},a.urlAfterRedirects=Q.urlAfterRedirects}),function l1(i,o,e,n,a,l){return(0,Ke.z)(h=>function o1(i,o,e,n,a,l,h="emptyOnly",v="legacy"){return new am(i,o,e,n,a,h,v,l).recognize().pipe(_n(b=>null===b?function yd(i){return new Ye.y(o=>o.error(i))}(new n1):At(b)))}(i,o,e,h.urlAfterRedirects,n.serialize(h.urlAfterRedirects),n,a,l).pipe((0,Kt.U)(v=>({...h,targetSnapshot:v}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),We(Q=>{if(a.targetSnapshot=Q.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!Q.extras.skipLocationChange){const xt=this.urlHandlingStrategy.merge(Q.urlAfterRedirects,Q.rawUrl);this.setBrowserUrl(xt,Q)}this.browserUrlTree=Q.urlAfterRedirects}const _t=new Sy(Q.id,this.serializeUrl(Q.extractedUrl),this.serializeUrl(Q.urlAfterRedirects),Q.targetSnapshot);n.next(_t)}));if(T&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:_t,extractedUrl:xt,source:jt,restoredState:ae,extras:ee}=v,Oi=new rl(_t,this.serializeUrl(xt),jt,ae);n.next(Oi);const yn=al(xt,this.rootComponentType).snapshot;return At(a={...v,targetSnapshot:yn,urlAfterRedirects:xt,extras:{...ee,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=v.rawUrl,v.resolve(null),Se.E}),We(v=>{const b=new Iy(v.id,this.serializeUrl(v.extractedUrl),this.serializeUrl(v.urlAfterRedirects),v.targetSnapshot);this.triggerEvent(b)}),(0,Kt.U)(v=>a={...v,guards:Jy(v.targetSnapshot,v.currentSnapshot,this.rootContexts)}),function Yy(i,o){return(0,Ke.z)(e=>{const{targetSnapshot:n,currentSnapshot:a,guards:{canActivateChecks:l,canDeactivateChecks:h}}=e;return 0===h.length&&0===l.length?At({...e,guardsResult:!0}):function Ky(i,o,e,n){return(0,he.D)(i).pipe((0,Ke.z)(a=>function md(i,o,e,n,a){const l=o&&o.routeConfig?o.routeConfig.canDeactivate:null;return l&&0!==l.length?At(l.map(v=>{const b=pl(o)??a,T=is(v,b);return co(function vl(i){return i&&Ri(i.canDeactivate)}(T)?T.canDeactivate(i,o,e,n):b.runInContext(()=>T(i,o,e,n))).pipe(Fi())})).pipe(Go()):At(!0)}(a.component,a.route,e,o,n)),Fi(a=>!0!==a,!0))}(h,n,a,i).pipe((0,Ke.z)(v=>v&&function zy(i){return"boolean"==typeof i}(v)?function BP(i,o,e,n){return(0,he.D)(o).pipe(Yr(a=>qs(function pd(i,o){return null!==i&&o&&o(new Ny(i)),At(!0)}(a.route.parent,n),function fd(i,o){return null!==i&&o&&o(new od(i)),At(!0)}(a.route,n),function _d(i,o,e){const n=o[o.length-1],l=o.slice(0,o.length-1).reverse().map(h=>function Ta(i){const o=i.routeConfig?i.routeConfig.canActivateChild:null;return o&&0!==o.length?{node:i,guards:o}:null}(h)).filter(h=>null!==h).map(h=>Lr(()=>At(h.guards.map(b=>{const T=pl(h.node)??e,H=is(b,T);return co(function ml(i){return i&&Ri(i.canActivateChild)}(H)?H.canActivateChild(n,i):T.runInContext(()=>H(n,i))).pipe(Fi())})).pipe(Go())));return At(l).pipe(Go())}(i,a.path,e),function W_(i,o,e){const n=o.routeConfig?o.routeConfig.canActivate:null;if(!n||0===n.length)return At(!0);const a=n.map(l=>Lr(()=>{const h=pl(o)??e,v=is(l,h);return co(function Gy(i){return i&&Ri(i.canActivate)}(v)?v.canActivate(o,i):h.runInContext(()=>v(o,i))).pipe(Fi())}));return At(a).pipe(Go())}(i,a.route,e))),Fi(a=>!0!==a,!0))}(n,l,i,o):At(v)),(0,Kt.U)(v=>({...e,guardsResult:v})))})}(this.ngModule.injector,v=>this.triggerEvent(v)),We(v=>{if(a.guardsResult=v.guardsResult,ho(v.guardsResult))throw V_(0,v.guardsResult);const b=new Ly(v.id,this.serializeUrl(v.extractedUrl),this.serializeUrl(v.urlAfterRedirects),v.targetSnapshot,!!v.guardsResult);this.triggerEvent(b)}),Ne(v=>!!v.guardsResult||(this.restoreHistory(v),this.cancelNavigationTransition(v,"",3),!1)),xd(v=>{if(v.guards.canActivateChecks.length)return At(v).pipe(We(b=>{const T=new ed(b.id,this.serializeUrl(b.extractedUrl),this.serializeUrl(b.urlAfterRedirects),b.targetSnapshot);this.triggerEvent(T)}),_n(b=>{let T=!1;return At(b).pipe(function lm(i,o){return(0,Ke.z)(e=>{const{targetSnapshot:n,guards:{canActivateChecks:a}}=e;if(!a.length)return At(e);let l=0;return(0,he.D)(a).pipe(Yr(h=>function rs(i,o,e,n){const a=i.routeConfig,l=i._resolve;return void 0!==a?.title&&!u1(a)&&(l[_e]=a.title),function g1(i,o,e,n){const a=function gm(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}(i);if(0===a.length)return At({});const l={};return(0,he.D)(a).pipe((0,Ke.z)(h=>function Pd(i,o,e,n){const a=pl(o)??n,l=is(i,a);return co(l.resolve?l.resolve(o,e):a.runInContext(()=>l(o,e)))}(i[h],o,e,n).pipe(Fi(),We(v=>{l[h]=v}))),Vu(1),cu(l),Tt(h=>Cl(h)?Se.E:eo(h)))}(l,i,o,n).pipe((0,Kt.U)(h=>(i._resolvedData=h,i.data=cl(i,e).resolve,a&&u1(a)&&(i.data[_e]=a.title),null)))}(h.route,n,i,o)),We(()=>l++),Vu(1),(0,Ke.z)(h=>l===a.length?At(e):Se.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),We({next:()=>T=!0,complete:()=>{T||(this.restoreHistory(b),this.cancelNavigationTransition(b,"",2))}}))}),We(b=>{const T=new nd(b.id,this.serializeUrl(b.extractedUrl),this.serializeUrl(b.urlAfterRedirects),b.targetSnapshot);this.triggerEvent(T)}))}),xd(v=>{const b=T=>{const H=[];T.routeConfig?.loadComponent&&!T.routeConfig._loadedComponent&&H.push(this.configLoader.loadComponent(T.routeConfig).pipe(We(Q=>{T.component=Q}),(0,Kt.U)(()=>{})));for(const Q of T.children)H.push(...b(Q));return H};return kg(b(v.targetSnapshot.root)).pipe($r(),Fe(1))}),xd(()=>this.afterPreactivation()),(0,Kt.U)(v=>{const b=function Uy(i,o,e){const n=es(i,o._root,e?e._root:void 0);return new F_(n,o)}(this.routeReuseStrategy,v.targetSnapshot,v.currentRouterState);return a={...v,targetRouterState:b}}),We(v=>{this.currentUrlTree=v.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(v.urlAfterRedirects,v.rawUrl),this.routerState=v.targetRouterState,"deferred"===this.urlUpdateStrategy&&(v.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,v),this.browserUrlTree=v.urlAfterRedirects)}),((i,o,e)=>(0,Kt.U)(n=>(new Y_(o,n.targetRouterState,n.currentRouterState,e).activate(i),n)))(this.rootContexts,this.routeReuseStrategy,v=>this.triggerEvent(v)),We({next(){l=!0},complete(){l=!0}}),Kr(()=>{l||h||this.cancelNavigationTransition(a,"",1),this.currentNavigation?.id===a.id&&(this.currentNavigation=null)}),Tt(v=>{if(h=!0,H_(v)){Vy(v)||(this.navigated=!0,this.restoreHistory(a,!0));const b=new sl(a.id,this.serializeUrl(a.extractedUrl),v.message,v.cancellationCode);if(n.next(b),Vy(v)){const T=this.urlHandlingStrategy.merge(v.url,this.rawUrlTree),H={skipLocationChange:a.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||C1(a.source)};this.scheduleNavigation(T,"imperative",null,H,{resolve:a.resolve,reject:a.reject,promise:a.promise})}else a.resolve(!1)}else{this.restoreHistory(a,!0);const b=new td(a.id,this.serializeUrl(a.extractedUrl),v,a.targetSnapshot??void 0);n.next(b);try{a.resolve(this.errorHandler(v))}catch(T){a.reject(T)}}return Se.E}))}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}setTransition(e){this.transitions.next({...this.transitions.value,...e})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{const n="popstate"===e.type?"popstate":"hashchange";"popstate"===n&&setTimeout(()=>{const a={replaceUrl:!0},l=e.state?.navigationId?e.state:null;if(l){const v={...l};delete v.navigationId,delete v.\u0275routerPageId,0!==Object.keys(v).length&&(a.state=v)}const h=this.parseUrl(e.url);this.scheduleNavigation(h,n,l,a)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){this.config=e.map(fl),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(e,n={}){const{relativeTo:a,queryParams:l,fragment:h,queryParamsHandling:v,preserveFragment:b}=n,T=a||this.routerState.root,H=b?this.currentUrlTree.fragment:h;let Q=null;switch(v){case"merge":Q={...this.currentUrlTree.queryParams,...l};break;case"preserve":Q=this.currentUrlTree.queryParams;break;default:Q=l||null}return null!==Q&&(Q=this.removeEmptyProps(Q)),Dy(T,this.currentUrlTree,e,Q,H??null)}navigateByUrl(e,n={skipLocationChange:!1}){const a=ho(e)?e:this.parseUrl(e),l=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(l,"imperative",null,n)}navigate(e,n={skipLocationChange:!1}){return function $P(i){for(let o=0;o<i.length;o++){if(null==i[o])throw new t.vHH(4008,false)}}(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let n;try{n=this.urlSerializer.parse(e)}catch(a){n=this.malformedUriErrorHandler(a,this.urlSerializer,e)}return n}isActive(e,n){let a;if(a=!0===n?{...mm}:!1===n?{..._1}:n,ho(e))return ba(this.currentUrlTree,e,a);const l=this.parseUrl(e);return ba(this.currentUrlTree,l,a)}removeEmptyProps(e){return Object.keys(e).reduce((n,a)=>{const l=e[a];return null!=l&&(n[a]=l),n},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.currentPageId=e.targetPageId,this.events.next(new Bo(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),e.resolve(!0)},e=>{this.console.warn(`Unhandled Navigation Error: ${e}`)})}scheduleNavigation(e,n,a,l,h){if(this.disposed)return Promise.resolve(!1);let v,b,T;h?(v=h.resolve,b=h.reject,T=h.promise):T=new Promise((_t,xt)=>{v=_t,b=xt});const H=++this.navigationId;let Q;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(a=this.location.getState()),Q=a&&a.\u0275routerPageId?a.\u0275routerPageId:l.replaceUrl||l.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):Q=0,this.setTransition({id:H,targetPageId:Q,source:n,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:l,resolve:v,reject:b,promise:T,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),T.catch(_t=>Promise.reject(_t))}setBrowserUrl(e,n){const a=this.urlSerializer.serialize(e),l={...n.extras.state,...this.generateNgRouterState(n.id,n.targetPageId)};this.location.isCurrentPathEqualTo(a)||n.extras.replaceUrl?this.location.replaceState(a,"",l):this.location.go(a,"",l)}restoreHistory(e,n=!1){if("computed"===this.canceledNavigationResolution){const a=this.currentPageId-e.targetPageId;"popstate"!==e.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===a?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===a&&(this.resetState(e),this.browserUrlTree=e.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(a)}else"replace"===this.canceledNavigationResolution&&(n&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=e.currentRouterState,this.currentUrlTree=e.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(e,n,a){const l=new sl(e.id,this.serializeUrl(e.extractedUrl),n,a);this.triggerEvent(l),e.resolve(!1)}generateNgRouterState(e,n){return"computed"===this.canceledNavigationResolution?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}}return i.\u0275fac=function(e){t.$Z()},i.\u0275prov=t.Yz7({token:i,factory:function(){return v1()},providedIn:"root"}),i})();function C1(i){return"imperative"!==i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class M1{}let WP=(()=>{class i{constructor(e,n,a,l,h){this.router=e,this.injector=a,this.preloadingStrategy=l,this.loader=h}setUpPreloading(){this.subscription=this.router.events.pipe(Ne(e=>e instanceof Bo),Yr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){const a=[];for(const l of n){l.providers&&!l._injector&&(l._injector=(0,t.MMx)(l.providers,e,`Route: ${l.path}`));const h=l._injector??e,v=l._loadedInjector??h;l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent?a.push(this.preloadConfig(h,l)):(l.children||l._loadedRoutes)&&a.push(this.processRoutes(v,l.children??l._loadedRoutes))}return(0,he.D)(a).pipe((0,Hs.J)())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let a;a=n.loadChildren&&void 0===n.canLoad?this.loader.loadChildren(e,n):At(null);const l=a.pipe((0,Ke.z)(h=>null===h?At(void 0):(n._loadedRoutes=h.routes,n._loadedInjector=h.injector,this.processRoutes(h.injector??e,h.routes))));if(n.loadComponent&&!n._loadedComponent){const h=this.loader.loadComponent(n);return(0,he.D)([l,h]).pipe((0,Hs.J)())}return l})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Xe),t.LFG(t.Sil),t.LFG(t.lqb),t.LFG(M1),t.LFG(kd))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bl=new t.OlP("");let Ra=(()=>{class i{constructor(e,n,a={}){this.router=e,this.viewportScroller=n,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration=a.scrollPositionRestoration||"disabled",a.anchorScrolling=a.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof rl?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Bo&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof rd&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.router.triggerEvent(new rd(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,n))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return i.\u0275fac=function(e){t.$Z()},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mo(i,o){return{\u0275kind:i,\u0275providers:o}}function Pl(i){return[{provide:Dd,multi:!0,useValue:i}]}function Td(){const i=(0,t.f3M)(t.zs3);return o=>{const e=i.get(t.z2F);if(o!==e.components[0])return;const n=i.get(Xe),a=i.get(b1);1===i.get(Ed)&&n.initialNavigation(),i.get(Mm,null,t.XFs.Optional)?.setUpPreloading(),i.get(bl,null,t.XFs.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),a.next(),a.complete()}}const b1=new t.OlP("",{factory:()=>new Gt.x}),Ed=new t.OlP("",{providedIn:"root",factory:()=>1});const Mm=new t.OlP("");function tx(i){return mo(0,[{provide:Mm,useExisting:WP},{provide:M1,useExisting:i}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.6
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function E(r){for(let s in r)if(r[s]===E)return s;throw Error("Could not find renamed property on target object.")}function R(r,s){for(const c in s)s.hasOwnProperty(c)&&!r.hasOwnProperty(c)&&(r[c]=s[c])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function U(r){if("string"==typeof r)return r;if(Array.isArray(r))return"["+r.map(U).join(", ")+"]";if(null==r)return""+r;if(r.overriddenName)return`${r.overriddenName}`;if(r.name)return`${r.name}`;const s=r.toString();if(null==s)return""+s;const c=s.indexOf("\n");return-1===c?s:s.substring(0,c)}function ct(r,s){return null==r||""===r?null===s?"":s:null==s||""===s?r:r+" "+s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const z=E({__forward_ref__:E});function X(r){return r.__forward_ref__=X,r.toString=function(){return U(this())},r}function W(r){return lt(r)?r():r}function lt(r){return"function"==typeof r&&r.hasOwnProperty(z)&&r.__forward_ref__===X}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ct extends Error{constructor(s,c){super(function ie(r,s){return`NG0${Math.abs(r)}${s?": "+s.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s,c)),this.code=s}}function gt(r){return"string"==typeof r?r:null==r?"":String(r)}function vt(r,s){throw new Ct(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pt(r,s){null==r&&function Nt(r,s,c,g){throw new Error(`ASSERTION ERROR: ${r}`+(null==g?"":` [Expected=> ${c} ${g} ${s} <=Actual]`))}(s,r,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gn(r){return{token:r.token,providedIn:r.providedIn||null,factory:r.factory,value:void 0}}function Fl(r){return{providers:r.providers||[],imports:r.imports||[]}}function Va(r){return Rl(r,un)||Rl(r,ah)}function ev(r){return null!==Va(r)}function Rl(r,s){return r.hasOwnProperty(s)?r[s]:null}function ov(r){return r&&(r.hasOwnProperty(cs)||r.hasOwnProperty(rv))?r[cs]:null}const un=E({\u0275prov:E}),cs=E({\u0275inj:E}),ah=E({ngInjectableDef:E}),rv=E({ngInjectorDef:E});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Jt=(()=>((Jt=Jt||{})[Jt.Default=0]="Default",Jt[Jt.Host=1]="Host",Jt[Jt.Self=2]="Self",Jt[Jt.SkipSelf=4]="SkipSelf",Jt[Jt.Optional=8]="Optional",Jt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ul;function In(r){const s=Ul;return Ul=r,s}function Ie(r,s,c){const g=Va(r);return g&&"root"==g.providedIn?void 0===g.value?g.value=g.factory():g.value:c&Jt.Optional?null:void 0!==s?s:void vt(U(r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qt(r){return{toString:r}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Vn=(()=>((Vn=Vn||{})[Vn.OnPush=0]="OnPush",Vn[Vn.Default=1]="Default",Vn))(),Ln=(()=>{return(r=Ln||(Ln={}))[r.Emulated=0]="Emulated",r[r.None=2]="None",r[r.ShadowDom=3]="ShadowDom",Ln;var r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ce=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Xo={},St=[],Ha=E({\u0275cmp:E}),tr=E({\u0275dir:E}),Vl=E({\u0275pipe:E}),gs=E({\u0275mod:E}),Pi=E({\u0275fac:E}),er=E({__NG_ELEMENT_ID__:E});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Hl=0;function nr(r){return qt(()=>{const c=!0===r.standalone,g={},u={type:r.type,providersResolver:null,decls:r.decls,vars:r.vars,factory:null,template:r.template||null,consts:r.consts||null,ngContentSelectors:r.ngContentSelectors,hostBindings:r.hostBindings||null,hostVars:r.hostVars||0,hostAttrs:r.hostAttrs||null,contentQueries:r.contentQueries||null,declaredInputs:g,inputs:null,outputs:null,exportAs:r.exportAs||null,onPush:r.changeDetection===Vn.OnPush,directiveDefs:null,pipeDefs:null,standalone:c,dependencies:c&&r.dependencies||null,getStandaloneInjector:null,selectors:r.selectors||St,viewQuery:r.viewQuery||null,features:r.features||null,data:r.data||{},encapsulation:r.encapsulation||Ln.Emulated,id:"c"+Hl++,styles:r.styles||St,_:null,setInput:null,schemas:r.schemas||null,tView:null},d=r.dependencies,p=r.features;return u.inputs=lh(r.inputs,g),u.outputs=lh(r.outputs),p&&p.forEach(m=>m(u)),u.directiveDefs=d?()=>("function"==typeof d?d():d).map(ch).filter(ql):null,u.pipeDefs=d?()=>("function"==typeof d?d():d).map(ze).filter(ql):null,u})}function qa(r,s,c){const g=r.\u0275cmp;g.directiveDefs=()=>("function"==typeof s?s():s).map(ch),g.pipeDefs=()=>("function"==typeof c?c():c).map(ze)}function ch(r){return ge(r)||sn(r)}function ql(r){return null!==r}function Jl(r){return qt(()=>({type:r.type,bootstrap:r.bootstrap||St,declarations:r.declarations||St,imports:r.imports||St,exports:r.exports||St,transitiveCompileScopes:null,schemas:r.schemas||null,id:r.id||null}))}function lh(r,s){if(null==r)return Xo;const c={};for(const g in r)if(r.hasOwnProperty(g)){let u=r[g],d=u;Array.isArray(u)&&(d=u[1],u=u[0]),c[u]=g,s&&(s[u]=d)}return c}const gh=nr;function Bl(r){return{type:r.type,name:r.name,factory:null,pure:!1!==r.pure,standalone:!0===r.standalone,onDestroy:r.type.prototype.ngOnDestroy||null}}function ge(r){return r[Ha]||null}function sn(r){return r[tr]||null}function ze(r){return r[Vl]||null}function ai(r){const s=ge(r)||sn(r)||ze(r);return null!==s&&s.standalone}function Pn(r,s){const c=r[gs]||null;if(!c&&!0===s)throw new Error(`Type ${U(r)} does not have '\u0275mod' property.`);return c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Be(r){return Array.isArray(r)&&"object"==typeof r[1]}function ci(r){return Array.isArray(r)&&!0===r[1]}function za(r){return 0!=(8&r.flags)}function Qa(r){return 2==(2&r.flags)}function Ga(r){return 1==(1&r.flags)}function qn(r){return null!==r.template}function _O(r){return 0!=(256&r[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wi(r,s){return r.hasOwnProperty(Pi)?r[Pi]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ql{constructor(s,c,g){this.previousValue=s,this.currentValue=c,this.firstChange=g}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ya(){return lv}function lv(r){return r.type.prototype.ngOnChanges&&(r.setInput=hh),gv}function gv(){const r=ph(this),s=r?.current;if(s){const c=r.previous;if(c===Xo)r.previous=s;else for(let g in s)c[g]=s[g];r.current=null,this.ngOnChanges(s)}}function hh(r,s,c,g){const u=ph(r)||function uv(r,s){return r[fh]=s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r,{previous:Xo,current:null}),d=u.current||(u.current={}),p=u.previous,m=this.declaredInputs[c],M=p[m];d[m]=new Ql(M&&M.currentValue,s,p===Xo),r[g]=s}Ya.ngInherit=!0;const fh="__ngSimpleChanges__";function ph(r){return r[fh]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Le(r){for(;Array.isArray(r);)r=r[0];return r}function $l(r,s){return Le(s[r])}function de(r,s){return Le(s[r.index])}function ms(r,s){return r.data[s]}function vs(r,s){return r[s]}function xn(r,s){const c=s[r];return Be(c)?c:c[0]}function Ka(r){return 64==(64&r[2])}function wo(r,s){return null==s?null:r[s]}function pv(r){r[18]=0}function Yl(r,s){r[5]+=s;let c=r,g=r[3];for(;null!==g&&(1===s&&1===c[5]||-1===s&&0===c[5]);)g[5]+=s,c=g,g=g[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Qt={lFrame:sr(null),bindingsEnabled:!0};function vh(){return Qt.bindingsEnabled}function dt(){return Qt.lFrame.lView}function ne(){return Qt.lFrame.tView}function Cv(r){return Qt.lFrame.contextLView=r,r[8]}function Ch(r){return Qt.lFrame.contextLView=null,r}function Ge(){let r=Mv();for(;null!==r&&64===r.type;)r=r.parent;return r}function Mv(){return Qt.lFrame.currentTNode}function gi(r,s){const c=Qt.lFrame;c.currentTNode=r,c.isParent=s}function Wl(){return Qt.lFrame.isParent}function Cs(){Qt.lFrame.isParent=!1}function On(){const r=Qt.lFrame;let s=r.bindingRootIndex;return-1===s&&(s=r.bindingRootIndex=r.tView.bindingStartIndex),s}function qi(){return Qt.lFrame.bindingIndex}function Ms(){return Qt.lFrame.bindingIndex++}function Ji(r){const s=Qt.lFrame,c=s.bindingIndex;return s.bindingIndex=s.bindingIndex+r,c}function qO(r,s){const c=Qt.lFrame;c.bindingIndex=c.bindingRootIndex=r,Xl(s)}function Xl(r){Qt.lFrame.currentDirectiveIndex=r}function xv(){return Qt.lFrame.currentQueryIndex}function bh(r){Qt.lFrame.currentQueryIndex=r}function JO(r){const s=r[1];return 2===s.type?s.declTNode:1===s.type?r[6]:null}function wv(r,s,c){if(c&Jt.SkipSelf){let u=s,d=r;for(;!(u=u.parent,null!==u||c&Jt.Host||(u=JO(d),null===u||(d=d[15],10&u.type))););if(null===u)return!1;s=u,r=d}const g=Qt.lFrame=Xa();return g.currentTNode=s,g.lView=r,!0}function tg(r){const s=Xa(),c=r[1];Qt.lFrame=s,s.currentTNode=c.firstChild,s.lView=r,s.tView=c,s.contextLView=r,s.bindingIndex=c.bindingStartIndex,s.inI18n=!1}function Xa(){const r=Qt.lFrame,s=null===r?null:r.child;return null===s?sr(r):s}function sr(r){const s={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:r,child:null,inI18n:!1};return null!==r&&(r.child=s),s}function Ph(){const r=Qt.lFrame;return Qt.lFrame=r.parent,r.currentTNode=null,r.lView=null,r}const ys=Ph;function eg(){const r=Ph();r.isParent=!0,r.tView=null,r.selectedIndex=-1,r.contextLView=null,r.elementDepthCount=0,r.currentDirectiveIndex=-1,r.currentNamespace=null,r.bindingRootIndex=-1,r.bindingIndex=-1,r.currentQueryIndex=0}function fn(){return Qt.lFrame.selectedIndex}function Bi(r){Qt.lFrame.selectedIndex=r}function we(){const r=Qt.lFrame;return ms(r.tView,r.selectedIndex)}function ar(r,s){for(let c=s.directiveStart,g=s.directiveEnd;c<g;c++){const d=r.data[c].type.prototype,{ngAfterContentInit:p,ngAfterContentChecked:m,ngAfterViewInit:M,ngAfterViewChecked:O,ngOnDestroy:w}=d;p&&(r.contentHooks||(r.contentHooks=[])).push(-c,p),m&&((r.contentHooks||(r.contentHooks=[])).push(c,m),(r.contentCheckHooks||(r.contentCheckHooks=[])).push(c,m)),M&&(r.viewHooks||(r.viewHooks=[])).push(-c,M),O&&((r.viewHooks||(r.viewHooks=[])).push(c,O),(r.viewCheckHooks||(r.viewCheckHooks=[])).push(c,O)),null!=w&&(r.destroyHooks||(r.destroyHooks=[])).push(c,w)}}function cr(r,s,c){Ah(r,s,3,c)}function bs(r,s,c,g){(3&r[2])===c&&Ah(r,s,c,g)}function nc(r,s){let c=r[2];(3&c)===s&&(c&=2047,c+=1,r[2]=c)}function Ah(r,s,c,g){const d=g??-1,p=s.length-1;let m=0;for(let M=void 0!==g?65535&r[18]:0;M<p;M++)if("number"==typeof s[M+1]){if(m=s[M],null!=g&&m>=g)break}else s[M]<0&&(r[18]+=65536),(m<d||-1==d)&&(kv(r,c,s,M),r[18]=(4294901760&r[18])+M+2),M++}function kv(r,s,c,g){const u=c[g]<0,d=c[g+1],m=r[u?-c[g]:c[g]];if(u){if(r[2]>>11<r[18]>>16&&(3&r[2])===s){r[2]+=2048;try{d.call(m)}finally{}}}else try{d.call(m)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ps{constructor(s,c,g){this.factory=s,this.resolving=!1,this.canSeeViewProviders=c,this.injectImpl=g}}function rc(r,s,c){let g=0;for(;g<c.length;){const u=c[g];if("number"==typeof u){if(0!==u)break;g++;const d=c[g++],p=c[g++],m=c[g++];r.setAttribute(s,p,m,d)}else{const d=u,p=c[++g];Sh(d)?r.setProperty(s,d,p):r.setAttribute(s,d,p),g++}}return g}function Eh(r){return 3===r||4===r||6===r}function Sh(r){return 64===r.charCodeAt(0)}function ws(r,s){if(null!==s&&0!==s.length)if(null===r||0===r.length)r=s.slice();else{let c=-1;for(let g=0;g<s.length;g++){const u=s[g];"number"==typeof u?c=u:0===c||Ih(r,c,u,null,-1===c||2===c?s[++g]:null)}}return r}function Ih(r,s,c,g,u){let d=0,p=r.length;if(-1===s)p=-1;else for(;d<r.length;){const m=r[d++];if("number"==typeof m){if(m===s){p=-1;break}if(m>s){p=d-1;break}}}for(;d<r.length;){const m=r[d];if("number"==typeof m)break;if(m===c){if(null===g)return void(null!==u&&(r[d+1]=u));if(g===r[d+1])return void(r[d+2]=u)}d++,null!==g&&d++,null!==u&&d++}-1!==p&&(r.splice(p,0,s),d=p+1),r.splice(d++,0,c),null!==g&&r.splice(d++,0,g),null!==u&&r.splice(d++,0,u)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Lh(r){return-1!==r}function lr(r){return 32767&r}function Ds(r,s){let c=function ig(r){return r>>16}(r),g=s;for(;c>0;)g=g[15],c--;return g}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Nh=!0;function ks(r){const s=Nh;return Nh=r,s}let Sv=0;const Bn={};function gr(r,s){const c=ac(r,s);if(-1!==c)return c;const g=s[1];g.firstCreatePass&&(r.injectorIndex=s.length,sc(g.data,r),sc(s,null),sc(g.blueprint,null));const u=cc(r,s),d=r.injectorIndex;if(Lh(u)){const p=lr(u),m=Ds(u,s),M=m[1].data;for(let O=0;O<8;O++)s[d+O]=m[p+O]|M[p+O]}return s[d+8]=u,d}function sc(r,s){r.push(0,0,0,0,0,0,0,0,s)}function ac(r,s){return-1===r.injectorIndex||r.parent&&r.parent.injectorIndex===r.injectorIndex||null===s[r.injectorIndex+8]?-1:r.injectorIndex}function cc(r,s){if(r.parent&&-1!==r.parent.injectorIndex)return r.parent.injectorIndex;let c=0,g=null,u=s;for(;null!==u;){if(g=Fv(u),null===g)return-1;if(c++,u=u[15],-1!==g.injectorIndex)return g.injectorIndex|c<<16}return-1}function og(r,s,c){!function Iv(r,s,c){let g;"string"==typeof c?g=c.charCodeAt(0)||0:c.hasOwnProperty(er)&&(g=c[er]),null==g&&(g=c[er]=Sv++);const u=255&g;s.data[r+(u>>5)]|=1<<u}(r,s,c)}function Nv(r,s,c){if(c&Jt.Optional||void 0!==r)return r;vt()}function Rh(r,s,c,g){if(c&Jt.Optional&&void 0===g&&(g=null),0==(c&(Jt.Self|Jt.Host))){const u=r[9],d=In(void 0);try{return u?u.get(s,g,c&Jt.Optional):Ie(s,g,c&Jt.Optional)}finally{In(d)}}return Nv(g,0,c)}function rg(r,s,c,g=Jt.Default,u){if(null!==r){if(1024&s[2]){const p=function BO(r,s,c,g,u){let d=r,p=s;for(;null!==d&&null!==p&&1024&p[2]&&!(256&p[2]);){const m=Uh(d,p,c,g|Jt.Self,Bn);if(m!==Bn)return m;let M=d.parent;if(!M){const O=p[21];if(O){const w=O.get(c,Bn,g);if(w!==Bn)return w}M=Fv(p),p=p[15]}d=M}return u}(r,s,c,g,Bn);if(p!==Bn)return p}const d=Uh(r,s,c,g,Bn);if(d!==Bn)return d}return Rh(s,c,g,u)}function Uh(r,s,c,g,u){const d=function jh(r){if("string"==typeof r)return r.charCodeAt(0)||0;const s=r.hasOwnProperty(er)?r[er]:void 0;return"number"==typeof s?s>=0?255&s:ag:s}(c);if("function"==typeof d){if(!wv(s,r,g))return g&Jt.Host?Nv(u,0,g):Rh(s,c,g,u);try{const p=d(g);if(null!=p||g&Jt.Optional)return p;vt()}finally{ys()}}else if("number"==typeof d){let p=null,m=ac(r,s),M=-1,O=g&Jt.Host?s[16][6]:null;for((-1===m||g&Jt.SkipSelf)&&(M=-1===m?cc(r,s):s[m+8],-1!==M&&Vh(g,!1)?(p=s[1],m=lr(M),s=Ds(M,s)):m=-1);-1!==m;){const w=s[1];if(Di(d,m,w.data)){const k=Zv(m,s,c,p,g,O);if(k!==Bn)return k}M=s[m+8],-1!==M&&Vh(g,s[1].data[m+8]===O)&&Di(d,m,s)?(p=w,m=lr(M),s=Ds(M,s)):m=-1}}return u}function Zv(r,s,c,g,u,d){const p=s[1],m=p.data[r+8],w=sg(m,p,c,null==g?Qa(m)&&Nh:g!=p&&0!=(3&m.type),u&Jt.Host&&d===m);return null!==w?lc(s,p,w,m):Bn}function sg(r,s,c,g,u){const d=r.providerIndexes,p=s.data,m=1048575&d,M=r.directiveStart,w=d>>20,N=u?m+w:r.directiveEnd;for(let G=g?m:m+w;G<N;G++){const nt=p[G];if(G<M&&c===nt||G>=M&&nt.type===c)return G}if(u){const G=p[M];if(G&&qn(G)&&G.type===c)return M}return null}function lc(r,s,c,g){let u=r[c];const d=s.data;if(function ic(r){return r instanceof Ps}(u)){const p=u;p.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lt(r,s){const c=s?`. Dependency path: ${s.join(" > ")} > ${r}`:"";throw new Ct(-200,`Circular dependency in DI detected for ${r}${c}`)}(function at(r){return"function"==typeof r?r.name||r.toString():"object"==typeof r&&null!=r&&"function"==typeof r.type?r.type.name||r.type.toString():gt(r)}(d[c]));const m=ks(p.canSeeViewProviders);p.resolving=!0;const M=p.injectImpl?In(p.injectImpl):null;wv(r,g,Jt.Default);try{u=r[c]=p.factory(void 0,d,r,g),s.firstCreatePass&&c>=g.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kh(r,s,c){const{ngOnChanges:g,ngOnInit:u,ngDoCheck:d}=s.type.prototype;if(g){const p=lv(s);(c.preOrderHooks||(c.preOrderHooks=[])).push(r,p),(c.preOrderCheckHooks||(c.preOrderCheckHooks=[])).push(r,p)}u&&(c.preOrderHooks||(c.preOrderHooks=[])).push(0-r,u),d&&((c.preOrderHooks||(c.preOrderHooks=[])).push(r,d),(c.preOrderCheckHooks||(c.preOrderCheckHooks=[])).push(r,d))}(c,d[c],s)}finally{null!==M&&In(M),ks(m),p.resolving=!1,ys()}}return u}function Di(r,s,c){return!!(c[s+(r>>5)]&1<<r)}function Vh(r,s){return!(r&Jt.Self||r&Jt.Host&&s)}class ur{constructor(s,c){this._tNode=s,this._lView=c}get(s,c,g){return rg(this._tNode,this._lView,s,g,c)}}function ag(){return new ur(Ge(),dt())}function cg(r){return qt(()=>{const s=r.prototype.constructor,c=s[Pi]||Hh(s),g=Object.prototype;let u=Object.getPrototypeOf(r.prototype).constructor;for(;u&&u!==g;){const d=u[Pi]||Hh(u);if(d&&d!==c)return d;u=Object.getPrototypeOf(u)}return d=>new d})}function Hh(r){return lt(r)?()=>{const s=Hh(W(r));return s&&s()}:wi(r)}function Fv(r){const s=r[1],c=s.type;return 2===c?s.declTNode:1===c?r[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lg(r){return function Lv(r,s){if("class"===s)return r.classes;if("style"===s)return r.styles;const c=r.attrs;if(c){const g=c.length;let u=0;for(;u<g;){const d=c[u];if(Eh(d))break;if(0===d)u+=2;else if("number"==typeof d)for(u++;u<g&&"string"==typeof c[u];)u++;else{if(d===s)return c[u+1];u+=2}}}return null}(Ge(),r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ts="__parameters__";function dr(r,s,c){return qt(()=>{const g=function qh(r){return function(...c){if(r){const g=r(...c);for(const u in g)this[u]=g[u]}}}(s);function u(...d){if(this instanceof u)return g.apply(this,d),this;const p=new u(...d);return m.annotation=p,m;function m(M,O,w){const k=M.hasOwnProperty(Ts)?M[Ts]:Object.defineProperty(M,Ts,{value:[]})[Ts];for(;k.length<=w;)k.push(null);return(k[w]=k[w]||[]).push(p),M}}return c&&(u.prototype=Object.create(c.prototype)),u.prototype.ngMetadataName=r,u.annotationCls=u,u})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pe{constructor(s,c){this._desc=s,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof c?this.__NG_ELEMENT_ID__=c:void 0!==c&&(this.\u0275prov=gn({token:this,providedIn:c.providedIn||"root",factory:c.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $e(r,s){void 0===s&&(s=r);for(let c=0;c<r.length;c++){let g=r[c];Array.isArray(g)?(s===r&&(s=r.slice(0,c)),$e(g,s)):s!==r&&s.push(g)}return s}function he(r,s){r.forEach(c=>Array.isArray(c)?he(c,s):s(c))}function At(r,s,c){s>=r.length?r.push(c):r.splice(s,0,c)}function Ye(r,s){return s>=r.length-1?r.pop():r.splice(s,1)[0]}function pn(r,s,c){let g=hr(r,s);return g>=0?r[1|g]=c:(g=~g,function Fn(r,s,c,g){let u=r.length;if(u==s)r.push(c,g);else if(1===u)r.push(g,r[0]),r[0]=c;else{for(u--,r.push(r[u-1],r[u]);u>s;)r[u]=r[u-2],u--;r[s]=c,r[s+1]=g}}(r,g,s,c)),g}function gg(r,s){const c=hr(r,s);if(c>=0)return r[1|c]}function hr(r,s){return function Do(r,s,c){let g=0,u=r.length>>c;for(;u!==g;){const d=g+(u-g>>1),p=r[d<<c];if(s===p)return d<<c;p>s?u=d:g=d+1}return~(u<<c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r,s,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ki={},ug="__NG_DI_FLAG__",Ss="ngTempTokenPath",dg=/\n/gm,hg="__source";let uc;function pr(r){const s=uc;return uc=r,s}function fg(r,s=Jt.Default){if(void 0===uc)throw new Ct(-203,!1);return null===uc?Ie(r,void 0,s):uc.get(r,s&Jt.Optional?null:void 0,s)}function Pe(r,s=Jt.Default){return(function ls(){return Ul}()||fg)(W(r),s)}function Qh(r,s=Jt.Default){return"number"!=typeof s&&(s=0|(s.optional&&8)|(s.host&&1)|(s.self&&2)|(s.skipSelf&&4)),Pe(r,s)}function Gh(r){const s=[];for(let c=0;c<r.length;c++){const g=W(r[c]);if(Array.isArray(g)){if(0===g.length)throw new Ct(900,!1);let u,d=Jt.Default;for(let p=0;p<g.length;p++){const m=g[p],M=Gv(m);"number"==typeof M?-1===M?u=m.token:d|=M:u=m}s.push(Pe(u,d))}else s.push(Pe(g))}return s}function Ls(r,s){return r[ug]=s,r.prototype[ug]=s,r}function Gv(r){return r[ug]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ns=Ls(dr("Optional"),8),Ai=Ls(dr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rs,vr,mc;function Xv(r){Rs=r}function To(r){return function wn(){if(void 0===vr&&(vr=null,ce.trustedTypes))try{vr=ce.trustedTypes.createPolicy("angular",{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r})}catch{}return vr}()?.createHTML(r)||r}function nC(r){return function Gi(){if(void 0===mc&&(mc=null,ce.trustedTypes))try{mc=ce.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r})}catch{}return mc}()?.createHTML(r)||r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Cr{constructor(s){this.changingThisBreaksApplicationSecurity=s}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class XO extends Cr{getTypeName(){return"HTML"}}class tb extends Cr{getTypeName(){return"Style"}}class eb extends Cr{getTypeName(){return"Script"}}class nb extends Cr{getTypeName(){return"URL"}}class oC extends Cr{getTypeName(){return"ResourceURL"}}function Gn(r){return r instanceof Cr?r.changingThisBreaksApplicationSecurity:r}function Mr(r,s){const c=function rC(r){return r instanceof Cr&&r.getTypeName()||null}(r);if(null!=c&&c!==s){if("ResourceURL"===c&&"URL"===s)return!0;throw new Error(`Required a safe ${s}, got a ${c} (see https://g.co/ng/security#xss)`)}return c===s}function Mg(r){return new XO(r)}function ib(r){return new tb(r)}function ob(r){return new eb(r)}function rb(r){return new nb(r)}function sb(r){return new oC(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ab{constructor(s){this.inertDocumentHelper=s}getInertBodyElement(s){s="<body><remove></remove>"+s;try{const c=(new window.DOMParser).parseFromString(To(s),"text/html").body;return null===c?this.inertDocumentHelper.getInertBodyElement(s):(c.removeChild(c.firstChild),c)}catch{return null}}}class cb{constructor(s){if(this.defaultDoc=s,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const c=this.inertDocument.createElement("html");this.inertDocument.appendChild(c);const g=this.inertDocument.createElement("body");c.appendChild(g)}}getInertBodyElement(s){const c=this.inertDocument.createElement("template");if("content"in c)return c.innerHTML=To(s),c;const g=this.inertDocument.createElement("body");return g.innerHTML=To(s),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(g),g}stripCustomNsAttrs(s){const c=s.attributes;for(let u=c.length-1;0<u;u--){const p=c.item(u).name;("xmlns:ns1"===p||0===p.indexOf("ns1:"))&&s.removeAttribute(p)}let g=s.firstChild;for(;g;)g.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(g),g=g.nextSibling}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const gb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function yr(r){return(r=String(r)).match(gb)?r:"unsafe:"+r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function di(r){const s={};for(const c of r.split(","))s[c]=!0;return s}function an(...r){const s={};for(const c of r)for(const g in c)c.hasOwnProperty(g)&&(s[g]=!0);return s}const aC=di("area,br,col,hr,img,wbr"),cC=di("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),lC=di("rp,rt"),yg=an(aC,an(cC,di("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),an(lC,di("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),an(lC,cC)),Og=di("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Wh=an(Og,di("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),di("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),db=di("script,style,template");class hb{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(s){let c=s.firstChild,g=!0;for(;c;)if(c.nodeType===Node.ELEMENT_NODE?g=this.startElement(c):c.nodeType===Node.TEXT_NODE?this.chars(c.nodeValue):this.sanitizedSomething=!0,g&&c.firstChild)c=c.firstChild;else for(;c;){c.nodeType===Node.ELEMENT_NODE&&this.endElement(c);let u=this.checkClobberedElement(c,c.nextSibling);if(u){c=u;break}c=this.checkClobberedElement(c,c.parentNode)}return this.buf.join("")}startElement(s){const c=s.nodeName.toLowerCase();if(!yg.hasOwnProperty(c))return this.sanitizedSomething=!0,!db.hasOwnProperty(c);this.buf.push("<"),this.buf.push(c);const g=s.attributes;for(let u=0;u<g.length;u++){const d=g.item(u),p=d.name,m=p.toLowerCase();if(!Wh.hasOwnProperty(m)){this.sanitizedSomething=!0;continue}let M=d.value;Og[m]&&(M=yr(M)),this.buf.push(" ",p,'="',gC(M),'"')}return this.buf.push(">"),!0}endElement(s){const c=s.nodeName.toLowerCase();yg.hasOwnProperty(c)&&!aC.hasOwnProperty(c)&&(this.buf.push("</"),this.buf.push(c),this.buf.push(">"))}chars(s){this.buf.push(gC(s))}checkClobberedElement(s,c){if(c&&(s.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${s.outerHTML}`);return c}}const fb=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,pb=/([^\#-~ |!])/g;function gC(r){return r.replace(/&/g,"&amp;").replace(fb,function(s){return"&#"+(1024*(s.charCodeAt(0)-55296)+(s.charCodeAt(1)-56320)+65536)+";"}).replace(pb,function(s){return"&#"+s.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let bg;function uC(r,s){let c=null;try{bg=bg||function sC(r){const s=new cb(r);return function lb(){try{return!!(new window.DOMParser).parseFromString(To(""),"text/html")}catch{return!1}}()?new ab(s):s}(r);let g=s?String(s):"";c=bg.getInertBodyElement(g);let u=5,d=g;do{if(0===u)throw new Error("Failed to sanitize html because the input is unstable");u--,g=d,d=c.innerHTML,c=bg.getInertBodyElement(g)}while(g!==d);return To((new hb).sanitizeChildren(Xh(c)||c))}finally{if(c){const g=Xh(c)||c;for(;g.firstChild;)g.removeChild(g.firstChild)}}}function Xh(r){return"content"in r&&function _b(r){return r.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===r.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)?r.content:null}var Ze=(()=>((Ze=Ze||{})[Ze.NONE=0]="NONE",Ze[Ze.HTML=1]="HTML",Ze[Ze.STYLE=2]="STYLE",Ze[Ze.SCRIPT=3]="SCRIPT",Ze[Ze.URL=4]="URL",Ze[Ze.RESOURCE_URL=5]="RESOURCE_URL",Ze))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dC(r){const s=Cc();return s?nC(s.sanitize(Ze.HTML,r)||""):Mr(r,"HTML")?nC(Gn(r)):uC(function _c(){return void 0!==Rs?Rs:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),gt(r))}function tf(r){const s=Cc();return s?s.sanitize(Ze.URL,r)||"":Mr(r,"URL")?Gn(r):yr(gt(r))}function Cc(){const r=dt();return r&&r[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ef=new pe("ENVIRONMENT_INITIALIZER"),fC=new pe("INJECTOR",-1),pC=new pe("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class _C{get(s,c=ki){if(c===ki){const g=new Error(`NullInjectorError: No provider for ${U(s)}!`);throw g.name="NullInjectorError",g}return c}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bb(...r){return{\u0275providers:mC(0,r)}}function mC(r,...s){const c=[],g=new Set;let u;return he(s,d=>{const p=d;nf(p,c,[],g)&&(u||(u=[]),u.push(p))}),void 0!==u&&vC(u,c),c}function vC(r,s){for(let c=0;c<r.length;c++){const{providers:u}=r[c];he(u,d=>{s.push(d)})}}function nf(r,s,c,g){if(!(r=W(r)))return!1;let u=null,d=ov(r);const p=!d&&ge(r);if(d||p){if(p&&!p.standalone)return!1;u=r}else{const M=r.ngModule;if(d=ov(M),!d)return!1;u=M}const m=g.has(u);if(p){if(m)return!1;if(g.add(u),p.dependencies){const M="function"==typeof p.dependencies?p.dependencies():p.dependencies;for(const O of M)nf(O,s,c,g)}}else{if(!d)return!1;{if(null!=d.imports&&!m){let O;g.add(u);try{he(d.imports,w=>{nf(w,s,c,g)&&(O||(O=[]),O.push(w))})}finally{}void 0!==O&&vC(O,s)}if(!m){const O=wi(u)||(()=>new u);s.push({provide:u,useFactory:O,deps:St},{provide:pC,useValue:u,multi:!0},{provide:ef,useValue:()=>Pe(u),multi:!0})}const M=d.providers;null==M||m||he(M,w=>{s.push(w)})}}return u!==r&&void 0!==r.providers}const Pb=E({provide:String,useValue:E});function rf(r){return null!==r&&"object"==typeof r&&Pb in r}function Or(r){return"function"==typeof r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const sf=new pe("Set Injector scope."),Pg={},wb={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let af;function xg(){return void 0===af&&(af=new _C),af}class br{}class yC extends br{constructor(s,c,g,u){super(),this.parent=c,this.source=g,this.scopes=u,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,wg(s,p=>this.processProvider(p)),this.records.set(fC,Us(void 0,this)),u.has("environment")&&this.records.set(br,Us(void 0,this));const d=this.records.get(sf);null!=d&&"string"==typeof d.value&&this.scopes.add(d.value),this.injectorDefTypes=new Set(this.get(pC.multi,St,Jt.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const s of this._ngOnDestroyHooks)s.ngOnDestroy();for(const s of this._onDestroyHooks)s()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(s){this._onDestroyHooks.push(s)}runInContext(s){this.assertNotDestroyed();const c=pr(this),g=In(void 0);try{return s()}finally{pr(c),In(g)}}get(s,c=ki,g=Jt.Default){this.assertNotDestroyed();const u=pr(this),d=In(void 0);try{if(!(g&Jt.SkipSelf)){let m=this.records.get(s);if(void 0===m){const M=function Eb(r){return"function"==typeof r||"object"==typeof r&&r instanceof pe}(s)&&Va(s);m=M&&this.injectableDefInScope(M)?Us(cf(s),Pg):null,this.records.set(s,m)}if(null!=m)return this.hydrate(s,m)}return(g&Jt.Self?xg():this.parent).get(s,c=g&Jt.Optional&&c===ki?null:c)}catch(p){if("NullInjectorError"===p.name){if((p[Ss]=p[Ss]||[]).unshift(U(s)),u)throw p;return function dc(r,s,c,g){const u=r[Ss];throw s[hg]&&u.unshift(s[hg]),r.message=function $v(r,s,c,g=null){r=r&&"\n"===r.charAt(0)&&"\u0275"==r.charAt(1)?r.slice(2):r;let u=U(s);if(Array.isArray(s))u=s.map(U).join(" -> ");else if("object"==typeof s){let d=[];for(let p in s)if(s.hasOwnProperty(p)){let m=s[p];d.push(p+":"+("string"==typeof m?JSON.stringify(m):U(m)))}u=`{${d.join(", ")}}`}return`${c}${g?"("+g+")":""}[${u}]: ${r.replace(dg,"\n  ")}`}("\n"+r.message,u,c,g),r.ngTokenPath=u,r[Ss]=null,r}(p,s,"R3InjectorError",this.source)}throw p}finally{In(d),pr(u)}}resolveInjectorInitializers(){const s=pr(this),c=In(void 0);try{const g=this.get(ef.multi,St,Jt.Self);for(const u of g)u()}finally{pr(s),In(c)}}toString(){const s=[],c=this.records;for(const g of c.keys())s.push(U(g));return`R3Injector[${s.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ct(205,!1)}processProvider(s){let c=Or(s=W(s))?s:W(s&&s.provide);const g=function kb(r){return rf(r)?Us(void 0,r.useValue):Us(OC(r),Pg)}(s);if(Or(s)||!0!==s.multi)this.records.get(c);else{let u=this.records.get(c);u||(u=Us(void 0,Pg,!0),u.factory=()=>Gh(u.multi),this.records.set(c,u)),c=s,u.multi.push(s)}this.records.set(c,g)}hydrate(s,c){return c.value===Pg&&(c.value=wb,c.value=c.factory()),"object"==typeof c.value&&c.value&&function Tb(r){return null!==r&&"object"==typeof r&&"function"==typeof r.ngOnDestroy}(c.value)&&this._ngOnDestroyHooks.add(c.value),c.value}injectableDefInScope(s){if(!s.providedIn)return!1;const c=W(s.providedIn);return"string"==typeof c?"any"===c||this.scopes.has(c):this.injectorDefTypes.has(c)}}function cf(r){const s=Va(r),c=null!==s?s.factory:wi(r);if(null!==c)return c;if(r instanceof pe)throw new Ct(204,!1);if(r instanceof Function)return function Db(r){const s=r.length;if(s>0)throw function Zn(r,s){const c=[];for(let g=0;g<r;g++)c.push(s);return c}(s,"?"),new Ct(204,!1);const c=function nv(r){const s=r&&(r[un]||r[ah]);if(s){const c=function iv(r){if(r.hasOwnProperty("name"))return r.name;const s=(""+r).match(/^function\s*([^\s(]+)/);return null===s?"":s[1]}(r);return console.warn(`DEPRECATED: DI is instantiating a token "${c}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${c}" class.`),s}return null}(r);return null!==c?()=>c.factory(r):()=>new r}(r);throw new Ct(204,!1)}function OC(r,s,c){let g;if(Or(r)){const u=W(r);return wi(u)||cf(u)}if(rf(r))g=()=>W(r.useValue);else if(function MC(r){return!(!r||!r.useFactory)}(r))g=()=>r.useFactory(...Gh(r.deps||[]));else if(function CC(r){return!(!r||!r.useExisting)}(r))g=()=>Pe(W(r.useExisting));else{const u=W(r&&(r.useClass||r.provide));if(!function Ab(r){return!!r.deps}(r))return wi(u)||cf(u);g=()=>new u(...Gh(r.deps))}return g}function Us(r,s,c=!1){return{factory:r,value:s,multi:c?[]:void 0}}function Sb(r){return!!r.\u0275providers}function wg(r,s){for(const c of r)Array.isArray(c)?wg(c,s):Sb(c)?wg(c.\u0275providers,s):s(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bC{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Nb{resolveComponentFactory(s){throw function Lb(r){const s=Error(`No component factory found for ${U(r)}. Did you add it to @NgModule.entryComponents?`);return s.ngComponent=r,s}(s)}}let Mc=(()=>{class r{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.NULL=new Nb,r})();function Zb(){return js(Ge(),dt())}function js(r,s){return new yc(de(r,s))}let yc=(()=>{class r{constructor(c){this.nativeElement=c}}return r.__NG_ELEMENT_ID__=Zb,r})();function Fb(r){return r instanceof yc?r.nativeElement:r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xC{}let Rb=(()=>{class r{}return r.__NG_ELEMENT_ID__=()=>function Ub(){const r=dt(),c=xn(Ge().index,r);return(Be(c)?c:r)[11]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),r})(),jb=(()=>{class r{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.\u0275prov=gn({token:r,providedIn:"root",factory:()=>null}),r})();class wC{constructor(s){this.full=s,this.major=s.split(".")[0],this.minor=s.split(".")[1],this.patch=s.split(".").slice(2).join(".")}}const Vb=new wC("14.2.6"),lf={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ff(r){return r.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Oc{constructor(){this._console=console}handleError(s){const c=this._findOriginalError(s);this._console.error("ERROR",s),c&&this._console.error("ORIGINAL ERROR",c)}_findOriginalError(s){let c=s&&ff(s);for(;c&&ff(c);)c=ff(c);return c||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const pf=new Map;let Xb=0;const $i="__ngContext__";function cn(r,s){Be(s)?(r[$i]=s[20],function eP(r){pf.set(r[20],r)}(s)):r[$i]=s}function hi(r){return r instanceof Function?r():r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var $n=(()=>(($n=$n||{})[$n.Important=1]="Important",$n[$n.DashCase=2]="DashCase",$n))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ag(r,s){return undefined(r,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xr(r){const s=r[3];return ci(s)?s[3]:s}function Pf(r){return Tg(r[13])}function xf(r){return Tg(r[4])}function Tg(r){for(;null!==r&&!ci(r);)r=r[4];return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wr(r,s,c,g,u){if(null!=g){let d,p=!1;ci(g)?d=g:Be(g)&&(p=!0,g=g[0]);const m=Le(g);0===r&&null!==c?null==u?If(s,c,m):Ki(s,c,m,u||null,!0):1===r&&null!==c?Ki(s,c,m,u||null,!0):2===r?function Ng(r,s,c){const g=bc(r,s);g&&function JC(r,s,c,g){r.removeChild(s,c,g)}(r,g,s,c)}(s,m,p):3===r&&s.destroyNode(m),null!=d&&function pP(r,s,c,g,u){const d=c[7];d!==Le(c)&&wr(s,r,g,d,u);for(let m=10;m<c.length;m++){const M=c[m];zs(M[1],M,r,s,g,d)}}(s,r,d,c,u)}}function kf(r,s,c){return r.createElement(s,c)}function Tf(r,s){const c=r[9],g=c.indexOf(s),u=s[3];512&s[2]&&(s[2]&=-513,Yl(u,-1)),c.splice(g,1)}function Eg(r,s){if(r.length<=10)return;const c=10+s,g=r[c];if(g){const u=g[17];null!==u&&u!==r&&Tf(u,g),s>0&&(r[c-1][4]=g[4]);const d=Ye(r,10+s);!function aP(r,s){zs(r,s,s[11],2,null,null),s[0]=null,s[6]=null}(g[1],g);const p=d[19];null!==p&&p.detachView(d[1]),g[3]=null,g[4]=null,g[2]&=-65}return g}function Ef(r,s){if(!(128&s[2])){const c=s[11];c.destroyNode&&zs(r,s,c,3,null,null),function gP(r){let s=r[13];if(!s)return Sg(r[1],r);for(;s;){let c=null;if(Be(s))c=s[13];else{const g=s[10];g&&(c=g)}if(!c){for(;s&&!s[4]&&s!==r;)Be(s)&&Sg(s[1],s),s=s[3];null===s&&(s=r),Be(s)&&Sg(s[1],s),c=s&&s[4]}s=c}}(s)}}function Sg(r,s){if(!(128&s[2])){s[2]&=-65,s[2]|=128,function qC(r,s){let c;if(null!=r&&null!=(c=r.destroyHooks))for(let g=0;g<c.length;g+=2){const u=s[c[g]];if(!(u instanceof Ps)){const d=c[g+1];if(Array.isArray(d))for(let p=0;p<d.length;p+=2){const m=u[d[p]],M=d[p+1];try{M.call(m)}finally{}}else try{d.call(u)}finally{}}}}(r,s),function HC(r,s){const c=r.cleanup,g=s[7];let u=-1;if(null!==c)for(let d=0;d<c.length-1;d+=2)if("string"==typeof c[d]){const p=c[d+1],m="function"==typeof p?p(s):Le(s[p]),M=g[u=c[d+2]],O=c[d+3];"boolean"==typeof O?m.removeEventListener(c[d],M,O):O>=0?g[u=O]():g[u=-O].unsubscribe(),d+=2}else{const p=g[u=c[d+1]];c[d].call(p)}if(null!==g){for(let d=u+1;d<g.length;d++)(0,g[d])();s[7]=null}}(r,s),1===s[1].type&&s[11].destroy();const c=s[17];if(null!==c&&ci(s[3])){c!==s[3]&&Tf(c,s);const g=s[19];null!==g&&g.detachView(r)}!function IC(r){pf.delete(r[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)}}function Sf(r,s,c){return function Ig(r,s,c){let g=s;for(;null!==g&&40&g.type;)g=(s=g).parent;if(null===g)return c[0];if(2&g.flags){const u=r.data[g.directiveStart].encapsulation;if(u===Ln.None||u===Ln.Emulated)return null}return de(g,c)}(r,s.parent,c)}function Ki(r,s,c,g,u){r.insertBefore(s,c,g,u)}function If(r,s,c){r.appendChild(s,c)}function Lf(r,s,c,g,u){null!==g?Ki(r,s,c,g,u):If(r,s,c)}function bc(r,s){return r.parentNode(s)}let QC=function zC(r,s,c){return 40&r.type?de(r,c):null};function Js(r,s,c,g){const u=Sf(r,g,s),d=s[11],m=function BC(r,s,c){return QC(r,s,c)}(g.parent||s[6],g,s);if(null!=u)if(Array.isArray(c))for(let M=0;M<c.length;M++)Lf(d,u,c[M],m,!1);else Lf(d,u,c,m,!1)}function Bs(r,s){if(null!==s){const c=s.type;if(3&c)return de(s,r);if(4&c)return Lg(-1,r[s.index]);if(8&c){const g=s.child;if(null!==g)return Bs(r,g);{const u=r[s.index];return ci(u)?Lg(-1,u):Le(u)}}if(32&c)return Ag(s,r)()||Le(r[s.index]);{const g=Zf(r,s);return null!==g?Array.isArray(g)?g[0]:Bs(xr(r[16]),g):Bs(r,s.next)}}return null}function Zf(r,s){return null!==s?r[16][6].projection[s.projection]:null}function Lg(r,s){const c=10+r+1;if(c<s.length){const g=s[c],u=g[1].firstChild;if(null!==u)return Bs(g,u)}return s[7]}function Wi(r,s,c,g,u,d,p){for(;null!=c;){const m=g[c.index],M=c.type;if(p&&0===s&&(m&&cn(Le(m),g),c.flags|=4),64!=(64&c.flags))if(8&M)Wi(r,s,c.child,g,u,d,!1),wr(s,r,u,m,d);else if(32&M){const O=Ag(c,g);let w;for(;w=O();)wr(s,r,u,w,d);wr(s,r,u,m,d)}else 16&M?Ff(r,s,g,c,u,d):wr(s,r,u,m,d);c=p?c.projectionNext:c.next}}function zs(r,s,c,g,u,d){Wi(c,g,r.firstChild,s,u,d,!1)}function Ff(r,s,c,g,u,d){const p=c[16],M=p[6].projection[g.projection];if(Array.isArray(M))for(let O=0;O<M.length;O++)wr(s,r,u,M[O],d);else Wi(r,s,M,p[3],u,d,!0)}function $C(r,s,c){r.setAttribute(s,"style",c)}function Zg(r,s,c){""===c?r.removeAttribute(s,"class"):r.setAttribute(s,"class",c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qs(r,s,c){let g=r.length;for(;;){const u=r.indexOf(s,c);if(-1===u)return u;if(0===u||r.charCodeAt(u-1)<=32){const d=s.length;if(u+d===g||r.charCodeAt(u+d)<=32)return u}c=u+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const YC="ng-template";function Rf(r,s,c){let g=0;for(;g<r.length;){let u=r[g++];if(c&&"class"===u){if(u=r[g],-1!==Qs(u.toLowerCase(),s,0))return!0}else if(1===u){for(;g<r.length&&"string"==typeof(u=r[g++]);)if(u.toLowerCase()===s)return!0;return!1}}return!1}function Fg(r){return 4===r.type&&r.value!==YC}function Rg(r,s,c){return s===(4!==r.type||c?r.value:YC)}function KC(r,s,c){let g=4;const u=r.attrs||[],d=function _n(r){for(let s=0;s<r.length;s++)if(Eh(r[s]))return s;return r.length}(u);let p=!1;for(let m=0;m<s.length;m++){const M=s[m];if("number"!=typeof M){if(!p)if(4&g){if(g=2|1&g,""!==M&&!Rg(r,M,c)||""===M&&1===s.length){if(Yn(g))return!1;p=!0}}else{const O=8&g?M:s[++m];if(8&g&&null!==r.attrs){if(!Rf(r.attrs,O,c)){if(Yn(g))return!1;p=!0}continue}const k=WC(8&g?"class":M,u,Fg(r),c);if(-1===k){if(Yn(g))return!1;p=!0;continue}if(""!==O){let N;N=k>d?"":u[k+1].toLowerCase();const G=8&g?N:null;if(G&&-1!==Qs(G,O,0)||2&g&&O!==N){if(Yn(g))return!1;p=!0}}}}else{if(!p&&!Yn(g)&&!Yn(M))return!1;if(p&&Yn(M))continue;p=!1,g=M|1&g}}return Yn(g)||p}function Yn(r){return 0==(1&r)}function WC(r,s,c,g){if(null===s)return-1;let u=0;if(g||!c){let d=!1;for(;u<s.length;){const p=s[u];if(p===r)return u;if(3===p||6===p)d=!0;else{if(1===p||2===p){let m=s[++u];for(;"string"==typeof m;)m=s[++u];continue}if(4===p)break;if(0===p){u+=4;continue}}u+=d?1:2}return-1}return function Ug(r,s){let c=r.indexOf(4);if(c>-1)for(c++;c<r.length;){const g=r[c];if("number"==typeof g)return-1;if(g===s)return c;c++}return-1}(s,r)}function Dr(r,s,c=!1){for(let g=0;g<s.length;g++)if(KC(r,s[g],c))return!0;return!1}function jg(r,s){return r?":not("+s.trim()+")":s}function Pc(r){let s=r[0],c=1,g=2,u="",d=!1;for(;c<r.length;){let p=r[c];if("string"==typeof p)if(2&g){const m=r[++c];u+="["+p+(m.length>0?'="'+m+'"':"")+"]"}else 8&g?u+="."+p:4&g&&(u+=" "+p);else""!==u&&!Yn(p)&&(s+=jg(d,u),u=""),g=p,d=d||!Yn(g);c++}return""!==u&&(s+=jg(d,u)),s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zt={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xc(r){wc(ne(),dt(),fn()+r,!1)}function wc(r,s,c,g){if(!g)if(3==(3&s[2])){const d=r.preOrderCheckHooks;null!==d&&cr(s,d,c)}else{const d=r.preOrderHooks;null!==d&&bs(s,d,0,c)}Bi(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gs(r,s=null,c=null,g){const u=zf(r,s,c,g);return u.resolveInjectorInitializers(),u}function zf(r,s=null,c=null,g,u=new Set){const d=[c||St,bb(r)];return g=g||("object"==typeof r?void 0:U(r)),new yC(d,s||xg(),g||null,u)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Ti=(()=>{class r{static create(c,g){if(Array.isArray(c))return Gs({name:""},g,c,"");{const u=c.name??"";return Gs({name:u},c.parent,c.providers,u)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.THROW_IF_NOT_FOUND=ki,r.NULL=new _C,r.\u0275prov=gn({token:r,providedIn:"any",factory:()=>Pe(fC)}),r.__NG_ELEMENT_ID__=-1,r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Sr(r,s=Jt.Default){const c=dt();return null===c?Pe(r,s):rg(Ge(),c,W(r),s)}function uM(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qg(r,s){return r<<17|s<<2}function Kn(r){return r>>17&32767}function Xf(r){return 2|r}function Xi(r){return(131068&r)>>2}function tp(r,s){return-131069&r|s<<2}function ep(r){return 1|r}function Xg(r,s){const c=r.contentQueries;if(null!==c)for(let g=0;g<c.length;g+=2){const u=c[g],d=c[g+1];if(-1!==d){const p=r.data[d];bh(u),p.contentQueries(2,s[d],d)}}}function Zc(r,s,c,g,u,d,p,m,M,O,w){const k=s.blueprint.slice();return k[0]=u,k[2]=76|g,(null!==w||r&&1024&r[2])&&(k[2]|=1024),pv(k),k[3]=k[15]=r,k[8]=c,k[10]=p||r&&r[10],k[11]=m||r&&r[11],k[12]=M||r&&r[12]||null,k[9]=O||r&&r[9]||null,k[6]=d,k[20]=function tP(){return Xb++}(),k[21]=w,k[16]=2==s.type?r[16]:k,k}function Re(r,s,c,g,u){let d=r.data[s];if(null===d)d=function lp(r,s,c,g,u){const d=Mv(),p=Wl(),M=r.data[s]=function fp(r,s,c,g,u,d){return{type:c,index:g,insertBeforeIndex:null,injectorIndex:s?s.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:u,attrs:d,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:s,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,p?d:d&&d.parent,c,s,g,u);return null===r.firstChild&&(r.firstChild=M),null!==d&&(p?null==d.child&&null!==M.parent&&(d.child=M):null===d.next&&(d.next=M)),M}(r,s,c,g,u),function HO(){return Qt.lFrame.inI18n}()&&(d.flags|=64);else if(64&d.type){d.type=c,d.value=g,d.attrs=u;const p=function rr(){const r=Qt.lFrame,s=r.currentTNode;return r.isParent?s:s.parent}();d.injectorIndex=null===p?-1:p.injectorIndex}return gi(d,!0),d}function Ir(r,s,c,g){if(0===c)return-1;const u=s.length;for(let d=0;d<c;d++)s.push(g),r.blueprint.push(g),r.data.push(null);return u}function gp(r,s,c){tg(s);try{const g=r.viewQuery;null!==g&&Rn(1,g,c);const u=r.template;null!==u&&up(r,s,u,1,c),r.firstCreatePass&&(r.firstCreatePass=!1),r.staticContentQueries&&Xg(r,s),r.staticViewQueries&&Rn(2,r.viewQuery,c);const d=r.components;null!==d&&function CM(r,s){for(let c=0;c<s.length;c++)yp(r,s[c])}(s,d)}catch(g){throw r.firstCreatePass&&(r.incompleteFirstPass=!0,r.firstCreatePass=!1),g}finally{s[2]&=-5,eg()}}function tu(r,s,c,g){const u=s[2];if(128!=(128&u)){tg(s);try{pv(s),function bv(r){return Qt.lFrame.bindingIndex=r}(r.bindingStartIndex),null!==c&&up(r,s,c,2,g);const p=3==(3&u);if(p){const O=r.preOrderCheckHooks;null!==O&&cr(s,O,null)}else{const O=r.preOrderHooks;null!==O&&bs(s,O,0,null),nc(s,0)}if(function Mp(r){for(let s=Pf(r);null!==s;s=xf(s)){if(!s[2])continue;const c=s[9];for(let g=0;g<c.length;g++){const u=c[g],d=u[3];0==(512&u[2])&&Yl(d,1),u[2]|=512}}}(s),function gu(r){for(let s=Pf(r);null!==s;s=xf(s))for(let c=10;c<s.length;c++){const g=s[c],u=g[1];Ka(g)&&tu(u,g,u.template,g[8])}}(s),null!==r.contentQueries&&Xg(r,s),p){const O=r.contentCheckHooks;null!==O&&cr(s,O)}else{const O=r.contentHooks;null!==O&&bs(s,O,1),nc(s,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function DP(r,s){const c=r.hostBindingOpCodes;if(null!==c)try{for(let g=0;g<c.length;g++){const u=c[g];if(u<0)Bi(~u);else{const d=u,p=c[++g],m=c[++g];qO(p,d),m(2,s[d])}}}finally{Bi(-1)}}(r,s);const m=r.components;null!==m&&function vM(r,s){for(let c=0;c<s.length;c++)DM(r,s[c])}(s,m);const M=r.viewQuery;if(null!==M&&Rn(2,M,g),p){const O=r.viewCheckHooks;null!==O&&cr(s,O)}else{const O=r.viewHooks;null!==O&&bs(s,O,2),nc(s,2)}!0===r.firstUpdatePass&&(r.firstUpdatePass=!1),s[2]&=-41,512&s[2]&&(s[2]&=-513,Yl(s[3],-1))}finally{eg()}}}function up(r,s,c,g,u){const d=fn(),p=2&g;try{Bi(-1),p&&s.length>22&&wc(r,s,22,!1),c(g,u)}finally{Bi(d)}}function dp(r,s,c){if(za(s)){const u=s.directiveEnd;for(let d=s.directiveStart;d<u;d++){const p=r.data[d];p.contentQueries&&p.contentQueries(1,c[d],d)}}}function eu(r,s,c){!vh()||(function ru(r,s,c,g){const u=c.directiveStart,d=c.directiveEnd;r.firstCreatePass||gr(c,s),cn(g,s);const p=c.initialInputs;for(let m=u;m<d;m++){const M=r.data[m],O=qn(M);O&&Cp(s,c,M);const w=lc(s,r,m,c);cn(w,s),null!==p&&wM(0,m-u,w,M,0,p),O&&(xn(c.index,s)[8]=w)}}(r,s,c,de(c,s)),128==(128&c.flags)&&function su(r,s,c){const g=c.directiveStart,u=c.directiveEnd,d=c.index,p=function Pv(){return Qt.lFrame.currentDirectiveIndex}();try{Bi(d);for(let m=g;m<u;m++){const M=r.data[m],O=s[m];Xl(m),(null!==M.hostBindings||0!==M.hostVars||null!==M.hostAttrs)&&mp(M,O)}}finally{Bi(-1),Xl(p)}}(r,s,c))}function hp(r,s,c=de){const g=s.localNames;if(null!==g){let u=s.index+1;for(let d=0;d<g.length;d+=2){const p=g[d+1],m=-1===p?c(s,r):r[p];r[u++]=m}}}function Lr(r){const s=r.tView;return null===s||s.incompleteFirstPass?r.tView=nu(1,null,r.template,r.decls,r.vars,r.directiveDefs,r.pipeDefs,r.viewQuery,r.schemas,r.consts):s}function nu(r,s,c,g,u,d,p,m,M,O){const w=22+g,k=w+u,N=function iu(r,s){const c=[];for(let g=0;g<s;g++)c.push(g<r?null:zt);return c}(w,k),G="function"==typeof O?O():O;return N[1]={type:r,blueprint:N,template:c,queries:null,viewQuery:m,declTNode:s,data:N.slice().fill(null,w),bindingStartIndex:w,expandoStartIndex:k,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof d?d():d,pipeRegistry:"function"==typeof p?p():p,firstChild:null,schemas:M,consts:G,incompleteFirstPass:!1}}function en(r,s,c,g){const u=jc(s);null===c?u.push(g):(u.push(c),r.firstCreatePass&&Op(r).push(g,u.length-1))}function nn(r,s,c){for(let g in r)if(r.hasOwnProperty(g)){const u=r[g];(c=null===c?{}:c).hasOwnProperty(g)?c[g].push(s,u):c[g]=[s,u]}return c}function ou(r,s){const g=s.directiveEnd,u=r.data,d=s.attrs,p=[];let m=null,M=null;for(let O=s.directiveStart;O<g;O++){const w=u[O],k=w.inputs,N=null===d||Fg(s)?null:Fc(k,d);p.push(N),m=nn(k,O,m),M=nn(w.outputs,O,M)}null!==m&&(m.hasOwnProperty("class")&&(s.flags|=16),m.hasOwnProperty("style")&&(s.flags|=32)),s.initialInputs=p,s.inputs=m,s.outputs=M}function kn(r,s,c,g,u,d,p,m){const M=de(s,c);let w,O=s.inputs;!m&&null!=O&&(w=O[g])?(no(r,c,w,g,u),Qa(s)&&pp(c,s.index)):3&s.type&&(g=function yM(r){return"class"===r?"className":"for"===r?"htmlFor":"formaction"===r?"formAction":"innerHtml"===r?"innerHTML":"readonly"===r?"readOnly":"tabindex"===r?"tabIndex":r}(g),u=null!=p?p(u,s.value||"",g):u,d.setProperty(M,g,u))}function pp(r,s){const c=xn(s,r);16&c[2]||(c[2]|=32)}function eo(r,s,c,g){let u=!1;if(vh()){const d=function bM(r,s,c){const g=r.directiveRegistry;let u=null;if(g)for(let d=0;d<g.length;d++){const p=g[d];Dr(c,p.selectors,!1)&&(u||(u=[]),og(gr(c,s),r,p.type),qn(p)?(au(r,c),u.unshift(p)):u.push(p))}return u}(r,s,c),p=null===g?null:{"":-1};if(null!==d){u=!0,vp(c,r.data.length,d.length);for(let w=0;w<d.length;w++){const k=d[w];k.providersResolver&&k.providersResolver(k)}let m=!1,M=!1,O=Ir(r,s,d.length,null);for(let w=0;w<d.length;w++){const k=d[w];c.mergedAttrs=ws(c.mergedAttrs,k.hostAttrs),cu(r,c,s,O,k),xM(O,k,p),null!==k.contentQueries&&(c.flags|=8),(null!==k.hostBindings||null!==k.hostAttrs||0!==k.hostVars)&&(c.flags|=128);const N=k.type.prototype;!m&&(N.ngOnChanges||N.ngOnInit||N.ngDoCheck)&&((r.preOrderHooks||(r.preOrderHooks=[])).push(c.index),m=!0),!M&&(N.ngOnChanges||N.ngDoCheck)&&((r.preOrderCheckHooks||(r.preOrderCheckHooks=[])).push(c.index),M=!0),O++}ou(r,c)}p&&function PM(r,s,c){if(s){const g=r.localNames=[];for(let u=0;u<s.length;u+=2){const d=c[s[u+1]];if(null==d)throw new Ct(-301,!1);g.push(s[u],d)}}}(c,g,p)}return c.mergedAttrs=ws(c.mergedAttrs,c.attrs),u}function Si(r,s,c,g,u,d){const p=d.hostBindings;if(p){let m=r.hostBindingOpCodes;null===m&&(m=r.hostBindingOpCodes=[]);const M=~s.index;(function kP(r){let s=r.length;for(;s>0;){const c=r[--s];if("number"==typeof c&&c<0)return c}return 0})(m)!=M&&m.push(M),m.push(g,u,p)}}function mp(r,s){null!==r.hostBindings&&r.hostBindings(1,s)}function au(r,s){s.flags|=2,(r.components||(r.components=[])).push(s.index)}function xM(r,s,c){if(c){if(s.exportAs)for(let g=0;g<s.exportAs.length;g++)c[s.exportAs[g]]=r;qn(s)&&(c[""]=r)}}function vp(r,s,c){r.flags|=1,r.directiveStart=s,r.directiveEnd=s+c,r.providerIndexes=s}function cu(r,s,c,g,u){r.data[g]=u;const d=u.factory||(u.factory=wi(u.type)),p=new Ps(d,qn(u),Sr);r.blueprint[g]=p,c[g]=p,Si(r,s,0,g,Ir(r,c,u.hostVars,zt),u)}function Cp(r,s,c){const g=de(s,r),u=Lr(c),d=r[10],p=Uc(r,Zc(r,u,null,c.onPush?32:16,g,s,d,d.createRenderer(g,c),null,null,null));r[s.index]=p}function fi(r,s,c,g,u,d){const p=de(r,s);!function Lo(r,s,c,g,u,d,p){if(null==d)r.removeAttribute(s,u,c);else{const m=null==p?gt(d):p(d,g||"",u);r.setAttribute(s,u,m,c)}}(s[11],p,d,r.value,c,g,u)}function wM(r,s,c,g,u,d){const p=d[s];if(null!==p){const m=g.setInput;for(let M=0;M<p.length;){const O=p[M++],w=p[M++],k=p[M++];null!==m?g.setInput(c,k,O,w):c[w]=k}}}function Fc(r,s){let c=null,g=0;for(;g<s.length;){const u=s[g];if(0!==u)if(5!==u){if("number"==typeof u)break;r.hasOwnProperty(u)&&(null===c&&(c=[]),c.push(u,r[u],s[g+1])),g+=2}else g+=2;else g+=4}return c}function lu(r,s,c,g){return new Array(r,!0,!1,s,null,0,g,c,null,null)}function DM(r,s){const c=xn(s,r);if(Ka(c)){const g=c[1];48&c[2]?tu(g,c,g.template,c[8]):c[5]>0&&Rc(c)}}function Rc(r){for(let g=Pf(r);null!==g;g=xf(g))for(let u=10;u<g.length;u++){const d=g[u];if(Ka(d))if(512&d[2]){const p=d[1];tu(p,d,p.template,d[8])}else d[5]>0&&Rc(d)}const c=r[1].components;if(null!==c)for(let g=0;g<c.length;g++){const u=xn(c[g],r);Ka(u)&&u[5]>0&&Rc(u)}}function yp(r,s){const c=xn(s,r),g=c[1];(function kM(r,s){for(let c=s.length;c<r.blueprint.length;c++)s.push(r.blueprint[c])})(g,c),gp(g,c,c[8])}function Uc(r,s){return r[13]?r[14][4]=s:r[13]=s,r[14]=s,s}function uu(r){for(;r;){r[2]|=32;const s=xr(r);if(_O(r)&&!s)return r;r=s}return null}function ea(r,s,c,g=!0){const u=s[10];u.begin&&u.begin();try{tu(r,s,r.template,c)}catch(p){throw g&&Pp(s,p),p}finally{u.end&&u.end()}}function Rn(r,s,c){bh(0),s(r,c)}function jc(r){return r[7]||(r[7]=[])}function Op(r){return r.cleanup||(r.cleanup=[])}function Pp(r,s){const c=r[9],g=c?c.get(Oc,null):null;g&&g.handleError(s)}function no(r,s,c,g,u){for(let d=0;d<c.length;){const p=c[d++],m=c[d++],M=s[p],O=r.data[p];null!==O.setInput?O.setInput(M,u,g,m):M[m]=u}}function Ii(r,s,c){const g=$l(s,r);!function Df(r,s,c){r.setValue(s,c)}(r[11],g,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wn(r,s,c){let g=c?r.styles:null,u=c?r.classes:null,d=0;if(null!==s)for(let p=0;p<s.length;p++){const m=s[p];"number"==typeof m?d=m:1==d?u=ct(u,m):2==d&&(g=ct(g,m+": "+s[++p]+";"))}c?r.styles=g:r.stylesWithoutHost=g,c?r.classes=u:r.classesWithoutHost=u}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function na(r,s,c,g,u=!1){for(;null!==c;){const d=s[c.index];if(null!==d&&g.push(Le(d)),ci(d))for(let m=10;m<d.length;m++){const M=d[m],O=M[1].firstChild;null!==O&&na(M[1],M,O,g)}const p=c.type;if(8&p)na(r,s,c.child,g);else if(32&p){const m=Ag(c,s);let M;for(;M=m();)g.push(M)}else if(16&p){const m=Zf(s,c);if(Array.isArray(m))g.push(...m);else{const M=xr(s[16]);na(M[1],M,m,g,!0)}}c=u?c.projectionNext:c.next}return g}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class je{constructor(s,c){this._lView=s,this._cdRefInjectingView=c,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const s=this._lView,c=s[1];return na(c,s,c.firstChild,[])}get context(){return this._lView[8]}set context(s){this._lView[8]=s}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const s=this._lView[3];if(ci(s)){const c=s[8],g=c?c.indexOf(this):-1;g>-1&&(Eg(s,g),Ye(c,g))}this._attachedToViewContainer=!1}Ef(this._lView[1],this._lView)}onDestroy(s){en(this._lView[1],this._lView,null,s)}markForCheck(){uu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){ea(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ct(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function lP(r,s){zs(r,s,s[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(s){if(this._attachedToViewContainer)throw new Ct(902,!1);this._appRef=s}}class io extends je{constructor(s){super(s),this._view=s}detectChanges(){const s=this._view;ea(s[1],s,s[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class du extends Mc{constructor(s){super(),this.ngModule=s}resolveComponentFactory(s){const c=ge(s);return new Zr(c,this.ngModule)}}function AM(r){const s=[];for(let c in r)r.hasOwnProperty(c)&&s.push({propName:r[c],templateName:c});return s}class wp{constructor(s,c){this.injector=s,this.parentInjector=c}get(s,c,g){const u=this.injector.get(s,lf,g);return u!==lf||c===lf?u:this.parentInjector.get(s,c,g)}}class Zr extends bC{constructor(s,c){super(),this.componentDef=s,this.ngModule=c,this.componentType=s.type,this.selector=function Uf(r){return r.map(Pc).join(",")}(s.selectors),this.ngContentSelectors=s.ngContentSelectors?s.ngContentSelectors:[],this.isBoundToModule=!!c}get inputs(){return AM(this.componentDef.inputs)}get outputs(){return AM(this.componentDef.outputs)}create(s,c,g,u){let d=(u=u||this.ngModule)instanceof br?u:u?.injector;d&&null!==this.componentDef.getStandaloneInjector&&(d=this.componentDef.getStandaloneInjector(d)||d);const p=d?new wp(s,d):s,m=p.get(xC,null);if(null===m)throw new Ct(407,!1);const M=p.get(jb,null),O=m.createRenderer(null,this.componentDef),w=this.componentDef.selectors[0][0]||"div",k=g?function MM(r,s,c){return r.selectRootElement(s,c===Ln.ShadowDom)}(O,g,this.componentDef.encapsulation):kf(m.createRenderer(null,this.componentDef),w,function xp(r){const s=r.toLowerCase();return"svg"===s?"svg":"math"===s?"math":null}(w)),N=this.componentDef.onPush?288:272,G=nu(0,null,null,1,0,null,null,null,null,null),nt=Zc(null,G,null,N,null,null,m,O,M,p,null);let ht,pt;tg(nt);try{const Mt=function Ap(r,s,c,g,u,d){const p=c[1];c[22]=r;const M=Re(p,22,2,"#host",null),O=M.mergedAttrs=s.hostAttrs;null!==O&&(Wn(M,O,!0),null!==r&&(rc(u,r,O),null!==M.classes&&Zg(u,r,M.classes),null!==M.styles&&$C(u,r,M.styles)));const w=g.createRenderer(r,s),k=Zc(c,Lr(s),null,s.onPush?32:16,c[22],M,g,w,d||null,null,null);return p.firstCreatePass&&(og(gr(M,c),p,s.type),au(p,M),vp(M,c.length,1)),Uc(c,k),c[22]=k}(k,this.componentDef,nt,m,O);if(k)if(g)rc(O,k,["ng-version",Vb.full]);else{const{attrs:Et,classes:ut}=function XC(r){const s=[],c=[];let g=1,u=2;for(;g<r.length;){let d=r[g];if("string"==typeof d)2===u?""!==d&&s.push(d,r[++g]):8===u&&c.push(d);else{if(!Yn(u))break;u=d}g++}return{attrs:s,classes:c}}(this.componentDef.selectors[0]);Et&&rc(O,k,Et),ut&&ut.length>0&&Zg(O,k,ut.join(" "))}if(pt=ms(G,22),void 0!==c){const Et=pt.projection=[];for(let ut=0;ut<this.ngContentSelectors.length;ut++){const Ut=c[ut];Et.push(null!=Ut?Array.from(Ut):null)}}ht=function Vc(r,s,c,g){const u=c[1],d=function OM(r,s,c){const g=Ge();r.firstCreatePass&&(c.providersResolver&&c.providersResolver(c),cu(r,g,s,Ir(r,s,1,null),c),ou(r,g));const u=lc(s,r,g.directiveStart,g);cn(u,s);const d=de(g,s);return d&&cn(d,s),u}(u,c,s);if(r[8]=c[8]=d,null!==g)for(const m of g)m(d,s);if(s.contentQueries){const m=Ge();s.contentQueries(1,d,m.directiveStart)}const p=Ge();return!u.firstCreatePass||null===s.hostBindings&&null===s.hostAttrs||(Bi(p.index),Si(c[1],p,0,p.directiveStart,p.directiveEnd,s),mp(s,d)),d}(Mt,this.componentDef,nt,[Tp]),gp(G,nt,null)}finally{eg()}return new kp(this.componentType,ht,js(pt,nt),nt,pt)}}class kp extends class Ib{}{constructor(s,c,g,u,d){super(),this.location=g,this._rootLView=u,this._tNode=d,this.instance=c,this.hostView=this.changeDetectorRef=new io(u),this.componentType=s}setInput(s,c){const g=this._tNode.inputs;let u;if(null!==g&&(u=g[s])){const d=this._rootLView;no(d[1],d,u,s,c),pp(d,this._tNode.index)}}get injector(){return new ur(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(s){this.hostView.onDestroy(s)}}function Tp(){const r=Ge();ar(dt()[1],r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hc(r){let s=function hu(r){return Object.getPrototypeOf(r.prototype).constructor}(r.type),c=!0;const g=[r];for(;s;){let u;if(qn(r))u=s.\u0275cmp||s.\u0275dir;else{if(s.\u0275cmp)throw new Ct(903,!1);u=s.\u0275dir}if(u){if(c){g.push(u);const p=r;p.inputs=fu(r.inputs),p.declaredInputs=fu(r.declaredInputs),p.outputs=fu(r.outputs);const m=u.hostBindings;m&&pu(r,m);const M=u.viewQuery,O=u.contentQueries;if(M&&Sp(r,M),O&&Ip(r,O),R(r.inputs,u.inputs),R(r.declaredInputs,u.declaredInputs),R(r.outputs,u.outputs),qn(u)&&u.data.animation){const w=r.data;w.animation=(w.animation||[]).concat(u.data.animation)}}const d=u.features;if(d)for(let p=0;p<d.length;p++){const m=d[p];m&&m.ngInherit&&m(r),m===Hc&&(c=!1)}}s=Object.getPrototypeOf(s)}!function Ep(r){let s=0,c=null;for(let g=r.length-1;g>=0;g--){const u=r[g];u.hostVars=s+=u.hostVars,u.hostAttrs=ws(u.hostAttrs,c=ws(c,u.hostAttrs))}}(g)}function fu(r){return r===Xo?{}:r===St?[]:r}function Sp(r,s){const c=r.viewQuery;r.viewQuery=c?(g,u)=>{s(g,u),c(g,u)}:s}function Ip(r,s){const c=r.contentQueries;r.contentQueries=c?(g,u,d)=>{s(g,u,d),c(g,u,d)}:s}function pu(r,s){const c=r.hostBindings;r.hostBindings=c?(g,u)=>{s(g,u),c(g,u)}:s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ia=null;function oo(){if(!ia){const r=ce.Symbol;if(r&&r.iterator)ia=r.iterator;else{const s=Object.getOwnPropertyNames(Map.prototype);for(let c=0;c<s.length;++c){const g=s[c];"entries"!==g&&"size"!==g&&Map.prototype[g]===Map.prototype.entries&&(ia=g)}}}return ia}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ro(r){return!!qc(r)&&(Array.isArray(r)||!(r instanceof Map)&&oo()in r)}function qc(r){return null!==r&&("function"==typeof r||"object"==typeof r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function on(r,s,c){return r[s]=c}function Fr(r,s){return r[s]}function Cn(r,s,c){return!Object.is(r[s],c)&&(r[s]=c,!0)}function Rr(r,s,c,g){const u=Cn(r,s,c);return Cn(r,s+1,g)||u}function No(r,s,c,g,u){const d=Rr(r,s,c,g);return Cn(r,s+2,u)||d}function Un(r,s,c,g,u,d){const p=Rr(r,s,c,g);return Rr(r,s+2,u,d)||p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oa(r,s,c,g){const u=dt();return Cn(u,Ms(),s)&&(ne(),fi(we(),u,r,s,c,g)),oa}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ur(r,s,c,g){return Cn(r,Ms(),c)?s+gt(c)+g:zt}function qr(r,s,c,g,u,d,p,m){const M=dt(),O=ne(),w=r+22,k=O.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Hr(r,s,c,g,u,d,p,m,M){const O=s.consts,w=Re(s,r,4,p||null,wo(O,m));eo(s,c,w,wo(O,M)),ar(s,w);const k=w.tViews=nu(2,w,g,u,d,s.directiveRegistry,s.pipeRegistry,null,s.schemas,O);return null!==s.queries&&(s.queries.template(s,w),k.queries=s.queries.embeddedTView(w)),w}(w,O,M,s,c,g,u,d,p):O.data[w];gi(k,!1);const N=M[11].createComment("");Js(O,M,N,k),cn(N,M),Uc(M,M[w]=lu(N,M,N,k)),Ga(k)&&eu(O,M,k),null!=p&&hp(M,k,m)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cu(r){return vs(function Mh(){return Qt.lFrame.contextLView}(),22+r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ga(r,s,c){const g=dt();return Cn(g,Ms(),s)&&kn(ne(),we(),g,r,s,g[11],c,!1),ga}function zc(r,s,c,g,u){const p=u?"class":"style";no(r,c,s.inputs[p],p,g)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ua(r,s,c,g){const u=dt(),d=ne(),p=22+r,m=u[11],M=u[p]=kf(m,s,function Os(){return Qt.lFrame.currentNamespace}()),O=d.firstCreatePass?function Qc(r,s,c,g,u,d,p){const m=s.consts,O=Re(s,r,2,u,wo(m,d));return eo(s,c,O,wo(m,p)),null!==O.attrs&&Wn(O,O.attrs,!1),null!==O.mergedAttrs&&Wn(O,O.mergedAttrs,!0),null!==s.queries&&s.queries.elementStart(s,O),O}(p,d,u,0,s,c,g):d.data[p];gi(O,!0);const w=O.mergedAttrs;null!==w&&rc(m,M,w);const k=O.classes;null!==k&&Zg(m,M,k);const N=O.styles;return null!==N&&$C(m,M,N),64!=(64&O.flags)&&Js(d,u,M,O),0===function _v(){return Qt.lFrame.elementDepthCount}()&&cn(M,u),function mv(){Qt.lFrame.elementDepthCount++}(),Ga(O)&&(eu(d,u,O),dp(d,O,u)),null!==g&&hp(u,O),ua}function da(){let r=Ge();Wl()?Cs():(r=r.parent,gi(r,!1));const s=r;!function jO(){Qt.lFrame.elementDepthCount--}();const c=ne();return c.firstCreatePass&&(ar(c,r),za(r)&&c.queries.elementEnd(r)),null!=s.classesWithoutHost&&function ng(r){return 0!=(16&r.flags)}(s)&&zc(c,s,dt(),s.classesWithoutHost,!0),null!=s.stylesWithoutHost&&function Av(r){return 0!=(32&r.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)&&zc(c,s,dt(),s.stylesWithoutHost,!1),da}function Gc(r,s,c,g){return ua(r,s,c,g),da(),Gc
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function yu(r,s,c){const g=dt(),u=ne(),d=r+22,p=u.firstCreatePass?function Mu(r,s,c,g,u){const d=s.consts,p=wo(d,g),m=Re(s,r,8,"ng-container",p);return null!==p&&Wn(m,p,!0),eo(s,c,m,wo(d,u)),null!==s.queries&&s.queries.elementStart(s,m),m}(d,u,g,s,c):u.data[d];gi(p,!0);const m=g[d]=g[11].createComment("");return Js(u,g,m,p),cn(m,g),Ga(p)&&(eu(u,g,p),dp(u,p,g)),null!=c&&hp(g,p),yu}function Ou(){let r=Ge();const s=ne();return Wl()?Cs():(r=r.parent,gi(r,!1)),s.firstCreatePass&&(ar(s,r),za(r)&&s.queries.elementEnd(r)),Ou}function LM(){return dt()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jr(r){return!!r&&"function"==typeof r.then}function Br(r){return!!r&&"function"==typeof r.subscribe}const ha=Br;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zr(r,s,c,g){const u=dt(),d=ne(),p=Ge();return function fa(r,s,c,g,u,d,p,m){const M=Ga(g),w=r.firstCreatePass&&Op(r),k=s[8],N=jc(s);let G=!0;if(3&g.type||m){const pt=de(g,s),Mt=m?m(pt):pt,Et=N.length,ut=m?re=>m(Le(re[g.index])):g.index;let Ut=null;if(!m&&M&&(Ut=function bu(r,s,c,g){const u=r.cleanup;if(null!=u)for(let d=0;d<u.length-1;d+=2){const p=u[d];if(p===c&&u[d+1]===g){const m=s[7],M=u[d+2];return m.length>M?m[M]:null}"string"==typeof p&&(d+=2)}return null}(r,s,u,g.index)),null!==Ut)(Ut.__ngLastListenerFn__||Ut).__ngNextListenerFn__=d,Ut.__ngLastListenerFn__=d,G=!1;else{d=zp(g,s,k,d,!1);const re=c.listen(Mt,u,d);N.push(d,re),w&&w.push(u,ut,Et,Et+1)}}else d=zp(g,s,k,d,!1);const nt=g.outputs;let ht;if(G&&null!==nt&&(ht=nt[u])){const pt=ht.length;if(pt)for(let Mt=0;Mt<pt;Mt+=2){const ye=s[ht[Mt]][ht[Mt+1]].subscribe(d),Ko=N.length;N.push(d,ye),w&&w.push(u,g.index,Ko,-(Ko+1))}}}(d,u,u[11],p,r,s,0,g),zr}function Bp(r,s,c,g){try{return!1!==c(g)}catch(u){return Pp(r,u),!1}}function zp(r,s,c,g,u){return function d(p){if(p===Function)return g;uu(2&r.flags?xn(r.index,s):s);let M=Bp(s,0,g,p),O=d.__ngNextListenerFn__;for(;O;)M=Bp(s,0,O,p)&&M,O=O.__ngNextListenerFn__;return u&&!1===M&&(p.preventDefault(),p.returnValue=!1),M}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pu(r=1){return function xh(r){return(Qt.lFrame.contextLView=function Dv(r,s){for(;r>0;)s=s[15],r--;return s}(r,Qt.lFrame.contextLView))[8]}(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gp(r,s,c){return $c(r,"",s,"",c),Gp}function $c(r,s,c,g,u){const d=dt(),p=Ur(d,s,c,g);return p!==zt&&kn(ne(),we(),d,r,p,d[11],u,!1),$c}function ku(r,s,c,g,u){const d=r[c+1],p=null===s;let m=g?Kn(d):Xi(d),M=!1;for(;0!==m&&(!1===M||p);){const w=r[m+1];Kp(r[m],s)&&(M=!0,r[m+1]=g?ep(w):Xf(w)),m=g?Kn(w):Xi(w)}M&&(r[c+1]=g?Xf(d):ep(d))}function Kp(r,s){return null===r||null==s||(Array.isArray(r)?r[1]:r)===s||!(!Array.isArray(r)||"string"!=typeof s)&&hr(r,s)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ve={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function UM(r){return r.substring(Ve.key,Ve.keyEnd)}function VM(r,s){const c=Ve.textEnd;return c===s?-1:(s=Ve.keyEnd=function Xp(r,s,c){for(;s<c&&r.charCodeAt(s)>32;)s++;return s}(r,Ve.key=s,c),Qr(r,s,c))}function Qr(r,s,c){for(;s<c&&r.charCodeAt(s)<=32;)s++;return s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gr(r,s,c){return ti(r,s,c,!1),Gr}function Tu(r,s){return ti(r,s,null,!0),Tu}function n_(r){jn(pn,Xn,r,!0)}function Xn(r,s){for(let c=function Wp(r){return function qM(r){Ve.key=0,Ve.keyEnd=0,Ve.value=0,Ve.valueEnd=0,Ve.textEnd=r.length}(r),VM(r,Qr(r,0,Ve.textEnd))}(s);c>=0;c=VM(s,c))pn(r,UM(s),!0)}function ti(r,s,c,g){const u=dt(),d=ne(),p=Ji(2);d.firstUpdatePass&&i_(d,r,p,g),s!==zt&&Cn(u,p,s)&&Nu(d,d.data[fn()],u,u[11],r,u[p+1]=function GM(r,s){return null==r||("string"==typeof s?r+=s:"object"==typeof r&&(r=U(Gn(r)))),r}(s,c),g,p)}function jn(r,s,c,g){const u=ne(),d=Ji(2);u.firstUpdatePass&&i_(u,null,d,g);const p=dt();if(c!==zt&&Cn(p,d,c)){const m=u.data[fn()];if(Ma(m,g)&&!Eu(u,d)){let M=g?m.classesWithoutHost:m.stylesWithoutHost;null!==M&&(c=ct(M,c||"")),zc(u,m,p,c,g)}else!function QM(r,s,c,g,u,d,p,m){u===zt&&(u=St);let M=0,O=0,w=0<u.length?u[0]:null,k=0<d.length?d[0]:null;for(;null!==w||null!==k;){const N=M<u.length?u[M+1]:void 0,G=O<d.length?d[O+1]:void 0;let ht,nt=null;w===k?(M+=2,O+=2,N!==G&&(nt=k,ht=G)):null===k||null!==w&&w<k?(M+=2,nt=w):(O+=2,nt=k,ht=G),null!==nt&&Nu(r,s,c,g,nt,ht,p,m),w=M<u.length?u[M]:null,k=O<d.length?d[O]:null}}(u,m,p,p[11],p[d+1],p[d+1]=function Iu(r,s,c){if(null==c||""===c)return St;const g=[],u=Gn(c);if(Array.isArray(u))for(let d=0;d<u.length;d++)r(g,u[d],!0);else if("object"==typeof u)for(const d in u)u.hasOwnProperty(d)&&r(g,d,u[d]);else"string"==typeof u&&s(g,u);return g}(r,s,c),g,d)}}function Eu(r,s){return s>=r.expandoStartIndex}function i_(r,s,c,g){const u=r.data;if(null===u[c+1]){const d=u[fn()],p=Eu(r,c);Ma(d,g)&&null===s&&!p&&(s=!1),s=function o_(r,s,c,g){const u=function Oh(r){const s=Qt.lFrame.currentDirectiveIndex;return-1===s?null:r[s]}(r);let d=g?s.residualClasses:s.residualStyles;if(null===u)0===(g?s.classBindings:s.styleBindings)&&(c=va(c=ma(null,r,s,c,g),s.attrs,g),d=null);else{const p=s.directiveStylingLast;if(-1===p||r[p]!==u)if(c=ma(u,r,s,c,g),null===d){let M=function BM(r,s,c){const g=c?s.classBindings:s.styleBindings;if(0!==Xi(g))return r[Kn(g)]}(r,s,g);void 0!==M&&Array.isArray(M)&&(M=ma(null,r,s,M[1],g),M=va(M,s.attrs,g),function Su(r,s,c,g){r[Kn(c?s.classBindings:s.styleBindings)]=g}(r,s,g,M))}else d=function zM(r,s,c){let g;const u=s.directiveEnd;for(let d=1+s.directiveStylingLast;d<u;d++)g=va(g,r[d].hostAttrs,c);return va(g,s.attrs,c)}(r,s,g)}return void 0!==d&&(g?s.residualClasses=d:s.residualStyles=d),c}(u,d,s,g),function pa(r,s,c,g,u,d){let p=d?s.classBindings:s.styleBindings,m=Kn(p),M=Xi(p);r[g]=c;let w,O=!1;if(Array.isArray(c)){const k=c;w=k[1],(null===w||hr(k,w)>0)&&(O=!0)}else w=c;if(u)if(0!==M){const N=Kn(r[m+1]);r[g+1]=Qg(N,m),0!==N&&(r[N+1]=tp(r[N+1],g)),r[m+1]=function dM(r,s){return 131071&r|s<<17}(r[m+1],g)}else r[g+1]=Qg(m,0),0!==m&&(r[m+1]=tp(r[m+1],g)),m=g;else r[g+1]=Qg(M,0),0===m?m=g:r[M+1]=tp(r[M+1],g),M=g;O&&(r[g+1]=Xf(r[g+1])),ku(r,w,g,!0),ku(r,w,g,!1),function Du(r,s,c,g,u){const d=u?r.residualClasses:r.residualStyles;null!=d&&"string"==typeof s&&hr(d,s)>=0&&(c[g+1]=ep(c[g+1]))}(s,w,r,g,d),p=Qg(m,M),d?s.classBindings=p:s.styleBindings=p}(u,d,s,c,p,g)}}function ma(r,s,c,g,u){let d=null;const p=c.directiveEnd;let m=c.directiveStylingLast;for(-1===m?m=c.directiveStart:m++;m<p&&(d=s[m],g=va(g,d.hostAttrs,u),d!==r);)m++;return null!==r&&(c.directiveStylingLast=m),g}function va(r,s,c){const g=c?1:2;let u=-1;if(null!==s)for(let d=0;d<s.length;d++){const p=s[d];"number"==typeof p?u=p:u===g&&(Array.isArray(r)||(r=void 0===r?[]:["",r]),pn(r,p,!!c||s[++d]))}return void 0===r?null:r}function Nu(r,s,c,g,u,d,p,m){if(!(3&s.type))return;const M=r.data,O=M[m+1];Ca(function hM(r){return 1==(1&r)}(O)?r_(M,s,c,u,Xi(O),p):void 0)||(Ca(d)||function Ks(r){return 2==(2&r)}(O)&&(d=r_(M,null,c,u,m,p)),function _P(r,s,c,g,u){if(s)u?r.addClass(c,g):r.removeClass(c,g);else{let d=-1===g.indexOf("-")?void 0:$n.DashCase;null==u?r.removeStyle(c,g,d):("string"==typeof u&&u.endsWith("!important")&&(u=u.slice(0,-10),d|=$n.Important),r.setStyle(c,g,u,d))}}(g,p,$l(fn(),c),u,d))}function r_(r,s,c,g,u,d){const p=null===s;let m;for(;u>0;){const M=r[u],O=Array.isArray(M),w=O?M[1]:M,k=null===w;let N=c[u+1];N===zt&&(N=k?St:void 0);let G=k?gg(N,g):w===g?N:void 0;if(O&&!Ca(G)&&(G=gg(M,g)),Ca(G)&&(m=G,p))return m;const nt=r[u+1];u=p?Kn(nt):Xi(nt)}if(null!==s){let M=d?s.residualClasses:s.residualStyles;null!=M&&(m=gg(M,g))}return m}function Ca(r){return void 0!==r}function Ma(r,s){return 0!=(r.flags&(s?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zo(r,s=""){const c=dt(),g=ne(),u=r+22,d=g.firstCreatePass?Re(g,u,1,s,null):g.data[u],p=c[u]=function wf(r,s){return r.createText(s)}(c[11],s);Js(g,c,p,d),gi(d,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zu(r){return ya("",r,""),Zu}function ya(r,s,c){const g=dt(),u=Ur(g,r,s,c);return u!==zt&&Ii(g,fn(),u),ya}function Fu(r,s,c,g,u){const d=dt(),p=function so(r,s,c,g,u,d){const m=Rr(r,qi(),c,u);return Ji(2),m?s+gt(c)+g+gt(u)+d:zt}(d,r,s,c,g,u);return p!==zt&&Ii(d,fn(),p),Fu}function s_(r,s,c,g,u,d,p){const m=dt(),M=function jr(r,s,c,g,u,d,p,m){const O=No(r,qi(),c,u,p);return Ji(3),O?s+gt(c)+g+gt(u)+d+gt(p)+m:zt}(m,r,s,c,g,u,d,p);return M!==zt&&Ii(m,fn(),M),s_}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wc(r,s,c){jn(pn,Xn,Ur(dt(),r,s,c),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _=void 0;var gy=["en",[["a","p"],["AM","PM"],_],[["AM","PM"],_,_],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],_,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],_,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",_,"{1} 'at' {0}",_],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function j(r){const c=Math.floor(Math.abs(r)),g=r.toString().replace(/^[^.]*\.?/,"").length;return 1===c&&0===g?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zi={};function $r(r){const s=function dy(r){return r.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r);let c=Fi(s);if(c)return c;const g=s.split("-")[0];if(c=Fi(g),c)return c;if("en"===g)return gy;throw new Ct(701,!1)}function __(r){return $r(r)[Tt.PluralCase]}function Fi(r){return r in Zi||(Zi[r]=ce.ng&&ce.ng.common&&ce.ng.common.locales&&ce.ng.common.locales[r]),Zi[r]}var Tt=(()=>((Tt=Tt||{})[Tt.LocaleId=0]="LocaleId",Tt[Tt.DayPeriodsFormat=1]="DayPeriodsFormat",Tt[Tt.DayPeriodsStandalone=2]="DayPeriodsStandalone",Tt[Tt.DaysFormat=3]="DaysFormat",Tt[Tt.DaysStandalone=4]="DaysStandalone",Tt[Tt.MonthsFormat=5]="MonthsFormat",Tt[Tt.MonthsStandalone=6]="MonthsStandalone",Tt[Tt.Eras=7]="Eras",Tt[Tt.FirstDayOfWeek=8]="FirstDayOfWeek",Tt[Tt.WeekendRange=9]="WeekendRange",Tt[Tt.DateFormat=10]="DateFormat",Tt[Tt.TimeFormat=11]="TimeFormat",Tt[Tt.DateTimeFormat=12]="DateTimeFormat",Tt[Tt.NumberSymbols=13]="NumberSymbols",Tt[Tt.NumberFormats=14]="NumberFormats",Tt[Tt.CurrencyCode=15]="CurrencyCode",Tt[Tt.CurrencySymbol=16]="CurrencySymbol",Tt[Tt.CurrencyName=17]="CurrencyName",Tt[Tt.Currencies=18]="Currencies",Tt[Tt.Directionality=19]="Directionality",Tt[Tt.PluralCase=20]="PluralCase",Tt[Tt.ExtraData=21]="ExtraData",Tt))();const Ro="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Uo=Ro;function ed(r,s,c,g,u){if(r=W(r),Array.isArray(r))for(let d=0;d<r.length;d++)ed(r[d],s,c,g,u);else{const d=ne(),p=dt();let m=Or(r)?r:W(r.provide),M=OC(r);const O=Ge(),w=1048575&O.providerIndexes,k=O.directiveStart,N=O.providerIndexes>>20;if(Or(r)||!r.multi){const G=new Ps(M,u,Sr),nt=id(m,s,u?w:w+N,k);-1===nt?(og(gr(O,p),d,m),nd(d,r,s.length),s.push(m),O.directiveStart++,O.directiveEnd++,u&&(O.providerIndexes+=1048576),c.push(G),p.push(G)):(c[nt]=G,p[nt]=G)}else{const G=id(m,s,w+N,k),nt=id(m,s,w,w+N),ht=G>=0&&c[G],pt=nt>=0&&c[nt];if(u&&!pt||!u&&!ht){og(gr(O,p),d,m);const Mt=function Fy(r,s,c,g,u){const d=new Ps(r,c,Sr);return d.multi=[],d.index=s,d.componentProviders=0,N_(d,u,g&&!c),d}(u?Zy:Ny,c.length,u,g,M);!u&&pt&&(c[nt].providerFactory=Mt),nd(d,r,s.length,0),s.push(m),O.directiveStart++,O.directiveEnd++,u&&(O.providerIndexes+=1048576),c.push(Mt),p.push(Mt)}else nd(d,r,G>-1?G:nt,N_(c[u?nt:G],M,!u&&g));!u&&g&&pt&&c[nt].componentProviders++}}}function nd(r,s,c,g){const u=Or(s),d=function xb(r){return!!r.useClass}(s);if(u||d){const M=(d?W(s.useClass):s).prototype.ngOnDestroy;if(M){const O=r.destroyHooks||(r.destroyHooks=[]);if(!u&&s.multi){const w=O.indexOf(c);-1===w?O.push(c,[g,M]):O[w+1].push(g,M)}else O.push(c,M)}}}function N_(r,s,c){return c&&r.componentProviders++,r.multi.push(s)-1}function id(r,s,c,g){for(let u=c;u<g;u++)if(s[u]===r)return u;return-1}function Ny(r,s,c,g){return od(this.multi,[])}function Zy(r,s,c,g){const u=this.multi;let d;if(this.providerFactory){const p=this.providerFactory.componentProviders,m=lc(c,c[1],this.providerFactory.index,g);d=m.slice(0,p),od(u,d);for(let M=p;M<m.length;M++)d.push(m[M])}else d=[],od(u,d);return d}function od(r,s){for(let c=0;c<r.length;c++)s.push((0,r[c])());return s}function rd(r,s=[]){return c=>{c.providersResolver=(g,u)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ly(r,s,c){const g=ne();if(g.firstCreatePass){const u=qn(r);ed(c,g.data,g.blueprint,u,!0),ed(s,g.data,g.blueprint,u,!1)}}(g,u?u(r):r,s)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ts{}class sd{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ad(r,s){return new _i(r,s??null)}class _i extends ts{constructor(s,c){super(),this._parent=c,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new du(this);const g=Pn(s);this._bootstrapComponents=hi(g.bootstrap),this._r3Injector=zf(s,c,[{provide:ts,useValue:this},{provide:Mc,useValue:this.componentFactoryResolver}],U(s),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(s)}get injector(){return this._r3Injector}destroy(){const s=this._r3Injector;!s.destroyed&&s.destroy(),this.destroyCbs.forEach(c=>c()),this.destroyCbs=null}onDestroy(s){this.destroyCbs.push(s)}}class fo extends sd{constructor(s){super(),this.moduleType=s}create(s){return new _i(this.moduleType,s)}}class F_ extends ts{constructor(s,c,g){super(),this.componentFactoryResolver=new du(this),this.instance=null;const u=new yC([...s,{provide:ts,useValue:this},{provide:Mc,useValue:this.componentFactoryResolver}],c||xg(),g,new Set(["environment"]));this.injector=u,u.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(s){this.injector.onDestroy(s)}}function al(r,s,c=null){return new F_(r,s,c).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ry=(()=>{class r{constructor(c){this._injector=c,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(c){if(!c.standalone)return null;if(!this.cachedInjectors.has(c.id)){const g=mC(0,c.type),u=g.length>0?al([g],this._injector,`Standalone[${c.type.name}]`):null;this.cachedInjectors.set(c.id,u)}return this.cachedInjectors.get(c.id)}ngOnDestroy(){try{for(const c of this.cachedInjectors.values())null!==c&&c.destroy()}finally{this.cachedInjectors.clear()}}}return r.\u0275prov=gn({token:r,providedIn:"environment",factory:()=>new r(Pe(br))}),r})();function po(r){r.getStandaloneInjector=s=>s.get(Ry).getOrCreateStandaloneInjector(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ns(r,s,c){const g=On()+r,u=dt();return u[g]===zt?on(u,g,c?s.call(c):s()):Fr(u,g)}function Aa(r,s,c,g){return hl(dt(),On(),r,s,c,g)}function gl(r,s,c,g,u){return B_(dt(),On(),r,s,c,g,u)}function q_(r,s,c,g,u,d){return z_(dt(),On(),r,s,c,g,u,d)}function J_(r,s,c,g,u,d,p){return function Q_(r,s,c,g,u,d,p,m,M){const O=s+c;return Un(r,O,u,d,p,m)?on(r,O+4,M?g.call(M,u,d,p,m):g(u,d,p,m)):dl(r,O+4)}(dt(),On(),r,s,c,g,u,d,p)}function ul(r,s,c,g,u,d,p,m){const M=On()+r,O=dt(),w=Un(O,M,c,g,u,d);return Cn(O,M+4,p)||w?on(O,M+5,m?s.call(m,c,g,u,d,p):s(c,g,u,d,p)):Fr(O,M+5)}function dd(r,s,c,g,u,d,p,m,M){const O=On()+r,w=dt(),k=Un(w,O,c,g,u,d);return Rr(w,O+4,p,m)||k?on(w,O+6,M?s.call(M,c,g,u,d,p,m):s(c,g,u,d,p,m)):Fr(w,O+6)}function qy(r,s,c,g){return function fl(r,s,c,g,u,d){let p=s+c,m=!1;for(let M=0;M<u.length;M++)Cn(r,p++,u[M])&&(m=!0);return m?on(r,p,g.apply(d,u)):dl(r,p)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(dt(),On(),r,s,c,g)}function dl(r,s){const c=r[s];return c===zt?void 0:c}function hl(r,s,c,g,u,d){const p=s+c;return Cn(r,p,u)?on(r,p+1,d?g.call(d,u):g(u)):dl(r,p+1)}function B_(r,s,c,g,u,d,p){const m=s+c;return Rr(r,m,u,d)?on(r,m+2,p?g.call(p,u,d):g(u,d)):dl(r,m+2)}function z_(r,s,c,g,u,d,p,m){const M=s+c;return No(r,M,u,d,p)?on(r,M+3,m?g.call(m,u,d,p):g(u,d,p)):dl(r,M+3)}function An(r,s){const c=ne();let g;const u=r+22;c.firstCreatePass?(g=function G_(r,s){if(s)for(let c=s.length-1;c>=0;c--){const g=s[c];if(r===g.name)return g}}(s,c.pipeRegistry),c.data[u]=g,g.onDestroy&&(c.destroyHooks||(c.destroyHooks=[])).push(u,g.onDestroy)):g=c.data[u];const d=g.factory||(g.factory=wi(g.type)),p=In(Sr);try{const m=ks(!1),M=d();return ks(m),function vu(r,s,c,g){c>=r.data.length&&(r.data[c]=null,r.blueprint[c]=null),s[c]=g}(c,dt(),u,M),M}finally{In(p)}}function $_(r,s,c){const g=r+22,u=dt(),d=vs(u,g);return Ta(u,g)?hl(u,On(),s,d.transform,c,d):d.transform(c)}function Y_(r,s,c,g){const u=r+22,d=dt(),p=vs(d,u);return Ta(d,u)?B_(d,On(),s,p.transform,c,g,p):p.transform(c,g)}function hd(r,s,c,g,u){const d=r+22,p=dt(),m=vs(p,d);return Ta(p,d)?z_(p,On(),s,m.transform,c,g,u,m):m.transform(c,g,u)}function Ta(r,s){return r[1].data[s].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zo(r){return s=>{setTimeout(r,void 0,s)}}const mi=class is extends t.x{constructor(s=!1){super(),this.__isAsync=s}emit(s){super.next(s)}subscribe(s,c,g){let u=s,d=c||(()=>null),p=g;if(s&&"object"==typeof s){const M=s;u=M.next?.bind(M),d=M.error?.bind(M),p=M.complete?.bind(M)}this.__isAsync&&(d=zo(d),u&&(u=zo(u)),p&&(p=zo(p)));const m=super.subscribe({next:u,error:d,complete:p});return s instanceof V.w0&&s.add(m),m}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function By(){return this._results[oo()]()}class Qo{constructor(s=!1){this._emitDistinctChangesOnly=s,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const c=oo(),g=Qo.prototype;g[c]||(g[c]=By)}get changes(){return this._changes||(this._changes=new mi)}get(s){return this._results[s]}map(s){return this._results.map(s)}filter(s){return this._results.filter(s)}find(s){return this._results.find(s)}reduce(s,c){return this._results.reduce(s,c)}forEach(s){this._results.forEach(s)}some(s){return this._results.some(s)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(s,c){const g=this;g.dirty=!1;const u=$e(s);(this._changesDetected=!function Gt(r,s,c){if(r.length!==s.length)return!1;for(let g=0;g<r.length;g++){let u=r[g],d=s[g];if(c&&(u=c(u),d=c(d)),d!==u)return!1}return!0}(g._results,u,c))&&(g._results=u,g.length=u.length,g.last=u[this.length-1],g.first=u[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ri=(()=>{class r{}return r.__NG_ELEMENT_ID__=Gy,r})();const zy=Ri,Qy=class extends zy{constructor(s,c,g){super(),this._declarationLView=s,this._declarationTContainer=c,this.elementRef=g}createEmbeddedView(s,c){const g=this._declarationTContainer.tViews,u=Zc(this._declarationLView,g,s,16,null,g.declTNode,null,null,null,null,c||null);u[17]=this._declarationLView[this._declarationTContainer.index];const p=this._declarationLView[19];return null!==p&&(u[19]=p.createEmbeddedView(g)),gp(g,u,s),new je(u)}};function Gy(){return ml(Ge(),dt())}function ml(r,s){return 4&r.type?new Qy(s,r,js(r,s)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vl=(()=>{class r{}return r.__NG_ELEMENT_ID__=$y,r})();function $y(){return Go(Ge(),dt())}const JP=vl,K_=class extends JP{constructor(s,c,g){super(),this._lContainer=s,this._hostTNode=c,this._hostLView=g}get element(){return js(this._hostTNode,this._hostLView)}get injector(){return new ur(this._hostTNode,this._hostLView)}get parentInjector(){const s=cc(this._hostTNode,this._hostLView);if(Lh(s)){const c=Ds(s,this._hostLView),g=lr(s);return new ur(c[1].data[g+8],c)}return new ur(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(s){const c=Cl(this._lContainer);return null!==c&&c[s]||null}get length(){return this._lContainer.length-10}createEmbeddedView(s,c,g){let u,d;"number"==typeof g?u=g:null!=g&&(u=g.index,d=g.injector);const p=s.createEmbeddedView(c||{},d);return this.insert(p,u),p}createComponent(s,c,g,u,d){const p=s&&!function Te(r){return"function"==typeof r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s);let m;if(p)m=c;else{const k=c||{};m=k.index,g=k.injector,u=k.projectableNodes,d=k.environmentInjector||k.ngModuleRef}const M=p?s:new Zr(ge(s)),O=g||this.parentInjector;if(!d&&null==M.ngModule){const N=(p?O:this.parentInjector).get(br,null);N&&(d=N)}const w=M.create(O,u,void 0,d);return this.insert(w.hostView,m),w}insert(s,c){const g=s._lView,u=g[1];if(function UO(r){return ci(r[3])}(g)){const w=this.indexOf(s);if(-1!==w)this.detach(w);else{const k=g[3],N=new K_(k,k[6],k[3]);N.detach(N.indexOf(s))}}const d=this._adjustIndex(c),p=this._lContainer;!function uP(r,s,c,g){const u=10+g,d=c.length;g>0&&(c[u-1][4]=s),g<d-10?(s[4]=c[u],At(c,10+g,s)):(c.push(s),s[4]=null),s[3]=c;const p=s[17];null!==p&&c!==p&&function Af(r,s){const c=r[9];s[16]!==s[3][3][16]&&(r[2]=!0),null===c?r[9]=[s]:c.push(s)}(p,s);const m=s[19];null!==m&&m.insertView(r),s[2]|=64}(u,g,p,d);const m=Lg(d,p),M=g[11],O=bc(M,p[7]);return null!==O&&function cP(r,s,c,g,u,d){g[0]=u,g[6]=s,zs(r,g,c,1,u,d)}(u,p[6],M,g,O,m),s.attachToViewContainerRef(),At(os(p),d,s),s}move(s,c){return this.insert(s,c)}indexOf(s){const c=Cl(this._lContainer);return null!==c?c.indexOf(s):-1}remove(s){const c=this._adjustIndex(s,-1),g=Eg(this._lContainer,c);g&&(Ye(os(this._lContainer),c),Ef(g[1],g))}detach(s){const c=this._adjustIndex(s,-1),g=Eg(this._lContainer,c);return g&&null!=Ye(os(this._lContainer),c)?new je(g):null}_adjustIndex(s,c=0){return s??this.length+c}};function Cl(r){return r[8]}function os(r){return r[8]||(r[8]=[])}function Go(r,s){let c;const g=s[r.index];if(ci(g))c=g;else{let u;if(8&r.type)u=Le(g);else{const d=s[11];u=d.createComment("");const p=de(r,s);Ki(d,bc(d,p),u,function hP(r,s){return r.nextSibling(s)}(d,p),!1)}s[r.index]=c=lu(g,s,u,r),Uc(s,c)}return new K_(c,r,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fd{constructor(s){this.queryList=s,this.matches=null}clone(){return new fd(this.queryList)}setDirty(){this.queryList.setDirty()}}class pd{constructor(s=[]){this.queries=s}createEmbeddedView(s){const c=s.queries;if(null!==c){const g=null!==s.contentQueries?s.contentQueries[0]:c.length,u=[];for(let d=0;d<g;d++){const p=c.getByIndex(d);u.push(this.queries[p.indexInDeclarationView].clone())}return new pd(u)}return null}insertView(s){this.dirtyQueriesWithMatches(s)}detachView(s){this.dirtyQueriesWithMatches(s)}dirtyQueriesWithMatches(s){for(let c=0;c<this.queries.length;c++)null!==La(s,c).matches&&this.queries[c].setDirty()}}class W_{constructor(s,c,g=null){this.predicate=s,this.flags=c,this.read=g}}class _d{constructor(s=[]){this.queries=s}elementStart(s,c){for(let g=0;g<this.queries.length;g++)this.queries[g].elementStart(s,c)}elementEnd(s){for(let c=0;c<this.queries.length;c++)this.queries[c].elementEnd(s)}embeddedTView(s){let c=null;for(let g=0;g<this.length;g++){const u=null!==c?c.length:0,d=this.getByIndex(g).embeddedTView(s,u);d&&(d.indexInDeclarationView=g,null!==c?c.push(d):c=[d])}return null!==c?new _d(c):null}template(s,c){for(let g=0;g<this.queries.length;g++)this.queries[g].template(s,c)}getByIndex(s){return this.queries[s]}get length(){return this.queries.length}track(s){this.queries.push(s)}}class md{constructor(s,c=-1){this.metadata=s,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=c}elementStart(s,c){this.isApplyingToNode(c)&&this.matchTNode(s,c)}elementEnd(s){this._declarationNodeIndex===s.index&&(this._appliesToNextNode=!1)}template(s,c){this.elementStart(s,c)}embeddedTView(s,c){return this.isApplyingToNode(s)?(this.crossesNgTemplate=!0,this.addMatch(-s.index,c),new md(this.metadata)):null}isApplyingToNode(s){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const c=this._declarationNodeIndex;let g=s.parent;for(;null!==g&&8&g.type&&g.index!==c;)g=g.parent;return c===(null!==g?g.index:-1)}return this._appliesToNextNode}matchTNode(s,c){const g=this.metadata.predicate;if(Array.isArray(g))for(let u=0;u<g.length;u++){const d=g[u];this.matchTNodeWithReadOption(s,c,Wy(c,d)),this.matchTNodeWithReadOption(s,c,sg(c,s,d,!1,!1))}else g===Ri?4&c.type&&this.matchTNodeWithReadOption(s,c,-1):this.matchTNodeWithReadOption(s,c,sg(c,s,g,!1,!1))}matchTNodeWithReadOption(s,c,g){if(null!==g){const u=this.metadata.read;if(null!==u)if(u===yc||u===vl||u===Ri&&4&c.type)this.addMatch(c.index,-2);else{const d=sg(c,s,u,!1,!1);null!==d&&this.addMatch(c.index,d)}else this.addMatch(c.index,g)}}addMatch(s,c){null===this.matches?this.matches=[s,c]:this.matches.push(s,c)}}function Wy(r,s){const c=r.localNames;if(null!==c)for(let g=0;g<c.length;g+=2)if(c[g]===s)return c[g+1];return null}function Xy(r,s,c,g){return-1===c?function X_(r,s){return 11&r.type?js(r,s):4&r.type?ml(r,s):null}(s,r):-2===c?function vd(r,s,c){return c===yc?js(s,r):c===Ri?ml(s,r):c===vl?Go(s,r):void 0}(r,s,g):lc(r,r[1],c,s)}function Cd(r,s,c,g){const u=s[19].queries[g];if(null===u.matches){const d=r.data,p=c.matches,m=[];for(let M=0;M<p.length;M+=2){const O=p[M];m.push(O<0?null:Xy(s,d[O],p[M+1],c.metadata.read))}u.matches=m}return u.matches}function Ea(r,s,c,g){const u=r.queries.getByIndex(c),d=u.matches;if(null!==d){const p=Cd(r,s,u,c);for(let m=0;m<d.length;m+=2){const M=d[m];if(M>0)g.push(p[m/2]);else{const O=d[m+1],w=s[-M];for(let k=10;k<w.length;k++){const N=w[k];N[17]===N[3]&&Ea(N[1],N,O,g)}if(null!==w[9]){const k=w[9];for(let N=0;N<k.length;N++){const G=k[N];Ea(G[1],G,O,g)}}}}}return g}function Sa(r){const s=dt(),c=ne(),g=xv();bh(g+1);const u=La(c,g);if(r.dirty&&function fv(r){return 4==(4&r[2])}(s)===(2==(2&u.metadata.flags))){if(null===u.matches)r.reset([]);else{const d=u.crossesNgTemplate?Ea(c,s,g,[]):Cd(c,s,u,g);r.reset(d,Fb),r.notifyOnChanges()}return!0}return!1}function tm(r,s,c){const g=ne();g.firstCreatePass&&(Md(g,new W_(r,s,c),-1),2==(2&s)&&(g.staticViewQueries=!0)),Ia(g,dt(),s)}function em(r,s,c,g){const u=ne();if(u.firstCreatePass){const d=Ge();Md(u,new W_(s,c,g),d.index),function im(r,s){const c=r.contentQueries||(r.contentQueries=[]);s!==(c.length?c[c.length-1]:-1)&&c.push(r.queries.length-1,s)}(u,r),2==(2&c)&&(u.staticContentQueries=!0)}Ia(u,dt(),c)}function nm(){return function t1(r,s){return r[19].queries[s].queryList}(dt(),xv())}function Ia(r,s,c){const g=new Qo(4==(4&c));en(r,s,g,g.destroy),null===s[19]&&(s[19]=new pd),s[19].queries.push(new fd(g))}function Md(r,s,c){null===r.queries&&(r.queries=new _d),r.queries.track(new md(s,c))}function La(r,s){return r.queries.getByIndex(s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ad(...r){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bl=new pe("Application Initializer");let Ra=(()=>{class r{constructor(c){this.appInits=c,this.resolve=Ad,this.reject=Ad,this.initialized=!1,this.done=!1,this.donePromise=new Promise((g,u)=>{this.resolve=g,this.reject=u})}runInitializers(){if(this.initialized)return;const c=[],g=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let u=0;u<this.appInits.length;u++){const d=this.appInits[u]();if(Jr(d))c.push(d);else if(ha(d)){const p=new Promise((m,M)=>{d.subscribe({complete:m,error:M})});c.push(p)}}Promise.all(c).then(()=>{g()}).catch(u=>{this.reject(u)}),0===c.length&&g(),this.initialized=!0}}return r.\u0275fac=function(c){return new(c||r)(Pe(bl,8))},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ua=new pe("AppId",{providedIn:"root",factory:function y1(){return`${mo()}${mo()}${mo()}`}});function mo(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Pl=new pe("Platform Initializer"),XP=new pe("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Td=new pe("appBootstrapListener"),Ed=new pe("AnimationModuleType");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let P1=(()=>{class r{log(c){console.log(c)}warn(c){console.warn(c)}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xl=new pe("LocaleId",{providedIn:"root",factory:()=>Qh(xl,Jt.Optional|Jt.SkipSelf)||function x1(){return typeof $localize<"u"&&$localize.locale||Ro}()}),Mm=new pe("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ex{constructor(s,c){this.ngModuleFactory=s,this.componentFactories=c}}let ym=(()=>{class r{compileModuleSync(c){return new fo(c)}compileModuleAsync(c){return Promise.resolve(this.compileModuleSync(c))}compileModuleAndAllComponentsSync(c){const g=this.compileModuleSync(c),d=hi(Pn(c).declarations).reduce((p,m)=>{const M=ge(m);return M&&p.push(new Zr(M)),p},[]);return new ex(g,d)}compileModuleAndAllComponentsAsync(c){return Promise.resolve(this.compileModuleAndAllComponentsSync(c))}clearCache(){}clearCacheFor(c){}getModuleId(c){}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const D1=(()=>Promise.resolve(0))();function wl(r){typeof Zone>"u"?D1.then(()=>{r&&r.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ii{constructor({enableLongStackTrace:s=!1,shouldCoalesceEventChangeDetection:c=!1,shouldCoalesceRunChangeDetection:g=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new mi(!1),this.onMicrotaskEmpty=new mi(!1),this.onStable=new mi(!1),this.onError=new mi(!1),typeof Zone>"u")throw new Ct(908,!1);Zone.assertZonePatched();const u=this;if(u._nesting=0,u._outer=u._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const d=Zone.AsyncStackTaggingZoneSpec;u._inner=u._inner.fork(new d("Angular"))}Zone.TaskTrackingZoneSpec&&(u._inner=u._inner.fork(new Zone.TaskTrackingZoneSpec)),s&&Zone.longStackTraceZoneSpec&&(u._inner=u._inner.fork(Zone.longStackTraceZoneSpec)),u.shouldCoalesceEventChangeDetection=!g&&c,u.shouldCoalesceRunChangeDetection=g,u.lastRequestAnimationFrameId=-1,u.nativeRequestAnimationFrame=function k1(){let r=ce.requestAnimationFrame,s=ce.cancelAnimationFrame;if(typeof Zone<"u"&&r&&s){const c=r[Zone.__symbol__("OriginalDelegate")];c&&(r=c);const g=s[Zone.__symbol__("OriginalDelegate")];g&&(s=g)}return{nativeRequestAnimationFrame:r,nativeCancelAnimationFrame:s}}().nativeRequestAnimationFrame,function Ot(r){const s=()=>{!function Tn(r){r.isCheckStableRunning||-1!==r.lastRequestAnimationFrameId||(r.lastRequestAnimationFrameId=r.nativeRequestAnimationFrame.call(ce,()=>{r.fakeTopEventTask||(r.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{r.lastRequestAnimationFrameId=-1,ue(r),r.isCheckStableRunning=!0,Id(r),r.isCheckStableRunning=!1},void 0,()=>{},()=>{})),r.fakeTopEventTask.invoke()}),ue(r))}(r)};r._inner=r._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(c,g,u,d,p,m)=>{try{return Me(r),c.invokeTask(u,d,p,m)}finally{(r.shouldCoalesceEventChangeDetection&&"eventTask"===d.type||r.shouldCoalesceRunChangeDetection)&&s(),ja(r)}},onInvoke:(c,g,u,d,p,m,M)=>{try{return Me(r),c.invoke(u,d,p,m,M)}finally{r.shouldCoalesceRunChangeDetection&&s(),ja(r)}},onHasTask:(c,g,u,d)=>{c.hasTask(u,d),g===u&&("microTask"==d.change?(r._hasPendingMicrotasks=d.microTask,ue(r),Id(r)):"macroTask"==d.change&&(r.hasPendingMacrotasks=d.macroTask))},onHandleError:(c,g,u,d)=>(c.handleError(u,d),r.runOutsideAngular(()=>r.onError.emit(d)),!1)})}(u)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ii.isInAngularZone())throw new Ct(909,!1)}static assertNotInAngularZone(){if(ii.isInAngularZone())throw new Ct(909,!1)}run(s,c,g){return this._inner.run(s,c,g)}runTask(s,c,g,u){const d=this._inner,p=d.scheduleEventTask("NgZoneEvent: "+u,s,A1,Ad,Ad);try{return d.runTask(p,c,g)}finally{d.cancelTask(p)}}runGuarded(s,c,g){return this._inner.runGuarded(s,c,g)}runOutsideAngular(s){return this._outer.run(s)}}const A1={};function Id(r){if(0==r._nesting&&!r.hasPendingMicrotasks&&!r.isStable)try{r._nesting++,r.onMicrotaskEmpty.emit(null)}finally{if(r._nesting--,!r.hasPendingMicrotasks)try{r.runOutsideAngular(()=>r.onStable.emit(null))}finally{r.isStable=!0}}}function ue(r){r.hasPendingMicrotasks=!!(r._hasPendingMicrotasks||(r.shouldCoalesceEventChangeDetection||r.shouldCoalesceRunChangeDetection)&&-1!==r.lastRequestAnimationFrameId)}function Me(r){r._nesting++,r.isStable&&(r.isStable=!1,r.onUnstable.emit(null))}function ja(r){r._nesting--,Id(r)}class En{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new mi,this.onMicrotaskEmpty=new mi,this.onStable=new mi,this.onError=new mi}run(s,c,g){return s.apply(c,g)}runGuarded(s,c,g){return s.apply(c,g)}runOutsideAngular(s){return s()}runTask(s,c,g,u){return s.apply(c,g)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const le=new pe(""),ke=new pe("");let Ld,$o=(()=>{class r{constructor(c,g,u){this._ngZone=c,this.registry=g,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Ld||(function T1(r){Ld=r}(u),u.addToWindow(g)),this._watchAngularEvents(),c.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ii.assertNotInAngularZone(),wl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())wl(()=>{for(;0!==this._callbacks.length;){let c=this._callbacks.pop();clearTimeout(c.timeoutId),c.doneCb(this._didWork)}this._didWork=!1});else{let c=this.getPendingTasks();this._callbacks=this._callbacks.filter(g=>!g.updateCb||!g.updateCb(c)||(clearTimeout(g.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(c=>({source:c.source,creationLocation:c.creationLocation,data:c.data})):[]}addCallback(c,g,u){let d=-1;g&&g>0&&(d=setTimeout(()=>{this._callbacks=this._callbacks.filter(p=>p.timeoutId!==d),c(this._didWork,this.getPendingTasks())},g)),this._callbacks.push({doneCb:c,timeoutId:d,updateCb:u})}whenStable(c,g,u){if(u&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(c,g,u),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(c){this.registry.registerApplication(c,this)}unregisterApplication(c){this.registry.unregisterApplication(c)}findProviders(c,g,u){return[]}}return r.\u0275fac=function(c){return new(c||r)(Pe(ii),Pe(It),Pe(ke))},r.\u0275prov=gn({token:r,factory:r.\u0275fac}),r})(),It=(()=>{class r{constructor(){this._applications=new Map}registerApplication(c,g){this._applications.set(c,g)}unregisterApplication(c){this._applications.delete(c)}unregisterAllApplications(){this._applications.clear()}getTestability(c){return this._applications.get(c)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(c,g=!0){return Ld?.findTestabilityInTree(this,c,g)??null}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})(),vo=null;const xm=new pe("AllowMultipleToken"),ss=new pe("PlatformDestroyListeners");class Sn{constructor(s,c){this.name=s,this.token=c}}function Zd(r,s,c=[]){const g=`Platform: ${s}`,u=new pe(g);return(d=[])=>{let p=Mi();if(!p||p.injector.get(xm,!1)){const m=[...c,...d,{provide:u,useValue:!0}];r?r(m):function Ci(r){if(vo&&!vo.get(xm,!1))throw new Ct(400,!1);vo=r;const s=r.get(Zt);(function oi(r){const s=r.get(Pl,null);s&&s.forEach(c=>c())})(r)}(function xe(r=[],s){return Ti.create({name:s,providers:[{provide:sf,useValue:"platform"},{provide:ss,useValue:new Set([()=>vo=null])},...r]})}(m,g))}return function E1(r){const s=Mi();if(!s)throw new Ct(401,!1);return s}()}}function Mi(){return vo?.get(Zt)??null}let Zt=(()=>{class r{constructor(c){this._injector=c,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(c,g){const u=function Dm(r,s){let c;return c="noop"===r?new En:("zone.js"===r?void 0:r)||new ii(s),c}(g?.ngZone,function Mo(r){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!r||!r.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!r||!r.ngZoneRunCoalescing)||!1}}(g)),d=[{provide:ii,useValue:u}];return u.run(()=>{const p=Ti.create({providers:d,parent:this.injector,name:c.moduleType.name}),m=c.create(p),M=m.injector.get(Oc,null);if(!M)throw new Ct(402,!1);return u.runOutsideAngular(()=>{const O=u.onError.subscribe({next:w=>{M.handleError(w)}});m.onDestroy(()=>{Al(this._modules,m),O.unsubscribe()})}),function km(r,s,c){try{const g=c();return Jr(g)?g.catch(u=>{throw s.runOutsideAngular(()=>r.handleError(u)),u}):g}catch(g){throw s.runOutsideAngular(()=>r.handleError(g)),g}}(M,u,()=>{const O=m.injector.get(Ra);return O.runInitializers(),O.donePromise.then(()=>(function v_(r){Pt(r,"Expected localeId to be defined"),"string"==typeof r&&(Uo=r.toLowerCase().replace(/_/g,"-"))}(m.injector.get(xl,Ro)||Ro),this._moduleDoBootstrap(m),m))})})}bootstrapModule(c,g=[]){const u=Am({},g);return function wm(r,s,c){const g=new fo(c);return Promise.resolve(g)}(0,0,c).then(d=>this.bootstrapModuleFactory(d,u))}_moduleDoBootstrap(c){const g=c.injector.get(kl);if(c._bootstrapComponents.length>0)c._bootstrapComponents.forEach(u=>g.bootstrap(u));else{if(!c.instance.ngDoBootstrap)throw new Ct(403,!1);c.instance.ngDoBootstrap(g)}this._modules.push(c)}onDestroy(c){this._destroyListeners.push(c)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ct(404,!1);this._modules.slice().forEach(g=>g.destroy()),this._destroyListeners.forEach(g=>g());const c=this._injector.get(ss,null);c&&(c.forEach(g=>g()),c.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return r.\u0275fac=function(c){return new(c||r)(Pe(Ti))},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})();function Am(r,s){return Array.isArray(s)?s.reduce(Am,r):{...r,...s}}let kl=(()=>{class r{constructor(c,g,u){this._zone=c,this._injector=g,this._exceptionHandler=u,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const d=new B.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),p=new B.y(m=>{let M;this._zone.runOutsideAngular(()=>{M=this._zone.onStable.subscribe(()=>{ii.assertNotInAngularZone(),wl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const O=this._zone.onUnstable.subscribe(()=>{ii.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{M.unsubscribe(),O.unsubscribe()}});this.isStable=(0,Y.T)(d,p.pipe(function S(r={}){const{connector:s=(()=>new t.x),resetOnError:c=!0,resetOnComplete:g=!0,resetOnRefCountZero:u=!0}=r;return d=>{let p,m,M,O=0,w=!1,k=!1;const N=()=>{m?.unsubscribe(),m=void 0},G=()=>{N(),p=M=void 0,w=k=!1},nt=()=>{const ht=p;G(),ht?.unsubscribe()};return(0,x.e)((ht,pt)=>{O++,!k&&!w&&N();const Mt=M=M??s();pt.add(()=>{O--,0===O&&!k&&!w&&(m=F(nt,u))}),Mt.subscribe(pt),!p&&O>0&&(p=new st.Hp({next:Et=>Mt.next(Et),error:Et=>{k=!0,N(),m=F(G,c,Et),Mt.error(Et)},complete:()=>{w=!0,N(),m=F(G,g),Mt.complete()}}),(0,q.Xf)(ht).subscribe(p))})(d)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(c,g){const u=c instanceof bC;if(!this._injector.get(Ra).done)throw!u&&ai(c),new Ct(405,false);let p;p=u?c:this._injector.get(Mc).resolveComponentFactory(c),this.componentTypes.push(p.componentType);const m=function Dl(r){return r.isBoundToModule}(p)?void 0:this._injector.get(ts),O=p.create(Ti.NULL,[],g||p.selector,m),w=O.location.nativeElement,k=O.injector.get(le,null);return k?.registerApplication(w),O.onDestroy(()=>{this.detachView(O.hostView),Al(this.components,O),k?.unregisterApplication(w)}),this._loadComponent(O),O}tick(){if(this._runningTick)throw new Ct(101,!1);try{this._runningTick=!0;for(let c of this._views)c.detectChanges()}catch(c){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(c))}finally{this._runningTick=!1}}attachView(c){const g=c;this._views.push(g),g.attachToAppRef(this)}detachView(c){const g=c;Al(this._views,g),g.detachFromAppRef()}_loadComponent(c){this.attachView(c.hostView),this.tick(),this.components.push(c),this._injector.get(Td,[]).concat(this._bootstrapListeners).forEach(u=>u(c))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(c=>c()),this._views.slice().forEach(c=>c.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(c){return this._destroyListeners.push(c),()=>Al(this._destroyListeners,c)}destroy(){if(this._destroyed)throw new Ct(406,!1);const c=this._injector;c.destroy&&!c.destroyed&&c.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return r.\u0275fac=function(c){return new(c||r)(Pe(ii),Pe(br),Pe(Oc))},r.\u0275prov=gn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function Al(r,s){const c=r.indexOf(s);c>-1&&r.splice(c,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Em=!0,Sm=!1;function I1(){return Sm=!0,Em}function Fd(){if(Sm)throw new Error("Cannot enable prod mode after platform setup.");Em=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let L1=(()=>{class r{}return r.__NG_ELEMENT_ID__=N1,r})();function N1(r){return function Z1(r,s,c){if(Qa(r)&&!c){const g=xn(r.index,s);return new je(g,g)}return 47&r.type?new je(s[16],s):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ge(),dt(),16==(16&r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Zm{constructor(){}supports(s){return ro(s)}create(s){return new H1(s)}}const V1=(r,s)=>s;class H1{constructor(s){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=s||V1}forEachItem(s){let c;for(c=this._itHead;null!==c;c=c._next)s(c)}forEachOperation(s){let c=this._itHead,g=this._removalsHead,u=0,d=null;for(;c||g;){const p=!g||c&&c.currentIndex<Rm(g,u,d)?c:g,m=Rm(p,u,d),M=p.currentIndex;if(p===g)u--,g=g._nextRemoved;else if(c=c._next,null==p.previousIndex)u++;else{d||(d=[]);const O=m-u,w=M-u;if(O!=w){for(let N=0;N<O;N++){const G=N<d.length?d[N]:d[N]=0,nt=G+N;w<=nt&&nt<O&&(d[N]=G+1)}d[p.previousIndex]=w-O}}m!==M&&s(p,m,M)}}forEachPreviousItem(s){let c;for(c=this._previousItHead;null!==c;c=c._nextPrevious)s(c)}forEachAddedItem(s){let c;for(c=this._additionsHead;null!==c;c=c._nextAdded)s(c)}forEachMovedItem(s){let c;for(c=this._movesHead;null!==c;c=c._nextMoved)s(c)}forEachRemovedItem(s){let c;for(c=this._removalsHead;null!==c;c=c._nextRemoved)s(c)}forEachIdentityChange(s){let c;for(c=this._identityChangesHead;null!==c;c=c._nextIdentityChange)s(c)}diff(s){if(null==s&&(s=[]),!ro(s))throw new Ct(900,!1);return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let u,d,p,c=this._itHead,g=!1;if(Array.isArray(s)){this.length=s.length;for(let m=0;m<this.length;m++)d=s[m],p=this._trackByFn(m,d),null!==c&&Object.is(c.trackById,p)?(g&&(c=this._verifyReinsertion(c,d,p,m)),Object.is(c.item,d)||this._addIdentityChange(c,d)):(c=this._mismatch(c,d,p,m),g=!0),c=c._next}else u=0,function Rp(r,s){if(Array.isArray(r))for(let c=0;c<r.length;c++)s(r[c]);else{const c=r[oo()]();let g;for(;!(g=c.next()).done;)s(g.value)}}(s,m=>{p=this._trackByFn(u,m),null!==c&&Object.is(c.trackById,p)?(g&&(c=this._verifyReinsertion(c,m,p,u)),Object.is(c.item,m)||this._addIdentityChange(c,m)):(c=this._mismatch(c,m,p,u),g=!0),c=c._next,u++}),this.length=u;return this._truncate(c),this.collection=s,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let s;for(s=this._previousItHead=this._itHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._additionsHead;null!==s;s=s._nextAdded)s.previousIndex=s.currentIndex;for(this._additionsHead=this._additionsTail=null,s=this._movesHead;null!==s;s=s._nextMoved)s.previousIndex=s.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(s,c,g,u){let d;return null===s?d=this._itTail:(d=s._prev,this._remove(s)),null!==(s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(g,null))?(Object.is(s.item,c)||this._addIdentityChange(s,c),this._reinsertAfter(s,d,u)):null!==(s=null===this._linkedRecords?null:this._linkedRecords.get(g,u))?(Object.is(s.item,c)||this._addIdentityChange(s,c),this._moveAfter(s,d,u)):s=this._addAfter(new q1(c,g),d,u),s}_verifyReinsertion(s,c,g,u){let d=null===this._unlinkedRecords?null:this._unlinkedRecords.get(g,null);return null!==d?s=this._reinsertAfter(d,s._prev,u):s.currentIndex!=u&&(s.currentIndex=u,this._addToMoves(s,u)),s}_truncate(s){for(;null!==s;){const c=s._next;this._addToRemovals(this._unlink(s)),s=c}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(s,c,g){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(s);const u=s._prevRemoved,d=s._nextRemoved;return null===u?this._removalsHead=d:u._nextRemoved=d,null===d?this._removalsTail=u:d._prevRemoved=u,this._insertAfter(s,c,g),this._addToMoves(s,g),s}_moveAfter(s,c,g){return this._unlink(s),this._insertAfter(s,c,g),this._addToMoves(s,g),s}_addAfter(s,c,g){return this._insertAfter(s,c,g),this._additionsTail=null===this._additionsTail?this._additionsHead=s:this._additionsTail._nextAdded=s,s}_insertAfter(s,c,g){const u=null===c?this._itHead:c._next;return s._next=u,s._prev=c,null===u?this._itTail=s:u._prev=s,null===c?this._itHead=s:c._next=s,null===this._linkedRecords&&(this._linkedRecords=new Fm),this._linkedRecords.put(s),s.currentIndex=g,s}_remove(s){return this._addToRemovals(this._unlink(s))}_unlink(s){null!==this._linkedRecords&&this._linkedRecords.remove(s);const c=s._prev,g=s._next;return null===c?this._itHead=g:c._next=g,null===g?this._itTail=c:g._prev=c,s}_addToMoves(s,c){return s.previousIndex===c||(this._movesTail=null===this._movesTail?this._movesHead=s:this._movesTail._nextMoved=s),s}_addToRemovals(s){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Fm),this._unlinkedRecords.put(s),s.currentIndex=null,s._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=s,s._prevRemoved=null):(s._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=s),s}_addIdentityChange(s,c){return s.item=c,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=s:this._identityChangesTail._nextIdentityChange=s,s}}class q1{constructor(s,c){this.item=s,this.trackById=c,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class J1{constructor(){this._head=null,this._tail=null}add(s){null===this._head?(this._head=this._tail=s,s._nextDup=null,s._prevDup=null):(this._tail._nextDup=s,s._prevDup=this._tail,s._nextDup=null,this._tail=s)}get(s,c){let g;for(g=this._head;null!==g;g=g._nextDup)if((null===c||c<=g.currentIndex)&&Object.is(g.trackById,s))return g;return null}remove(s){const c=s._prevDup,g=s._nextDup;return null===c?this._head=g:c._nextDup=g,null===g?this._tail=c:g._prevDup=c,null===this._head}}class Fm{constructor(){this.map=new Map}put(s){const c=s.trackById;let g=this.map.get(c);g||(g=new J1,this.map.set(c,g)),g.add(s)}get(s,c){const u=this.map.get(s);return u?u.get(s,c):null}remove(s){const c=s.trackById;return this.map.get(c).remove(s)&&this.map.delete(c),s}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Rm(r,s,c){const g=r.previousIndex;if(null===g)return g;let u=0;return c&&g<c.length&&(u=c[g]),g+s+u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Um{constructor(){}supports(s){return s instanceof Map||qc(s)}create(){return new B1}}class B1{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(s){let c;for(c=this._mapHead;null!==c;c=c._next)s(c)}forEachPreviousItem(s){let c;for(c=this._previousMapHead;null!==c;c=c._nextPrevious)s(c)}forEachChangedItem(s){let c;for(c=this._changesHead;null!==c;c=c._nextChanged)s(c)}forEachAddedItem(s){let c;for(c=this._additionsHead;null!==c;c=c._nextAdded)s(c)}forEachRemovedItem(s){let c;for(c=this._removalsHead;null!==c;c=c._nextRemoved)s(c)}diff(s){if(s){if(!(s instanceof Map||qc(s)))throw new Ct(900,!1)}else s=new Map;return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let c=this._mapHead;if(this._appendAfter=null,this._forEach(s,(g,u)=>{if(c&&c.key===u)this._maybeAddToChanges(c,g),this._appendAfter=c,c=c._next;else{const d=this._getOrCreateRecordForKey(u,g);c=this._insertBeforeOrAppend(c,d)}}),c){c._prev&&(c._prev._next=null),this._removalsHead=c;for(let g=c;null!==g;g=g._nextRemoved)g===this._mapHead&&(this._mapHead=null),this._records.delete(g.key),g._nextRemoved=g._next,g.previousValue=g.currentValue,g.currentValue=null,g._prev=null,g._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(s,c){if(s){const g=s._prev;return c._next=s,c._prev=g,s._prev=c,g&&(g._next=c),s===this._mapHead&&(this._mapHead=c),this._appendAfter=s,s}return this._appendAfter?(this._appendAfter._next=c,c._prev=this._appendAfter):this._mapHead=c,this._appendAfter=c,null}_getOrCreateRecordForKey(s,c){if(this._records.has(s)){const u=this._records.get(s);this._maybeAddToChanges(u,c);const d=u._prev,p=u._next;return d&&(d._next=p),p&&(p._prev=d),u._next=null,u._prev=null,u}const g=new z1(s);return this._records.set(s,g),g.currentValue=c,this._addToAdditions(g),g}_reset(){if(this.isDirty){let s;for(this._previousMapHead=this._mapHead,s=this._previousMapHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._changesHead;null!==s;s=s._nextChanged)s.previousValue=s.currentValue;for(s=this._additionsHead;null!=s;s=s._nextAdded)s.previousValue=s.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(s,c){Object.is(c,s.currentValue)||(s.previousValue=s.currentValue,s.currentValue=c,this._addToChanges(s))}_addToAdditions(s){null===this._additionsHead?this._additionsHead=this._additionsTail=s:(this._additionsTail._nextAdded=s,this._additionsTail=s)}_addToChanges(s){null===this._changesHead?this._changesHead=this._changesTail=s:(this._changesTail._nextChanged=s,this._changesTail=s)}_forEach(s,c){s instanceof Map?s.forEach(c):Object.keys(s).forEach(g=>c(s[g],g))}}class z1{constructor(s){this.key=s,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jm(){return new Hd([new Zm])}let Hd=(()=>{class r{constructor(c){this.factories=c}static create(c,g){if(null!=g){const u=g.factories.slice();c=c.concat(u)}return new r(c)}static extend(c){return{provide:r,useFactory:g=>r.create(c,g||jm()),deps:[[r,new Ai,new Ns]]}}find(c){const g=this.factories.find(u=>u.supports(c));if(null!=g)return g;throw new Ct(901,!1)}}return r.\u0275prov=gn({token:r,providedIn:"root",factory:jm}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vm(){return new qd([new Um])}let qd=(()=>{class r{constructor(c){this.factories=c}static create(c,g){if(g){const u=g.factories.slice();c=c.concat(u)}return new r(c)}static extend(c){return{provide:r,useFactory:g=>r.create(c,g||Vm()),deps:[[r,new Ai,new Ns]]}}find(c){const g=this.factories.find(u=>u.supports(c));if(g)return g;throw new Ct(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.\u0275prov=gn({token:r,providedIn:"root",factory:Vm}),r})();const $1=Zd(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Y1=(()=>{class r{constructor(c){}}return r.\u0275fac=function(c){return new(c||r)(Pe(kl))},r.\u0275mod=Jl({type:r}),r.\u0275inj=Fl({}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function K1(r){return"boolean"==typeof r?r:null!=r&&"false"!==r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,5861:(bt,it,D)=>{function t(B,Y,q,st,x,S,F){try{var E=B[S](F),R=E.value}catch(U){return void q(U)}E.done?Y(R):Promise.resolve(R).then(st,x)}function V(B){return function(){var Y=this,q=arguments;return new Promise(function(st,x){var S=B.apply(Y,q);function F(R){t(S,st,x,F,E,"next",R)}function E(R){t(S,st,x,F,E,"throw",R)}F(void 0)})}}D.d(it,{Z:()=>V})}},bt=>{bt(bt.s=2525)}]);