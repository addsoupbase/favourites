/* Gif to webp:
gif2webp file.gif -o file.webp
Png to webp
cwebp file.png -o file.webp
*/
'use strict'
assign(assign,{nullish(target,props){for(let key in props)target[key]==null||delete props[key];return this(target,props)},not(target,props){for(let key in props)target[key]&&delete props[key];return this(target,props)},and(target,props){for(let key in props)target[key]||delete props[key];return this(target,props)},notin(target,props){for(let key in props)(key in target)&&delete props[key];return this(target,props)},in(target,props){for(let key in props)(key in target)||delete props[key];return this(target,props)},invoke(target,methods){const out=[];for(let key in methods)out.push(target[key].apply(target,Array.from(methods[key]??0)));return out},get'??='(){return this.nullish},get'&&='(){return this.and},get'||='(){return this.not}})
const ran=(()=>{
        const //previouslygenerated=new Set,
            {floor,random}=Math
        return {
            get coin(){return choose(true,false)},
            get flip(){return choose(1,-1)},
            choose,
            range,
            frange,
            pseudo,
            true:_true,
            shuffle,
            gen,
            Randomizer,
       }
        function choose(...deck){return deck[floor(random()*deck.length)]}
        function range(min,max){return random()*(max-min)+min}
        function frange(min,max){return floor(range(min,max))}
        function pseudo(){return performance.now()% 1}
        function _true(){return crypto.getRandomValues(new Uint32Array(1))[0]/0xffffffff}
        function shuffle(...item){for(let 𝙡𝙞𝙡𝙞𝙖𝙣_𝙧𝙤𝙣𝙖𝙣=0,{length}=item;𝙡𝙞𝙡𝙞𝙖𝙣_𝙧𝙤𝙣𝙖𝙣<length;++𝙡𝙞𝙡𝙞𝙖𝙣_𝙧𝙤𝙣𝙖𝙣){const 𝙉𝘼22=floor(random()*(𝙡𝙞𝙡𝙞𝙖𝙣_𝙧𝙤𝙣𝙖𝙣+1));[item[𝙡𝙞𝙡𝙞𝙖𝙣_𝙧𝙤𝙣𝙖𝙣],item[𝙉𝘼22]]=[item[𝙉𝘼22],item[𝙡𝙞𝙡𝙞𝙖𝙣_𝙧𝙤𝙣𝙖𝙣]]}return item}
        function gen(length=6){return Array.from({length}, okay4).join('');function okay4(){return String.fromCodePoint(floor(random()*0x110000))}}
        function Randomizer(𝙗𝙖𝙗𝙗𝙮=6){if(new.target)debugger;return new Proxy({},{get});function get(𝙨𝙩𝙖𝙫𝙪𝙨𝙝, 𝙀𝙡_𝙛𝙡𝙤𝙤𝙙){return 𝙨𝙩𝙖𝙫𝙪𝙨𝙝[𝙀𝙡_𝙛𝙡𝙤𝙤𝙙]??=gen(𝙗𝙖𝙗𝙗𝙮)}}
   })()
const SUPPORTS={
    attributeStyleMap:false //'StylePropertyMap'in globalThis
    //Firefox does not support it and it seems like its slower anyway soo
}
const utilMath=(()=>{
    const π=Math.PI
    return {
        isInt:Number.isInteger,
        sanitize,
        equality,
        toRad,
        toDeg,
        diff,
        clamp,
        get cycle(){return Cycle},
        Cycle,
        /* arreq(...targets){
          if(targets.length<2)throw RangeError('At least 2 arguments required.')
          for(let i=0, max=Math.max(...targets.map(o=>o.length))||1;i<max;++i){
              if(!Array.isArray(targets[i]))throw TypeError(`arguments[${i}] is not an Array (${typeof arguments[i]})`)
              for(let comparisons of targets)if(!utilMath.equality(targets[0][i], comparisons[i]))return false
         }
          return true
     },*/
   }
    function sanitize(num){return num===+num&&num!=null&&isFinite(num)}
    function equality(𐌏,...target){
        return target.every(is)
        function is(o){return Object.is(o, 𐌏)}
   }
    function toRad(deg){return deg*π/180}
    function toDeg(rad){return rad*180/π}
    function diff(a, b){return Math.abs(a-b)}
    function clamp(val, min, max){return Math.min(max,Math.max(min,val))}
    function Cycle(...items){
        if(new.target)debugger
        const{length}=items
        let 𝙠𝙖𝙯𝙖𝙝𝙬𝙖_=0
        return{
            get next(){return move(1)},
            get previous(){return move(-1)},
            get val(){return move(1)},move,*[Symbol.iterator](){for(;;)yield this.val}
       }
        function move(step=1){const old=𝙠𝙖𝙯𝙖𝙝𝙬𝙖_;𝙠𝙖𝙯𝙖𝙝𝙬𝙖_+=step|0||1;return items[old%length]}
   }
})()
const utilString=(()=>{
    {
        const alphabet='abcdefghijklmnopqrstuvwxyz'
        return {
            alphabet,
            numbers:'0123456789',
            months:'January February March April May June July August September October November December'.split(' '),
            days:'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
            contains,
            addCommas,
            shorten,
            clip,
            reverse,
            upper,
            ALPHABET:alphabet.toUpperCase()
       }
   }
    function contains(string, ...searches){return searches.every(string.match, string)}
    function addCommas(num){
        return(+num).toLocaleString()//(num+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   }
    function shorten(string, len=32){
        let out=string.slice(0, len)
        if(string.length>len)out+='…'
        return out
   }
    function clip(string, len){return string.slice(len, string.length-len)}
    function reverse(string){return[].toReversed.call(string).join('')}
    function upper(string){return string[0].toUpperCase()+string.slice(1)}
})()
const utilArray=(()=>{
    return {
        assemble,
        center,
        insert,
        remove,
        swap,
        swapInside,
        avg
   }
    function assemble(arrayLike, ...sequence){
        const out=[]
        for(let{length}=sequence,i=0;i<length;++i)
        out.push(arrayLike.at(sequence[i]))
        return out
   }
    function center(o){return o[(o.length/2)|0]}
    function insert(array, item, index){return array.splice(index, 0, item)}
    function remove(item, index){return typeof item==='string'?item.slice(0, index)+item.slice(index+1):item.splice(index, 1)}
    function swap(item, a, b){return ([item[a], item[b]]=[item[b], item[a]], item)}
    function swapInside(item, a, b){
        const slot=item.indexOf(a),
            slot2=item.indexOf(b)
        if(slot!==-1&&slot2!==-1)return item.swap(slot, slot2)
        throw RangeError("Index out of range")
   }
    function avg(array, type){
        if(!array.length)return NaN
        const sorted=array.slice().sort(sort),
            {length}=sorted, {floor}=Math
        if(type){
            //let median=sorted[Math.floor(length/2)],
            const q1=sorted[floor(length/4)],
                q3=sorted[floor(3*length/4)],
                IQR=q3-q1,
                upperFence=q3+1.5*IQR,
                lowerFence=q1-1.5*IQR,
                filtered=sorted.filter(filter)
            return filtered.reduce(reduce)/filtered.length
            function filter(x){return x >=lowerFence&&x <=upperFence}
       }
         return sorted.reduce(reduce)/length
         function reduce(a,b){return a+b}
         function sort(a,b){return a-b}
   }
})()
{
    assign(utilString, {
        toOrdinal,
        badwords:RegExp([z(13,8,6,6,4,17),z(1,8,19,2,7),z(5,20,2,10),z(18,7,8,19),z(2,14,2,10),z(5,0,6),z(17,4,19,0,17,3),z(3,8,2,10)].join('|'))
   })
    utilMath.average=x
    const map=new Map(Object.entries({1:'st',2:'nd',3:'rd'}))
    //  document.addEventListener('readystatechange', _____)
    function x(...nums){return utilArray.avg(nums)}
    function toOrdinal(o){const num=+o, lastTwoDigits=num%100, me=(o+"").at(-1);if((lastTwoDigits >=11&&lastTwoDigits <=13)||!map.has(me))return o+"th";return o+map.get(me)}
    function z(...a){return utilArray.assemble(utilString.alphabet, ...a).join('')}
    //  function _____(){if(!('fragment' in local)&&typeof requestIdleCallback==='function')requestIdleCallback(()=>import('./timetest.js'), {timeout:3000000});document.querySelectorAll('script').forEach(o=>o.remove())}
}
const[local,session]=(()=>{
    return [StorageManager(localStorage), StorageManager(sessionStorage)]
    function get(target, prop){return prop==='__all__'?Object.fromEntries(Array.from({length:target.length}, (_, i)=>[target.key(i), target.getItem(target.key(i))])):target.getItem(prop)}
    function set(target, prop, value){return!(prop!=='__all__'?target.setItem(prop, value):1)}
    function deleteProperty(target, prop){return!(prop==='__all__'?target.clear():target.removeItem(prop))}
    function has(target, prop){return target.getItem(prop)!==null}
    function StorageManager(managee){
        if(managee instanceof Storage)return new Proxy(managee,{get,set,deleteProperty,has})
        throw TypeError('Expecting Storage, got '+managee?.constructor?.name)
   }
})()
const[Resize,Mutation,Intersection,/*Performance,Pressure*/]=(()=>{
    class Observer {
        __observer__=null
        watching=new WeakSet
        get ǃ(){throw TypeError('Observe must be used from derived class')}
        get __type__(){return null}
        constructor(callback){
            if(new.target===Observer)throw TypeError(`Abstract class ${new.target.name}not directly constructable`)
            this.__observer__=new this.__type__(callback)
       }
        disconnect(){return this.__observer__.disconnect()}
        get records(){return this.__observer__.takeRecords()}
        observe(options){return this.ǃ(options)}
   }
    class MO extends Observer {
        get __type__(){return MutationObserver}
        ǃ({target,subtree=false,childList=false,attributes=false,}){
            this.watching.add(target)
            return this.__observer__.observe(target,{subtree,childList,attributes})
       }
   }
    class RO extends Observer {
        get __type__(){return ResizeObserver}
        ǃ({target,box='content-box'}){
            this.watching.add(target)
            return this.__observer__.observe(target,{box})
       }
        unobserve({target}){
            this.watching.delete(target)
            return this.__observer__.unobserve(target)
       }
   }
    class IO extends Observer {
        get __type__(){return IntersectionObserver}
        unobserve(target){
            this.watching.delete(target)
            return this.__observer__.unobserve(target)
       }
        ǃ({target}){
            this.watching.add(target)
            return this.__observer__.observe(target)
       }
   }
    return[ro,mo,io]
//  Factory functions
    function ro(o){return new RO(o)}
    function mo(o){return new MO(o)}
    function io(o){return new IO(o)}
   /* class PO extends Observer {
        get __type__(){return PerformanceObserver}
        ǃ({target,}){

       }
   }*/
})()
/*const Vector=class v {
    x=0
    constructor(x=0){
        Object.seal(this)
        this.x=x
   }
    [Symbol.toPrimitive](type){
        return type==='number'?this.x :''+this.x
   }
}*/
const Vector2=(()=>{
    let v
    return assign(v=class v {
        x=0
        y=0
        constructor(x=0,y=0){if(arguments.length===1){y=v.y(x);x=v.x(x)}Object.seal(this);this.set(x, y)}
        get[Symbol.toStringTag](){return'Vector2'}
        static get random(){const out=new v;out.randomize();return out}
        static get up(){return new v(0,1)}
        static get down(){return new v(0,-1)}
        static get left(){return new v(-1,0)}
        static get right(){return new v(1,0)}
        set(...numbers){if(numbers.length===1)numbers=[...numbers[0]];const keys=Object.keys(this);for(let{length}=numbers;length--;)if(keys[length]in this)this[keys[length]]= utilMath.clamp(+numbers[length],Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)}
        pow(vector){if(!Array.isArray(vector))vector=Array.from(vector);for(let{length}=this.value;length--;)vector[length]=this[length]**vector[length];this.set(vector);return this}
        add(vector){if(!Array.isArray(vector)){if(1 in arguments)vector=[vector,arguments[1]];vector=Array.from(vector)}for(let{length}=this.value;length--;)vector[length]=this[length]+vector[length];this.set(vector);return this}
        subtract(vector){if(!Array.isArray(vector)){if(1 in arguments)vector=[vector,arguments[1]];vector=Array.from(vector)}for(let{length}=this.value;length--;)vector[length]=this[length]-vector[length];this.set(vector);return this}
        multiply(vector){if(!Array.isArray(vector)){if(1 in arguments)vector=[vector,arguments[1]];vector=Array.from(vector)}for(let{length}=this.value;length--;)vector[length]=this[length]*vector[length];this.set(vector);return this}
        divide(vector){if(!Array.isArray(vector)){if(1 in arguments)vector=[vector,arguments[1]];vector=Array.from(vector)}for(let{length}=this.value;length--;)vector[length]=this[length]/vector[length];this.set(vector);return this}
        normalize(){this.set(this.normalized)}
        randomize(){const{MIN_SAFE_INTEGER, MAX_SAFE_INTEGER}=Number;this.set(ran.range(MIN_SAFE_INTEGER,MAX_SAFE_INTEGER),ran.range(MIN_SAFE_INTEGER,MAX_SAFE_INTEGER))}
        negate(){this.set(this.negated)}
        invert(){this.set(this.inverse)}
        lerp({to,time=0.1}){this.subtract((this.minus(to)).multiply(time,time))}
        minus(...other){return new v(this).subtract(...other)}
        get average(){return utilMath.average(this.x,this.y)}
        get inverse(){return new v(this.x**-1,this.y**-1)}
        get negated(){return new v(-this.x,-this.y)}
        get normalized(){return new v(...this.value.map(map,this));function map(o){return o/this.magnitude||0}}
        get isValid(){return this.x===this.x&&this.y===this.y}
        get magnitude(){return this.value.reduce(reduce);function reduce(a, b){return Math.abs(a+b)}}
        get sqrtMag(){return this.magnitude**.5}
        get value(){return[this.x,this.y]}
        toString(){return'('+this.value.join(', ')+')'}
        get 0(){return this.x}
        get 1(){return this.y}
        *[Symbol.iterator](){yield this.x;yield this.y}
   }, {
        distance,
        x,
        y,
        angle,
        //  average,
        difference,
        combine,
        multiply,
        min,
        max,
       // equals,
   })
    function x(vectorLike){return vectorLike.x??vectorLike[0]??Object.values(vectorLike)[0]}
    function y(vectorLike){return vectorLike.y??vectorLike[1]??Object.values(vectorLike)[1]}
    function angle(first,second){const firstAngle=Math.atan2(y(first),x(first)),secondAngle=Math.atan2(y(second),x(second)),angle=secondAngle-firstAngle;return Math.abs(angle)}
    /*function average(...vectors){
        const x=vectors.map(o=>v.x(o))
            , y=vectors.map(o=>v.y(o))
        return new v(x.average(), y.average())
   }*/
    function difference(vector,vector2){if(!Array.isArray(vector))vector=Array.from(vector);if(!Array.isArray(vector2))vector2=Array.from(vector2);const out=Array.from(vector);for(let{length}=out;length--;)out[length]=utilMath.diff(vector2[length],vector[length]);return new v(...out)}
    function distance(vector,vector2){return Math.hypot(x(vector)-x(vector2),y(vector)-y(vector2))}
    function combine(...vectors){const out=new v;for(const v of vectors)out.add(v);return out}
    function multiply(...vectors){const out=new v(1, 1);for(const v of vectors)out.multiply(v);return out}
    function max(vector,vector2){return new v(Math.max(x(vector2),x(vector)),Math.max(y(vector2),y(vector)))}
    function min(vector,vector2){return new v(Math.min(x(vector2),x(vector)),Math.min(y(vector2),y(vector)))}
   /* function equals(...vectors){
        return utilMath.arreq(...vectors.map(N))
        function N(o){return [v(o), y(o)]}
   }*/
})()
const Color=class z {
    r=null
    g=null
    b=null
    a=null
    constructor(r=0,g=0,b=0,a=1){assign(this,{r,g,b,a})}
    [Symbol.toPrimitive](){return+(this.toString('hex').replace('#',''))}
    static toHex(r,g,b){return('#'+z.th(r)+z.th(g)+z.th(b)).toUpperCase()}
    static th(n){return n.toString(16).padStart(2,0)}
    static toHex2(r,g,b,a){r=utilMath.clamp(r,0,255);g=utilMath.clamp(g,0,255);b=utilMath.clamp(b,0,255);a=Math.round(utilMath.clamp(a,0,1)*255);return`#${z.th(r)}${z.th(g)}${z.th(b)}${z.th(a)}`}
    static toHSL(r,g,b){r/=255,g/=255,b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b);let h,s,l=(max+min)/2;const d=max-min;s=(d===0)?0:(l<0.5)?d/(max+min):d/(2-max-min);if(d===0)h=0;else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break}h/=6}h=Math.round(h*360);s=Math.round(s*100);l=Math.round(l*100);return`hsl(${h}, ${s}%, ${l}%)`}
    *[Symbol.iterator](){yield this.r;yield this.g;yield this.b;yield this.a}
    toString(format){switch(format?.toLowerCase()){default:return`rgb(${this.r}${this.g}${this.b}${this.a})`;case'hex':return z.toHex(...this);case'hex2':return z.toHex2(...this);case'hsl':return z.toHSL(...this)}}}
{
    const 𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩=Symbol(ran.gen(1)),
    ERROR_MESSAGE=()=>TypeError('Illegal invocation'),
    {hasOwn}=Object
        let 〇=-1
    var Elem=class Elem {
        [𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩]=Object.defineProperty(new Map,'trigger',{value(search){if(search)this.#eventNames.has(search)?this.#eventNames.get(search)():Elem.warn(`Non-existent event:${search}`);else for(const[,n]of this.#eventNames)n.call(this)}})
        get #eventNames(){return this[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩]}
        static USE_CUTESY_FONT=true
        static getPageAsHTML=__
        static get #unique(){if(++〇>0x110000)〇=0;return String.fromCodePoint(〇)}
        static {
            Object.defineProperties(this, {
                DEPRECATED_TAGNAMES:{value:/^(TT|ACRONYM|BIG|CENTER|DIR|FONT|FRAME|FRAMESET|MARQUEE|NOBR|NOEMBED|NOFRAMES|PARAM|PLAINTEXT|RB|RTC|STRIKE|TT|XMP)$/i},
                ILLEGAL_TAGNAMES:{value:/^(SCRIPT|NOSCRIPT|STYLE|META|DOCTYPE|LINK|HEAD|HTML|TITLE)$/i},
                allElements:{get:allElements},
                registry:{value:new FinalizationRegistry(GarbageLog)},
                RO:{value:new ResizeObserver(Ro)},
                loaded:{value:new Set},
                failed:{value:new Set},
                $:{
                    value(id){
                        const out=document.getElementById(id.replace('#', ''))
                        out||this.error(`Cannot get element "${id.replace('#', '')}" as it does not exist`)
                        return out?.content??out??null
                   }
               },
                formats:{
                    value:{
                        image:/webp|png|jpeg|jpg|gif/,
                        video:/mp4|mpeg|webm|avi|mov/,
                        audio:/mp3|ogg|wav|aiff|aac|flac/
                   }
               }
           })
            Object.defineProperties(this.prototype, {
                children:{get:getChildren,set:setChildren},
                before:{set:before},
                after:{set:after},
                detachedChildren:{get:detachedChildren},
                set:{
                    configurable:1,writable:1,
                    value(val,type){
                        type+=''
                        return map.has(type)? 
                        this[map.get(type)]=val:
                        this.content.setHTMLUnsafe(val)
                   }
               }
           })
            const map=new Map(Object.entries({1:'textContent',2:'innerHTML',3:'innerText'}))
            function Ro(entries){
                for(const{contentBoxSize, target}of entries){
                    // For modern browsers that return an array (contentBoxSize[0])
                    const size=Array.isArray(contentBoxSize)? contentBoxSize[0] :contentBoxSize
                    // target.content??={}
                    if(target.content)
                        target.content.bounds={
                            x:size.inlineSize,  // Width
                            y:size.blockSize    // Height
                       }
               }
           }
            function allElements(){
                return[].map.call(document.querySelectorAll('*'),map).filter(filter)
                function map(o){return o.content}
                function filter(o){return Elem.elements.has(o)}
           }
            function detachedChildren(){
                const a=[...this.content.childNodes],
                    fragment=createDocumentFragment()
                for(let{length}=a;length--;){
                    let me = a[length]
                    me.remove()
                    if(me instanceof Element)
                        fragment.prepend(me)
                    else me.nodeValue=''
               }
                return fragment
           }
            function before(e){this.content.before(e.content)}
            function after(e){this.content.after(e.content)}
            function getChildren(){
                return Array.from(this.content.children, from).filter(filter);
                function from(o){return o.content}
                function filter(o){return o&&!o.content.tagName.match(Elem.ILLEGAL_TAGNAMES)}
           }
            function setChildren(children){
                const frag=createDocumentFragment()
                for(let i=0, {length}=children, o=children[i];i<length;o=children[++i])
                frag.appendChild(o.content)
                this.content.appendChild(frag)
                //i think its faster but im not sure
           }
            function GarbageLog(heldValue){Elem.debug(`Element "${heldValue}" was cleared from memory 📤`)}
       }
        eval(code){Function(`with(this)void class{static{${code}}}`).call(this)}
        assign(obj){assign(this,obj)}
        refresh(){this.content.appendChild(this.detachedChildren)}
        age=performance.now()
        static log(){debugger}
        static get orphans() {
            return Array.from(this.elements,map).filter(filter)
            function filter(o){return !document.contains(o)}
            function map(o){return o.content}
        }
        observer={
            observe(child){
                delete child.content.parent.observer
                child.content.parent.observer=new IntersectionObserver(く, {
                    root:child.content.parent.content,
                    threshold:0,
               })
                child.content.parent.observer.observe(child)
                function く(entries){
                    for(const entry of entries)
                        entry.isIntersecting?entry.target.content.detectVisibility?.(true):entry.target.content.detectVisibility?.(false)       
               }
           }
       }
        /*static textStyle(message, options){
            const elf=JSON.stringify(options).replaceAll(/\{|\}|\"/g, '').replaceAll(',', ';')
            console.trace(`%c ${message}`, elf)
       }*/
        styleMe(...prop){
            let[p]=prop
            if(!Array.isArray(p)&&typeof p==='object'&&prop.length===1&&p)prop=Object.entries(p)
            //return this.content.style.cssText=prop.map(([key,val])=>`${key}:${val}`).join(';')
            for(const[propName, propValue]of prop){
                if(propName.match(/height\_width|width\_height/))this.styleMe({height:propValue, width:propValue})
                else if(propName==='max-height_width')this.styleMe({'max-height':propValue, 'max-width':propValue})
                else
                    if(SUPPORTS.attributeStyleMap)try {
                        //this one is slower
                        let n=propValue
                        if(typeof n==='string')n=CSSStyleValue.parse(propName, n)
                        this.content.attributeStyleMap.set(propName, n)
                   }catch {
                        this.content.style.setProperty(propName, propValue)
                   }
                    else this.content.style.setProperty(propName, propValue)
                
                // this.content.style[propName]=propValue
                //this.content.style.setProperty(propName, propValue)
                //  CSSStyleValue.parse(propName,propValue)
           }
       }
        static noConsole(){console.warn(`No console mode was enabled, which means if you're reading this it was probably not on purpose (for obvious reasons)`);addEventListener('keydown', __);delete this.noConsole;async function __(e){let value,{key}=e;if(key==='Tab'){e.preventDefault();let val=await Prompt({cancelable:true,type:'text',text:'Eval code',subtext:'Input eval code'});if(val===null)return;try{var returnValue = eval?.('"use strict";'+val)}catch(e){return Prompt({type:'none',text:$({start(){this.transition({frames:{transform:['scale(0.95,0.95)','scale(1.05,1.05)']},timing:{iterations:1/0,duration:500,easing:'ease-in-out',direction:'alternate-reverse'}})},tag:'h1',style:'color:red;',txt:e.constructor.name+'!'}),subtext:$({tag:'code',text:e.message})})}let xval = await Prompt({type:'none',text:'Result:',subtext:safelyConvertToString(returnValue)});if(xval!==null)navigator.clipboard.writeText(val)}}}
        static async bulk(callback,...src){const result=await Promise.all(src.map(map));return final(result);function res(response){if(!response.ok)return Promise.reject(`Request failed with status ${response.status}`);const contentType=response.headers.get('Content-Type');if(contentType){let type='text';if(contentType.includes('application/json'))type='json';else if(contentType.includes('application/octet-stream'))type='blob';return response[type]()}}async function map(o){const response=await fetch(o);return res(response)}function final(){callback?.(...src);console.groupCollapsed('Bulk load:');for(const sr of src)Elem.success(`${link(sr)}loaded successfully`);console.groupEnd()}}
        static preload(src,callback){if(this.loaded.has(src))return src;if(!src?.replace(/\s/g,''))throw TypeError('No source for Media provided.');fetch(src).then(response);this.info(`Preloading Resource: ${link(src)}`);return src;function response(res){if(!res.ok){Elem.error(`Resource error: ${res.status}`);Elem.failed.add(src)}else{callback?.(src);Elem.success(`Resource Pre-loaded: ${link(src)}`);Elem.loaded.add(src)}}}
        static youtube=class extends this{constructor(opts){opts.tag='iframe';super(opts);assign(this,{loading:'lazy',frameborder:0,referrerpolicy:'strict-origin-when-cross-origin',allow:'fullscreen;accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share;'})}}
        static svgattr='viewBox cx cy autocorrect autocapitalize stroke fill r strokeWidth'.split(' ')
        static attributes=new Set(this.svgattr.concat(('style xmlns for max min low high optimum target rel preload multiple disabled href draggable label innerText textContent dir innerHTML type action method required download style autobuffer value loading name checked src maxLength accept placeholder title controls id readonly width height frameborder allow').split(' ')))
        static {const{prototype}=this;for(const key of Object.getOwnPropertyNames(prototype)){const descriptor=Object.getOwnPropertyDescriptor(prototype,key);if(typeof descriptor.value==='function'&&key!=='constructor'){const 우정=prototype[key];prototype[key]=(俉俊=>{return You_are_so_awesome_and_i_love_you;function You_are_so_awesome_and_i_love_you(...अ){if(hasOwn(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩))return 우정.apply(this, अ);throw 俉俊}})(ERROR_MESSAGE())}}for(const attribute of this.attributes){const ǃ=attribute.match(/textContent|innerHTML|innerText/);Object.defineProperty(this.prototype,attribute,{get(){if(hasOwn(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩))return this.content[attribute]??null;throw ERROR_MESSAGE()},set(val){if(hasOwn(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩))if(ǃ&&this.childCount)throw TypeError(`You are not allowed to set the "${attribute}" of a parent element`);else this.content[attribute]=val;else throw ERROR_MESSAGE()}})}}
        static animateOnRequestAnimationFrame=new Set
        static requestAnimationFrame=(()=>{let frame=0;const 𝑺𝒍𝒂𝒔𝒉𝒗𝒂𝒍𝒌𝒊𝒆=window.requestAnimationFrame??window.webkitRequestAnimationFrame??window.mozRequestAnimationFrame??window.oRequestAnimationFrame??window.msRequestAnimationFrame??(callback=>timeout(callback, 12));return function n(){if(!Elem.animateOnRequestAnimationFrame.size)return 𝑺𝒍𝒂𝒔𝒉𝒗𝒂𝒍𝒌𝒊𝒆(n);++frame;for(let toAnimate of Elem.animateOnRequestAnimationFrame)try{toAnimate.update(frame)}catch(e){console.error(e);Elem.error(`"${toAnimate.id}" is missing an update method or has one that threw an error`);Elem.animateOnRequestAnimationFrame.delete(toAnimate)}}})()
        static listeners=new Map
        static warn(message){this.logLevels.warn &&
            
console.trace('%cWarning %c'+message, "font-size:12px;font-family:'Choco cooky',monospace;color:yellow;text-shadow:yellow 0px 0px 2px;", "font-family:'Choco cooky',monospace")
       }
        static error(message){this.logLevels.error &&
            
console.trace('%cError %c'+message, "font-size:12px;font-family:'Choco cooky',monospace;color:red;text-shadow:red 0px 0px 2px;", "font-family:'Choco cooky',monospace")
       }
        static info(message){this.logLevels.info &&
            
console.trace('%cInfo %c'+message, "font-size:12px;font-family:'Choco cooky',monospace;color:teal;text-shadow:teal 0px 0px 2px;", "font-family:'Choco cooky',monospace")
       }
        static success(message){this.logLevels.success &&
            
console.trace('%cSuccess %c'+message, 'font-size:12px;color:lightgreen;text-shadow:lightgreen 0px 0px 2px;'+"font-family:'Choco cooky',monospace;", "font-family:'Choco cooky',monospace;")
       }
        static debug(message){this.logLevels.debug &&
            
console.trace('%cDebug %c'+message, "font-size:12px;color:orange;text-shadow:orange 0px 0px 2px;font-size:10;font-family: 'Choco cooky',monospace;", "font-size:10;font-family:'Choco cooky',monospace;")
       }
        static elements=new Set
        static logLevels={error:true,warn:true,success:true,info:false,debug:false}
        static select(self){const out=new this({self});if(out.content.children)for(const node of out.content.children)node.nodeName.match(this.ILLEGAL_TAGNAMES)??this.select(node);return out}
        static {
            const out={'standards mode':'red'}
                ,head=document.head.children
            'application-name og:description favicon theme-color description googlebot viewport og:image og:title keywords charset'.split(' ').forEach(o=>out[o]='red')
            this.select(document.documentElement)
            assign(window, {body:document.querySelector('body').content,
                html:document.querySelector('html').content})
            for(const o of head){
                const butes=o.attributes,
                    name=o.getAttribute('name'),
                    prop=o.getAttribute('property'),
                    content=o.getAttribute('content')
                if(butes.charset)out.charset=o
                else if(o.getAttribute('rel')==='icon')out['favicon']=o
                else if(name==='description'&&butes[0]?.nodeValue)out['description']=o
                else if(prop==='og:description')out['og:description']=o
                else if(name==='theme-color'&&content?.replace(/\s/g, ''))out['theme-color']=o
                else if(name==='application-name'&&content?.replace(/\s/g, ''))out['application-name']=o
                else if(name==='googlebot'&&content?.replace(/\s/g, ''))out['googlebot']=o
                else if(prop==='og:image')out['og:image']=o
                else if(prop==='og:url')out['og:url']=o
                else if(name==='og:title')out['og:title']=o
                else if(name==='viewport'&&butes[1]?.nodeValue)out.viewport=o
           }
            if(document.title?.match?.(/^(Untitled|Document)$/)||!document.title?.replace(/\s/g, '')&&!document.querySelector('title'))out['<title> element']='red'
            else out['<title> element']=document.querySelector('title')
            if(document.compatMode==='CSS1Compat')out['standards mode']=document.doctype
            console.groupCollapsed('%cView SEO Check for '+location, 'font-family:\'Choco cooky\',monospace')
            for(const[key, value]of Object.entries(out))
                if(typeof value!=='string')console.debug('%c'+key, 'font-family:\'Choco cooky\',monospace;font-size:10px;color:lightgreen', value)
                else console.debug('%c'+key, 'font-family:\'Choco cooky\',monospace;font-size:10px;color:red')
                console.groupEnd()
            /* for(let script of document.scripts){
                 script.addEventListener('load',function n(a){
                     this.removeEventListener('load',n)
                     Elem.success(this.src+' finished executing')
                })
                 script.addEventListener('error',function n(a){
                     this.removeEventListener('error',n)
                     Elem.error('Something went wrong when trying to load '+this.src)
                })
            }*/
       }
        setOnRequestAnimationFrame(updateFunc){if(updateFunc)this.update=updateFunc;Elem.animateOnRequestAnimationFrame.add(this);if(Elem.animateOnRequestAnimationFrame.size===1)Elem.requestAnimationFrame()}
        clone({deep=true,parent}={}){return new this.constructor({parent,self:this.content.cloneNode(deep)})}
        timeouts=new Map
        intervals=new Map
        constructor(opts){
            //Main init
            const{tag,self,events,styles}=opts
            if(!opts||!('tag'in opts)&&(!('self'in opts)||!(self instanceof Element)))throw TypeError('Missing tag name')//return Elem.error('Cannot create element:missing tag')
            if(tag?.match(new.target.ILLEGAL_TAGNAMES))throw TypeError(`"${tag}" is not allowed as a tag name`)
            if(tag?.match(new.target.DEPRECATED_TAGNAMES))new.target.warn(`"${tag}" is deprecated and should not be used`, "font-family:'Choco cooky',monospace")
            if(tag^self)throw TypeError('You must only pick between self or tag')
            if(self){if(new.target.elements.has(self.content)){console.error(self);throw ReferenceError(`Duplicate element not allowed`)}this.content=self;if(this.content===document.body)opts.id='body';else if(this.content===document.documentElement)opts.id='html';else {opts.id=(opts.id??self.getAttribute('id'))||Elem.#unique;this.randomID=true}}
            else{this.content=document.createElement(tag);opts.id??=Elem.#unique}
            this.content.content=this
            for(const attr of new.target.attributes)if(attr in opts)this[attr]=opts[attr]
            if(opts.text)this.innerHTML=opts.text
            if(opts.message)this.innerText=opts.message
            if(this.content.getBoundingClientRect){let x=this;Object.defineProperty(this,'bounds',{get(){delete this.bounds;const f=x.content.getBoundingClientRect();return x.bounds={x:/*parseFloat(*/f.width/*)*/, y:/*parseFloat(*/f.height/*)*/}},set(val){delete this.bounds;x.bounds=val},configurable:1,enumerable:1})}
            if(opts.class){if(typeof opts.class==='string')opts.class=opts.class.split(' ');for(let{length}=opts.class;length--;)this.content.classList.add(opts.class[length])}
            if(events)this.addevent(events)
            if(styles)this.styleMe(styles)
            if(arguments[1]===true){debugger;opts.parent=body}
            if(opts.parent){if(typeof opts.parent==='string')opts.parent=new.target.$(opts.parent);this.parent=opts.parent}
            if(opts.children)this.children=opts.children
            if(opts.txt)this.textContent=opts.txt
            this.begin(opts)
       }
        get current(){return this.content}
        append(p){p.content.appendChild(this.content)}
        adopt(child){this.content.appendChild(child.content)}
        replaceWith(p){this.content.replaceWith(p.content);return p}
        replace(p){this.replaceWith(p);this.kill();return p}
        becomeChild(p){this.content.appendChild(p.content)}
        prepend(p){p.content.prepend(this.content)}
        get parent(){if(hasOwn(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩))return this.content.parentElement?.content??null;throw ERROR_MESSAGE()}
        isDead=false
        randomID=false
        set parent(val){
            //i shouldve thought of this earlier
            if(hasOwn(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩))
            return val==null?this.parent?.content.removeChild(this.content):val.adopt(this)
            throw ERROR_MESSAGE()
       }
        get childCount(){return this.children.length}
        batchAppendChild(length,childFunc){this.children=Array.from({length},childFunc)}
        set txt(text){this.textContent=text}
        get previous(){return this.content.previousElementSibling?.content??null}
        get next(){return this.content.nextElementSibling?.content??null}
        get firstChild(){return this.content.firstElementChild?.content??null}
        get index(){return this.parent?.children.indexOf(this.content.content)??null}
        toString(){return this.content.outerHTML}
        addClass(...className){return this.add({class:className})}
        add(props){if(props.class)if(typeof props.class==='string')props.class=[props.class];for(let{length}=props.class;length--;)
                    /*   if(!Elem.findClass($class)){
                        Elem.messages.noclass($class)
                       }else if([...this.content.classList].includes($class)){
                            Elem.warn(`Class ${$class}already added${this.content.id?' to '+this.content.id :''}`)
                           }
                            else{Elem.info(`Class ${$class}added${this.content.id?' to '+this.content.id :''}`)}*/
                    this.toggle(props.class[length], true);return this}
        disableEvent(name){this.#eventNames.get(name).disabled=true}
        enableEvent(name){this.#eventNames.get(name).disabled=false}
        toggleEvent(name){const e=this.#eventNames.get(name).disabled;e.disabled=!e.disabled}
        async transition({timing={duration:1e3, iterations:1, easing:'ease', delay:0, direction:'normal', endDelay:0, fill:'forwards',}, frames}, callback){
            assign['??='](timing,{duration:1e3,iterations:1,easing:'ease',direction:'normal',fill:'forwards'})
            // timing.composition
            try {
                const keyframeEffect=new KeyframeEffect(this.content,frames,timing), 
                           animation=new Animation(keyframeEffect)
                animation.play()
                await animation.finished
                animation.commitStyles()
                callback?.call(this)
           }
            catch(e){
                if(!e.message.includes('Target element is not rendered.')){
                    Elem.error(`Something went wrong when applying a transition to element ${this.id}. The ${e.constructor.name}is shown below:`)
                    throw e
               }
           }
       }
        anim(target,callback){
            let keep=false
            if('keep class'in target)keep=delete target['keep class']
            // switch (target.class){
            //     default:
            this.add(target)
            //    break
            /*    case 'fade out':this.content.animate([
                    {opacity:1, easing:'ease-in'},
                    {opacity:0, easing:'ease-in'},
    
                ],500);break;
                case 'fade in':this.content.animate([
                    {opacity:0, easing:'ease-in'},
                    {opacity:1, easing:'ease-in'},
                ],500);break;*/
            // }
            this.addevent(['animationend', _____])
            return this
            function _____(){
                this.noevent('animationend')
                callback?.call(this)
                //switch (target.class){
                //    default:
                keep||this.removeClass(target.class);
                //break
                //    case 'fade out':alert(134);
                //}
           }
       }
        removeClass(...className){for(let{length}=className;length--;)this.toggle(className[length],false)}
        addevent(...events){
            if(!Array.isArray(events[0])&&typeof events[0]==='object'&&events.length===1)events=Object.entries(events[0])
            for(let[eventName, event]of events){
                if(!event)[eventName,event]=eventName
                if(!this.#eventNames.has(eventName)){
                    if(event.toString().replace(/\s/g,'').replace(event.name,'').match(/^(\(\)=>{}|function\(\){})$/)){Elem.error('This function does absolutely nothing!');continue}
                    Elem.listeners.set(this.id+':'+eventName, event)
                    const eventfunc=(...e)=>void(eventfunc.disabled||(event.apply(this,e),--eventfunc.count||this.noevent(eventName)))
                    assign(eventfunc,{disabled:!1,count:1/0})
                    if(eventName.includes(':')){[eventName,eventfunc.count]=eventName.split(':');eventfunc.count=parseInt(eventfunc.count)}
                    this.content.addEventListener(eventName,eventfunc)
                    this.#eventNames.set(eventName,eventfunc)
                    globalEventHolder.add(event)
                    Elem.debug(`Event "${eventName}" added${this.content.id?' to '+this.content.id :''}:\n${event}`)
               }
                else Elem.warn(`Duplicate event listeners are not allowed:"${eventName}" ${this.id?'on "'+this.id+'"' :''}`)
           }
       }
        get generation(){let num=0;for(let{parent}=this;parent;++num,({parent}=parent));return num}
        [Symbol.toPrimitive](type){return type==='number'?this.generation:this.toString()}
        hasevent(eventName){return this.#eventNames.has(eventName)}
        noevent(...target){
            // for(let event of target){
            for(let{length}=target;length--;){
                const event=target[length]
                this.content.removeEventListener(event, this.#eventNames.get(event))
                this.#eventNames.has(event)?
                Elem.listeners.delete(this.id+':'+event)
                :Elem.warn(`No event found for "${event}"${this.content.id?' on '+this.content.id :''}`)
                Elem.debug(`Removing event "${event}" ${this.content.id?'from '+this.content.id :''}`)//:\n${this.#eventNames.get(event).toString()}`)
                this.#eventNames.delete(event)
           }
       }
        kill(){
            if(this.isDead)return Elem.error(this.id+' is already dead')
            this.ondeath?.()
            this.cleanup()
            this.content.remove()
            Elem.debug(`Element "${this.id}" was removed from body`)
            Elem.elements.delete(this)
            this.isDead=true
       }
        cleanup(){
            assign.invoke(this, {
                noevent:this.#eventNames.keys(),
                removeIntervals:0,
                removeTimeouts:0,
           })
            Elem.RO.unobserve(this.content)
            this.parent?.observer.unobserve?.(this.content)
            this.observer.disconnect?.()
            this.killChildren()
       }
        begin(o){
            let {tag} = o
            if(tag==='button')this.styleMe({cursor:'pointer'})
            else if (tag==='input' && !o.autocorrect&&!o.autocapitalize)this.autocorrect=this.autocapitalize='off'
            Object.defineProperty(this,'on',{configurable:1,enumerable:1,get(){delete this.on;return this.on=new Proxy(this,{get(t,prop){return Elem.listeners.get(t.id+':'+prop)},set(t,prop,val){if(t[prop])t.noevent(prop);if(val==null)return true;t.addevent({[prop]:val});return true}})}})
            Elem.RO.observe(this.content)
            Elem.elements.add(this)
            Elem.registry.register(this, this.id)
            o.start?.call(this)
       }
        disable(){this.disabled=true}
        enable(){this.disabled=false}
        killChildren(){const n=this.children;for(let{length}=n;length--;){const o=n[length];while(this.content.contains(o?.content))o.kill()}return this}
        hide(){(this.toggle('hidden',true),this)}
        show(){(this.toggle('hidden',false),this)}
        toggle($, force){this.content.classList.toggle($, force)}
        conceal(){this.styleMe({visibility:'hidden'})}
        reveal(){this.styleMe({visibility:'visible'})}
        getModifiedStyleProperties(){const out={};for(let i=0;i in this.content.style;++i)out[this.content.style[i]]=this.content.style.getPropertyValue(this.content.style[i]);return out}
        get visibilityStatus(){return{visibility:this.style.visibility,opacity:this.style.opacity,display:this.style.display,hidden:this.content.classList.contains('hidden'),zIndex:this.style.zIndex}}
        async fadeOut(callback){return this.transition({frames:{opacity:0},timing:{duration:300},},()=>{callback?.call(this);this.hide()})}
        async fadeIn(callback){this.styleMe({opacity:0});this.show();return this.transition({frames:{opacity:1},timing:{duration:300},},()=>{callback?.call(this)})}
        async blink(callback){return this.fadeOut(()=>this.fadeIn(callback))}
        addTimeout(callback,interval_){callback.paused=false;let mult;if(typeof interval_==='object'){;if('seconds'in interval_)mult=1e3*interval_.seconds;else if('minutes'in interval_)mult=6e4*interval_.minutes;else if('hours'in interval_)mult=3.6e6*interval_.hours}else mult=interval_;const id=timeout(()=>{callback.paused||this.timeouts.get(id).call(this);this.timeouts.delete(id)},mult);this.timeouts.set(id,callback);return id}
        toggleInterval(id){const n=this.intervals.get(id);return n.paused=!n.paused}
        addInterval(callback,interval_){assign(callback,{paused:!1,count:interval_?.count??-1});let mult;if(typeof interval_==='object'){if('seconds'in interval_)mult=1e3*interval_.seconds;else if('minutes'in interval_)mult=6e4*interval_.minutes;else if('hours'in interval_)mult=3.6e6*interval_.hours}else mult=interval_;const id=interval(()=>callback.paused||(this.intervals.get(id).call(this), --callback.count)||this.removeInterval(id), mult);this.intervals.set(id, callback);return id}
        removeInterval(id){this.intervals.delete(id);clearInterval(id)}
        removeIntervals(){for(const[id]of this.intervals)this.removeInterval(id)}
        removeTimeout(id){this.timeouts.delete(id);clearTimeout(id)}
        removeTimeouts(){for(const[id]of this.timeouts)this.removeTimeout(id)}
   }
        var SceneryElem=class SceneryElem extends Elem {
            static all=new Set
            static frame=0
            static update(){++this.frame;for(const o of this.all)o.#update()}
            position=new Vector2
            rotation=0
            angular=0
            #mirror=0
            #lifetime=0
            #hasBeenSeen=false
            flip(){this.#mirror+=180}
            cleanup(){SceneryElem.all.delete(this);super.cleanup()}
            velocity=new Vector2
            static{const{prototype}=this,k=Object.getOwnPropertyNames(prototype);for(let{length}=k;length--;){const key=k[length],descriptor=Object.getOwnPropertyDescriptor(prototype,key);if(typeof descriptor.value==='function'&&key!=='constructor'){const 우정=prototype[key];prototype[key]=(份=>{return You_are_so_awesome_and_i_love_you;function You_are_so_awesome_and_i_love_you(...l){if(hasOwn(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩))return 우정.apply(this,l);throw 份}})(ERROR_MESSAGE())}}}
            constructor(opts={},i){ opts.tag??='div';super(opts,i);new.target.all.add(this);this.styleMe({position:'absolute', margin:'auto'});this.position.set(+opts.x||0,+opts.y||0);this.#update();this.parent?.observer.observe(this.content)}
            rotate(rot=0){this.rotation+=rot}
            setAV(speed=0){this.angular=speed}
            outofbounds(){this.kill()}
            detectVisibility(n){this.isOverFlowed=n}
            #update(){if(++this.#lifetime>1){if(!this.isOverFlowed){if(this.#hasBeenSeen||(this.position.y+this.bounds.y<0&&this.velocity.y <=0||this.velocity.y>=0&&this.position.y-this.bounds.y>this.parent?.bounds.y)||(this.position.x+this.bounds.x<0&&this.velocity.x<=0||this.velocity.x>=0&&this.position.x-this.bounds.x>this.parent?.bounds.x))this.outofbounds?.()}else this.#hasBeenSeen=true;this.update?.()}this.styleMe({transform:`rotateY(${this.#mirror}deg)translate(${(this.position.x)}px,${(this.position.y)}px)`,'transform-origin':'center',});this.rotate(this.angular);this.position.add(this.velocity)
                // Causes reflows
                //  this.style.left=`${Math.trunc(this.position.x)}px`
                //  this.style.top=`${Math.trunc(this.position.y)}px`
           }
       }
    function __(){
        document.querySelectorAll('script').forEach(o=>o.remove())
        for(let elem of Elem.elements){if(elem instanceof SceneryElem)elem.kill();else elem.randomID&&elem.content.removeAttribute('id')}return document.documentElement.getHTML()}
    var on=add,off=remove,getEventListeners=yes,globalEventHolder=new WeakSet
        function yes(eventTarget){return eventTarget?.[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩]}
        function add(target,...args){if(target instanceof EventTarget)return addevent.apply(target, args);throw TypeError('Invalid event target:'+target)}
        function remove(target,...args){if(target instanceof EventTarget)return noevent.apply(target, args);throw TypeError('Invalid event target:'+target)}
        function addevent(...events){(𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩 in this)||Object.defineProperty(this,𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩,{value:new Map,writable:0,configurable:0,enumerable:0});if(!Array.isArray(events[0])&&typeof events[0]==='object'&&events.length===1)events=Object.entries(events[0]);for(let[eventName,event]of events){if(!event)[eventName,event]=eventName;if(!this[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩].has(eventName)){const eventfunc=(...e)=>void(eventfunc.disabled||(event.apply(this, e),--eventfunc.count||off(this,eventName)));eventfunc.disabled=false;eventfunc.count=1/0;if(eventName.includes(':')){const a=eventName.split(':');eventName=a[0];eventfunc.count=parseInt(a[1])}this.addEventListener(eventName, eventfunc);this[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩].set(eventName, eventfunc);Elem.debug(`Event "${eventName}" added to ${this}:\n${event}`);globalEventHolder.add(event)}else Elem.warn(`Duplicate event listeners are not allowed:"${eventName}" on ${this}`)}}
        function noevent(...target){for(let{length}=target;length--;){const event=target[length];this.removeEventListener(event,this[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩].get(event));this[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩].has(event)?Elem.debug(`Removing event "${event}" from ${this}`):Elem.warn(`No event found for "${event}" on ${this}`);this[𝘿𝙞𝙞𝙣𝙠𝙞_𝙞𝙨_𝙝𝙤𝙩].delete(event)}}
}
{
    let loglevel=3
    Object.defineProperty(Elem,'loglevel',{get,set})
    const map=new Map([[0,_0],[1,_1],[2,_2],[3,_3],[4,_4],[5,_5]])
    ,{logLevels}=Elem
    function _0(){const k=Object.keys(logLevels);for(let{length}=k;length--;)logLevels[k[length]]=false}
    function _1(){map.get(0)();return logLevels.error=true}
    function _2(){return logLevels.warn=map.get(1)()}
    function _3(){return logLevels.success=map.get(2)()}
    function _4(){return logLevels.info=map.get(3)()}
    function _5(){return logLevels.debug=map.get(4)()}
    function get(){return loglevel}
    function set(val){if(!utilMath.sanitize(val)||!utilMath.isInt(val)||val>5||val<0)throw RangeError("Supported log levels are 0 — 5, with 0 being none and 5 being all");return map.get(+(loglevel=val))()}
}
assign(window,{$1:null,_:Elem.$.bind(Elem),__(id){_(id)?.kill()}})
/*if(local.fragment==='constructor'){
    function _____________(){
        return new DocumentFragment
   }
    createDocumentFragment=_____________
}*/
const color=(()=>{
    const n=new OffscreenCanvas(0, 0).getContext('2d')
    return new Proxy(Object.defineProperties({}, {
        dhk:{value:___},
        choose:{value:choose,},
        log:{value:__},
        opposite:{value}
   }),{set,get})
    function set(t,p,v){return Reflect.set(t,p,v)}
    function __(e){console.log(`%c ${e}`,`color:${e};font-size:100px;background-color:${e}`)}
    function ___(e,f=40){let $=parseInt((e=(''+e).replace(/^#/,"")).substring(0,2),16),a=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return $=Math.round($*(1-f/100)),a=Math.round(a*(1-f/100)),r=Math.round(r*(1-f/100)),$=Math.min(255,Math.max(0,$)),a=Math.min(255,Math.max(0,a)),r=Math.min(255,Math.max(0,r)),"#"+[$,a,r].map(e=>{let f=e.toString(16);return 1===f.length?"0"+f:f}).join('')}
    function choose(){return'#'+ran.frange(0,16777216).toString(16).padStart(6,0)}
    function value(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw Error('Invalid HEX color.');let f=(255-parseInt(e.slice(0,2),16)).toString(16),$=(255-parseInt(e.slice(2,4),16)).toString(16),a=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+(''+f).padStart(0,2)+(''+$).padStart(0,2)+(''+a).padStart(0,2)}
    function get(t,prop){if(CSS.supports('color',prop)){n.fillStyle=prop;return n.fillStyle}if(prop in t)return t[prop];throw TypeError('CSS does not support the color "'+prop+'"')}
})()
const{body,html}=window
/*,
cursed={
    reload(){
        document.write(document.documentElement.outerHTML)
   },
    shuffle(){
        let elements=[...document.querySelectorAll('*')]
        , styles=elements.map(el=>getComputedStyle(el))
        for(let i=elements.length-1;i;i--){
            let j=Math.floor(Math.random()*(i+1))
            [elements[i], elements[j]]=[elements[j], elements[i]]
       }
        elements.forEach((el, index)=>{
            let sourceStyles=styles[index]
            for(let property of sourceStyles)
                el.style[property]=sourceStyles.getPropertyValue(property);
            
       })
   }
}*/
//Object.keys(Elem.logLevels).forEach(o=>Elem.logLevels[o]=1)
class Shadow {
    #me
    constructor(parent,css,options) {
        if (!(parent?.content instanceof Elem))
            parent = parent.content
        this.#me =parent.attachShadow(options??{mode:'open',})
        css&&this.#me.appendChild(style(css))
        return this.#me
    }
}
{
    let n = new Shadow( $({tag:'div',parent:html}),`
    button:hover {
    filter: brightness(0.9);
    transition:filter 0.1s;
    }
    .hidden{display:none;}
    button:active {
        transform:scale(90%,90%);
        transition:transform 0.1s;
        }
        button {
            transition: transform 0.1s;
            border-radius: 5px;
            border-style: solid;
            margin:10px;
            }
            .bg {
                background-color:rgba(0, 0, 0, 0.37);
                width:100vw;
                height:100vh;
                display:flex;
                overflow:none;
                text-align:center;
                vertical-align:middle;
                align-items:center;
                align-content:center;
                justify-content:center;
                justify-items:center;
                }
                * {
                font-family:monospace;
                }
                h1,p {margin:0;}
    .menu {
    background-color:var(--primary);
    padding: 50px;
    position:relative;
    text-align:center;
    min-width: 16vw;
    max-width: 20vw;
    min-height: fit-content;
    max-height: 200px;
    transform-origin:center;
    border-radius:5px;
    z-index:9999;
    }
    `.replace(/\n/g,''),{mode:'closed',clonable:true})
    var shadow = $({tag:'div',styles:{position:'absolute','z-index':99999,margin:'0',padding:'0'}})
    n.appendChild(shadow.content)
}
/*class Popup {
    confirm=null
    constructor({cancelable=false,text='Alert'}) {
        this.confirm = $({tag:'button',txt:'Confirm',events:{
            
        }})
        return new Promise(resolve=>{
            
            })
            }
            }*/
{
    //let repeatingImage=null
    var Prompt = pr
    function pr({ type = 'text',defaultValue, subtext = '', text = 'Prompt', cancelable = false }) {
        shadow.killChildren()
        return new Promise(resolve =>{
            let div = $({
                tag: 'div', class: 'bg', parent: shadow, display: 'grid',
                style: 'position:fixed;top:50%;left:50%;transform-origin:center;transform:translate(-50%,-50%)',
            })
            let no
            let yes = $({
                tag: 'button', txt: 'Confirm',
                events: {
                    async 'click:1'() {
                        no?.noevent('click')
                        await outer.fadeOut()
                        resolve(val.value)
                        div.fadeOut(div.kill)
                    }
                },
                styles: {
                    'background-color': color.lightgreen,
                    'border-color': color.lightgreen,
                }
            })
            let val = $({
                placeholder: 'Type here',
                tag:'input',
                type, styles: {
                    'text-align': 'center',
                    width: '90%',
                    height: '30px',
                    'border-radius': '5px',
                    margin: '5px'
                }
            })
            let children = []
            if (typeof text === 'string') {
                children.push($({ tag: 'h1', text: text.replace(/\n/g, '<br>') }),)
            }
            else if (text instanceof Elem) children.push(text)
                
                if (typeof subtext === 'string') {
                    children.push($({ tag: 'p', text: subtext.replace(/\n/g, '<br>') }),)
                }
                else if (subtext instanceof Elem) children.push(subtext)
                    
                    if (type !== 'none') children.push(val)
                else {
            val.hide()
            val.value='yes'
        } 
            if (defaultValue!==undefined) val.value=defaultValue
            let outer = $({
                tag: 'div', class: 'menu', parent: div, children: [
                    $({
                        tag: 'div', children 
                    }),
                    yes
                ]
            })
            div.fadeIn(() =>{
                type!=='none'?val.content.focus():yes.content.focus()
                val.on.keydown = ({key}) =>{
                    if (key === 'Enter') yes.content.click()
                        else if (key === 'Escape') no.content.click()
                }
            })
            yes.after = no = $({
                tag: 'button',
                events: {
                    async 'click:1'() {
                        yes.noevent('click')
                        await outer.fadeOut()
                        resolve(null)
                        div.fadeOut(div.kill)
                    }
                },
                    styles: {
                        'background-color': color.red,
                        'border-color': color.red,
                    }, txt: 'Cancel'
                })
            cancelable||no.hide()
            outer.transition({
                timing: {
                    duration: 400,
                    easing: 'ease-in-out',
                },
                frames: {
                    transform: ['translateY(-100px) scale(0.8,0.9)', ''],
                    filter: ['blur(10px)', ''],
                    opacity: [0, 1]
                }
            })
        })
    }
}
/*function Q(tag,opts){
    return $({tag,...opts})
    }*/
   
   async function getDataUrl(url){
       let data
       try {
           let response=await fetch(url, {
               method:'GET',
               mode:'cors'
            })
            if(!response.ok){
                Elem.error(`Failed to fetch image. Status: ${response.status}`)
                throw ':('
            }
        }catch(e){
            Elem.error(`Resource Error: ${url}-${e.message}`)
        throw ':('
    }
    try {
        data=await response.blob()
   }catch(e){
       Elem.error(`Failed to convert response to blob:${e.message}`)
       return ':('
    }
    function x(resolve, onerror){
        function onloadend(){
            return resolve(reader.result)
       }
        const reader=assign(new FileReader, {
            onloadend,
            onerror
       })
        readAsDataURL(data)
   }
    return new Promise(x)
}
{
    var intervals=new Map,interval=a,timeout=b,remove=c
    function a(callback,time){const out=setInterval(callback,time);intervals.set(out,callback);return out}
    function b(callback,time){const out=setTimeout(()=>{callback();intervals.delete(out)},time);intervals.set(out,callback);return out}
    function c(id){if(intervals.has(id)){clearInterval(id);intervals.delete(id)}else Elem.warn('No interval/timeout with id '+id)}
}
const gopd=Object.getOwnPropertyDescriptor,
gopds=Object.getOwnPropertyDescriptors,
gopn=Object.getOwnPropertyNames,
//Freaking methods are too long
util={...utilArray,...utilMath,...utilString,...ran}
{
    let primary,
    secondary
    primary=local.primary??='#3BB43B'
    secondary=local.secondary??=color.dhk('#3BB43B')
    const t='I love you so much please don\'t disable me 🥺'
    on(document, {
        'DOMContentLoaded:1':{
            async[t](){
                document.getElementById('__load__')?.remove()
                if(!Elem.USE_CUTESY_FONT||typeof FontFace==='undefined')return //How could you :(
                    try {
                    //THE B E S T FONT OF ALL TIME RIGHT HERE LADIES AND GENTLEMEN
                    const cutefont=new FontFace('Choco cooky', 'url(https://addsoupbase.github.io/media/Chococooky.woff)')
                    document.fonts.add(cutefont)
                    await cutefont.load()
                    Elem.success('Cutesy font loaded hehe')
                }catch {
                    Elem.error('Cutesy font could not be loaded 😞')
                }
            }
        }[t]
    })
   let arr=[Math,utilArray,utilMath,utilString,ran,assign,util];for(let{length}=arr;length--;)Object.freeze(arr[length])
    document.head.appendChild(style(`
        @property --primary {syntax:"<color>";inherits:false;initial-value:${primary};}
            @property --secondary{syntax:"<color>";inherits:false;initial-value:${secondary};}
                .centerX{left:50%;position:fixed;transform:translateX(-50%)}
                .centerY{top:50%;position:fixed;transform:translateY(-50%)
                .center{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}
                .right{position:absolute;right:100%;}
                .hidden{display:none;}
                `))
                html.on.click=a
                function a({target}){$1=target.content??null}}
 //Dont need to modify anymore
function link(url){return new URL(url,location)}
function remix(oldFunc,{before,after}={}){if(oldFunc.prototype)Object.setPrototypeOf(remix,oldFunc.prototype);return assign(remix,oldFunc);function remix(...a){before?.apply(this,a);const instance=new.target?new oldFunc(...a):oldFunc(...a);after?.apply(instance,a);return instance}}
function safelyConvertToString(maybestring){if(typeof maybestring==='string')return maybestring;let out;try{/*Basic*/out=maybestring.toString()+''}catch{try{/*Maybe it has some weird toString function?*/out=maybestring+''}catch{/*Last resort something like: [object Null]*/out=toString.call(maybestring)}}return out}
function zoom(zoom){return html.styleMe({transform:`scale(${zoom},${zoom})`})}
function MapObj(...values){if(values.length%2)throw TypeError("Invalid key/value pairs");const map=new Map;for(let i=0,{length}=values;i<length;i+=2){const key=values[i],value=values[i+1];map.set(key,value)}return map}
function $(opts,t=Elem){if(typeof opts==='string')throw TypeError('This is not jQuery');return new(t===true?Elem:t)(opts)}
function createDocumentFragment(){return document.createDocumentFragment()}
function assign(target,props){return Object.assign(target,props)}
function*backwards(iterable){for(let{length}=iterable;length--;)yield iterable[length]}
function style(css){let out=document.createElement('style');out.textContent=css;return out}
function Alert(text='Alert',subtext='Message'){return Prompt({type:'none',cancelable:false,text,subtext})}
function Confirm(text='Confirm',subtext='Message'){return Prompt({type:'none',cancelable:true,text,subtext})}
function namedFunction(name='',original){return({[name](...args){return original.apply(this,args)}}[name])}
//Just for funzies ^