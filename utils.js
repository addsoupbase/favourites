/* Gif to webp:
gif2webp file.gif -o file.webp
Png to webp
cwebp file.png -o file.webp
*/
'use strict'
assign(assign, {
    nullish(target,props){for(let key in props)target[key]==null||delete props[key];return this(target,props)},
    not(target,props){for(let key in props)target[key]&&delete props[key];return this(target,props)},
    and(target,props){for(let key in props)target[key]||delete props[key];return this(target,props)},
    notin(target,props){for(let key in props)(key in target)&&delete props[key];return this(target,props)},
    in(target,props){for(let key in props)(key in target)||delete props[key];return this(target,props)},
    invoke(target,methods){const out=[];for(let key in methods)out.push(target[key].apply(target,Array.from(methods[key]??0)));return out},
    get'??='(){return this.nullish},
    get'&&='(){return this.and},
    get'||='(){return this.not}
})
const ran = (() => {
        const //previouslygenerated = new Set,
            { floor, random } = Math
        return {
            get coin() { return choose(true, false) },
            get flip() { return choose(1, -1) },
            choose,
            range,
            frange,
            pseudo,
            true:_true,
            shuffle,
            gen,
            Randomizer,
        }
        function choose(...deck) { return deck[floor(random() * deck.length)] }
        function range(min, max) { return random() * (max - min) + min }
        function frange(min, max) { return floor(range(min, max)) }
        function pseudo() { return performance.now() % 1 }
        function _true() { return crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff }
        function shuffle(...item) {
            for (let i = 0, { length } = item; i < length; ++i) {
                const j = floor(random() * (i + 1));
                [item[i], item[j]] = [item[j], item[i]]
            }
            return item
        }
        function gen(length = 6) {
          //  const pool = utilString.alphabet + utilString.numbers + utilString.ALPHABET, poolSize = pool.length
            let str
            //do str 
            = 
            Array.from({ length }, okay4).join('')
           // while (previouslygenerated.has(str))
           // previouslygenerated.add(str)
           // previouslygenerated.size > 3e3 && previouslygenerated.clear()
            return str
           // function okay() { return pool[(random() * poolSize)|0] }
           // function okay2() {let codePoint;do codePoint=floor(random()*0x110000);while(codePoint >= 0xD800 && codePoint <= 0xDFFF)return String.fromCodePoint(codePoint)}
          //function okay3(){function randomEmoji() {const emojiRanges=[[0x1F600,0x1F64F],[0x1F300,0x1F5FF],[0x1F680,0x1F6FF],[0x1F700,0x1F77F],[0x1F900,0x1F9FF],[0x1FA70,0x1FAFF]],[start,end]=emojiRanges[floor(random()*emojiRanges.length)],codePoint=floor(random()*(end-start+1))+start;return String.fromCodePoint(codePoint)}}
          function okay4() {return String.fromCodePoint(floor(random()*0x110000))}
        
        }
        function Randomizer(n = 6) {
            if (new.target) debugger
            return new Proxy({}, { get })
            function get(t, p) {
                return t[p] ??= gen(n)
            }
        }
    })()
const SUPPORTS = {
    attributeStyleMap:false //'StylePropertyMap'in globalThis
    //Firefox does not support it and it seems like its slower anyway soo
}
const utilMath = (() => {
    const π = Math.PI
    return {
        isInt:Number.isInteger,
        sanitize,
        equality,
        toRad,
        toDeg,
        diff,
        clamp,
        get cycle() { return Cycle },
        Cycle,
        /* arreq(...targets) {
          if (targets.length < 2) throw RangeError('At least 2 arguments required.')
          for (let i = 0, max = Math.max(...targets.map(o => o.length)) || 1; i < max; ++i) {
              if (!Array.isArray(targets[i])) throw TypeError(`arguments[${i}] is not an Array (${typeof arguments[i]})`)
              for (let comparisons of targets) if (!utilMath.equality(targets[0][i], comparisons[i])) return false
          }
          return true
      },*/
    }
    function sanitize(num) {return num===+num&&num!=null&&isFinite(num)}
    function equality(t,...target) {
        return target.every(is)
        function is(o) { return Object.is(o, t) }
    }
    function toRad(deg) { return deg * π / 180 }
    function toDeg(rad) { return rad * 180 / π }
    function diff(a, b) { return Math.abs(a - b) }
    function clamp(val, min, max) { return Math.min(max,Math.max(min,val)) }
    function Cycle(...items) {
        if (new.target) debugger
        const { length } = items
        let x = 0
        return {
            get next() { return move(1) },
            get previous() { return move(-1) },
            get val() { return move(1) }, move, *[Symbol.iterator]() { for (; ;)yield this.val }
        }
        function move(step = 1) {const old=x;x+=step|0||1;return items[old%length]}
    }
})()
const utilString = (() => {
    {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
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
    function contains(string, ...searches) { return searches.every(string.match, string) }
    function addCommas(num) {
        return(+num).toLocaleString()//(num + '').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    function shorten(string, len = 32) {
        let out = string.slice(0, len)
        if (string.length > len) out += '…'
        return out
    }
    function clip(string, len) { return string.slice(len, string.length - len) }
    function reverse(string) { return[].toReversed.call(string).join('') }
    function upper(string) { return string[0].toUpperCase() + string.slice(1) }
})()
const utilArray = (() => {
    return {
        assemble,
        center,
        insert,
        remove,
        swap,
        swapInside,
        avg
    }
    function assemble(arrayLike, ...sequence) {
        const out = []
        for (let{length}=sequence,i=0;i<length;++i)
        out.push(arrayLike.at(sequence[i]))
        return out
    }
    function center(o) { return o[(o.length / 2)|0] }
    function insert(array, item, index) { return array.splice(index, 0, item) }
    function remove(item, index) { return typeof item === 'string' ? item.slice(0, index) + item.slice(index + 1) :item.splice(index, 1) }
    function swap(item, a, b) { return ([item[a], item[b]] = [item[b], item[a]], item) }
    function swapInside(item, a, b) {
        const slot = item.indexOf(a),
            slot2 = item.indexOf(b)
        if (slot !== -1 && slot2 !== -1) return item.swap(slot, slot2)
    }
    function avg(array, type) {
        if (!array.length) return NaN
        const sorted = array.slice().sort(sort),
            { length } = sorted, { floor } = Math
        if (type) {
            //let median = sorted[Math.floor(length / 2)],
            const q1 = sorted[floor(length / 4)],
                q3 = sorted[floor(3 * length / 4)],
                IQR = q3 - q1,
                upperFence = q3 + 1.5 * IQR,
                lowerFence = q1 - 1.5 * IQR,
                filtered = sorted.filter(filter)
            return filtered.reduce(reduce) / filtered.length
            function filter(x){return x >= lowerFence && x <= upperFence}
        } 
         return sorted.reduce(reduce) / length
         function reduce(a,b) {return a+b}
         function sort(a,b) {return a-b}
    }
})()
{
    assign(utilString, {
        toOrdinal,
        badwords:RegExp([z(13, 8, 6, 6, 4, 17), z(1, 8, 19, 2, 7), z(5, 20, 2, 10), z(18, 7, 8, 19), z(2, 14, 2, 10), z(5, 0, 6), z(17, 4, 19, 0, 17, 3), z(3, 8, 2, 10)].join('|'))
    })
    utilMath.average = x
    const map = new Map(Object.entries({1:'st',2:'nd',3:'rd'}))
    //  document.addEventListener('readystatechange', _____)
    function x(...nums) { return utilArray.avg(nums) }
    function toOrdinal(o) { const num = +o, lastTwoDigits = num % 100, me = (o + "").at(-1); if ((lastTwoDigits >= 11 && lastTwoDigits <= 13) || !map.has(me)) return o + "th"; return o + map.get(me) }
    function z(...a) { return utilArray.assemble(utilString.alphabet, ...a).join('') }
    //  function _____() { if (!('fragment' in local) && typeof requestIdleCallback === 'function') requestIdleCallback(() => import('./timetest.js'), { timeout:3000000 }); document.querySelectorAll('script').forEach(o => o.remove()) }
}
const[local,session]=(() => {
    return [StorageManager(localStorage), StorageManager(sessionStorage)]
    function get(target, prop) { return prop === '__all__' ? Object.fromEntries(Array.from({ length:target.length }, (_, i) => [target.key(i), target.getItem(target.key(i))])) :target.getItem(prop) }
    function set(target, prop, value) { return !(prop !== '__all__' ? target.setItem(prop, value) :1) }
    function deleteProperty(target, prop) { return !(prop === '__all__' ? target.clear() :target.removeItem(prop)) }
    function has(target, prop) { return target.getItem(prop) !== null }
    function StorageManager(managee) {
        if (managee instanceof Storage) return new Proxy(managee, {
            get,
            set,
            deleteProperty,
            has,
        })
        throw TypeError('Expecting Storage, got ' + managee?.constructor?.name)
    }
})()
/*const Vector = class v {
    x = 0
    constructor(x = 0) {
        Object.seal(this)
        this.x = x
    }
    [Symbol.toPrimitive](type) {
        return type === 'number' ? this.x :'' + this.x
    }
}*/
const Vector2 = (() => {
    let v
    return assign(v=class v {
        x = 0
        y = 0
        constructor(x = 0, y = 0) {
            if (arguments.length === 1) {
                y = v.y(x)
                x = v.x(x)
            }
            Object.seal(this)
            this.set(x, y)
        }
      get[Symbol.toStringTag](){
        return'Vector2'
      }
        static get up() {
            return new v(0, 1)
        }
        static get random() {
            const out = new v
            out.randomize()
            return out
        }
        static get down() {
            return new v(0, -1)
        }
        static get left() {
            return new v(-1, 0)
        }
        static get right() {
            return new v(1, 0)
        }
        set(...numbers) {
            if (numbers.length === 1) numbers = [...numbers[0]]
                const keys = Object.keys(this)
            for (let {length} = numbers; length--;) 
                if (keys[length] in this)
                    this[keys[length]] =  utilMath.clamp(+numbers[length], Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
        }
        pow(vector) {
            if (!Array.isArray(vector)) vector = Array.from(vector)
            for (let { length } = this.value; length--;) vector[length] = this[length] ** vector[length]
            this.set(vector)
            return this
        }
        add(vector) {
            if (!Array.isArray(vector)) {
                if (1 in arguments) vector = [vector, arguments[1]]
                vector = Array.from(vector)
            }
            for (let { length } = this.value; length--;) vector[length] = this[length] + vector[length]
            this.set(vector)
            return this
        }
        subtract(vector) {
            if (!Array.isArray(vector)) {
                if (1 in arguments) vector = [vector, arguments[1]]
                vector = Array.from(vector)
            }
            for (let { length } = this.value; length--;) vector[length] = this[length] - vector[length]
            this.set(vector)
            return this
        }
        multiply(vector) {
            if (!Array.isArray(vector)) {
                if (1 in arguments) vector = [vector, arguments[1]]
                vector = Array.from(vector)
            }
            for (let { length } = this.value; length--;) vector[length] = this[length] * vector[length]
            this.set(vector)
            return this
        }
        divide(vector) {
            if (!Array.isArray(vector)) {
                if (1 in arguments) vector = [vector, arguments[1]]
                vector = Array.from(vector)
            }
            for (let { length } = this.value; length--;) vector[length] = this[length] / vector[length]
            this.set(vector)
            return this
        }
        normalize() {
            this.set(this.normalized)
        }
        randomize() {
            const { MIN_SAFE_INTEGER, MAX_SAFE_INTEGER } = Number
            this.set(ran.range(MIN_SAFE_INTEGER, MAX_SAFE_INTEGER), ran.range(MIN_SAFE_INTEGER, MAX_SAFE_INTEGER))
        }
        negate() {
            this.set(this.negated)
        }
        invert() {
            this.set(this.inverse)
        }
        lerp({ to, time = 0.1 }) {
            this.subtract((this.minus(to)).multiply(time, time))
        }
        minus(...other) {
            return new v(this).subtract(...other)
        }
        get average() {
            return utilMath.average(/*[...this]*/this.x, this.y)
        }
        get inverse() {
            return new v(this.x ** -1, this.y ** -1)
        }
        get negated() {
            return new v(-this.x, -this.y)
        }
        get normalized() {
            return new v(...this.value.map(map, this))
            function map(o) { return o / this.magnitude || 0 }
        }
        get isValid(){
            return this.x===this.x&&this.y===this.y
        }
        get magnitude() {
            return this.value.reduce(reduce)
            function reduce(a, b) { return Math.abs(a + b) }
        }
        get sqrtMag() {
            return this.magnitude**.5
        }
        get value() {
            return [this.x, this.y]//Object.values(this)
        }
        toString() {
            return '(' + this.value.join(', ') + ')'
        }
        get 0() {
            return this.x
        }
        get 1() {
            return this.y
        }
        *[Symbol.iterator]() {
            yield this.x
            yield this.y
        }
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
    function x(vectorLike) {
        return vectorLike.x ?? vectorLike[0] ?? Object.values(vectorLike)[0]
    }
    function y(vectorLike) {
        return vectorLike.y ?? vectorLike[1] ?? Object.values(vectorLike)[1]
    }
    function angle(first, second) {
        const firstAngle = Math.atan2(y(first), x(first)),
            secondAngle = Math.atan2(y(second), x(second)),
            angle = secondAngle - firstAngle
        return Math.abs(angle)
    }
    /*function average(...vectors) {
        const x = vectors.map(o => v.x(o))
            , y = vectors.map(o => v.y(o))
        return new v(x.average(), y.average())
    }*/
    function difference(vector, vector2) {
        if (!Array.isArray(vector)) vector = Array.from(vector)
        if (!Array.isArray(vector2)) vector2 = Array.from(vector2)
        const out = Array.from(vector)
        for (let { length } = out;length--;) out[length] = utilMath.diff(vector2[length], vector[length])
        return new v(...out)
    }
    function distance(vector, vector2) {
        return Math.hypot(x(vector) - x(vector2), y(vector) - y(vector2))
    }
    function combine(...vectors) {
        const out = new v
        for (const v of vectors) out.add(v)
        return out
    }
    function multiply(...vectors) {
        const out = new v(1, 1)
        for (const v of vectors) out.multiply(v)
        return out
    }
    function max(vector, vector2) {
        return new v(Math.max(x(vector2), x(vector)), Math.max(y(vector2), y(vector)))
    }
    function min(vector, vector2) {
        return new v(Math.min(x(vector2), x(vector)), Math.min(y(vector2), y(vector)))
    }
   /* function equals(...vectors) {
        return utilMath.arreq(...vectors.map(N))
        function N(o) {return [v(o), y(o)]}
    }*/
})()
/*class Vector3 extends v {
    z
    constructor(x = 0, y = 0, z = 0) {
        super()
        if (arguments.length === 1 && x instanceof new.target) {
            ({z}=x)
        }
        this.set(x, y, z)
    }   
    get '2'() {
        return this.z
    }
}*/
/*class StrictArray {
    constructor(bouncer, ...elements) {
        return new Proxy(elements, {
            set(obj, prop, value) {
                const isIndex = !isNaN(prop) && Number.isInteger(+prop) && +prop >= 0
                if (isIndex) if (bouncer(value)) {
                    obj[prop] = value
                    return true
                } else throw TypeError(value + ' did not pass the test')
                obj[prop] = value
                return true
            }
        });
    }
}
class Matrix {
    elements = []
    constructor(length, height) {
        assign(this, { length, height })
        for (let i = height + 1; --i;)
            this.elements.push(Array.from({ length }, () => null))
    }
    get(x, y) {
        return this.elements.at(y).at(x)
    }
    set(x, y, val) {
        return modifyAt(this.elements.at(y), x, () => val), val
    }
    get rows() {
        return this.length
    }
    get columns() {
        return this.height
    }
    async image() {
        const cellSize = 2000
        let length = this.length * cellSize
            , height = this.height * cellSize
        const canvas = new OffscreenCanvas(length, height)
            , ctx = canvas.getContext('2d')
        assign(ctx, {
            fillStyle:color.grey,
            textAlign:'center',
            textBaseline:'middle',
            font:`${cellSize / 10}px monospace`,
        })
        ctx.fillRect(0, 0, length, height)
        function matchColor(value) {
            switch (typeof value) {
                case 'string':return color.red
                case 'bigint':case 'number':return color.darkblue
                case 'symbol':return color.lightgreen
                case 'object':return color.black
                case 'undefined':return color.purple
            }
        }
        for (let y = 0, { height } = this; y < height; ++y) {
            for (let x = 0, { length } = this; x < length; ++x) {
                const value = this.get(x, y)
                ctx.fillStyle = matchColor(value)
                ctx.fillText(
                    typeof value === 'string' ? '"' + value + '"' :value,
                    (x + 0.5) * cellSize, // Center horizontally
                    (y + 0.5) * cellSize, cellSize  // Center vertically
                )
            }
        }
        const blob = await canvas.convertToBlob()
        return URL.createObjectURL(blob)
    }
}
function modifyAt(array, index, modifier) {
    const idx = index < 0 ? array.length + index :index
    if (idx >= 0 && idx < array.length) array[idx] = modifier(array[idx])
}*/
const Color = class z {
    r = null
    g = null
    b = null
    a = null
    constructor(r = 0, g = 0, b = 0, a = 1) {
        assign(this, { r, g, b, a })
    }
    [Symbol.toPrimitive]() {
        return +(this.toString('hex').replace('#', ''))
    }
    static toHex(r, g, b) {
        return('#' + z.th(r) + z.th(g) + z.th(b)).toUpperCase()
    }
    static th(n) {
        return n.toString(16).padStart(2, 0)
    }
    static toHex2(r, g, b, a) {
        r = utilMath.clamp(r,0,255)
        g = utilMath.clamp(g,0,255)
        b = utilMath.clamp(b,0,255)
        a = Math.round(utilMath.clamp(a,0,1) * 255)
        return`#${z.th(r)}${z.th(g)}${z.th(b)}${z.th(a)}`
    }
    static toHSL(r, g, b) {
        r /= 255, g /= 255, b /= 255
        const max = Math.max(r, g, b)
            , min = Math.min(r, g, b)
        let h, s, l = (max + min) / 2
        const d = max - min
        s = (d === 0) ? 0 :(l < 0.5) ? d / (max + min) :d / (2 - max - min)
        if (d === 0) h = 0
        else {
            switch (max) {
                case r:h = (g - b) / d + (g < b ? 6 :0); break
                case g:h = (b - r) / d + 2; break
                case b:h = (r - g) / d + 4; break
            }
            h /= 6
        }
        h = Math.round(h * 360)
        s = Math.round(s * 100)
        l = Math.round(l * 100)
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    *[Symbol.iterator]() {
        yield this.r
        yield this.g
        yield this.b
        yield this.a
    }
    toString(format) {
        switch (format?.toLowerCase()) {
            default:
                return `rgb(${this.r} ${this.g} ${this.b} ${this.a})`
            case 'hex':
                return z.toHex(...this)
            case 'hex2':
                return z.toHex2(...this)
            case 'hsl':
                return z.toHSL(...this)
        }
    }
}
{
    const Key = Symbol(ran.gen(1)),
        ERROR_MESSAGE = TypeError('Illegal invocation'),
        {hasOwn} = Object
        let uniqueNumber = -1
    var Elem = class Elem {
        [Key] = Object.defineProperty(new Map, 'trigger', {
            value(search) {
                if (search)
                    this.eventNames.has(search)
                  ? this.eventNames.get(search)()
                    :Elem.warn(`Non-existent event:${search}`)
                else for (const [, n]of this.eventNames) n.call(this)
            }
        })
        get eventNames(){return this[Key]}
        static USE_CUTESY_FONT = true
        static getPageAsHTML = __
        static get #unique() {
            if (++uniqueNumber > 0x110000) uniqueNumber = 0
            return String.fromCodePoint(uniqueNumber)
        }
        static {
            Object.defineProperties(this, {
                DEPRECATED_TAGNAMES:{ value:/^(TT|ACRONYM|BIG|CENTER|DIR|FONT|FRAME|FRAMESET|MARQUEE|NOBR|NOEMBED|NOFRAMES|PARAM|PLAINTEXT|RB|RTC|STRIKE|TT|XMP)$/ },
                ILLEGAL_TAGNAMES:{ value:/^(SCRIPT|NOSCRIPT|STYLE|META|DOCTYPE|LINK|HEAD|HTML|TITLE)$/ },
                allElements:{ get:allElements },
                registry:{ value:new FinalizationRegistry(GarbageLog) },
                RO:{ value:new ResizeObserver(Ro) },
                loaded:{ value:new Set },
                failed:{ value:new Set },
                $:{
                    value(id) {
                        const out = document.getElementById(id.replace('#', ''))
                        out || this.error(`Cannot get element "${id.replace('#', '')}" as it does not exist`)
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
                children:{ get:getChildren, set:setChildren },
                before:{ set:before },
                after:{ set:after },
                detachedChildren:{ get:detachedChildren },
                set:{
                    configurable:1, writable:1,
                    value(val, type) {
                        type+=''
                        return map.has(type) ? 
                        this[map.get(type)] = val :
                        this.content.setHTMLUnsafe(val)
                    }
                }
            })
            const map = new Map(Object.entries({1:'textContent',2:'innerHTML',3:'innerText'}))
            function Ro(entries) {
                for (const { contentBoxSize, target } of entries) {
                    // For modern browsers that return an array (contentBoxSize[0])
                    const size = Array.isArray(contentBoxSize) ? contentBoxSize[0] :contentBoxSize
                    // target.content ??= {}
                    if (target.content)
                        target.content.bounds = {
                            x:size.inlineSize,  // Width
                            y:size.blockSize    // Height
                        }
                }
            }
            function allElements() {
                return [].map.call(document.querySelectorAll('*'), map).filter(filter)
                function map(o) { return o.content }
                function filter(o) { return Elem.elements.has(o) }
            }
            function detachedChildren() {
                const a =[...this.content.childNodes],
                    fragment = createDocumentFragment()
                for (let i = 0, { length } = a; i < length; ++i) {
                    a[i].remove()
                    if (a[i] instanceof Element)
                        fragment.appendChild(a[i])
                    else a[i].nodeValue = ''
                }
                return fragment
            }
            function before(e) { this.content.before(e.content) }
            function after(e) { this.content.after(e.content) }
            function getChildren() {
                return Array.from(this.content.children, from).filter(filter); 
                function from(o) { return o.content }
                function filter(o) { return o && !(o.content.tagName.match(Elem.ILLEGAL_TAGNAMES)) }
            }
            function setChildren(children) {
                //  for (let o of children) this.adopt(o)
                const frag = createDocumentFragment()
                for (let i = 0, { length } = children, o = children[i]; i < length; o = children[++i])
                frag.appendChild(o.content)
                this.content.appendChild(frag)
                //i think its faster but im not sure
            }
            function GarbageLog(heldValue) {
                Elem.debug(`Element "${heldValue}" was cleared from memory 📤`)
            }
        }
        raw() {
            return this.content.getHTML({ serializableShadowRoots:true })
        }
        eval(code) {
            return Function(`with(this)!class{static{${code}}}`).call(this)
        }
        assign(obj) {
            assign(this, obj)
        }
        refresh(){
            this.content.append(this.detachedChildren)
        }
        age = performance.now()
        static log() {
            console.log('bleh')
            //Object.keys(this.logLevels).forEach(o => this.logLevels[o] = !this.logLevels[o])
        }
        observer = {
            observe(child) {
                delete child.content.parent.observer
                child.content.parent.observer = new IntersectionObserver(く, {
                    root:child.content.parent.content,
                    threshold:0,
                })
                child.content.parent.observer.observe(child)
                function く(entries) {
                    for (const entry of entries)
                        entry.isIntersecting?entry.target.content.detectVisibility?.(true):entry.target.content.detectVisibility?.(false)        
                }
            }
        }
        /*static textStyle(message, options) {
            const elf = JSON.stringify(options).replaceAll(/\{|\}|\"/g, '').replaceAll(',', ';')
            console.trace(`%c ${message}`, elf)
        }*/
        styleMe(...prop) {
            if (!Array.isArray(prop[0]) && typeof prop[0] === 'object' && prop.length === 1 && prop[0]) prop = Object.entries(prop[0])
            //return this.content.style.cssText= prop.map(([key,val])=>`${key}:${val}`).join(';')
            for (const [propName, propValue]of prop) {
                if (propName.match(/height\_width|width\_height/)) this.styleMe({ height:propValue, width:propValue })
                else if (propName === 'max-height_width') this.styleMe({ 'max-height':propValue, 'max-width':propValue })
                else
                    if (SUPPORTS.attributeStyleMap) try {
                        //this one is slower
                        let n = propValue
                        if (typeof n === 'string') n = CSSStyleValue.parse(propName, n)
                        this.content.attributeStyleMap.set(propName, n)
                    } catch {
                        this.content.style.setProperty(propName, propValue)
                    }
                    else this.content.style.setProperty(propName, propValue)
                
                // this.content.style[propName] = propValue
                //this.content.style.setProperty(propName, propValue)
                //  CSSStyleValue.parse(propName,propValue)
            }
        }
        static noConsole() {
            console.warn(`No console mode was enabled, which means if you're reading this it was probably not on purpose (for obvious reasons)`)
            addEventListener('keydown', __)
            delete this.noConsole
            function __({ key }) {
                let value
                if (key?.toLowerCase() === 'backspace')
                    try {
                        prompt('Return Value:', eval?.('"use strict";' + (value = prompt('Input eval code...'))))
                    }
                    catch (error) {
                        prompt(error.constructor.name, error.message)
                    }
                    finally {
                        navigator.clipboard.writeText(value)
                    }
            }
        }
        static async bulk(callback, ...src) {
            const result = await Promise.all(src.map(map))
            return final(result)
            function res(response) {
                if (!response.ok) return Promise.reject(`Request failed with status ${response.status}`)
                const contentType = response.headers.get('Content-Type')
                if (contentType) {
                    let type
                    if (contentType.includes('application/json'))type='json'
                    else if (contentType.includes('application/octet-stream'))type='blob'
                    else type='text'
                    return response[type]()
                }
            }
            async function map(o) {
                const response = await fetch(o)
                return res(response)
            }
            function final() {
                callback?.(...src)
                console.groupCollapsed('Bulk load:')
                for (const sr of src) 
                Elem.success(`${link(sr)} loaded successfully`)
                console.groupEnd()
            }
        }
        static preload(src, callback) {
            if (this.loaded.has(src)) return src
            if (!src?.replace(/\s/g, '')) throw TypeError('No source for Media provided.')
            fetch(src).then(response)
            this.info(`Preloading Resource:${link(src)}`)
            return src
            function response(res) {
                if (!res.ok) {
                    Elem.error(`Resource error:${res.status}`)
                    Elem.failed.add(src)
                }
                else {
                    callback?.(src)
                    Elem.success(`Resource Pre-loaded:${link(src)}`)
                    Elem.loaded.add(src)
                }
            }
        }
        static youtube = class extends this {
            constructor(opts) {
                opts.tag = 'iframe'
                super(opts)
                assign(this, {
                    loading:'lazy',
                    frameborder:0,
                    referrerpolicy:'strict-origin-when-cross-origin',
                    allow:'fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                })
            }
        }
        static svgattr = 'viewBox cx cy stroke fill r strokeWidth'.split(' ')
        static attributes = new Set(this.svgattr.concat(('style xmlns for max min low high optimum target rel preload multiple disabled href draggable label innerText textContent innerHTML type action method required download style autobuffer value loading name checked src maxLength accept placeholder title controls id readonly width height frameborder allow').split(' ')))
        static {
            const { prototype } = this
            for (const key of Object.getOwnPropertyNames(prototype)) {
                const descriptor = Object.getOwnPropertyDescriptor(prototype, key)
                if (typeof descriptor.value === 'function' && key !== 'constructor') {
                    const 우정 = prototype[key]
                    prototype[key] = (俉俊 => {
                        return You_are_so_awesome_and_i_love_you
                        function You_are_so_awesome_and_i_love_you(...अ) { if (hasOwn(this,Key)) return 우정.apply(this, अ); throw 俉俊 }
                    }
                    )(ERROR_MESSAGE)
                }
            }
            for (const attribute of this.attributes) {
                const a = attribute.match(/textContent|innerHTML|innerText/)
                Object.defineProperty(this.prototype, attribute, {
                    get() {
                        if (hasOwn(this,Key))
                        return this.content[attribute] ?? null
                        throw ERROR_MESSAGE
                    },
                    set(val) {
                        if (hasOwn(this,Key)) 
                        if (a && this.childCount)
                        throw TypeError(`You are not allowed to set the "${attribute}" of a parent element`)
                        else this.content[attribute] = val
                        else throw ERROR_MESSAGE
                    }
                })
            }
        }
        static animateOnRequestAnimationFrame = new Set
        static requestAnimationFrame = (() => {
            let frame = 0
            const r =
                window.requestAnimationFrame ??
                window.webkitRequestAnimationFrame ??
                window.mozRequestAnimationFrame ??
                window.oRequestAnimationFrame ??
                window.msRequestAnimationFrame ??
                (callback => timeout(callback, 12))
            return function n() {
                if (!Elem.animateOnRequestAnimationFrame.size) return
                r(n)
                ++frame
                for (let toAnimate of Elem.animateOnRequestAnimationFrame)
                    try {
                        toAnimate.update(frame)
                    }
                    catch (e) {
                        console.error(e)
                        Elem.error(`"${toAnimate.id}" is missing an update method or has one that threw an error`)
                        Elem.animateOnRequestAnimationFrame.delete(toAnimate)
                    }
            }
        })()
        static listeners = new Map
        static warn(message) {
            this.logLevels.warn &&
            console.trace('%cWarning %c' + message, "font-size:12px;font-family:'Choco cooky',monospace;color:yellow;text-shadow:yellow 0px 0px 2px;", "font-family:'Choco cooky',monospace")
        }
        static error(message) {
            this.logLevels.error &&
            console.trace('%cError %c' + message, "font-size:12px;font-family:'Choco cooky',monospace;color:red;text-shadow:red 0px 0px 2px;", "font-family:'Choco cooky',monospace")
        }
        static info(message) {
            this.logLevels.info &&
            console.trace('%cInfo %c' + message, "font-size:12px;font-family:'Choco cooky',monospace;color:teal;text-shadow:teal 0px 0px 2px;", "font-family:'Choco cooky',monospace")
        }
        static success(message) {
            this.logLevels.success &&
            console.trace('%cSuccess %c' + message, 'font-size:12px;color:lightgreen;text-shadow:lightgreen 0px 0px 2px;' + "font-family:'Choco cooky',monospace;", "font-family:'Choco cooky',monospace;")
        }
        static debug(message) {
            this.logLevels.debug &&
            console.trace('%cDebug %c' + message, "font-size:12px;color:orange;text-shadow:orange 0px 0px 2px;font-size:10;font-family: 'Choco cooky',monospace;", "font-size:10;font-family:'Choco cooky',monospace;")
        }
        static elements = new WeakSet
        static logLevels = {
            error:true,
            warn:true,
            success:true,
            info:false,
            debug:false,
        }
        static select(self) {
            const out = new this({ self })
            if (out.content.children)
            for (const node of out.content.children) 
            node.nodeName.match(this.ILLEGAL_TAGNAMES)??
            this.select(node)
            return out
        }
        static {
            const out = { 'standards mode':'red' }
                , head = document.head.children
            'application-name og:description favicon color-scheme theme-color description googlebot viewport og:image og:title keywords charset'.split(' ').forEach(o => out[o] = 'red')
            this.select(document.documentElement)
            assign(window, {
                body:document.querySelector('body').content,
                html:document.querySelector('html').content
            })
            for (const o of head) {
                const butes = o.attributes,
                    name = o.getAttribute('name'),
                    prop = o.getAttribute('property'),
                    content = o.getAttribute('content')
                if (butes.charset) out.charset = o
                else if (o.getAttribute('rel') === 'icon') out['favicon'] = o
                else if (name === 'description' && butes[0]?.nodeValue) out['description'] = o
                else if (prop === 'og:description') out['og:description'] = o
                else if (name === 'theme-color' && content?.replace(/\s/g, '')) out['theme-color'] = o
                else if (name === 'application-name' && content?.replace(/\s/g, '')) out['application-name'] = o
                else if (name === 'googlebot' && content?.replace(/\s/g, '')) out['googlebot'] = o
                else if (name === 'color-scheme' && content?.replace(/\s/g, '')) out['color-scheme'] = o
                else if (prop === 'og:image') out['og:image'] = o
                else if (prop === 'og:url') out['og:url'] = o
                else if (name === 'og:title') out['og:title'] = o
                else if (name === 'viewport' && butes[1]?.nodeValue) out.viewport = o
            }
            if (document.title?.match?.(/^(Untitled|Document)$/) || !document.title?.replace(/\s/g, '') && !document.querySelector('title')) out['<title> element'] = 'red'
            else out['<title> element'] = document.querySelector('title')
            if (document.compatMode === 'CSS1Compat') out['standards mode'] = document.doctype
            console.groupCollapsed('%cView SEO Check for '+location, 'font-family:\'Choco cooky\',monospace')
            for (const [key, value]of Object.entries(out))
                if (typeof value !== 'string') console.debug('%c' + key, 'font-family:\'Choco cooky\',monospace;font-size:10px;color:lightgreen', value)
                else console.debug('%c' + key, 'font-family:\'Choco cooky\',monospace;font-size:10px;color:red')
                console.groupEnd()
            /* for (let script of document.scripts) {
                 script.addEventListener('load',function n(a){
                     this.removeEventListener('load',n)
                     Elem.success(this.src + ' finished executing')
                 })
                 script.addEventListener('error',function n(a){
                     this.removeEventListener('error',n)
                     Elem.error('Something went wrong when trying to load ' + this.src)
                 })
             }*/
        }
        setOnRequestAnimationFrame(updateFunc) {
            if (updateFunc) this.update = updateFunc
            Elem.animateOnRequestAnimationFrame.add(this)
            if (Elem.animateOnRequestAnimationFrame.size === 1)
                Elem.requestAnimationFrame()
        }
        clone({ deep = true, parent } = {}) { return new this.constructor({ parent, self:this.content.cloneNode(deep) }) }
        timeouts = new Map
        intervals = new Map
        constructor(opts) {
            //Main init
            const {tag} = opts
            if (!opts || !('tag'in opts) && (!('self'in opts) || !(opts.self instanceof Element)) && !('shadow'in opts)) throw TypeError('Missing tag name, shadow, or self in element creation')//return Elem.error('Cannot create element:missing tag')
            if (tag?.toUpperCase().match(new.target.ILLEGAL_TAGNAMES)) throw TypeError(`"${tag}" is not allowed as a tag name`)
            if (tag?.toUpperCase().match(new.target.DEPRECATED_TAGNAMES)) new.target.warn(`"${tag}" is deprecated and should not be used`, "font-family:'Choco cooky',monospace")
            if (tag ^ opts.self) throw TypeError('You must only pick between self or tag')
            if (opts.self) {
                if (new.target.elements.has(opts.self.content)) {
                    console.error(opts.self)
                    throw ReferenceError(`Duplicate element not allowed`)
                }
                this.content = opts.self
                if (this.content === document.body) opts.id = 'body'
                else if (this.content === document.documentElement) opts.id = 'html'
                else opts.id = (opts.id ?? opts.self.getAttribute('id')) || Elem.#unique
            }
            else {
                if (opts.shadow) this.content = opts.parent.content.attachShadow({ mode:'open', serializable:true })
                else this.content = document.createElement(tag)
                opts.id ??= Elem.#unique
                if (tag === 'button') this.styleMe({ cursor:'pointer' })
            }
            this.content.content = this
            for (const attr of new.target.attributes) if (attr in opts) this[attr] = opts[attr]
            if (opts.text) this.innerHTML = opts.text
            if (opts.message) this.innerText = opts.message
            if (this.content.getBoundingClientRect) {
                const f = this.content.getBoundingClientRect()
                this.bounds = { x:/*parseFloat(*/f.width/*)*/, y:/*parseFloat(*/f.height/*)*/ }
            }
            if (opts.class) {
                if (typeof opts.class === 'string') opts.class = opts.class.split(' ')
                for (let { length } = opts.class; length--;) this.content.classList.add(opts.class[length])
            }
            if (opts.events)
                this.addevent(opts.events)
            if (opts.styles)
                this.styleMe(opts.styles)
            if (arguments[1] === true) {
                debugger
                opts.parent = body
            }
            if (opts.parent) {
                if (typeof opts.parent === 'string') opts.parent = new.target.$(opts.parent)
                this.parent = opts.parent
            } 
            if (opts.children) this.children=opts.children
            if (opts.txt) this.textContent=opts.txt
            // if (Elem.logLevels.debug && !opts.self) {
            /*    let arr = ''
                for (let [key, value]of Object.entries(opts)) {
                    if (typeof value == 'object') {
                        value = Object.entries(value)
                        let str = ''
                        for (let [_key, _value]of value) str += `${_key}:${_value}\n`
                        value = str
                    }
                    arr += `${key}="${value}" `.replaceAll('\n', '').replaceAll(' ', '')
                }*/
            //       Elem.debug(`New <${opts.tag}> element:${this.id}`)//`:\n ${arr}`)
            //   }
            this.begin(opts)
        }
        get current() { return this.content }
        append(p) {
            p.content.appendChild(this.content)
        }
        adopt(child) {
            //Lets get this right once and for all
            this.content.appendChild(child.content)
        }
        /*set(val, type) {
            switch (type) {
                default:return this.content.setHTMLUnsafe(val)
                case 1:return this.textContent = val
                case 2:return this.innerHTML = val
                case 3:return this.innerText = val
            }
        }*/
        replaceWith(p) {
            this.content.replaceWith(p.content)
            return p
        }
        replace(p) {
            this.replaceWith(p)
            this.kill()
            return p
        }
        becomeChild(p) {
            this.content.appendChild(p.content)
        }
        prepend(p) {
            p.content.prepend(this.content)
        }
        get parent() {
            if (hasOwn(this,Key))
            return this.content.parentElement?.content ?? null
            throw ERROR_MESSAGE
        }
        set parent(val) {
            //i shouldve thought of this earlier
            if (hasOwn(this,Key)) 
            return val == null ? this.parent?.content.removeChild(this.content) :val.adopt(this)
            throw ERROR_MESSAGE
        }
        get childCount() {
            return this.children.length
        }
        batchAppendChild(length, childFunc) {
            this.children = Array.from({ length }, childFunc)
        }
        set txt(text) {
            this.textContent = text
        }
        get previous() {
            return this.content.previousElementSibling?.content ?? null
        }
        get next() {
            return this.content.nextElementSibling?.content ?? null
        }
        get firstChild() {
            return this.content.firstElementChild?.content ?? null
        }
        get index() {
            return this.parent?.children.indexOf(this.content.content) ?? null
        }
        toString() {
            return this.content.outerHTML
        }
        addClass(...className) { return this.add({ class:className }) }
        add(props) {
            if (props.class) 
                if (typeof props.class === 'string') props.class = [props.class]
                for (let { length } = props.class; length--;)
                    /*   if (!Elem.findClass($class)) {
                        Elem.messages.noclass($class)
                        } else if ([...this.content.classList].includes($class)) {
                            Elem.warn(`Class ${$class} already added${this.content.id ? ' to ' + this.content.id :''}`)
                            }
                            else { Elem.info(`Class ${$class} added${this.content.id ? ' to ' + this.content.id :''}`) }*/
                    this.toggle(props.class[length], true)
            return this
        }
        disableEvent(name) { this.eventNames.get(name).disabled = true }
        enableEvent(name) { this.eventNames.get(name).disabled = false }
        toggleEvent(name) { const e = this.eventNames.get(name).disabled; e.disabled = !e.disabled }
        async transition({ timing = { duration:1e3, iterations:1, easing:'ease', delay:0, direction:'normal', endDelay:0, fill:'forwards', }, frames }, callback) {
            assign['??='](timing, {
                duration:1e3,
                iterations:1,
                easing:'ease',
                direction:'normal',
                fill:'forwards'
            })
            // timing.composition
            try {
                const keyframeEffect = new KeyframeEffect(this.content, frames, timing)
                    , animation = new Animation(keyframeEffect)
                animation.play()
                await animation.finished
                animation.commitStyles()
                callback?.call(this)
            }
            catch (e) {
                if (!e.message.includes('Target element is not rendered.')) {
                    Elem.error(`Something went wrong when applying a transition to element ${this.id}. The ${e.constructor.name} is shown below:`)
                    throw e
                }
            }
        }
        anim(target, callback) {
            let keep = false
            if ('keep class'in target) keep = delete target['keep class']
            // switch (target.class) {
            //     default:
            this.add(target)
            //    break
            /*    case 'fade out':this.content.animate([
                    {opacity:1, easing:'ease-in'},
                    {opacity:0, easing:'ease-in'},
    
                ],500); break;
                case 'fade in':this.content.animate([
                    {opacity:0, easing:'ease-in'},
                    {opacity:1, easing:'ease-in'},
                ],500); break;*/
            //  }
            function _____() {
                this.noevent('animationend')
                callback?.call(this)
                //switch (target.class) {
                //    default:
                keep || this.removeClass(target.class);
                //break
                //    case 'fade out':alert(134);
                // }
            }
            this.addevent(['animationend', _____])
            return this
        }
        removeClass(...className) {
            for (let { length } = className; length--;)
                this.toggle(className[length], false)
        }
        get on(){return this.addevent}
        get off(){return this.noevent}
        addevent(...events) {
            if (!Array.isArray(events[0]) && typeof events[0] === 'object' && events.length === 1) events = Object.entries(events[0])
            for (let [eventName, event]of events) {
                if (!event) [eventName, event] = eventName
                Elem.listeners.set(this.id + ':' + eventName, event)
                if (!this.eventNames.has(eventName)) {
                    const eventfunc = (...e) => void(eventfunc.disabled||(event.apply(this, e),--eventfunc.count||this.noevent(eventName)))
                    eventfunc.disabled = !1
                    eventfunc.count = 1 / 0
                    if (eventName.includes(':')) {
                        const a = eventName.split(':')
                        eventName = a[0]
                        eventfunc.count = parseInt(a[1])
                    }
                    this.content.addEventListener(eventName, eventfunc)
                    this.eventNames.set(eventName, eventfunc)
                    globalEventHolder.add(event)
                    Elem.debug(`Event "${eventName}" added${this.content.id ? ' to ' + this.content.id :''}:\n${event}`)
                }
                else Elem.warn(`Duplicate event listeners are not allowed:"${eventName}" ${this.id ? 'on "' + this.id + '"' :''}`)
            }
        }
        get generation(){
            let num = 0
            for(let{parent}=this;
            parent;
            ++num,({parent}=parent));
            return num
        }
        [Symbol.toPrimitive](type) {
            return type==='number'
            ? this.generation
            :this.toString()
        }
        hasevent(eventName) { return this.eventNames.has(eventName) }
        noevent(...target) {
            // for (let event of target) {
            for (let { length } = target; length--;) {
                const event = target[length]
                this.content.removeEventListener(event, this.eventNames.get(event))
                this.eventNames.has(event) ?
                    Elem.listeners.delete(this.id + ':' + event)
                    :Elem.warn(`No event found for "${event}"${this.content.id ? ' on ' + this.content.id :''}`)
                Elem.debug(`Removing event "${event}" ${this.content.id ? 'from ' + this.content.id :''}`)//:\n${this.eventNames.get(event).toString()}`)
                this.eventNames.delete(event)
            }
        }
        kill() {
            this.ondeath?.()
            this.cleanup()
            this.content.remove()
            Elem.debug(`Element "${this.id}" was removed from body`)
            delete this[Key]
        }
        cleanup() {
            assign.invoke(this, {
                noevent:this.eventNames.keys(),
                removeIntervals:0,
                removeTimeouts:0,
            })
            Elem.RO.unobserve(this.content)
            this.parent?.observer.unobserve?.(this.content)
            this.observer.disconnect?.()
            this.killChildren()
        }
        begin(o) {
            Elem.RO.observe(this.content)
            Elem.elements.add(this)
            Elem.registry.register(this, this.id)
            o.start?.call(this)
        }
        disable(){
            this.disabled=true
        }
        enable(){
            this.disabled=false
        }
        killChildren() {
            const n = this.children
            for (let { length } = n; length--;) {
                const o = n[length]
                while (this.content.contains(o?.content)) o.kill()
            }
            return this
        }
        hide() { (this.toggle('hidden', true), this) }
        show() { (this.toggle('hidden', false), this) }
        toggle($, force) { this.content.classList.toggle($, force) }
        conceal() {
            this.styleMe({ visibility:'hidden' })
        }
        reveal() {
            this.styleMe({ visibility:'visible' })
        }
        getModifiedStyleProperties() {
            const out = {}
            for (let i = 0;i in this.content.style;++i) out[this.content.style[i]] = this.content.style.getPropertyValue(this.content.style[i])
            return out
        }
        get visibilityStatus() {
            return{
                visibility:this.style.visibility,
                opacity:this.style.opacity,
                display:this.style.display,
                hidden:this.content.classList.contains('hidden'),
                zIndex:this.style.zIndex
            }
        }
        async fadeOut(callback) {
           return this.transition({
                frames:{ opacity:0 }, timing:{ duration:300 },
            }, () => {
                callback?.call(this)
                this.hide()
            })
        }
        async fadeIn(callback) {
            this.styleMe({ opacity:0 })
            this.show()
           return this.transition({ frames:{ opacity:1 }, timing:{ duration:300 }, }, () => { callback?.call(this) })
        }
        async blink(callback) { return this.fadeOut(() => this.fadeIn(callback)) }
        addTimeout(callback, interval_) {
            callback.paused = false
            let mult
            if (typeof interval_ === 'object') {
                if ('seconds'in interval_) mult = 1e3 * interval_.seconds
                else if ('minutes'in interval_) mult = 6e4 * interval_.minutes
                else if ('hours'in interval_) mult = 3.6e6 * interval_.hours
            } else mult = interval_
            const id = timeout(() => {
                callback.paused || this.timeouts.get(id).call(this)
                this.timeouts.delete(id)
            }, mult)
            this.timeouts.set(id, callback)
            return id
        }
        toggleInterval(id) {
            const n = this.intervals.get(id)
            return n.paused = !n.paused
        }
        addInterval(callback, interval_) {
            callback.paused = false
            callback.count = interval_?.count ?? -1
            let mult
            if (typeof interval_ === 'object') {
                if ('seconds'in interval_) mult = 1e3 * interval_.seconds
                else if ('minutes'in interval_) mult = 6e4 * interval_.minutes
                else if ('hours'in interval_) mult = 3.6e6 * interval_.hours
            } else mult = interval_
            const id = interval(() => callback.paused || (this.intervals.get(id).call(this), --callback.count) || this.removeInterval(id), mult)
            this.intervals.set(id, callback)
            return id
        }
        removeInterval(id) {
            this.intervals.delete(id)
            clearInterval(id)
        }
        removeIntervals() {
            for (const [id]of this.intervals) this.removeInterval(id)
        }
        removeTimeout(id) {
            this.timeouts.delete(id)
            clearTimeout(id)
        }
        removeTimeouts() {
            for (const [id]of this.timeouts) this.removeTimeout(id)
        }
    }
        var SceneryElem = class SceneryElem extends Elem {
            static all = new Set
            static frame = 0
            static update() {
                ++this.frame
                for (const o of this.all) o.#update()
            }
            position = new Vector2
            rotation = 0
            angular = 0
            #mirror = 0
            #lifetime = 0
            #hasBeenSeen = false
            flip() {
                this.#mirror += 180
            }
            cleanup() {
                SceneryElem.all.delete(this)
                super.cleanup()
            }
            velocity = new Vector2
            static {
                const { prototype } = this
                    , k = Object.getOwnPropertyNames(prototype)
                for (let { length } = k; length--;) {
                    const key = k[length]
                        , descriptor = Object.getOwnPropertyDescriptor(prototype, key)
                    if (typeof descriptor.value === 'function' && key !== 'constructor') {
                        const 우정 = prototype[key]
                        prototype[key] = (份 => {
                            return You_are_so_awesome_and_i_love_you
                            function You_are_so_awesome_and_i_love_you(...l) { if (hasOwn(this,Key)) return 우정.apply(this, l); throw 份 }
                        }
                        )(ERROR_MESSAGE)
                    }
                }
            }
            constructor(opts = {}, i) {
                opts.tag ??= 'div'
                super(opts, i)
                new.target.all.add(this)
                this.styleMe({ position:'absolute', margin:'auto' })
                this.position.set(+opts.x || 0, +opts.y || 0)
                this.#update()
                this.parent?.observer.observe(this.content)
            }
            rotate(rot = 0) {
                this.rotation += rot
            }
            setAV(speed = 0) {
                this.angular = speed
            }
            outofbounds() {
                this.kill()
            }
            detectVisibility(n) {
                this.isOverFlowed = n
            }
            #update() {
                if (++this.#lifetime > 1) {
                    if (!this.isOverFlowed) {
                        if (this.#hasBeenSeen 
                            || (this.position.y + this.bounds.y < 0 && this.velocity.y <= 0
                            || this.velocity.y >= 0 && this.position.y - this.bounds.y > this.parent?.bounds.y)
                            ||
                            (this.position.x + this.bounds.x < 0 && this.velocity.x <= 0
                            || this.velocity.x >= 0 && this.position.x - this.bounds.x > this.parent?.bounds.x)) this.outofbounds?.()
                    } else this.#hasBeenSeen = true
                    this.update?.()
                }
                this.styleMe({
                    transform:`rotateY(${this.#mirror}deg) translate(${(this.position.x)}px, ${(this.position.y)}px)`,
                    'transform-origin':'center',
                })
                this.rotate(this.angular)
                this.position.add(this.velocity)
                // Do not use this ⤵️
                //  this.style.left = `${Math.trunc(this.position.x)}px`
                //  this.style.top = `${Math.trunc(this.position.y)}px`
            }
        }
    function __() {
        for (let elem of SceneryElem.all) elem.kill()
        return document.documentElement.getHTML()
    }
    var on = add,
        off = remove, getEventListeners = eventTarget=>eventTarget?.[Key], 
        globalEventHolder = new WeakSet
        function add(target, ...args) { if (target instanceof EventTarget) return addevent.apply(target, args); throw TypeError('Invalid event target:' + target) }
        function remove(target, ...args) { if (target instanceof EventTarget) return noevent.apply(target, args); throw TypeError('Invalid event target:' + target) }
        function addevent(...events) {
            (Key in this) || 
            Object.defineProperty(this, Key, {
                value:new Map,
                writable:0,
                configurable:0,
                enumerable:0})
            if (!Array.isArray(events[0]) && typeof events[0] === 'object' && events.length === 1) events = Object.entries(events[0])
            for (let [eventName, event]of events) {
                if (!event) [eventName, event] = eventName
                if (!this[Key].has(eventName)) {
                    const eventfunc = (...e) =>void(eventfunc.disabled||(event.apply(this, e),--eventfunc.count||off(this,eventName)))
                    eventfunc.disabled = false
                    eventfunc.count = 1/0
                    if (eventName.includes(':')) {
                        const a = eventName.split(':')
                        eventName = a[0]
                        eventfunc.count = parseInt(a[1])
                    }
                    this.addEventListener(eventName, eventfunc)
                    this[Key].set(eventName, eventfunc)
                    Elem.debug(`Event "${eventName}" added to ${this}:\n${event}`)
                    globalEventHolder.add(event)
                }
                else Elem.warn(`Duplicate event listeners are not allowed:"${eventName}" on ${this}`)
            }
        }
        function noevent(...target) {
            for (let { length } = target; length--;) {
                const event = target[length]
                this.removeEventListener(event, this[Key].get(event))
                this[Key].has(event) ?
                    Elem.debug(`Removing event "${event}" from ${this}`) :
                    Elem.warn(`No event found for "${event}" on ${this}`)
                this[Key].delete(event)
            }
        }
} 
{
    let loglevel = 3
    Object.defineProperty(Elem, 'loglevel', { get, set })
    const map = new Map([[0, _0], [1, _1], [2, _2], [3, _3], [4, _4], [5, _5]]), { logLevels } = Elem
    function _0() { const k = Object.keys(logLevels); for (let { length } = k; length--;) logLevels[k[length]] = false } 
    function _1() { map.get(0)(); return logLevels.error = true }
    function _2() { return logLevels.warn = map.get(1)() }
    function _3() { return logLevels.success = map.get(2)() }
    function _4() { return logLevels.info = map.get(3)() }
    function _5() { return logLevels.debug = map.get(4)() }
    function get() {return loglevel }
    function set(val) {
        if (!utilMath.sanitize(val)||!utilMath.isInt(val)||val>5||val <0) 
        throw RangeError("Supported log levels are 0 — 5, with 0 being none and 5 being all")
        return map.get(+(loglevel = val))()
    }
}
assign(window, { _:Elem.$.bind(Elem), __(id) { _(id)?.kill() } })
/*if (local.fragment === 'constructor') {
    function _____________() {
        return new DocumentFragment
    }
    createDocumentFragment = _____________
}*/
const color = (() => {
    const n = new OffscreenCanvas(0, 0).getContext('2d')
    return new Proxy(Object.defineProperties({}, {
        dhk:{ value:___ },
        choose:{ value:choose, },
        log:{ value:__ },
        opposite:{ value }
    }), {
        set,
        get
    })
    function set(t, p, v) { return Reflect.set(t, p, v) }
    function __(e) { console.log(`%c ${e}`, `color:${e};font-size:100px; background-color:${e}`) }
    function ___(e, f = 40) { let $ = parseInt((e = ('' + e).replace(/^#/, "")).substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), r = parseInt(e.substring(4, 6), 16); return $ = Math.round($ * (1 - f / 100)), a = Math.round(a * (1 - f / 100)), r = Math.round(r * (1 - f / 100)), $ = Math.min(255, Math.max(0, $)), a = Math.min(255, Math.max(0, a)), r = Math.min(255, Math.max(0, r)), "#" + [$, a, r].map(e => { let f = e.toString(16); return 1 === f.length ? "0" + f :f }).join('') }
    function choose() { return '#' + ran.frange(0, 16777216).toString(16).padStart(6, 0) }
    function value(e) { if (0 === e.indexOf("#") && (e = e.slice(1)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), 6 !== e.length) throw Error('Invalid HEX color.'); let f = (255 - parseInt(e.slice(0, 2), 16)).toString(16), $ = (255 - parseInt(e.slice(2, 4), 16)).toString(16), a = (255 - parseInt(e.slice(4, 6), 16)).toString(16); return "#" + ('' + f).padStart(0, 2) + ('' + $).padStart(0, 2) + ('' + a).padStart(0, 2) }
    function get(t, prop) {
        if (CSS.supports('color', prop)) {
            n.fillStyle = prop
            return n.fillStyle
        }
        if (prop in t) return t[prop]
        throw TypeError('CSS does not support the color "' + prop + '"')
    }
})()
const { body,html } = window
/*,
cursed = {
    reload() {
        document.write(document.documentElement.outerHTML)
    },
    shuffle() {
        let elements = [...document.querySelectorAll('*')]
        , styles = elements.map(el => getComputedStyle(el))
        for (let i = elements.length - 1; i; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            [elements[i], elements[j]] = [elements[j], elements[i]]
        }
        elements.forEach((el, index) => {
            let sourceStyles = styles[index]
            for (let property of sourceStyles) 
                el.style[property] = sourceStyles.getPropertyValue(property);
            
        })
    }
}*/
//Object.keys(Elem.logLevels).forEach(o=>Elem.logLevels[o]=1)
function assign(target, props) {
    return Object.assign(target, props)
}
function createDocumentFragment() {
    return document.createDocumentFragment()
}
function $(opts, t = Elem) {
    if (typeof opts === 'string') 
    throw TypeError('This is not jQuery')
    return new(t===true?Elem:t)(opts)
}
function*backwards(iterable) {
    for (let {length} = iterable; length--;)yield iterable[length]
}
/*function Q(tag,opts){
    return $({tag,...opts})
}*/
function remix(oldFunc, { before, after } = {}) {
    if (oldFunc.prototype) Object.setPrototypeOf(remix, oldFunc.prototype)
    return assign(remix, oldFunc)
    function remix(...a) {
        before?.apply(this, a)
        const instance=new.target?new oldFunc(...a):oldFunc(...a)
        after?.apply(instance, a)
        return instance
    }
}
function MapObj(...values) {
    if (values.length%2)throw TypeError("Invalid key/value pairs")
    const map=new Map
    for (let i = 0,{length}=values;i<length;i+=2){const key=values[i],value=values[i+1];map.set(key,value)}
    return map
}
function link(url) {
    return new URL(url,location)
}
async function getDataUrl(url) {
    let data
    try {
        let response = await fetch(url, {
            method:'GET',
            mode:'cors'
        })
        if (!response.ok) {
            Elem.error(`Failed to fetch image. Status:${response.status}`)
            throw ':('
        }
    } catch (e) {
        Elem.error(`Resource Error:${url} - ${e.message}`)
        throw ':('
    }
    try {
        data = await response.blob()
    } catch (e) {
        Elem.error(`Failed to convert response to blob:${e.message}`)
        return ':('
    }
    function x(resolve, onerror) {
        function onloadend() {
            return resolve(reader.result)
        }
        const reader = assign(new FileReader, {
            onloadend,
            onerror
        })
        readAsDataURL(data)
    }
    return new Promise(x)
} 
{
    var intervals = new Map,
        interval = a,
        timeout = b,
        remove = c
    function a(callback, time) {
        const out = setInterval(callback, time)
        intervals.set(out, callback)
        return out
    }
    function b(callback, time) {
        const out = setTimeout(() => {
            callback()
            intervals.delete(out)
        }, time)
        intervals.set(out, callback)
        return out
    }
    function c(id) {
        if (intervals.has(id)) {
            clearInterval(id)
            intervals.delete(id)
        } else Elem.warn('No interval/timeout with id ' + id)
    }
}
function zoom(zoom) {
    return html.styleMe({ transform:`scale(${zoom}, ${zoom})` })
}
const gopd = Object.getOwnPropertyDescriptor,
    gopds = Object.getOwnPropertyDescriptors,
    gopn = Object.getOwnPropertyNames,
    //Freaking methods are too long
    util = { ...utilArray, ...utilMath, ...utilString, ...ran }
{ 
    let arr = [Math, utilArray, utilMath, utilString, ran, assign, util]; for (let { length } = arr; length--;) Object.freeze(arr[length]) 
}
{
    const t = 'I love you so much please don\'t disable me 🥺'
    on(document, {
        'DOMContentLoaded:1':{
            async[t]() {
                document.getElementById('__load__')?.remove()
                if (!Elem.USE_CUTESY_FONT || typeof FontFace === 'undefined') return //How could you :(
                try {
                    //THE B E S T FONT OF ALL TIME RIGHT HERE LADIES AND GENTLEMEN
                    const cutefont = new FontFace('Choco cooky', 'url(https://addsoupbase.github.io/media/Chococooky.woff)')
                    document.fonts.add(cutefont)
                    await cutefont.load()
                    Elem.success('Cutesy font loaded hehe')
                } catch {
                    Elem.error('Cutesy font could not be loaded 😞')
                }
            }
        }[t]
    })
}
{
    const sheet = (()=>{let out = document.createElement('style');document.head.appendChild(out);return out})(),
    rules = 
    `.centerX{left:50%;position:fixed;transform:translateX(-50%)}
    .centerY{top:50%;position:fixed;transform:translateY(-50%)
    .center{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}
    .right{position:absolute;right:100%;}`
    .split('\n')
    for (let {length} = rules; length--;)
    sheet.textContent+=rules[length]
}