"use strict";(self.webpackChunkgloomhavensecretary=self.webpackChunkgloomhavensecretary||[]).push([[179],{4892:(bt,it,D)=>{D.d(it,{v:()=>J});var t=D(8868),R=D(8217);class B{constructor(p,y,x){this.name=p,this.abilities=y,this.edition=x}}var W=D(2399),j=D(5354),ot=D(6743),w=D(3145),E=D(5909),F=D(1954),S=D(1421),V=D(9808),U=D(8489);class gt{constructor(p){this.game=p}addModifier(p,y,x=-1){(x<0||x>p.cards.length)&&(x=Math.floor(Math.random()*(p.cards.length-p.current))+p.current+1),p.cards.splice(x,0,y)}drawModifier(p){p.current=p.current+1,p.current==p.cards.length&&this.shuffleModifiers(p)}shuffleModifiers(p){p.cards=p.cards.filter((y,x)=>x>p.current||y.type!=V.kl.bless&&y.type!=V.kl.curse),p.current=-1,p.cards=p.cards.map(y=>({value:y,sort:Math.random()})).sort((y,x)=>y.sort-x.sort).map(({value:y})=>y)}removeDrawnDiscards(p){const y=p.cards.length;p.cards=p.cards.filter((x,N)=>N>p.current||x.type!=V.kl.bless&&x.type!=V.kl.curse),p.current=p.current-(y-p.cards.length)}next(){this.checkShuffle(this.game.monsterAttackModifierDeck),this.game.figures.forEach(p=>{p instanceof t.z&&this.checkShuffle(p.attackModifierDeck)})}draw(){this.shuffleModifiers(this.game.monsterAttackModifierDeck),this.game.figures.forEach(p=>{p instanceof t.z&&this.shuffleModifiers(p.attackModifierDeck)})}checkShuffle(p){p.cards.some((y,x)=>x<=p.current&&y.shuffle)&&this.shuffleModifiers(p)}buildCharacterAttackModifierDeck(p){const y=new V.ut;let x=0;return p.perks.forEach(N=>{N.cards&&N.cards.forEach((rt,yt)=>{if(N.type==U.Ib.add||N.type==U.Ib.replace){let Ot=Object.assign(new V.YY(rt.attackModifier.type),rt.attackModifier);Ot.id="perk"+x,(!this.findByAttackModifier(V.UO,Ot)||N.type==U.Ib.add||yt>0)&&(Ot.character=!0),this.findByAttackModifier(y.attackModifiers,Ot)||(x++,y.attackModifiers.push(Ot))}})}),p.progress&&p.progress.perks&&p.progress.perks.forEach((N,rt)=>{for(let yt=0;yt<N;yt++){const Ot=p.perks[rt];Ot.cards=Ot.cards||[],Ot.cards.forEach((Lt,wi)=>{(!this.findByAttackModifier(V.UO,Lt.attackModifier)||Ot.type==U.Ib.add||Ot.type==U.Ib.replace&&wi>0)&&(Lt.attackModifier.character=!0)}),Ot.type==U.Ib.add?this.addCards(y,Ot.cards):Ot.type==U.Ib.remove?this.removeCards(y,Ot.cards):Ot.type==U.Ib.replace&&(this.removeCards(y,[Ot.cards[0]]),this.addCards(y,Ot.cards.slice(1,Ot.cards.length)))}}),y}findByAttackModifier(p,y){return p.find(x=>{let N=Object.assign(new V.YY(y.type),y);N.id="",N.revealed=!1;let rt=Object.assign(new V.YY(x.type),x);return rt.id="",rt.revealed=!1,JSON.stringify(N)==JSON.stringify(rt)})}addCards(p,y){y.forEach(x=>{for(let N=0;N<x.count;N++){const rt=this.findByAttackModifier(p.attackModifiers,x.attackModifier);if(rt){let yt=Object.assign(new V.YY(rt.type),rt);p.cards.push(yt)}else console.warn("Did not found AM to add: ",x.attackModifier,p)}})}removeCards(p,y){y.forEach(x=>{for(let N=0;N<x.count;N++){const rt=this.findByAttackModifier(p.cards,x.attackModifier);if(rt){const yt=p.cards.indexOf(rt);p.cards.splice(yt,1)}else console.warn("Did not found AM to replace: ",x.attackModifier,p)}})}}var Q=D(5751),tt=D(3341),K=D(1827),ct=D(7538),st=D(7911);class Ct{constructor(p){this.xpMap=[0,45,95,150,210,275,345,420,500],this.game=p}characterIcon(p){return p.iconUrl?p.iconUrl:"./assets/images/character/icons/"+p.edition+"-"+p.name+".svg"}characterThumbnail(p){return p.thumbnailUrl?p.thumbnailUrl:"./assets/images/character/thumbnail/"+p.edition+"-"+p.name+".png"}addCharacter(p,y){if(!this.game.figures.some(x=>x instanceof t.z&&x.name==p.name&&x.edition==p.edition)){let x=new t.z(p,y);for(x.availableSummons.filter(N=>N.special).forEach(N=>this.createSpecialSummon(x,N)),x.number=1;J.game.figures.some(N=>N instanceof t.z&&N.number==x.number);)x.number++;this.game.figures.push(x),this.game.state==ot.D2.next&&J.attackModifierManager.shuffleModifiers(x.attackModifierDeck),J.sortFigures()}this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}removeCharacter(p){if(this.game.figures.splice(this.game.figures.indexOf(p),1),p.marker){const y=p.edition+"-"+p.name;this.game.figures.forEach(x=>{x instanceof t.z?(x.markers.splice(x.markers.indexOf(y),1),x.summons&&x.summons.forEach(N=>{N.markers.splice(N.markers.indexOf(y),1)})):x instanceof S.C?x.markers.splice(x.markers.indexOf(y),1):x instanceof w.Q&&x.entities.forEach(N=>{N.markers.splice(N.markers.indexOf(y),1)})})}this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}addSummon(p,y){p.summons=p.summons.filter(x=>x.name!=y.name||x.number!=y.number||x.color!=y.color),p.summons.push(y)}removeSummon(p,y){p.summons.splice(p.summons.indexOf(y),1)}addObjective(p){let y=0;for(;this.game.figures.some(N=>N instanceof S.C&&N.id==y);)y++;let x=new S.C(y);p&&(x.name=p.name,x.maxHealth=p.health,x.health=(0,K.j9)(""+p.health),x.escort=p.escort,p.initiative&&(x.initiative=p.initiative)),this.game.figures.push(x),J.sortFigures()}removeObjective(p){this.game.sections.some(y=>y.objectives&&y.objectives.length>0)&&(this.game.sections=[]),this.game.figures.splice(this.game.figures.indexOf(p),1)}next(){this.game.figures.forEach(p=>{p instanceof t.z?(p.initiative=0,p.initiativeVisible=!1,p.off=!1,p.summons=p.summons.filter(y=>!y.dead&&y.health>0),st.r.settings.expireConditions&&(p.entityConditions=p.entityConditions.filter(y=>!y.expired),p.summons.forEach(y=>{y.entityConditions=y.entityConditions.filter(x=>!x.expired)})),st.r.settings.applyConditions&&(p.entityConditions.filter(y=>-1!=y.types.indexOf(tt.CP.turn)).forEach(y=>y.state=tt.tT.normal),p.summons.forEach(y=>{y.entityConditions.filter(x=>-1!=x.types.indexOf(tt.CP.turn)).forEach(x=>x.state=tt.tT.normal)}))):p instanceof S.C&&(p.off=!1,st.r.settings.expireConditions&&(p.entityConditions=p.entityConditions.filter(y=>!y.expired)),st.r.settings.applyConditions&&p.entityConditions.filter(y=>-1!=y.types.indexOf(tt.CP.turn)).forEach(y=>y.state=tt.tT.normal))})}addXP(p,y){p.progress.experience+=y,this.xpMap.forEach((x,N)=>{p.progress.experience>=x&&(N<this.xpMap.length-1&&p.progress.experience<this.xpMap[N+1]||N==this.xpMap.length-1)&&this.setLevel(p,N+1)})}setLevel(p,y){const x=p.stats.find(N=>N.level==y);x?p.stat=x:(p.errors=p.errors||[],!p.errors.find(N=>N.type==j.r.unknown)&&!p.errors.find(N=>N.type==j.r.stat)&&(console.error("No character stat found for level: "+y),p.errors.push(new j.o(j.r.stat,"character",p.name,p.edition,"",""+y))),p.stat=new Q.a(y,0)),p.level=y,p.health==p.maxHealth&&(p.health=p.stat.health),p.maxHealth=p.stat.health,p.health>p.maxHealth&&(p.health=p.maxHealth),p.availableSummons.filter(N=>N.special).forEach(N=>this.createSpecialSummon(p,N)),(p.progress.experience<J.characterManager.xpMap[y-1]||p.progress.experience>=J.characterManager.xpMap[y])&&(p.progress.experience=J.characterManager.xpMap[y-1]),this.game.levelCalculation&&J.levelManager.calculateScenarioLevel()}createSpecialSummon(p,y){if(p.summons=p.summons.filter(x=>x.name!=y.name||0!=x.number||x.color!=ct.mp.custom),!y.level||y.level<=p.level){let x=new ct.eU(y.name,p.level,0,ct.mp.custom);x.maxHealth="number"==typeof y.health?y.health:(0,K.j9)(y.health,p.level),x.attack="number"==typeof y.attack?y.attack:(0,K.j9)(y.attack,p.level),x.movement="number"==typeof y.movement?y.movement:(0,K.j9)(y.movement,p.level),x.range="number"==typeof y.range?y.range:(0,K.j9)(y.range,p.level),x.health=x.maxHealth,x.state=ct.HY.true,x.init=!1,this.addSummon(p,x)}}draw(){this.game.figures.forEach(p=>{p instanceof t.z&&(p.initiativeVisible=!0),(p instanceof t.z||p instanceof S.C)&&!p.exhausted&&p.health>0&&(p.off=!1)})}}var ie=D(5723);class lt{constructor(p){this.game=p}monsterThumbnail(p){return p.thumbnailUrl?p.thumbnailUrl:(p.thumbnail||(p.thumbnail=p.edition+"-"+p.name),"./assets/images/monster/thumbnail/"+p.thumbnail+".png")}getStat(p,y){return p.stats.find(N=>N.level==p.level&&N.type==y)||(p.errors=p.errors||[],!p.errors.find(N=>N.type==j.r.unknown)&&!p.errors.find(N=>N.type==j.r.stat)&&(console.error("Could not find '"+y+"' stats for monster: "+p.name+" level: "+p.level),p.errors.push(new j.o(j.r.stat,"monster",p.name,p.edition,y,""+p.level))),new E.c(y,p.level,0,0,0,0))}addMonster(p){let y=this.game.figures.find(x=>x instanceof W.A&&x.name==p.name&&x.edition==p.edition);if(!y){if(y=new w.Q(p),y.level=J.game.level,y.off=!0,!this.applySameDeck(y)){if(!y.abilities||0==y.abilities.length){const x=J.abilities(y);y.abilities=x.filter(N=>isNaN(+N.level)||+N.level<=(y&&y.level||0)).map(N=>x.indexOf(N))}this.shuffleAbilities(y)}this.game.figures.push(y),J.game.state==ot.D2.next&&J.sortFigures()}return y}removeMonster(p){p.entities=[],this.game.figures.splice(this.game.figures.indexOf(p),1),p.drawExtra||this.game.figures.forEach(y=>{y instanceof w.Q&&y.drawExtra&&(y.name!=p.name||y.edition!=p.edition)&&J.deckData(y).name==J.deckData(p).name&&J.deckData(y).edition==J.deckData(p).edition&&(this.getSameDeckMonster(y)||(y.drawExtra=!1))})}addMonsterEntity(p,y,x,N=!1){if(!p.stats.some(yt=>yt.type==x))return p.errors=p.errors||[],void(!p.errors.find(yt=>yt.type==j.r.unknown)&&!p.errors.find(yt=>yt.type==j.r.monsterType)&&(console.error("Missing type '"+x+"' for "+p.name),p.errors.push(new j.o(j.r.monsterType,"monster",p.name,p.edition,x))));let rt=new ie.g(y,x,p);N&&(rt.summon=ct.HY.new),p.entities.push(rt),this.game.state==ot.D2.next&&-1==p.ability&&(this.applySameDeck(p)?-1==p.ability&&(p.ability=0):p.ability=0),this.game.state==ot.D2.next&&1==p.entities.filter(yt=>!yt.dead&&yt.health>0).length&&J.sortFigures(),p.off&&(p.off=!1,this.game.state==ot.D2.next&&(p.active=!J.game.figures.some(yt=>yt.active))),this.game.state==ot.D2.next&&(rt.active=rt.active||J.game.figures.some(yt=>yt.active&&yt.getInitiative()>p.getInitiative()),rt.off=!1)}removeMonsterEntity(p,y){p.entities.splice(p.entities.indexOf(y),1),(0==p.entities.length||p.entities.every(x=>x.dead||x.health<=0))&&(p.off||J.game.state!=ot.D2.next?p.off=!0:(J.roundManager.toggleFigure(p),p.active=!1))}toggleActive(p,y){this.game.state==ot.D2.next&&(p.active?(y.active=!y.active,p.entities.every(x=>x.dead||x.health<=0||!x.active)&&J.roundManager.toggleFigure(p)):y.active?(y.active=!1,p.entities.every(x=>x.dead||x.health<=0||!x.active)&&(p.off=!0)):(p.off=!1,y.active=!0),y.active?(y.off=!1,!p.active&&this.game.figures.every(x=>!x.active)&&(p.active=!0)):y.off=!0)}getSameDeckMonster(p){return this.game.figures.find(y=>y instanceof w.Q&&(y.name!=p.name||y.edition!=p.edition)&&J.deckData(y).name==J.deckData(p).name&&J.deckData(y).edition==J.deckData(p).edition&&!y.drawExtra)}applySameDeck(p){const y=this.getSameDeckMonster(p);return!!y&&(p.abilities=JSON.parse(JSON.stringify(y.abilities)),p.ability=y.ability,p.drawExtra&&this.drawExtra(p),!0)}drawExtra(p){if(p.drawExtra){p.ability=-1;const y=this.getSameDeckMonster(p);if(!y)return console.error("Draw extra for '"+p.name+"' ("+p.deck+" not possible, not same deck monster found!"),void(p.drawExtra=!1);p.ability=y.ability+1+this.game.figures.filter(x=>x instanceof w.Q&&(x.name!=p.name||x.edition!=p.edition)&&J.deckData(x).name==J.deckData(p).name&&J.deckData(x).edition==J.deckData(p).edition&&x.drawExtra&&x.ability>y.ability).length,p.ability>=p.abilities.length&&this.shuffleAbilities(p)}else this.applySameDeck(p)}next(){this.game.figures.forEach(p=>{if(p instanceof w.Q){const y=this.getAbility(p);y&&(y.shuffle||p.ability>=p.abilities.length)&&this.shuffleAbilities(p),st.r.settings.expireConditions&&p.entities.forEach(x=>{x.entityConditions=x.entityConditions.filter(N=>!N.expired)}),st.r.settings.applyConditions&&p.entities.forEach(x=>{x.entityConditions.filter(N=>-1!=N.types.indexOf(tt.CP.turn)).forEach(N=>N.state=tt.tT.normal)}),p.entities=p.entities.filter(x=>!x.dead&&x.health>0),p.off=0==p.entities.length}})}draw(){this.game.figures.filter(p=>p instanceof w.Q&&!p.drawExtra).forEach(p=>{p instanceof w.Q&&p.entities.length>0&&p.entities.some(y=>!y.dead&&y.health>0)&&(p.ability=p.ability+1+this.game.figures.filter(y=>y instanceof w.Q&&(y.name!=p.name||y.edition!=p.edition)&&J.deckData(y).name==J.deckData(p).name&&J.deckData(y).edition==J.deckData(p).edition&&y.drawExtra&&y.ability>-1).length,p.ability>=p.abilities.length&&this.shuffleAbilities(p))}),this.game.figures.filter(p=>p instanceof w.Q&&p.drawExtra).forEach(p=>{p instanceof w.Q&&(this.drawExtra(p),p.ability>=p.abilities.length&&this.shuffleAbilities(p))})}shuffleAbilities(p){if(p.ability=J.game.state==ot.D2.draw||0==p.entities.length?-1:0,p.drawExtra){const y=this.getSameDeckMonster(p);return y?void this.shuffleAbilities(y):(console.error("Shuffle for '"+p.name+"' ("+p.deck+" not possible, not same deck monster found!"),p.drawExtra=!1,void this.shuffleAbilities(p))}p.abilities=p.abilities.map(y=>({value:y,sort:Math.random()})).sort((y,x)=>y.sort-x.sort).map(({value:y})=>y),this.game.figures.filter(y=>y instanceof w.Q&&this.getSameDeckMonster(y)&&this.getSameDeckMonster(y)==p).map(y=>y).forEach(y=>{y.abilities=JSON.parse(JSON.stringify(p.abilities)),J.game.state==ot.D2.draw?y.ability=-1:(y.ability=p.ability,y.drawExtra&&this.drawExtra(y))})}drawAbility(p){if(p.drawExtra){const y=this.getSameDeckMonster(p);return y?void this.drawAbility(y):(console.error("Draw for '"+p.name+"' ("+p.deck+" not possible, not same deck monster found!"),p.drawExtra=!1,void this.drawAbility(p))}p.ability+=1,this.game.figures.forEach(y=>{y instanceof w.Q&&this.getSameDeckMonster(y)&&(y.ability=p.ability,y.drawExtra&&this.drawExtra(y))})}getAbility(p){if(p.ability<0||p.ability>=p.abilities.length)return;const y=J.abilities(p);return y?y[p.abilities[p.ability]]:void 0}}class at{constructor(p){this.undos=[],this.redos=[],this.undoInfos=[],this.game=p,this.lastSaveTimestamp=(new Date).getTime()}init(){const p=localStorage.getItem("ghs-game");if(null!=p){const yt=Object.assign(new ot.i4,JSON.parse(p));this.game.fromModel(yt),J.uiChange.emit()}else localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel()));st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword&&st.r.settings.serverAutoconnect&&this.connect(),window.addEventListener("popstate",yt=>{}),this.undos=[];const y=localStorage.getItem("ghs-undo");null!=y&&(this.undos=JSON.parse(y)),this.redos=[];const x=localStorage.getItem("ghs-redo");null!=x&&(this.redos=JSON.parse(x)),this.undoInfos=[];const N=localStorage.getItem("ghs-undo-infos");null!=N&&(this.undoInfos=JSON.parse(N));const rt=this.undos.length+this.redos.length-this.undoInfos.length;for(let yt=0;yt<rt;yt++)this.undoInfos.unshift([])}buildWsUrl(p,y,x){let N=y.split("/");const rt=N[0];let yt="";return N.length>1&&(yt="/"+N.splice(1,N.length+1).join("/")),yt=p+rt+":"+x+yt,yt}connect(){st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword&&(this.disconnect(),this.ws=new WebSocket(this.buildWsUrl(st.r.settings.serverWss?"wss://":"ws://",st.r.settings.serverUrl,st.r.settings.serverPort)),this.ws.onmessage=this.onMessage,this.ws.onopen=this.onOpen)}disconnect(){this.permissions=void 0,this.ws&&this.ws.readyState!=WebSocket.CLOSED&&this.ws.close()}onMessage(p){try{const y=JSON.parse(p.data);switch(y.type){case"game":window.document.body.classList.add("working");let x=y.payload;const N=y.undoinfo;N&&(N.length>0&&"serverSync"==N[0]?J.stateManager.before("serverSync",...N.slice(1)):J.stateManager.before("serverSync",...N)),J.game.fromModel(x,!0),J.stateManager.saveLocal(),J.uiChange.emit(),setTimeout(()=>{window.document.body.classList.remove("working")},1);break;case"settings":if(st.r.settings.serverSettings){let rt=y.payload;rt.serverUrl||(rt.serverUrl=st.r.settings.serverUrl),rt.serverPort||(rt.serverPort=st.r.settings.serverPort),rt.serverPassword||(rt.serverPassword=st.r.settings.serverPassword),rt.serverSettings||(rt.serverSettings=st.r.settings.serverSettings),st.r.settings=rt,localStorage.setItem("ghs-settings",JSON.stringify(st.r.settings))}break;case"permissions":J.stateManager.permissions=y.payload||void 0;break;case"error":console.warn("[GHS] Error: "+y.message),"Permission(s) missing"==y.message&&J.stateManager.undo(),y.message.startsWith("Invalid password")&&(console.warn("Disconnect..."),p.target?.close())}}catch(y){console.error("[GHS] "+p.data,y)}}onOpen(p){const y=p.target;y&&y.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&(y.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-game"})),st.r.settings.serverSettings&&y.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-settings"})))}requestSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&st.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"request-settings"}))}wsState(){return st.r.settings.serverUrl&&st.r.settings.serverPort&&st.r.settings.serverPassword?this.ws&&this.ws.readyState||-1:-99}reset(){this.game=new ot.lA,localStorage.removeItem("ghs-game"),localStorage.removeItem("ghs-undo"),localStorage.removeItem("ghs-undo-infos"),localStorage.removeItem("ghs-redo")}saveLocal(){localStorage.setItem("ghs-game",JSON.stringify(this.game.toModel()))}saveSettings(){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&st.r.settings.serverSettings&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"settings",payload:st.r.settings}))}before(...p){window.document.body.classList.add("working"),this.addToUndo(p||[])}after(p=1){if(this.saveLocal(),this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword){let y={password:st.r.settings.serverPassword,type:"game",payload:this.game.toModel(),undoinfo:this.undoInfos[this.undos.length-1]};this.ws.send(JSON.stringify(y))}this.lastSaveTimestamp=(new Date).getTime(),J.uiChange.emit(),p?setTimeout(()=>{window.document.body.classList.remove("working")},p):window.document.body.classList.remove("working")}addToUndo(p){this.game.toModel()!=this.undos[this.undos.length-1]&&(this.undos.push(this.game.toModel()),this.undos.length>st.r.settings.maxUndo&&this.undos.splice(0,this.undos.length-st.r.settings.maxUndo),this.undoInfos.splice(this.undoInfos.length-this.redos.length,this.redos.length),this.undoInfos.push(p),this.undoInfos.length>this.undos.length&&this.undoInfos.splice(0,this.undoInfos.length-this.undos.length),this.redos=[],localStorage.setItem("ghs-undo",JSON.stringify(this.undos)),localStorage.setItem("ghs-undo-infos",JSON.stringify(this.undoInfos)),localStorage.setItem("ghs-redo",JSON.stringify([])))}hasUndo(){return this.undos.length>0}undo(){if(window.document.body.classList.add("working"),this.undos.length>0){this.redos.push(this.game.toModel());const p=this.undos.splice(this.undos.length-1,1)[0];this.game.fromModel(p)}localStorage.setItem("ghs-redo",JSON.stringify(this.redos)),localStorage.setItem("ghs-undo",JSON.stringify(this.undos)),this.after()}hasRedo(){return this.redos.length>0}redo(){if(window.document.body.classList.add("working"),this.redos.length>0){this.undos.push(this.game.toModel());const p=this.redos.splice(this.redos.length-1,1)[0];this.game.fromModel(p)}localStorage.setItem("ghs-redo",JSON.stringify(this.redos)),localStorage.setItem("ghs-undo",JSON.stringify(this.undos)),this.after()}savePermissions(p,y){this.ws&&this.ws.readyState==WebSocket.OPEN&&st.r.settings.serverPassword&&this.ws.send(JSON.stringify({password:st.r.settings.serverPassword,type:"permissions",payload:{permissions:y,password:p}}))}hasCharacterPermission(p){return null==this.permissions||this.permissions.characters||this.permissions.character.some(y=>y.name==p.name&&y.edition==p.edition)}hasMonsterPermission(p){return null==this.permissions||this.permissions.monsters||this.permissions.monster.some(y=>y.name==p.name&&y.edition==p.edition)}}class St{constructor(p){this.game=p}changeHealth(p,y){this.changeHealthHighlightConditions(p,y),p.health+=y,p.health>p.maxHealth?p.health=(0,K.j9)(""+p.maxHealth):p.health<0&&(p.health=0)}changeHealthHighlightConditions(p,y){if(st.r.settings.applyConditions){p.entityConditions.filter(rt=>rt.name==tt.fT.poison||rt.name==tt.fT.poison_x).forEach(rt=>{rt.highlight=y<0&&!rt.expired});const x=p.entityConditions.find(rt=>!rt.expired&&rt.name==tt.fT.ward),N=p.entityConditions.find(rt=>!rt.expired&&rt.name==tt.fT.brittle);y<0&&x&&!N?(x.value-=y,x.highlight=!0):x&&(x.highlight=!1),y<0&&N&&!x?(N.value-=y,N.highlight=!0):N&&(N.highlight=!1),N&&x&&(N.highlight=!1,x.highlight=!1)}}hasCondition(p,y){return p.entityConditions.some(x=>x.name==y.name&&!x.expired)}activeConditions(p){return p.entityConditions.filter(y=>!y.expired)}isImmune(p,y,x){const N=p.stats.find(yt=>yt.level==y.level&&yt.type==y.type);let rt=null!=N&&null!=N.immunities&&-1!=N.immunities.indexOf(x);if(!rt){if(x==tt.fT.wound_x)return this.isImmune(p,y,tt.fT.wound);if(x==tt.fT.poison_x)return this.isImmune(p,y,tt.fT.poison);if(x==tt.fT.rupture)return this.isImmune(p,y,tt.fT.wound);if(x==tt.fT.infect)return this.isImmune(p,y,tt.fT.poison);if(x==tt.fT.chill)return this.isImmune(p,y,tt.fT.immobilize)||this.isImmune(p,y,tt.fT.muddle)}return rt}toggleCondition(p,y,x,N){if(this.hasCondition(p,y))p.entityConditions=p.entityConditions.filter(rt=>rt.name!=y.name);else{let rt=p.entityConditions.find(yt=>yt.name==y.name);rt?(rt.expired=!1,rt.state=tt.tT.normal):(rt=new tt.hT(y.name,y.value),p.entityConditions.push(rt)),!x&&-1!=rt.types.indexOf(tt.CP.expire)&&(rt.state=tt.tT.expire),N&&-1!=rt.types.indexOf(tt.CP.turn)&&(rt.state=tt.tT.expire)}}applyCondition(p,y){const x=p.entityConditions.find(N=>N.name==y&&!N.expired&&-1!=N.types.indexOf(tt.CP.apply));x&&((x.name==tt.fT.poison||x.name==tt.fT.poison_x)&&(p.health-=x.value,p.health<0&&(p.health=0),0==p.health&&(p instanceof ie.g||p instanceof ct.eU)&&!p.dead&&(p.dead=!0),x.highlight=!1),x.name==tt.fT.ward&&(p.health+=Math.floor((x.value-1)/2),p.health>(0,K.j9)(""+p.maxHealth)&&(p.health=(0,K.j9)(""+p.maxHealth)),p.health>0&&(p instanceof ie.g||p instanceof ct.eU)&&p.dead&&(p.dead=!1),x.value=1,x.expired=!0,x.highlight=!1),x.name==tt.fT.brittle&&(p.health-=Math.floor((x.value-1)/2),p.health<0&&(p.health=0),0==p.health&&(p instanceof ie.g||p instanceof ct.eU)&&!p.dead&&(p.dead=!0),x.value=1,x.expired=!0,x.highlight=!1))}declineApplyCondition(p,y){const x=p.entityConditions.find(N=>N.name==y&&!N.expired&&-1!=N.types.indexOf(tt.CP.apply));x&&(x.highlight=!1,x.name==tt.fT.ward&&(x.value=1,x.expired=!0),x.name==tt.fT.brittle&&(x.value=1,x.expired=!0))}restoreConditions(p){p.entityConditions.forEach(y=>{y.name==tt.fT.chill&&(y.expired?y.expired=!1:y.value++),-1!=y.types.indexOf(tt.CP.expire)&&(y.expired?y.expired=!1:y.state==tt.tT.expire&&(y.state=tt.tT.normal))})}expireConditions(p){p.entityConditions.forEach(y=>{y.name==tt.fT.chill&&(1==y.value?y.expired=!0:y.value--)}),p.entityConditions.forEach(y=>{-1!=y.types.indexOf(tt.CP.expire)&&(y.state==tt.tT.normal?y.state=tt.tT.expire:y.state==tt.tT.expire&&(y.expired=!0))})}applyConditionsTurn(p){const y=p.entityConditions.find(x=>!x.expired&&x.state==tt.tT.normal&&x.name==tt.fT.regenerate);if(y){const x=p.entityConditions.every(N=>N.expired||-1==N.types.indexOf(tt.CP.preventHeal))&&p.health<p.maxHealth;p.entityConditions.filter(N=>!N.expired&&-1!=N.types.indexOf(tt.CP.clearHeal)).forEach(N=>N.expired=!0),x&&(y.state=tt.tT.expire,p.health+=y.value,p.health>(0,K.j9)(""+p.maxHealth)&&(p.health=(0,K.j9)(""+p.maxHealth))),y.highlight=!0,setTimeout(()=>{y.highlight=!1},1e3)}p.entityConditions.filter(x=>!x.expired&&x.state==tt.tT.normal&&-1!=x.types.indexOf(tt.CP.turn)).forEach(x=>{x.state=tt.tT.turn,(x.name==tt.fT.wound||x.name==tt.fT.wound_x)&&(p.health=p.health-x.value,p.health<0&&(p.health=0),0==p.health&&(p instanceof t.z||p instanceof S.C)&&!p.exhausted&&(p.exhausted=!0),0==p.health&&(p instanceof ie.g||p instanceof ct.eU)&&!p.dead&&(p.dead=!0),x.highlight=!0,setTimeout(()=>{x.highlight=!1},1e3))})}unapplyConditionsTurn(p){p.entityConditions.filter(x=>x.state==tt.tT.turn&&-1!=x.types.indexOf(tt.CP.turn)).forEach(x=>{x.expired?x.expired=!1:(x.state=tt.tT.normal,(x.name==tt.fT.wound||x.name==tt.fT.wound_x)&&(p.health=p.health+x.value,p.health>(0,K.j9)(""+p.maxHealth)&&(p.health=(0,K.j9)(""+p.maxHealth)),p.health>0&&(p instanceof ie.g||p instanceof ct.eU)&&p.dead&&(p.dead=!1)))});const y=p.entityConditions.find(x=>x.name==tt.fT.regenerate);if(y){const x=p.entityConditions.every(N=>-1==N.types.indexOf(tt.CP.preventHeal))&&y.state==tt.tT.expire;p.entityConditions.filter(N=>N.expired&&-1!=N.types.indexOf(tt.CP.clearHeal)).forEach(N=>N.expired=!1),x&&(y.state=tt.tT.normal,p.health-=y.value,p.health<0&&(p.health=0))}}applyConditionsAfter(p){const y=p.entityConditions.find(x=>!x.expired&&x.name==tt.fT.bane);y&&(p.health=p.health-10,p.health<0&&(p.health=0),0==p.health&&(p instanceof ie.g||p instanceof ct.eU)&&!p.dead&&(p.dead=!0),y.expired=!0,y.highlight=!0,setTimeout(()=>{y.highlight=!1},1e3))}unapplyConditionsAfter(p){const y=p.entityConditions.find(x=>x.expired&&x.name==tt.fT.bane);y&&(p.health=p.health+10,p.health>(0,K.j9)(""+p.maxHealth)&&(p.health=(0,K.j9)(""+p.maxHealth)),p.health>0&&(p instanceof ie.g||p instanceof ct.eU)&&p.dead&&(p.dead=!1),y.highlight=!1,y.expired=!1)}highlightedConditions(p){return p.entityConditions.filter(y=>y.highlight)}hasMarker(p,y){return p.markers&&-1!=p.markers.indexOf(y)}toggleMarker(p,y){this.hasMarker(p,y)?p.markers.splice(p.markers.indexOf(y),1):p.markers.push(y)}undoInfos(p,y,x){let N=[];return p instanceof t.z&&y instanceof t.z?N.push(x+".char","data.character."+p.name):p instanceof ct.eU&&y instanceof t.z?N.push(x+".summon","data.character."+y.name,"data.summon."+p.name):p instanceof S.C?N.push(x+".objective",p.title||p.name):y instanceof w.Q&&p instanceof ie.g&&N.push(x+".monster","data.monster."+y.name,"monster."+p.type,""+p.number),N}}var oe=D(1571);class wt{constructor(p){this.game=p}ge5PlayerOffset(){if(!this.game.ge5Player)return 0;const p=this.game.figures.filter(y=>y instanceof t.z).length;return p<=4?0:p-3}adjustedLevel(){const p=this.game.level-this.ge5PlayerOffset()+this.game.bonusAdjustment;return p<0?0:p>7?7:p}trap(){return 2+this.game.level}experience(){return 4+2*this.adjustedLevel()}loot(){let p=2+Math.floor(this.adjustedLevel()/2);return this.adjustedLevel()>=7&&(p=6),p}terrain(){return 1+Math.ceil(this.game.level/3)}scenarioLevel(){const p=this.game.figures.filter(x=>x instanceof t.z).length;if(0==p)return 0;const y=this.game.figures.filter(x=>x instanceof t.z).map(x=>x.level).reduce((x,N)=>x+N);return Math.ceil((y/p+(this.game.solo?1:0))/2)+this.ge5PlayerOffset()}calculateScenarioLevel(){this.game.levelAdjustment>6?this.game.levelAdjustment=6:this.game.levelAdjustment<-6&&(this.game.levelAdjustment=-6);let p=this.scenarioLevel()+this.game.levelAdjustment;p>7?p=7:p<0&&(p=0),this.setLevel(p)}setLevel(p){this.game.level!=p&&(this.game.level=p,this.game.figures.forEach(y=>{y instanceof w.Q&&(y.level=p,y.entities.forEach(x=>{x.level=p}))}))}}var mt=D(9384),Pt=D(1273);class Y{constructor(p){this.game=p}setScenario(p){if(this.game.scenario=p?new Pt.$(p,p.custom):void 0,p&&!p.custom){const y=J.editionData.find(x=>x.edition==p.edition);if(!y)return void console.error("Could not find edition data!");J.roundManager.resetScenario(),this.applyScenarioData(y,p)}}finishScenario(p=!0){this.game.figures.forEach(y=>{y instanceof t.z&&(J.characterManager.addXP(y,(p?y.experience:0)+J.levelManager.experience()),y.progress.gold+=y.loot*J.levelManager.loot())}),p&&this.game.party&&this.game.scenario&&(this.game.party.scenarios.push(new mt._(this.game.scenario.index,this.game.scenario.edition,this.game.scenario.group,this.game.scenario.custom?this.game.scenario.name:"")),this.game.party.manualScenarios=this.game.party.manualScenarios.filter(y=>this.game.scenario&&(this.game.scenario.index!=y.index||this.game.scenario.edition!=y.edition||this.game.scenario.group!=y.group))),this.game.scenario=void 0,this.game.sections=[],J.roundManager.resetScenario()}addSection(p){const y=J.editionData.find(x=>x.edition==p.edition);y?this.game.sections.some(x=>x.edition==p.edition&&x.index==p.index&&x.group==p.group)||(this.game.sections.push(p),this.applyScenarioData(y,p)):console.error("Could not find edition data!")}applyScenarioData(p,y){y.monsters&&y.monsters.forEach(x=>{const N=J.monstersData(!0).find(rt=>rt.name==x&&(rt.edition==p.edition||p.extentions&&-1!=p.extentions.indexOf(rt.edition)));if(N){let rt=J.monsterManager.addMonster(N);y.allies&&-1!=y.allies.indexOf(rt.name)&&(rt.isAlly=!0)}}),y.objectives&&y.objectives.forEach(x=>{J.characterManager.addObjective(x)})}scenarioData(p){const y=J.editionData.find(x=>x.edition==p);return y?this.game.party.campaignMode&&y.scenarios.some(x=>x.initial)?y.scenarios.filter(x=>{if(x.initial||this.game.party.scenarios.find(yt=>x.index==yt.index&&x.edition==yt.edition&&x.group==yt.group)||this.game.party.manualScenarios.find(yt=>x.index==yt.index&&x.edition==yt.edition&&x.group==yt.group))return!0;let N=!1,rt=!x.requires||0==x.requires.length;return this.game.party.scenarios.forEach(yt=>{const Ot=y.scenarios.find(Lt=>Lt.index==yt.index&&Lt.edition==yt.edition&&Lt.group==yt.group);Ot&&Ot.group==x.group&&Ot.unlocks&&-1!=Ot.unlocks.indexOf(x.index)&&(N=!0)}),rt||(rt=x.requires.some(yt=>yt.every(Ot=>this.game.party.scenarios.find(Lt=>Lt.index==Ot&&Lt.group==x.group&&Lt.edition==x.edition)))),N&&rt}):y.scenarios:[]}isBlocked(p){let y=!1;const x=J.editionData.find(N=>N.edition==p.edition);return x&&this.game.party.scenarios.forEach(N=>{const rt=x.scenarios.find(yt=>yt.index==N.index&&yt.edition==N.edition&&yt.group==N.group);rt&&rt.blocks&&-1!=rt.blocks.indexOf(p.index)&&(y=!0)}),y}scenarioUndoArgs(p){return(p=p||J.game.scenario)?[p.index,"data.scenario."+p.name,p.custom?"scenario.custom":"data.edition."+p.edition]:["","",""]}scenarioDataForModel(p){if(p.custom)return new mt.t(p.custom,"",[],[],[],[],[],[],[],"");const y=J.scenarioData(!0).find(x=>x.index==p.index&&x.edition==p.edition&&x.group==p.group);if(y)return new mt.t(y.name,y.index,y.unlocks,y.blocks,y.requires,y.links,y.monsters,y.allies,y.objectives,y.edition,y.group,y.spoiler);console.warn("Invalid scenario data:",p)}sectionDataForModel(p){const y=J.sectionData(!0).find(x=>x.index==p.index&&x.edition==p.edition&&x.group==p.group);if(y)return new mt.t(y.name,y.index,y.unlocks,y.blocks,y.requires,y.links,y.monsters,y.allies,y.objectives,y.edition,y.group,y.spoiler);console.warn("Invalid section data:",p)}toModel(p,y=""){return new mt._(p.index,p.edition,p.group,y)}}var G=D(7983);class et{constructor(p){this.working=!1,this.game=p}nextAvailable(){return this.game.figures.length>0&&(this.game.state==ot.D2.next||this.game.figures.every(p=>p instanceof w.Q||(p instanceof S.C||p instanceof t.z)&&(p.getInitiative()>0||p.exhausted||!st.r.settings.initiativeRequired)))}nextGameState(){this.working=!0,this.game.totalSeconds+=this.game.playSeconds,this.game.playSeconds=0,this.game.state==ot.D2.next?(this.game.state=ot.D2.draw,J.characterManager.next(),J.monsterManager.next(),J.attackModifierManager.next(),st.r.settings.moveElements&&this.game.elementBoard.forEach(p=>{p.state==G.fq.strong?p.state=G.fq.waning:p.state==G.fq.waning&&(p.state=G.fq.inert)}),J.sortFigures(),this.game.figures.forEach(p=>p.active=!1)):this.nextAvailable()&&(0==this.game.round&&J.attackModifierManager.draw(),this.game.state=ot.D2.next,this.game.round++,J.characterManager.draw(),J.monsterManager.draw(),st.r.settings.moveElements&&this.game.elementBoard.forEach(p=>{p.state==G.fq.new&&(p.state=G.fq.strong)}),J.sortFigures(),this.game.figures.length>0&&this.toggleFigure(this.game.figures[0])),J.uiChange.emit(),setTimeout(()=>this.working=!1,1)}toggleFigure(p){const y=this.game.figures,x=y.indexOf(p);if(-1!=x){p.active||p.off?p.active&&!p.off?this.afterTurn(p):y.some((N,rt)=>rt<x&&N.active)?this.beforeTurn(p):p.active=!0:this.turn(p),this.permanentDead(p)&&this.afterTurn(p);for(let N=0;N<y.length;N++){const rt=y[N];p.active&&(N!=x&&(rt.active=!1),N<x?this.afterTurn(rt):(!(rt instanceof w.Q)||rt instanceof w.Q&&rt.entities.length>0)&&this.beforeTurn(rt)),p.off&&!this.permanentDead(rt)&&(N<x&&!rt.off&&!y.some(yt=>yt.active)?this.turn(rt):N>x&&(!(rt instanceof w.Q)||rt instanceof w.Q&&rt.entities.length>0)&&(!rt.off&&N>x&&!y.some((yt,Ot)=>yt.active&&Ot<N)?this.turn(rt):rt.active=!1))}}else console.error("Invalid figure")}beforeTurn(p){p.off?(p.off=!1,p instanceof w.Q&&p.entities.forEach(y=>{y.active=p.active&&!y.off}),st.r.settings.expireConditions&&(p instanceof t.z?(J.entityManager.restoreConditions(p),p.summons.forEach(y=>{J.entityManager.restoreConditions(y)})):p instanceof S.C?J.entityManager.restoreConditions(p):p instanceof w.Q&&p.entities.forEach(y=>{J.entityManager.restoreConditions(y)}))):p instanceof w.Q&&p.entities.forEach(y=>{y.active=p.active,y.off=!1}),st.r.settings.applyConditions&&(p.active||(p instanceof t.z?(J.entityManager.unapplyConditionsTurn(p),p.summons.forEach(y=>{J.entityManager.unapplyConditionsTurn(y)})):p instanceof S.C?J.entityManager.unapplyConditionsTurn(p):p instanceof w.Q&&p.entities.forEach(y=>{J.entityManager.unapplyConditionsTurn(y)}))),st.r.settings.applyConditions&&(p instanceof t.z?(J.entityManager.unapplyConditionsAfter(p),p.summons.forEach(y=>{J.entityManager.unapplyConditionsAfter(y)})):p instanceof S.C?J.entityManager.unapplyConditionsAfter(p):p instanceof w.Q&&p.entities.forEach(y=>{J.entityManager.unapplyConditionsAfter(y)}),p.off&&!this.permanentDead(p)&&(p.off=!1))}turn(p){p.active=!0,p instanceof w.Q&&p.entities.every(y=>!y.off)&&p.entities.forEach(y=>{y.active=!0}),this.game.elementBoard.forEach(y=>{y.state==G.fq.new&&(y.state=G.fq.strong)}),st.r.settings.applyConditions&&(p instanceof t.z?(J.entityManager.applyConditionsTurn(p),p.summons.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),p.exhausted&&this.toggleFigure(p)):p instanceof S.C?(J.entityManager.applyConditionsTurn(p),p.exhausted&&this.toggleFigure(p)):p instanceof w.Q&&(p.entities.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),p.entities.every(y=>y.dead)&&this.toggleFigure(p)))}afterTurn(p){if(!p.off)if(p.off=!0,p.active=!1,p instanceof w.Q&&p.entities.forEach(y=>{y.active=!1,y.off=!0}),st.r.settings.expireConditions&&(p instanceof t.z?(J.entityManager.expireConditions(p),p.summons.forEach(y=>{J.entityManager.expireConditions(y)})):p instanceof S.C?J.entityManager.expireConditions(p):p instanceof w.Q&&p.entities.forEach(y=>{J.entityManager.expireConditions(y)})),st.r.settings.applyConditions&&(p instanceof t.z?(J.entityManager.applyConditionsTurn(p),p.summons.forEach(y=>{J.entityManager.applyConditionsTurn(y)})):p instanceof S.C?J.entityManager.applyConditionsTurn(p):p instanceof w.Q&&p.entities.forEach(y=>{J.entityManager.applyConditionsTurn(y)}),p instanceof t.z?(J.entityManager.applyConditionsAfter(p),p.summons.forEach(y=>{J.entityManager.applyConditionsAfter(y)})):p instanceof S.C?J.entityManager.applyConditionsAfter(p):p instanceof w.Q&&p.entities.forEach(y=>{J.entityManager.applyConditionsAfter(y)})),p instanceof t.z)for(let y of p.summons)y.state==ct.HY.new&&(y.state=ct.HY.true);else p instanceof w.Q&&p.entities.forEach(y=>{y.summon==ct.HY.new&&(y.summon=ct.HY.true)})}permanentDead(p){return(p instanceof t.z||p instanceof S.C)&&(p.exhausted||p.health<=0)||p instanceof w.Q&&p.entities.every(y=>y.dead||y.health<=0)}resetScenario(){this.game.playSeconds=0,this.game.sections=[],this.game.round=0,this.game.state=ot.D2.draw,this.game.elementBoard.forEach(p=>p.state=G.fq.inert),this.game.monsterAttackModifierDeck=new V.ut,this.game.figures=this.game.figures.filter(p=>p instanceof t.z),this.game.figures.forEach(p=>{p instanceof t.z&&(p.health=p.maxHealth,p.loot=0,p.experience=0,p.entityConditions=[],p.summons=[],p.initiative=0,p.active=!1,p.off=!1,p.exhausted=!1,p.availableSummons.filter(y=>y.special).forEach(y=>J.characterManager.createSpecialSummon(p,y)),p.attackModifierDeck=J.attackModifierManager.buildCharacterAttackModifierDeck(p))}),J.uiChange.emit()}}const J=new class X{constructor(){this.game=new ot.lA,this.editionData=[],this.uiChange=new oe.vpe,this.stateManager=new at(this.game),this.entityManager=new St(this.game),this.characterManager=new Ct(this.game),this.monsterManager=new lt(this.game),this.attackModifierManager=new gt(this.game),this.levelManager=new wt(this.game),this.scenarioManager=new Y(this.game),this.roundManager=new et(this.game),this.uiChange.subscribe({next:()=>{this.game.levelCalculation&&this.levelManager.calculateScenarioLevel()}})}editions(){return this.editionData.map(p=>p.edition)}currentEditions(){return this.game.edition?[this.game.edition,...this.editionExtensions(this.game.edition)]:this.editions()}editionExtensions(p){const y=this.editionData.find(x=>x.edition==p);return y&&y.extentions||[]}charactersData(p=!1){return this.editionData.filter(y=>p||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.characters).flat().filter((y,x,N)=>y.replace||!y.replace&&!N.find(rt=>rt.replace&&rt.name==y.name&&rt.edition==y.edition))}monstersData(p=!1){return this.editionData.filter(y=>p||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.monsters).flat().filter((y,x,N)=>y.replace||!y.replace&&!N.find(rt=>rt.replace&&rt.name==y.name&&rt.edition==y.edition))}decksData(p=!1){return this.editionData.filter(y=>p||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.decks).flat()}scenarioData(p=!1){return this.editionData.filter(y=>p||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.scenarios).flat()}sectionData(p=!1){return this.editionData.filter(y=>p||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.sections).flat()}itemData(p=!1){return this.editionData.filter(y=>p||!this.game.edition||y.edition==this.game.edition||y.extentions&&-1!=y.extentions.indexOf(this.game.edition)).map(y=>y.items).flat()}item(p,y){return this.itemData(!0).find(x=>x&&x.id==p&&x.edition==y)}hazardousTerrain(){return this.editionData.some(this.game.edition?p=>p.edition==this.game.edition&&p.hazardousTerrain:p=>p.hazardousTerrain)}conditions(p=!1){if(p||!this.game.edition)return tt.G3;const y=this.editionData.find(x=>x.edition==this.game.edition);return y&&y.conditions?y.conditions.map(x=>x.split(":").length>1?new tt.gP(x.split(":")[0],+x.split(":")[1]):new tt.gP(x)):[]}conditionsForTypes(...p){return this.conditions(!1).filter(y=>p.every(x=>-1!=y.types.indexOf(x)))}allConditionsForTypes(...p){return this.conditions(!0).filter(y=>p.every(x=>-1!=y.types.indexOf(x)))}markers(){return this.game.figures.filter(p=>p instanceof t.z&&p.marker).map(p=>p.edition+"-"+p.name)}sortFigures(){this.game.figures.sort((p,y)=>this.game.state==ot.D2.draw?this.sortFiguresByTypeAndName(p,y):st.r.settings.initiativeRequired?p.getInitiative()==y.getInitiative()?this.sortFiguresByTypeAndName(p,y):p.getInitiative()-y.getInitiative():0)}sortFiguresByTypeAndName(p,y){let x=p.name.toLowerCase();p instanceof t.z?x=p.title.toLowerCase()||st.r.getLabel("data.character."+p.name).toLowerCase():p instanceof w.Q?x=st.r.getLabel("data.monster."+p.name).toLowerCase():p instanceof S.C&&(x=p.title?p.title:st.r.getLabel(p.name?"data.objective."+p.name:p.escort?"escort":"objective").toLowerCase());let N=y.name.toLowerCase();return y instanceof t.z?N=y.title.toLowerCase()||st.r.getLabel("data.character."+y.name).toLowerCase():y instanceof w.Q?N=st.r.getLabel("data.monster."+y.name).toLowerCase():y instanceof S.C&&(N=y.title?y.title:st.r.getLabel(y.name?"data.objective."+y.name:y.escort?"escort":"objective").toLowerCase()),p instanceof t.z&&y instanceof w.Q?-1:p instanceof w.Q&&y instanceof t.z?1:p instanceof t.z&&y instanceof S.C?-1:p instanceof S.C&&y instanceof t.z?1:p instanceof w.Q&&y instanceof S.C?-1:p instanceof S.C&&y instanceof w.Q?1:p instanceof w.Q&&y instanceof w.Q?0:x<N?-1:1}deckData(p){let y=this.decksData(!0).find(x=>(x.name==p.deck||x.name==p.name)&&x.edition==p.edition);return y||(y=this.decksData(!0).find(x=>(x.name==p.deck||x.name==p.name)&&-1!=this.editionExtensions(p.edition).indexOf(x.edition))),y||(p.errors=p.errors||[],!p.errors.find(x=>x.type==j.r.unknown)&&!p.errors.find(x=>x.type==j.r.deck)&&(console.error("Unknwon deck: "+p.name+(p.deck?"["+p.deck+"]":"")+" for "+p.edition),p.errors.push(new j.o(j.r.deck,p instanceof t.z?"character":"monster",p.name,p.edition,p.deck))),new B("",[],""))}abilities(p){return this.deckData(p).abilities||[]}getCharacterData(p,y){let x=this.charactersData(!0).find(N=>N.name==p&&N.edition==y);return x||(x=this.charactersData(!0).find(N=>N.name==p),x||(x=new R.x,x.name=p,x.edition=y,x.errors=x.errors||[],x.errors.find(N=>N.type==j.r.unknown)||(console.error("unknown character '"+p+"' for edition '"+y+"'"),x.errors.push(new j.o(j.r.unknown,"character",p,y)))),x)}isCharacter(p){return p instanceof t.z}isObjective(p){return p instanceof S.C}isMonster(p){return p instanceof w.Q}isMonsterEntity(p){return p instanceof ie.g}isSummon(p){return p instanceof ct.eU}toCharacter(p){return p}toObjective(p){return p}toMonster(p){return p}toMonsterEntity(p){return p}toSummon(p){return p}getEdition(p){return this.game.figures.some(y=>typeof p==typeof y&&p.name==y.name&&p.edition!=y.edition||this.game.edition&&p.edition!=this.game.edition)?p.edition:""}getMonsterData(p,y){let x=this.monstersData(!0).find(N=>N.name==p&&N.edition==y);return x||(x=this.monstersData(!0).find(N=>N.name==p),x||(x=new W.A(p,0,new E.c(F.M.normal,0,0,0,0,0),[],""),x.errors=x.errors||[],x.name=p,x.edition=y,x.errors.find(N=>N.type==j.r.unknown)||(console.error("unknown monster '"+p+"' for edition '"+y+"'"),x.errors.push(new j.o(j.r.unknown,"monster",p,y)))),x)}}},7911:(bt,it,D)=>{D.d(it,{r:()=>j});var t=D(5861),R=D(8810),B=D(4892);const j=new class W{constructor(){this.defaultLocale="en",this.defaultEditionDataUrls=["./assets/data/gh.json","./assets/data/jotl.json","./assets/data/fc.json","./assets/data/fh.json","./assets/data/cs.json"],this.settings=new R.Z,this.label={},this.locales=["en","de"],this.loadSettings()}reset(){localStorage.removeItem("ghs-settings"),this.loadSettings()}loadSettings(){var w=this;return(0,t.Z)(function*(){const E=localStorage.getItem("ghs-settings");if(null!=E)w.settings=Object.assign(new R.Z,JSON.parse(E));else try{yield fetch("./ghs-settings-default.json").then(F=>{if(!F.ok)throw Error();return F.json()}).then(F=>{w.settings=Object.assign(new R.Z,F)})}catch{w.settings=new R.Z}w.setLocale(w.settings.locale),w.sortSpoilers()})()}init(){var w=this;return(0,t.Z)(function*(){for(let E of w.defaultEditionDataUrls)-1==j.settings.editionDataUrls.indexOf(E)&&-1==j.settings.excludeEditionDataUrls.indexOf(E)&&j.settings.editionDataUrls.push(E);for(let E of j.settings.editionDataUrls)yield j.loadEditionData(E)})()}storeSettings(){localStorage.setItem("ghs-settings",JSON.stringify(this.settings)),this.settings.serverSettings&&B.v.stateManager.saveSettings(),B.v.uiChange.emit()}setCalculate(w){this.settings.calculate=w,this.storeSettings()}setCalculateStats(w){this.settings.calculateStats=w,this.storeSettings()}setAbilityNumbers(w){this.settings.abilityNumbers=w,this.storeSettings()}setEliteFirst(w){this.settings.eliteFirst=w,this.storeSettings()}setExpireConditions(w){this.settings.expireConditions=w,this.storeSettings()}setApplyConditions(w){this.settings.applyConditions=w,this.storeSettings()}setActiveApplyConditions(w){this.settings.activeApplyConditions=w,this.storeSettings()}setMoveElements(w){this.settings.moveElements=w,this.storeSettings()}setHideStats(w){this.settings.hideStats=w,this.storeSettings()}setRandomStandees(w){this.settings.randomStandees=w,this.storeSettings()}setActiveStandees(w){this.settings.activeStandees=w,this.storeSettings()}setAllyAttackModifierDeck(w){this.settings.allyAttackModifierDeck=w,this.storeSettings()}setInitiativeRequired(w){this.settings.initiativeRequired=w,this.storeSettings()}setDisableStandees(w){this.settings.disableStandees=w,this.storeSettings()}setDragValues(w){this.settings.dragValues=w,this.storeSettings()}setFullscreen(w){this.settings.fullscreen=w,this.storeSettings()}setDisableColumns(w){this.settings.disableColumns=w,this.storeSettings()}setAutoscroll(w){this.settings.autoscroll=w,this.storeSettings()}setHints(w){this.settings.hints=w,this.storeSettings()}setBrowserNavigation(w){this.settings.browserNavigation=w,this.storeSettings()}setZoom(w){this.settings.zoom=w,this.storeSettings()}setBarsize(w){this.settings.barsize=w,this.storeSettings()}setFontsize(w){this.settings.fontsize=w,this.storeSettings()}setServerAutoconnect(w){this.settings.serverAutoconnect=w,this.storeSettings()}setServerSettings(w){this.settings.serverSettings=w,w?B.v.stateManager.requestSettings():this.storeSettings()}setServerWss(w){this.settings.serverWss=w,this.storeSettings()}setServer(w,E,F){this.settings.serverUrl=w,this.settings.serverPort=E,this.settings.serverPassword=F,this.storeSettings()}setMaxUndo(w){this.settings.maxUndo=w,this.storeSettings()}addSpoiler(w){-1==this.settings.spoilers.indexOf(w)&&(this.settings.spoilers.push(w),this.sortSpoilers(),this.storeSettings())}addSpoilers(w){for(let E of w)-1==this.settings.spoilers.indexOf(E.name)&&this.settings.spoilers.push(E.name);this.storeSettings()}removeSpoiler(w){-1!=this.settings.spoilers.indexOf(w)&&(this.settings.spoilers.splice(this.settings.spoilers.indexOf(w),1),this.storeSettings())}removeAllSpoilers(){this.settings.spoilers=[],this.storeSettings()}sortSpoilers(){this.settings.spoilers.sort((w,E)=>w.toLowerCase()>E.toLowerCase()?1:w.toLowerCase()<E.toLowerCase()?-1:0)}cleanEditionData(){B.v.editionData=[]}loadEditionData(w){var E=this;return(0,t.Z)(function*(){try{return yield fetch(w).then(S=>{if(S.ok)return S.json();console.warn("Invalid data url: "+w+" ["+S.statusText+"]")}).then(S=>-1!=B.v.editions().indexOf(S.edition)?(console.warn("Edition already exists: "+S.edition),!1):(S.url=w,B.v.editionData.push(S),E.loadDataLabel(S),!0))}catch(F){return console.warn("Invalid data url: "+w+" ["+F+"]"),!1}})()}loadDataLabel(w){this.label.data||(this.label.data={}),this.settings.locale!=this.defaultLocale&&w.label&&w.label[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,w.label[this.defaultLocale]),w.labelSpoiler&&w.labelSpoiler[this.defaultLocale]&&(this.label.data=this.merge(this.label.data,w.labelSpoiler[this.defaultLocale]))),w.label&&w.label[this.settings.locale]&&(this.label.data=this.merge(this.label.data,w.label[this.settings.locale])),w.labelSpoiler&&w.labelSpoiler[this.settings.locale]&&(this.label.data=this.merge(this.label.data,w.labelSpoiler[this.settings.locale])),this.label.data.edition||(this.label.data.edition={}),this.label.data.character||(this.label.data.character={}),this.label.data.monster||(this.label.data.monster={}),this.label.data.deck||(this.label.data.deck={}),this.label.data.ability||(this.label.data.ability={}),this.label.data.scenario||(this.label.data.scenario={}),this.label.data.section||(this.label.data.section={}),this.label.data.objective||(this.label.data.objective={}),this.label.data.summon||(this.label.data.summon={})}isObject(w){return w&&"object"==typeof w&&!Array.isArray(w)}merge(w,...E){if(!E.length)return w;const F=w;if(this.isObject(F)){const S=E.length;for(let V=0;V<S;V+=1){const U=E[V];if(this.isObject(U))for(const gt in U)U.hasOwnProperty(gt)&&(this.isObject(U[gt])?((!F[gt]||!this.isObject(F[gt]))&&(F[gt]={}),this.merge(F[gt],U[gt])):F[gt]=Array.isArray(F[gt])&&Array.isArray(U[gt])?Array.from(new Set(F[gt].concat(U[gt]))):U[gt])}}return F}getEditionByUrl(w){if(B.v.editionData.some(E=>E.url==w))return B.v.editionData.find(E=>E.url==w)?.edition;console.error("No edition data found for url '"+w+"'")}addEditionDataUrl(w){var E=this;return(0,t.Z)(function*(){return!(-1!=E.settings.editionDataUrls.indexOf(w)||!(yield E.loadEditionData(w))||(E.settings.editionDataUrls.push(w),-1!=E.settings.excludeEditionDataUrls.indexOf(w)&&E.settings.excludeEditionDataUrls.splice(E.settings.excludeEditionDataUrls.indexOf(w),1),E.storeSettings(),0))})()}removeEditionDataUrl(w){var E=this;return(0,t.Z)(function*(){-1!=E.settings.editionDataUrls.indexOf(w)&&(B.v.editionData=B.v.editionData.filter(F=>F.url!=w),E.settings.editionDataUrls.splice(E.settings.editionDataUrls.indexOf(w),1),-1!=E.defaultEditionDataUrls.indexOf(w)&&E.settings.excludeEditionDataUrls.push(w),E.storeSettings())})()}restoreDefaultEditionDataUrls(){var w=this;return(0,t.Z)(function*(){for(let E of w.defaultEditionDataUrls)-1==w.settings.editionDataUrls.indexOf(E)&&(w.settings.editionDataUrls.push(E),yield w.loadEditionData(E));w.storeSettings()})()}setLocale(w){var E=this;return(0,t.Z)(function*(){w!=E.defaultLocale&&(yield fetch("./assets/locales/"+E.defaultLocale+".json").then(F=>F.json()).then(F=>{E.label=E.merge(E.label,F)}).catch(F=>{console.error("Invalid locale: "+w,F)})),yield fetch("./assets/locales/"+w+".json").then(F=>(E.settings.locale=w,F.json())).then(F=>{E.label=E.merge(E.label,F),E.storeSettings()}).catch(F=>{console.error("Invalid locale: "+w,F)});for(let F of B.v.editionData)E.loadDataLabel(F)})()}getLabel(w,E=[],F=!0,S=this.label,V="",U=!1){if(w+="",!S)return U?this.emptyLabel(w,E,V):V&&w?this.getLabel(w):w||"";if(S[w])return"object"==typeof S[w]?S[w]["."]?this.insertLabelArguments(S[w]["."],E,F):U?this.emptyLabel(w,E,V):V&&w?this.getLabel(w):w||"":this.insertLabelArguments(S[w],E,F);{let gt=w.split(".");if(S[gt[0]])return w=gt.slice(1,gt.length).join("."),this.getLabel(w,E,F,S[gt[0]],V+gt[0]+".",U)}return U?this.emptyLabel(w,E,V):V&&w?this.getLabel(w):w||""}emptyLabel(w,E,F){return(F?F+(F.endsWith(".")?"":"."):"")+w+(E&&E.length>0?" ["+E+"]":"")}insertLabelArguments(w,E,F){if(E)for(let S in E)for(;-1!=w.indexOf(`{${S}}`);)w=w.replace(`{${S}}`,F?this.getLabel(E[S]):E[S]);return w}}},9808:(bt,it,D)=>{D.d(it,{UO:()=>W,YY:()=>B,fy:()=>w,kl:()=>t,tI:()=>R,u$:()=>j,ut:()=>ot});var t=(()=>{return(E=t||(t={})).plus0="plus0",E.plus1="plus1",E.plus2="plus2",E.plus3="plus3",E.plus4="plus4",E.minus1="minus1",E.minus2="minus2",E.null="null",E.double="double",E.bless="bless",E.curse="curse",E.invalid="invalid",t;var E})(),R=(()=>{return(E=R||(R={})).plus="plus",E.minus="minus",E.multiply="multiply",R;var E})();class B{constructor(F,S,V=[],U=!1){switch(this.value=0,this.valueType=R.plus,this.shuffle=!1,this.revealed=!1,this.character=!1,this.type=F,this.id=S||F,this.actions=V,this.rolling=U,F){case t.plus0:this.value=0;break;case t.plus1:this.value=1;break;case t.plus2:this.value=2;break;case t.plus3:this.value=3;break;case t.plus4:this.value=4;break;case t.minus1:this.valueType=R.minus,this.value=1;break;case t.minus2:this.valueType=R.minus,this.value=2;break;case t.null:this.valueType=R.multiply,this.value=0,this.shuffle=!0;break;case t.double:this.valueType=R.multiply,this.value=2,this.shuffle=!0;break;case t.bless:this.valueType=R.multiply,this.value=2;break;case t.curse:this.valueType=R.multiply,this.value=0}}}const W=[new B(t.plus0),new B(t.plus1),new B(t.minus1),new B(t.plus2),new B(t.minus2),new B(t.double),new B(t.null),new B(t.bless),new B(t.curse)],j=[t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus0,t.plus1,t.plus1,t.plus1,t.plus1,t.plus1,t.minus1,t.minus1,t.minus1,t.minus1,t.minus1,t.plus2,t.minus2,t.double,t.null];class ot{constructor(){this.attackModifiers=JSON.parse(JSON.stringify(W)),this.current=-1,this.cards=j.map(F=>this.cardById(F)||new B(t.invalid))}cardById(F){let S=this.attackModifiers.find(V=>V.id==F);if(S)return JSON.parse(JSON.stringify(S))}toModel(){return new w(this.current,this.cards.map(F=>F&&F.id||""))}fromModel(F){F.current!=this.current&&(this.current=+F.current),this.cards=F.cards.map(S=>this.cardById(S)||new B(t.invalid))}}class w{constructor(F,S){this.current=F,this.cards=S}}},8868:(bt,it,D)=>{D.d(it,{z:()=>F});var t=D(5751),R=D(8217),B=D(7538),W=D(4892),j=D(5354),ot=D(3341),w=D(1283),E=D(9808);class F extends R.x{constructor(U,gt){super(U),this.title="",this.initiative=0,this.experience=0,this.loot=0,this.exhausted=!1,this.summons=[],this.initiativeVisible=!1,this.attackModifierDeckVisible=!1,this.number=0,this.off=!1,this.active=!1,this.entityConditions=[],this.markers=[],this.errors=U.errors||[],gt<1?gt=1:gt>9&&(gt=9);const Q=this.stats.find(tt=>tt.level==gt);Q?(this.stat=Q,this.level=gt,this.maxHealth=this.stat.health):(!this.errors.find(tt=>tt.type==j.r.unknown)&&!this.errors.find(tt=>tt.type==j.r.stat)&&(console.error("No character stat found for level: "+gt),this.errors.push(new j.o(j.r.stat,"character",U.name,U.edition,"",""+gt))),this.stat=new t.a(gt,0),this.level=0,this.maxHealth=0),this.health=this.maxHealth,this.progress=new w.f,"jotl"!=this.edition&&0==this.progress.gold&&(this.progress.gold=15*(this.level+1)),this.attackModifierDeck=W.v.attackModifierManager.buildCharacterAttackModifierDeck(this)}getInitiative(){return this.exhausted||this.health<=0?100:this.initiative}toModel(){return new S(this.name,this.edition,this.title,this.initiative,this.experience,this.loot,this.exhausted,this.level,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(U=>U.toModel()),this.markers,this.summons.map(U=>U.toModel()),this.progress,this.initiativeVisible,this.attackModifierDeckVisible,this.number,this.attackModifierDeck.toModel())}fromModel(U){if(this.edition=U.edition,!this.edition){const Q=W.v.charactersData(!0).find(tt=>tt.name==U.name);this.edition=Q?Q.edition:""}if(this.title=U.title,(!this.initiativeVisible||U.initiative<=0||this.initiative!=U.initiative)&&(this.initiativeVisible=U.initiativeVisible),U.number)this.number=U.number;else for(this.number=1;W.v.game.figures.some(Q=>Q instanceof F&&(Q.name!=this.name||Q.edition!=this.edition)&&Q.number==this.number);)this.number++;this.initiative=U.initiative,this.experience=U.experience,this.loot=U.loot,this.exhausted=U.exhausted,this.level=U.level,this.off=U.off,this.active=U.active,this.health=U.health,this.maxHealth=U.maxHealth,this.entityConditions=[],U.entityConditions&&(this.entityConditions=U.entityConditions.map(Q=>{let tt=new ot.hT(Q.name,Q.value);return tt.fromModel(Q),tt})),this.markers=U.markers,this.summons=this.summons.filter(Q=>{let tt=!1;return U.summons.forEach(K=>{K.number!=Q.number||K.color!=Q.color||(tt=!0)}),tt}),U.summons.forEach(Q=>{let tt=this.summons.find(K=>K.name==K.name&&K.number==Q.number&&K.color==Q.color);tt||(tt=new B.eU(Q.name,Q.level,Q.number,Q.color),this.summons.push(tt)),tt.fromModel(Q)}),this.progress=new w.f,U.progress&&(this.progress=Object.assign(new w.f,U.progress)),this.progress.loot&&!this.progress.gold&&(this.progress.gold=this.progress.loot,this.progress.loot=0);let gt=W.v.attackModifierManager.buildCharacterAttackModifierDeck(this);U.attackModifierDeck&&gt.fromModel(U.attackModifierDeck),this.mergeAttackModifierDeck(gt),U.attackModifierDeckVisible&&(this.attackModifierDeckVisible=!0)}mergeAttackModifierDeck(U){let gt=!1;return this.attackModifierDeck||(this.attackModifierDeck=new E.ut,gt=!0),this.attackModifierDeck.current!=U.current&&(this.attackModifierDeck.current=U.current,gt=!0),(this.attackModifierDeck.attackModifiers.length!=U.attackModifiers.length||!this.attackModifierDeck.attackModifiers.map(Q=>Q.id).every((Q,tt)=>U.attackModifiers[tt].id==Q))&&(this.attackModifierDeck.attackModifiers=U.attackModifiers,gt=!0),(this.attackModifierDeck.cards.length!=U.cards.length||!this.attackModifierDeck.cards.map(Q=>Q.id).every((Q,tt)=>U.cards[tt].id==Q))&&(this.attackModifierDeck.cards=U.cards,gt=!0),gt}}class S{constructor(U,gt,Q,tt,K,ct,st,Ct,ie,lt,at,St,oe,wt,mt,Pt,Y,G,et,X){this.name=U,this.edition=gt,this.title=Q,this.initiative=tt,this.experience=K,this.loot=ct,this.exhausted=st,this.level=Ct,this.off=ie,this.active=lt,this.health=at,this.maxHealth=St,this.entityConditions=JSON.parse(JSON.stringify(oe)),this.markers=wt,this.summons=mt,this.progress=JSON.parse(JSON.stringify(Pt)),this.initiativeVisible=Y,this.attackModifierDeckVisible=G,this.number=et,this.attackModifierDeck=X}}},1283:(bt,it,D)=>{D.d(it,{f:()=>t});class t{constructor(){this.experience=0,this.gold=0,this.loot=0,this.items=[],this.personalQuest=0,this.battleGoals=0,this.notes="",this.retired=!1,this.retirements=0,this.perks=[]}}},5751:(bt,it,D)=>{D.d(it,{a:()=>t});class t{constructor(B,W){this.level=B,this.health=W}}},3341:(bt,it,D)=>{D.d(it,{CP:()=>R,G3:()=>w,fT:()=>t,gP:()=>W,hT:()=>j,tT:()=>B});var t=(()=>{return(E=t||(t={})).stun="stun",E.immobilize="immobilize",E.disarm="disarm",E.wound="wound",E.muddle="muddle",E.poison="poison",E.invisible="invisible",E.strengthen="strengthen",E.curse="curse",E.bless="bless",E.regenerate="regenerate",E.chill="chill",E.infect="infect",E.ward="ward",E.bane="bane",E.brittle="brittle",E.impair="impair",E.rupture="rupture",E.poison_x="poison_x",E.wound_x="wound_x",t;var E})(),R=(()=>{return(E=R||(R={})).action="action",E.standard="standard",E.entity="entity",E.character="character",E.monster="monster",E.upgrade="upgrade",E.stack="stack",E.turn="turn",E.expire="expire",E.value="value",E.clearHeal="clearHeal",E.preventHeal="preventHeal",E.apply="apply",E.positive="positive",E.negative="negative",R;var E})(),B=(()=>{return(E=B||(B={})).normal="normal",E.expire="expire",E.turn="turn",B;var E})();class W{constructor(F,S=1){this.types=[],this.value=1,this.name=F,this.value=S,this.types.push(R.action),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.ward,t.rupture,t.poison_x,t.wound_x].indexOf(this.name)&&this.types.push(R.entity),-1!=[t.stun,t.immobilize,t.disarm,t.wound,t.muddle,t.poison,t.invisible,t.strengthen,t.regenerate,t.infect,t.bane,t.brittle,t.impair,t.rupture,t.ward].indexOf(this.name)&&this.types.push(R.standard),(-1!=this.types.indexOf(R.entity)||-1!=[t.chill,t.impair,t.ward].indexOf(this.name))&&this.types.push(R.character),-1!=this.types.indexOf(R.entity)&&this.types.push(R.monster),-1!=[t.poison_x,t.wound_x].indexOf(this.name)&&(this.types.push(R.upgrade),this.types.push(R.value)),-1!=[t.chill].indexOf(this.name)&&this.types.push(R.stack),-1!=[t.wound,t.wound_x,t.regenerate].indexOf(this.name)&&this.types.push(R.turn),-1!=[t.wound,t.wound_x,t.poison,t.poison_x,t.bane,t.brittle,t.infect,t.rupture].indexOf(this.name)&&this.types.push(R.clearHeal),-1!=[t.poison,t.poison_x,t.ward,t.brittle].indexOf(this.name)&&this.types.push(R.apply),-1!=[t.poison,t.poison_x,t.infect].indexOf(this.name)&&this.types.push(R.preventHeal),-1!=[t.stun,t.immobilize,t.disarm,t.muddle,t.invisible,t.strengthen,t.impair].indexOf(this.name)&&this.types.push(R.expire),-1!=[t.regenerate,t.ward,t.invisible,t.strengthen,t.bless].indexOf(this.name)&&this.types.push(R.positive),-1==this.types.indexOf(R.positive)&&this.types.push(R.negative)}}class j extends W{constructor(F,S=1){super(F,S),this.expired=!1,this.highlight=!1,this.state=B.normal}toModel(){return new ot(this.name,this.value,this.state,this.expired,this.highlight)}fromModel(F){this.name=F.name,this.value=F.value,this.state=F.state,this.expired=F.expired,this.highlight=F.highlight}}class ot{constructor(F,S,V,U,gt){this.highlight=!1,this.name=F,this.value=S,this.state=V,this.expired=U,this.highlight=gt}}const w=Object.values(t).map(E=>new W(E))},7983:(bt,it,D)=>{D.d(it,{W_:()=>t,fq:()=>R,gf:()=>W});var t=(()=>{return(j=t||(t={})).all="all",j.fire="fire",j.ice="ice",j.air="air",j.earth="earth",j.light="light",j.dark="dark",t;var j})(),R=(()=>{return(j=R||(R={})).strong="strong",j.waning="waning",j.inert="inert",j.new="new",R;var j})();class B{constructor(ot){this.state=R.inert,this.type=ot}}const W=[new B(t.fire),new B(t.ice),new B(t.air),new B(t.earth),new B(t.light),new B(t.dark)]},1827:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GB:()=>EntityExpressionRegex,HY:()=>EntityValueRegex,j9:()=>EntityValueFunction});var _businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4892),_Character__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8868);const EntityExpressionRegex=/^([xCL0-9\+\/\-\*\(\)]+)$/,EntityValueRegex=/\[([xCL0-9\+\/\-\*\(\)]+)(\{(.*)\})?\]/;function EntityValueFunction(value,L){if(!value)return 0;let expression=value,func;const match=value.match(EntityValueRegex);match&&match[0].length==value.length&&(expression=match[1],func=match[3]);let C=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.figures.filter(bt=>bt instanceof _Character__WEBPACK_IMPORTED_MODULE_1__.z).length;C<1&&(C=1),null==L&&(L=_businesslogic_GameManager__WEBPACK_IMPORTED_MODULE_0__.v.game.level),expression=expression.replace(/[x]/g,"*"),expression=expression.replace(/[C]/g,""+C),expression=expression.replace(/[L]/g,""+L);let result=eval(expression);if(func&&func.startsWith("%")&&(func=func.replace("%","")),func)switch(func){case"math.ceil":result=Math.ceil(result);break;case"math.floor":result=Math.floor(result);break;default:console.error("Unknown expression: "+func+"("+match+")")}return Math.round(result)}},5354:(bt,it,D)=>{D.d(it,{o:()=>R,r:()=>t});var t=(()=>{return(B=t||(t={})).deck="deck",B.stat="stat",B.monsterType="monsterType",B.unknown="unknown",t;var B})();class R{constructor(W,...j){this.type=W,this.args=j}}},6743:(bt,it,D)=>{D.d(it,{D2:()=>V,i4:()=>U,lA:()=>S});var t=D(4892),R=D(7911),B=D(9808),W=D(8868),j=D(7983),ot=D(3145),w=D(1421),E=D(5532),F=D(1273);class S{constructor(){this.edition=void 0,this.figures=[],this.state=V.draw,this.scenario=void 0,this.sections=[],this.level=1,this.levelCalculation=!0,this.levelAdjustment=0,this.bonusAdjustment=0,this.ge5Player=!0,this.round=0,this.playSeconds=0,this.totalSeconds=0,this.monsterAttackModifierDeck=new B.ut,this.allyAttackModifierDeck=new B.ut,this.solo=!1,this.elementBoard=JSON.parse(JSON.stringify(j.gf)),this.party=new E.f}toModel(){return new U(this.edition,this.figures.map(Q=>Q.name),this.figures.filter(Q=>Q instanceof W.z).map(Q=>Q.toModel()),this.figures.filter(Q=>Q instanceof ot.Q).map(Q=>Q.toModel()),this.figures.filter(Q=>Q instanceof w.C).map(Q=>Q.toModel()),this.state,this.scenario&&t.v.scenarioManager.toModel(this.scenario,this.scenario.custom?this.scenario.name:"")||void 0,this.sections.map(Q=>t.v.scenarioManager.toModel(Q)),this.level,this.levelCalculation,this.levelAdjustment,this.bonusAdjustment,this.ge5Player,this.round,this.playSeconds,this.totalSeconds,this.monsterAttackModifierDeck.toModel(),this.allyAttackModifierDeck.toModel(),this.elementBoard,this.solo,this.party)}fromModel(Q,tt=!1){if(this.edition=Q.edition,this.figures=this.figures.filter(K=>-1!=Q.characters.map(ct=>ct.name).indexOf(K.name)||-1!=Q.monsters.map(ct=>ct.name).indexOf(K.name)||-1!=Q.objectives.map(ct=>ct.name).indexOf(K.name)),Q.characters.forEach(K=>{let ct=this.figures.find(st=>st instanceof W.z&&st.name==K.name&&st.edition==K.edition);ct||(ct=new W.z(t.v.getCharacterData(K.name,K.edition),K.level),this.figures.push(ct)),ct.fromModel(K)}),Q.monsters.forEach(K=>{let ct=this.figures.find(st=>st instanceof ot.Q&&st.name==K.name&&st.edition==K.edition);ct||(ct=new ot.Q(t.v.getMonsterData(K.name,K.edition)),this.figures.push(ct)),ct.fromModel(K)}),Q.objectives.forEach(K=>{let ct=this.figures.find(st=>st instanceof w.C&&st.id==K.id);if(!ct){if(!K.id)for(K.id=0;this.figures.some(st=>st instanceof w.C&&st.id==K.id);)K.id++;ct=new w.C(K.id),this.figures.push(ct)}ct.fromModel(K)}),this.figures=this.figures.filter(K=>!(K instanceof w.C)||Q.objectives.some(ct=>ct.id==K.id)),this.figures.sort((K,ct)=>Q.figures.indexOf(K.name)-Q.figures.indexOf(ct.name)),this.state=Q.state,Q.scenario){const K=t.v.scenarioManager.scenarioDataForModel(Q.scenario);this.scenario=K?new F.$(K,""!=Q.scenario.custom):void 0}else this.scenario=void 0;this.sections=[],Q.sections.forEach(K=>{const ct=t.v.scenarioManager.sectionDataForModel(K);ct&&this.sections.push(ct)}),this.level=Q.level,null!=R.r.settings.levelCalculation&&(Q.levelCalculation=R.r.settings.levelCalculation,R.r.settings.levelCalculation=void 0,R.r.storeSettings()),null!=R.r.settings.levelAdjustment&&(Q.levelAdjustment=R.r.settings.levelAdjustment,R.r.settings.levelAdjustment=void 0,R.r.storeSettings()),null!=R.r.settings.bonusAdjustment&&(Q.bonusAdjustment=R.r.settings.bonusAdjustment,R.r.settings.bonusAdjustment=void 0,R.r.storeSettings()),null!=R.r.settings.ge5Player&&(Q.ge5Player=R.r.settings.ge5Player,R.r.settings.ge5Player=void 0,R.r.storeSettings()),this.levelCalculation=Q.levelCalculation,this.levelAdjustment=Q.levelAdjustment,this.bonusAdjustment=Q.bonusAdjustment,this.ge5Player=Q.ge5Player,this.round=Q.round,Q.playSeconds>this.playSeconds&&(this.playSeconds=Q.playSeconds),Q.totalSeconds>this.totalSeconds&&(this.totalSeconds=Q.totalSeconds),this.monsterAttackModifierDeck=this.monsterAttackModifierDeck||new B.ut,Q.monsterAttackModifierDeck&&Q.monsterAttackModifierDeck.cards&&Q.monsterAttackModifierDeck.cards.length>0&&this.monsterAttackModifierDeck.fromModel(Q.monsterAttackModifierDeck),Q.attackModifier&&Q.attackModifiers&&this.monsterAttackModifierDeck.fromModel(new B.fy(Q.attackModifier,Q.attackModifiers)),this.allyAttackModifierDeck=this.allyAttackModifierDeck||new B.ut,Q.allyAttackModifierDeck&&Q.allyAttackModifierDeck.cards&&Q.allyAttackModifierDeck.cards.length>0&&this.allyAttackModifierDeck.fromModel(Q.allyAttackModifierDeck),this.elementBoard=this.elementBoard||j.gf,Q.elementBoard&&Q.elementBoard.forEach((K,ct)=>this.elementBoard[ct].state=K.state),Q.newElements.forEach(K=>{const ct=this.elementBoard.find(st=>st.type==K);ct&&(ct.state=j.fq.new)}),Q.strongElements.forEach(K=>{const ct=this.elementBoard.find(st=>st.type==K);ct&&(ct.state=j.fq.strong)}),Q.elements.forEach(K=>{const ct=this.elementBoard.find(st=>st.type==K);ct&&(ct.state=j.fq.waning)}),this.solo=Q.solo,this.party=Q.party?Object.assign(new E.f,Q.party):new E.f}}var V=(()=>{return(gt=V||(V={})).draw="draw",gt.next="next",V;var gt})();class U{constructor(Q,tt=[],K=[],ct=[],st=[],Ct=V.next,ie,lt=[],at=0,St=!0,oe=0,wt=0,mt=!0,Pt=0,Y=0,G=0,et=new B.fy(-1,B.u$),X=new B.fy(-1,B.u$),J=[],ft=!1,p=new E.f){this.sections=[],this.newElements=[],this.strongElements=[],this.elements=[],this.edition=Q,this.figures=tt,this.characters=K,this.monsters=ct,this.objectives=st,this.state=Ct,this.scenario=ie,this.sections=lt,this.level=at,this.levelCalculation=St,this.levelAdjustment=oe,this.bonusAdjustment=wt,this.ge5Player=mt,this.round=Pt,this.playSeconds=Y,this.totalSeconds=G,this.monsterAttackModifierDeck=et,this.allyAttackModifierDeck=X,this.elementBoard=JSON.parse(JSON.stringify(J)),this.solo=ft,this.party=JSON.parse(JSON.stringify(p))}}},3145:(bt,it,D)=>{D.d(it,{Q:()=>j});var t=D(5723),R=D(2399),B=D(4892),W=D(7538);class j extends R.A{constructor(E){if(super(E.name,E.count,E.baseStat,E.stats,E.edition,E.deck,E.boss,E.flying,E.thumbnail,E.thumbnailUrl,E.spoiler),this.summonColor=W.mp.blue,this.level=1,this.off=!1,this.active=!1,this.drawExtra=!1,this.ability=-1,this.abilities=[],this.entities=[],this.isAlly=!1,this.errors=E.errors,E.baseStat)for(let F of E.stats){if(!F.health&&0!=F.health&&(F.health=E.baseStat.health||0),!F.movement&&0!=F.movement&&(F.movement=E.baseStat.movement||0),!F.attack&&0!=F.attack&&(F.attack=E.baseStat.attack||0),!F.range&&0!=F.range&&(F.range=E.baseStat.range||0),F.actions||(F.actions=Object.assign([],E.baseStat.actions)),F.immunities||(F.immunities=Object.assign([],E.baseStat.immunities)),!F.special&&(F.special=[],E.baseStat.special))for(let S of E.baseStat.special)F.special.push(Object.assign([],S));F.note||(F.note=E.baseStat.note),F.type||(F.type=E.baseStat.type)}}getInitiative(){const E=B.v.monsterManager.getAbility(this);return this.entities.length>0&&this.entities.some(F=>!F.dead&&F.health>0)&&E&&E.initiative||100}toModel(){return new ot(this.name,this.edition,this.level,this.off,this.active,this.drawExtra,this.ability,this.abilities,this.entities.map(E=>E.toModel()),this.isAlly)}fromModel(E){if(this.edition=E.edition,!this.edition){const F=B.v.monstersData(!0).find(S=>S.name==E.name);this.edition=F?F.edition:""}this.level=E.level,this.off=E.off,this.active=E.active,this.drawExtra=E.drawExtra,this.abilities=E.abilities&&E.abilities.length>0&&E.abilities||B.v.abilities(this)&&B.v.abilities(this).map((F,S)=>S)||[],this.ability=E.ability,this.entities=this.entities.filter(F=>-1!=E.entities.map(S=>S.number).indexOf(F.number)),E.entities.forEach(F=>{let S=this.entities.find(V=>V.number==F.number);S||(S=new t.g(F.number,F.type,this),this.entities.push(S)),S.fromModel(F)}),this.isAlly=E.isAlly}}class ot{constructor(E,F,S,V,U,gt,Q,tt,K,ct){this.name=E,this.edition=F,this.level=S,this.off=V,this.active=U,this.drawExtra=gt,this.ability=Q,this.abilities=tt,this.entities=K,this.isAlly=ct}}},5723:(bt,it,D)=>{D.d(it,{g:()=>ot});var t=D(3341),R=D(1827),B=D(5354),W=D(5909),j=D(7538);class ot{constructor(F,S,V){this.dead=!1,this.summon=j.HY.false,this.active=!1,this.off=!1,this.entityConditions=[],this.markers=[],this.number=F,this.type=S;const U=V.stats.find(gt=>gt.level==V.level&&gt.type==S);U?this.stat=U:(this.stat=new W.c(S,V.level,0,0,0,0),V.errors=V.errors||[],!V.errors.find(gt=>gt.type==B.r.unknown)&&!V.errors.find(gt=>gt.type==B.r.stat)&&(console.error("Could not find '"+S+"' stats for monster: "+V.name+" level: "+V.level),V.errors.push(new B.o(B.r.stat,"monster",V.name,V.edition,S,""+V.level)))),this.maxHealth="number"==typeof this.stat.health?this.stat.health:(0,R.j9)(this.stat.health,V.level),this.health=this.maxHealth,this.level=V.level}toModel(){return new w(this.number,this.type,this.dead,this.summon,this.active,this.off,this.health,this.maxHealth,this.entityConditions.map(F=>F.toModel()),this.markers)}fromModel(F){this.dead=F.dead,this.summon=F.summon,this.active=F.active,this.off=F.off,this.health=F.health,this.maxHealth=F.maxHealth,this.entityConditions=[],F.entityConditions&&(this.entityConditions=F.entityConditions.map(S=>{let V=new t.hT(S.name,S.value);return V.fromModel(S),V})),this.markers=F.markers}}class w{constructor(F,S,V,U,gt,Q,tt,K,ct,st){this.number=F,this.type=S,this.dead=V,this.summon=U,this.active=gt,this.off=Q,this.health=tt,this.maxHealth=K,this.entityConditions=JSON.parse(JSON.stringify(ct)),this.markers=JSON.parse(JSON.stringify(st))}}},5909:(bt,it,D)=>{D.d(it,{c:()=>t});class t{constructor(B,W,j,ot,w,E,F=[],S=[],V=[],U=""){this.type=B,this.level=W,this.health=j,this.movement=ot,this.attack=w,this.range=E,this.actions=F||[],this.immunities=S||[],this.special=V||[],this.note=U}}},1954:(bt,it,D)=>{D.d(it,{M:()=>t});var t=(()=>{return(R=t||(t={})).normal="normal",R.elite="elite",R.boss="boss",t;var R})()},1421:(bt,it,D)=>{D.d(it,{C:()=>R});var t=D(3341);class R{constructor(j){this.title="",this.exhausted=!1,this.escort=!1,this.name="",this.level=0,this.off=!1,this.active=!1,this.edition="",this.health=7,this.maxHealth=7,this.entityConditions=[],this.markers=[],this.initiative=99,this.id=j}getInitiative(){return this.exhausted||this.health<=0?100:this.initiative}toModel(){return new B(this.id,this.title,this.name,this.escort,this.level,this.exhausted,this.off,this.active,this.health,this.maxHealth,this.entityConditions.map(j=>j.toModel()),this.markers,this.initiative)}fromModel(j){this.id=j.id,this.title=j.title,this.name=j.name,this.escort=j.escort,this.level=j.level,this.exhausted=j.exhausted,this.off=j.off,this.active=j.active,this.health=j.health,this.maxHealth=j.maxHealth,this.entityConditions=[],j.entityConditions&&(this.entityConditions=j.entityConditions.map(ot=>{let w=new t.hT(ot.name,ot.value);return w.fromModel(ot),w})),this.markers=j.markers,this.initiative=j.initiative}}class B{constructor(j,ot,w,E,F,S,V,U,gt,Q,tt,K,ct){this.entityConditions=[],this.markers=[],this.id=j,this.title=ot,this.name=w,this.escort=E,this.level=F,this.exhausted=S,this.off=V,this.active=U,this.health=gt,this.maxHealth=Q,this.entityConditions=JSON.parse(JSON.stringify(tt)),this.markers=JSON.parse(JSON.stringify(K)),this.initiative=ct}}},5532:(bt,it,D)=>{D.d(it,{f:()=>t});class t{constructor(){this.name="",this.location="",this.notes="",this.achievements="",this.reputation=0,this.prosperity=0,this.scenarios=[],this.manualScenarios=[],this.campaignMode=!1,this.globalAchievements=""}}},8489:(bt,it,D)=>{D.d(it,{Ib:()=>W}),D(9808);var W=(()=>{return(j=W||(W={})).add="add",j.remove="remove",j.replace="replace",j.custom="custom",W;var j})()},1273:(bt,it,D)=>{D.d(it,{$:()=>R});var t=D(9384);class R extends t.t{constructor(W,j=!1){super(W.name,W.index,W.unlocks,W.blocks,W.requires,W.links,W.monsters,W.allies,W.objectives,W.edition,W.group,W.spoiler),this.custom=j}}},8810:(bt,it,D)=>{D.d(it,{Z:()=>t});class t{constructor(){this.calculate=!0,this.calculateStats=!0,this.abilityNumbers=!0,this.eliteFirst=!0,this.expireConditions=!0,this.applyConditions=!0,this.activeApplyConditions=!0,this.moveElements=!0,this.hideStats=!0,this.randomStandees=!1,this.activeStandees=!0,this.allyAttackModifierDeck=!0,this.initiativeRequired=!0,this.levelCalculation=void 0,this.levelAdjustment=void 0,this.bonusAdjustment=void 0,this.ge5Player=void 0,this.disableStandees=!1,this.fullscreen=!1,this.autoscroll=!0,this.disableColumns=!1,this.dragValues=!0,this.hints=!0,this.zoom=100,this.barsize=1,this.fontsize=1,this.locale="en",this.editionDataUrls=[],this.excludeEditionDataUrls=[],this.spoilers=[],this.browserNavigation=!1,this.serverAutoconnect=!0,this.serverSettings=!1,this.serverWss=!1,this.maxUndo=50}}},7538:(bt,it,D)=>{D.d(it,{HY:()=>R,eU:()=>W,mp:()=>B});var t=D(3341),R=(()=>{return(ot=R||(R={})).new="new",ot.true="true",ot.false="false",R;var ot})(),B=(()=>{return(ot=B||(B={})).blue="blue",ot.green="green",ot.yellow="yellow",ot.orange="orange",ot.white="white",ot.purple="purple",ot.pink="pink",ot.red="red",ot.custom="custom",B;var ot})();class W{constructor(w,E,F,S,V=2,U=0,gt=0,Q=0){this.dead=!1,this.state=R.new,this.init=!0,this.entityConditions=[],this.markers=[],this.name=w,this.level=E,this.number=F,this.color=S,this.health=V,this.maxHealth=V,this.attack=U,this.movement=gt,this.range=Q}toModel(){return new j(this.name,this.number,this.color,this.attack,this.movement,this.range,this.dead,this.state,this.level,this.health,this.maxHealth,this.entityConditions.map(w=>w.toModel()),this.markers)}fromModel(w){this.name=w.name||"",this.number=w.number,this.color=w.color,this.attack=w.attack,this.movement=w.movement,this.range=w.range,this.dead=w.dead,this.state=w.state,this.level=w.level,this.health=w.health,this.maxHealth=w.maxHealth,this.entityConditions=[],w.entityConditions&&(this.entityConditions=w.entityConditions.map(E=>{let F=new t.hT(E.name,E.value);return F.fromModel(E),F})),this.markers=w.markers,this.init=!1}}class j{constructor(w,E,F,S,V,U,gt,Q,tt,K,ct,st,Ct){this.name=w,this.number=E,this.color=F,this.attack=S,this.movement=V,this.range=U,this.dead=gt,this.state=Q,this.level=tt,this.health=K,this.maxHealth=ct,this.entityConditions=st,this.markers=Ct}}},8217:(bt,it,D)=>{D.d(it,{x:()=>R});class R{constructor(W){this.name="",this.stats=[],this.availableSummons=[],this.color="#000000",this.marker=!1,this.deck="",this.perks=[],this.edition="",this.spoiler=!1,this.replace=!1,W&&(this.errors=W.errors||[],this.name=W.name,this.stats=W.stats||[],this.characterClass=W.characterClass||void 0,this.availableSummons=W.availableSummons||[],this.edition=W.edition||"",this.iconUrl=W.iconUrl||void 0,this.thumbnailUrl=W.thumbnailUrl||void 0,this.color=W.color||"#00000",this.marker=W.marker||!1,this.spoiler=W.spoiler||!1,this.deck=W.name,W.deck&&(this.deck=W.deck),this.perks=W.perks||[])}}},2399:(bt,it,D)=>{D.d(it,{A:()=>t});class t{constructor(B,W,j,ot,w,E,F=!1,S=!1,V,U,gt=!1){this.errors=[],this.hidden=!1,this.replace=!1,this.errors=[],this.name=B,this.count=W,this.baseStat=j,this.stats=ot,this.edition=w,this.deck=B,E&&(this.deck=E),this.boss=F,this.flying=S,this.thumbnail=V,this.thumbnailUrl=U,this.spoiler=!0}}},9384:(bt,it,D)=>{D.d(it,{_:()=>R,t:()=>t});class t{constructor(W,j,ot,w,E,F,S,V,U,gt,Q,tt=!1){this.initial=!1,this.name=W,this.index=j,this.unlocks=ot,this.blocks=w,this.requires=E,this.links=F,this.monsters=S,this.allies=V,this.edition=gt,this.objectives=U,this.group=Q,this.spoiler=tt}}class R{constructor(W,j,ot,w=""){this.index=W,this.edition=j,this.group=ot,this.custom=w}}},475:(bt,it,D)=>{var t=D(1571);
/**
       * @license Angular v14.1.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let R=null;function B(){return R}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const w=new t.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let E=(()=>{class n{historyGo(e){throw new Error("Not implemented")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return function F(){return(0,t.LFG)(V)}()},providedIn:"platform"}),n})();const S=new t.OlP("Location Initialized");let V=(()=>{class n extends E{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return B().getBaseHref(this._doc)}onPopState(e){const i=B().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){const i=B().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,i,a){U()?this._history.pushState(e,i,a):this.location.hash=a}replaceState(e,i,a){U()?this._history.replaceState(e,i,a):this.location.hash=a}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:function(){return function gt(){return new V((0,t.LFG)(w))}
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
       */()},providedIn:"platform"}),n})();function U(){return!!window.history.pushState}function Q(n,o){if(0==n.length)return o;if(0==o.length)return n;let e=0;return n.endsWith("/")&&e++,o.startsWith("/")&&e++,2==e?n+o.substring(1):1==e?n+o:n+"/"+o}function tt(n){const o=n.match(/#|\?|$/),e=o&&o.index||n.length;return n.slice(0,e-("/"===n[e-1]?1:0))+n.slice(e)}function K(n){return n&&"?"!==n[0]?"?"+n:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ct=(()=>{class n{historyGo(e){throw new Error("Not implemented")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return(0,t.f3M)(Ct)},providedIn:"root"}),n})();const st=new t.OlP("appBaseHref");let Ct=(()=>{class n extends ct{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??(0,t.f3M)(w).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Q(this._baseHref,e)}path(e=!1){const i=this._platformLocation.pathname+K(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${i}${a}`:i}pushState(e,i,a,u){const h=this.prepareExternalUrl(a+K(u));this._platformLocation.pushState(e,i,h)}replaceState(e,i,a,u){const h=this.prepareExternalUrl(a+K(u));this._platformLocation.replaceState(e,i,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(E),t.LFG(st,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),ie=(()=>{class n extends ct{constructor(e,i){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=i&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash;return null==i&&(i="#"),i.length>0?i.substring(1):i}prepareExternalUrl(e){const i=Q(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,a,u){let h=this.prepareExternalUrl(a+K(u));0==h.length&&(h=this._platformLocation.pathname),this._platformLocation.pushState(e,i,h)}replaceState(e,i,a,u){let h=this.prepareExternalUrl(a+K(u));0==h.length&&(h=this._platformLocation.pathname),this._platformLocation.replaceState(e,i,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(E),t.LFG(st,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),lt=(()=>{class n{constructor(e){this._subject=new t.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const i=this._locationStrategy.getBaseHref();this._baseHref=tt(oe(i)),this._locationStrategy.onPopState(a=>{this._subject.emit({url:this.path(!0),pop:!0,state:a.state,type:a.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+K(i))}normalize(e){return n.stripTrailingSlash(function St(n,o){return n&&o.startsWith(n)?o.substring(n.length):o}(this._baseHref,oe(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",a=null){this._locationStrategy.pushState(a,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+K(i)),a)}replaceState(e,i="",a=null){this._locationStrategy.replaceState(a,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+K(i)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{const i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(a=>a(e,i))}subscribe(e,i,a){return this._subject.subscribe({next:e,error:i,complete:a})}}return n.normalizeQueryParams=K,n.joinWithSlash=Q,n.stripTrailingSlash=tt,n.\u0275fac=function(e){return new(e||n)(t.LFG(ct))},n.\u0275prov=t.Yz7({token:n,factory:function(){return function at(){return new lt((0,t.LFG)(ct))}()},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oe(n){return n.replace(/\/index.html$/,"")}
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
let Vt=(()=>{class n{constructor(e,i,a,u){this._iterableDiffers=e,this._keyValueDiffers=i,this._ngEl=a,this._renderer=u,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&((0,t.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(i=>this._toggleClass(i.key,i.currentValue)),e.forEachChangedItem(i=>this._toggleClass(i.key,i.currentValue)),e.forEachRemovedItem(i=>{i.previousValue&&this._toggleClass(i.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(i=>{if("string"!=typeof i.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,t.AaK)(i.item)}`);this._toggleClass(i.item,!0)}),e.forEachRemovedItem(i=>this._toggleClass(i.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(i=>this._toggleClass(i,!0)):Object.keys(e).forEach(i=>this._toggleClass(i,!!e[i])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(i=>this._toggleClass(i,!1)):Object.keys(e).forEach(i=>this._toggleClass(i,!1)))}_toggleClass(e,i){(e=e.trim())&&e.split(/\s+/g).forEach(a=>{i?this._renderer.addClass(this._ngEl.nativeElement,a):this._renderer.removeClass(this._ngEl.nativeElement,a)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.ZZ4),t.Y36(t.aQg),t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Av{constructor(o,e,i,a){this.$implicit=o,this.ngForOf=e,this.index=i,this.count=a}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let qt=(()=>{class n{constructor(e,i,a){this._viewContainer=e,this._template=i,this._differs=a,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const i=this._viewContainer;e.forEachOperation((a,u,h)=>{if(null==a.previousIndex)i.createEmbeddedView(this._template,new Av(a.item,this._ngForOf,-1,-1),null===h?void 0:h);else if(null==h)i.remove(null===u?void 0:u);else if(null!==u){const M=i.get(u);i.move(M,h),Sa(M,a)}});for(let a=0,u=i.length;a<u;a++){const M=i.get(a).context;M.index=a,M.count=u,M.ngForOf=this._ngForOf}e.forEachIdentityChange(a=>{Sa(i.get(a.currentIndex),a)})}static ngTemplateContextGuard(e,i){return!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(t.ZZ4))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),n})();function Sa(n,o){n.context.$implicit=o.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Qt=(()=>{class n{constructor(e,i){this._viewContainer=e,this._context=new go,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ge("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ge("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,i){return!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),n})();class go{constructor(){this.$implicit=null,this.ngIf=null}}function Ge(n,o){if(o&&!o.createEmbeddedView)throw new Error(`${n} must be a TemplateRef, but received '${(0,t.AaK)(o)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vl{constructor(o,e){this._viewContainerRef=o,this._templateRef=e,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(o){o&&!this._created?this.create():!o&&this._created&&this.destroy()}}let xe=(()=>{class n{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const i=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let i=0;i<this._defaultViews.length;i++)this._defaultViews[i].enforceState(e)}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0}),n})(),nn=(()=>{class n{constructor(e,i,a){this.ngSwitch=a,a._addCase(),this._view=new Vl(e,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(xe,9))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0}),n})(),Bi=(()=>{class n{constructor(e,i,a){a._addDefault(new Vl(e,i))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(xe,9))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngSwitchDefault",""]],standalone:!0}),n})();let Ev=(()=>{class n{constructor(e){this.differs=e,this.keyValues=[],this.compareFn=Sv}transform(e,i=Sv){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const a=this.differ.diff(e),u=i!==this.compareFn;return a&&(this.keyValues=[],a.forEachItem(h=>{this.keyValues.push(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Hl(n,o){return{key:n,value:o}}(h.key,h.currentValue))})),(a||u)&&(this.keyValues.sort(i),this.compareFn=i),this.keyValues}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.aQg,16))},n.\u0275pipe=t.Yjl({name:"keyvalue",type:n,pure:!1,standalone:!0}),n})();function Sv(n,o){const e=n.key,i=o.key;if(e===i)return 0;if(void 0===e)return 1;if(void 0===i)return-1;if(null===e)return 1;if(null===i)return-1;if("string"==typeof e&&"string"==typeof i)return e<i?-1:1;if("number"==typeof e&&"number"==typeof i)return e-i;if("boolean"==typeof e&&"boolean"==typeof i)return e<i?-1:1;const a=String(e),u=String(i);return a==u?0:a<u?-1:1}
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
let fh=(()=>{class n{transform(e,i,a){if(null==e)return null;if(!this.supports(e))
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
throw function Yn(n,o){return new t.vHH(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return e.slice(i,a)}supports(e){return"string"==typeof e||Array.isArray(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"slice",type:n,pure:!1,standalone:!0}),n})(),ph=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
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
const Bl="browser";function Pn(n){return n===Bl}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Cb=(()=>{class n{}return n.\u0275prov=(0,t.Yz7)({token:n,providedIn:"root",factory:()=>new Te((0,t.LFG)(w),window)}),n})();class Te{constructor(o,e){this.document=o,this.window=e,this.offset=()=>[0,0]}setOffset(o){this.offset=Array.isArray(o)?()=>o:o}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(o){this.supportsScrolling()&&this.window.scrollTo(o[0],o[1])}scrollToAnchor(o){if(!this.supportsScrolling())return;const e=function Mb(n,o){const e=n.getElementById(o)||n.getElementsByName(o)[0];if(e)return e;if("function"==typeof n.createTreeWalker&&n.body&&(n.body.createShadowRoot||n.body.attachShadow)){const i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT);let a=i.currentNode;for(;a;){const u=a.shadowRoot;if(u){const h=u.getElementById(o)||u.querySelector(`[name="${o}"]`);if(h)return h}a=i.nextNode()}}return null}(this.document,o);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(o){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=o)}}scrollToElement(o){const e=o.getBoundingClientRect(),i=e.left+this.window.pageXOffset,a=e.top+this.window.pageYOffset,u=this.offset();this.window.scrollTo(i-u[0],a-u[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const o=vh(this.window.history)||vh(Object.getPrototypeOf(this.window.history));return!(!o||!o.writable&&!o.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function vh(n){return Object.getOwnPropertyDescriptor(n,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Wr extends
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
       * @license Angular v14.1.3
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
class Fv extends class ot{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function j(n){R||(R=n)}(new Wr)}onAndCancel(o,e,i){return o.addEventListener(e,i,!1),()=>{o.removeEventListener(e,i,!1)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.parentNode&&o.parentNode.removeChild(o)}createElement(o,e){return(e=e||this.getDefaultDocument()).createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return"window"===e?window:"document"===e?o:"body"===e?o.body:null}getBaseHref(o){const e=function kn(){return ui=ui||document.querySelector("base"),ui?ui.getAttribute("href"):null}();return null==e?null:function La(n){Kr=Kr||document.createElement("a"),Kr.setAttribute("href",n);const o=Kr.pathname;return"/"===o.charAt(0)?o:`/${o}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}resetBaseElement(){ui=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function Qn(n,o){o=encodeURIComponent(o);for(const e of n.split(";")){const i=e.indexOf("="),[a,u]=-1==i?[e,""]:[e.slice(0,i),e.slice(i+1)];if(a.trim()===o)return decodeURIComponent(u)}return null}(document.cookie,o)}}let Kr,ui=null;const Ch=new t.OlP("TRANSITION_ID"),Mh=[{provide:t.ip1,useFactory:function qi(n,o,e){return()=>{e.get(t.CZH).donePromise.then(()=>{const i=B(),a=o.querySelectorAll(`style[ng-transition="${n}"]`);for(let u=0;u<a.length;u++)i.remove(a[u])})}},deps:[Ch,w,t.zs3],multi:!0}];let jt=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Xr=new t.OlP("EventManagerPlugins");let Ql=(()=>{class n{constructor(e,i){this._zone=i,this._eventNameToPlugin=new Map,e.forEach(a=>a.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,i,a){return this._findPluginFor(i).addEventListener(e,i,a)}addGlobalEventListener(e,i,a){return this._findPluginFor(i).addGlobalEventListener(e,i,a)}getZone(){return this._zone}_findPluginFor(e){const i=this._eventNameToPlugin.get(e);if(i)return i;const a=this._plugins;for(let u=0;u<a.length;u++){const h=a[u];if(h.supports(e))return this._eventNameToPlugin.set(e,h),h}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Xr),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class yh{constructor(o){this._doc=o}addGlobalEventListener(o,e,i){const a=B().getGlobalEventTarget(this._doc,o);if(!a)throw new Error(`Unsupported event target ${a} for event ${e}`);return this.addEventListener(a,e,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let bh=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const i=new Set;e.forEach(a=>{this._stylesSet.has(a)||(this._stylesSet.add(a),i.add(a))}),this.onStylesAdded(i)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),ts=(()=>{class n extends bh{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,i,a){e.forEach(u=>{const h=this._doc.createElement("style");h.textContent=u,a.push(i.appendChild(h))})}addHost(e){const i=[];this._addStylesToHost(this._stylesSet,e,i),this._hostNodes.set(e,i)}removeHost(e){const i=this._hostNodes.get(e);i&&i.forEach(Gl),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((i,a)=>{this._addStylesToHost(e,a,i)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(Gl))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function Gl(n){B().remove(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},$l=/%COMP%/g;function Ji(n,o,e){for(let i=0;i<o.length;i++){let a=o[i];Array.isArray(a)?Ji(n,a,e):(a=a.replace($l,n),e.push(a))}return e}function $n(n){return o=>{if("__ngUnwrap__"===o)return n;!1===n(o)&&(o.preventDefault(),o.returnValue=!1)}}let es=(()=>{class n{constructor(e,i,a){this.eventManager=e,this.sharedStylesHost=i,this.appId=a,this.rendererByCompId=new Map,this.defaultRenderer=new Dh(e)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;switch(i.encapsulation){case t.ifc.Emulated:{let a=this.rendererByCompId.get(i.id);return a||(a=new un(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,a)),a.applyToHost(e),a}case 1:case t.ifc.ShadowDom:return new ki(this.eventManager,this.sharedStylesHost,e,i);default:if(!this.rendererByCompId.has(i.id)){const a=Ji(i.id,i.styles,[]);this.sharedStylesHost.addStyles(a),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Ql),t.LFG(ts),t.LFG(t.AFp))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();class Dh{constructor(o){this.eventManager=o,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(o,e){return e?document.createElementNS(Yl[e]||e,o):document.createElement(o)}createComment(o){return document.createComment(o)}createText(o){return document.createTextNode(o)}appendChild(o,e){(ns(o)?o.content:o).appendChild(e)}insertBefore(o,e,i){o&&(ns(o)?o.content:o).insertBefore(e,i)}removeChild(o,e){o&&o.removeChild(e)}selectRootElement(o,e){let i="string"==typeof o?document.querySelector(o):o;if(!i)throw new Error(`The selector "${o}" did not match any elements`);return e||(i.textContent=""),i}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,i,a){if(a){e=a+":"+e;const u=Yl[a];u?o.setAttributeNS(u,e,i):o.setAttribute(e,i)}else o.setAttribute(e,i)}removeAttribute(o,e,i){if(i){const a=Yl[i];a?o.removeAttributeNS(a,e):o.removeAttribute(`${i}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,i,a){a&(t.JOm.DashCase|t.JOm.Important)?o.style.setProperty(e,i,a&t.JOm.Important?"important":""):o.style[e]=i}removeStyle(o,e,i){i&t.JOm.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,i){o[e]=i}setValue(o,e){o.nodeValue=e}listen(o,e,i){return"string"==typeof o?this.eventManager.addGlobalEventListener(o,e,$n(i)):this.eventManager.addEventListener(o,e,$n(i))}}function ns(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class un extends Dh{constructor(o,e,i,a){super(o),this.component=i;const u=Ji(a+"-"+i.id,i.styles,[]);e.addStyles(u),this.contentAttr=function Ne(n){return"_ngcontent-%COMP%".replace($l,n)}(a+"-"+i.id),this.hostAttr=function xh(n){return"_nghost-%COMP%".replace($l,n)}(a+"-"+i.id)}applyToHost(o){super.setAttribute(o,this.hostAttr,"")}createElement(o,e){const i=super.createElement(o,e);return super.setAttribute(i,this.contentAttr,""),i}}class ki extends Dh{constructor(o,e,i,a){super(o),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const u=Ji(a.id,a.styles,[]);for(let h=0;h<u.length;h++){const M=document.createElement("style");M.textContent=u[h],this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,i){return super.insertBefore(this.nodeOrShadowRoot(o),e,i)}removeChild(o,e){return super.removeChild(this.nodeOrShadowRoot(o),e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kh=(()=>{class n extends yh{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,a){return e.addEventListener(i,a,!1),()=>this.removeEventListener(e,i,a)}removeEventListener(e,i,a){return e.removeEventListener(i,a)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const fo=["alt","control","meta","shift"],Uv={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Wl={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Vv={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let jv=(()=>{class n extends yh{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,i,a){const u=n.parseEventName(i),h=n.eventCallback(u.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>B().onAndCancel(e,u.domEventName,h))}static parseEventName(e){const i=e.toLowerCase().split("."),a=i.shift();if(0===i.length||"keydown"!==a&&"keyup"!==a)return null;const u=n._normalizeKey(i.pop());let h="";if(fo.forEach(O=>{const T=i.indexOf(O);T>-1&&(i.splice(T,1),h+=O+".")}),h+=u,0!=i.length||0===u.length)return null;const M={};return M.domEventName=a,M.fullKey=h,M}static getEventFullKey(e){let i="",a=function Kl(n){let o=n.key;if(null==o){if(o=n.keyIdentifier,null==o)return"Unidentified";o.startsWith("U+")&&(o=String.fromCharCode(parseInt(o.substring(2),16)),3===n.location&&Wl.hasOwnProperty(o)&&(o=Wl[o]))}return Uv[o]||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);return a=a.toLowerCase()," "===a?a="space":"."===a&&(a="dot"),fo.forEach(u=>{u!=a&&(0,Vv[u])(e)&&(i+=u+".")}),i+=a,i}static eventCallback(e,i,a){return u=>{n.getEventFullKey(u)===e&&a.runGuarded(()=>i(u))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const Eh=(0,t.eFA)(t._c5,"browser",[{provide:t.Lbi,useValue:Bl},{provide:t.g9A,useValue:function Bv(){Wr.makeCurrent()},multi:!0},{provide:w,useFactory:function Xl(){return(0,t.RDi)(document),document},deps:[]}]),eu=new t.OlP(""),nu=[{provide:t.rWj,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class zl{addToWindow(o){t.dqk.getAngularTestability=(i,a=!0)=>{const u=o.findTestabilityInTree(i,a);if(null==u)throw new Error("Could not find testability for element.");return u},t.dqk.getAllAngularTestabilities=()=>o.getAllTestabilities(),t.dqk.getAllAngularRootElements=()=>o.getAllRootElements(),t.dqk.frameworkStabilizers||(t.dqk.frameworkStabilizers=[]),t.dqk.frameworkStabilizers.push(i=>{const a=t.dqk.getAllAngularTestabilities();let u=a.length,h=!1;const M=function(O){h=h||O,u--,0==u&&i(h)};a.forEach(function(O){O.whenStable(M)})})}findTestabilityInTree(o,e,i){return null==e?null:o.getTestability(e)??(i?B().isShadowRoot(e)?this.findTestabilityInTree(o,e.host,!0):this.findTestabilityInTree(o,e.parentElement,!0):null)}},deps:[]},{provide:t.lri,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]},{provide:t.dDg,useClass:t.dDg,deps:[t.R0b,t.eoX,t.rWj]}],Na=[{provide:t.zSh,useValue:"root"},{provide:t.qLn,useFactory:function Th(){return new t.qLn},deps:[]},{provide:Xr,useClass:kh,multi:!0,deps:[w,t.R0b,t.Lbi]},{provide:Xr,useClass:jv,multi:!0,deps:[w]},{provide:es,useClass:es,deps:[Ql,ts,t.AFp]},{provide:t.FYo,useExisting:es},{provide:bh,useExisting:ts},{provide:ts,useClass:ts,deps:[w]},{provide:Ql,useClass:Ql,deps:[Xr,t.R0b]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Un{},useClass:jt,deps:[]},[]];let qv=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:t.AFp,useValue:e.appId},{provide:Ch,useExisting:t.AFp},Mh]}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(eu,12))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[...Na,...nu],imports:[ph,t.hGG]}),n})(),Sh=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ye(){return new Sh((0,t.LFG)(w))}(),i},providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */typeof window<"u"&&window;let su=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new(e||n):t.LFG(Nh),i},providedIn:"root"}),n})(),Nh=(()=>{class n extends su{constructor(e){super(),this._doc=e}sanitize(e,i){if(null==i)return null;switch(e){case t.q3G.NONE:return i;case t.q3G.HTML:return(0,t.qzn)(i,"HTML")?(0,t.z3N)(i):(0,t.EiD)(this._doc,String(i)).toString();case t.q3G.STYLE:return(0,t.qzn)(i,"Style")?(0,t.z3N)(i):i;case t.q3G.SCRIPT:if((0,t.qzn)(i,"Script"))return(0,t.z3N)(i);throw new Error("unsafe value used in a script context");case t.q3G.URL:return(0,t.qzn)(i,"URL")?(0,t.z3N)(i):(0,t.mCW)(String(i));case t.q3G.RESOURCE_URL:if((0,t.qzn)(i,"ResourceURL"))return(0,t.z3N)(i);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,t.JVY)(e)}bypassSecurityTrustStyle(e){return(0,t.L6k)(e)}bypassSecurityTrustScript(e){return(0,t.eBb)(e)}bypassSecurityTrustUrl(e){return(0,t.LAX)(e)}bypassSecurityTrustResourceUrl(e){return(0,t.pB0)(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:function(e){let i=null;return i=e?new e:function Qo(n){return new Nh(n.get(w))}(t.LFG(t.zs3)),i},providedIn:"root"}),n})();
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
function Ti(n){return null!=n&&"false"!=`${n}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ss(n,o=0){return function Ab(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?Number(n):o}function Go(n){return Array.isArray(n)?n:[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function we(n){return null==n?"":"string"==typeof n?n:`${n}px`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ye(n){return n instanceof t.SBq?n.nativeElement:n}
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
var Ht=D(7579),gi=D(3269),De=D(2076);function Dt(...n){const o=(0,gi.yG)(n);return(0,De.D)(n,o)}var qe=D(9751),Kn=D(8421),$e=D(5577),Fh=D(1144),An=D(576),Gt=D(4004);const{isArray:Rh}=Array;function Yo(n){return(0,Gt.U)(o=>function Wv(n,o){return Rh(o)?n(...o):n(o)}(n,o))}const as=["addListener","removeListener"],Kv=["addEventListener","removeEventListener"],Zh=["on","off"];function _o(n,o,e,i){if((0,An.m)(e)&&(i=e,e=void 0),i)return _o(n,o,e).pipe(Yo(i));const[a,u]=function au(n){return(0,An.m)(n.addEventListener)&&(0,An.m)(n.removeEventListener)}(n)?Kv.map(h=>M=>n[h](o,M,e)):function Xv(n){return(0,An.m)(n.addListener)&&(0,An.m)(n.removeListener)}(n)?as.map(vo(n,o)):function Uh(n){return(0,An.m)(n.on)&&(0,An.m)(n.off)}(n)?Zh.map(vo(n,o)):[];if(!a&&(0,Fh.z)(n))return(0,$e.z)(h=>_o(h,o,e))((0,Kn.Xf)(n));if(!a)throw new TypeError("Invalid event target");return new qe.y(h=>{const M=(...O)=>h.next(1<O.length?O:O[0]);return a(M),()=>u(M)})}function vo(n,o){return e=>i=>n[e](o,i)}var Xn=D(727);class Vh extends Xn.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const $o={setInterval(n,o,...e){const{delegate:i}=$o;return i?.setInterval?i.setInterval(n,o,...e):setInterval(n,o,...e)},clearInterval(n){const{delegate:o}=$o;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var Wo=D(8737);class zi extends Vh{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){if(this.closed)return this;this.state=o;const i=this.id,a=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(a,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(a,this.id,e),this}requestAsyncId(o,e,i=0){return $o.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;$o.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let a,i=!1;try{this.work(o)}catch(u){i=!0,a=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Wo.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}}const di={schedule(n){let o=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=di;i&&(o=i.requestAnimationFrame,e=i.cancelAnimationFrame);const a=o(u=>{e=void 0,n(u)});return new Xn.w0(()=>e?.(a))},requestAnimationFrame(...n){const{delegate:o}=di;return(o?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:o}=di;return(o?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0},Va={now:()=>(Va.delegate||Date).now(),delegate:void 0};class hi{constructor(o,e=hi.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,i){return new this.schedulerActionCtor(this,o).schedule(i,e)}}hi.now=Va.now;class Hh extends hi{constructor(o,e=hi.now){super(o,e),this.actions=[],this._active=!1,this._scheduled=void 0}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}const ue=new class tC extends Hh{flush(o){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let a;o=o||i.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=i[0])&&o.id===e&&i.shift());if(this._active=!1,a){for(;(o=i[0])&&o.id===e&&i.shift();)o.unsubscribe();throw a}}}(class jh extends zi{constructor(o,e){super(o,e),this.scheduler=o,this.work=e}requestAsyncId(o,e,i=0){return null!==i&&i>0?super.requestAsyncId(o,e,i):(o.actions.push(this),o._scheduled||(o._scheduled=di.requestAnimationFrame(()=>o.flush(void 0))))}recycleAsyncId(o,e,i=0){if(null!=i&&i>0||null==i&&this.delay>0)return super.recycleAsyncId(o,e,i);o.actions.some(a=>a.id===e)||(di.cancelAnimationFrame(e),o._scheduled=void 0)}});let Bh,Tb=1;const cu={};function eC(n){return n in cu&&(delete cu[n],!0)}const Eb={setImmediate(n){const o=Tb++;return cu[o]=!0,Bh||(Bh=Promise.resolve()),Bh.then(()=>eC(o)&&n()),o},clearImmediate(n){eC(n)}},{setImmediate:cs,clearImmediate:Sb}=Eb,lu={setImmediate(...n){const{delegate:o}=lu;return(o?.setImmediate||cs)(...n)},clearImmediate(n){const{delegate:o}=lu;return(o?.clearImmediate||Sb)(n)},delegate:void 0},us=(new class uu extends Hh{flush(o){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let a;o=o||i.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=i[0])&&o.id===e&&i.shift());if(this._active=!1,a){for(;(o=i[0])&&o.id===e&&i.shift();)o.unsubscribe();throw a}}}(class Fe extends zi{constructor(o,e){super(o,e),this.scheduler=o,this.work=e}requestAsyncId(o,e,i=0){return null!==i&&i>0?super.requestAsyncId(o,e,i):(o.actions.push(this),o._scheduled||(o._scheduled=lu.setImmediate(o.flush.bind(o,void 0))))}recycleAsyncId(o,e,i=0){if(null!=i&&i>0||null==i&&this.delay>0)return super.recycleAsyncId(o,e,i);o.actions.some(a=>a.id===e)||(lu.clearImmediate(e),o._scheduled=void 0)}}),new Hh(zi)),Tn=us;var ge=D(4482),be=D(5403),gs=D(3532);function gu(n=0,o,e=Tn){let i=-1;return null!=o&&((0,gs.K)(o)?e=o:i=o),new qe.y(a=>{let u=function qh(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;u<0&&(u=0);let h=0;return e.schedule(function(){a.closed||(a.next(h++),0<=i?this.schedule(void 0,i):a.complete())},u)})}function Jh(n,o=us){return function ja(n){return(0,ge.e)((o,e)=>{let i=!1,a=null,u=null,h=!1;const M=()=>{if(u?.unsubscribe(),u=null,i){i=!1;const T=a;a=null,e.next(T)}h&&e.complete()},O=()=>{u=null,h&&e.complete()};o.subscribe((0,be.x)(e,T=>{i=!0,a=T,u||(0,Kn.Xf)(n(T)).subscribe(u=(0,be.x)(e,M,O))},()=>{h=!0,(!i||!u||u.closed)&&e.complete()}))})}(()=>gu(n,o))}function dn(n,o){return(0,ge.e)((e,i)=>{let a=0;e.subscribe((0,be.x)(i,u=>n.call(o,u,a++)&&i.next(u)))})}var zh=D(5032);function Si(n){return(0,ge.e)((o,e)=>{(0,Kn.Xf)(n).subscribe((0,be.x)(e,()=>e.complete(),zh.Z)),!e.closed&&o.subscribe(e)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let hn;try{hn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{hn=!1}let fs,Ha,Co,Qh,Vn=(()=>{class n{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Pn(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!hn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.Lbi))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ps(n){return function nC(){if(null==fs&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>fs=!0}))}finally{fs=fs||!1}return fs}()?n:!!n.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ba(){if(null==Co){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return Co=!1,Co;if("scrollBehavior"in document.documentElement.style)Co=!0;else{const n=Element.prototype.scrollTo;Co=!!n&&!/\{\s*\[native code\]\s*\}/.test(n.toString())}}return Co}function Qi(){if("object"!=typeof document||!document)return 0;if(null==Ha){const n=document.createElement("div"),o=n.style;n.dir="rtl",o.width="1px",o.overflow="auto",o.visibility="hidden",o.pointerEvents="none",o.position="absolute";const e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",n.appendChild(e),document.body.appendChild(n),Ha=0,0===n.scrollLeft&&(n.scrollLeft=1,Ha=0===n.scrollLeft?1:2),n.remove()}return Ha}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _s(n){if(function ms(){if(null==Qh){const n=typeof document<"u"?document.head:null;Qh=!(!n||!n.createShadowRoot&&!n.attachShadow)}return Qh}()){const o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function Ko(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){const o=n.shadowRoot.activeElement;if(o===n)break;n=o}return n}function ti(n){return n.composedPath?n.composedPath()[0]:n.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gh(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
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
       */const iC=new t.OlP("cdk-dir-doc",{providedIn:"root",factory:function Yh(){return(0,t.f3M)(w)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}),vs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let tr=(()=>{class n{constructor(e){if(this.value="ltr",this.change=new t.vpe,e){const a=e.documentElement?e.documentElement.dir:null;this.value=function Xo(n){const o=n?.toLowerCase()||"";return"auto"===o&&typeof navigator<"u"&&navigator?.language?vs.test(navigator.language)?"rtl":"ltr":"rtl"===o?"rtl":"ltr"}((e.body?e.body.dir:null)||a||"ltr")}}ngOnDestroy(){this.change.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(iC,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),qa=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),Mo=(()=>{class n{constructor(e,i,a){this._ngZone=e,this._platform=i,this._scrolled=new Ht.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=a}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new qe.y(i=>{this._globalSubscription||this._addGlobalListener();const a=e>0?this._scrolled.pipe(Jh(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Dt()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const a=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(dn(u=>!u||a.indexOf(u)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((a,u)=>{this._scrollableContainsElement(u,e)&&i.push(u)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let a=Ye(i),u=e.getElementRef().nativeElement;do{if(a==u)return!0}while(a=a.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>_o(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(Vn),t.LFG(w,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Wh=(()=>{class n{constructor(e,i,a,u){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=a,this.dir=u,this._destroyed=new Ht.x,this._elementScrolled=new qe.y(h=>this.ngZone.runOutsideAngular(()=>_o(this.elementRef.nativeElement,"scroll").pipe(Si(this._destroyed)).subscribe(h)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const i=this.elementRef.nativeElement,a=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=a?e.end:e.start),null==e.right&&(e.right=a?e.start:e.end),null!=e.bottom&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),a&&0!=Qi()?(null!=e.left&&(e.right=i.scrollWidth-i.clientWidth-e.left),2==Qi()?e.left=e.right:1==Qi()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const i=this.elementRef.nativeElement;Ba()?i.scrollTo(e):(null!=e.top&&(i.scrollTop=e.top),null!=e.left&&(i.scrollLeft=e.left))}measureScrollOffset(e){const i="left",a="right",u=this.elementRef.nativeElement;if("top"==e)return u.scrollTop;if("bottom"==e)return u.scrollHeight-u.clientHeight-u.scrollTop;const h=this.dir&&"rtl"==this.dir.value;return"start"==e?e=h?a:i:"end"==e&&(e=h?i:a),h&&2==Qi()?e==i?u.scrollWidth-u.clientWidth-u.scrollLeft:u.scrollLeft:h&&1==Qi()?e==i?u.scrollLeft+u.scrollWidth-u.clientWidth:-u.scrollLeft:e==i?u.scrollLeft:u.scrollWidth-u.clientWidth-u.scrollLeft}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Mo),t.Y36(t.R0b),t.Y36(tr,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),n})(),fu=(()=>{class n{constructor(e,i,a){this._platform=e,this._change=new Ht.x,this._changeListener=u=>{this._change.next(u)},this._document=a,i.runOutsideAngular(()=>{if(e.isBrowser){const u=this._getWindow();u.addEventListener("resize",this._changeListener),u.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+i,height:a,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),a=e.documentElement,u=a.getBoundingClientRect();return{top:-u.top||e.body.scrollTop||i.scrollY||a.scrollTop||0,left:-u.left||e.body.scrollLeft||i.scrollX||a.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(Jh(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Vn),t.LFG(t.R0b),t.LFG(w,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Kh=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),mu=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[qa,Kh,qa,Kh]}),n})();
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
class jn extends Ht.x{constructor(o){super(),this._value=o}get value(){return this.getValue()}_subscribe(o){const e=super._subscribe(o);return!e.closed&&o.next(this._value),e}getValue(){const{hasError:o,thrownError:e,_value:i}=this;if(o)throw e;return this._throwIfClosed(),i}next(o){super.next(this._value=o)}}
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
var or=D(515);function Je(n){return n<=0?()=>or.E:(0,ge.e)((o,e)=>{let i=0;o.subscribe((0,be.x)(e,a=>{++i<=n&&(e.next(a),n<=i&&e.complete())}))})}function rr(n){return dn((o,e)=>n<=e)}var sr=D(4671);function Ps(n,o){return n===o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let NC=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),RC=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[NC]}),n})();
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
       */const{isArray:ZC}=Array,{getPrototypeOf:UC,prototype:Cf,keys:VC}=Object;function Wa(n){if(1===n.length){const o=n[0];if(ZC(o))return{args:o,keys:null};if(function jC(n){return n&&"object"==typeof n&&UC(n)===Cf}(o)){const e=VC(o);return{args:e.map(i=>o[i]),keys:e}}}return{args:n,keys:null}}function Mf(n,o){return n.reduce((e,i,a)=>(e[i]=o[a],e),{})}var Ou=D(9672);function yf(...n){const o=(0,gi.yG)(n),e=(0,gi.jO)(n),{args:i,keys:a}=Wa(n);if(0===i.length)return(0,De.D)([],o);const u=new qe.y(function TO(n,o,e=sr.y){return i=>{Ka(o,()=>{const{length:a}=n,u=new Array(a);let h=a,M=a;for(let O=0;O<a;O++)Ka(o,()=>{const T=(0,De.D)(n[O],o);let q=!1;T.subscribe((0,be.x)(i,$=>{u[O]=$,q||(q=!0,M--),M||i.next(e(u.slice()))},()=>{--h||i.complete()}))},i)},i)}}(i,o,a?h=>Mf(a,h):sr.y));return e?u.pipe(Yo(e)):u}function Ka(n,o,e){n?(0,Ou.f)(e,n,o):o()}var Xa=D(8189);function xs(...n){return function EO(){return(0,Xa.J)(1)}()((0,De.D)(n,(0,gi.yG)(n)))}function ws(...n){const o=(0,gi.yG)(n);return(0,ge.e)((e,i)=>{(o?xs(n,e,o):xs(n,e)).subscribe(i)})}
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
const Pu=new Set;let Yi,bf=(()=>{class n{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function Of(n){if(!Pu.has(n))try{Yi||(Yi=document.createElement("style"),Yi.setAttribute("type","text/css"),document.head.appendChild(Yi)),Yi.sheet&&(Yi.sheet.insertRule(`@media ${n} {body{ }}`,0),Pu.add(n))}catch(o){console.error(o)}}(e),this._matchMedia(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Vn))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Pf(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xu=(()=>{class n{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new Ht.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return xf(Go(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let u=yf(xf(Go(e)).map(h=>this._registerQuery(h).observable));return u=xs(u.pipe(Je(1)),u.pipe(rr(1),function SO(n,o=us){return(0,ge.e)((e,i)=>{let a=null,u=null,h=null;const M=()=>{if(a){a.unsubscribe(),a=null;const T=u;u=null,i.next(T)}};function O(){const T=h+n,q=o.now();if(q<T)return a=this.schedule(void 0,T-q),void i.add(a);M()}e.subscribe((0,be.x)(i,T=>{u=T,h=o.now(),a||(a=o.schedule(O,n),i.add(a))},()=>{M(),i.complete()},void 0,()=>{u=a=null}))})}(0))),u.pipe((0,Gt.U)(h=>{const M={matches:!1,breakpoints:{}};return h.forEach(({matches:O,query:T})=>{M.matches=M.matches||O,M.breakpoints[T]=O}),M}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const i=this._mediaMatcher.matchMedia(e),u={observable:new qe.y(h=>{const M=O=>this._zone.run(()=>h.next(O));return i.addListener(M),()=>{i.removeListener(M)}}).pipe(ws(i),(0,Gt.U)(({matches:h})=>({query:e,matches:h})),Si(this._destroySubject)),mql:i};return this._queries.set(e,u),u}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(bf),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function xf(n){return n.map(o=>o.split(",")).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Af=(()=>{class n{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function wu(n){return!!(n.offsetWidth||n.offsetHeight||"function"==typeof n.getClientRects&&n.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const i=function fn(n){try{return n.frameElement}catch{return null}}(function Lf(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e));if(i&&(-1===Sf(i)||!this.isVisible(i)))return!1;let a=e.nodeName.toLowerCase(),u=Sf(e);return e.hasAttribute("contenteditable")?-1!==u:!("iframe"===a||"object"===a||this._platform.WEBKIT&&this._platform.IOS&&!function If(n){let o=n.nodeName.toLowerCase(),e="input"===o&&n.type;return"text"===e||"password"===e||"select"===o||"textarea"===o}(e))&&("audio"===a?!!e.hasAttribute("controls")&&-1!==u:"video"===a?-1!==u&&(null!==u||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,i){return function zC(n){return!function Du(n){return function Ds(n){return"input"==n.nodeName.toLowerCase()}(n)&&"hidden"==n.type}(n)&&(function Tf(n){let o=n.nodeName.toLowerCase();return"input"===o||"select"===o||"button"===o||"textarea"===o}(n)||function on(n){return function ku(n){return"a"==n.nodeName.toLowerCase()}(n)&&n.hasAttribute("href")}(n)||n.hasAttribute("contenteditable")||Ef(n))}(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Vn))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Ef(n){if(!n.hasAttribute("tabindex")||void 0===n.tabIndex)return!1;let o=n.getAttribute("tabindex");return!(!o||isNaN(parseInt(o,10)))}function Sf(n){if(!Ef(n))return null;const o=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}class QC{constructor(o,e,i,a,u=!1){this._element=o,this._checker=e,this._ngZone=i,this._document=a,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,u||this.attachAnchors()}get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}destroy(){const o=this._startAnchor,e=this._endAnchor;o&&(o.removeEventListener("focus",this.startAnchorListener),o.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){const e=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return"start"==o?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const i=this._getFirstTabbableElement(e);return i?.focus(o),!!i}return e.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){const e=this._getRegionBoundary("start");return e&&e.focus(o),!!e}focusLastTabbableElement(o){const e=this._getRegionBoundary("end");return e&&e.focus(o),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;const e=o.children;for(let i=0;i<e.length;i++){const a=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(a)return a}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;const e=o.children;for(let i=e.length-1;i>=0;i--){const a=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(a)return a}return null}_createAnchor(){const o=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add("cdk-visually-hidden"),o.classList.add("cdk-focus-trap-anchor"),o.setAttribute("aria-hidden","true"),o}_toggleAnchorTabIndex(o,e){o?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){this._ngZone.isStable?o():this._ngZone.onStable.pipe(Je(1)).subscribe(o)}}let Nf=(()=>{class n{constructor(e,i,a){this._checker=e,this._ngZone=i,this._document=a}create(e,i=!1){return new QC(e,this._checker,this._ngZone,this._document,i)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Af),t.LFG(t.R0b),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
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
function yo(n){return 0===n.buttons||0===n.offsetX&&0===n.offsetY}function fi(n){const o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!o||-1!==o.identifier||null!=o.radiusX&&1!==o.radiusX||null!=o.radiusY&&1!==o.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const GC=new t.OlP("cdk-input-modality-detector-options"),YC={ignoreKeys:[18,17,224,91,16]},ks=ps({passive:!0,capture:!0});let Ff=(()=>{class n{constructor(e,i,a,u){this._platform=e,this._mostRecentTarget=null,this._modality=new jn(null),this._lastTouchMs=0,this._onKeydown=h=>{this._options?.ignoreKeys?.some(M=>M===h.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ti(h))},this._onMousedown=h=>{Date.now()-this._lastTouchMs<650||(this._modality.next(yo(h)?"keyboard":"mouse"),this._mostRecentTarget=ti(h))},this._onTouchstart=h=>{fi(h)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ti(h))},this._options={...YC,...u},this.modalityDetected=this._modality.pipe(rr(1)),this.modalityChanged=this.modalityDetected.pipe(function ar(n,o=sr.y){return n=n??Ps,(0,ge.e)((e,i)=>{let a,u=!0;e.subscribe((0,be.x)(i,h=>{const M=o(h);(u||!n(a,M))&&(u=!1,a=M,i.next(h))}))})}()),e.isBrowser&&i.runOutsideAngular(()=>{a.addEventListener("keydown",this._onKeydown,ks),a.addEventListener("mousedown",this._onMousedown,ks),a.addEventListener("touchstart",this._onTouchstart,ks)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,ks),document.removeEventListener("mousedown",this._onMousedown,ks),document.removeEventListener("touchstart",this._onTouchstart,ks))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Vn),t.LFG(t.R0b),t.LFG(w),t.LFG(GC,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
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
const Uf=new t.OlP("cdk-focus-monitor-default-options"),tc=ps({passive:!0,capture:!0});let As=(()=>{class n{constructor(e,i,a,u,h){this._ngZone=e,this._platform=i,this._inputModalityDetector=a,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new Ht.x,this._rootNodeFocusAndBlurListener=M=>{for(let T=ti(M);T;T=T.parentElement)"focus"===M.type?this._onFocus(M,T):this._onBlur(M,T)},this._document=u,this._detectionMode=h?.detectionMode||0}monitor(e,i=!1){const a=Ye(e);if(!this._platform.isBrowser||1!==a.nodeType)return Dt(null);const u=_s(a)||this._getDocument(),h=this._elementInfo.get(a);if(h)return i&&(h.checkChildren=!0),h.subject;const M={checkChildren:i,subject:new Ht.x,rootNode:u};return this._elementInfo.set(a,M),this._registerGlobalListeners(M),M.subject}stopMonitoring(e){const i=Ye(e),a=this._elementInfo.get(i);a&&(a.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(a))}focusVia(e,i,a){const u=Ye(e);u===this._getDocument().activeElement?this._getClosestElementsInfo(u).forEach(([M,O])=>this._originChanged(M,i,O)):(this._setOrigin(i),"function"==typeof u.focus&&u.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused","touch"===i),e.classList.toggle("cdk-keyboard-focused","keyboard"===i),e.classList.toggle("cdk-mouse-focused","mouse"===i),e.classList.toggle("cdk-program-focused","program"===i)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&i,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,i){const a=this._elementInfo.get(i),u=ti(e);!a||!a.checkChildren&&i!==u||this._originChanged(i,this._getFocusOrigin(u),a)}_onBlur(e,i){const a=this._elementInfo.get(i);!a||a.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(a,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const i=e.rootNode,a=this._rootNodeFocusListenerCount.get(i)||0;a||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,tc),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,tc)}),this._rootNodeFocusListenerCount.set(i,a+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Si(this._stopInputModalityDetector)).subscribe(u=>{this._setOrigin(u,!0)}))}_removeGlobalListeners(e){const i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){const a=this._rootNodeFocusListenerCount.get(i);a>1?this._rootNodeFocusListenerCount.set(i,a-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,tc),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,tc),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,a){this._setClasses(e,i),this._emitOrigin(a,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){const i=[];return this._elementInfo.forEach((a,u)=>{(u===e||a.checkChildren&&u.contains(e))&&i.push([u,a])}),i}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:i,mostRecentModality:a}=this._inputModalityDetector;if("mouse"!==a||!i||i===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const u=e.labels;if(u)for(let h=0;h<u.length;h++)if(u[h].contains(i))return!0;return!1}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(Vn),t.LFG(Ff),t.LFG(w,8),t.LFG(Uf,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Au="cdk-high-contrast-black-on-white",ec="cdk-high-contrast-white-on-black",Ts="cdk-high-contrast-active";let Vf=(()=>{class n{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=(0,t.f3M)(xu).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const i=this._document.defaultView||window,a=i&&i.getComputedStyle?i.getComputedStyle(e):null,u=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),u){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(Ts,Au,ec),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?e.add(Ts,Au):2===i&&e.add(Ts,ec)}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Vn),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),$O=(()=>{class n{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Vf))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[RC]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var bo=D(6451);function Ze(n,o,e){const i=(0,An.m)(n)||o||e?{next:n,error:o,complete:e}:n;return i?(0,ge.e)((a,u)=>{var h;null===(h=i.subscribe)||void 0===h||h.call(i);let M=!0;a.subscribe((0,be.x)(u,O=>{var T;null===(T=i.next)||void 0===T||T.call(i,O),u.next(O)},()=>{var O;M=!1,null===(O=i.complete)||void 0===O||O.call(i),u.complete()},O=>{var T;M=!1,null===(T=i.error)||void 0===T||T.call(i,O),u.error(O)},()=>{var O,T;M&&(null===(O=i.unsubscribe)||void 0===O||O.call(i)),null===(T=i.finalize)||void 0===T||T.call(i)}))}):sr.y}function pn(n,o){return(0,ge.e)((e,i)=>{let a=null,u=0,h=!1;const M=()=>h&&!a&&i.complete();e.subscribe((0,be.x)(i,O=>{a?.unsubscribe();let T=0;const q=u++;(0,Kn.Xf)(n(O,q)).subscribe(a=(0,be.x)(i,$=>i.next(o?o(O,$,q,T++):$),()=>{a=null,M()}))},()=>{h=!0,M()}))})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Es(n,o,e){for(let i in o)if(o.hasOwnProperty(i)){const a=o[i];a?n.setProperty(i,a,e?.has(i)?"important":""):n.removeProperty(i)}return n}function ur(n,o){const e=o?"":"none";Es(n.style,{"touch-action":o?"":"none","-webkit-user-drag":o?"":"none","-webkit-tap-highlight-color":o?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function jf(n,o,e){Es(n.style,{position:o?"":"fixed",top:o?"":"0",opacity:o?"":"0",left:o?"":"-999em"},e)}function nc(n,o){return o&&"none"!=o?n+" "+o:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hf(n){const o=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*o}function Tu(n,o){return n.getPropertyValue(o).split(",").map(i=>i.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ic(n){const o=n.getBoundingClientRect();return{top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height,x:o.x,y:o.y}}function Ss(n,o,e){const{top:i,bottom:a,left:u,right:h}=n;return e>=i&&e<=a&&o>=u&&o<=h}function gr(n,o,e){n.top+=o,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function oc(n,o,e,i){const{top:a,right:u,bottom:h,left:M,width:O,height:T}=n,q=O*o,$=T*o;return i>a-$&&i<h+$&&e>M-q&&e<u+q}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bf{constructor(o){this._document=o,this.positions=new Map}clear(){this.positions.clear()}cache(o){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),o.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:ic(e)})})}handleScroll(o){const e=ti(o),i=this.positions.get(e);if(!i)return null;const a=i.scrollPosition;let u,h;if(e===this._document){const T=this.getViewportScrollPosition();u=T.top,h=T.left}else u=e.scrollTop,h=e.scrollLeft;const M=a.top-u,O=a.left-h;return this.positions.forEach((T,q)=>{T.clientRect&&e!==q&&e.contains(q)&&gr(T.clientRect,M,O)}),a.top=u,a.left=h,{top:M,left:O}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qf(n){const o=n.cloneNode(!0),e=o.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();o.removeAttribute("id");for(let a=0;a<e.length;a++)e[a].removeAttribute("id");return"canvas"===i?Su(n,o):("input"===i||"select"===i||"textarea"===i)&&$i(n,o),Eu("canvas",n,o,Su),Eu("input, textarea, select",n,o,$i),o}function Eu(n,o,e,i){const a=o.querySelectorAll(n);if(a.length){const u=e.querySelectorAll(n);for(let h=0;h<a.length;h++)i(a[h],u[h])}}let Jf=0;function $i(n,o){"file"!==o.type&&(o.value=n.value),"radio"===o.type&&o.name&&(o.name=`mat-clone-${o.name}-${Jf++}`)}function Su(n,o){const e=o.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Iu=ps({passive:!0}),rc=ps({passive:!1}),dr=new Set(["position"]);class KC{constructor(o,e,i,a,u,h){this._config=e,this._document=i,this._ngZone=a,this._viewportRuler=u,this._dragDropRegistry=h,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new Ht.x,this._pointerMoveSubscription=Xn.w0.EMPTY,this._pointerUpSubscription=Xn.w0.EMPTY,this._scrollSubscription=Xn.w0.EMPTY,this._resizeSubscription=Xn.w0.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new Ht.x,this.started=new Ht.x,this.released=new Ht.x,this.ended=new Ht.x,this.entered=new Ht.x,this.exited=new Ht.x,this.dropped=new Ht.x,this.moved=this._moveEvents,this._pointerDown=M=>{if(this.beforeStarted.next(),this._handles.length){const O=this._getTargetHandle(M);O&&!this._disabledHandles.has(O)&&!this.disabled&&this._initializeDragSequence(O,M)}else this.disabled||this._initializeDragSequence(this._rootElement,M)},this._pointerMove=M=>{const O=this._getPointerPositionOnPage(M);if(!this._hasStartedDragging){if(Math.abs(O.x-this._pickupPositionOnPage.x)+Math.abs(O.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const kt=Date.now()>=this._dragStartTime+this._getDragStartDelay(M),Bt=this._dropContainer;if(!kt)return void this._endDragSequence(M);(!Bt||!Bt.isDragging()&&!Bt.isReceiving())&&(M.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(M)))}return}M.preventDefault();const T=this._getConstrainedPointerPosition(O);if(this._hasMoved=!0,this._lastKnownPointerPosition=O,this._updatePointerDirectionDelta(T),this._dropContainer)this._updateActiveDropContainer(T,O);else{const q=this.constrainPosition?this._initialClientRect:this._pickupPositionOnPage,$=this._activeTransform;$.x=T.x-q.x+this._passiveTransform.x,$.y=T.y-q.y+this._passiveTransform.y,this._applyRootElementTransform($.x,$.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:T,event:M,distance:this._getDragDistance(T),delta:this._pointerDirectionDelta})})},this._pointerUp=M=>{this._endDragSequence(M)},this._nativeDragStart=M=>{if(this._handles.length){const O=this._getTargetHandle(M);O&&!this._disabledHandles.has(O)&&!this.disabled&&M.preventDefault()}else this.disabled||M.preventDefault()},this.withRootElement(o).withParent(e.parentDragRef||null),this._parentPositions=new Bf(i),h.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(o){const e=Ti(o);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(i=>ur(i,e)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(o){this._handles=o.map(i=>Ye(i)),this._handles.forEach(i=>ur(i,this.disabled)),this._toggleNativeDragInteractions();const e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(o){return this._previewTemplate=o,this}withPlaceholderTemplate(o){return this._placeholderTemplate=o,this}withRootElement(o){const e=Ye(o);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this._pointerDown,rc),e.addEventListener("touchstart",this._pointerDown,Iu),e.addEventListener("dragstart",this._nativeDragStart,rc)}),this._initialTransform=void 0,this._rootElement=e),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(o){return this._boundaryElement=o?Ye(o):null,this._resizeSubscription.unsubscribe(),o&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(o){return this._parentDragRef=o,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(o){!this._disabledHandles.has(o)&&this._handles.indexOf(o)>-1&&(this._disabledHandles.add(o),ur(o,!0))}enableHandle(o){this._disabledHandles.has(o)&&(this._disabledHandles.delete(o),ur(o,this.disabled))}withDirection(o){return this._direction=o,this}_withDropContainer(o){this._dropContainer=o}getFreeDragPosition(){const o=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:o.x,y:o.y}}setFreeDragPosition(o){return this._activeTransform={x:0,y:0},this._passiveTransform.x=o.x,this._passiveTransform.y=o.y,this._dropContainer||this._applyRootElementTransform(o.x,o.y),this}withPreviewContainer(o){return this._previewContainer=o,this}_sortFromLastPointerPosition(){const o=this._lastKnownPointerPosition;o&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(o),o)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(o){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this,event:o}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(o),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const e=this._getPointerPositionOnPage(o);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:o})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(o){hr(o)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const e=this._dropContainer;if(e){const i=this._rootElement,a=i.parentNode,u=this._placeholder=this._createPlaceholderElement(),h=this._anchor=this._anchor||this._document.createComment(""),M=this._getShadowRoot();a.insertBefore(h,i),this._initialTransform=i.style.transform||"",this._preview=this._createPreviewElement(),jf(i,!1,dr),this._document.body.appendChild(a.replaceChild(u,i)),this._getPreviewInsertionPoint(a,M).appendChild(this._preview),this.started.next({source:this,event:o}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this,event:o}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(o,e){this._parentDragRef&&e.stopPropagation();const i=this.isDragging(),a=hr(e),u=!a&&0!==e.button,h=this._rootElement,M=ti(e),O=!a&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),T=a?fi(e):yo(e);if(M&&M.draggable&&"mousedown"===e.type&&e.preventDefault(),i||u||O||T)return;if(this._handles.length){const Mt=h.style;this._rootElementTapHighlight=Mt.webkitTapHighlightColor||"",Mt.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._initialClientRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(Mt=>this._updateOnScroll(Mt)),this._boundaryElement&&(this._boundaryRect=ic(this._boundaryElement));const q=this._previewTemplate;this._pickupPositionInElement=q&&q.template&&!q.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialClientRect,o,e);const $=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:$.x,y:$.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(o){jf(this._rootElement,!0,dr),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._initialClientRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),a=this._getPointerPositionOnPage(o),u=this._getDragDistance(a),h=e._isOverContainer(a.x,a.y);this.ended.next({source:this,distance:u,dropPoint:a,event:o}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:h,distance:u,dropPoint:a,event:o}),e.drop(this,i,this._initialIndex,this._initialContainer,h,u,a),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:o,y:e},{x:i,y:a}){let u=this._initialContainer._getSiblingContainerFromPosition(this,o,e);!u&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(o,e)&&(u=this._initialContainer),u&&u!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=u,this._dropContainer.enter(this,o,e,u===this._initialContainer&&u.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:u,currentIndex:u.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,a),this._dropContainer._sortItem(this,o,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(o,e):this._applyPreviewTransform(o-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_createPreviewElement(){const o=this._previewTemplate,e=this.previewClass,i=o?o.template:null;let a;if(i&&o){const u=o.matchSize?this._initialClientRect:null,h=o.viewContainer.createEmbeddedView(i,o.context);h.detectChanges(),a=sc(h,this._document),this._previewRef=h,o.matchSize?Nu(a,u):a.style.transform=Is(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else a=qf(this._rootElement),Nu(a,this._initialClientRect),this._initialTransform&&(a.style.transform=this._initialTransform);return Es(a.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},dr),ur(a,!1),a.classList.add("cdk-drag-preview"),a.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(u=>a.classList.add(u)):a.classList.add(e)),a}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const o=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(o.left,o.top);const e=function WC(n){const o=getComputedStyle(n),e=Tu(o,"transition-property"),i=e.find(M=>"transform"===M||"all"===M);if(!i)return 0;const a=e.indexOf(i),u=Tu(o,"transition-duration"),h=Tu(o,"transition-delay");return Hf(u[a])+Hf(h[a])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{const a=h=>{(!h||ti(h)===this._preview&&"transform"===h.propertyName)&&(this._preview?.removeEventListener("transitionend",a),i(),clearTimeout(u))},u=setTimeout(a,1.5*e);this._preview.addEventListener("transitionend",a)}))}_createPlaceholderElement(){const o=this._placeholderTemplate,e=o?o.template:null;let i;return e?(this._placeholderRef=o.viewContainer.createEmbeddedView(e,o.context),this._placeholderRef.detectChanges(),i=sc(this._placeholderRef,this._document)):i=qf(this._rootElement),i.style.pointerEvents="none",i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(o,e,i){const a=e===this._rootElement?null:e,u=a?a.getBoundingClientRect():o,h=hr(i)?i.targetTouches[0]:i,M=this._getViewportScrollPosition();return{x:u.left-o.left+(h.pageX-u.left-M.left),y:u.top-o.top+(h.pageY-u.top-M.top)}}_getPointerPositionOnPage(o){const e=this._getViewportScrollPosition(),i=hr(o)?o.touches[0]||o.changedTouches[0]||{pageX:0,pageY:0}:o,a=i.pageX-e.left,u=i.pageY-e.top;if(this._ownerSVGElement){const h=this._ownerSVGElement.getScreenCTM();if(h){const M=this._ownerSVGElement.createSVGPoint();return M.x=a,M.y=u,M.matrixTransform(h.inverse())}}return{x:a,y:u}}_getConstrainedPointerPosition(o){const e=this._dropContainer?this._dropContainer.lockAxis:null;let{x:i,y:a}=this.constrainPosition?this.constrainPosition(o,this,this._initialClientRect,this._pickupPositionInElement):o;if("x"===this.lockAxis||"x"===e?a=this._pickupPositionOnPage.y:("y"===this.lockAxis||"y"===e)&&(i=this._pickupPositionOnPage.x),this._boundaryRect){const{x:u,y:h}=this._pickupPositionInElement,M=this._boundaryRect,{width:O,height:T}=this._getPreviewRect(),q=M.top+h,$=M.bottom-(T-h);i=Lu(i,M.left+u,M.right-(O-u)),a=Lu(a,q,$)}return{x:i,y:a}}_updatePointerDirectionDelta(o){const{x:e,y:i}=o,a=this._pointerDirectionDelta,u=this._pointerPositionAtLastDirectionChange,h=Math.abs(e-u.x),M=Math.abs(i-u.y);return h>this._config.pointerDirectionChangeThreshold&&(a.x=e>u.x?1:-1,u.x=e),M>this._config.pointerDirectionChangeThreshold&&(a.y=i>u.y?1:-1,u.y=i),a}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const o=this._handles.length>0||!this.isDragging();o!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=o,ur(this._rootElement,o))}_removeRootElementListeners(o){o.removeEventListener("mousedown",this._pointerDown,rc),o.removeEventListener("touchstart",this._pointerDown,Iu),o.removeEventListener("dragstart",this._nativeDragStart,rc)}_applyRootElementTransform(o,e){const i=Is(o,e),a=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=a.transform&&"none"!=a.transform?a.transform:""),a.transform=nc(i,this._initialTransform)}_applyPreviewTransform(o,e){const i=this._previewTemplate?.template?void 0:this._initialTransform,a=Is(o,e);this._preview.style.transform=nc(a,i)}_getDragDistance(o){const e=this._pickupPositionOnPage;return e?{x:o.x-e.x,y:o.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:o,y:e}=this._passiveTransform;if(0===o&&0===e||this.isDragging()||!this._boundaryElement)return;const i=this._rootElement.getBoundingClientRect(),a=this._boundaryElement.getBoundingClientRect();if(0===a.width&&0===a.height||0===i.width&&0===i.height)return;const u=a.left-i.left,h=i.right-a.right,M=a.top-i.top,O=i.bottom-a.bottom;a.width>i.width?(u>0&&(o+=u),h>0&&(o-=h)):o=0,a.height>i.height?(M>0&&(e+=M),O>0&&(e-=O)):e=0,(o!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:o})}_getDragStartDelay(o){const e=this.dragStartDelay;return"number"==typeof e?e:hr(o)?e.touch:e?e.mouse:0}_updateOnScroll(o){const e=this._parentPositions.handleScroll(o);if(e){const i=ti(o);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&gr(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=_s(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(o,e){const i=this._previewContainer||"global";if("parent"===i)return o;if("global"===i){const a=this._document;return e||a.fullscreenElement||a.webkitFullscreenElement||a.mozFullScreenElement||a.msFullscreenElement||a.body}return Ye(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialClientRect),this._previewRect}_getTargetHandle(o){return this._handles.find(e=>o.target&&(o.target===e||e.contains(o.target)))}}function Is(n,o){return`translate3d(${Math.round(n)}px, ${Math.round(o)}px, 0)`}function Lu(n,o,e){return Math.max(o,Math.min(e,n))}function hr(n){return"t"===n.type[0]}function sc(n,o){const e=n.rootNodes;if(1===e.length&&e[0].nodeType===o.ELEMENT_NODE)return e[0];const i=o.createElement("div");return e.forEach(a=>i.appendChild(a)),i}function Nu(n,o){n.style.width=`${o.width}px`,n.style.height=`${o.height}px`,n.style.transform=Is(o.left,o.top)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function ke(n,o,e){const i=Oo(o,n.length-1),a=Oo(e,n.length-1);if(i===a)return;const u=n[i],h=a<i?-1:1;for(let M=i;M!==a;M+=h)n[M]=n[M+h];n[a]=u}function Oo(n,o){return Math.max(0,Math.min(o,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zf{constructor(o,e){this._element=o,this._dragDropRegistry=e,this._itemPositions=[],this.orientation="vertical",this._previousSwap={drag:null,delta:0,overlaps:!1}}start(o){this.withItems(o)}sort(o,e,i,a){const u=this._itemPositions,h=this._getItemIndexFromPointerPosition(o,e,i,a);if(-1===h&&u.length>0)return null;const M="horizontal"===this.orientation,O=u.findIndex(ne=>ne.drag===o),T=u[h],$=T.clientRect,Mt=O>h?1:-1,kt=this._getItemOffsetPx(u[O].clientRect,$,Mt),Bt=this._getSiblingOffsetPx(O,u,Mt),le=u.slice();return ke(u,O,h),u.forEach((ne,qo)=>{if(le[qo]===ne)return;const Rn=ne.drag===o,Vr=Rn?kt:Bt,Il=Rn?o.getPlaceholderElement():ne.drag.getRootElement();ne.offset+=Vr,M?(Il.style.transform=nc(`translate3d(${Math.round(ne.offset)}px, 0, 0)`,ne.initialTransform),gr(ne.clientRect,0,Vr)):(Il.style.transform=nc(`translate3d(0, ${Math.round(ne.offset)}px, 0)`,ne.initialTransform),gr(ne.clientRect,Vr,0))}),this._previousSwap.overlaps=Ss($,e,i),this._previousSwap.drag=T.drag,this._previousSwap.delta=M?a.x:a.y,{previousIndex:O,currentIndex:h}}enter(o,e,i,a){const u=null==a||a<0?this._getItemIndexFromPointerPosition(o,e,i):a,h=this._activeDraggables,M=h.indexOf(o),O=o.getPlaceholderElement();let T=h[u];if(T===o&&(T=h[u+1]),!T&&(null==u||-1===u||u<h.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(T=h[0]),M>-1&&h.splice(M,1),T&&!this._dragDropRegistry.isDragging(T)){const q=T.getRootElement();q.parentElement.insertBefore(O,q),h.splice(u,0,o)}else Ye(this._element).appendChild(O),h.push(o);O.style.transform="",this._cacheItemPositions()}withItems(o){this._activeDraggables=o.slice(),this._cacheItemPositions()}withSortPredicate(o){this._sortPredicate=o}reset(){this._activeDraggables.forEach(o=>{const e=o.getRootElement();if(e){const i=this._itemPositions.find(a=>a.drag===o)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(o){return("horizontal"===this.orientation&&"rtl"===this.direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(i=>i.drag===o)}updateOnScroll(o,e){this._itemPositions.forEach(({clientRect:i})=>{gr(i,o,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}_cacheItemPositions(){const o="horizontal"===this.orientation;this._itemPositions=this._activeDraggables.map(e=>{const i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:ic(i)}}).sort((e,i)=>o?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getItemOffsetPx(o,e,i){const a="horizontal"===this.orientation;let u=a?e.left-o.left:e.top-o.top;return-1===i&&(u+=a?e.width-o.width:e.height-o.height),u}_getSiblingOffsetPx(o,e,i){const a="horizontal"===this.orientation,u=e[o].clientRect,h=e[o+-1*i];let M=u[a?"width":"height"]*i;if(h){const O=a?"left":"top",T=a?"right":"bottom";-1===i?M-=h.clientRect[O]-u[T]:M+=u[O]-h.clientRect[T]}return M}_shouldEnterAsFirstChild(o,e){if(!this._activeDraggables.length)return!1;const i=this._itemPositions,a="horizontal"===this.orientation;if(i[0].drag!==this._activeDraggables[0]){const h=i[i.length-1].clientRect;return a?o>=h.right:e>=h.bottom}{const h=i[0].clientRect;return a?o<=h.left:e<=h.top}}_getItemIndexFromPointerPosition(o,e,i,a){const u="horizontal"===this.orientation,h=this._itemPositions.findIndex(({drag:M,clientRect:O})=>{if(M===o)return!1;if(a){const T=u?a.x:a.y;if(M===this._previousSwap.drag&&this._previousSwap.overlaps&&T===this._previousSwap.delta)return!1}return u?e>=Math.floor(O.left)&&e<Math.floor(O.right):i>=Math.floor(O.top)&&i<Math.floor(O.bottom)});return-1!==h&&this._sortPredicate(h,o)?h:-1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class tM{constructor(o,e,i,a,u){this._dragDropRegistry=e,this._ngZone=a,this._viewportRuler=u,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new Ht.x,this.entered=new Ht.x,this.exited=new Ht.x,this.dropped=new Ht.x,this.sorted=new Ht.x,this._isDragging=!1,this._draggables=[],this._siblings=[],this._activeSiblings=new Set,this._viewportScrollSubscription=Xn.w0.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new Ht.x,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),
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
function lr(n=0,o=us){return n<0&&(n=0),gu(n,n,o)}(0,ue).pipe(Si(this._stopScrollTimers)).subscribe(()=>{const h=this._scrollNode,M=this.autoScrollStep;1===this._verticalScrollDirection?h.scrollBy(0,-M):2===this._verticalScrollDirection&&h.scrollBy(0,M),1===this._horizontalScrollDirection?h.scrollBy(-M,0):2===this._horizontalScrollDirection&&h.scrollBy(M,0)})},this.element=Ye(o),this._document=i,this.withScrollableParents([this.element]),e.registerDropContainer(this),this._parentPositions=new Bf(i),this._sortStrategy=new zf(this.element,e),this._sortStrategy.withSortPredicate((h,M)=>this.sortPredicate(h,M,this))}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(o,e,i,a){this._draggingStarted(),null==a&&this.sortingDisabled&&(a=this._draggables.indexOf(o)),this._sortStrategy.enter(o,e,i,a),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:o,container:this,currentIndex:this.getItemIndex(o)})}exit(o){this._reset(),this.exited.next({item:o,container:this})}drop(o,e,i,a,u,h,M,O={}){this._reset(),this.dropped.next({item:o,currentIndex:e,previousIndex:i,container:this,previousContainer:a,isPointerOverContainer:u,distance:h,dropPoint:M,event:O})}withItems(o){const e=this._draggables;return this._draggables=o,o.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(a=>a.isDragging()).every(a=>-1===o.indexOf(a))?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(o){return this._sortStrategy.direction=o,this}connectedTo(o){return this._siblings=o.slice(),this}withOrientation(o){return this._sortStrategy.orientation=o,this}withScrollableParents(o){const e=Ye(this.element);return this._scrollableElements=-1===o.indexOf(e)?[e,...o]:o.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(o){return this._isDragging?this._sortStrategy.getItemIndex(o):this._draggables.indexOf(o)}isReceiving(){return this._activeSiblings.size>0}_sortItem(o,e,i,a){if(this.sortingDisabled||!this._clientRect||!oc(this._clientRect,.05,e,i))return;const u=this._sortStrategy.sort(o,e,i,a);u&&this.sorted.next({previousIndex:u.previousIndex,currentIndex:u.currentIndex,container:this,item:o})}_startScrollingIfNecessary(o,e){if(this.autoScrollDisabled)return;let i,a=0,u=0;if(this._parentPositions.positions.forEach((h,M)=>{M===this._document||!h.clientRect||i||oc(h.clientRect,.05,o,e)&&([a,u]=function eM(n,o,e,i){const a=Ru(o,i),u=Qf(o,e);let h=0,M=0;if(a){const O=n.scrollTop;1===a?O>0&&(h=1):n.scrollHeight-O>n.clientHeight&&(h=2)}if(u){const O=n.scrollLeft;1===u?O>0&&(M=1):n.scrollWidth-O>n.clientWidth&&(M=2)}return[h,M]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(M,h.clientRect,o,e),(a||u)&&(i=M))}),!a&&!u){const{width:h,height:M}=this._viewportRuler.getViewportSize(),O={width:h,height:M,top:0,right:h,bottom:M,left:0};a=Ru(O,e),u=Qf(O,o),i=window}i&&(a!==this._verticalScrollDirection||u!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=a,this._horizontalScrollDirection=u,this._scrollNode=i,(a||u)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const o=Ye(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=o.msScrollSnapType||o.scrollSnapType||"",o.scrollSnapType=o.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const o=Ye(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(o).clientRect}_reset(){this._isDragging=!1;const o=Ye(this.element).style;o.scrollSnapType=o.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_isOverContainer(o,e){return null!=this._clientRect&&Ss(this._clientRect,o,e)}_getSiblingContainerFromPosition(o,e,i){return this._siblings.find(a=>a._canReceive(o,e,i))}_canReceive(o,e,i){if(!this._clientRect||!Ss(this._clientRect,e,i)||!this.enterPredicate(o,this))return!1;const a=this._getShadowRoot().elementFromPoint(e,i);if(!a)return!1;const u=Ye(this.element);return a===u||u.contains(a)}_startReceiving(o,e){const i=this._activeSiblings;!i.has(o)&&e.every(a=>this.enterPredicate(a,this)||this._draggables.indexOf(a)>-1)&&(i.add(o),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(o){this._activeSiblings.delete(o),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(o=>{if(this.isDragging()){const e=this._parentPositions.handleScroll(o);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const o=_s(Ye(this.element));this._cachedShadowRoot=o||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const o=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,o))}}function Ru(n,o){const{top:e,bottom:i,height:a}=n,u=.05*a;return o>=e-u&&o<=e+u?1:o>=i-u&&o<=i+u?2:0}function Qf(n,o){const{left:e,right:i,width:a}=n,u=.05*a;return o>=e-u&&o<=e+u?1:o>=i-u&&o<=i+u?2:0}const Ls=ps({passive:!1,capture:!0});let Zu=(()=>{class n{constructor(e,i){this._ngZone=e,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=a=>a.isDragging(),this.pointerMove=new Ht.x,this.pointerUp=new Ht.x,this.scroll=new Ht.x,this._preventDefaultWhileDragging=a=>{this._activeDragInstances.length>0&&a.preventDefault()},this._persistentTouchmoveListener=a=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&a.preventDefault(),this.pointerMove.next(a))},this._document=i}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,Ls)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,Ls)}startDragging(e,i){if(!(this._activeDragInstances.indexOf(e)>-1)&&(this._activeDragInstances.push(e),1===this._activeDragInstances.length)){const a=i.type.startsWith("touch");this._globalListeners.set(a?"touchend":"mouseup",{handler:u=>this.pointerUp.next(u),options:!0}).set("scroll",{handler:u=>this.scroll.next(u),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:Ls}),a||this._globalListeners.set("mousemove",{handler:u=>this.pointerMove.next(u),options:Ls}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((u,h)=>{this._document.addEventListener(h,u.handler,u.options)})})}}stopDragging(e){const i=this._activeDragInstances.indexOf(e);i>-1&&(this._activeDragInstances.splice(i,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(e){return this._activeDragInstances.indexOf(e)>-1}scrolled(e){const i=[this.scroll];return e&&e!==this._document&&i.push(new qe.y(a=>this._ngZone.runOutsideAngular(()=>{const h=M=>{this._activeDragInstances.length&&a.next(M)};return e.addEventListener("scroll",h,!0),()=>{e.removeEventListener("scroll",h,!0)}}))),(0,bo.T)(...i)}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((e,i)=>{this._document.removeEventListener(i,e.handler,e.options)}),this._globalListeners.clear()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Gf={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let Yf=(()=>{class n{constructor(e,i,a,u){this._document=e,this._ngZone=i,this._viewportRuler=a,this._dragDropRegistry=u}createDrag(e,i=Gf){return new KC(e,i,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(e){return new tM(e,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(t.R0b),t.LFG(fu),t.LFG(Zu))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const cc=new t.OlP("CDK_DRAG_PARENT"),Uu=new t.OlP("CdkDropListGroup");
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
       */let $f=(()=>{class n{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=Ti(e)}ngOnDestroy(){this._items.clear()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:["cdkDropListGroupDisabled","disabled"]},exportAs:["cdkDropListGroup"],features:[t._Bn([{provide:Uu,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wf=new t.OlP("CDK_DRAG_CONFIG");
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
let ei=0;const Kf=new t.OlP("CdkDropList");let Ns=(()=>{class n{constructor(e,i,a,u,h,M,O){this.element=e,this._changeDetectorRef=a,this._scrollDispatcher=u,this._dir=h,this._group=M,this._destroyed=new Ht.x,this.connectedTo=[],this.id="cdk-drop-list-"+ei++,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.dropped=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.sorted=new t.vpe,this._unsortedItems=new Set,this._dropListRef=i.createDropList(e),this._dropListRef.data=this,O&&this._assignDefaults(O),this._dropListRef.enterPredicate=(T,q)=>this.enterPredicate(T.data,q.data),this._dropListRef.sortPredicate=(T,q,$)=>this.sortPredicate(T,q.data,$.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),M&&M._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=Ti(e)}addItem(e){this._unsortedItems.add(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}removeItem(e){this._unsortedItems.delete(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){const e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(ws(this._dir.value),Si(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{const i=Go(this.connectedTo).map(a=>"string"==typeof a?n._dropLists.find(h=>h.id===a):a);if(this._group&&this._group._items.forEach(a=>{-1===i.indexOf(a)&&i.push(a)}),!this._scrollableParentsResolved){const a=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(u=>u.getElementRef().nativeElement);this._dropListRef.withScrollableParents(a),this._scrollableParentsResolved=!0}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=Ti(this.sortingDisabled),e.autoScrollDisabled=Ti(this.autoScrollDisabled),e.autoScrollStep=ss(this.autoScrollStep,2),e.connectedTo(i.filter(a=>a&&a!==this).map(a=>a._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()})}_assignDefaults(e){const{lockAxis:i,draggingDisabled:a,sortingDisabled:u,listAutoScrollDisabled:h,listOrientation:M}=e;this.disabled=a??!1,this.sortingDisabled=u??!1,this.autoScrollDisabled=h??!1,this.orientation=M||"vertical",i&&(this.lockAxis=i)}_syncItemsWithRef(){this._dropListRef.withItems(this.getSortedItems().map(e=>e._dragRef))}}return n._dropLists=[],n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Yf),t.Y36(t.sBO),t.Y36(Mo),t.Y36(tr,8),t.Y36(Uu,12),t.Y36(Wf,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,i){2&e&&(t.uIk("id",i.id),t.ekj("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()))},inputs:{connectedTo:["cdkDropListConnectedTo","connectedTo"],data:["cdkDropListData","data"],orientation:["cdkDropListOrientation","orientation"],id:"id",lockAxis:["cdkDropListLockAxis","lockAxis"],disabled:["cdkDropListDisabled","disabled"],sortingDisabled:["cdkDropListSortingDisabled","sortingDisabled"],enterPredicate:["cdkDropListEnterPredicate","enterPredicate"],sortPredicate:["cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:["cdkDropListAutoScrollDisabled","autoScrollDisabled"],autoScrollStep:["cdkDropListAutoScrollStep","autoScrollStep"]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[t._Bn([{provide:Uu,useValue:void 0},{provide:Kf,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vu=new t.OlP("CdkDragHandle");let ju=(()=>{class n{constructor(e,i){this.element=e,this._stateChanges=new Ht.x,this._disabled=!1,this._parentDrag=i}get disabled(){return this._disabled}set disabled(e){this._disabled=Ti(e),this._stateChanges.next(this)}ngOnDestroy(){this._stateChanges.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(cc,12))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:["cdkDragHandleDisabled","disabled"]},features:[t._Bn([{provide:Vu,useExisting:n}])]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nM=new t.OlP("CdkDragPlaceholder"),Xf=new t.OlP("CdkDragPreview");let lc=(()=>{class n{constructor(e,i,a,u,h,M,O,T,q,$,Mt){this.element=e,this.dropContainer=i,this._ngZone=u,this._viewContainerRef=h,this._dir=O,this._changeDetectorRef=q,this._selfHandle=$,this._parentDrag=Mt,this._destroyed=new Ht.x,this.started=new t.vpe,this.released=new t.vpe,this.ended=new t.vpe,this.entered=new t.vpe,this.exited=new t.vpe,this.dropped=new t.vpe,this.moved=new qe.y(kt=>{const Bt=this._dragRef.moved.pipe((0,Gt.U)(le=>({source:this,pointerPosition:le.pointerPosition,event:le.event,delta:le.delta,distance:le.distance}))).subscribe(kt);return()=>{Bt.unsubscribe()}}),this._dragRef=T.createDrag(e,{dragStartThreshold:M&&null!=M.dragStartThreshold?M.dragStartThreshold:5,pointerDirectionChangeThreshold:M&&null!=M.pointerDirectionChangeThreshold?M.pointerDirectionChangeThreshold:5,zIndex:M?.zIndex}),this._dragRef.data=this,n._dragInstances.push(this),M&&this._assignDefaults(M),i&&(this._dragRef._withDropContainer(i._dropListRef),i.addItem(this)),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(e){this._disabled=Ti(e),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Je(1),Si(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._setupHandlesListener(),this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)})})}ngOnChanges(e){const i=e.rootElementSelector,a=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),a&&!a.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this);const e=n._dragInstances.indexOf(this);e>-1&&n._dragInstances.splice(e,1),this._ngZone.runOutsideAngular(()=>{this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_updateRootElement(){const e=this.element.nativeElement;let i=e;this.rootElementSelector&&(i=void 0!==e.closest?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){const e=this.boundaryElement;return e?"string"==typeof e?this.element.nativeElement.closest(e):Ye(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){const i=this._dir,a=this.dragStartDelay,u=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,h=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.dragStartDelay="object"==typeof a&&a?a:ss(a),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(u).withPreviewTemplate(h).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe(Je(1)).subscribe(()=>{if(this._parentDrag)return void e.withParent(this._parentDrag._dragRef);let i=this.element.nativeElement.parentElement;for(;i;){if(i.classList.contains("cdk-drag")){e.withParent(n._dragInstances.find(a=>a.element.nativeElement===i)?._dragRef||null);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){const{lockAxis:i,dragStartDelay:a,constrainPosition:u,previewClass:h,boundaryElement:M,draggingDisabled:O,rootElementSelector:T,previewContainer:q}=e;this.disabled=O??!1,this.dragStartDelay=a||0,i&&(this.lockAxis=i),u&&(this.constrainPosition=u),h&&(this.previewClass=h),M&&(this.boundaryElement=M),T&&(this.rootElementSelector=T),q&&(this.previewContainer=q)}_setupHandlesListener(){this._handles.changes.pipe(ws(this._handles),Ze(e=>{const i=e.filter(a=>a._parentDrag===this).map(a=>a.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),pn(e=>(0,bo.T)(...e.map(i=>i._stateChanges.pipe(ws(i))))),Si(this._destroyed)).subscribe(e=>{const i=this._dragRef,a=e.element.nativeElement;e.disabled?i.disableHandle(a):i.enableHandle(a)})}}return n._dragInstances=[],n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Kf,12),t.Y36(w),t.Y36(t.R0b),t.Y36(t.s_b),t.Y36(Wf,8),t.Y36(tr,8),t.Y36(Yf),t.Y36(t.sBO),t.Y36(Vu,10),t.Y36(cc,12))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkDrag",""]],contentQueries:function(e,i,a){if(1&e&&(t.Suo(a,Xf,5),t.Suo(a,nM,5),t.Suo(a,Vu,5)),2&e){let u;t.iGM(u=t.CRH())&&(i._previewTemplate=u.first),t.iGM(u=t.CRH())&&(i._placeholderTemplate=u.first),t.iGM(u=t.CRH())&&(i._handles=u)}},hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,i){2&e&&t.ekj("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging())},inputs:{data:["cdkDragData","data"],lockAxis:["cdkDragLockAxis","lockAxis"],rootElementSelector:["cdkDragRootElement","rootElementSelector"],boundaryElement:["cdkDragBoundary","boundaryElement"],dragStartDelay:["cdkDragStartDelay","dragStartDelay"],freeDragPosition:["cdkDragFreeDragPosition","freeDragPosition"],disabled:["cdkDragDisabled","disabled"],constrainPosition:["cdkDragConstrainPosition","constrainPosition"],previewClass:["cdkDragPreviewClass","previewClass"],previewContainer:["cdkDragPreviewContainer","previewContainer"]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[t._Bn([{provide:cc,useExisting:n}]),t.TTD]}),n})(),Jt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Yf],imports:[Kh]}),n})();
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
class Hu{attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;null!=o&&(this._attachedHost=null,o.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(o){this._attachedHost=o}}class uc extends Hu{constructor(o,e,i,a){super(),this.component=o,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=a}}class tp extends Hu{constructor(o,e,i,a){super(),this.templateRef=o,this.viewContainerRef=e,this.context=i,this.injector=a}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}}class cM extends Hu{constructor(o){super(),this.element=o instanceof t.SBq?o.nativeElement:o}}class ep{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(o){return o instanceof uc?(this._attachedPortal=o,this.attachComponentPortal(o)):o instanceof tp?(this._attachedPortal=o,this.attachTemplatePortal(o)):this.attachDomPortal&&o instanceof cM?(this._attachedPortal=o,this.attachDomPortal(o)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class np extends ep{constructor(o,e,i,a,u){super(),this.outletElement=o,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=a,this.attachDomPortal=h=>{const M=h.element,O=this._document.createComment("dom-portal");M.parentNode.insertBefore(O,M),this.outletElement.appendChild(M),this._attachedPortal=h,super.setDisposeFn(()=>{O.parentNode&&O.parentNode.replaceChild(M,O)})},this._document=u}attachComponentPortal(o){const i=(o.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(o.component);let a;return o.viewContainerRef?(a=o.viewContainerRef.createComponent(i,o.viewContainerRef.length,o.injector||o.viewContainerRef.injector),this.setDisposeFn(()=>a.destroy())):(a=i.create(o.injector||this._defaultInjector||t.zs3.NULL),this._appRef.attachView(a.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(a.hostView),a.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(a)),this._attachedPortal=o,a}attachTemplatePortal(o){let e=o.viewContainerRef,i=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return i.rootNodes.forEach(a=>this.outletElement.appendChild(a)),i.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(i);-1!==a&&e.remove(a)}),this._attachedPortal=o,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let gc=(()=>{class n extends ep{constructor(e,i,a){super(),this._componentFactoryResolver=e,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new t.vpe,this.attachDomPortal=u=>{const h=u.element,M=this._document.createComment("dom-portal");u.setAttachedHost(this),h.parentNode.insertBefore(M,h),this._getRootNode().appendChild(h),this._attachedPortal=u,super.setDisposeFn(()=>{M.parentNode&&M.parentNode.replaceChild(h,M)})},this._document=a}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const i=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,u=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),h=i.createComponent(u,i.length,e.injector||i.injector);return i!==this._viewContainerRef&&this._getRootNode().appendChild(h.hostView.rootNodes[0]),super.setDisposeFn(()=>h.destroy()),this._attachedPortal=e,this._attachedRef=h,this.attached.emit(h),h}attachTemplatePortal(e){e.setAttachedHost(this);const i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36(w))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[t.qOj]}),n})(),op=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
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
const uM=Ba();class gM{constructor(o,e){this._viewportRuler=o,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=we(-this._previousScrollPosition.left),o.style.top=we(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const o=this._document.documentElement,i=o.style,a=this._document.body.style,u=i.scrollBehavior||"",h=a.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),uM&&(i.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),uM&&(i.scrollBehavior=u,a.scrollBehavior=h)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rP{constructor(o,e,i,a){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=i,this._config=a,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(o){this._overlayRef=o}enable(){if(this._scrollSubscription)return;const o=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{const e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rp{enable(){}disable(){}attach(){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wi(n,o){return o.some(e=>n.bottom<e.top||n.top>e.bottom||n.right<e.left||n.left>e.right)}function sp(n,o){return o.some(e=>n.top<e.top||n.bottom>e.bottom||n.left<e.left||n.right>e.right)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ap{constructor(o,e,i,a){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=i,this._config=a,this._scrollSubscription=null}attach(o){this._overlayRef=o}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:a}=this._viewportRuler.getViewportSize();Wi(e,[{width:i,height:a,bottom:a,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let dc=(()=>{class n{constructor(e,i,a,u){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=a,this.noop=()=>new rp,this.close=h=>new rP(this._scrollDispatcher,this._ngZone,this._viewportRuler,h),this.block=()=>new gM(this._viewportRuler,this._document),this.reposition=h=>new ap(this._scrollDispatcher,this._viewportRuler,this._ngZone,h),this._document=u}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Mo),t.LFG(fu),t.LFG(t.R0b),t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
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
       */class cp{constructor(o){if(this.scrollStrategy=new rp,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,o){const e=Object.keys(o);for(const i of e)void 0!==o[i]&&(this[i]=o[i])}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class mn{constructor(o,e,i,a,u){this.offsetX=i,this.offsetY=a,this.panelClass=u,this.originX=o.originX,this.originY=o.originY,this.overlayX=e.overlayX,this.overlayY=e.overlayY}}class hM{constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lp=(()=>{class n{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){const i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),0===this._attachedOverlays.length&&this.detach()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),up=(()=>{class n extends lp{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=a=>{const u=this._attachedOverlays;for(let h=u.length-1;h>-1;h--)if(u[h]._keydownEvents.observers.length>0){const M=u[h]._keydownEvents;this._ngZone?this._ngZone.run(()=>M.next(a)):M.next(a);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(t.R0b,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),fM=(()=>{class n extends lp{constructor(e,i,a){super(e),this._platform=i,this._ngZone=a,this._cursorStyleIsSet=!1,this._pointerDownListener=u=>{this._pointerDownEventTarget=ti(u)},this._clickListener=u=>{const h=ti(u),M="click"===u.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:h;this._pointerDownEventTarget=null;const O=this._attachedOverlays.slice();for(let T=O.length-1;T>-1;T--){const q=O[T];if(q._outsidePointerEvents.observers.length<1||!q.hasAttached())continue;if(q.overlayElement.contains(h)||q.overlayElement.contains(M))break;const $=q._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>$.next(u)):$.next(u)}}}add(e){if(super.add(e),!this._isAttached){const i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(Vn),t.LFG(t.R0b,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),hc=(()=>{class n{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const e="cdk-overlay-container";if(this._platform.isBrowser||Gh()){const a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let u=0;u<a.length;u++)a[u].remove()}const i=this._document.createElement("div");i.classList.add(e),Gh()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w),t.LFG(Vn))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
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
class fc{constructor(o,e,i,a,u,h,M,O,T,q=!1){this._portalOutlet=o,this._host=e,this._pane=i,this._config=a,this._ngZone=u,this._keyboardDispatcher=h,this._document=M,this._location=O,this._outsideClickDispatcher=T,this._animationsDisabled=q,this._backdropElement=null,this._backdropClick=new Ht.x,this._attachments=new Ht.x,this._detachments=new Ht.x,this._locationChanges=Xn.w0.EMPTY,this._backdropClickHandler=$=>this._backdropClick.next($),this._backdropTransitionendHandler=$=>{this._disposeBackdrop($.target)},this._keydownEvents=new Ht.x,this._outsidePointerEvents=new Ht.x,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(o){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const e=this._portalOutlet.attach(o);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(Je(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof e?.onDestroy&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const o=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){const o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,o&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config={...this._config,...o},this._updateElementSize()}setDirection(o){this._config={...this._config,direction:o},this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){const o=this._config.direction;return o?"string"==typeof o?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const o=this._pane.style;o.width=we(this._config.width),o.height=we(this._config.height),o.minWidth=we(this._config.minWidth),o.minHeight=we(this._config.minHeight),o.maxWidth=we(this._config.maxWidth),o.maxHeight=we(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachBackdrop(){const o="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(o)})}):this._backdropElement.classList.add(o)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const o=this._backdropElement;if(o){if(this._animationsDisabled)return void this._disposeBackdrop(o);o.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{o.addEventListener("transitionend",this._backdropTransitionendHandler)}),o.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(o)},500))}}_toggleClasses(o,e,i){const a=Go(e||[]).filter(u=>!!u);a.length&&(i?o.classList.add(...a):o.classList.remove(...a))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const o=this._ngZone.onStable.pipe(Si((0,bo.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),o.unsubscribe())})})}_disposeScrollStrategy(){const o=this._scrollStrategy;o&&(o.disable(),o.detach&&o.detach())}_disposeBackdrop(o){o&&(o.removeEventListener("click",this._backdropClickHandler),o.removeEventListener("transitionend",this._backdropTransitionendHandler),o.remove(),this._backdropElement===o&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pc="cdk-overlay-connected-position-bounding-box",lP=/([A-Za-z%]+)$/;class Bu{constructor(o,e,i,a,u){this._viewportRuler=e,this._document=i,this._platform=a,this._overlayContainer=u,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Ht.x,this._resizeSubscription=Xn.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(o)}get positions(){return this._preferredPositions}attach(o){this._validatePositions(),o.hostElement.classList.add(pc),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const o=this._originRect,e=this._overlayRect,i=this._viewportRect,a=this._containerRect,u=[];let h;for(let M of this._preferredPositions){let O=this._getOriginPoint(o,a,M),T=this._getOverlayPoint(O,e,M),q=this._getOverlayFit(T,e,i,M);if(q.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(M,O);this._canFitWithFlexibleDimensions(q,T,i)?u.push({position:M,origin:O,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(O,M)}):(!h||h.overlayFit.visibleArea<q.visibleArea)&&(h={overlayFit:q,overlayPoint:T,originPoint:O,position:M,overlayRect:e})}if(u.length){let M=null,O=-1;for(const T of u){const q=T.boundingBoxRect.width*T.boundingBoxRect.height*(T.position.weight||1);q>O&&(O=q,M=T)}return this._isPushed=!1,void this._applyPosition(M.position,M.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(h.position,h.originPoint);this._applyPosition(h.position,h.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Po(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(pc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const o=this._lastPosition;if(o){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const e=this._getOriginPoint(this._originRect,this._containerRect,o);this._applyPosition(o,e)}else this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,-1===o.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}_getOriginPoint(o,e,i){let a,u;if("center"==i.originX)a=o.left+o.width/2;else{const h=this._isRtl()?o.right:o.left,M=this._isRtl()?o.left:o.right;a="start"==i.originX?h:M}return e.left<0&&(a-=e.left),u="center"==i.originY?o.top+o.height/2:"top"==i.originY?o.top:o.bottom,e.top<0&&(u-=e.top),{x:a,y:u}}_getOverlayPoint(o,e,i){let a,u;return a="center"==i.overlayX?-e.width/2:"start"===i.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,u="center"==i.overlayY?-e.height/2:"top"==i.overlayY?0:-e.height,{x:o.x+a,y:o.y+u}}_getOverlayFit(o,e,i,a){const u=xo(e);let{x:h,y:M}=o,O=this._getOffset(a,"x"),T=this._getOffset(a,"y");O&&(h+=O),T&&(M+=T);let Mt=0-M,kt=M+u.height-i.height,Bt=this._subtractOverflows(u.width,0-h,h+u.width-i.width),le=this._subtractOverflows(u.height,Mt,kt),ne=Bt*le;return{visibleArea:ne,isCompletelyWithinViewport:u.width*u.height===ne,fitsInViewportVertically:le===u.height,fitsInViewportHorizontally:Bt==u.width}}_canFitWithFlexibleDimensions(o,e,i){if(this._hasFlexibleDimensions){const a=i.bottom-e.y,u=i.right-e.x,h=pM(this._overlayRef.getConfig().minHeight),M=pM(this._overlayRef.getConfig().minWidth),T=o.fitsInViewportHorizontally||null!=M&&M<=u;return(o.fitsInViewportVertically||null!=h&&h<=a)&&T}return!1}_pushOverlayOnScreen(o,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};const a=xo(e),u=this._viewportRect,h=Math.max(o.x+a.width-u.width,0),M=Math.max(o.y+a.height-u.height,0),O=Math.max(u.top-i.top-o.y,0),T=Math.max(u.left-i.left-o.x,0);let q=0,$=0;return q=a.width<=u.width?T||-h:o.x<this._viewportMargin?u.left-i.left-o.x:0,$=a.height<=u.height?O||-M:o.y<this._viewportMargin?u.top-i.top-o.y:0,this._previousPushAmount={x:q,y:$},{x:o.x+q,y:o.y+$}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._lastPosition=o,this._positionChanges.observers.length){const i=this._getScrollVisibility(),a=new hM(o,i);this._positionChanges.next(a)}this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let i,a=o.overlayY;i="center"===o.overlayX?"center":this._isRtl()?"start"===o.overlayX?"right":"left":"start"===o.overlayX?"left":"right";for(let u=0;u<e.length;u++)e[u].style.transformOrigin=`${i} ${a}`}_calculateBoundingBoxRect(o,e){const i=this._viewportRect,a=this._isRtl();let u,h,M,q,$,Mt;if("top"===e.overlayY)h=o.y,u=i.height-h+this._viewportMargin;else if("bottom"===e.overlayY)M=i.height-o.y+2*this._viewportMargin,u=i.height-M+this._viewportMargin;else{const kt=Math.min(i.bottom-o.y+i.top,o.y),Bt=this._lastBoundingBoxSize.height;u=2*kt,h=o.y-kt,u>Bt&&!this._isInitialRender&&!this._growAfterOpen&&(h=o.y-Bt/2)}if("end"===e.overlayX&&!a||"start"===e.overlayX&&a)Mt=i.width-o.x+this._viewportMargin,q=o.x-this._viewportMargin;else if("start"===e.overlayX&&!a||"end"===e.overlayX&&a)$=o.x,q=i.right-o.x;else{const kt=Math.min(i.right-o.x+i.left,o.x),Bt=this._lastBoundingBoxSize.width;q=2*kt,$=o.x-kt,q>Bt&&!this._isInitialRender&&!this._growAfterOpen&&($=o.x-Bt/2)}return{top:h,left:$,bottom:M,right:Mt,width:q,height:u}}_setBoundingBoxStyles(o,e){const i=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));const a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right=a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{const u=this._overlayRef.getConfig().maxHeight,h=this._overlayRef.getConfig().maxWidth;a.height=we(i.height),a.top=we(i.top),a.bottom=we(i.bottom),a.width=we(i.width),a.left=we(i.left),a.right=we(i.right),a.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",a.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",u&&(a.maxHeight=we(u)),h&&(a.maxWidth=we(h))}this._lastBoundingBoxSize=i,Po(this._boundingBox.style,a)}_resetBoundingBoxStyles(){Po(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Po(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,e){const i={},a=this._hasExactPosition(),u=this._hasFlexibleDimensions,h=this._overlayRef.getConfig();if(a){const q=this._viewportRuler.getViewportScrollPosition();Po(i,this._getExactOverlayY(e,o,q)),Po(i,this._getExactOverlayX(e,o,q))}else i.position="static";let M="",O=this._getOffset(e,"x"),T=this._getOffset(e,"y");O&&(M+=`translateX(${O}px) `),T&&(M+=`translateY(${T}px)`),i.transform=M.trim(),h.maxHeight&&(a?i.maxHeight=we(h.maxHeight):u&&(i.maxHeight="")),h.maxWidth&&(a?i.maxWidth=we(h.maxWidth):u&&(i.maxWidth="")),Po(this._pane.style,i)}_getExactOverlayY(o,e,i){let a={top:"",bottom:""},u=this._getOverlayPoint(e,this._overlayRect,o);return this._isPushed&&(u=this._pushOverlayOnScreen(u,this._overlayRect,i)),"bottom"===o.overlayY?a.bottom=this._document.documentElement.clientHeight-(u.y+this._overlayRect.height)+"px":a.top=we(u.y),a}_getExactOverlayX(o,e,i){let h,a={left:"",right:""},u=this._getOverlayPoint(e,this._overlayRect,o);return this._isPushed&&(u=this._pushOverlayOnScreen(u,this._overlayRect,i)),h=this._isRtl()?"end"===o.overlayX?"left":"right":"end"===o.overlayX?"right":"left","right"===h?a.right=this._document.documentElement.clientWidth-(u.x+this._overlayRect.width)+"px":a.left=we(u.x),a}_getScrollVisibility(){const o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:sp(o,i),isOriginOutsideView:Wi(o,i),isOverlayClipped:sp(e,i),isOverlayOutsideView:Wi(e,i)}}_subtractOverflows(o,...e){return e.reduce((i,a)=>i-Math.max(a,0),o)}_getNarrowedViewportRect(){const o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+o-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:o-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return"x"===e?o.offsetX??this._offsetX:o.offsetY??this._offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&Go(o).forEach(e=>{""!==e&&-1===this._appliedPanelClasses.indexOf(e)&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getOriginRect(){const o=this._origin;if(o instanceof t.SBq)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();const e=o.width||0,i=o.height||0;return{top:o.y,bottom:o.y+i,left:o.x,right:o.x+e,height:i,width:e}}}function Po(n,o){for(let e in o)o.hasOwnProperty(e)&&(n[e]=o[e]);return n}function pM(n){if("number"!=typeof n&&null!=n){const[o,e]=n.split(lP);return e&&"px"!==e?null:parseFloat(o)}return n||null}function xo(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}const Fs="cdk-global-overlay-wrapper";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ni{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(o){const e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(Fs),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:a,height:u,maxWidth:h,maxHeight:M}=i,O=!("100%"!==a&&"100vw"!==a||h&&"100%"!==h&&"100vw"!==h),T=!("100%"!==u&&"100vh"!==u||M&&"100%"!==M&&"100vh"!==M),q=this._xPosition,$=this._xOffset,Mt="rtl"===this._overlayRef.getConfig().direction;let kt="",Bt="",le="";O?le="flex-start":"center"===q?(le="center",Mt?Bt=$:kt=$):Mt?"left"===q||"end"===q?(le="flex-end",kt=$):("right"===q||"start"===q)&&(le="flex-start",Bt=$):"left"===q||"start"===q?(le="flex-start",kt=$):("right"===q||"end"===q)&&(le="flex-end",Bt=$),o.position=this._cssPosition,o.marginLeft=O?"0":kt,o.marginTop=T?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=O?"0":Bt,e.justifyContent=le,e.alignItems=T?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Fs),i.justifyContent=i.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let gp=(()=>{class n{constructor(e,i,a,u){this._viewportRuler=e,this._document=i,this._platform=a,this._overlayContainer=u}global(){return new ni}flexibleConnectedTo(e){return new Bu(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(fu),t.LFG(w),t.LFG(Vn),t.LFG(hc))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),vM=0,rn=(()=>{class n{constructor(e,i,a,u,h,M,O,T,q,$,Mt,kt){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=a,this._positionBuilder=u,this._keyboardDispatcher=h,this._injector=M,this._ngZone=O,this._document=T,this._directionality=q,this._location=$,this._outsideClickDispatcher=Mt,this._animationsModuleType=kt}create(e){const i=this._createHostElement(),a=this._createPaneElement(i),u=this._createPortalOutlet(a),h=new cp(e);return h.direction=h.direction||this._directionality.value,new fc(u,i,a,h,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(e){const i=this._document.createElement("div");return i.id="cdk-overlay-"+vM++,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){const e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(t.z2F)),new np(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(dc),t.LFG(hc),t.LFG(t._Vd),t.LFG(gp),t.LFG(up),t.LFG(t.zs3),t.LFG(t.R0b),t.LFG(w),t.LFG(tr),t.LFG(lt),t.LFG(fM),t.LFG(t.QbO,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hp={provide:new t.OlP("cdk-connected-overlay-scroll-strategy"),deps:[rn],useFactory:function uP(n){return()=>n.scrollStrategies.reposition()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let gP=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[rn,hp],imports:[qa,op,mu,mu]}),n})();
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
function Xi(n){return new qe.y(o=>{(0,Kn.Xf)(n()).subscribe(o)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zu(n,o){}class Rs{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let dP=(()=>{class n extends ep{constructor(e,i,a,u,h,M,O,T){super(),this._elementRef=e,this._focusTrapFactory=i,this._config=u,this._interactivityChecker=h,this._ngZone=M,this._overlayRef=O,this._focusMonitor=T,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=q=>{this._portalOutlet.hasAttached();const $=this._portalOutlet.attachDomPortal(q);return this._contentAttached(),$},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=a}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();const i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const a=()=>{e.removeEventListener("blur",a),e.removeEventListener("mousedown",a),e.removeAttribute("tabindex")};e.addEventListener("blur",a),e.addEventListener("mousedown",a)})),e.focus(i)}_focusByCssSelector(e,i){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,i)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{i||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let i=null;if("string"==typeof e?i=this._document.querySelector(e):"boolean"==typeof e?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&"function"==typeof i.focus){const a=Ko(),u=this._elementRef.nativeElement;(!a||a===this._document.body||a===u||u.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,i=Ko();return e===i||e.contains(i)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ko())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(Nf),t.Y36(w,8),t.Y36(Rs),t.Y36(Af),t.Y36(t.R0b),t.Y36(fc),t.Y36(As))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(1&e&&t.Gf(gc,7),2&e){let a;t.iGM(a=t.CRH())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){2&e&&t.uIk("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledBy)("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[t.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){1&e&&t.YNc(0,zu,0,0,"ng-template",0)},dependencies:[gc],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class En{constructor(o,e){this.overlayRef=o,this.config=e,this.closed=new Ht.x,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{27===i.keyCode&&!this.disableClose&&!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vf(n,...o){return o.length?o.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(o,e){if(this.containerInstance){const i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),i.next(o),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pp=new t.OlP("DialogScrollStrategy"),Sn=new t.OlP("DialogData"),mp=new t.OlP("DefaultDialogConfig"),hP={provide:pp,deps:[rn],useFactory:function _p(n){return()=>n.scrollStrategies.block()}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let MM=0,sn=(()=>{class n{constructor(e,i,a,u,h,M){this._overlay=e,this._injector=i,this._defaultOptions=a,this._parentDialog=u,this._overlayContainer=h,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new Ht.x,this._afterOpenedAtThisLevel=new Ht.x,this._ariaHiddenElements=new Map,this.afterAllClosed=Xi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ws(void 0))),this._scrollStrategy=M}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,i){(i={...this._defaultOptions||new Rs,...i}).id=i.id||"cdk-dialog-"+MM++,i.id&&this.getDialogById(i.id);const u=this._getOverlayConfig(i),h=this._overlay.create(u),M=new En(h,i),O=this._attachContainer(h,M,i);return M.containerInstance=O,this._attachDialogContent(e,M,O,i),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(M),M.closed.subscribe(()=>this._removeOpenDialog(M,!0)),this.afterOpened.next(M),M}closeAll(){mc(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){mc(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),mc(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const i=new cp({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,a){const u=a.injector||a.viewContainerRef?.injector,h=[{provide:Rs,useValue:a},{provide:En,useValue:i},{provide:fc,useValue:e}];let M;a.container?"function"==typeof a.container?M=a.container:(M=a.container.type,h.push(...a.container.providers(a))):M=dP;const O=new uc(M,a.viewContainerRef,t.zs3.create({parent:u||this._injector,providers:h}),a.componentFactoryResolver);return e.attach(O).instance}_attachDialogContent(e,i,a,u){if(e instanceof t.Rgc){const h=this._createInjector(u,i,a,void 0);let M={$implicit:u.data,dialogRef:i};u.templateContext&&(M={...M,..."function"==typeof u.templateContext?u.templateContext():u.templateContext}),a.attachTemplatePortal(new tp(e,null,M,h))}else{const h=this._createInjector(u,i,a,this._injector),M=a.attachComponentPortal(new uc(e,u.viewContainerRef,h,u.componentFactoryResolver));i.componentInstance=M.instance}}_createInjector(e,i,a,u){const h=e.injector||e.viewContainerRef?.injector,M=[{provide:Sn,useValue:e.data},{provide:En,useValue:i}];return e.providers&&("function"==typeof e.providers?M.push(...e.providers(i,e,a)):M.push(...e.providers)),e.direction&&(!h||!h.get(tr,null,t.XFs.Optional))&&M.push({provide:tr,useValue:{value:e.direction,change:Dt()}}),t.zs3.create({parent:h||u,providers:M})}_removeOpenDialog(e,i){const a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((u,h)=>{u?h.setAttribute("aria-hidden",u):h.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const i=e.parentElement.children;for(let a=i.length-1;a>-1;a--){const u=i[a];u!==e&&"SCRIPT"!==u.nodeName&&"STYLE"!==u.nodeName&&!u.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(u,u.getAttribute("aria-hidden")),u.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(rn),t.LFG(t.zs3),t.LFG(mp,8),t.LFG(n,12),t.LFG(hc),t.LFG(pp))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function mc(n,o){let e=n.length;for(;e--;)o(n[e])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vp=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[sn,hP],imports:[gP,op,$O,op]}),n})();
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
       */function mr(n,o){const e=(0,An.m)(n)?n:()=>n,i=a=>a.error(e());return new qe.y(o?a=>o.schedule(i,0,a):i)}const mi=new qe.y(zh.Z);function Cp(){return(0,ge.e)((n,o)=>{let e=null;n._refCount++;const i=(0,be.x)(o,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount)return void(e=null);const a=n._connection,u=e;e=null,a&&(!u||a===u)&&a.unsubscribe(),o.unsubscribe()});n.subscribe(i),i.closed||(e=n.connect())})}class Mp extends qe.y{constructor(o,e){super(),this.source=o,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,(0,ge.A)(o)&&(this.lift=o.lift)}_subscribe(o){return this.getSubject().subscribe(o)}getSubject(){const o=this._subject;return(!o||o.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:o}=this;this._subject=this._connection=null,o?.unsubscribe()}connect(){let o=this._connection;if(!o){o=this._connection=new Xn.w0;const e=this.getSubject();o.add(this.source.subscribe((0,be.x)(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),o.closed&&(this._connection=null,o=Xn.w0.EMPTY)}return o}refCount(){return Cp()(this)}}const pP={connector:()=>new Ht.x};function yM(n,o=pP){const{connector:e}=o;return(0,ge.e)((i,a)=>{const u=e();(0,Kn.Xf)(n(function fP(n){return new qe.y(o=>n.subscribe(o))}(u))).subscribe(a),a.add(i.subscribe(u))})}function bM(n){return(0,Gt.U)(()=>n)}function Li(n,o){return o?e=>xs(o.pipe(Je(1),function vP(){return(0,ge.e)((n,o)=>{n.subscribe((0,be.x)(o,zh.Z))})}()),e.pipe(Li(n))):(0,$e.z)((e,i)=>n(e,i).pipe(Je(1),bM(e)))}
/**
       * @license Angular v14.1.3
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
const Zs="Service workers are disabled or not supported by this browser";class _r{constructor(o){if(this.serviceWorker=o,o){const i=_o(o,"controllerchange").pipe((0,Gt.U)(()=>o.controller)),u=xs(Xi(()=>Dt(o.controller)),i);this.worker=u.pipe(dn(q=>!!q)),this.registration=this.worker.pipe(pn(()=>o.getRegistration()));const T=_o(o,"message").pipe((0,Gt.U)(q=>q.data)).pipe(dn(q=>q&&q.type)).pipe(function _P(n){return n?o=>yM(n)(o):o=>function mP(n,o){const e=(0,An.m)(n)?n:()=>n;return(0,An.m)(o)?yM(o,{connector:e}):i=>new Mp(i,e)}(new Ht.x)(o)}());T.connect(),this.events=T}else this.worker=this.events=this.registration=function yp(n){return Xi(()=>mr(new Error(n)))}(Zs)}postMessage(o,e){return this.worker.pipe(Je(1),Ze(i=>{i.postMessage({action:o,...e})})).toPromise().then(()=>{})}postMessageWithOperation(o,e,i){const a=this.waitForOperationCompleted(i),u=this.postMessage(o,e);return Promise.all([u,a]).then(([,h])=>h)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(o){let e;return e="string"==typeof o?i=>i.type===o:i=>o.includes(i.type),this.events.pipe(dn(e))}nextEventOfType(o){return this.eventsOfType(o).pipe(Je(1))}waitForOperationCompleted(o){return this.eventsOfType("OPERATION_COMPLETED").pipe(dn(e=>e.nonce===o),Je(1),(0,Gt.U)(e=>{if(void 0!==e.result)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let bp=(()=>{class n{constructor(e){if(this.sw=e,this.subscriptionChanges=new Ht.x,!e.isEnabled)return this.messages=mi,this.notificationClicks=mi,void(this.subscription=mi);this.messages=this.sw.eventsOfType("PUSH").pipe((0,Gt.U)(a=>a.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,Gt.U)(a=>a.data)),this.pushManager=this.sw.registration.pipe((0,Gt.U)(a=>a.pushManager));const i=this.pushManager.pipe(pn(a=>a.getSubscription()));this.subscription=(0,bo.T)(i,this.subscriptionChanges)}get isEnabled(){return this.sw.isEnabled}requestSubscription(e){if(!this.sw.isEnabled)return Promise.reject(new Error(Zs));const i={userVisibleOnly:!0};let a=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),u=new Uint8Array(new ArrayBuffer(a.length));for(let h=0;h<a.length;h++)u[h]=a.charCodeAt(h);return i.applicationServerKey=u,this.pushManager.pipe(pn(h=>h.subscribe(i)),Je(1)).toPromise().then(h=>(this.subscriptionChanges.next(h),h))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe(Je(1),pn(i=>{if(null===i)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(a=>{if(!a)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(Zs))}decodeBase64(e){return atob(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_r))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),_c=(()=>{class n{constructor(e){if(this.sw=e,!e.isEnabled)return this.versionUpdates=mi,this.available=mi,this.activated=mi,void(this.unrecoverable=mi);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.available=this.versionUpdates.pipe(dn(i=>"VERSION_READY"===i.type),(0,Gt.U)(i=>({type:"UPDATE_AVAILABLE",current:i.currentVersion,available:i.latestVersion}))),this.activated=this.sw.eventsOfType("UPDATE_ACTIVATED"),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}get isEnabled(){return this.sw.isEnabled}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Zs));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Zs));const e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_r))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
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
class Gu{}const Ni=new t.OlP("NGSW_REGISTER_SCRIPT");function Op(n,o,e,i){return()=>{if(!Pn(i)||!("serviceWorker"in navigator)||!1===e.enabled)return;let u;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof e.registrationStrategy)u=e.registrationStrategy();else{const[M,...O]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(M){case"registerImmediately":u=Dt(null);break;case"registerWithDelay":u=Pp(+O[0]||0);break;case"registerWhenStable":u=O[0]?(0,bo.T)(vc(n),Pp(+O[0])):vc(n);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}n.get(t.R0b).runOutsideAngular(()=>u.pipe(Je(1)).subscribe(()=>navigator.serviceWorker.register(o,{scope:e.scope}).catch(M=>console.error("Service worker registration failed with:",M))))}}function Pp(n){return Dt(null).pipe(function Qu(n,o=us){const e=gu(n,o);return Li(()=>e)}(n))}function vc(n){return n.get(t.z2F).isStable.pipe(dn(e=>e))}function OM(n,o){return new _r(Pn(o)&&!1!==n.enabled?navigator.serviceWorker:void 0)}let xp=(()=>{class n{static register(e,i={}){return{ngModule:n,providers:[{provide:Ni,useValue:e},{provide:Gu,useValue:i},{provide:_r,useFactory:OM,deps:[Gu,t.Lbi]},{provide:t.ip1,useFactory:Op,deps:[t.zs3,Ni,Gu,t.Lbi],multi:!0}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[bp,_c]}),n})(),wp=(()=>{class n{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=a=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n}),n})(),_i=(()=>{class n extends wp{}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,features:[t.qOj]}),n})();
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
       */const _n=new t.OlP("NgValueAccessor"),Yu={provide:_n,useExisting:(0,t.Gpc)(()=>to),multi:!0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let to=(()=>{class n extends _i{writeValue(e){this.setProperty("checked",e)}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(u){return i.onChange(u.target.checked)})("blur",function(){return i.onTouched()})},features:[t._Bn([Yu]),t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Cc={provide:_n,useExisting:(0,t.Gpc)(()=>wo),multi:!0},xM=new t.OlP("CompositionEventMode");let wo=(()=>{class n extends wp{constructor(e,i,a){super(e,i),this._compositionMode=a,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Us(){const n=B()?B().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(xM,8))},n.\u0275dir=t.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,i){1&e&&t.NdJ("input",function(u){return i._handleInput(u.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(u){return i._compositionEnd(u.target.value)})},features:[t._Bn([Cc]),t.qOj]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const We=new t.OlP("NgValidators"),Ci=new t.OlP("NgAsyncValidators");function DM(n){return null!=n}function Ep(n){return(0,t.QGY)(n)?(0,De.D)(n):n}function bc(n){let o={};return n.forEach(e=>{o=null!=e?{...o,...e}:o}),0===Object.keys(o).length?null:o}function tg(n,o){return o.map(e=>e(n))}function Sp(n){return n.map(o=>function kM(n){return!n.validate}(o)?o:e=>o.validate(e))}function Oc(n){return null!=n?function Ip(n){if(!n)return null;const o=n.filter(DM);return 0==o.length?null:function(e){return bc(tg(e,o))}}(Sp(n)):null}function Pc(n){return null!=n?function Lp(n){if(!n)return null;const o=n.filter(DM);return 0==o.length?null:function(e){return function PM(...n){const o=(0,gi.jO)(n),{args:e,keys:i}=Wa(n),a=new qe.y(u=>{const{length:h}=e;if(!h)return void u.complete();const M=new Array(h);let O=h,T=h;for(let q=0;q<h;q++){let $=!1;(0,Kn.Xf)(e[q]).subscribe((0,be.x)(u,Mt=>{$||($=!0,T--),M[q]=Mt},()=>O--,void 0,()=>{(!O||!$)&&(T||u.next(i?Mf(i,M):M),u.complete())}))}});return o?a.pipe(Yo(o)):a}
/**
       * @license Angular v14.1.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(tg(e,o).map(Ep)).pipe((0,Gt.U)(bc))}}(Sp(n)):null}function Np(n,o){return null===n?[o]:Array.isArray(n)?[...n,o]:[n,o]}function xc(n){return n?Array.isArray(n)?n:[n]:[]}function wc(n,o){return Array.isArray(n)?n.includes(o):n===o}function ii(n,o){const e=xc(o);return xc(n).forEach(a=>{wc(e,a)||e.push(a)}),e}function Dc(n,o){return xc(o).filter(e=>!wc(n,e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rp{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Oc(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Pc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o){this.control&&this.control.reset(o)}hasError(o,e){return!!this.control&&this.control.hasError(o,e)}getError(o,e){return this.control?this.control.getError(o,e):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vn extends Rp{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Do extends Rp{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kc=(()=>{class n extends class ng{constructor(o){this._cd=o}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Do,2))},n.\u0275dir=t.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,i){2&e&&t.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[t.qOj]}),n})();
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
const In="VALID",ko="INVALID",Fi="PENDING",Ri="DISABLED";function Ec(n){return Array.isArray(n)?Oc(n):n||null}function Bp(n){return Array.isArray(n)?Pc(n):n||null}function Ic(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Nc(n,o){(function Bs(n,o){const e=function Fp(n){return n._rawValidators}(n);null!==o.validator?n.setValidators(Np(e,o.validator)):"function"==typeof e&&n.setValidators([e]);const i=function eg(n){return n._rawAsyncValidators}(n);null!==o.asyncValidator?n.setAsyncValidators(Np(i,o.asyncValidator)):"function"==typeof i&&n.setAsyncValidators([i]);const a=()=>n.updateValueAndValidity();Cr(o._rawValidators,a),Cr(o._rawAsyncValidators,a)})(n,o),o.valueAccessor.writeValue(n.value),n.disabled&&o.valueAccessor.setDisabledState?.(!0),function FM(n,o){o.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Jp(n,o)})}(n,o),function ZM(n,o){const e=(i,a)=>{o.valueAccessor.writeValue(i),a&&o.viewToModelUpdate(i)};n.registerOnChange(e),o._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,o),function RM(n,o){o.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Jp(n,o),"submit"!==n.updateOn&&n.markAsTouched()})}(n,o),function NM(n,o){if(o.valueAccessor.setDisabledState){const e=i=>{o.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),o._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,o)}function Cr(n,o){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Jp(n,o){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zc(n,o){const e=n.indexOf(o);e>-1&&n.splice(e,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function To(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const Yp={provide:Do,useExisting:(0,t.Gpc)(()=>Or)},gg=(()=>Promise.resolve(null))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Or=(()=>{class n extends Do{constructor(e,i,a,u,h){super(),this._changeDetectorRef=h,this.control=new class extends class IM{constructor(o,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=o,this._rawAsyncValidators=e,this._composedValidatorFn=Ec(this._rawValidators),this._composedAsyncValidatorFn=Bp(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get valid(){return this.status===In}get invalid(){return this.status===ko}get pending(){return this.status==Fi}get disabled(){return this.status===Ri}get enabled(){return this.status!==Ri}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._rawValidators=o,this._composedValidatorFn=Ec(o)}setAsyncValidators(o){this._rawAsyncValidators=o,this._composedAsyncValidatorFn=Bp(o)}addValidators(o){this.setValidators(ii(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(ii(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Dc(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Dc(o,this._rawAsyncValidators))}hasValidator(o){return wc(this._rawValidators,o)}hasAsyncValidator(o){return wc(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){this.touched=!0,this._parent&&!o.onlySelf&&this._parent.markAsTouched(o)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(o=>o.markAllAsTouched())}markAsUntouched(o={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o)}markAsDirty(o={}){this.pristine=!1,this._parent&&!o.onlySelf&&this._parent.markAsDirty(o)}markAsPristine(o={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o)}markAsPending(o={}){this.status=Fi,!1!==o.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!o.onlySelf&&this._parent.markAsPending(o)}disable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=Ri,this.errors=null,this._forEachChild(i=>{i.disable({...o,onlySelf:!0})}),this._updateValue(),!1!==o.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...o,skipPristineCheck:e}),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){const e=this._parentMarkedDirty(o.onlySelf);this.status=In,this._forEachChild(i=>{i.enable({...o,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors({...o,skipPristineCheck:e}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(o){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===In||this.status===Fi)&&this._runAsyncValidator(o.emitEvent)),!1!==o.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(o)}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ri:In}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o){if(this.asyncValidator){this.status=Fi,this._hasOwnPendingAsyncValidator=!0;const e=Ep(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:o})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(!1!==e.emitEvent)}get(o){let e=o;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((i,a)=>i&&i._find(a),this)}getError(o,e){const i=e?this.get(e):this;return i&&i.errors?i.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(o)}_initObservables(){this.valueChanges=new t.vpe,this.statusChanges=new t.vpe}_calculateStatus(){return this._allControlsDisabled()?Ri:this.errors?ko:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Fi)?Fi:this._anyControlsHaveStatus(ko)?ko:In}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o={}){this.pristine=!this._anyControlsDirty(),this._parent&&!o.onlySelf&&this._parent._updatePristine(o)}_updateTouched(o={}){this.touched=this._anyControlsTouched(),this._parent&&!o.onlySelf&&this._parent._updateTouched(o)}_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Ic(o)&&null!=o.updateOn&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(o){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(o=null,e,i){super(function sg(n){return(Ic(n)?n.validators:n)||null}(e),function Sc(n,o){return(Ic(o)?o.asyncValidators:n)||null}(i,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ic(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=To(o)?o.value:o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Zc(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Zc(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(o){To(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}},this._registered=!1,this.update=new t.vpe,this._parent=e,this._setValidators(i),this._setAsyncValidators(a),this.valueAccessor=function Hn(n,o){if(!o)return null;let e,i,a;return Array.isArray(o),o.forEach(u=>{u.constructor===wo?e=u:function lg(n){return Object.getPrototypeOf(n.constructor)===_i}(u)?i=u:a=u}),a||i||e||null}(0,u)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function cg(n,o){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(o,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Nc(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){gg.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const i=e.isDisabled.currentValue,a=0!==i&&(0,t.D6c)(i);gg.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lc(n,o){return[...o.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(vn,9),t.Y36(We,10),t.Y36(Ci,10),t.Y36(_n,10),t.Y36(t.sBO,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[t._Bn([Yp]),t.qOj,t.TTD]}),n})();
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
const Wp={provide:_n,useExisting:(0,t.Gpc)(()=>$s),multi:!0};let $s=(()=>{class n extends _i{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=i=>{e(""==i?null:parseFloat(i))}}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("input",function(u){return i.onChange(u.target.value)})("blur",function(){return i.onTouched()})},features:[t._Bn([Wp]),t.qOj]}),n})(),Xp=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();
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
const nm={provide:_n,useExisting:(0,t.Gpc)(()=>wr),multi:!0};function vg(n,o){return null==n?`${o}`:(o&&"object"==typeof o&&(o="Object"),`${n}: ${o}`.slice(0,50))}let wr=(()=>{class n extends _i{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const a=vg(this._getOptionId(e),e);this.setProperty("value",a)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){const i=function Cg(n){return n.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i):e}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(u){return i.onChange(u.target.value)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([nm]),t.qOj]}),n})(),Bc=(()=>{class n{constructor(e,i,a){this._element=e,this._renderer=i,this._select=a,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(vg(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(wr,9))},n.\u0275dir=t.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const im={provide:_n,useExisting:(0,t.Gpc)(()=>yg),multi:!0};function Mg(n,o){return null==n?`${o}`:("string"==typeof o&&(o=`'${o}'`),o&&"object"==typeof o&&(o="Object"),`${n}: ${o}`.slice(0,50))}let yg=(()=>{class n extends _i{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let i;if(this.value=e,Array.isArray(e)){const a=e.map(u=>this._getOptionId(u));i=(u,h)=>{u._setSelected(a.indexOf(h.toString())>-1)}}else i=(a,u)=>{a._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{const a=[],u=i.selectedOptions;if(void 0!==u){const h=u;for(let M=0;M<h.length;M++){const T=this._getOptionValue(h[M].value);a.push(T)}}else{const h=i.options;for(let M=0;M<h.length;M++){const O=h[M];if(O.selected){const T=this._getOptionValue(O.value);a.push(T)}}}this.value=a,e(a)}}_registerOption(e){const i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){const i=function om(n){return n.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,i){1&e&&t.NdJ("change",function(u){return i.onChange(u.target)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[t._Bn([im]),t.qOj]}),n})(),qc=(()=>{class n{constructor(e,i,a){this._element=e,this._renderer=i,this._select=a,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(Mg(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Mg(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(yg,9))},n.\u0275dir=t.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})(),hm=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Xp]}),n})(),fm=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[hm]}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Qc=(0,D(3888).d)(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});var GM=D(9635);function Ln(n){return(0,ge.e)((o,e)=>{let i=!1;o.subscribe((0,be.x)(e,a=>{i=!0,e.next(a)},()=>{i||e.next(n),e.complete()}))})}function Bn(n=oi){return(0,ge.e)((o,e)=>{let i=!1;o.subscribe((0,be.x)(e,a=>{i=!0,e.next(a)},()=>i?e.complete():e.error(n())))})}function oi(){return new Qc}function Zi(n,o){const e=arguments.length>=2;return i=>i.pipe(n?dn((a,u)=>n(a,u,i)):sr.y,Je(1),e?Ln(o):Bn(()=>new Qc))}function no(n,o){return(0,An.m)(o)?(0,$e.z)(n,o,1):(0,$e.z)(n,1)}function io(n){return(0,ge.e)((o,e)=>{let u,i=null,a=!1;i=o.subscribe((0,be.x)(e,void 0,void 0,h=>{u=(0,Kn.Xf)(n(h,io(n)(o))),i?(i.unsubscribe(),i=null,u.subscribe(e)):a=!0})),a&&(i.unsubscribe(),i=null,u.subscribe(e))})}function YM(n,o,e,i,a){return(u,h)=>{let M=e,O=o,T=0;u.subscribe((0,be.x)(h,q=>{const $=T++;O=M?n(O,q,$):(M=!0,q),i&&h.next(O)},a&&(()=>{M&&h.next(O),h.complete()})))}}function _m(n,o){return(0,ge.e)(YM(n,o,arguments.length>=2,!0))}function wg(n){return n<=0?()=>or.E:(0,ge.e)((o,e)=>{let i=[];o.subscribe((0,be.x)(e,a=>{i.push(a),n<i.length&&i.shift()},()=>{for(const a of i)e.next(a);e.complete()},void 0,()=>{i=null}))})}function Gc(n,o){const e=arguments.length>=2;return i=>i.pipe(n?dn((a,u)=>n(a,u,i)):sr.y,wg(1),e?Ln(o):Bn(()=>new Qc))}function Dg(n){return(0,ge.e)((o,e)=>{try{o.subscribe(e)}finally{e.add(n)}})}
/**
       * @license Angular v14.1.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wt="primary";class $M{constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){const e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){const e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function Io(n){return new $M(n)}function vm(n,o,e){const i=e.path.split("/");if(i.length>n.length||"full"===e.pathMatch&&(o.hasChildren()||i.length<n.length))return null;const a={};for(let u=0;u<i.length;u++){const h=i[u],M=n[u];if(h.startsWith(":"))a[h.substring(1)]=M;else if(h!==M.path)return null}return{consumed:n.slice(0,i.length),posParams:a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bi(n,o){const e=n?Object.keys(n):void 0,i=o?Object.keys(o):void 0;if(!e||!i||e.length!=i.length)return!1;let a;for(let u=0;u<e.length;u++)if(a=e[u],!kg(n[a],o[a]))return!1;return!0}function kg(n,o){if(Array.isArray(n)&&Array.isArray(o)){if(n.length!==o.length)return!1;const e=[...n].sort(),i=[...o].sort();return e.every((a,u)=>i[u]===a)}return n===o}function Ag(n){return Array.prototype.concat.apply([],n)}function $c(n){return n.length>0?n[n.length-1]:null}function Ue(n,o){for(const e in n)n.hasOwnProperty(e)&&o(n[e],e)}function Oi(n){return(0,t.CqO)(n)?n:(0,t.QGY)(n)?(0,De.D)(Promise.resolve(n)):Dt(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Mm={exact:function Ig(n,o,e){if(!No(n.segments,o.segments)||!Kc(n.segments,o.segments,e)||n.numberOfChildren!==o.numberOfChildren)return!1;for(const i in o.children)if(!n.children[i]||!Ig(n.children[i],o.children[i],e))return!1;return!0},subset:bm},Eg={exact:function ym(n,o){return bi(n,o)},subset:function WM(n,o){return Object.keys(o).length<=Object.keys(n).length&&Object.keys(o).every(e=>kg(n[e],o[e]))},ignored:()=>!0};function Sg(n,o,e){return Mm[e.paths](n.root,o.root,e.matrixParams)&&Eg[e.queryParams](n.queryParams,o.queryParams)&&!("exact"===e.fragment&&n.fragment!==o.fragment)}function bm(n,o,e){return Om(n,o,o.segments,e)}function Om(n,o,e,i){if(n.segments.length>e.length){const a=n.segments.slice(0,e.length);return!(!No(a,e)||o.hasChildren()||!Kc(a,e,i))}if(n.segments.length===e.length){if(!No(n.segments,e)||!Kc(n.segments,e,i))return!1;for(const a in o.children)if(!n.children[a]||!bm(n.children[a],o.children[a],i))return!1;return!0}{const a=e.slice(0,n.segments.length),u=e.slice(n.segments.length);return!!(No(n.segments,a)&&Kc(n.segments,a,i)&&n.children[Wt])&&Om(n.children[Wt],o,u,i)}}function Kc(n,o,e){return o.every((i,a)=>Eg[e](n[a].parameters,i.parameters))}class Lo{constructor(o,e,i){this.root=o,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Io(this.queryParams)),this._queryParamMap}toString(){return ty.serialize(this)}}class Kt{constructor(o,e){this.segments=o,this.children=e,this.parent=null,Ue(e,(i,a)=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Xc(this)}}class Xs{constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=Io(this.parameters)),this._parameterMap}toString(){return Fg(this)}}function No(n,o){return n.length===o.length&&n.every((e,i)=>e.path===o[i].path)}let Pm=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return new Lg},providedIn:"root"}),n})();class Lg{parse(o){const e=new ny(o);return new Lo(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){const e=`/${ta(o.root,!0)}`,i=function km(n){const o=Object.keys(n).map(e=>{const i=n[e];return Array.isArray(i)?i.map(a=>`${tl(e)}=${tl(a)}`).join("&"):`${tl(e)}=${tl(i)}`}).filter(e=>!!e);return o.length?`?${o.join("&")}`:""}(o.queryParams);return`${e}${i}${"string"==typeof o.fragment?`#${function wm(n){return encodeURI(n)}(o.fragment)}`:""}`}}const ty=new Lg;function Xc(n){return n.segments.map(o=>Fg(o)).join("/")}function ta(n,o){if(!n.hasChildren())return Xc(n);if(o){const e=n.children[Wt]?ta(n.children[Wt],!1):"",i=[];return Ue(n.children,(a,u)=>{u!==Wt&&i.push(`${u}:${ta(a,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}{const e=function XM(n,o){let e=[];return Ue(n.children,(i,a)=>{a===Wt&&(e=e.concat(o(i,a)))}),Ue(n.children,(i,a)=>{a!==Wt&&(e=e.concat(o(i,a)))}),e}(n,(i,a)=>a===Wt?[ta(n.children[Wt],!1)]:[`${a}:${ta(i,!1)}`]);return 1===Object.keys(n.children).length&&null!=n.children[Wt]?`${Xc(n)}/${e[0]}`:`${Xc(n)}/(${e.join("//")})`}}function xm(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function tl(n){return xm(n).replace(/%3B/gi,";")}function el(n){return xm(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ea(n){return decodeURIComponent(n)}function Ng(n){return ea(n.replace(/\+/g,"%20"))}function Fg(n){return`${el(n.path)}${function Dm(n){return Object.keys(n).map(o=>`;${el(o)}=${el(n[o])}`).join("")}(n.parameters)}`}const Am=/^[^\/()?;=#]+/;function na(n){const o=n.match(Am);return o?o[0]:""}const Tm=/^[^=?&#]+/,Fo=/^[^&#]+/;class ny{constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Kt([],{}):new Kt([],this.parseChildren())}parseQueryParams(){const o={};if(this.consumeOptional("?"))do{this.parseQueryParam(o)}while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(o.length>0||Object.keys(e).length>0)&&(i[Wt]=new Kt(o,e)),i}parseSegment(){const o=na(this.remaining);if(""===o&&this.peekStartsWith(";"))throw new t.vHH(4009,!1);return this.capture(o),new Xs(ea(o),this.parseMatrixParams())}parseMatrixParams(){const o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){const e=na(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){const a=na(this.remaining);a&&(i=a,this.capture(i))}o[ea(e)]=ea(i)}parseQueryParam(o){const e=function Em(n){const o=n.match(Tm);return o?o[0]:""}(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){const h=function ey(n){const o=n.match(Fo);return o?o[0]:""}(this.remaining);h&&(i=h,this.capture(i))}const a=Ng(e),u=Ng(i);if(o.hasOwnProperty(a)){let h=o[a];Array.isArray(h)||(h=[h],o[a]=h),h.push(u)}else o[a]=u}parseParens(o){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const i=na(this.remaining),a=this.remaining[i.length];if("/"!==a&&")"!==a&&";"!==a)throw new t.vHH(4010,!1);let u;i.indexOf(":")>-1?(u=i.slice(0,i.indexOf(":")),this.capture(u),this.capture(":")):o&&(u=Wt);const h=this.parseChildren();e[u]=1===Object.keys(h).length?h[Wt]:new Kt([],h),this.consumeOptional("//")}return e}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return!!this.peekStartsWith(o)&&(this.remaining=this.remaining.substring(o.length),!0)}capture(o){if(!this.consumeOptional(o))throw new t.vHH(4011,!1)}}function oo(n){return n.segments.length>0?new Kt([],{[Wt]:n}):n}function Rg(n){const o={};for(const i of Object.keys(n.children)){const u=Rg(n.children[i]);(u.segments.length>0||u.hasChildren())&&(o[i]=u)}return function Zg(n){if(1===n.numberOfChildren&&n.children[Wt]){const o=n.children[Wt];return new Kt(n.segments.concat(o.segments),o.children)}return n}(new Kt(n.segments,o))}function Dr(n){return n instanceof Lo}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oy(n,o,e,i,a){if(0===e.length)return ri(o.root,o.root,o.root,i,a);const u=function sa(n){if("string"==typeof n[0]&&1===n.length&&"/"===n[0])return new ra(!0,0,n);let o=0,e=!1;const i=n.reduce((a,u,h)=>{if("object"==typeof u&&null!=u){if(u.outlets){const M={};return Ue(u.outlets,(O,T)=>{M[T]="string"==typeof O?O.split("/"):O}),[...a,{outlets:M}]}if(u.segmentPath)return[...a,u.segmentPath]}return"string"!=typeof u?[...a,u]:0===h?(u.split("/").forEach((M,O)=>{0==O&&"."===M||(0==O&&""===M?e=!0:".."===M?o++:""!=M&&a.push(M))}),a):[...a,u]},[]);return new ra(e,o,i)}(e);return u.toRoot()?ri(o.root,o.root,new Kt([],{}),i,a):function h(O){const T=function Im(n,o,e,i){if(n.isAbsolute)return new fe(o.root,!0,0);if(-1===i)return new fe(e,e===o.root,0);return function Ug(n,o,e){let i=n,a=o,u=e;for(;u>a;){if(u-=a,i=i.parent,!i)throw new t.vHH(4005,!1);a=i.segments.length}return new fe(i,!1,a-u)}(e,i+(ia(n.commands[0])?0:1),n.numberOfDoubleDots)}(u,o,n.snapshot?._urlSegment,O),q=T.processChildren?kr(T.segmentGroup,T.index,u.commands):il(T.segmentGroup,T.index,u.commands);return ri(o.root,T.segmentGroup,q,i,a)}(n.snapshot?._lastPathIndex)}function ia(n){return"object"==typeof n&&null!=n&&!n.outlets&&!n.segmentPath}function oa(n){return"object"==typeof n&&null!=n&&n.outlets}function ri(n,o,e,i,a){let h,u={};i&&Ue(i,(O,T)=>{u[T]=Array.isArray(O)?O.map(q=>`${q}`):`${O}`}),h=n===o?e:Sm(n,o,e);const M=oo(Rg(h));return new Lo(M,u,a)}function Sm(n,o,e){const i={};return Ue(n.children,(a,u)=>{i[u]=a===o?e:Sm(a,o,e)}),new Kt(n.segments,i)}class ra{constructor(o,e,i){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=i,o&&i.length>0&&ia(i[0]))throw new t.vHH(4003,!1);const a=i.find(oa);if(a&&a!==$c(i))throw new t.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class fe{constructor(o,e,i){this.segmentGroup=o,this.processChildren=e,this.index=i}}function il(n,o,e){if(n||(n=new Kt([],{})),0===n.segments.length&&n.hasChildren())return kr(n,o,e);const i=function Lm(n,o,e){let i=0,a=o;const u={match:!1,pathIndex:0,commandIndex:0};for(;a<n.segments.length;){if(i>=e.length)return u;const h=n.segments[a],M=e[i];if(oa(M))break;const O=`${M}`,T=i<e.length-1?e[i+1]:null;if(a>0&&void 0===O)break;if(O&&T&&"object"==typeof T&&void 0===T.outlets){if(!Fm(O,T,h))return u;i+=2}else{if(!Fm(O,{},h))return u;i++}a++}return{match:!0,pathIndex:a,commandIndex:i}}(n,o,e),a=e.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){const u=new Kt(n.segments.slice(0,i.pathIndex),{});return u.children[Wt]=new Kt(n.segments.slice(i.pathIndex),n.children),kr(u,0,a)}return i.match&&0===a.length?new Kt(n.segments,{}):i.match&&!n.hasChildren()?ol(n,o,e):i.match?kr(n,0,a):ol(n,o,e)}function kr(n,o,e){if(0===e.length)return new Kt(n.segments,{});{const i=function ry(n){return oa(n[0])?n[0].outlets:{[Wt]:n}}(e),a={};return Ue(i,(u,h)=>{"string"==typeof u&&(u=[u]),null!==u&&(a[h]=il(n.children[h],o,u))}),Ue(n.children,(u,h)=>{void 0===i[h]&&(a[h]=u)}),new Kt(n.segments,a)}}function ol(n,o,e){const i=n.segments.slice(0,o);let a=0;for(;a<e.length;){const u=e[a];if(oa(u)){const O=sy(u.outlets);return new Kt(i,O)}if(0===a&&ia(e[0])){i.push(new Xs(n.segments[o].path,Nm(e[0]))),a++;continue}const h=oa(u)?u.outlets[Wt]:`${u}`,M=a<e.length-1?e[a+1]:null;h&&M&&ia(M)?(i.push(new Xs(h,Nm(M))),a+=2):(i.push(new Xs(h,{})),a++)}return new Kt(i,{})}function sy(n){const o={};return Ue(n,(e,i)=>{"string"==typeof e&&(e=[e]),null!==e&&(o[i]=ol(new Kt([],{}),0,e))}),o}function Nm(n){const o={};return Ue(n,(e,i)=>o[i]=`${e}`),o}function Fm(n,o,e){return n==e.path&&bi(o,e.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Nn{constructor(o,e){this.id=o,this.url=e}}class Vg extends Nn{constructor(o,e,i="imperative",a=null){super(o,e),this.type=0,this.navigationTrigger=i,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Ro extends Nn{constructor(o,e,i){super(o,e),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class rl extends Nn{constructor(o,e,i,a){super(o,e),this.reason=i,this.code=a,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class aa extends Nn{constructor(o,e,i,a){super(o,e),this.error=i,this.target=a,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Rm extends Nn{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Zm extends Nn{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Um extends Nn{constructor(o,e,i,a,u){super(o,e),this.urlAfterRedirects=i,this.state=a,this.shouldActivate=u,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class ay extends Nn{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ca extends Nn{constructor(o,e,i,a){super(o,e),this.urlAfterRedirects=i,this.state=a,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class la{constructor(o){this.route=o,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class cy{constructor(o){this.route=o,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class ly{constructor(o){this.snapshot=o,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class uy{constructor(o){this.snapshot=o,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Vm{constructor(o){this.snapshot=o,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class jm{constructor(o){this.snapshot=o,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class jg{constructor(o,e,i){this.routerEvent=o,this.position=e,this.anchor=i,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hg{constructor(o){this._root=o}get root(){return this._root.value}parent(o){const e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){const e=Bg(o,this._root);return e?e.children.map(i=>i.value):[]}firstChild(o){const e=Bg(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){const e=qg(o,this._root);return e.length<2?[]:e[e.length-2].children.map(a=>a.value).filter(a=>a!==o)}pathFromRoot(o){return qg(o,this._root).map(e=>e.value)}}function Bg(n,o){if(n===o.value)return o;for(const e of o.children){const i=Bg(n,e);if(i)return i}return null}function qg(n,o){if(n===o.value)return[o];for(const e of o.children){const i=qg(n,e);if(i.length)return i.unshift(o),i}return[]}class ro{constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}}function ua(n){const o={};return n&&n.children.forEach(e=>o[e.value.outlet]=e),o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class dy extends Hg{constructor(o,e){super(o),this.snapshot=e,Jg(this,o)}toString(){return this.snapshot.toString()}}function hy(n,o){const e=function Hm(n,o){const h=new ga([],{},{},"",{},Wt,o,null,n.root,-1,{});return new Ar("",new ro(h,[]))}(n,o),i=new jn([new Xs("",{})]),a=new jn({}),u=new jn({}),h=new jn({}),M=new jn(""),O=new Ui(i,a,h,M,u,Wt,o,e.root);return O.snapshot=e.root,new dy(new ro(O,[]),e)}class Ui{constructor(o,e,i,a,u,h,M,O){this.url=o,this.params=e,this.queryParams=i,this.fragment=a,this.data=u,this.outlet=h,this.component=M,this._futureSnapshot=O}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Gt.U)(o=>Io(o)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Gt.U)(o=>Io(o)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function Bm(n,o="emptyOnly"){const e=n.pathFromRoot;let i=0;if("always"!==o)for(i=e.length-1;i>=1;){const a=e[i],u=e[i-1];if(a.routeConfig&&""===a.routeConfig.path)i--;else{if(u.component)break;i--}}return function fy(n){return n.reduce((o,e)=>({params:{...o.params,...e.params},data:{...o.data,...e.data},resolve:{...e.data,...o.resolve,...e.routeConfig?.data,...e._resolvedData}}),{params:{},data:{},resolve:{}})}(e.slice(i))}class ga{constructor(o,e,i,a,u,h,M,O,T,q,$,Mt){this.url=o,this.params=e,this.queryParams=i,this.fragment=a,this.data=u,this.outlet=h,this.component=M,this.routeConfig=O,this._urlSegment=T,this._lastPathIndex=q,this._correctedLastPathIndex=Mt??q,this._resolve=$}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Io(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Io(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(i=>i.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Ar extends Hg{constructor(o,e){super(e),this.url=o,Jg(this,e)}toString(){return qm(this._root)}}function Jg(n,o){o.value._routerState=n,o.children.forEach(e=>Jg(n,e))}function qm(n){const o=n.children.length>0?` { ${n.children.map(qm).join(", ")} } `:"";return`${n.value}${o}`}function zg(n){if(n.snapshot){const o=n.snapshot,e=n._futureSnapshot;n.snapshot=e,bi(o.queryParams,e.queryParams)||n.queryParams.next(e.queryParams),o.fragment!==e.fragment&&n.fragment.next(e.fragment),bi(o.params,e.params)||n.params.next(e.params),function Yc(n,o){if(n.length!==o.length)return!1;for(let e=0;e<n.length;++e)if(!bi(n[e],o[e]))return!1;return!0}(o.url,e.url)||n.url.next(e.url),bi(o.data,e.data)||n.data.next(e.data)}else n.snapshot=n._futureSnapshot,n.data.next(n._futureSnapshot.data)}function Qg(n,o){const e=bi(n.params,o.params)&&function KM(n,o){return No(n,o)&&n.every((e,i)=>bi(e.parameters,o[i].parameters))}(n.url,o.url);return e&&!(!n.parent!=!o.parent)&&(!n.parent||Qg(n.parent,o.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Tr(n,o,e){if(e&&n.shouldReuseRoute(o.value,e.value.snapshot)){const i=e.value;i._futureSnapshot=o.value;const a=function my(n,o,e){return o.children.map(i=>{for(const a of e.children)if(n.shouldReuseRoute(i.value,a.value.snapshot))return Tr(n,i,a);return Tr(n,i)})}(n,o,e);return new ro(i,a)}{if(n.shouldAttach(o.value)){const u=n.retrieve(o.value);if(null!==u){const h=u.route;return h.value._futureSnapshot=o.value,h.children=o.children.map(M=>Tr(n,M)),h}}const i=function _y(n){return new Ui(new jn(n.url),new jn(n.params),new jn(n.queryParams),new jn(n.fragment),new jn(n.data),n.outlet,n.component,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(o.value),a=o.children.map(u=>Tr(n,u));return new ro(i,a)}}const so="ngNavigationCancelingError";function Jm(n,o){const{redirectTo:e,navigationBehaviorOptions:i}=Dr(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,a=Gg(!1,0,o);return a.url=e,a.navigationBehaviorOptions=i,a}function Gg(n,o,e){const i=new Error("NavigationCancelingError: "+(n||""));return i[so]=!0,i.cancellationCode=o,e&&(i.url=e),i}function zm(n){return Yg(n)&&Dr(n.url)}function Yg(n){return n&&n[so]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vy{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Er,this.attachRef=null}}let Er=(()=>{class n{constructor(){this.contexts=new Map}onChildOutletCreated(e,i){const a=this.getOrCreateContext(e);a.outlet=i,this.contexts.set(e,a)}onChildOutletDestroyed(e){const i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new vy,this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sl=!1;let da=(()=>{class n{constructor(e,i,a,u,h){this.parentContexts=e,this.location=i,this.changeDetector=u,this.environmentInjector=h,this.activated=null,this._activatedRoute=null,this.activateEvents=new t.vpe,this.deactivateEvents=new t.vpe,this.attachEvents=new t.vpe,this.detachEvents=new t.vpe,this.name=a||Wt,e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new t.vHH(4012,sl);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new t.vHH(4012,sl);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new t.vHH(4012,sl);this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new t.vHH(4013,sl);this._activatedRoute=e;const a=this.location,h=e._futureSnapshot.component,M=this.parentContexts.getOrCreateContext(this.name).children,O=new Cy(e,M,a.injector);if(i&&function Qm(n){return!!n.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i)){const T=i.resolveComponentFactory(h);this.activated=a.createComponent(T,a.length,O)}else this.activated=a.createComponent(h,{index:a.length,injector:O,environmentInjector:i??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Er),t.Y36(t.s_b),t.$8M("name"),t.Y36(t.sBO),t.Y36(t.lqb))},n.\u0275dir=t.lG2({type:n,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),n})();class Cy{constructor(o,e,i){this.route=o,this.childContexts=e,this.parent=i}get(o,e){return o===Ui?this.route:o===Er?this.childContexts:this.parent.get(o,e)}}let $g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},dependencies:[da],encapsulation:2}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gm(n,o){return n.providers&&!n._injector&&(n._injector=(0,t.MMx)(n.providers,o,`Route: ${n.path}`)),n._injector??o}function Wg(n){const o=n.children&&n.children.map(Wg),e=o?{...n,children:o}:{...n};return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==Wt&&(e.component=$g),e}function qn(n){return n.outlet||Wt}function $m(n,o){const e=n.filter(i=>qn(i)===o);return e.push(...n.filter(i=>qn(i)!==o)),e}function Wm(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let o=n.parent;o;o=o.parent){const e=o.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Km{constructor(o,e,i,a){this.routeReuseStrategy=o,this.futureState=e,this.currState=i,this.forwardEvent=a}activate(o){const e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,o),zg(this.futureState.root),this.activateChildRoutes(e,i,o)}deactivateChildRoutes(o,e,i){const a=ua(e);o.children.forEach(u=>{const h=u.value.outlet;this.deactivateRoutes(u,a[h],i),delete a[h]}),Ue(a,(u,h)=>{this.deactivateRouteAndItsChildren(u,i)})}deactivateRoutes(o,e,i){const a=o.value,u=e?e.value:null;if(a===u)if(a.component){const h=i.getContext(a.outlet);h&&this.deactivateChildRoutes(o,e,h.children)}else this.deactivateChildRoutes(o,e,i);else u&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){const i=e.getContext(o.value.outlet),a=i&&o.value.component?i.children:e,u=ua(o);for(const h of Object.keys(u))this.deactivateRouteAndItsChildren(u[h],a);if(i&&i.outlet){const h=i.outlet.detach(),M=i.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:h,route:o,contexts:M})}}deactivateRouteAndOutlet(o,e){const i=e.getContext(o.value.outlet),a=i&&o.value.component?i.children:e,u=ua(o);for(const h of Object.keys(u))this.deactivateRouteAndItsChildren(u[h],a);i&&i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated(),i.attachRef=null,i.resolver=null,i.route=null)}activateChildRoutes(o,e,i){const a=ua(e);o.children.forEach(u=>{this.activateRoutes(u,a[u.value.outlet],i),this.forwardEvent(new jm(u.value.snapshot))}),o.children.length&&this.forwardEvent(new uy(o.value.snapshot))}activateRoutes(o,e,i){const a=o.value,u=e?e.value:null;if(zg(a),a===u)if(a.component){const h=i.getOrCreateContext(a.outlet);this.activateChildRoutes(o,e,h.children)}else this.activateChildRoutes(o,e,i);else if(a.component){const h=i.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){const M=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),h.children.onOutletReAttached(M.contexts),h.attachRef=M.componentRef,h.route=M.route.value,h.outlet&&h.outlet.attach(M.componentRef,M.route.value),zg(M.route.value),this.activateChildRoutes(o,null,h.children)}else{const M=Wm(a.snapshot),O=M?.get(t._Vd)??null;h.attachRef=null,h.route=a,h.resolver=O,h.injector=M,h.outlet&&h.outlet.activateWith(a,h.injector),this.activateChildRoutes(o,null,h.children)}}else this.activateChildRoutes(o,null,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Kg{constructor(o){this.path=o,this.route=this.path[this.path.length-1]}}class cl{constructor(o,e){this.component=o,this.route=e}}function Py(n,o,e){const i=n._root;return ha(i,o?o._root:null,e,[i.value])}function ll(n,o,e){return(Wm(o)??e).get(n)}function ha(n,o,e,i,a={canDeactivateChecks:[],canActivateChecks:[]}){const u=ua(o);return n.children.forEach(h=>{(function xy(n,o,e,i,a={canDeactivateChecks:[],canActivateChecks:[]}){const u=n.value,h=o?o.value:null,M=e?e.getContext(n.value.outlet):null;if(h&&u.routeConfig===h.routeConfig){const O=function Xg(n,o,e){if("function"==typeof e)return e(n,o);switch(e){case"pathParamsChange":return!No(n.url,o.url);case"pathParamsOrQueryParamsChange":return!No(n.url,o.url)||!bi(n.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Qg(n,o)||!bi(n.queryParams,o.queryParams);default:return!Qg(n,o)}}(h,u,u.routeConfig.runGuardsAndResolvers);O?a.canActivateChecks.push(new Kg(i)):(u.data=h.data,u._resolvedData=h._resolvedData),ha(n,o,u.component?M?M.children:null:e,i,a),O&&M&&M.outlet&&M.outlet.isActivated&&a.canDeactivateChecks.push(new cl(M.outlet.component,h))}else h&&Zo(o,M,a),a.canActivateChecks.push(new Kg(i)),ha(n,null,u.component?M?M.children:null:e,i,a)})(h,u[h.value.outlet],e,i.concat([h.value]),a),delete u[h.value.outlet]}),Ue(u,(h,M)=>Zo(h,e.getContext(M),a)),a}function Zo(n,o,e){const i=ua(n),a=n.value;Ue(i,(u,h)=>{Zo(u,a.component?o?o.children.getContext(h):null:o,e)}),e.canDeactivateChecks.push(new cl(a.component&&o&&o.outlet&&o.outlet.isActivated?o.outlet.component:null,a))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sr(n){return"function"==typeof n}function nd(n){return n instanceof Qc||"EmptyError"===n?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const id=Symbol("INITIAL_VALUE");function Uo(){return pn(n=>yf(n.map(o=>o.pipe(Je(1),ws(id)))).pipe((0,Gt.U)(o=>{for(const e of o)if(!0!==e){if(e===id)return id;if(!1===e||e instanceof Lo)return e}return!0}),dn(o=>o!==id),Je(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ad(n){return(0,GM.z)(Ze(o=>{if(Dr(o))throw Jm(0,o)}),(0,Gt.U)(o=>!0===o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const cd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function r_(n,o,e,i,a){const u=ld(n,o,e);return u.matched?function Sy(n,o,e,i){const a=o.canMatch;return a&&0!==a.length?Dt(a.map(h=>{const M=n.get(h),O=function t_(n){return n&&Sr(n.canMatch)}(M)?M.canMatch(o,e):M(o,e);return Oi(O)})).pipe(Uo(),ad()):Dt(!0)}(i=Gm(o,i),o,e).pipe((0,Gt.U)(h=>!0===h?u:{...cd})):Dt(u)}function ld(n,o,e){if(""===o.path)return"full"===o.pathMatch&&(n.hasChildren()||e.length>0)?{...cd}:{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};const a=(o.matcher||vm)(e,n,o);if(!a)return{...cd};const u={};Ue(a.posParams,(M,O)=>{u[O]=M.path});const h=a.consumed.length>0?{...u,...a.consumed[a.consumed.length-1].parameters}:u;return{matched:!0,consumedSegments:a.consumed,remainingSegments:e.slice(a.consumed.length),parameters:h,positionalParamSegments:a.posParams??{}}}function pa(n,o,e,i,a="corrected"){if(e.length>0&&function Iy(n,o,e){return e.some(i=>ud(n,o,i)&&qn(i)!==Wt)}(n,e,i)){const h=new Kt(o,function s_(n,o,e,i){const a={};a[Wt]=i,i._sourceSegment=n,i._segmentIndexShift=o.length;for(const u of e)if(""===u.path&&qn(u)!==Wt){const h=new Kt([],{});h._sourceSegment=n,h._segmentIndexShift=o.length,a[qn(u)]=h}return a}(n,o,i,new Kt(e,n.children)));return h._sourceSegment=n,h._segmentIndexShift=o.length,{segmentGroup:h,slicedSegments:[]}}if(0===e.length&&function Ly(n,o,e){return e.some(i=>ud(n,o,i))}(n,e,i)){const h=new Kt(n.segments,function FP(n,o,e,i,a,u){const h={};for(const M of i)if(ud(n,e,M)&&!a[qn(M)]){const O=new Kt([],{});O._sourceSegment=n,O._segmentIndexShift="legacy"===u?n.segments.length:o.length,h[qn(M)]=O}return{...a,...h}}(n,o,e,i,n.children,a));return h._sourceSegment=n,h._segmentIndexShift=o.length,{segmentGroup:h,slicedSegments:e}}const u=new Kt(n.segments,n.children);return u._sourceSegment=n,u._segmentIndexShift=o.length,{segmentGroup:u,slicedSegments:e}}function ud(n,o,e){return(!(n.hasChildren()||o.length>0)||"full"!==e.pathMatch)&&""===e.path}function Ny(n,o,e,i){return!!(qn(n)===i||i!==Wt&&ud(o,e,n))&&("**"===n.path||ld(o,n,e).matched)}function a_(n,o,e){return 0===o.length&&!n.children[e]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ul=!1;class ma{constructor(o){this.segmentGroup=o||null}}class gd{constructor(o){this.urlTree=o}}function Ir(n){return mr(new ma(n))}function dd(n){return mr(new gd(n))}class Fy{constructor(o,e,i,a,u){this.injector=o,this.configLoader=e,this.urlSerializer=i,this.urlTree=a,this.config=u,this.allowRedirects=!0}apply(){const o=pa(this.urlTree.root,[],[],this.config).segmentGroup,e=new Kt(o.segments,o.children);return this.expandSegmentGroup(this.injector,this.config,e,Wt).pipe((0,Gt.U)(u=>this.createUrlTree(Rg(u),this.urlTree.queryParams,this.urlTree.fragment))).pipe(io(u=>{if(u instanceof gd)return this.allowRedirects=!1,this.match(u.urlTree);throw u instanceof ma?this.noMatchError(u):u}))}match(o){return this.expandSegmentGroup(this.injector,this.config,o.root,Wt).pipe((0,Gt.U)(a=>this.createUrlTree(Rg(a),o.queryParams,o.fragment))).pipe(io(a=>{throw a instanceof ma?this.noMatchError(a):a}))}noMatchError(o){return new t.vHH(4002,ul)}createUrlTree(o,e,i){const a=oo(o);return new Lo(a,e,i)}expandSegmentGroup(o,e,i,a){return 0===i.segments.length&&i.hasChildren()?this.expandChildren(o,e,i).pipe((0,Gt.U)(u=>new Kt([],u))):this.expandSegment(o,i,e,i.segments,a,!0)}expandChildren(o,e,i){const a=[];for(const u of Object.keys(i.children))"primary"===u?a.unshift(u):a.push(u);return(0,De.D)(a).pipe(no(u=>{const h=i.children[u],M=$m(e,u);return this.expandSegmentGroup(o,M,h,u).pipe((0,Gt.U)(O=>({segment:O,outlet:u})))}),_m((u,h)=>(u[h.outlet]=h.segment,u),{}),Gc())}expandSegment(o,e,i,a,u,h){return(0,De.D)(i).pipe(no(M=>this.expandSegmentAgainstRoute(o,e,i,M,a,u,h).pipe(io(T=>{if(T instanceof ma)return Dt(null);throw T}))),Zi(M=>!!M),io((M,O)=>{if(nd(M))return a_(e,a,u)?Dt(new Kt([],{})):Ir(e);throw M}))}expandSegmentAgainstRoute(o,e,i,a,u,h,M){return Ny(a,e,u,h)?void 0===a.redirectTo?this.matchSegmentAgainstRoute(o,e,a,u,h):M&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(o,e,i,a,u,h):Ir(e):Ir(e)}expandSegmentAgainstRouteUsingRedirect(o,e,i,a,u,h){return"**"===a.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(o,i,a,h):this.expandRegularSegmentAgainstRouteUsingRedirect(o,e,i,a,u,h)}expandWildCardWithParamsAgainstRouteUsingRedirect(o,e,i,a){const u=this.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?dd(u):this.lineralizeSegments(i,u).pipe((0,$e.z)(h=>{const M=new Kt(h,{});return this.expandSegment(o,M,e,h,a,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(o,e,i,a,u,h){const{matched:M,consumedSegments:O,remainingSegments:T,positionalParamSegments:q}=ld(e,a,u);if(!M)return Ir(e);const $=this.applyRedirectCommands(O,a.redirectTo,q);return a.redirectTo.startsWith("/")?dd($):this.lineralizeSegments(a,$).pipe((0,$e.z)(Mt=>this.expandSegment(o,e,i,Mt.concat(T),h,!1)))}matchSegmentAgainstRoute(o,e,i,a,u){return"**"===i.path?(o=Gm(i,o),i.loadChildren?(i._loadedRoutes?Dt({routes:i._loadedRoutes,injector:i._loadedInjector}):this.configLoader.loadChildren(o,i)).pipe((0,Gt.U)(M=>(i._loadedRoutes=M.routes,i._loadedInjector=M.injector,new Kt(a,{})))):Dt(new Kt(a,{}))):r_(e,i,a,o).pipe(pn(({matched:h,consumedSegments:M,remainingSegments:O})=>h?this.getChildConfig(o=i._injector??o,i,a).pipe((0,$e.z)(q=>{const $=q.injector??o,Mt=q.routes,{segmentGroup:kt,slicedSegments:Bt}=pa(e,M,O,Mt),le=new Kt(kt.segments,kt.children);if(0===Bt.length&&le.hasChildren())return this.expandChildren($,Mt,le).pipe((0,Gt.U)(Vr=>new Kt(M,Vr)));if(0===Mt.length&&0===Bt.length)return Dt(new Kt(M,{}));const ne=qn(i)===u;return this.expandSegment($,le,Mt,Bt,ne?Wt:u,!0).pipe((0,Gt.U)(Rn=>new Kt(M.concat(Rn.segments),Rn.children)))})):Ir(e)))}getChildConfig(o,e,i){return e.children?Dt({routes:e.children,injector:o}):e.loadChildren?void 0!==e._loadedRoutes?Dt({routes:e._loadedRoutes,injector:e._loadedInjector}):function o_(n,o,e,i){const a=o.canLoad;return void 0===a||0===a.length?Dt(!0):Dt(a.map(h=>{const M=n.get(h),O=function wy(n){return n&&Sr(n.canLoad)}(M)?M.canLoad(o,e):M(o,e);return Oi(O)})).pipe(Uo(),ad())}(o,e,i).pipe((0,$e.z)(a=>a?this.configLoader.loadChildren(o,e).pipe(Ze(u=>{e._loadedRoutes=u.routes,e._loadedInjector=u.injector})):function l_(n){return mr(Gg(ul,3))}())):Dt({routes:[],injector:o})}lineralizeSegments(o,e){let i=[],a=e.root;for(;;){if(i=i.concat(a.segments),0===a.numberOfChildren)return Dt(i);if(a.numberOfChildren>1||!a.children[Wt])return mr(new t.vHH(4e3,ul));a=a.children[Wt]}}applyRedirectCommands(o,e,i){return this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),o,i)}applyRedirectCreateUrlTree(o,e,i,a){const u=this.createSegmentGroup(o,e.root,i,a);return new Lo(u,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){const i={};return Ue(o,(a,u)=>{if("string"==typeof a&&a.startsWith(":")){const M=a.substring(1);i[u]=e[M]}else i[u]=a}),i}createSegmentGroup(o,e,i,a){const u=this.createSegments(o,e.segments,i,a);let h={};return Ue(e.children,(M,O)=>{h[O]=this.createSegmentGroup(o,M,i,a)}),new Kt(u,h)}createSegments(o,e,i,a){return e.map(u=>u.path.startsWith(":")?this.findPosParam(o,u,a):this.findOrReturn(u,i))}findPosParam(o,e,i){const a=i[e.path.substring(1)];if(!a)throw new t.vHH(4001,ul);return a}findOrReturn(o,e){let i=0;for(const a of e){if(a.path===o.path)return e.splice(i),a;i++}return o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _a{}class h_{constructor(o,e,i,a,u,h,M,O){this.injector=o,this.rootComponentType=e,this.config=i,this.urlTree=a,this.url=u,this.paramsInheritanceStrategy=h,this.relativeLinkResolution=M,this.urlSerializer=O}recognize(){const o=pa(this.urlTree.root,[],[],this.config.filter(e=>void 0===e.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,o,Wt).pipe((0,Gt.U)(e=>{if(null===e)return null;const i=new ga([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Wt,this.rootComponentType,null,this.urlTree.root,-1,{}),a=new ro(i,e),u=new Ar(this.url,a);return this.inheritParamsAndData(u._root),u}))}inheritParamsAndData(o){const e=o.value,i=Bm(e,this.paramsInheritanceStrategy);e.params=Object.freeze(i.params),e.data=Object.freeze(i.data),o.children.forEach(a=>this.inheritParamsAndData(a))}processSegmentGroup(o,e,i,a){return 0===i.segments.length&&i.hasChildren()?this.processChildren(o,e,i):this.processSegment(o,e,i,i.segments,a)}processChildren(o,e,i){return(0,De.D)(Object.keys(i.children)).pipe(no(a=>{const u=i.children[a],h=$m(e,a);return this.processSegmentGroup(o,h,u,a)}),_m((a,u)=>a&&u?(a.push(...u),a):null),function Ks(n,o=!1){return(0,ge.e)((e,i)=>{let a=0;e.subscribe((0,be.x)(i,u=>{const h=n(u,a++);(h||o)&&i.next(u),!h&&i.complete()}))})}(a=>null!==a),Ln(null),Gc(),(0,Gt.U)(a=>{if(null===a)return null;const u=__(a);return function f_(n){n.sort((o,e)=>o.value.outlet===Wt?-1:e.value.outlet===Wt?1:o.value.outlet.localeCompare(e.value.outlet))}(u),u}))}processSegment(o,e,i,a,u){return(0,De.D)(e).pipe(no(h=>this.processSegmentAgainstRoute(h._injector??o,h,i,a,u)),Zi(h=>!!h),io(h=>{if(nd(h))return a_(i,a,u)?Dt([]):Dt(null);throw h}))}processSegmentAgainstRoute(o,e,i,a,u){if(e.redirectTo||!Ny(e,i,a,u))return Dt(null);let h;if("**"===e.path){const M=a.length>0?$c(a).parameters:{},O=fd(i)+a.length;h=Dt({snapshot:new ga(a,M,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,v_(e),qn(e),e.component??e._loadedComponent??null,e,hd(i),O,C_(e),O),consumedSegments:[],remainingSegments:[]})}else h=r_(i,e,a,o).pipe((0,Gt.U)(({matched:M,consumedSegments:O,remainingSegments:T,parameters:q})=>{if(!M)return null;const $=fd(i)+O.length;return{snapshot:new ga(O,q,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,v_(e),qn(e),e.component??e._loadedComponent??null,e,hd(i),$,C_(e),$),consumedSegments:O,remainingSegments:T}}));return h.pipe(pn(M=>{if(null===M)return Dt(null);const{snapshot:O,consumedSegments:T,remainingSegments:q}=M;o=e._injector??o;const $=e._loadedInjector??o,Mt=function p_(n){return n.children?n.children:n.loadChildren?n._loadedRoutes:[]}(e),{segmentGroup:kt,slicedSegments:Bt}=pa(i,T,q,Mt.filter(ne=>void 0===ne.redirectTo),this.relativeLinkResolution);if(0===Bt.length&&kt.hasChildren())return this.processChildren($,Mt,kt).pipe((0,Gt.U)(ne=>null===ne?null:[new ro(O,ne)]));if(0===Mt.length&&0===Bt.length)return Dt([new ro(O,[])]);const le=qn(e)===u;return this.processSegment($,Mt,kt,Bt,le?Wt:u).pipe((0,Gt.U)(ne=>null===ne?null:[new ro(O,ne)]))}))}}function m_(n){const o=n.value.routeConfig;return o&&""===o.path&&void 0===o.redirectTo}function __(n){const o=[],e=new Set;for(const i of n){if(!m_(i)){o.push(i);continue}const a=o.find(u=>i.value.routeConfig===u.value.routeConfig);void 0!==a?(a.children.push(...i.children),e.add(a)):o.push(i)}for(const i of e){const a=__(i.children);o.push(new ro(i.value,a))}return o.filter(i=>!e.has(i))}function hd(n){let o=n;for(;o._sourceSegment;)o=o._sourceSegment;return o}function fd(n){let o=n,e=o._segmentIndexShift??0;for(;o._sourceSegment;)o=o._sourceSegment,e+=o._segmentIndexShift??0;return e-1}function v_(n){return n.data||{}}function C_(n){return n.resolve||{}}
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
const md=Symbol("RouteTitle");function M_(n){return"string"==typeof n.title||null===n.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cd(n){return pn(o=>{const e=n(o);return e?(0,De.D)(e).pipe((0,Gt.U)(()=>o)):Dt(o)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let y_=(()=>{class n{buildTitle(e){let i,a=e.root;for(;void 0!==a;)i=this.getResolvedTitleForRoute(a)??i,a=a.children.find(u=>u.outlet===Wt);return i}getResolvedTitleForRoute(e){return e.data[md]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(){return(0,t.f3M)(Ma)},providedIn:"root"}),n})(),Ma=(()=>{class n extends y_{constructor(e){super(),this.title=e}updateTitle(e){const i=this.buildTitle(e);void 0!==i&&this.title.setTitle(i)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Sh))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
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
class Uy{}class b_ extends class Vy{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ya=new t.OlP("",{providedIn:"root",factory:()=>({})}),bd=new t.OlP("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Od=(()=>{class n{constructor(e,i){this.injector=e,this.compiler=i,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Dt(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);const i=Oi(e.loadComponent()).pipe(Ze(u=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=u}),Dg(()=>{this.componentLoaders.delete(e)})),a=new Mp(i,()=>new Ht.x).pipe(Cp());return this.componentLoaders.set(e,a),a}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Dt({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);const u=this.loadModuleFactoryOrRoutes(i.loadChildren).pipe((0,Gt.U)(M=>{this.onLoadEndListener&&this.onLoadEndListener(i);let O,T,q=!1;Array.isArray(M)?T=M:(O=M.create(e).injector,T=Ag(O.get(bd,[],t.XFs.Self|t.XFs.Optional)));return{routes:T.map(Wg),injector:O}}),Dg(()=>{this.childrenLoaders.delete(i)})),h=new Mp(u,()=>new Ht.x).pipe(Cp());return this.childrenLoaders.set(i,h),h}loadModuleFactoryOrRoutes(e){return Oi(e()).pipe((0,$e.z)(i=>i instanceof t.YKP||Array.isArray(i)?Dt(i):(0,De.D)(this.compiler.compileModuleAsync(i))))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.zs3),t.LFG(t.Sil))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ZP{}class Pd{shouldProcessUrl(o){return!0}extract(o){return o}merge(o,e){return o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function P_(n){throw n}function xd(n,o,e){return o.parse("/")}const wd={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jy={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function x_(){const n=(0,t.f3M)(Pm),o=(0,t.f3M)(Er),e=(0,t.f3M)(lt),i=(0,t.f3M)(t.zs3),a=(0,t.f3M)(t.Sil),u=(0,t.f3M)(bd,{optional:!0})??[],h=(0,t.f3M)(ya,{optional:!0})??{},M=(0,t.f3M)(Ma),O=(0,t.f3M)(y_,{optional:!0}),T=(0,t.f3M)(ZP,{optional:!0}),q=(0,t.f3M)(Uy,{optional:!0}),$=new Mn(null,n,o,e,i,a,Ag(u));return T&&($.urlHandlingStrategy=T),q&&($.routeReuseStrategy=q),$.titleStrategy=O??M,function Hy(n,o){n.errorHandler&&(o.errorHandler=n.errorHandler),n.malformedUriErrorHandler&&(o.malformedUriErrorHandler=n.malformedUriErrorHandler),n.onSameUrlNavigation&&(o.onSameUrlNavigation=n.onSameUrlNavigation),n.paramsInheritanceStrategy&&(o.paramsInheritanceStrategy=n.paramsInheritanceStrategy),n.relativeLinkResolution&&(o.relativeLinkResolution=n.relativeLinkResolution),n.urlUpdateStrategy&&(o.urlUpdateStrategy=n.urlUpdateStrategy),n.canceledNavigationResolution&&(o.canceledNavigationResolution=n.canceledNavigationResolution)}(h,$),$}let Mn=(()=>{class n{constructor(e,i,a,u,h,M,O){this.rootComponentType=e,this.urlSerializer=i,this.rootContexts=a,this.location=u,this.config=O,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ht.x,this.errorHandler=P_,this.malformedUriErrorHandler=xd,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>Dt(void 0),this.urlHandlingStrategy=new Pd,this.routeReuseStrategy=new b_,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=h.get(Od),this.configLoader.onLoadEndListener=Mt=>this.triggerEvent(new cy(Mt)),this.configLoader.onLoadStartListener=Mt=>this.triggerEvent(new la(Mt)),this.ngModule=h.get(t.h0i),this.console=h.get(t.c2e);const $=h.get(t.R0b);this.isNgZoneEnabled=$ instanceof t.R0b&&t.R0b.isInAngularZone(),this.resetConfig(O),this.currentUrlTree=function Cm(){return new Lo(new Kt([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=hy(this.currentUrlTree,this.rootComponentType),this.transitions=new jn({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(e){const i=this.events;return e.pipe(dn(a=>0!==a.id),(0,Gt.U)(a=>({...a,extractedUrl:this.urlHandlingStrategy.extract(a.rawUrl)})),pn(a=>{let u=!1,h=!1;return Dt(a).pipe(Ze(M=>{this.currentNavigation={id:M.id,initialUrl:M.rawUrl,extractedUrl:M.extractedUrl,trigger:M.source,extras:M.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),pn(M=>{const O=this.browserUrlTree.toString(),T=!this.navigated||M.extractedUrl.toString()!==O||O!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||T)&&this.urlHandlingStrategy.shouldProcessUrl(M.rawUrl))return dl(M.source)&&(this.browserUrlTree=M.extractedUrl),Dt(M).pipe(pn($=>{const Mt=this.transitions.getValue();return i.next(new Vg($.id,this.serializeUrl($.extractedUrl),$.source,$.restoredState)),Mt!==this.transitions.getValue()?or.E:Promise.resolve($)}),function Ry(n,o,e,i){return pn(a=>function u_(n,o,e,i,a){return new Fy(n,o,e,i,a).apply()}(n,o,e,a.extractedUrl,i).pipe((0,Gt.U)(u=>({...a,urlAfterRedirects:u}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Ze($=>{this.currentNavigation={...this.currentNavigation,finalUrl:$.urlAfterRedirects},a.urlAfterRedirects=$.urlAfterRedirects}),function va(n,o,e,i,a,u){return(0,$e.z)(h=>function d_(n,o,e,i,a,u,h="emptyOnly",M="legacy"){return new h_(n,o,e,i,a,h,M,u).recognize().pipe(pn(O=>null===O?function g_(n){return new qe.y(o=>o.error(n))}(new _a):Dt(O)))}(n,o,e,h.urlAfterRedirects,i.serialize(h.urlAfterRedirects),i,a,u).pipe((0,Gt.U)(M=>({...h,targetSnapshot:M}))))}(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Ze($=>{if(a.targetSnapshot=$.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!$.extras.skipLocationChange){const kt=this.urlHandlingStrategy.merge($.urlAfterRedirects,$.rawUrl);this.setBrowserUrl(kt,$)}this.browserUrlTree=$.urlAfterRedirects}const Mt=new Rm($.id,this.serializeUrl($.extractedUrl),this.serializeUrl($.urlAfterRedirects),$.targetSnapshot);i.next(Mt)}));if(T&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:Mt,extractedUrl:kt,source:Bt,restoredState:le,extras:ne}=M,qo=new Vg(Mt,this.serializeUrl(kt),Bt,le);i.next(qo);const Rn=hy(kt,this.rootComponentType).snapshot;return Dt(a={...M,targetSnapshot:Rn,urlAfterRedirects:kt,extras:{...ne,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=M.rawUrl,M.resolve(null),or.E}),Ze(M=>{const O=new Zm(M.id,this.serializeUrl(M.extractedUrl),this.serializeUrl(M.urlAfterRedirects),M.targetSnapshot);this.triggerEvent(O)}),(0,Gt.U)(M=>a={...M,guards:Py(M.targetSnapshot,M.currentSnapshot,this.rootContexts)}),function od(n,o){return(0,$e.z)(e=>{const{targetSnapshot:i,currentSnapshot:a,guards:{canActivateChecks:u,canDeactivateChecks:h}}=e;return 0===h.length&&0===u.length?Dt({...e,guardsResult:!0}):function Ay(n,o,e,i){return(0,De.D)(n).pipe((0,$e.z)(a=>function i_(n,o,e,i,a){const u=o&&o.routeConfig?o.routeConfig.canDeactivate:null;return u&&0!==u.length?Dt(u.map(M=>{const O=ll(M,o,a);return Oi(function ky(n){return n&&Sr(n.canDeactivate)}(O)?O.canDeactivate(n,o,e,i):O(n,o,e,i)).pipe(Zi())})).pipe(Uo()):Dt(!0)}(a.component,a.route,e,o,i)),Zi(a=>!0!==a,!0))}(h,i,a,n).pipe((0,$e.z)(M=>M&&function td(n){return"boolean"==typeof n}(M)?function rd(n,o,e,i){return(0,De.D)(o).pipe(no(a=>xs(function Ey(n,o){return null!==n&&o&&o(new ly(n)),Dt(!0)}(a.route.parent,i),function Ty(n,o){return null!==n&&o&&o(new Vm(n)),Dt(!0)}(a.route,i),function n_(n,o,e){const i=o[o.length-1],u=o.slice(0,o.length-1).reverse().map(h=>function Xm(n){const o=n.routeConfig?n.routeConfig.canActivateChild:null;return o&&0!==o.length?{node:n,guards:o}:null}(h)).filter(h=>null!==h).map(h=>Xi(()=>Dt(h.guards.map(O=>{const T=ll(O,h.node,e);return Oi(function ed(n){return n&&Sr(n.canActivateChild)}(T)?T.canActivateChild(i,n):T(i,n)).pipe(Zi())})).pipe(Uo())));return Dt(u).pipe(Uo())}(n,a.path,e),function sd(n,o,e){const i=o.routeConfig?o.routeConfig.canActivate:null;if(!i||0===i.length)return Dt(!0);const a=i.map(u=>Xi(()=>{const h=ll(u,o,e);return Oi(function Dy(n){return n&&Sr(n.canActivate)}(h)?h.canActivate(o,n):h(o,n)).pipe(Zi())}));return Dt(a).pipe(Uo())}(n,a.route,e))),Zi(a=>!0!==a,!0))}(i,u,n,o):Dt(M)),(0,Gt.U)(M=>({...e,guardsResult:M})))})}(this.ngModule.injector,M=>this.triggerEvent(M)),Ze(M=>{if(a.guardsResult=M.guardsResult,Dr(M.guardsResult))throw Jm(0,M.guardsResult);const O=new Um(M.id,this.serializeUrl(M.extractedUrl),this.serializeUrl(M.urlAfterRedirects),M.targetSnapshot,!!M.guardsResult);this.triggerEvent(O)}),dn(M=>!!M.guardsResult||(this.restoreHistory(M),this.cancelNavigationTransition(M,"",3),!1)),Cd(M=>{if(M.guards.canActivateChecks.length)return Dt(M).pipe(Ze(O=>{const T=new ay(O.id,this.serializeUrl(O.extractedUrl),this.serializeUrl(O.urlAfterRedirects),O.targetSnapshot);this.triggerEvent(T)}),pn(O=>{let T=!1;return Dt(O).pipe(function _d(n,o){return(0,$e.z)(e=>{const{targetSnapshot:i,guards:{canActivateChecks:a}}=e;if(!a.length)return Dt(e);let u=0;return(0,De.D)(a).pipe(no(h=>function Pi(n,o,e,i){const a=n.routeConfig,u=n._resolve;return void 0!==a?.title&&!M_(a)&&(u[md]=a.title),function Zy(n,o,e,i){const a=function vd(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}(n);if(0===a.length)return Dt({});const u={};return(0,De.D)(a).pipe((0,$e.z)(h=>function Ca(n,o,e,i){const a=ll(n,o,i);return Oi(a.resolve?a.resolve(o,e):a(o,e))}(n[h],o,e,i).pipe(Zi(),Ze(M=>{u[h]=M}))),wg(1),bM(u),io(h=>nd(h)?or.E:mr(h)))}(u,n,o,i).pipe((0,Gt.U)(h=>(n._resolvedData=h,n.data=Bm(n,e).resolve,a&&M_(a)&&(n.data[md]=a.title),null)))}(h.route,i,n,o)),Ze(()=>u++),wg(1),(0,$e.z)(h=>u===a.length?Dt(e):or.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Ze({next:()=>T=!0,complete:()=>{T||(this.restoreHistory(O),this.cancelNavigationTransition(O,"",2))}}))}),Ze(O=>{const T=new ca(O.id,this.serializeUrl(O.extractedUrl),this.serializeUrl(O.urlAfterRedirects),O.targetSnapshot);this.triggerEvent(T)}))}),Cd(M=>{const O=T=>{const q=[];T.routeConfig?.loadComponent&&!T.routeConfig._loadedComponent&&q.push(this.configLoader.loadComponent(T.routeConfig).pipe(Ze($=>{T.component=$}),(0,Gt.U)(()=>{})));for(const $ of T.children)q.push(...O($));return q};return yf(O(M.targetSnapshot.root)).pipe(Ln(),Je(1))}),Cd(()=>this.afterPreactivation()),(0,Gt.U)(M=>{const O=function py(n,o,e){const i=Tr(n,o._root,e?e._root:void 0);return new dy(i,o)}(this.routeReuseStrategy,M.targetSnapshot,M.currentRouterState);return a={...M,targetRouterState:O}}),Ze(M=>{this.currentUrlTree=M.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(M.urlAfterRedirects,M.rawUrl),this.routerState=M.targetRouterState,"deferred"===this.urlUpdateStrategy&&(M.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,M),this.browserUrlTree=M.urlAfterRedirects)}),((n,o,e)=>(0,Gt.U)(i=>(new Km(o,i.targetRouterState,i.currentRouterState,e).activate(n),i)))(this.rootContexts,this.routeReuseStrategy,M=>this.triggerEvent(M)),Ze({next(){u=!0},complete(){u=!0}}),Dg(()=>{u||h||this.cancelNavigationTransition(a,"",1),this.currentNavigation?.id===a.id&&(this.currentNavigation=null)}),io(M=>{if(h=!0,Yg(M)){zm(M)||(this.navigated=!0,this.restoreHistory(a,!0));const O=new rl(a.id,this.serializeUrl(a.extractedUrl),M.message,M.cancellationCode);if(i.next(O),zm(M)){const T=this.urlHandlingStrategy.merge(M.url,this.rawUrlTree),q={skipLocationChange:a.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||dl(a.source)};this.scheduleNavigation(T,"imperative",null,q,{resolve:a.resolve,reject:a.reject,promise:a.promise})}else a.resolve(!1)}else{this.restoreHistory(a,!0);const O=new aa(a.id,this.serializeUrl(a.extractedUrl),M,a.targetSnapshot??void 0);i.next(O);try{a.resolve(this.errorHandler(M))}catch(T){a.reject(T)}}return or.E}))}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}setTransition(e){this.transitions.next({...this.transitions.value,...e})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{const i="popstate"===e.type?"popstate":"hashchange";"popstate"===i&&setTimeout(()=>{const a={replaceUrl:!0},u=e.state?.navigationId?e.state:null;if(u){const M={...u};delete M.navigationId,delete M.\u0275routerPageId,0!==Object.keys(M).length&&(a.state=M)}const h=this.parseUrl(e.url);this.scheduleNavigation(h,i,u,a)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){this.config=e.map(Wg),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(e,i={}){const{relativeTo:a,queryParams:u,fragment:h,queryParamsHandling:M,preserveFragment:O}=i,T=a||this.routerState.root,q=O?this.currentUrlTree.fragment:h;let $=null;switch(M){case"merge":$={...this.currentUrlTree.queryParams,...u};break;case"preserve":$=this.currentUrlTree.queryParams;break;default:$=u||null}return null!==$&&($=this.removeEmptyProps($)),oy(T,this.currentUrlTree,e,$,q??null)}navigateByUrl(e,i={skipLocationChange:!1}){const a=Dr(e)?e:this.parseUrl(e),u=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(u,"imperative",null,i)}navigate(e,i={skipLocationChange:!1}){return function w_(n){for(let o=0;o<n.length;o++){if(null==n[o])throw new t.vHH(4008,false)}}(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let i;try{i=this.urlSerializer.parse(e)}catch(a){i=this.malformedUriErrorHandler(a,this.urlSerializer,e)}return i}isActive(e,i){let a;if(a=!0===i?{...wd}:!1===i?{...jy}:i,Dr(e))return Sg(this.currentUrlTree,e,a);const u=this.parseUrl(e);return Sg(this.currentUrlTree,u,a)}removeEmptyProps(e){return Object.keys(e).reduce((i,a)=>{const u=e[a];return null!=u&&(i[a]=u),i},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.currentPageId=e.targetPageId,this.events.next(new Ro(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),e.resolve(!0)},e=>{this.console.warn(`Unhandled Navigation Error: ${e}`)})}scheduleNavigation(e,i,a,u,h){if(this.disposed)return Promise.resolve(!1);let M,O,T;h?(M=h.resolve,O=h.reject,T=h.promise):T=new Promise((Mt,kt)=>{M=Mt,O=kt});const q=++this.navigationId;let $;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(a=this.location.getState()),$=a&&a.\u0275routerPageId?a.\u0275routerPageId:u.replaceUrl||u.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):$=0,this.setTransition({id:q,targetPageId:$,source:i,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:u,resolve:M,reject:O,promise:T,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),T.catch(Mt=>Promise.reject(Mt))}setBrowserUrl(e,i){const a=this.urlSerializer.serialize(e),u={...i.extras.state,...this.generateNgRouterState(i.id,i.targetPageId)};this.location.isCurrentPathEqualTo(a)||i.extras.replaceUrl?this.location.replaceState(a,"",u):this.location.go(a,"",u)}restoreHistory(e,i=!1){if("computed"===this.canceledNavigationResolution){const a=this.currentPageId-e.targetPageId;"popstate"!==e.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===a?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===a&&(this.resetState(e),this.browserUrlTree=e.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(a)}else"replace"===this.canceledNavigationResolution&&(i&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=e.currentRouterState,this.currentUrlTree=e.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(e,i,a){const u=new rl(e.id,this.serializeUrl(e.extractedUrl),i,a);this.triggerEvent(u),e.resolve(!1)}generateNgRouterState(e,i){return"computed"===this.canceledNavigationResolution?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}}return n.\u0275fac=function(e){t.$Z()},n.\u0275prov=t.Yz7({token:n,factory:function(){return x_()},providedIn:"root"}),n})();function dl(n){return"imperative"!==n}
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
class A_{}let T_=(()=>{class n{constructor(e,i,a,u,h){this.router=e,this.injector=a,this.preloadingStrategy=u,this.loader=h}setUpPreloading(){this.subscription=this.router.events.pipe(dn(e=>e instanceof Ro),no(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,i){const a=[];for(const u of i){u.providers&&!u._injector&&(u._injector=(0,t.MMx)(u.providers,e,`Route: ${u.path}`));const h=u._injector??e,M=u._loadedInjector??h;u.loadChildren&&!u._loadedRoutes&&void 0===u.canLoad||u.loadComponent&&!u._loadedComponent?a.push(this.preloadConfig(h,u)):(u.children||u._loadedRoutes)&&a.push(this.processRoutes(M,u.children??u._loadedRoutes))}return(0,De.D)(a).pipe((0,Xa.J)())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{let a;a=i.loadChildren&&void 0===i.canLoad?this.loader.loadChildren(e,i):Dt(null);const u=a.pipe((0,$e.z)(h=>null===h?Dt(void 0):(i._loadedRoutes=h.routes,i._loadedInjector=h.injector,this.processRoutes(h.injector??e,h.routes))));if(i.loadComponent&&!i._loadedComponent){const h=this.loader.loadComponent(i);return(0,De.D)([u,h]).pipe((0,Xa.J)())}return u})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Mn),t.LFG(t.Sil),t.LFG(t.lqb),t.LFG(A_),t.LFG(Od))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dd=new t.OlP("");let Jy=(()=>{class n{constructor(e,i,a={}){this.router=e,this.viewportScroller=i,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration=a.scrollPositionRestoration||"disabled",a.anchorScrolling=a.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof Vg?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Ro&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof jg&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,i){this.router.triggerEvent(new jg(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,i))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return n.\u0275fac=function(e){t.$Z()},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const E_=new t.OlP("ROUTER_FORROOT_GUARD"),S_=new t.OlP(""),UP=[lt,{provide:Pm,useClass:Lg},{provide:Mn,useFactory:x_},Er,{provide:Ui,useFactory:function VP(n){return n.routerState.root},deps:[Mn]},Od];function I_(){return new t.PXZ("Router",Mn)}let kd=(()=>{class n{constructor(e){}static forRoot(e,i){return{ngModule:n,providers:[UP,[],Td(e),{provide:E_,useFactory:Qy,deps:[[Mn,new t.FiY,new t.tp0]]},{provide:ya,useValue:i||{}},i?.useHash?{provide:ct,useClass:ie}:{provide:ct,useClass:Ct},{provide:Dd,useFactory:()=>{const n=(0,t.f3M)(Mn),o=(0,t.f3M)(Cb),e=(0,t.f3M)(ya);return e.scrollOffset&&o.setOffset(e.scrollOffset),new Jy(n,o,e)}},i?.preloadingStrategy?jP(i.preloadingStrategy):[],{provide:t.PXZ,multi:!0,useFactory:I_},i?.initialNavigation?Nr(i):[],[{provide:L_,useFactory:Gy},{provide:t.tb,multi:!0,useExisting:L_}]]}}static forChild(e){return{ngModule:n,providers:[Td(e)]}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(E_,8))},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();function Qy(n){return"guarded"}function Td(n){return[{provide:bd,multi:!0,useValue:n}]}function Gy(){const n=(0,t.f3M)(t.zs3);return o=>{const e=n.get(t.z2F);if(o!==e.components[0])return;const i=n.get(Mn),a=n.get(pl);1===n.get(ml)&&i.initialNavigation(),n.get(S_,null,t.XFs.Optional)?.setUpPreloading(),n.get(Dd,null,t.XFs.Optional)?.init(),i.resetRootComponentType(e.componentTypes[0]),a.next(),a.complete()}}const L_=new t.OlP("");function Nr(n){return["disabled"===n.initialNavigation?[{provide:t.ip1,multi:!0,useFactory:()=>{const n=(0,t.f3M)(Mn);return()=>{n.setUpLocationChangeListener()}}},{provide:ml,useValue:2}]:[],"enabledBlocking"===n.initialNavigation?[{provide:ml,useValue:0},{provide:t.ip1,multi:!0,deps:[t.zs3],useFactory:n=>{const o=n.get(S,Promise.resolve(null));let e=!1;return()=>o.then(()=>new Promise(a=>{const u=n.get(Mn),h=n.get(pl);(function i(a){n.get(Mn).events.pipe(dn(h=>h instanceof Ro||h instanceof rl||h instanceof aa),(0,Gt.U)(h=>h instanceof Ro||h instanceof rl&&(0===h.code||1===h.code)&&null),dn(h=>null!==h),Je(1)).subscribe(()=>{a()})})(()=>{a(!0),e=!0}),u.afterPreactivation=()=>(a(!0),e||h.closed?Dt(void 0):h),u.initialNavigation()}))}}]:[]]}const pl=new t.OlP("",{factory:()=>new Ht.x}),ml=new t.OlP("",{providedIn:"root",factory:()=>1});function jP(n){return[T_,{provide:S_,useExisting:T_},{provide:A_,useExisting:n}]}
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
/**
       * @license Angular v14.1.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function S(r){for(let s in r)if(r[s]===S)return s;throw Error("Could not find renamed property on target object.")}function V(r,s){for(const c in s)s.hasOwnProperty(c)&&!r.hasOwnProperty(c)&&(r[c]=s[c])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function U(r){if("string"==typeof r)return r;if(Array.isArray(r))return"["+r.map(U).join(", ")+"]";if(null==r)return""+r;if(r.overriddenName)return`${r.overriddenName}`;if(r.name)return`${r.name}`;const s=r.toString();if(null==s)return""+s;const c=s.indexOf("\n");return-1===c?s:s.substring(0,c)}function gt(r,s){return null==r||""===r?null===s?"":s:null==s||""===s?r:r+" "+s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Q=S({__forward_ref__:S});function tt(r){return r.__forward_ref__=tt,r.toString=function(){return U(this())},r}function K(r){return ct(r)?r():r}function ct(r){return"function"==typeof r&&r.hasOwnProperty(Q)&&r.__forward_ref__===tt}
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
       */(s,c)),this.code=s}}function lt(r){return"string"==typeof r?r:null==r?"":String(r)}function mt(r,s){throw new Ct(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ot(r,s){null==r&&function Lt(r,s,c,l){throw new Error(`ASSERTION ERROR: ${r}`+(null==l?"":` [Expected=> ${c} ${l} ${s} <=Actual]`))}(s,r,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function cn(r){return{token:r.token,providedIn:r.providedIn||null,factory:r.factory,value:void 0}}function Ll(r){return{providers:r.providers||[],imports:r.imports||[]}}function Nl(r){return eh(r,Fl)||eh(r,ka)}function eh(r,s){return r.hasOwnProperty(s)?r[s]:null}function ih(r){return r&&(r.hasOwnProperty(bn)||r.hasOwnProperty(wv))?r[bn]:null}const Fl=S({\u0275prov:S}),bn=S({\u0275inj:S}),ka=S({ngInjectableDef:S}),wv=S({ngInjectorDef:S});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ut=(()=>((Ut=Ut||{})[Ut.Default=0]="Default",Ut[Ut.Host=1]="Host",Ut[Ut.Self=2]="Self",Ut[Ut.SkipSelf=4]="SkipSelf",Ut[Ut.Optional=8]="Optional",Ut))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rl;function Ke(r){const s=Rl;return Rl=r,s}function oh(r,s,c){const l=Nl(r);return l&&"root"==l.providedIn?void 0===l.value?l.value=l.factory():l.value:c&Ut.Optional?null:void 0!==s?s:void mt(U(r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function At(r){return{toString:r}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Nt=(()=>((Nt=Nt||{})[Nt.OnPush=0]="OnPush",Nt[Nt.Default=1]="Default",Nt))(),ze=(()=>{return(r=ze||(ze={}))[r.Emulated=0]="Emulated",r[r.None=2]="None",r[r.ShadowDom=3]="ShadowDom",ze;var r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const me=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),_e={},re=[],ce=S({\u0275cmp:S}),Ul=S({\u0275dir:S}),Jo=S({\u0275pipe:S}),rh=S({\u0275mod:S}),Zn=S({\u0275fac:S}),jr=S({__NG_ELEMENT_ID__:S});
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
let sh=0;function Hr(r){return At(()=>{const c=!0===r.standalone,l={},g={type:r.type,providersResolver:null,decls:r.decls,vars:r.vars,factory:null,template:r.template||null,consts:r.consts||null,ngContentSelectors:r.ngContentSelectors,hostBindings:r.hostBindings||null,hostVars:r.hostVars||0,hostAttrs:r.hostAttrs||null,contentQueries:r.contentQueries||null,declaredInputs:l,inputs:null,outputs:null,exportAs:r.exportAs||null,onPush:r.changeDetection===Nt.OnPush,directiveDefs:null,pipeDefs:null,standalone:c,dependencies:c&&r.dependencies||null,getStandaloneInjector:null,selectors:r.selectors||re,viewQuery:r.viewQuery||null,features:r.features||null,data:r.data||{},encapsulation:r.encapsulation||ze.Emulated,id:"c"+sh++,styles:r.styles||re,_:null,setInput:null,schemas:r.schemas||null,tView:null},d=r.dependencies,f=r.features;return g.inputs=ch(r.inputs,l),g.outputs=ch(r.outputs),f&&f.forEach(m=>m(g)),g.directiveDefs=d?()=>("function"==typeof d?d():d).map(Aa).filter(ah):null,g.pipeDefs=d?()=>("function"==typeof d?d():d).map(Xe).filter(ah):null,g})}function Br(r,s,c){const l=r.\u0275cmp;l.directiveDefs=()=>("function"==typeof s?s():s).map(Aa),l.pipeDefs=()=>("function"==typeof c?c():c).map(Xe)}function Aa(r){return se(r)||ln(r)}function ah(r){return null!==r}function Ta(r){return At(()=>({type:r.type,bootstrap:r.bootstrap||re,declarations:r.declarations||re,imports:r.imports||re,exports:r.exports||re,transitiveCompileScopes:null,schemas:r.schemas||null,id:r.id||null}))}function ch(r,s){if(null==r)return _e;const c={};for(const l in r)if(r.hasOwnProperty(l)){let g=r[l],d=g;Array.isArray(g)&&(d=g[1],g=g[0]),c[g]=l,s&&(s[g]=d)}return c}const lh=Hr;function uh(r){return{type:r.type,name:r.name,factory:null,pure:!1!==r.pure,standalone:!0===r.standalone,onDestroy:r.type.prototype.ngOnDestroy||null}}function se(r){return r[ce]||null}function ln(r){return r[Ul]||null}function Xe(r){return r[Jo]||null}function tn(r,s){const c=r[rh]||null;if(!c&&!0===s)throw new Error(`Type ${U(r)} does not have '\u0275mod' property.`);return c}
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
function xe(r){return Array.isArray(r)&&"object"==typeof r[1]}function nn(r){return Array.isArray(r)&&!0===r[1]}function Bi(r){return 0!=(8&r.flags)}function jl(r){return 2==(2&r.flags)}function Yr(r){return 1==(1&r.flags)}function Gn(r){return null!==r.template}function Tv(r){return 0!=(256&r[2])}
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
function ho(r,s){return r.hasOwnProperty(Zn)?r[Zn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Iv{constructor(s,c,l){this.previousValue=s,this.currentValue=c,this.firstChange=l}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $r(){return Ia}function Ia(r){return r.type.prototype.ngOnChanges&&(r.setInput=mb),fh}function fh(){const r=Bl(this),s=r?.current;if(s){const c=r.previous;if(c===_e)r.previous=s;else for(let l in s)c[l]=s[l];r.current=null,this.ngOnChanges(s)}}function mb(r,s,c,l){const g=Bl(r)||function Lv(r,s){return r[ph]=s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r,{previous:_e,current:null}),d=g.current||(g.current={}),f=g.previous,m=this.declaredInputs[c],v=f[m];d[m]=new Iv(v&&v.currentValue,s,f===_e),r[l]=s}$r.ngInherit=!0;const ph="__ngSimpleChanges__";function Bl(r){return r[ph]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Te(r){for(;Array.isArray(r);)r=r[0];return r}function Jl(r,s){return Te(s[r])}function Un(r,s){return Te(s[r.index])}function Wr(r,s){return r.data[s]}function ui(r,s){return r[s]}function kn(r,s){const c=s[r];return xe(c)?c:c[0]}function Kr(r){return 4==(4&r[2])}function La(r){return 64==(64&r[2])}function qi(r,s){return null==s?null:r[s]}function Mh(r){r[18]=0}function zl(r,s){r[5]+=s;let c=r,l=r[3];for(;null!==l&&(1===s&&1===c[5]||-1===s&&0===c[5]);)l[5]+=s,c=l,l=l[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const jt={lFrame:Eh(null),bindingsEnabled:!0};function Gl(){return jt.bindingsEnabled}function ut(){return jt.lFrame.lView}function te(){return jt.lFrame.tView}function Oh(r){return jt.lFrame.contextLView=r,r[8]}function Ph(r){return jt.lFrame.contextLView=null,r}function Ne(){let r=xh();for(;null!==r&&64===r.type;)r=r.parent;return r}function xh(){return jt.lFrame.currentTNode}function $n(r,s){const c=jt.lFrame;c.currentTNode=r,c.isParent=s}function wh(){return jt.lFrame.isParent}function es(){jt.lFrame.isParent=!1}function un(){const r=jt.lFrame;let s=r.bindingRootIndex;return-1===s&&(s=r.bindingRootIndex=r.tView.bindingStartIndex),s}function fo(){return jt.lFrame.bindingIndex++}function Ai(r){const s=jt.lFrame,c=s.bindingIndex;return s.bindingIndex=s.bindingIndex+r,c}function Vv(r,s){const c=jt.lFrame;c.bindingIndex=c.bindingRootIndex=r,Kl(s)}function Kl(r){jt.lFrame.currentDirectiveIndex=r}function Hv(){return jt.lFrame.currentQueryIndex}function Ah(r){jt.lFrame.currentQueryIndex=r}function Bv(r){const s=r[1];return 2===s.type?s.declTNode:1===s.type?r[6]:null}function Th(r,s,c){if(c&Ut.SkipSelf){let g=s,d=r;for(;!(g=g.parent,null!==g||c&Ut.Host||(g=Bv(d),null===g||(d=d[15],10&g.type))););if(null===g)return!1;s=g,r=d}const l=jt.lFrame=tu();return l.currentTNode=s,l.lView=r,!0}function Xl(r){const s=tu(),c=r[1];jt.lFrame=s,s.currentTNode=c.firstChild,s.lView=r,s.tView=c,s.contextLView=r,s.bindingIndex=c.bindingStartIndex,s.inI18n=!1}function tu(){const r=jt.lFrame,s=null===r?null:r.child;return null===s?Eh(r):s}function Eh(r){const s={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:r,child:null,inI18n:!1};return null!==r&&(r.child=s),s}function eu(){const r=jt.lFrame;return jt.lFrame=r.parent,r.currentTNode=null,r.lView=null,r}const nu=eu;function Na(){const r=eu();r.isParent=!0,r.tView=null,r.selectedIndex=-1,r.contextLView=null,r.elementDepthCount=0,r.currentDirectiveIndex=-1,r.currentNamespace=null,r.bindingRootIndex=-1,r.bindingIndex=-1,r.currentQueryIndex=0}function gn(){return jt.lFrame.selectedIndex}function po(r){jt.lFrame.selectedIndex=r}function ye(){const r=jt.lFrame;return Wr(r.tView,r.selectedIndex)}function Wn(r,s){for(let c=s.directiveStart,l=s.directiveEnd;c<l;c++){const d=r.data[c].type.prototype,{ngAfterContentInit:f,ngAfterContentChecked:m,ngAfterViewInit:v,ngAfterViewChecked:b,ngOnDestroy:P}=d;f&&(r.contentHooks||(r.contentHooks=[])).push(-c,f),m&&((r.contentHooks||(r.contentHooks=[])).push(c,m),(r.contentCheckHooks||(r.contentCheckHooks=[])).push(c,m)),v&&(r.viewHooks||(r.viewHooks=[])).push(-c,v),b&&((r.viewHooks||(r.viewHooks=[])).push(c,b),(r.viewCheckHooks||(r.viewCheckHooks=[])).push(c,b)),null!=P&&(r.destroyHooks||(r.destroyHooks=[])).push(c,P)}}function Fa(r,s,c){iu(r,s,3,c)}function Ra(r,s,c,l){(3&r[2])===c&&iu(r,s,c,l)}function os(r,s){let c=r[2];(3&c)===s&&(c&=2047,c+=1,r[2]=c)}function iu(r,s,c,l){const d=l??-1,f=s.length-1;let m=0;for(let v=void 0!==l?65535&r[18]:0;v<f;v++)if("number"==typeof s[v+1]){if(m=s[v],null!=l&&m>=l)break}else s[v]<0&&(r[18]+=65536),(m<d||-1==d)&&(Pb(r,c,s,v),r[18]=(4294901760&r[18])+v+2),v++}function Pb(r,s,c,l){const g=c[l]<0,d=c[l+1],m=r[g?-c[l]:c[l]];if(g){if(r[2]>>11<r[18]>>16&&(3&r[2])===s){r[2]+=2048;try{d.call(m)}finally{}}}else try{d.call(m)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Za{constructor(s,c,l){this.factory=s,this.resolving=!1,this.canSeeViewProviders=c,this.injectImpl=l}}function ou(r,s,c){let l=0;for(;l<c.length;){const g=c[l];if("number"==typeof g){if(0!==g)break;l++;const d=c[l++],f=c[l++],m=c[l++];r.setAttribute(s,f,m,d)}else{const d=g,f=c[++l];Yv(d)?r.setProperty(s,d,f):r.setAttribute(s,d,f),l++}}return l}function Gv(r){return 3===r||4===r||6===r}function Yv(r){return 64===r.charCodeAt(0)}function ru(r,s){if(null!==s&&0!==s.length)if(null===r||0===r.length)r=s.slice();else{let c=-1;for(let l=0;l<s.length;l++){const g=s[l];"number"==typeof g?c=g:0===c||$v(r,c,g,null,-1===c||2===c?s[++l]:null)}}return r}function $v(r,s,c,l,g){let d=0,f=r.length;if(-1===s)f=-1;else for(;d<r.length;){const m=r[d++];if("number"==typeof m){if(m===s){f=-1;break}if(m>s){f=d-1;break}}}for(;d<r.length;){const m=r[d];if("number"==typeof m)break;if(m===c){if(null===l)return void(null!==g&&(r[d+1]=g));if(l===r[d+1])return void(r[d+2]=g)}d++,null!==l&&d++,null!==g&&d++}-1!==f&&(r.splice(f,0,s),d=f+1),r.splice(d++,0,c),null!==l&&r.splice(d++,0,l),null!==g&&r.splice(d++,0,g)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function su(r){return-1!==r}function Qo(r){return 32767&r}function rs(r,s){let c=function Nh(r){return r>>16}(r),l=s;for(;c>0;)l=l[15],c--;return l}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ti=!0;function ss(r){const s=Ti;return Ti=r,s}let Ye=0;const Ei={};function gi(r,s){const c=Dt(r,s);if(-1!==c)return c;const l=s[1];l.firstCreatePass&&(r.injectorIndex=s.length,De(l.data,r),De(s,null),De(l.blueprint,null));const g=qe(r,s),d=r.injectorIndex;if(su(g)){const f=Qo(g),m=rs(g,s),v=m[1].data;for(let b=0;b<8;b++)s[d+b]=m[f+b]|v[f+b]}return s[d+8]=g,d}function De(r,s){r.push(0,0,0,0,0,0,0,0,s)}function Dt(r,s){return-1===r.injectorIndex||r.parent&&r.parent.injectorIndex===r.injectorIndex||null===s[r.injectorIndex+8]?-1:r.injectorIndex}function qe(r,s){if(r.parent&&-1!==r.parent.injectorIndex)return r.parent.injectorIndex;let c=0,l=null,g=s;for(;null!==g;){if(l=Vh(g),null===l)return-1;if(c++,g=g[15],-1!==l.injectorIndex)return l.injectorIndex|c<<16}return-1}function Kn(r,s,c){!function Ht(r,s,c){let l;"string"==typeof c?l=c.charCodeAt(0)||0:c.hasOwnProperty(jr)&&(l=c[jr]),null==l&&(l=c[jr]=Ye++);const g=255&l;s.data[r+(g>>5)]|=1<<g}(r,s,c)}function Fh(r,s,c){if(c&Ut.Optional)return r;mt()}function An(r,s,c,l){if(c&Ut.Optional&&void 0===l&&(l=null),0==(c&(Ut.Self|Ut.Host))){const g=r[9],d=Ke(void 0);try{return g?g.get(s,l,c&Ut.Optional):oh(s,l,c&Ut.Optional)}finally{Ke(d)}}return Fh(l,0,c)}function Gt(r,s,c,l=Ut.Default,g){if(null!==r){if(1024&s[2]){const f=function Xn(r,s,c,l,g){let d=r,f=s;for(;null!==d&&null!==f&&1024&f[2]&&!(256&f[2]);){const m=Rh(d,f,c,l|Ut.Self,Ei);if(m!==Ei)return m;let v=d.parent;if(!v){const b=f[21];if(b){const P=b.get(c,Ei,l);if(P!==Ei)return P}v=Vh(f),f=f[15]}d=v}return g}(r,s,c,l,Ei);if(f!==Ei)return f}const d=Rh(r,s,c,l,Ei);if(d!==Ei)return d}return An(s,c,l,g)}function Rh(r,s,c,l,g){const d=function Kv(r){if("string"==typeof r)return r.charCodeAt(0)||0;const s=r.hasOwnProperty(jr)?r[jr]:void 0;return"number"==typeof s?s>=0?255&s:Xv:s}(c);if("function"==typeof d){if(!Th(s,r,l))return l&Ut.Host?Fh(g,0,l):An(s,c,l,g);try{const f=d(l);if(null!=f||l&Ut.Optional)return f;mt()}finally{nu()}}else if("number"==typeof d){let f=null,m=Dt(r,s),v=-1,b=l&Ut.Host?s[16][6]:null;for((-1===m||l&Ut.SkipSelf)&&(v=-1===m?qe(r,s):s[m+8],-1!==v&&_o(l,!1)?(f=s[1],m=Qo(v),s=rs(v,s)):m=-1);-1!==m;){const P=s[1];if(Zh(d,m,P.data)){const k=Wv(m,s,c,f,l,b);if(k!==Ei)return k}v=s[m+8],-1!==v&&_o(l,s[1].data[m+8]===b)&&Zh(d,m,s)?(f=P,m=Qo(v),s=rs(v,s)):m=-1}}return g}function Wv(r,s,c,l,g,d){const f=s[1],m=f.data[r+8],P=Yo(m,f,c,null==l?jl(m)&&Ti:l!=f&&0!=(3&m.type),g&Ut.Host&&d===m);return null!==P?as(s,f,P,m):Ei}function Yo(r,s,c,l,g){const d=r.providerIndexes,f=s.data,m=1048575&d,v=r.directiveStart,P=d>>20,I=g?m+P:r.directiveEnd;for(let z=l?m:m+P;z<I;z++){const nt=f[z];if(z<v&&c===nt||z>=v&&nt.type===c)return z}if(g){const z=f[v];if(z&&Gn(z)&&z.type===c)return v}return null}function as(r,s,c,l){let g=r[c];const d=s.data;if(function Qv(r){return r instanceof Za}(g)){const f=g;f.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function St(r,s){const c=s?`. Dependency path: ${s.join(" > ")} > ${r}`:"";throw new Ct(-200,`Circular dependency in DI detected for ${r}${c}`)}(function at(r){return"function"==typeof r?r.name||r.toString():"object"==typeof r&&null!=r&&"function"==typeof r.type?r.type.name||r.type.toString():lt(r)}(d[c]));const m=ss(f.canSeeViewProviders);f.resolving=!0;const v=f.injectImpl?Ke(f.injectImpl):null;Th(r,l,Ut.Default);try{g=r[c]=f.factory(void 0,d,r,l),s.firstCreatePass&&c>=l.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ih(r,s,c){const{ngOnChanges:l,ngOnInit:g,ngDoCheck:d}=s.type.prototype;if(l){const f=Ia(s);(c.preOrderHooks||(c.preOrderHooks=[])).push(r,f),(c.preOrderCheckHooks||(c.preOrderCheckHooks=[])).push(r,f)}g&&(c.preOrderHooks||(c.preOrderHooks=[])).push(0-r,g),d&&((c.preOrderHooks||(c.preOrderHooks=[])).push(r,d),(c.preOrderCheckHooks||(c.preOrderCheckHooks=[])).push(r,d))}(c,d[c],s)}finally{null!==v&&Ke(v),ss(m),f.resolving=!1,nu()}}return g}function Zh(r,s,c){return!!(c[s+(r>>5)]&1<<r)}function _o(r,s){return!(r&Ut.Self||r&Ut.Host&&s)}class vo{constructor(s,c){this._tNode=s,this._lView=c}get(s,c,l){return Gt(this._tNode,this._lView,s,l,c)}}function Xv(){return new vo(Ne(),ut())}function Uh(r){return At(()=>{const s=r.prototype.constructor,c=s[Zn]||au(s),l=Object.prototype;let g=Object.getPrototypeOf(r.prototype).constructor;for(;g&&g!==l;){const d=g[Zn]||au(g);if(d&&d!==c)return d;g=Object.getPrototypeOf(g)}return d=>new d})}function au(r){return ct(r)?()=>{const s=au(K(r));return s&&s()}:ho(r)}function Vh(r){const s=r[1],c=s.type;return 2===c?s.declTNode:1===c?r[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $o(r){return function $e(r,s){if("class"===s)return r.classes;if("style"===s)return r.styles;const c=r.attrs;if(c){const l=c.length;let g=0;for(;g<l;){const d=c[g];if(Gv(d))break;if(0===d)g+=2;else if("number"==typeof d)for(g++;g<l&&"string"==typeof c[g];)g++;else{if(d===s)return c[g+1];g+=2}}}return null}(Ne(),r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zi="__parameters__";function hi(r,s,c){return At(()=>{const l=function Va(r){return function(...c){if(r){const l=r(...c);for(const g in l)this[g]=l[g]}}}(s);function g(...d){if(this instanceof g)return l.apply(this,d),this;const f=new g(...d);return m.annotation=f,m;function m(v,b,P){const k=v.hasOwnProperty(zi)?v[zi]:Object.defineProperty(v,zi,{value:[]})[zi];for(;k.length<=P;)k.push(null);return(k[P]=k[P]||[]).push(f),v}}return c&&(g.prototype=Object.create(c.prototype)),g.prototype.ngMetadataName=r,g.annotationCls=g,g})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ue{constructor(s,c){this._desc=s,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof c?this.__NG_ELEMENT_ID__=c:void 0!==c&&(this.\u0275prov=cn({token:this,providedIn:c.providedIn||"root",factory:c.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Tn(r,s){void 0===s&&(s=r);for(let c=0;c<r.length;c++){let l=r[c];Array.isArray(l)?(s===r&&(s=r.slice(0,c)),Tn(l,s)):s!==r&&s.push(l)}return s}function ge(r,s){r.forEach(c=>Array.isArray(c)?ge(c,s):s(c))}function be(r,s,c){s>=r.length?r.push(c):r.splice(s,0,c)}function ja(r,s){return s>=r.length-1?r.pop():r.splice(s,1)[0]}function hn(r,s,c){let l=ds(r,s);return l>=0?r[1|l]=c:(l=~l,function Jh(r,s,c,l){let g=r.length;if(g==s)r.push(c,l);else if(1===g)r.push(l,r[0]),r[0]=c;else{for(g--,r.push(r[g-1],r[g]);g>s;)r[g]=r[g-2],g--;r[s]=c,r[s+1]=l}}(r,l,s,c)),l}function Vn(r,s){const c=ds(r,s);if(c>=0)return r[1|c]}function ds(r,s){return function du(r,s,c){let l=0,g=r.length>>c;for(;g!==l;){const d=l+(g-l>>1),f=r[d<<c];if(s===f)return d<<c;f>s?g=d:l=d+1}return~(g<<c)}
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
const ms={},_s="__NG_DI_FLAG__",Ko="ngTempTokenPath",Gh=/\n/gm,Yh="__source";let vs;function Xo(r){const s=vs;return vs=r,s}function tr(r,s=Ut.Default){if(void 0===vs)throw new Ct(-203,!1);return null===vs?oh(r,void 0,s):vs.get(r,s&Ut.Optional?null:void 0,s)}function Re(r,s=Ut.Default){return(function Dv(){return Rl}()||tr)(K(r),s)}function oC(r,s=Ut.Default){return"number"!=typeof s&&(s=0|(s.optional&&8)|(s.host&&1)|(s.self&&2)|(s.skipSelf&&4)),Re(r,s)}function $h(r){const s=[];for(let c=0;c<r.length;c++){const l=K(r[c]);if(Array.isArray(l)){if(0===l.length)throw new Ct(900,!1);let g,d=Ut.Default;for(let f=0;f<l.length;f++){const m=l[f],v=Lb(m);"number"==typeof v?-1===v?g=m.token:d|=v:g=m}s.push(Re(g,d))}else s.push(Re(l))}return s}function Ja(r,s){return r[_s]=s,r.prototype[_s]=s,r}function Lb(r){return r[_s]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Mo=Ja(hi("Optional"),8),Cs=Ja(hi("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ef,vu,Cu;function qb(r){ef=r}function ys(r){return function nf(){if(void 0===vu&&(vu=null,me.trustedTypes))try{vu=me.trustedTypes.createPolicy("angular",{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r})}catch{}return vu}()?.createHTML(r)||r}function uC(r){return function rf(){if(void 0===Cu&&(Cu=null,me.trustedTypes))try{Cu=me.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r})}catch{}return Cu}()?.createHTML(r)||r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class er{constructor(s){this.changingThisBreaksApplicationSecurity=s}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class Qb extends er{getTypeName(){return"HTML"}}class Gb extends er{getTypeName(){return"Style"}}class Yb extends er{getTypeName(){return"Script"}}class $b extends er{getTypeName(){return"URL"}}class Wb extends er{getTypeName(){return"ResourceURL"}}function Gi(r){return r instanceof er?r.changingThisBreaksApplicationSecurity:r}function bs(r,s){const c=function Kb(r){return r instanceof er&&r.getTypeName()||null}(r);if(null!=c&&c!==s){if("ResourceURL"===c&&"URL"===s)return!0;throw new Error(`Required a safe ${s}, got a ${c} (see https://g.co/ng/security#xss)`)}return c===s}function Xb(r){return new Qb(r)}function tO(r){return new Gb(r)}function eO(r){return new Yb(r)}function nO(r){return new $b(r)}function iO(r){return new Wb(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oO{constructor(s){this.inertDocumentHelper=s}getInertBodyElement(s){s="<body><remove></remove>"+s;try{const c=(new window.DOMParser).parseFromString(ys(s),"text/html").body;return null===c?this.inertDocumentHelper.getInertBodyElement(s):(c.removeChild(c.firstChild),c)}catch{return null}}}class rO{constructor(s){if(this.defaultDoc=s,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const c=this.inertDocument.createElement("html");this.inertDocument.appendChild(c);const l=this.inertDocument.createElement("body");c.appendChild(l)}}getInertBodyElement(s){const c=this.inertDocument.createElement("template");if("content"in c)return c.innerHTML=ys(s),c;const l=this.inertDocument.createElement("body");return l.innerHTML=ys(s),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(l),l}stripCustomNsAttrs(s){const c=s.attributes;for(let g=c.length-1;0<g;g--){const f=c.item(g).name;("xmlns:ns1"===f||0===f.indexOf("ns1:"))&&s.removeAttribute(f)}let l=s.firstChild;for(;l;)l.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(l),l=l.nextSibling}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const aO=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,cO=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Ga(r){return(r=String(r)).match(aO)||r.match(cO)?r:"unsafe:"+r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ii(r){const s={};for(const c of r.split(","))s[c]=!0;return s}function Ya(...r){const s={};for(const c of r)for(const l in c)c.hasOwnProperty(l)&&(s[l]=!0);return s}const pC=Ii("area,br,col,hr,img,wbr"),mC=Ii("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),_C=Ii("rp,rt"),sf=Ya(pC,Ya(mC,Ii("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Ya(_C,Ii("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Ya(_C,mC)),af=Ii("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),cf=Ii("srcset"),vC=Ya(af,cf,Ii("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Ii("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),lO=Ii("script,style,template");class uO{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(s){let c=s.firstChild,l=!0;for(;c;)if(c.nodeType===Node.ELEMENT_NODE?l=this.startElement(c):c.nodeType===Node.TEXT_NODE?this.chars(c.nodeValue):this.sanitizedSomething=!0,l&&c.firstChild)c=c.firstChild;else for(;c;){c.nodeType===Node.ELEMENT_NODE&&this.endElement(c);let g=this.checkClobberedElement(c,c.nextSibling);if(g){c=g;break}c=this.checkClobberedElement(c,c.parentNode)}return this.buf.join("")}startElement(s){const c=s.nodeName.toLowerCase();if(!sf.hasOwnProperty(c))return this.sanitizedSomething=!0,!lO.hasOwnProperty(c);this.buf.push("<"),this.buf.push(c);const l=s.attributes;for(let g=0;g<l.length;g++){const d=l.item(g),f=d.name,m=f.toLowerCase();if(!vC.hasOwnProperty(m)){this.sanitizedSomething=!0;continue}let v=d.value;af[m]&&(v=Ga(v)),cf[m]&&(r=v,v=(r=String(r)).split(",").map(s=>Ga(s.trim())).join(", ")),this.buf.push(" ",f,'="',MC(v),'"')}var r;return this.buf.push(">"),!0}endElement(s){const c=s.nodeName.toLowerCase();sf.hasOwnProperty(c)&&!pC.hasOwnProperty(c)&&(this.buf.push("</"),this.buf.push(c),this.buf.push(">"))}chars(s){this.buf.push(MC(s))}checkClobberedElement(s,c){if(c&&(s.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${s.outerHTML}`);return c}}const CC=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,gO=/([^\#-~ |!])/g;function MC(r){return r.replace(/&/g,"&amp;").replace(CC,function(s){return"&#"+(1024*(s.charCodeAt(0)-55296)+(s.charCodeAt(1)-56320)+65536)+";"}).replace(gO,function(s){return"&#"+s.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Mu;function yC(r,s){let c=null;try{Mu=Mu||function hC(r){const s=new rO(r);return function sO(){try{return!!(new window.DOMParser).parseFromString(ys(""),"text/html")}catch{return!1}}()?new oO(s):s}(r);let l=s?String(s):"";c=Mu.getInertBodyElement(l);let g=5,d=l;do{if(0===g)throw new Error("Failed to sanitize html because the input is unstable");g--,l=d,d=c.innerHTML,c=Mu.getInertBodyElement(l)}while(l!==d);return ys((new uO).sanitizeChildren(lf(c)||c))}finally{if(c){const l=lf(c)||c;for(;l.firstChild;)l.removeChild(l.firstChild)}}}function lf(r){return"content"in r&&function dO(r){return r.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===r.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)?r.content:null}var Ee=(()=>((Ee=Ee||{})[Ee.NONE=0]="NONE",Ee[Ee.HTML=1]="HTML",Ee[Ee.STYLE=2]="STYLE",Ee[Ee.SCRIPT=3]="SCRIPT",Ee[Ee.URL=4]="URL",Ee[Ee.RESOURCE_URL=5]="RESOURCE_URL",Ee))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bC(r){const s=$a();return s?uC(s.sanitize(Ee.HTML,r)||""):bs(r,"HTML")?uC(Gi(r)):yC(function lC(){return void 0!==ef?ef:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),lt(r))}function uf(r){const s=$a();return s?s.sanitize(Ee.URL,r)||"":bs(r,"URL")?Gi(r):Ga(lt(r))}function $a(){const r=ut();return r&&r[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gf=new ue("ENVIRONMENT_INITIALIZER"),PC=new ue("INJECTOR",-1),xC=new ue("INJECTOR_DEF_TYPES");
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
class wC{get(s,c=ms){if(c===ms){const l=new Error(`NullInjectorError: No provider for ${U(s)}!`);throw l.name="NullInjectorError",l}return c}}
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
       */function CO(...r){return{\u0275providers:DC(0,r)}}function DC(r,...s){const c=[],l=new Set;let g;return ge(s,d=>{const f=d;df(f,c,[],l)&&(g||(g=[]),g.push(f))}),void 0!==g&&kC(g,c),c}function kC(r,s){for(let c=0;c<r.length;c++){const{providers:g}=r[c];ge(g,d=>{s.push(d)})}}function df(r,s,c,l){if(!(r=K(r)))return!1;let g=null,d=ih(r);const f=!d&&se(r);if(d||f){if(f&&!f.standalone)return!1;g=r}else{const v=r.ngModule;if(d=ih(v),!d)return!1;g=v}const m=l.has(g);if(f){if(m)return!1;if(l.add(g),f.dependencies){const v="function"==typeof f.dependencies?f.dependencies():f.dependencies;for(const b of v)df(b,s,c,l)}}else{if(!d)return!1;{if(null!=d.imports&&!m){let b;l.add(g);try{ge(d.imports,P=>{df(P,s,c,l)&&(b||(b=[]),b.push(P))})}finally{}void 0!==b&&kC(b,s)}if(!m){const b=ho(g)||(()=>new g);s.push({provide:g,useFactory:b,deps:re},{provide:xC,useValue:g,multi:!0},{provide:gf,useValue:()=>Re(g),multi:!0})}const v=d.providers;null==v||m||ge(v,P=>{s.push(P)})}}return g!==r&&void 0!==r.providers}const MO=S({provide:String,useValue:S});function hf(r){return null!==r&&"object"==typeof r&&MO in r}function nr(r){return"function"==typeof r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ff=new ue("Set Injector scope."),yu={},bO={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let pf;function bu(){return void 0===pf&&(pf=new wC),pf}class ir{}class EC extends ir{constructor(s,c,l,g){super(),this.parent=c,this.source=l,this.scopes=g,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,_f(s,f=>this.processProvider(f)),this.records.set(PC,Os(void 0,this)),g.has("environment")&&this.records.set(ir,Os(void 0,this));const d=this.records.get(ff);null!=d&&"string"==typeof d.value&&this.scopes.add(d.value),this.injectorDefTypes=new Set(this.get(xC.multi,re,Ut.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const s of this._ngOnDestroyHooks)s.ngOnDestroy();for(const s of this._onDestroyHooks)s()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(s){this._onDestroyHooks.push(s)}runInContext(s){this.assertNotDestroyed();const c=Xo(this),l=Ke(void 0);try{return s()}finally{Xo(c),Ke(l)}}get(s,c=ms,l=Ut.Default){this.assertNotDestroyed();const g=Xo(this),d=Ke(void 0);try{if(!(l&Ut.SkipSelf)){let m=this.records.get(s);if(void 0===m){const v=function DO(r){return"function"==typeof r||"object"==typeof r&&r instanceof ue}(s)&&Nl(s);m=v&&this.injectableDefInScope(v)?Os(mf(s),yu):null,this.records.set(s,m)}if(null!=m)return this.hydrate(s,m)}return(l&Ut.Self?bu():this.parent).get(s,c=l&Ut.Optional&&c===ms?null:c)}catch(f){if("NullInjectorError"===f.name){if((f[Ko]=f[Ko]||[]).unshift(U(s)),g)throw f;return function Nb(r,s,c,l){const g=r[Ko];throw s[Yh]&&g.unshift(s[Yh]),r.message=function Fb(r,s,c,l=null){r=r&&"\n"===r.charAt(0)&&"\u0275"==r.charAt(1)?r.slice(2):r;let g=U(s);if(Array.isArray(s))g=s.map(U).join(" -> ");else if("object"==typeof s){let d=[];for(let f in s)if(s.hasOwnProperty(f)){let m=s[f];d.push(f+":"+("string"==typeof m?JSON.stringify(m):U(m)))}g=`{${d.join(", ")}}`}return`${c}${l?"("+l+")":""}[${g}]: ${r.replace(Gh,"\n  ")}`}("\n"+r.message,g,c,l),r.ngTokenPath=g,r[Ko]=null,r}(f,s,"R3InjectorError",this.source)}throw f}finally{Ke(d),Xo(g)}}resolveInjectorInitializers(){const s=Xo(this),c=Ke(void 0);try{const l=this.get(gf.multi,re,Ut.Self);for(const g of l)g()}finally{Xo(s),Ke(c)}}toString(){const s=[],c=this.records;for(const l of c.keys())s.push(U(l));return`R3Injector[${s.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ct(205,!1)}processProvider(s){let c=nr(s=K(s))?s:K(s&&s.provide);const l=function PO(r){return hf(r)?Os(void 0,r.useValue):Os(SC(r),yu)}(s);if(nr(s)||!0!==s.multi)this.records.get(c);else{let g=this.records.get(c);g||(g=Os(void 0,yu,!0),g.factory=()=>$h(g.multi),this.records.set(c,g)),c=s,g.multi.push(s)}this.records.set(c,l)}hydrate(s,c){return c.value===yu&&(c.value=bO,c.value=c.factory()),"object"==typeof c.value&&c.value&&function wO(r){return null!==r&&"object"==typeof r&&"function"==typeof r.ngOnDestroy}(c.value)&&this._ngOnDestroyHooks.add(c.value),c.value}injectableDefInScope(s){if(!s.providedIn)return!1;const c=K(s.providedIn);return"string"==typeof c?"any"===c||this.scopes.has(c):this.injectorDefTypes.has(c)}}function mf(r){const s=Nl(r),c=null!==s?s.factory:ho(r);if(null!==c)return c;if(r instanceof ue)throw new Ct(204,!1);if(r instanceof Function)return function OO(r){const s=r.length;if(s>0)throw function gs(r,s){const c=[];for(let l=0;l<r;l++)c.push(s);return c}(s,"?"),new Ct(204,!1);const c=function nh(r){const s=r&&(r[Fl]||r[ka]);if(s){const c=function xv(r){if(r.hasOwnProperty("name"))return r.name;const s=(""+r).match(/^function\s*([^\s(]+)/);return null===s?"":s[1]}(r);return console.warn(`DEPRECATED: DI is instantiating a token "${c}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${c}" class.`),s}return null}(r);return null!==c?()=>c.factory(r):()=>new r}(r);throw new Ct(204,!1)}function SC(r,s,c){let l;if(nr(r)){const g=K(r);return ho(g)||mf(g)}if(hf(r))l=()=>K(r.useValue);else if(function TC(r){return!(!r||!r.useFactory)}(r))l=()=>r.useFactory(...$h(r.deps||[]));else if(function AC(r){return!(!r||!r.useExisting)}(r))l=()=>Re(K(r.useExisting));else{const g=K(r&&(r.useClass||r.provide));if(!function xO(r){return!!r.deps}(r))return ho(g)||mf(g);l=()=>new g(...$h(r.deps))}return l}function Os(r,s,c=!1){return{factory:r,value:s,multi:c?[]:void 0}}function kO(r){return!!r.\u0275providers}function _f(r,s){for(const c of r)Array.isArray(c)?_f(c,s):kO(c)?_f(c.\u0275providers,s):s(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class IC{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Je{resolveComponentFactory(s){throw function LC(r){const s=Error(`No component factory found for ${U(r)}. Did you add it to @NgModule.entryComponents?`);return s.ngComponent=r,s}(s)}}let rr=(()=>{class r{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.NULL=new Je,r})();function sr(){return ar(Ne(),ut())}function ar(r,s){return new Ps(Un(r,s))}let Ps=(()=>{class r{constructor(c){this.nativeElement=c}}return r.__NG_ELEMENT_ID__=sr,r})();function NC(r){return r instanceof Ps?r.nativeElement:r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class FC{}let RC=(()=>{class r{}return r.__NG_ELEMENT_ID__=()=>function ZC(){const r=ut(),c=kn(Ne().index,r);return(xe(c)?c:r)[11]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),r})(),UC=(()=>{class r{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.\u0275prov=cn({token:r,providedIn:"root",factory:()=>null}),r})();class Cf{constructor(s){this.full=s,this.major=s.split(".")[0],this.minor=s.split(".")[1],this.patch=s.split(".").slice(2).join(".")}}const VC=new Cf("14.1.3"),Wa={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wf(r){return r.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class cr{constructor(){this._console=console}handleError(s){const c=this._findOriginalError(s);this._console.error("ERROR",s),c&&this._console.error("ORIGINAL ERROR",c)}_findOriginalError(s){let c=s&&wf(s);for(;c&&wf(c);)c=wf(c);return c||null}}
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
const kf=new Map;let ZO=0;const Du="__ngContext__";function on(r,s){xe(s)?(r[Du]=s[20],function VO(r){kf.set(r[20],r)}(s)):r[Du]=s}function Ds(r){const s=r[Du];return"number"==typeof s?function JC(r){return kf.get(r)||null}(s):s||null}function ku(r){const s=Ds(r);return s?xe(s)?s:s.lView:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qO=(()=>(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind(me))();function fi(r){return r instanceof Function?r():r}
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
var pi=(()=>((pi=pi||{})[pi.Important=1]="Important",pi[pi.DashCase=2]="DashCase",pi))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zf(r,s){return undefined(r,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function As(r){const s=r[3];return nn(s)?s[3]:s}function ec(r){return Vf(r[13])}function Ts(r){return Vf(r[4])}function Vf(r){for(;null!==r&&!nn(r);)r=r[4];return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lr(r,s,c,l,g){if(null!=l){let d,f=!1;nn(l)?d=l:xe(l)&&(f=!0,l=l[0]);const m=Te(l);0===r&&null!==c?null==g?Su(s,c,m):$i(s,c,m,g||null,!0):1===r&&null!==c?$i(s,c,m,g||null,!0):2===r?function zf(r,s,c){const l=dr(r,s);l&&function rc(r,s,c,l){r.removeChild(s,c,l)}(r,l,s,c)}(s,m,f):3===r&&s.destroyNode(m),null!=d&&function Qf(r,s,c,l,g){const d=c[7];d!==Te(c)&&lr(s,r,l,d,g);for(let m=10;m<c.length;m++){const v=c[m];fr(v[1],v,r,s,l,d)}}(s,r,d,c,g)}}function Es(r,s,c){return r.createElement(s,c)}function ic(r,s){const c=r[9],l=c.indexOf(s),g=s[3];512&s[2]&&(s[2]&=-513,zl(g,-1)),c.splice(l,1)}function Ss(r,s){if(r.length<=10)return;const c=10+s,l=r[c];if(l){const g=l[17];null!==g&&g!==r&&ic(g,l),s>0&&(r[c-1][4]=l[4]);const d=ja(r,10+s);!function ur(r,s){fr(r,s,s[11],2,null,null),s[0]=null,s[6]=null}(l[1],l);const f=d[19];null!==f&&f.detachView(d[1]),l[3]=null,l[4]=null,l[2]&=-65}return l}function gr(r,s){if(!(128&s[2])){const c=s[11];c.destroyNode&&fr(r,s,c,3,null,null),function Hf(r){let s=r[13];if(!s)return oc(r[1],r);for(;s;){let c=null;if(xe(s))c=s[13];else{const l=s[10];l&&(c=l)}if(!c){for(;s&&!s[4]&&s!==r;)xe(s)&&oc(s[1],s),s=s[3];null===s&&(s=r),xe(s)&&oc(s[1],s),c=s&&s[4]}s=c}}(s)}}function oc(r,s){if(!(128&s[2])){s[2]&=-65,s[2]|=128,function qf(r,s){let c;if(null!=r&&null!=(c=r.destroyHooks))for(let l=0;l<c.length;l+=2){const g=s[c[l]];if(!(g instanceof Za)){const d=c[l+1];if(Array.isArray(d))for(let f=0;f<d.length;f+=2){const m=g[d[f]],v=d[f+1];try{v.call(m)}finally{}}else try{d.call(g)}finally{}}}}(r,s),function Bf(r,s){const c=r.cleanup,l=s[7];let g=-1;if(null!==c)for(let d=0;d<c.length-1;d+=2)if("string"==typeof c[d]){const f=c[d+1],m="function"==typeof f?f(s):Te(s[f]),v=l[g=c[d+2]],b=c[d+3];"boolean"==typeof b?m.removeEventListener(c[d],v,b):b>=0?l[g=b]():l[g=-b].unsubscribe(),d+=2}else{const f=l[g=c[d+1]];c[d].call(f)}if(null!==l){for(let d=g+1;d<l.length;d++)(0,l[d])();s[7]=null}}(r,s),1===s[1].type&&s[11].destroy();const c=s[17];if(null!==c&&nn(s[3])){c!==s[3]&&ic(c,s);const l=s[19];null!==l&&l.detachView(r)}!function jO(r){kf.delete(r[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)}}function Eu(r,s,c){return function Jf(r,s,c){let l=s;for(;null!==l&&40&l.type;)l=(s=l).parent;if(null===l)return c[0];if(2&l.flags){const g=r.data[l.directiveStart].encapsulation;if(g===ze.None||g===ze.Emulated)return null}return Un(l,c)}(r,s.parent,c)}function $i(r,s,c,l,g){r.insertBefore(s,c,l,g)}function Su(r,s,c){r.appendChild(s,c)}function Iu(r,s,c,l,g){null!==l?$i(r,s,c,l,g):Su(r,s,c)}function dr(r,s){return r.parentNode(s)}let hr=function Lu(r,s,c){return 40&r.type?Un(r,c):null};function ke(r,s,c,l){const g=Eu(r,l,s),d=s[11],m=function Is(r,s,c){return hr(r,s,c)}(l.parent||s[6],l,s);if(null!=g)if(Array.isArray(c))for(let v=0;v<c.length;v++)Iu(d,g,c[v],m,!1);else Iu(d,g,c,m,!1)}function Fu(r,s){if(null!==s){const c=s.type;if(3&c)return Un(s,r);if(4&c)return Oo(-1,r[s.index]);if(8&c){const l=s.child;if(null!==l)return Fu(r,l);{const g=r[s.index];return nn(g)?Oo(-1,g):Te(g)}}if(32&c)return Zf(s,r)()||Te(r[s.index]);{const l=XC(r,s);return null!==l?Array.isArray(l)?l[0]:Fu(As(r[16]),l):Fu(r,s.next)}}return null}function XC(r,s){return null!==s?r[16][6].projection[s.projection]:null}function Oo(r,s){const c=10+r+1;if(c<s.length){const l=s[c],g=l[1].firstChild;if(null!==g)return Fu(l,g)}return s[7]}function ac(r,s,c,l,g,d,f){for(;null!=c;){const m=l[c.index],v=c.type;if(f&&0===s&&(m&&on(Te(m),l),c.flags|=4),64!=(64&c.flags))if(8&v)ac(r,s,c.child,l,g,d,!1),lr(s,r,g,m,d);else if(32&v){const b=Zf(c,l);let P;for(;P=b();)lr(s,r,g,P,d);lr(s,r,g,m,d)}else 16&v?Ru(r,s,l,c,g,d):lr(s,r,g,m,d);c=f?c.projectionNext:c.next}}function fr(r,s,c,l,g,d){ac(c,l,r.firstChild,s,g,d,!1)}function Ru(r,s,c,l,g,d){const f=c[16],v=f[6].projection[l.projection];if(Array.isArray(v))for(let b=0;b<v.length;b++)lr(s,r,g,v[b],d);else ac(r,s,v,f[3],g,d,!0)}function Ls(r,s,c){r.setAttribute(s,"style",c)}function Zu(r,s,c){""===c?r.removeAttribute(s,"class"):r.setAttribute(s,"class",c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gf(r,s,c){let l=r.length;for(;;){const g=r.indexOf(s,c);if(-1===g)return g;if(0===g||r.charCodeAt(g-1)<=32){const d=s.length;if(g+d===l||r.charCodeAt(g+d)<=32)return g}c=g+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const cc="ng-template";function Uu(r,s,c){let l=0;for(;l<r.length;){let g=r[l++];if(c&&"class"===g){if(g=r[l],-1!==Gf(g.toLowerCase(),s,0))return!0}else if(1===g){for(;l<r.length&&"string"==typeof(g=r[l++]);)if(g.toLowerCase()===s)return!0;return!1}}return!1}function $f(r){return 4===r.type&&r.value!==cc}function Wf(r,s,c){return s===(4!==r.type||c?r.value:cc)}function KO(r,s,c){let l=4;const g=r.attrs||[],d=function ju(r){for(let s=0;s<r.length;s++)if(Gv(r[s]))return s;return r.length}(g);let f=!1;for(let m=0;m<s.length;m++){const v=s[m];if("number"!=typeof v){if(!f)if(4&l){if(l=2|1&l,""!==v&&!Wf(r,v,c)||""===v&&1===s.length){if(ei(l))return!1;f=!0}}else{const b=8&l?v:s[++m];if(8&l&&null!==r.attrs){if(!Uu(r.attrs,b,c)){if(ei(l))return!1;f=!0}continue}const k=Kf(8&l?"class":v,g,$f(r),c);if(-1===k){if(ei(l))return!1;f=!0;continue}if(""!==b){let I;I=k>d?"":g[k+1].toLowerCase();const z=8&l?I:null;if(z&&-1!==Gf(z,b,0)||2&l&&b!==I){if(ei(l))return!1;f=!0}}}}else{if(!f&&!ei(l)&&!ei(v))return!1;if(f&&ei(v))continue;f=!1,l=v|1&l}}return ei(l)||f}function ei(r){return 0==(1&r)}function Kf(r,s,c,l){if(null===s)return-1;let g=0;if(l||!c){let d=!1;for(;g<s.length;){const f=s[g];if(f===r)return g;if(3===f||6===f)d=!0;else{if(1===f||2===f){let m=s[++g];for(;"string"==typeof m;)m=s[++g];continue}if(4===f)break;if(0===f){g+=4;continue}}g+=d?1:2}return-1}return function nM(r,s){let c=r.indexOf(4);if(c>-1)for(c++;c<r.length;){const l=r[c];if("number"==typeof l)return-1;if(l===s)return c;c++}return-1}(s,r)}function Ns(r,s,c=!1){for(let l=0;l<s.length;l++)if(KO(r,s[l],c))return!0;return!1}function Xf(r,s){return r?":not("+s.trim()+")":s}function tP(r){let s=r[0],c=1,l=2,g="",d=!1;for(;c<r.length;){let f=r[c];if("string"==typeof f)if(2&l){const m=r[++c];g+="["+f+(m.length>0?'="'+m+'"':"")+"]"}else 8&l?g+="."+f:4&l&&(g+=" "+f);else""!==g&&!ei(f)&&(s+=Xf(d,g),g=""),l=f,d=d||!ei(l);c++}return""!==g&&(s+=Xf(d,g)),s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Jt={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oM(r){rM(te(),ut(),gn()+r,!1)}function rM(r,s,c,l){if(!l)if(3==(3&s[2])){const d=r.preOrderCheckHooks;null!==d&&Fa(s,d,c)}else{const d=r.preOrderHooks;null!==d&&Ra(s,d,0,c)}po(c)}
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
function lM(r,s=null,c=null,l){const g=np(r,s,c,l);return g.resolveInjectorInitializers(),g}function np(r,s=null,c=null,l,g=new Set){const d=[c||re,CO(r)];return l=l||("object"==typeof r?void 0:U(r)),new EC(d,s||bu(),l||null,g)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let pr=(()=>{class r{static create(c,l){if(Array.isArray(c))return lM({name:""},l,c,"");{const g=c.name??"";return lM({name:g},c.parent,c.providers,g)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.THROW_IF_NOT_FOUND=ms,r.NULL=new wC,r.\u0275prov=cn({token:r,providedIn:"any",factory:()=>Re(PC)}),r.__NG_ELEMENT_ID__=-1,r})();
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
function xo(r,s=Ut.Default){const c=ut();return null===c?Re(r,s):Gt(Ne(),c,K(r),s)}function mM(){throw new Error("invalid")}
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
function Fs(r,s){return r<<17|s<<2}function ni(r){return r>>17&32767}function rn(r){return 2|r}function Ki(r){return(131068&r)>>2}function qu(r,s){return-131069&r|s<<2}function dp(r){return 1|r}function xp(r,s){const c=r.contentQueries;if(null!==c)for(let l=0;l<c.length;l+=2){const g=c[l],d=c[l+1];if(-1!==d){const f=r.data[d];Ah(g),f.contentQueries(2,s[d],d)}}}function _i(r,s,c,l,g,d,f,m,v,b,P){const k=s.blueprint.slice();return k[0]=g,k[2]=76|l,(null!==P||r&&1024&r[2])&&(k[2]|=1024),Mh(k),k[3]=k[15]=r,k[8]=c,k[10]=f||r&&r[10],k[11]=m||r&&r[11],k[12]=v||r&&r[12]||null,k[9]=b||r&&r[9]||null,k[6]=d,k[20]=function UO(){return ZO++}(),k[21]=P,k[16]=2==s.type?r[16]:k,k}function _n(r,s,c,l,g){let d=r.data[s];if(null===d)d=function Yu(r,s,c,l,g){const d=xh(),f=wh(),v=r.data[s]=function Ap(r,s,c,l,g,d){return{type:c,index:l,insertBeforeIndex:null,injectorIndex:s?s.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:g,attrs:d,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:s,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,f?d:d&&d.parent,c,s,l,g);return null===r.firstChild&&(r.firstChild=v),null!==d&&(f?null==d.child&&null!==v.parent&&(d.child=v):null===d.next&&(d.next=v)),v}(r,s,c,l,g),function Uv(){return jt.lFrame.inI18n}()&&(d.flags|=64);else if(64&d.type){d.type=c,d.value=l,d.attrs=g;const f=function Ji(){const r=jt.lFrame,s=r.currentTNode;return r.isParent?s:s.parent}();d.injectorIndex=null===f?-1:f.injectorIndex}return $n(d,!0),d}function to(r,s,c,l){if(0===c)return-1;const g=s.length;for(let d=0;d<c;d++)s.push(l),r.blueprint.push(l),r.data.push(null);return g}function Cc(r,s,c){Xl(s);try{const l=r.viewQuery;null!==l&&Up(1,l,c);const g=r.template;null!==g&&wo(r,s,g,1,c),r.firstCreatePass&&(r.firstCreatePass=!1),r.staticContentQueries&&xp(r,s),r.staticViewQueries&&Up(2,r.viewQuery,c);const d=r.components;null!==d&&function wp(r,s){for(let c=0;c<s.length;c++)og(r,s[c])}(s,d)}catch(l){throw r.firstCreatePass&&(r.incompleteFirstPass=!0,r.firstCreatePass=!1),l}finally{s[2]&=-5,Na()}}function Us(r,s,c,l){const g=s[2];if(128!=(128&g)){Xl(s);try{Mh(s),function kh(r){return jt.lFrame.bindingIndex=r}(r.bindingStartIndex),null!==c&&wo(r,s,c,2,l);const f=3==(3&g);if(f){const b=r.preOrderCheckHooks;null!==b&&Fa(s,b,null)}else{const b=r.preOrderHooks;null!==b&&Ra(s,b,0,null),os(s,0)}if(function MP(r){for(let s=ec(r);null!==s;s=Ts(s)){if(!s[2])continue;const c=s[9];for(let l=0;l<c.length;l++){const g=c[l],d=g[3];0==(512&g[2])&&zl(d,1),g[2]|=512}}}(s),function CP(r){for(let s=ec(r);null!==s;s=Ts(s))for(let c=10;c<s.length;c++){const l=s[c],g=l[1];La(l)&&Us(g,l,g.template,l[8])}}(s),null!==r.contentQueries&&xp(r,s),f){const b=r.contentCheckHooks;null!==b&&Fa(s,b)}else{const b=r.contentHooks;null!==b&&Ra(s,b,1),os(s,1)}!function OM(r,s){const c=r.hostBindingOpCodes;if(null!==c)try{for(let l=0;l<c.length;l++){const g=c[l];if(g<0)po(~g);else{const d=g,f=c[++l],m=c[++l];Vv(f,d),m(2,s[d])}}}finally{po(-1)}}(r,s);const m=r.components;null!==m&&function PM(r,s){for(let c=0;c<s.length;c++)kc(r,s[c])}(s,m);const v=r.viewQuery;if(null!==v&&Up(2,v,l),f){const b=r.viewCheckHooks;null!==b&&Fa(s,b)}else{const b=r.viewHooks;null!==b&&Ra(s,b,2),os(s,2)}!0===r.firstUpdatePass&&(r.firstUpdatePass=!1),s[2]&=-41,512&s[2]&&(s[2]&=-513,zl(s[3],-1))}finally{Na()}}}function xM(r,s,c,l){const g=s[10],f=Kr(s);try{!f&&g.begin&&g.begin(),f&&Cc(r,s,l),Us(r,s,c,l)}finally{!f&&g.end&&g.end()}}function wo(r,s,c,l,g){const d=gn(),f=2&l;try{po(-1),f&&s.length>22&&rM(r,s,22,!1),c(l,g)}finally{po(d)}}function Dp(r,s,c){if(Bi(s)){const g=s.directiveEnd;for(let d=s.directiveStart;d<g;d++){const f=r.data[d];f.contentQueries&&f.contentQueries(1,c[d],d)}}}function vi(r,s,c){!Gl()||(function Sp(r,s,c,l){const g=c.directiveStart,d=c.directiveEnd;r.firstCreatePass||gi(c,s),on(l,s);const f=c.initialInputs;for(let m=g;m<d;m++){const v=r.data[m],b=Gn(v);b&&wc(s,c,v);const P=as(s,r,m,c);on(P,s),null!==f&&Rp(0,m-g,P,v,0,f),b&&(kn(c.index,s)[8]=P)}}(r,s,c,Un(c,s)),128==(128&c.flags)&&function Ip(r,s,c){const l=c.directiveStart,g=c.directiveEnd,d=c.index,f=function jv(){return jt.lFrame.currentDirectiveIndex}();try{po(d);for(let m=l;m<g;m++){const v=r.data[m],b=s[m];Kl(m),(null!==v.hostBindings||0!==v.hostVars||null!==v.hostAttrs)&&Oc(v,b)}}finally{po(-1),Kl(f)}}(r,s,c))}function Mc(r,s,c=Un){const l=s.localNames;if(null!==l){let g=s.index+1;for(let d=0;d<l.length;d+=2){const f=l[d+1],m=-1===f?c(s,r):r[f];r[g++]=m}}}function We(r){const s=r.tView;return null===s||s.incompleteFirstPass?r.tView=Ci(1,null,r.template,r.decls,r.vars,r.directiveDefs,r.pipeDefs,r.viewQuery,r.schemas,r.consts):s}function Ci(r,s,c,l,g,d,f,m,v,b){const P=22+l,k=P+g,I=function wM(r,s){const c=[];for(let l=0;l<s;l++)c.push(l<r?null:Jt);return c}(P,k),z="function"==typeof b?b():b;return I[1]={type:r,blueprint:I,template:c,queries:null,viewQuery:m,declTNode:s,data:I.slice().fill(null,P),bindingStartIndex:P,expandoStartIndex:k,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof d?d():d,pipeRegistry:"function"==typeof f?f():f,firstChild:null,schemas:v,consts:z,incompleteFirstPass:!1}}function $u(r,s,c,l){const g=rg(s);null===c?g.push(l):(g.push(c),r.firstCreatePass&&Vp(r).push(l,g.length-1))}function Wu(r,s,c){for(let l in r)if(r.hasOwnProperty(l)){const g=r[l];(c=null===c?{}:c).hasOwnProperty(l)?c[l].push(s,g):c[l]=[s,g]}return c}function Ku(r,s){const l=s.directiveEnd,g=r.data,d=s.attrs,f=[];let m=null,v=null;for(let b=s.directiveStart;b<l;b++){const P=g[b],k=P.inputs,I=null===d||$f(s)?null:vn(k,d);f.push(I),m=Wu(k,b,m),v=Wu(P.outputs,b,v)}null!==m&&(m.hasOwnProperty("class")&&(s.flags|=16),m.hasOwnProperty("style")&&(s.flags|=32)),s.initialInputs=f,s.inputs=m,s.outputs=v}function xn(r,s,c,l,g,d,f,m){const v=Un(s,c);let P,b=s.inputs;!m&&null!=b&&(P=b[l])?(js(r,c,P,l,g),jl(s)&&Xu(c,s.index)):3&s.type&&(l=function Tp(r){return"class"===r?"className":"for"===r?"htmlFor":"formaction"===r?"formAction":"innerHtml"===r?"innerHTML":"readonly"===r?"readOnly":"tabindex"===r?"tabIndex":r}(l),g=null!=f?f(g,s.value||"",l):g,d.setProperty(v,l,g))}function Xu(r,s){const c=kn(s,r);16&c[2]||(c[2]|=32)}function bc(r,s,c,l){let g=!1;if(Gl()){const d=function Lp(r,s,c){const l=r.directiveRegistry;let g=null;if(l)for(let d=0;d<l.length;d++){const f=l[d];Ns(c,f.selectors,!1)&&(g||(g=[]),Kn(gi(c,s),r,f.type),Gn(f)?(Pc(r,c),g.unshift(f)):g.push(f))}return g}(r,s,c),f=null===l?null:{"":-1};if(null!==d){g=!0,eg(c,r.data.length,d.length);for(let P=0;P<d.length;P++){const k=d[P];k.providersResolver&&k.providersResolver(k)}let m=!1,v=!1,b=to(r,s,d.length,null);for(let P=0;P<d.length;P++){const k=d[P];c.mergedAttrs=ru(c.mergedAttrs,k.hostAttrs),xc(r,c,s,b,k),Fp(b,k,f),null!==k.contentQueries&&(c.flags|=8),(null!==k.hostBindings||null!==k.hostAttrs||0!==k.hostVars)&&(c.flags|=128);const I=k.type.prototype;!m&&(I.ngOnChanges||I.ngOnInit||I.ngDoCheck)&&((r.preOrderHooks||(r.preOrderHooks=[])).push(c.index),m=!0),!v&&(I.ngOnChanges||I.ngDoCheck)&&((r.preOrderCheckHooks||(r.preOrderCheckHooks=[])).push(c.index),v=!0),b++}Ku(r,c)}f&&function Np(r,s,c){if(s){const l=r.localNames=[];for(let g=0;g<s.length;g+=2){const d=c[s[g+1]];if(null==d)throw new Ct(-301,!1);l.push(s[g],d)}}}(c,l,f)}return c.mergedAttrs=ru(c.mergedAttrs,c.attrs),g}function tg(r,s,c,l,g,d){const f=d.hostBindings;if(f){let m=r.hostBindingOpCodes;null===m&&(m=r.hostBindingOpCodes=[]);const v=~s.index;(function kM(r){let s=r.length;for(;s>0;){const c=r[--s];if("number"==typeof c&&c<0)return c}return 0})(m)!=v&&m.push(v),m.push(l,g,f)}}function Oc(r,s){null!==r.hostBindings&&r.hostBindings(1,s)}function Pc(r,s){s.flags|=2,(r.components||(r.components=[])).push(s.index)}function Fp(r,s,c){if(c){if(s.exportAs)for(let l=0;l<s.exportAs.length;l++)c[s.exportAs[l]]=r;Gn(s)&&(c[""]=r)}}function eg(r,s,c){r.flags|=1,r.directiveStart=s,r.directiveEnd=s+c,r.providerIndexes=s}function xc(r,s,c,l,g){r.data[l]=g;const d=g.factory||(g.factory=ho(g.type)),f=new Za(d,Gn(g),xo);r.blueprint[l]=f,c[l]=f,tg(r,s,0,l,to(r,c,g.hostVars,Jt),g)}function wc(r,s,c){const l=Un(s,r),g=We(c),d=r[10],f=Tc(r,_i(r,g,null,c.onPush?32:16,l,s,d,d.createRenderer(l,c),null,null,null));r[s.index]=f}function ii(r,s,c,l,g,d){const f=Un(r,s);!function Dc(r,s,c,l,g,d,f){if(null==d)r.removeAttribute(s,g,c);else{const m=null==f?lt(d):f(d,l||"",g);r.setAttribute(s,g,m,c)}}(s[11],f,d,r.value,c,l,g)}function Rp(r,s,c,l,g,d){const f=d[s];if(null!==f){const m=l.setInput;for(let v=0;v<f.length;){const b=f[v++],P=f[v++],k=f[v++];null!==m?l.setInput(c,k,b,P):c[P]=k}}}function vn(r,s){let c=null,l=0;for(;l<s.length;){const g=s[l];if(0!==g)if(5!==g){if("number"==typeof g)break;r.hasOwnProperty(g)&&(null===c&&(c=[]),c.push(g,r[g],s[l+1])),l+=2}else l+=2;else l+=4}return c}function ng(r,s,c,l){return new Array(r,!0,!1,s,null,0,l,c,null,null)}function kc(r,s){const c=kn(s,r);if(La(c)){const l=c[1];48&c[2]?Us(l,c,l.template,c[8]):c[5]>0&&ig(c)}}function ig(r){for(let l=ec(r);null!==l;l=Ts(l))for(let g=10;g<l.length;g++){const d=l[g];if(La(d))if(512&d[2]){const f=d[1];Us(f,d,f.template,d[8])}else d[5]>0&&ig(d)}const c=r[1].components;if(null!==c)for(let l=0;l<c.length;l++){const g=kn(c[l],r);La(g)&&g[5]>0&&ig(g)}}function og(r,s){const c=kn(s,r),l=c[1];(function Ac(r,s){for(let c=s.length;c<r.blueprint.length;c++)s.push(r.blueprint[c])})(l,c),Cc(l,c,c[8])}function Tc(r,s){return r[13]?r[14][4]=s:r[13]=s,r[14]=s,s}function Vs(r){for(;r;){r[2]|=32;const s=As(r);if(Tv(r)&&!s)return r;r=s}return null}function EM(r){!function TM(r){for(let s=0;s<r.components.length;s++){const c=r.components[s],l=ku(c);if(null!==l){const g=l[1];xM(g,l,g.template,c)}}}(r[8])}function Up(r,s,c){Ah(0),s(r,c)}const SM=(()=>Promise.resolve(null))();function rg(r){return r[7]||(r[7]=[])}function Vp(r){return r.cleanup||(r.cleanup=[])}function Hp(r,s){const c=r[9],l=c?c.get(cr,null):null;l&&l.handleError(s)}function js(r,s,c,l,g){for(let d=0;d<c.length;){const f=c[d++],m=c[d++],v=s[f],b=r.data[f];null!==b.setInput?b.setInput(v,g,l,m):v[m]=g}}function In(r,s,c){const l=Jl(s,r);!function Ze(r,s,c){r.setValue(s,c)}(r[11],l,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ko(r,s,c){let l=c?r.styles:null,g=c?r.classes:null,d=0;if(null!==s)for(let f=0;f<s.length;f++){const m=s[f];"number"==typeof m?d=m:1==d?g=gt(g,m):2==d&&(l=gt(l,m+": "+s[++f]+";"))}c?r.styles=l:r.stylesWithoutHost=l,c?r.classes=g:r.classesWithoutHost=g}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fi(r,s,c,l,g=!1){for(;null!==c;){const d=s[c.index];if(null!==d&&l.push(Te(d)),nn(d))for(let m=10;m<d.length;m++){const v=d[m],b=v[1].firstChild;null!==b&&Fi(v[1],v,b,l)}const f=c.type;if(8&f)Fi(r,s,c.child,l);else if(32&f){const m=Zf(c,s);let v;for(;v=m();)l.push(v)}else if(16&f){const m=XC(s,c);if(Array.isArray(m))l.push(...m);else{const v=As(s[16]);Fi(v[1],v,m,l,!0)}}c=g?c.projectionNext:c.next}return l}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ri{constructor(s,c){this._lView=s,this._cdRefInjectingView=c,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const s=this._lView,c=s[1];return Fi(c,s,c.firstChild,[])}get context(){return this._lView[8]}set context(s){this._lView[8]=s}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const s=this._lView[3];if(nn(s)){const c=s[8],l=c?c.indexOf(this):-1;l>-1&&(Ss(s,l),ja(c,l))}this._attachedToViewContainer=!1}gr(this._lView[1],this._lView)}onDestroy(s){$u(this._lView[1],this._lView,null,s)}markForCheck(){Vs(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){!function Zp(r,s,c){const l=s[10];l.begin&&l.begin();try{Us(r,s,r.template,c)}catch(g){throw Hp(s,g),g}finally{l.end&&l.end()}}(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ct(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function nc(r,s){fr(r,s,s[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(s){if(this._attachedToViewContainer)throw new Ct(902,!1);this._appRef=s}}class sg extends Ri{constructor(s){super(s),this._view=s}detectChanges(){EM(this._view)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ec extends rr{constructor(s){super(),this.ngModule=s}resolveComponentFactory(s){const c=se(s);return new vr(c,this.ngModule)}}function Sc(r){const s=[];for(let c in r)r.hasOwnProperty(c)&&s.push({propName:r[c],templateName:c});return s}class Ic{constructor(s,c){this.injector=s,this.parentInjector=c}get(s,c,l){const g=this.injector.get(s,Wa,l);return g!==Wa||c===Wa?g:this.parentInjector.get(s,c,l)}}class vr extends IC{constructor(s,c){super(),this.componentDef=s,this.ngModule=c,this.componentType=s.type,this.selector=function iM(r){return r.map(tP).join(",")}(s.selectors),this.ngContentSelectors=s.ngContentSelectors?s.ngContentSelectors:[],this.isBoundToModule=!!c}get inputs(){return Sc(this.componentDef.inputs)}get outputs(){return Sc(this.componentDef.outputs)}create(s,c,l,g){let d=(g=g||this.ngModule)instanceof ir?g:g?.injector;d&&null!==this.componentDef.getStandaloneInjector&&(d=this.componentDef.getStandaloneInjector(d)||d);const f=d?new Ic(s,d):s,m=f.get(FC,null);if(null===m)throw new Ct(407,!1);const v=f.get(UC,null),b=m.createRenderer(null,this.componentDef),P=this.componentDef.selectors[0][0]||"div",k=l?function kp(r,s,c){return r.selectRootElement(s,c===ze.ShadowDom)}(b,l,this.componentDef.encapsulation):Es(m.createRenderer(null,this.componentDef),P,function Bp(r){const s=r.toLowerCase();return"svg"===s?"svg":"math"===s?"math":null}(P)),I=this.componentDef.onPush?288:272,z=function bP(r,s){return{components:[],scheduler:r||qO,clean:SM,playerHandler:s||null,flags:0}}(),nt=Ci(0,null,null,1,0,null,null,null,null,null),ht=_i(null,nt,z,I,null,null,m,b,v,f,null);let pt,vt;Xl(ht);try{const Tt=function yP(r,s,c,l,g,d){const f=c[1];c[22]=r;const v=_n(f,22,2,"#host",null),b=v.mergedAttrs=s.hostAttrs;null!==b&&(ko(v,b,!0),null!==r&&(ou(g,r,b),null!==v.classes&&Zu(g,r,v.classes),null!==v.styles&&Ls(g,r,v.styles)));const P=l.createRenderer(r,s),k=_i(c,We(s),null,s.onPush?32:16,c[22],v,l,P,d||null,null,null);return f.firstCreatePass&&(Kn(gi(v,c),f,s.type),Pc(f,v),eg(v,c.length,1)),Tc(c,k),c[22]=k}(k,this.componentDef,ht,m,b);if(k)if(l)ou(b,k,["ng-version",VC.full]);else{const{attrs:dt,classes:Et}=function lc(r){const s=[],c=[];let l=1,g=2;for(;l<r.length;){let d=r[l];if("string"==typeof d)2===g?""!==d&&s.push(d,r[++l]):8===g&&c.push(d);else{if(!ei(g))break;g=d}l++}return{attrs:s,classes:c}}(this.componentDef.selectors[0]);dt&&ou(b,k,dt),Et&&Et.length>0&&Zu(b,k,Et.join(" "))}if(vt=Wr(nt,22),void 0!==c){const dt=vt.projection=[];for(let Et=0;Et<this.ngContentSelectors.length;Et++){const Xt=c[Et];dt.push(null!=Xt?Array.from(Xt):null)}}pt=function LM(r,s,c,l,g){const d=c[1],f=function Ep(r,s,c){const l=Ne();r.firstCreatePass&&(c.providersResolver&&c.providersResolver(c),xc(r,l,s,to(r,s,1,null),c),Ku(r,l));const g=as(s,r,l.directiveStart,l);on(g,s);const d=Un(l,s);return d&&on(d,s),g}(d,c,s);if(l.components.push(f),r[8]=f,null!==g)for(const v of g)v(f,s);if(s.contentQueries){const v=Ne();s.contentQueries(1,f,v.directiveStart)}const m=Ne();return!d.firstCreatePass||null===s.hostBindings&&null===s.hostAttrs||(po(m.index),tg(c[1],m,0,m.directiveStart,m.directiveEnd,s),Oc(s,f)),f}(Tt,this.componentDef,ht,z,[Lc]),Cc(nt,ht,null)}finally{Na()}return new ag(this.componentType,pt,ar(vt,ht),ht,vt)}}class ag extends class AO{}{constructor(s,c,l,g,d){super(),this.location=l,this._rootLView=g,this._tNode=d,this.instance=c,this.hostView=this.changeDetectorRef=new sg(g),this.componentType=s}setInput(s,c){const l=this._tNode.inputs;let g;if(null!==l&&(g=l[s])){const d=this._rootLView;js(d[1],d,g,s,c),Xu(d,this._tNode.index)}}get injector(){return new vo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(s){this.hostView.onDestroy(s)}}function Lc(){const r=Ne();Wn(ut()[1],r)}function Cr(r){let s=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Hs(r){return Object.getPrototypeOf(r.prototype).constructor}(r.type),c=!0;const l=[r];for(;s;){let g;if(Gn(r))g=s.\u0275cmp||s.\u0275dir;else{if(s.\u0275cmp)throw new Ct(903,!1);g=s.\u0275dir}if(g){if(c){l.push(g);const f=r;f.inputs=Bs(r.inputs),f.declaredInputs=Bs(r.declaredInputs),f.outputs=Bs(r.outputs);const m=g.hostBindings;m&&RM(r,m);const v=g.viewQuery,b=g.contentQueries;if(v&&Fc(r,v),b&&FM(r,b),V(r.inputs,g.inputs),V(r.declaredInputs,g.declaredInputs),V(r.outputs,g.outputs),Gn(g)&&g.data.animation){const P=r.data;P.animation=(P.animation||[]).concat(g.data.animation)}}const d=g.features;if(d)for(let f=0;f<d.length;f++){const m=d[f];m&&m.ngInherit&&m(r),m===Cr&&(c=!1)}}s=Object.getPrototypeOf(s)}!function NM(r){let s=0,c=null;for(let l=r.length-1;l>=0;l--){const g=r[l];g.hostVars=s+=g.hostVars,g.hostAttrs=ru(g.hostAttrs,c=ru(c,g.hostAttrs))}}(l)}function Bs(r){return r===_e?{}:r===re?[]:r}function Fc(r,s){const c=r.viewQuery;r.viewQuery=c?(l,g)=>{s(l,g),c(l,g)}:s}function FM(r,s){const c=r.contentQueries;r.contentQueries=c?(l,g,d)=>{s(l,g,d),c(l,g,d)}:s}function RM(r,s){const c=r.hostBindings;r.hostBindings=c?(l,g)=>{s(l,g),c(l,g)}:s}
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
let Rc=null;function Mr(){if(!Rc){const r=me.Symbol;if(r&&r.iterator)Rc=r.iterator;else{const s=Object.getOwnPropertyNames(Map.prototype);for(let c=0;c<s.length;++c){const l=s[c];"entries"!==l&&"size"!==l&&Map.prototype[l]===Map.prototype.entries&&(Rc=l)}}}return Rc}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yr(r){return!!lg(r)&&(Array.isArray(r)||!(r instanceof Map)&&Mr()in r)}function lg(r){return null!==r&&("function"==typeof r||"object"==typeof r)}
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
function Hn(r,s,c){return r[s]=c}function qs(r,s){return r[s]}function Cn(r,s,c){return!Object.is(r[s],c)&&(r[s]=c,!0)}function Ao(r,s,c,l){const g=Cn(r,s,c);return Cn(r,s+1,l)||g}function wn(r,s,c,l,g,d){const f=Ao(r,s,c,l);return Ao(r,s+2,g,d)||f}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zc(r,s,c,l){const g=ut();return Cn(g,fo(),s)&&(te(),ii(ye(),g,r,s,c,l)),Zc}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Eo(r,s,c,l){return Cn(r,fo(),c)?s+lt(c)+l:Jt}function Js(r,s,c,l,g,d){const m=Ao(r,function ki(){return jt.lFrame.bindingIndex}(),c,g);return Ai(2),m?s+lt(c)+l+lt(g)+d:Jt}function dg(r,s,c,l,g,d,f,m){const v=ut(),b=te(),P=r+22,k=b.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function UM(r,s,c,l,g,d,f,m,v){const b=s.consts,P=_n(s,r,4,f||null,qi(b,m));bc(s,c,P,qi(b,v)),Wn(s,P);const k=P.tViews=Ci(2,P,l,g,d,s.directiveRegistry,s.pipeRegistry,null,s.schemas,b);return null!==s.queries&&(s.queries.template(s,P),k.queries=s.queries.embeddedTView(P)),P}(P,b,v,s,c,l,g,d,f):b.data[P];$n(k,!1);const I=v[11].createComment("");ke(b,v,I,k),on(I,v),Tc(v,v[P]=ng(I,v,I,k)),Yr(k)&&vi(b,v,k),null!=f&&Mc(v,k,m)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hg(r){return ui(function Rv(){return jt.lFrame.contextLView}(),22+r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Uc(r,s,c){const l=ut();return Cn(l,fo(),s)&&xn(te(),ye(),l,r,s,l[11],c,!1),Uc}function fg(r,s,c,l,g){const f=g?"class":"style";js(r,c,s.inputs[f],f,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vc(r,s,c,l){const g=ut(),d=te(),f=22+r,m=g[11],v=g[f]=Es(m,s,function Ob(){return jt.lFrame.currentNamespace}()),b=d.firstCreatePass?function tm(r,s,c,l,g,d,f){const m=s.consts,b=_n(s,r,2,g,qi(m,d));return bc(s,c,b,qi(m,f)),null!==b.attrs&&ko(b,b.attrs,!1),null!==b.mergedAttrs&&ko(b,b.mergedAttrs,!0),null!==s.queries&&s.queries.elementStart(s,b),b}(f,d,g,0,s,c,l):d.data[f];$n(b,!0);const P=b.mergedAttrs;null!==P&&ou(m,v,P);const k=b.classes;null!==k&&Zu(m,v,k);const I=b.styles;return null!==I&&Ls(m,v,I),64!=(64&b.flags)&&ke(d,g,v,b),0===function yh(){return jt.lFrame.elementDepthCount}()&&on(v,g),function bh(){jt.lFrame.elementDepthCount++}(),Yr(b)&&(vi(d,g,b),Dp(d,b,g)),null!==l&&Mc(g,b),Vc}function Pr(){let r=Ne();wh()?es():(r=r.parent,$n(r,!1));const s=r;!function ts(){jt.lFrame.elementDepthCount--}();const c=te();return c.firstCreatePass&&(Wn(c,r),Bi(r)&&c.queries.elementEnd(r)),null!=s.classesWithoutHost&&function wb(r){return 0!=(16&r.flags)}(s)&&fg(c,s,ut(),s.classesWithoutHost,!0),null!=s.stylesWithoutHost&&function Db(r){return 0!=(32&r.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)&&fg(c,s,ut(),s.stylesWithoutHost,!1),Pr}function pg(r,s,c,l){return Vc(r,s,c,l),Pr(),pg
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function jc(r,s,c){const l=ut(),g=te(),d=r+22,f=g.firstCreatePass?function mg(r,s,c,l,g){const d=s.consts,f=qi(d,l),m=_n(s,r,8,"ng-container",f);return null!==f&&ko(m,f,!0),bc(s,c,m,qi(d,g)),null!==s.queries&&s.queries.elementStart(s,m),m}(d,g,l,s,c):g.data[d];$n(f,!0);const m=l[d]=l[11].createComment("");return ke(g,l,m,f),on(m,l),Yr(f)&&(vi(g,l,f),Dp(g,f,l)),null!=c&&Mc(l,f),jc}function xr(){let r=Ne();const s=te();return wh()?es():(r=r.parent,$n(r,!1)),s.firstCreatePass&&(Wn(s,r),Bi(r)&&s.queries.elementEnd(r)),xr}function em(){return ut()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hc(r){return!!r&&"function"==typeof r.then}function nm(r){return!!r&&"function"==typeof r.subscribe}const vg=nm;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cg(r,s,c,l){const g=ut(),d=te(),f=Ne();return function im(r,s,c,l,g,d,f,m){const v=Yr(l),P=r.firstCreatePass&&Vp(r),k=s[8],I=rg(s);let z=!0;if(3&l.type||m){const pt=Un(l,s),vt=m?m(pt):pt,Tt=I.length,dt=m?Xt=>m(Te(Xt[l.index])):l.index;let Et=null;if(!m&&v&&(Et=function Bc(r,s,c,l){const g=r.cleanup;if(null!=g)for(let d=0;d<g.length-1;d+=2){const f=g[d];if(f===c&&g[d+1]===l){const m=s[7],v=g[d+2];return m.length>v?m[v]:null}"string"==typeof f&&(d+=2)}return null}(r,s,g,l.index)),null!==Et)(Et.__ngLastListenerFn__||Et).__ngNextListenerFn__=d,Et.__ngLastListenerFn__=d,z=!1;else{d=om(l,s,k,d,!1);const Xt=c.listen(vt,g,d);I.push(d,Xt),P&&P.push(g,dt,Tt,Tt+1)}}else d=om(l,s,k,d,!1);const nt=l.outputs;let ht;if(z&&null!==nt&&(ht=nt[g])){const pt=ht.length;if(pt)for(let vt=0;vt<pt;vt+=2){const ve=s[ht[vt]][ht[vt+1]].subscribe(d),Bo=I.length;I.push(d,ve),P&&P.push(g,l.index,Bo,-(Bo+1))}}}(d,g,g[11],f,r,s,0,l),Cg}function Mg(r,s,c,l){try{return!1!==c(l)}catch(g){return Hp(r,g),!1}}function om(r,s,c,l,g){return function d(f){if(f===Function)return l;Vs(2&r.flags?kn(r.index,s):s);let v=Mg(s,0,l,f),b=d.__ngNextListenerFn__;for(;b;)v=Mg(s,0,b,f)&&v,b=b.__ngNextListenerFn__;return g&&!1===v&&(f.preventDefault(),f.returnValue=!1),v}}
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
       */function jM(r=1){return function qv(r){return(jt.lFrame.contextLView=function yb(r,s){for(;r>0;)s=s[15],r--;return s}(r,jt.lFrame.contextLView))[8]}(r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jc(r,s,c){return Mi(r,"",s,"",c),Jc}function Mi(r,s,c,l,g){const d=ut(),f=Eo(d,s,c,l);return f!==Jt&&xn(te(),ye(),d,r,f,d[11],g,!1),Mi}function xg(r,s,c,l,g){const d=r[c+1],f=null===s;let m=l?ni(d):Ki(d),v=!1;for(;0!==m&&(!1===v||f);){const P=r[m+1];BM(r[m],s)&&(v=!0,r[m+1]=l?dp(P):rn(P)),m=l?ni(P):Ki(P)}v&&(r[c+1]=l?rn(d):dp(d))}function BM(r,s){return null===r||null==s||(Array.isArray(r)?r[1]:r)===s||!(!Array.isArray(r)||"string"!=typeof s)&&ds(r,s)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Se={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function gm(r){return r.substring(Se.key,Se.keyEnd)}function qM(r,s){const c=Se.textEnd;return c===s?-1:(s=Se.keyEnd=function JM(r,s,c){for(;s<c&&r.charCodeAt(s)>32;)s++;return s}(r,Se.key=s,c),Ws(r,s,c))}function Ws(r,s,c){for(;s<c&&r.charCodeAt(s)<=32;)s++;return s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pm(r,s,c){return Bn(r,s,c,!1),pm}function mm(r,s){return Bn(r,s,null,!0),mm}function Ln(r,s){for(let c=function DP(r){return function fm(r){Se.key=0,Se.keyEnd=0,Se.value=0,Se.valueEnd=0,Se.textEnd=r.length}(r),qM(r,Ws(r,0,Se.textEnd))}(s);c>=0;c=qM(s,c))hn(r,gm(s),!0)}function Bn(r,s,c,l){const g=ut(),d=te(),f=Ai(2);d.firstUpdatePass&&no(d,r,f,l),s!==Jt&&Cn(g,f,s)&&Io(d,d.data[gn()],g,g[11],r,g[f+1]=function bi(r,s){return null==r||("string"==typeof s?r+=s:"object"==typeof r&&(r=U(Gi(r)))),r}(s,c),l,f)}function Zi(r,s){return s>=r.expandoStartIndex}function no(r,s,c,l){const g=r.data;if(null===g[c+1]){const d=g[gn()],f=Zi(r,c);kg(d,l)&&null===s&&!f&&(s=!1),s=function io(r,s,c,l){const g=function is(r){const s=jt.lFrame.currentDirectiveIndex;return-1===s?null:r[s]}(r);let d=l?s.residualClasses:s.residualStyles;if(null===g)0===(l?s.classBindings:s.styleBindings)&&(c=Ks(c=Gc(null,r,s,c,l),s.attrs,l),d=null);else{const f=s.directiveStylingLast;if(-1===f||r[f]!==g)if(c=Gc(g,r,s,c,l),null===d){let v=function YM(r,s,c){const l=c?s.classBindings:s.styleBindings;if(0!==Ki(l))return r[ni(l)]}(r,s,l);void 0!==v&&Array.isArray(v)&&(v=Gc(null,r,s,v[1],l),v=Ks(v,s.attrs,l),function _m(r,s,c,l){r[ni(c?s.classBindings:s.styleBindings)]=l}(r,s,l,v))}else d=function wg(r,s,c){let l;const g=s.directiveEnd;for(let d=1+s.directiveStylingLast;d<g;d++)l=Ks(l,r[d].hostAttrs,c);return Ks(l,s.attrs,c)}(r,s,l)}return void 0!==d&&(l?s.residualClasses=d:s.residualStyles=d),c}(g,d,s,l),function um(r,s,c,l,g,d){let f=d?s.classBindings:s.styleBindings,m=ni(f),v=Ki(f);r[l]=c;let P,b=!1;if(Array.isArray(c)){const k=c;P=k[1],(null===P||ds(k,P)>0)&&(b=!0)}else P=c;if(g)if(0!==v){const I=ni(r[m+1]);r[l+1]=Fs(I,m),0!==I&&(r[I+1]=qu(r[I+1],l)),r[m+1]=function vM(r,s){return 131071&r|s<<17}(r[m+1],l)}else r[l+1]=Fs(m,0),0!==m&&(r[m+1]=qu(r[m+1],l)),m=l;else r[l+1]=Fs(v,0),0===m?m=l:r[v+1]=qu(r[v+1],l),v=l;b&&(r[l+1]=rn(r[l+1])),xg(r,P,l,!0),xg(r,P,l,!1),function HM(r,s,c,l,g){const d=g?r.residualClasses:r.residualStyles;null!=d&&"string"==typeof s&&ds(d,s)>=0&&(c[l+1]=dp(c[l+1]))}(s,P,r,l,d),f=Fs(m,v),d?s.classBindings=f:s.styleBindings=f}(g,d,s,c,f,l)}}function Gc(r,s,c,l,g){let d=null;const f=c.directiveEnd;let m=c.directiveStylingLast;for(-1===m?m=c.directiveStart:m++;m<f&&(d=s[m],l=Ks(l,d.hostAttrs,g),d!==r);)m++;return null!==r&&(c.directiveStylingLast=m),l}function Ks(r,s,c){const l=c?1:2;let g=-1;if(null!==s)for(let d=0;d<s.length;d++){const f=s[d];"number"==typeof f?g=f:g===l&&(Array.isArray(r)||(r=void 0===r?[]:["",r]),hn(r,f,!!c||s[++d]))}return void 0===r?null:r}function Io(r,s,c,l,g,d,f,m){if(!(3&s.type))return;const v=r.data,b=v[m+1];Yc(function CM(r){return 1==(1&r)}(b)?vm(v,s,c,g,Ki(b),f):void 0)||(Yc(d)||function gp(r){return 2==(2&r)}(b)&&(d=vm(v,null,c,g,m,f)),function eM(r,s,c,l,g){if(s)g?r.addClass(c,l):r.removeClass(c,l);else{let d=-1===l.indexOf("-")?void 0:pi.DashCase;null==g?r.removeStyle(c,l,d):("string"==typeof g&&g.endsWith("!important")&&(g=g.slice(0,-10),d|=pi.Important),r.setStyle(c,l,g,d))}}(l,f,Jl(gn(),c),g,d))}function vm(r,s,c,l,g,d){const f=null===s;let m;for(;g>0;){const v=r[g],b=Array.isArray(v),P=b?v[1]:v,k=null===P;let I=c[g+1];I===Jt&&(I=k?re:void 0);let z=k?Vn(I,l):P===l?I:void 0;if(b&&!Yc(z)&&(z=Vn(v,l)),Yc(z)&&(m=z,f))return m;const nt=r[g+1];g=f?ni(nt):Ki(nt)}if(null!==s){let v=d?s.residualClasses:s.residualStyles;null!=v&&(m=Vn(v,l))}return m}function Yc(r){return void 0!==r}function kg(r,s){return 0!=(r.flags&(s?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ag(r,s=""){const c=ut(),l=te(),g=r+22,d=l.firstCreatePass?_n(l,g,1,s,null):l.data[g],f=c[g]=function bo(r,s){return r.createText(s)}(c[11],s);ke(l,c,f,d),$n(d,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $c(r){return Tg("",r,""),$c}function Tg(r,s,c){const l=ut(),g=Eo(l,r,s,c);return g!==Jt&&In(l,gn(),g),Tg}function Ue(r,s,c,l,g){const d=ut(),f=Js(d,r,s,c,l,g);return f!==Jt&&In(d,gn(),f),Ue}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ig(r,s,c){!function oi(r,s,c,l){const g=te(),d=Ai(2);g.firstUpdatePass&&no(g,null,d,l);const f=ut();if(c!==Jt&&Cn(f,d,c)){const m=g.data[gn()];if(kg(m,l)&&!Zi(g,d)){let v=l?m.classesWithoutHost:m.stylesWithoutHost;null!==v&&(c=gt(v,c||"")),fg(g,m,f,c,l)}else!function $M(r,s,c,l,g,d,f,m){g===Jt&&(g=re);let v=0,b=0,P=0<g.length?g[0]:null,k=0<d.length?d[0]:null;for(;null!==P||null!==k;){const I=v<g.length?g[v+1]:void 0,z=b<d.length?d[b+1]:void 0;let ht,nt=null;P===k?(v+=2,b+=2,I!==z&&(nt=k,ht=z)):null===k||null!==P&&P<k?(v+=2,nt=P):(b+=2,nt=k,ht=z),null!==nt&&Io(r,s,c,l,nt,ht,f,m),P=v<g.length?g[v]:null,k=b<d.length?d[b]:null}}(g,m,f,f[11],f[d+1],f[d+1]=function Dg(r,s,c){if(null==c||""===c)return re;const l=[],g=Gi(c);if(Array.isArray(g))for(let d=0;d<g.length;d++)r(l,g[d],!0);else if("object"==typeof g)for(const d in g)g.hasOwnProperty(d)&&r(l,d,g[d]);else"string"==typeof g&&s(l,g);return l}(r,s,c),l,d)}}(hn,Ln,Eo(ut(),r,s,c),!0)}
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
const Fo=void 0;var ny=["en",[["a","p"],["AM","PM"],Fo],[["AM","PM"],Fo,Fo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Fo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Fo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Fo,"{1} 'at' {0}",Fo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function ey(r){const c=Math.floor(Math.abs(r)),l=r.toString().replace(/^[^.]*\.?/,"").length;return 1===c&&0===l?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let oo={};function Zg(r){const s=function oy(r){return r.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r);let c=iy(s);if(c)return c;const l=s.split("-")[0];if(c=iy(l),c)return c;if("en"===l)return ny;throw new Ct(701,!1)}function nl(r){return Zg(r)[It.PluralCase]}function iy(r){return r in oo||(oo[r]=me.ng&&me.ng.common&&me.ng.common.locales&&me.ng.common.locales[r]),oo[r]}var It=(()=>((It=It||{})[It.LocaleId=0]="LocaleId",It[It.DayPeriodsFormat=1]="DayPeriodsFormat",It[It.DayPeriodsStandalone=2]="DayPeriodsStandalone",It[It.DaysFormat=3]="DaysFormat",It[It.DaysStandalone=4]="DaysStandalone",It[It.MonthsFormat=5]="MonthsFormat",It[It.MonthsStandalone=6]="MonthsStandalone",It[It.Eras=7]="Eras",It[It.FirstDayOfWeek=8]="FirstDayOfWeek",It[It.WeekendRange=9]="WeekendRange",It[It.DateFormat=10]="DateFormat",It[It.TimeFormat=11]="TimeFormat",It[It.DateTimeFormat=12]="DateTimeFormat",It[It.NumberSymbols=13]="NumberSymbols",It[It.NumberFormats=14]="NumberFormats",It[It.CurrencyCode=15]="CurrencyCode",It[It.CurrencySymbol=16]="CurrencySymbol",It[It.CurrencyName=17]="CurrencyName",It[It.Currencies=18]="Currencies",It[It.Directionality=19]="Directionality",It[It.PluralCase=20]="PluralCase",It[It.ExtraData=21]="ExtraData",It))();const ri="en-US";
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
let Im=ri;function Xg(r,s,c,l,g){if(r=K(r),Array.isArray(r))for(let d=0;d<r.length;d++)Xg(r[d],s,c,l,g);else{const d=te(),f=ut();let m=nr(r)?r:K(r.provide),v=SC(r);const b=Ne(),P=1048575&b.providerIndexes,k=b.directiveStart,I=b.providerIndexes>>20;if(nr(r)||!r.multi){const z=new Za(v,g,xo),nt=td(m,s,g?P:P+I,k);-1===nt?(Kn(gi(b,f),d,m),Zo(d,r,s.length),s.push(m),b.directiveStart++,b.directiveEnd++,g&&(b.providerIndexes+=1048576),c.push(z),f.push(z)):(c[nt]=z,f[nt]=z)}else{const z=td(m,s,P+I,k),nt=td(m,s,P,P+I),ht=z>=0&&c[z],pt=nt>=0&&c[nt];if(g&&!pt||!g&&!ht){Kn(gi(b,f),d,m);const vt=function ky(r,s,c,l,g){const d=new Za(r,c,xo);return d.multi=[],d.index=s,d.componentProviders=0,Sr(d,g,l&&!c),d}(g?Dy:wy,c.length,g,l,v);!g&&pt&&(c[nt].providerFactory=vt),Zo(d,r,s.length,0),s.push(m),b.directiveStart++,b.directiveEnd++,g&&(b.providerIndexes+=1048576),c.push(vt),f.push(vt)}else Zo(d,r,z>-1?z:nt,Sr(c[g?nt:z],v,!g&&l));!g&&l&&pt&&c[nt].componentProviders++}}}function Zo(r,s,c,l){const g=nr(s),d=function yO(r){return!!r.useClass}(s);if(g||d){const v=(d?K(s.useClass):s).prototype.ngOnDestroy;if(v){const b=r.destroyHooks||(r.destroyHooks=[]);if(!g&&s.multi){const P=b.indexOf(c);-1===P?b.push(c,[l,v]):b[P+1].push(l,v)}else b.push(c,v)}}}function Sr(r,s,c){return c&&r.componentProviders++,r.multi.push(s)-1}function td(r,s,c,l){for(let g=c;g<l;g++)if(s[g]===r)return g;return-1}function wy(r,s,c,l){return ed(this.multi,[])}function Dy(r,s,c,l){const g=this.multi;let d;if(this.providerFactory){const f=this.providerFactory.componentProviders,m=as(c,c[1],this.providerFactory.index,l);d=m.slice(0,f),ed(g,d);for(let v=f;v<m.length;v++)d.push(m[v])}else d=[],ed(g,d);return d}function ed(r,s){for(let c=0;c<r.length;c++)s.push((0,r[c])());return s}function t_(r,s=[]){return c=>{c.providersResolver=(l,g)=>
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
function xy(r,s,c){const l=te();if(l.firstCreatePass){const g=Gn(r);Xg(c,l.data,l.blueprint,g,!0),Xg(s,l.data,l.blueprint,g,!1)}}(l,g?g(r):r,s)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fa{}class e_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nd(r,s){return new Uo(r,s??null)}class Uo extends fa{constructor(s,c){super(),this._parent=c,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Ec(this);const l=tn(s);this._bootstrapComponents=fi(l.bootstrap),this._r3Injector=np(s,c,[{provide:fa,useValue:this},{provide:rr,useValue:this.componentFactoryResolver}],U(s),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(s)}get injector(){return this._r3Injector}destroy(){const s=this._r3Injector;!s.destroyed&&s.destroy(),this.destroyCbs.forEach(c=>c()),this.destroyCbs=null}onDestroy(s){this.destroyCbs.push(s)}}class od extends e_{constructor(s){super(),this.moduleType=s}create(s){return new Uo(this.moduleType,s)}}class Ay extends fa{constructor(s,c,l){super(),this.componentFactoryResolver=new Ec(this),this.instance=null;const g=new EC([...s,{provide:fa,useValue:this},{provide:rr,useValue:this.componentFactoryResolver}],c||bu(),l,new Set(["environment"]));this.injector=g,g.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(s){this.injector.onDestroy(s)}}function rd(r,s,c=null){return new Ay(r,s,c).injector}
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
function ma(r,s,c){const l=un()+r,g=ut();return g[l]===Jt?Hn(g,l,c?s.call(c):s()):qs(g,l)}function gd(r,s,c,l){return g_(ut(),un(),r,s,c,l)}function Ir(r,s,c,l,g){return d_(ut(),un(),r,s,c,l,g)}function dd(r,s,c,l,g,d){return h_(ut(),un(),r,s,c,l,g,d)}function c_(r,s,c,l,g,d,f){return function f_(r,s,c,l,g,d,f,m,v){const b=s+c;return wn(r,b,g,d,f,m)?Hn(r,b+4,v?l.call(v,g,d,f,m):l(g,d,f,m)):_a(r,b+4)}(ut(),un(),r,s,c,l,g,d,f)}function l_(r,s,c,l,g,d,f,m){const v=un()+r,b=ut(),P=wn(b,v,c,l,g,d);return Cn(b,v+4,f)||P?Hn(b,v+5,m?s.call(m,c,l,g,d,f):s(c,l,g,d,f)):qs(b,v+5)}function u_(r,s,c,l,g,d,f,m,v){const b=un()+r,P=ut(),k=wn(P,b,c,l,g,d);return Ao(P,b+4,f,m)||k?Hn(P,b+6,v?s.call(v,c,l,g,d,f,m):s(c,l,g,d,f,m)):qs(P,b+6)}function _a(r,s){const c=r[s];return c===Jt?void 0:c}function g_(r,s,c,l,g,d){const f=s+c;return Cn(r,f,g)?Hn(r,f+1,d?l.call(d,g):l(g)):_a(r,f+1)}function d_(r,s,c,l,g,d,f){const m=s+c;return Ao(r,m,g,d)?Hn(r,m+2,f?l.call(f,g,d):l(g,d)):_a(r,m+2)}function h_(r,s,c,l,g,d,f,m){const v=s+c;return function eo(r,s,c,l,g){const d=Ao(r,s,c,l);return Cn(r,s+2,g)||d}(r,v,g,d,f)?Hn(r,v+3,m?l.call(m,g,d,f):l(g,d,f)):_a(r,v+3)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function m_(r,s){const c=te();let l;const g=r+22;c.firstCreatePass?(l=function __(r,s){if(s)for(let c=s.length-1;c>=0;c--){const l=s[c];if(r===l.name)return l}}(s,c.pipeRegistry),c.data[g]=l,l.onDestroy&&(c.destroyHooks||(c.destroyHooks=[])).push(g,l.onDestroy)):l=c.data[g];const d=l.factory||(l.factory=ho(l.type)),f=Ke(xo);try{const m=ss(!1),v=d();return ss(m),function VM(r,s,c,l){c>=r.data.length&&(r.data[c]=null,r.blueprint[c]=null),s[c]=l}(c,ut(),g,v),v}finally{Ke(f)}}function hd(r,s,c){const l=r+22,g=ut(),d=ui(g,l);return va(g,l)?g_(g,un(),s,d.transform,c,d):d.transform(c)}function fd(r,s,c,l){const g=r+22,d=ut(),f=ui(d,g);return va(d,g)?d_(d,un(),s,f.transform,c,l,f):f.transform(c,l)}function pd(r,s,c,l,g){const d=r+22,f=ut(),m=ui(f,d);return va(f,d)?h_(f,un(),s,m.transform,c,l,g,m):m.transform(c,l,g)}function va(r,s){return r[1].data[s].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _d(r){return s=>{setTimeout(r,void 0,s)}}const Pi=class md extends t.x{constructor(s=!1){super(),this.__isAsync=s}emit(s){super.next(s)}subscribe(s,c,l){let g=s,d=c||(()=>null),f=l;if(s&&"object"==typeof s){const v=s;g=v.next?.bind(v),d=v.error?.bind(v),f=v.complete?.bind(v)}this.__isAsync&&(d=_d(d),g&&(g=_d(g)),f&&(f=_d(f)));const m=super.subscribe({next:g,error:d,complete:f});return s instanceof R.w0&&s.add(m),m}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zy(){return this._results[Mr()]()}class vd{constructor(s=!1){this._emitDistinctChangesOnly=s,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const c=Mr(),l=vd.prototype;l[c]||(l[c]=Zy)}get changes(){return this._changes||(this._changes=new Pi)}get(s){return this._results[s]}map(s){return this._results.map(s)}filter(s){return this._results.filter(s)}find(s){return this._results.find(s)}reduce(s,c){return this._results.reduce(s,c)}forEach(s){this._results.forEach(s)}some(s){return this._results.some(s)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(s,c){const l=this;l.dirty=!1;const g=Tn(s);(this._changesDetected=!function us(r,s,c){if(r.length!==s.length)return!1;for(let l=0;l<r.length;l++){let g=r[l],d=s[l];if(c&&(g=c(g),d=c(d)),d!==g)return!1}return!0}(l._results,g,c))&&(l._results=g,l.length=g.length,l.last=g[this.length-1],l.first=g[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ca=(()=>{class r{}return r.__NG_ELEMENT_ID__=y_,r})();const M_=Ca,Cd=class extends M_{constructor(s,c,l){super(),this._declarationLView=s,this._declarationTContainer=c,this.elementRef=l}createEmbeddedView(s,c){const l=this._declarationTContainer.tViews,g=_i(this._declarationLView,l,s,16,null,l.declTNode,null,null,null,null,c||null);g[17]=this._declarationLView[this._declarationTContainer.index];const f=this._declarationLView[19];return null!==f&&(g[19]=f.createEmbeddedView(l)),Cc(l,g,s),new Ri(g)}};function y_(){return Ma(Ne(),ut())}function Ma(r,s){return 4&r.type?new Cd(s,r,ar(r,s)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Md=(()=>{class r{}return r.__NG_ELEMENT_ID__=Uy,r})();function Uy(){return yd(Ne(),ut())}const Vy=Md,b_=class extends Vy{constructor(s,c,l){super(),this._lContainer=s,this._hostTNode=c,this._hostLView=l}get element(){return ar(this._hostTNode,this._hostLView)}get injector(){return new vo(this._hostTNode,this._hostLView)}get parentInjector(){const s=qe(this._hostTNode,this._hostLView);if(su(s)){const c=rs(s,this._hostLView),l=Qo(s);return new vo(c[1].data[l+8],c)}return new vo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(s){const c=O_(this._lContainer);return null!==c&&c[s]||null}get length(){return this._lContainer.length-10}createEmbeddedView(s,c,l){let g,d;"number"==typeof l?g=l:null!=l&&(g=l.index,d=l.injector);const f=s.createEmbeddedView(c||{},d);return this.insert(f,g),f}createComponent(s,c,l,g,d){const f=s&&!function ls(r){return"function"==typeof r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s);let m;if(f)m=c;else{const k=c||{};m=k.index,l=k.injector,g=k.projectableNodes,d=k.environmentInjector||k.ngModuleRef}const v=f?s:new vr(se(s)),b=l||this.parentInjector;if(!d&&null==v.ngModule){const I=(f?b:this.parentInjector).get(ir,null);I&&(d=I)}const P=v.create(b,g,void 0,d);return this.insert(P.hostView,m),P}insert(s,c){const l=s._lView,g=l[1];if(function Ch(r){return nn(r[3])}(l)){const P=this.indexOf(s);if(-1!==P)this.detach(P);else{const k=l[3],I=new b_(k,k[6],k[3]);I.detach(I.indexOf(s))}}const d=this._adjustIndex(c),f=this._lContainer;!function WC(r,s,c,l){const g=10+l,d=c.length;l>0&&(c[g-1][4]=s),l<d-10?(s[4]=c[g],be(c,10+l,s)):(c.push(s),s[4]=null),s[3]=c;const f=s[17];null!==f&&c!==f&&function Tu(r,s){const c=r[9];s[16]!==s[3][3][16]&&(r[2]=!0),null===c?r[9]=[s]:c.push(s)}(f,s);const m=s[19];null!==m&&m.insertView(r),s[2]|=64}(g,l,f,d);const m=Oo(d,f),v=l[11],b=dr(v,f[7]);return null!==b&&function jf(r,s,c,l,g,d){l[0]=g,l[6]=s,fr(r,l,c,1,g,d)}(g,f[6],v,l,b,m),s.attachToViewContainerRef(),be(ya(f),d,s),s}move(s,c){return this.insert(s,c)}indexOf(s){const c=O_(this._lContainer);return null!==c?c.indexOf(s):-1}remove(s){const c=this._adjustIndex(s,-1),l=Ss(this._lContainer,c);l&&(ja(ya(this._lContainer),c),gr(l[1],l))}detach(s){const c=this._adjustIndex(s,-1),l=Ss(this._lContainer,c);return l&&null!=ja(ya(this._lContainer),c)?new Ri(l):null}_adjustIndex(s,c=0){return s??this.length+c}};function O_(r){return r[8]}function ya(r){return r[8]||(r[8]=[])}function yd(r,s){let c;const l=s[r.index];if(nn(l))c=l;else{let g;if(8&r.type)g=Te(l);else{const d=s[11];g=d.createComment("");const f=Un(r,s);$i(d,dr(d,f),g,function KC(r,s){return r.nextSibling(s)}(d,f),!1)}s[r.index]=c=ng(l,s,g,r),Tc(s,c)}return new b_(c,r,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Pd{constructor(s){this.queryList=s,this.matches=null}clone(){return new Pd(this.queryList)}setDirty(){this.queryList.setDirty()}}class Lr{constructor(s=[]){this.queries=s}createEmbeddedView(s){const c=s.queries;if(null!==c){const l=null!==s.contentQueries?s.contentQueries[0]:c.length,g=[];for(let d=0;d<l;d++){const f=c.getByIndex(d);g.push(this.queries[f.indexInDeclarationView].clone())}return new Lr(g)}return null}insertView(s){this.dirtyQueriesWithMatches(s)}detachView(s){this.dirtyQueriesWithMatches(s)}dirtyQueriesWithMatches(s){for(let c=0;c<this.queries.length;c++)null!==Dd(s,c).matches&&this.queries[c].setDirty()}}class P_{constructor(s,c,l=null){this.predicate=s,this.flags=c,this.read=l}}class xd{constructor(s=[]){this.queries=s}elementStart(s,c){for(let l=0;l<this.queries.length;l++)this.queries[l].elementStart(s,c)}elementEnd(s){for(let c=0;c<this.queries.length;c++)this.queries[c].elementEnd(s)}embeddedTView(s){let c=null;for(let l=0;l<this.length;l++){const g=null!==c?c.length:0,d=this.getByIndex(l).embeddedTView(s,g);d&&(d.indexInDeclarationView=l,null!==c?c.push(d):c=[d])}return null!==c?new xd(c):null}template(s,c){for(let l=0;l<this.queries.length;l++)this.queries[l].template(s,c)}getByIndex(s){return this.queries[s]}get length(){return this.queries.length}track(s){this.queries.push(s)}}class wd{constructor(s,c=-1){this.metadata=s,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=c}elementStart(s,c){this.isApplyingToNode(c)&&this.matchTNode(s,c)}elementEnd(s){this._declarationNodeIndex===s.index&&(this._appliesToNextNode=!1)}template(s,c){this.elementStart(s,c)}embeddedTView(s,c){return this.isApplyingToNode(s)?(this.crossesNgTemplate=!0,this.addMatch(-s.index,c),new wd(this.metadata)):null}isApplyingToNode(s){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const c=this._declarationNodeIndex;let l=s.parent;for(;null!==l&&8&l.type&&l.index!==c;)l=l.parent;return c===(null!==l?l.index:-1)}return this._appliesToNextNode}matchTNode(s,c){const l=this.metadata.predicate;if(Array.isArray(l))for(let g=0;g<l.length;g++){const d=l[g];this.matchTNodeWithReadOption(s,c,jy(c,d)),this.matchTNodeWithReadOption(s,c,Yo(c,s,d,!1,!1))}else l===Ca?4&c.type&&this.matchTNodeWithReadOption(s,c,-1):this.matchTNodeWithReadOption(s,c,Yo(c,s,l,!1,!1))}matchTNodeWithReadOption(s,c,l){if(null!==l){const g=this.metadata.read;if(null!==g)if(g===Ps||g===Md||g===Ca&&4&c.type)this.addMatch(c.index,-2);else{const d=Yo(c,s,g,!1,!1);null!==d&&this.addMatch(c.index,d)}else this.addMatch(c.index,l)}}addMatch(s,c){null===this.matches?this.matches=[s,c]:this.matches.push(s,c)}}function jy(r,s){const c=r.localNames;if(null!==c)for(let l=0;l<c.length;l+=2)if(c[l]===s)return c[l+1];return null}function x_(r,s,c,l){return-1===c?function Hy(r,s){return 11&r.type?ar(r,s):4&r.type?Ma(r,s):null}(s,r):-2===c?function Mn(r,s,c){return c===Ps?ar(s,r):c===Ca?Ma(s,r):c===Md?yd(s,r):void 0}(r,s,l):as(r,r[1],c,s)}function w_(r,s,c,l){const g=s[19].queries[l];if(null===g.matches){const d=r.data,f=c.matches,m=[];for(let v=0;v<f.length;v+=2){const b=f[v];m.push(b<0?null:x_(s,d[b],f[v+1],c.metadata.read))}g.matches=m}return g.matches}function dl(r,s,c,l){const g=r.queries.getByIndex(c),d=g.matches;if(null!==d){const f=w_(r,s,g,c);for(let m=0;m<d.length;m+=2){const v=d[m];if(v>0)l.push(f[m/2]);else{const b=d[m+1],P=s[-v];for(let k=10;k<P.length;k++){const I=P[k];I[17]===I[3]&&dl(I[1],I,b,l)}if(null!==P[9]){const k=P[9];for(let I=0;I<k.length;I++){const z=k[I];dl(z[1],z,b,l)}}}}}return l}function hl(r){const s=ut(),c=te(),l=Hv();Ah(l+1);const g=Dd(c,l);if(r.dirty&&Kr(s)===(2==(2&g.metadata.flags))){if(null===g.matches)r.reset([]);else{const d=g.crossesNgTemplate?dl(c,s,l,[]):w_(c,s,g,l);r.reset(d,NC),r.notifyOnChanges()}return!0}return!1}function fl(r,s,c){const l=te();l.firstCreatePass&&(qy(l,new P_(r,s,c),-1),2==(2&s)&&(l.staticViewQueries=!0)),By(l,ut(),s)}function D_(r,s,c,l){const g=te();if(g.firstCreatePass){const d=Ne();qy(g,new P_(s,c,l),d.index),function T_(r,s){const c=r.contentQueries||(r.contentQueries=[]);s!==(c.length?c[c.length-1]:-1)&&c.push(r.queries.length-1,s)}(g,r),2==(2&c)&&(g.staticContentQueries=!0)}By(g,ut(),c)}function k_(){return function A_(r,s){return r[19].queries[s].queryList}(ut(),Hv())}function By(r,s,c){const l=new vd(4==(4&c));$u(r,s,l,l.destroy),null===s[19]&&(s[19]=new Lr),s[19].queries.push(new Pd(l))}function qy(r,s,c){null===r.queries&&(r.queries=new xd),r.queries.track(new wd(s,c))}function Dd(r,s){return r.queries.getByIndex(s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nr(r){const s=se(r)||ln(r)||Xe(r);return null!==s&&s.standalone}
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
function bl(...r){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const j_=new ue("Application Initializer");let yn=(()=>{class r{constructor(c){this.appInits=c,this.resolve=bl,this.reject=bl,this.initialized=!1,this.done=!1,this.donePromise=new Promise((l,g)=>{this.resolve=l,this.reject=g})}runInitializers(){if(this.initialized)return;const c=[],l=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let g=0;g<this.appInits.length;g++){const d=this.appInits[g]();if(Hc(d))c.push(d);else if(vg(d)){const f=new Promise((m,v)=>{d.subscribe({complete:m,error:v})});c.push(f)}}Promise.all(c).then(()=>{l()}).catch(g=>{this.reject(g)}),0===c.length&&l(),this.initialized=!0}}return r.\u0275fac=function(c){return new(c||r)(Re(j_,8))},r.\u0275prov=cn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const H_=new ue("AppId",{providedIn:"root",factory:function B_(){return`${Sd()}${Sd()}${Sd()}`}});function Sd(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const q_=new ue("Platform Initializer"),Xy=new ue("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),J_=new ue("appBootstrapListener"),t1=new ue("AnimationModuleType");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let e1=(()=>{class r{log(c){console.log(c)}warn(c){console.warn(c)}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=cn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ol=new ue("LocaleId",{providedIn:"root",factory:()=>oC(Ol,Ut.Optional|Ut.SkipSelf)||function n1(){return typeof $localize<"u"&&$localize.locale||ri}()}),Id=new ue("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class o1{constructor(s,c){this.ngModuleFactory=s,this.componentFactories=c}}let r1=(()=>{class r{compileModuleSync(c){return new od(c)}compileModuleAsync(c){return Promise.resolve(this.compileModuleSync(c))}compileModuleAndAllComponentsSync(c){const l=this.compileModuleSync(c),d=fi(tn(c).declarations).reduce((f,m)=>{const v=se(m);return v&&f.push(new vr(v)),f},[]);return new o1(l,d)}compileModuleAndAllComponentsAsync(c){return Promise.resolve(this.compileModuleAndAllComponentsSync(c))}clearCache(){}clearCacheFor(c){}getModuleId(c){}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=cn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const c1=(()=>Promise.resolve(0))();function Ld(r){typeof Zone>"u"?c1.then(()=>{r&&r.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",r)}
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
class Fn{constructor({enableLongStackTrace:s=!1,shouldCoalesceEventChangeDetection:c=!1,shouldCoalesceRunChangeDetection:l=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Pi(!1),this.onMicrotaskEmpty=new Pi(!1),this.onStable=new Pi(!1),this.onError=new Pi(!1),typeof Zone>"u")throw new Ct(908,!1);Zone.assertZonePatched();const g=this;if(g._nesting=0,g._outer=g._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const d=Zone.AsyncStackTaggingZoneSpec;g._inner=g._inner.fork(new d("Angular"))}Zone.TaskTrackingZoneSpec&&(g._inner=g._inner.fork(new Zone.TaskTrackingZoneSpec)),s&&Zone.longStackTraceZoneSpec&&(g._inner=g._inner.fork(Zone.longStackTraceZoneSpec)),g.shouldCoalesceEventChangeDetection=!l&&c,g.shouldCoalesceRunChangeDetection=l,g.lastRequestAnimationFrameId=-1,g.nativeRequestAnimationFrame=function l1(){let r=me.requestAnimationFrame,s=me.cancelAnimationFrame;if(typeof Zone<"u"&&r&&s){const c=r[Zone.__symbol__("OriginalDelegate")];c&&(r=c);const l=s[Zone.__symbol__("OriginalDelegate")];l&&(s=l)}return{nativeRequestAnimationFrame:r,nativeCancelAnimationFrame:s}}().nativeRequestAnimationFrame,function d1(r){const s=()=>{!function g1(r){r.isCheckStableRunning||-1!==r.lastRequestAnimationFrameId||(r.lastRequestAnimationFrameId=r.nativeRequestAnimationFrame.call(me,()=>{r.fakeTopEventTask||(r.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{r.lastRequestAnimationFrameId=-1,Fd(r),r.isCheckStableRunning=!0,Nd(r),r.isCheckStableRunning=!1},void 0,()=>{},()=>{})),r.fakeTopEventTask.invoke()}),Fd(r))}(r)};r._inner=r._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(c,l,g,d,f,m)=>{try{return Pl(r),c.invokeTask(g,d,f,m)}finally{(r.shouldCoalesceEventChangeDetection&&"eventTask"===d.type||r.shouldCoalesceRunChangeDetection)&&s(),Zt(r)}},onInvoke:(c,l,g,d,f,m,v)=>{try{return Pl(r),c.invoke(g,d,f,m,v)}finally{r.shouldCoalesceRunChangeDetection&&s(),Zt(r)}},onHasTask:(c,l,g,d)=>{c.hasTask(g,d),l===g&&("microTask"==d.change?(r._hasPendingMicrotasks=d.microTask,Fd(r),Nd(r)):"macroTask"==d.change&&(r.hasPendingMacrotasks=d.macroTask))},onHandleError:(c,l,g,d)=>(c.handleError(g,d),r.runOutsideAngular(()=>r.onError.emit(d)),!1)})}(g)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Fn.isInAngularZone())throw new Ct(909,!1)}static assertNotInAngularZone(){if(Fn.isInAngularZone())throw new Ct(909,!1)}run(s,c,l){return this._inner.run(s,c,l)}runTask(s,c,l,g){const d=this._inner,f=d.scheduleEventTask("NgZoneEvent: "+g,s,u1,bl,bl);try{return d.runTask(f,c,l)}finally{d.cancelTask(f)}}runGuarded(s,c,l){return this._inner.runGuarded(s,c,l)}runOutsideAngular(s){return this._outer.run(s)}}const u1={};function Nd(r){if(0==r._nesting&&!r.hasPendingMicrotasks&&!r.isStable)try{r._nesting++,r.onMicrotaskEmpty.emit(null)}finally{if(r._nesting--,!r.hasPendingMicrotasks)try{r.runOutsideAngular(()=>r.onStable.emit(null))}finally{r.isStable=!0}}}function Fd(r){r.hasPendingMicrotasks=!!(r._hasPendingMicrotasks||(r.shouldCoalesceEventChangeDetection||r.shouldCoalesceRunChangeDetection)&&-1!==r.lastRequestAnimationFrameId)}function Pl(r){r._nesting++,r.isStable&&(r.isStable=!1,r.onUnstable.emit(null))}function Zt(r){r._nesting--,Nd(r)}class de{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Pi,this.onMicrotaskEmpty=new Pi,this.onStable=new Pi,this.onError=new Pi}run(s,c,l){return s.apply(c,l)}runGuarded(s,c,l){return s.apply(c,l)}runOutsideAngular(s){return s()}runTask(s,c,l,g){return s.apply(c,l)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const G_=new ue(""),Y_=new ue("");let xl,h1=(()=>{class r{constructor(c,l,g){this._ngZone=c,this.registry=l,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,xl||(function f1(r){xl=r}(g),g.addToWindow(l)),this._watchAngularEvents(),c.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Fn.assertNotInAngularZone(),Ld(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ld(()=>{for(;0!==this._callbacks.length;){let c=this._callbacks.pop();clearTimeout(c.timeoutId),c.doneCb(this._didWork)}this._didWork=!1});else{let c=this.getPendingTasks();this._callbacks=this._callbacks.filter(l=>!l.updateCb||!l.updateCb(c)||(clearTimeout(l.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(c=>({source:c.source,creationLocation:c.creationLocation,data:c.data})):[]}addCallback(c,l,g){let d=-1;l&&l>0&&(d=setTimeout(()=>{this._callbacks=this._callbacks.filter(f=>f.timeoutId!==d),c(this._didWork,this.getPendingTasks())},l)),this._callbacks.push({doneCb:c,timeoutId:d,updateCb:g})}whenStable(c,l,g){if(g&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(c,l,g),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(c){this.registry.registerApplication(c,this)}unregisterApplication(c){this.registry.unregisterApplication(c)}findProviders(c,l,g){return[]}}return r.\u0275fac=function(c){return new(c||r)(Re(Fn),Re(Jn),Re(Y_))},r.\u0275prov=cn({token:r,factory:r.\u0275fac}),r})(),Jn=(()=>{class r{constructor(){this._applications=new Map}registerApplication(c,l){this._applications.set(c,l)}unregisterApplication(c){this._applications.delete(c)}unregisterAllApplications(){this._applications.clear()}getTestability(c){return this._applications.get(c)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(c,l=!0){return xl?.findTestabilityInTree(this,c,l)??null}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275prov=cn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})(),co=null;const $_=new ue("AllowMultipleToken"),wl=new ue("PlatformDestroyListeners");class _1{constructor(s,c){this.name=s,this.token=c}}function Rd(r,s,c=[]){const l=`Platform: ${s}`,g=new ue(l);return(d=[])=>{let f=Zd();if(!f||f.injector.get($_,!1)){const m=[...c,...d,{provide:g,useValue:!0}];r?r(m):function v1(r){if(co&&!co.get($_,!1))throw new Ct(400,!1);co=r;const s=r.get(K_);(function W_(r){const s=r.get(q_,null);s&&s.forEach(c=>c())})(r)}(function Dl(r=[],s){return pr.create({name:s,providers:[{provide:ff,useValue:"platform"},{provide:wl,useValue:new Set([()=>co=null])},...r]})}(m,l))}return function M1(r){const s=Zd();if(!s)throw new Ct(401,!1);return s}()}}function Zd(){return co?.get(K_)??null}let K_=(()=>{class r{constructor(c){this._injector=c,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(c,l){const g=function y1(r,s){let c;return c="noop"===r?new de:("zone.js"===r?void 0:r)||new Fn(s),c}(l?.ngZone,function X_(r){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!r||!r.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!r||!r.ngZoneRunCoalescing)||!1}}(l)),d=[{provide:Fn,useValue:g}];return g.run(()=>{const f=pr.create({providers:d,parent:this.injector,name:c.moduleType.name}),m=c.create(f),v=m.injector.get(cr,null);if(!v)throw new Ct(402,!1);return g.runOutsideAngular(()=>{const b=g.onError.subscribe({next:P=>{v.handleError(P)}});m.onDestroy(()=>{Al(this._modules,m),b.unsubscribe()})}),function tv(r,s,c){try{const l=c();return Hc(l)?l.catch(g=>{throw s.runOutsideAngular(()=>r.handleError(g)),g}):l}catch(l){throw s.runOutsideAngular(()=>r.handleError(l)),l}}(v,g,()=>{const b=m.injector.get(yn);return b.runInitializers(),b.donePromise.then(()=>(function Ug(r){Ot(r,"Expected localeId to be defined"),"string"==typeof r&&(Im=r.toLowerCase().replace(/_/g,"-"))}(m.injector.get(Ol,ri)||ri),this._moduleDoBootstrap(m),m))})})}bootstrapModule(c,l=[]){const g=ev({},l);return function p1(r,s,c){const l=new od(c);return Promise.resolve(l)}(0,0,c).then(d=>this.bootstrapModuleFactory(d,g))}_moduleDoBootstrap(c){const l=c.injector.get(kl);if(c._bootstrapComponents.length>0)c._bootstrapComponents.forEach(g=>l.bootstrap(g));else{if(!c.instance.ngDoBootstrap)throw new Ct(403,!1);c.instance.ngDoBootstrap(l)}this._modules.push(c)}onDestroy(c){this._destroyListeners.push(c)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ct(404,!1);this._modules.slice().forEach(l=>l.destroy()),this._destroyListeners.forEach(l=>l());const c=this._injector.get(wl,null);c&&(c.forEach(l=>l()),c.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return r.\u0275fac=function(c){return new(c||r)(Re(pr))},r.\u0275prov=cn({token:r,factory:r.\u0275fac,providedIn:"platform"}),r})();function ev(r,s){return Array.isArray(s)?s.reduce(ev,r):{...r,...s}}let kl=(()=>{class r{constructor(c,l,g){this._zone=c,this._injector=l,this._exceptionHandler=g,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const d=new B.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),f=new B.y(m=>{let v;this._zone.runOutsideAngular(()=>{v=this._zone.onStable.subscribe(()=>{Fn.assertNotInAngularZone(),Ld(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const b=this._zone.onUnstable.subscribe(()=>{Fn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{v.unsubscribe(),b.unsubscribe()}});this.isStable=(0,W.T)(d,f.pipe(function E(r={}){const{connector:s=(()=>new t.x),resetOnError:c=!0,resetOnComplete:l=!0,resetOnRefCountZero:g=!0}=r;return d=>{let f,m,v,b=0,P=!1,k=!1;const I=()=>{m?.unsubscribe(),m=void 0},z=()=>{I(),f=v=void 0,P=k=!1},nt=()=>{const ht=f;z(),ht?.unsubscribe()};return(0,w.e)((ht,pt)=>{b++,!k&&!P&&I();const vt=v=v??s();pt.add(()=>{b--,0===b&&!k&&!P&&(m=F(nt,g))}),vt.subscribe(pt),!f&&b>0&&(f=new ot.Hp({next:Tt=>vt.next(Tt),error:Tt=>{k=!0,I(),m=F(z,c,Tt),vt.error(Tt)},complete:()=>{P=!0,I(),m=F(z,l),vt.complete()}}),(0,j.Xf)(ht).subscribe(f))})(d)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(c,l){const g=c instanceof IC;if(!this._injector.get(yn).done)throw!g&&Nr(c),new Ct(405,false);let f;f=g?c:this._injector.get(rr).resolveComponentFactory(c),this.componentTypes.push(f.componentType);const m=function m1(r){return r.isBoundToModule}(f)?void 0:this._injector.get(fa),b=f.create(pr.NULL,[],l||f.selector,m),P=b.location.nativeElement,k=b.injector.get(G_,null);return k?.registerApplication(P),b.onDestroy(()=>{this.detachView(b.hostView),Al(this.components,b),k?.unregisterApplication(P)}),this._loadComponent(b),b}tick(){if(this._runningTick)throw new Ct(101,!1);try{this._runningTick=!0;for(let c of this._views)c.detectChanges()}catch(c){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(c))}finally{this._runningTick=!1}}attachView(c){const l=c;this._views.push(l),l.attachToAppRef(this)}detachView(c){const l=c;Al(this._views,l),l.detachFromAppRef()}_loadComponent(c){this.attachView(c.hostView),this.tick(),this.components.push(c),this._injector.get(J_,[]).concat(this._bootstrapListeners).forEach(g=>g(c))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(c=>c()),this._views.slice().forEach(c=>c.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(c){return this._destroyListeners.push(c),()=>Al(this._destroyListeners,c)}destroy(){if(this._destroyed)throw new Ct(406,!1);const c=this._injector;c.destroy&&!c.destroyed&&c.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return r.\u0275fac=function(c){return new(c||r)(Re(Fn),Re(ir),Re(cr))},r.\u0275prov=cn({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function Al(r,s){const c=r.indexOf(s);c>-1&&r.splice(c,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let iv=!0;function O1(){iv=!1}
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
let P1=(()=>{class r{}return r.__NG_ELEMENT_ID__=x1,r})();function x1(r){return function w1(r,s,c){if(jl(r)&&!c){const l=kn(r.index,s);return new Ri(l,l)}return 47&r.type?new Ri(s[16],s):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ne(),ut(),16==(16&r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class cv{constructor(){}supports(s){return yr(s)}create(s){return new E1(s)}}const T1=(r,s)=>s;class E1{constructor(s){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=s||T1}forEachItem(s){let c;for(c=this._itHead;null!==c;c=c._next)s(c)}forEachOperation(s){let c=this._itHead,l=this._removalsHead,g=0,d=null;for(;c||l;){const f=!l||c&&c.currentIndex<uv(l,g,d)?c:l,m=uv(f,g,d),v=f.currentIndex;if(f===l)g--,l=l._nextRemoved;else if(c=c._next,null==f.previousIndex)g++;else{d||(d=[]);const b=m-g,P=v-g;if(b!=P){for(let I=0;I<b;I++){const z=I<d.length?d[I]:d[I]=0,nt=z+I;P<=nt&&nt<b&&(d[I]=z+1)}d[f.previousIndex]=P-b}}m!==v&&s(f,m,v)}}forEachPreviousItem(s){let c;for(c=this._previousItHead;null!==c;c=c._nextPrevious)s(c)}forEachAddedItem(s){let c;for(c=this._additionsHead;null!==c;c=c._nextAdded)s(c)}forEachMovedItem(s){let c;for(c=this._movesHead;null!==c;c=c._nextMoved)s(c)}forEachRemovedItem(s){let c;for(c=this._removalsHead;null!==c;c=c._nextRemoved)s(c)}forEachIdentityChange(s){let c;for(c=this._identityChangesHead;null!==c;c=c._nextIdentityChange)s(c)}diff(s){if(null==s&&(s=[]),!yr(s))throw new Ct(900,!1);return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let g,d,f,c=this._itHead,l=!1;if(Array.isArray(s)){this.length=s.length;for(let m=0;m<this.length;m++)d=s[m],f=this._trackByFn(m,d),null!==c&&Object.is(c.trackById,f)?(l&&(c=this._verifyReinsertion(c,d,f,m)),Object.is(c.item,d)||this._addIdentityChange(c,d)):(c=this._mismatch(c,d,f,m),l=!0),c=c._next}else g=0,function cg(r,s){if(Array.isArray(r))for(let c=0;c<r.length;c++)s(r[c]);else{const c=r[Mr()]();let l;for(;!(l=c.next()).done;)s(l.value)}}(s,m=>{f=this._trackByFn(g,m),null!==c&&Object.is(c.trackById,f)?(l&&(c=this._verifyReinsertion(c,m,f,g)),Object.is(c.item,m)||this._addIdentityChange(c,m)):(c=this._mismatch(c,m,f,g),l=!0),c=c._next,g++}),this.length=g;return this._truncate(c),this.collection=s,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let s;for(s=this._previousItHead=this._itHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._additionsHead;null!==s;s=s._nextAdded)s.previousIndex=s.currentIndex;for(this._additionsHead=this._additionsTail=null,s=this._movesHead;null!==s;s=s._nextMoved)s.previousIndex=s.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(s,c,l,g){let d;return null===s?d=this._itTail:(d=s._prev,this._remove(s)),null!==(s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(l,null))?(Object.is(s.item,c)||this._addIdentityChange(s,c),this._reinsertAfter(s,d,g)):null!==(s=null===this._linkedRecords?null:this._linkedRecords.get(l,g))?(Object.is(s.item,c)||this._addIdentityChange(s,c),this._moveAfter(s,d,g)):s=this._addAfter(new S1(c,l),d,g),s}_verifyReinsertion(s,c,l,g){let d=null===this._unlinkedRecords?null:this._unlinkedRecords.get(l,null);return null!==d?s=this._reinsertAfter(d,s._prev,g):s.currentIndex!=g&&(s.currentIndex=g,this._addToMoves(s,g)),s}_truncate(s){for(;null!==s;){const c=s._next;this._addToRemovals(this._unlink(s)),s=c}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(s,c,l){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(s);const g=s._prevRemoved,d=s._nextRemoved;return null===g?this._removalsHead=d:g._nextRemoved=d,null===d?this._removalsTail=g:d._prevRemoved=g,this._insertAfter(s,c,l),this._addToMoves(s,l),s}_moveAfter(s,c,l){return this._unlink(s),this._insertAfter(s,c,l),this._addToMoves(s,l),s}_addAfter(s,c,l){return this._insertAfter(s,c,l),this._additionsTail=null===this._additionsTail?this._additionsHead=s:this._additionsTail._nextAdded=s,s}_insertAfter(s,c,l){const g=null===c?this._itHead:c._next;return s._next=g,s._prev=c,null===g?this._itTail=s:g._prev=s,null===c?this._itHead=s:c._next=s,null===this._linkedRecords&&(this._linkedRecords=new lv),this._linkedRecords.put(s),s.currentIndex=l,s}_remove(s){return this._addToRemovals(this._unlink(s))}_unlink(s){null!==this._linkedRecords&&this._linkedRecords.remove(s);const c=s._prev,l=s._next;return null===c?this._itHead=l:c._next=l,null===l?this._itTail=c:l._prev=c,s}_addToMoves(s,c){return s.previousIndex===c||(this._movesTail=null===this._movesTail?this._movesHead=s:this._movesTail._nextMoved=s),s}_addToRemovals(s){return null===this._unlinkedRecords&&(this._unlinkedRecords=new lv),this._unlinkedRecords.put(s),s.currentIndex=null,s._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=s,s._prevRemoved=null):(s._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=s),s}_addIdentityChange(s,c){return s.item=c,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=s:this._identityChangesTail._nextIdentityChange=s,s}}class S1{constructor(s,c){this.item=s,this.trackById=c,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class I1{constructor(){this._head=null,this._tail=null}add(s){null===this._head?(this._head=this._tail=s,s._nextDup=null,s._prevDup=null):(this._tail._nextDup=s,s._prevDup=this._tail,s._nextDup=null,this._tail=s)}get(s,c){let l;for(l=this._head;null!==l;l=l._nextDup)if((null===c||c<=l.currentIndex)&&Object.is(l.trackById,s))return l;return null}remove(s){const c=s._prevDup,l=s._nextDup;return null===c?this._head=l:c._nextDup=l,null===l?this._tail=c:l._prevDup=c,null===this._head}}class lv{constructor(){this.map=new Map}put(s){const c=s.trackById;let l=this.map.get(c);l||(l=new I1,this.map.set(c,l)),l.add(s)}get(s,c){const g=this.map.get(s);return g?g.get(s,c):null}remove(s){const c=s.trackById;return this.map.get(c).remove(s)&&this.map.delete(c),s}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function uv(r,s,c){const l=r.previousIndex;if(null===l)return l;let g=0;return c&&l<c.length&&(g=c[l]),l+s+g
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class zn{constructor(){}supports(s){return s instanceof Map||lg(s)}create(){return new L1}}class L1{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(s){let c;for(c=this._mapHead;null!==c;c=c._next)s(c)}forEachPreviousItem(s){let c;for(c=this._previousMapHead;null!==c;c=c._nextPrevious)s(c)}forEachChangedItem(s){let c;for(c=this._changesHead;null!==c;c=c._nextChanged)s(c)}forEachAddedItem(s){let c;for(c=this._additionsHead;null!==c;c=c._nextAdded)s(c)}forEachRemovedItem(s){let c;for(c=this._removalsHead;null!==c;c=c._nextRemoved)s(c)}diff(s){if(s){if(!(s instanceof Map||lg(s)))throw new Ct(900,!1)}else s=new Map;return this.check(s)?this:null}onDestroy(){}check(s){this._reset();let c=this._mapHead;if(this._appendAfter=null,this._forEach(s,(l,g)=>{if(c&&c.key===g)this._maybeAddToChanges(c,l),this._appendAfter=c,c=c._next;else{const d=this._getOrCreateRecordForKey(g,l);c=this._insertBeforeOrAppend(c,d)}}),c){c._prev&&(c._prev._next=null),this._removalsHead=c;for(let l=c;null!==l;l=l._nextRemoved)l===this._mapHead&&(this._mapHead=null),this._records.delete(l.key),l._nextRemoved=l._next,l.previousValue=l.currentValue,l.currentValue=null,l._prev=null,l._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(s,c){if(s){const l=s._prev;return c._next=s,c._prev=l,s._prev=c,l&&(l._next=c),s===this._mapHead&&(this._mapHead=c),this._appendAfter=s,s}return this._appendAfter?(this._appendAfter._next=c,c._prev=this._appendAfter):this._mapHead=c,this._appendAfter=c,null}_getOrCreateRecordForKey(s,c){if(this._records.has(s)){const g=this._records.get(s);this._maybeAddToChanges(g,c);const d=g._prev,f=g._next;return d&&(d._next=f),f&&(f._prev=d),g._next=null,g._prev=null,g}const l=new N1(s);return this._records.set(s,l),l.currentValue=c,this._addToAdditions(l),l}_reset(){if(this.isDirty){let s;for(this._previousMapHead=this._mapHead,s=this._previousMapHead;null!==s;s=s._next)s._nextPrevious=s._next;for(s=this._changesHead;null!==s;s=s._nextChanged)s.previousValue=s.currentValue;for(s=this._additionsHead;null!=s;s=s._nextAdded)s.previousValue=s.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(s,c){Object.is(c,s.currentValue)||(s.previousValue=s.currentValue,s.currentValue=c,this._addToChanges(s))}_addToAdditions(s){null===this._additionsHead?this._additionsHead=this._additionsTail=s:(this._additionsTail._nextAdded=s,this._additionsTail=s)}_addToChanges(s){null===this._changesHead?this._changesHead=this._changesTail=s:(this._changesTail._nextChanged=s,this._changesTail=s)}_forEach(s,c){s instanceof Map?s.forEach(c):Object.keys(s).forEach(l=>c(s[l],l))}}class N1{constructor(s){this.key=s,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gv(){return new Hd([new cv])}let Hd=(()=>{class r{constructor(c){this.factories=c}static create(c,l){if(null!=l){const g=l.factories.slice();c=c.concat(g)}return new r(c)}static extend(c){return{provide:r,useFactory:l=>r.create(c,l||gv()),deps:[[r,new Cs,new Mo]]}}find(c){const l=this.factories.find(g=>g.supports(c));if(null!=l)return l;throw new Ct(901,!1)}}return r.\u0275prov=cn({token:r,providedIn:"root",factory:gv}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function dv(){return new Bd([new zn])}let Bd=(()=>{class r{constructor(c){this.factories=c}static create(c,l){if(l){const g=l.factories.slice();c=c.concat(g)}return new r(c)}static extend(c){return{provide:r,useFactory:l=>r.create(c,l||dv()),deps:[[r,new Cs,new Mo]]}}find(c){const l=this.factories.find(g=>g.supports(c));if(l)return l;throw new Ct(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return r.\u0275prov=cn({token:r,providedIn:"root",factory:dv}),r})();const Z1=Rd(null,"core",[]);
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
let U1=(()=>{class r{constructor(c){}}return r.\u0275fac=function(c){return new(c||r)(Re(kl))},r.\u0275mod=Ta({type:r}),r.\u0275inj=Ll({}),r})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function V1(r){return"boolean"==typeof r?r:null!=r&&"false"!==r}
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
       */,5861:(bt,it,D)=>{function t(B,W,j,ot,w,E,F){try{var S=B[E](F),V=S.value}catch(U){return void j(U)}S.done?W(V):Promise.resolve(V).then(ot,w)}function R(B){return function(){var W=this,j=arguments;return new Promise(function(ot,w){var E=B.apply(W,j);function F(V){t(E,ot,w,F,S,"next",V)}function S(V){t(E,ot,w,F,S,"throw",V)}F(void 0)})}}D.d(it,{Z:()=>R})}},bt=>{bt(bt.s=475)}]);