'use strict'
// "var" indicates the code is not mine.

/* Gif to webp: 

gif2webp file.gif -o file.webp


 Png to webp

cwebp file.png -o file.webp

*/
const assign = (target, props) => Object.assign(target, props)
assign(assign, {
    nullish(target, props) {
        for (let key of Object.keys(props))
            if (target[key] != null) delete props[key]
        return assign(target, props)
    },
    not(target, props) {
        for (let key of Object.keys(props))
            if (target[key]) delete props[key]
        return assign(target, props)
    },
    and(target, props) {
        for (let key of Object.keys(props))
            if (!target[key]) delete props[key]
        return assign(target, props)
    },
    notin(target, props) {
        for (let key of Object.keys(props))
            if (key in target) delete props[key]
        return assign(target, props)
    },
    in(target, props) {
        for (let key of Object.keys(props))
            if (!(key in target)) delete props[key]
        return assign(target, props)
    },
    invoke(target, methods) {
        let out = []
        for (let key of Object.keys(methods)) out.push(target[key].apply(target, methods[key]||[]))
        return out
    },
    get'??='(){return assign.nullish},
    get'&&='(){return assign.and},
    get'||='(){return assign.not}
})
const ran = {
    choose: (...a) => a[Math.floor(Math.random() * a.length)],
    range: (min, max) => Math.random() * (max - min) + min,
    frange: (min, max) => Math.floor(ran.range(min, max)),
    pseudo: () => performance.now() % 1,
    true: () => crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff,
    shuffle(...item) {
        for (let i = 0, { length } = item; i < length; ++i) {
            let j = Math.floor(Math.random() * (i + 1));
            [item[i], item[j]] = [item[j], item[i]]
        }
        return item
    },
    gen(length = 6) {
        let pool = utilString.alphabet + utilString.numbers + utilString.ALPHABET, poolSize = pool.length, str
        do str = Array.from({ length }, () => pool[Math.floor(Math.random() * poolSize)]).join('')
        while (ran.gen.previouslygenerated.has(str))
        ran.gen.previouslygenerated.add(str)
        return str
    },
    Randomizer: function (n = 6) {
        return new Proxy({}, { get: (t, p) => t[p] ??= ran.gen(n) })
    }
}
const SUPPORTS = {
    attributeStyleMap:0 // 'StylePropertyMap'in globalThis
}
ran.gen.previouslygenerated = new Set
const utilMath = {
    isInt: Number.isInteger,
    sanitize: num => (num == num) && num != null && isFinite(num),
    equality: (...target) => target.every(o => Object.is(o, target[0])),
    arreq(...targets) {
        if (targets.length < 2) throw RangeError('At least 2 arguments required.')
        for (let i = 0, max = Math.max(...targets.map(o => o.length)) || 1; i < max; ++i) {
            if (!Array.isArray(targets[i])) throw TypeError(`arguments[${i}] is not an Array (${typeof arguments[i]})`)
            for (let comparisons of targets) if (!utilMath.equality(targets[0][i], comparisons[i])) return false
        }
        return true
    },
    toRad:deg=>deg*Math.PI/180,
    toDeg:rad=>rad*180/Math.PI,
    diff: (a, b) => Math.abs(a - b),
    clamp(val, min, max) { if (val > max) return max; if (val < min) return min; return val },
    get cycle(){return utilMath.Cycle},
    Cycle: function (...items) {
        return Object.defineProperty(function* (x = 0) {
            for (; ;)yield items[x++ % items.length]
        }(), 'val', {
            get() { return this.next().value },
        })
    }
}
const utilString = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    months: 'January February March April May June July August September October November December'.split(' '),
    days: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
    contains: (string, ...searches) => searches.every(string.match, string),
    addCommas: num => `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    shorten(string, len = 32) {
        let out = (string + '').slice(0, len)
        if (string.length > len) out += '…'
        return out
    },
    clip: (string, len) => string.slice(len, string.length - len),
    reverse: string => [...string].reverse().join(''),
    upper: string => string.at(0).toUpperCase() + string.slice(1),
}

{
  
    let map = new Map([
        ["1", "st"],
        ["2", "nd"],
        ["3", "rd"],
    ]);
    utilString.toOrdinal = o => {
        const num = +o,
            lastTwoDigits = num % 100,
            me = (o + "").at(-1)
        if ((lastTwoDigits >= 11 && lastTwoDigits <= 13) || !map.has(me))
            return o + "th"
        return o + map.get(me)
    }
}
/*async function idb(name) {
    let request = indexedDB.open(name)
    return new Promise((resolve, reject) =>
        assign(request, {
            onsuccess(event) {
                resolve(event.target.result)
            },
            onerror(event) {
                reject(event.target.error)
            }
        })
    )
}*/
utilString.ALPHABET = utilString.alphabet.toUpperCase()
const utilArray = {
    assemble(arrayLike,...sequence) {
        let out = []
        for (let digit of sequence) out.push(arrayLike.at(digit))
        return out
    },
    center: o => o[Math.floor(o.length / 2)],
    insert: (array, item, index) => array.splice(index, 0, item),
    remove: (item, index) => typeof item == 'string' ? item.slice(0, index) + item.slice(index + 1) : item.splice(index, 1),
    swap: (item, a, b) => ([item[a], item[b]] = [item[b], item[a]], item),
    swapInside(item, a, b) {
        let slot = item.indexOf(a),
            slot2 = item.indexOf(b)
        if (slot !== -1 && slot2 !== -1) return item.swap(slot, slot2)
    },
    avg(array, type) {
        if (!array.length) return NaN
        let sorted = array.slice().sort((a, b) => a - b),
            { length } = sorted
        if (type) {
            //let median = sorted[Math.floor(length / 2)],
            let q1 = sorted[Math.floor(length / 4)],
                q3 = sorted[Math.floor(3 * length / 4)],
                IQR = q3 - q1,
                upperFence = q3 + 1.5 * IQR,
                lowerFence = q1 - 1.5 * IQR,
                filtered = sorted.filter(x => x >= lowerFence && x <= upperFence)
            return filtered.reduce((a, b) => a + b) / filtered.length
        } else return sorted.reduce((a, b) => a + b) / length
    }
}
utilMath.average = (...nums) => utilArray.avg(nums)

{let z=(...a)=>utilArray.assemble(utilString.alphabet,...a).join('');utilString.badwords=RegExp([z(13,8,6,6,4,17),z(1,8,19,2,7),z(5,20,2,10),z(18,7,8,19),z(2,14,2,10),z(5,0,6),z(17,4,19,0,17,3),z(3,8,2,10)].join('|'))}
const [local,session] = (()=>{
    let StorageManager=managee=> {
        if (managee instanceof Storage) return new Proxy(managee, {
            get: (target, prop) =>
                prop === '__all__'
                    ? Object.fromEntries(Array.from({length:target.length},(_, i) => [target.key(i), target.getItem(target.key(i))]))
                    : target.getItem(prop),
            set: (target, prop, value) => !(prop !== '__all__' ? target.setItem(prop, value) : 1),
            deleteProperty: (target, prop) => !(prop === '__all__' ? target.clear() : target.removeItem(prop)),
            has: (target, prop) => target.getItem(prop) !== null,
        })
        throw TypeError('Expecting Storage, got ' + managee?.constructor?.name)
    }
    return[StorageManager(localStorage),StorageManager(sessionStorage)]
})()
async function getDataUrl(url) {
    let data
    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
        if (!response.ok) {
            Elem.error(`Failed to fetch image. Status: ${response.status}`)
            throw ':('
        }
    } catch (e) {
        Elem.error(`Resource Error: ${url} - ${e.message}`)
        throw ':('
    }
    try {
        data = await response.blob()
    } catch (e) {
        Elem.error(`Failed to convert response to blob: ${e.message}`)
        return ':('
    }
    return new Promise((resolve, reject) => {
        /*Object.assign(new FileReader(),{
            onloadend(){
                resolve(reader.result)
            },
            onerror:reject,
        }).readAsDataURL(data)*/
        let reader = assign(new FileReader, {
            onloadend: () => resolve(reader.result),
            onerror: reject
        })
        readAsDataURL(data) // Convert blob to data URL
    })
}

const Vector = class v {
    x = 0
    constructor(x = 0) {
        Object.seal(this)
        this.x = x
    }
    [Symbol.toPrimitive](type) {
        return type == 'number' ? this.x : ''+this.x
    }
}
const Vector2 = class v {
    x = 0
    y = 0
    constructor(x = 0, y = 0) {
        if (arguments.length == 1) {
            y = v.y(x)
            x = v.x(x)
        }
        Object.seal(this)
        this.set(x, y)
    }
    static distance = (vector, vector2) => Math.hypot(v.x(vector) - v.x(vector2), v.y(vector) - v.y(vector2))
    static x = vectorLike => vectorLike.x ?? vectorLike[0] ?? Object.values(vectorLike)[0]
    static y = vectorLike => vectorLike.y ?? vectorLike[1] ?? Object.values(vectorLike)[1]
    static angle(first, second) {
        let firstAngle = Math.atan2(v.y(first), v.x(first)),
            secondAngle = Math.atan2(v.y(second), v.x(second)),
            angle = secondAngle - firstAngle
        return Math.abs(angle)
    }
    static average(...vectors) {
        let x = vectors.map(o => v.x(o))
            , y = vectors.map(o => v.y(o))
        return new v(x.average(), y.average())
    }
    static difference(vector, vector2) {
        if (!Array.isArray(vector)) vector = [...vector]
        if (!Array.isArray(vector2)) vector2 = [...vector2]
        let out = [...vector], { length } = out
        for (let i = 0; i < length; ++i) out[i] = Math.abs(vector2[i] - vector[i])
        return new v(...out)
    }
    static combine(...vectors) {
        let out = new v
        for (let v of vectors) out.add(v)
        return out
    }
    static multiply(...vectors) {
        let out = new v(1, 1)
        for (let v of vectors) out.multiply(v)
        return out
    }
    static get up() {
        return new v(0, 1)
    }
    static get random() {
        let out = new v
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
    static max = (vector, vector2) => new v(Math.max(v.x(vector2), v.x(vector)), Math.max(v.y(vector2), v.y(vector)))
    static min = (vector, vector2) => new v(Math.min(v.x(vector2), v.x(vector)), Math.min(v.y(vector2), v.y(vector)))
    static equals = (...vectors) => utilMath.arreq(...vectors.map(o => [v.x(o), v.y(o)]))
    set(...numbers) {
        if (numbers.length === 1) numbers = [...numbers[0]]
        for (let i = 0, { length } = numbers; i < length; ++i) {
            let n = utilMath.clamp(+numbers[i], Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
            if (Object.keys(this)[i] in this) 
                this[Object.keys(this)[i]] = n
        }
    }
    pow(vector) {
        if (!Array.isArray(vector)) vector = [...vector]
        for (let i = 0, { length } = this.value; i < length; ++i) vector[i] = this[i] ** vector[i]
        this.set(vector)
        return this
    }
    add(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        for (let i = 0, { length } = this.value; i < length; ++i) vector[i] = this[i] + vector[i]
        this.set(vector)
        return this
    }
    subtract(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        for (let i = 0, { length } = this.value; i < length; ++i) vector[i] = this[i] - vector[i]
        this.set(vector)
        return this
    }
    multiply(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        for (let i = 0, { length } = this.value; i < length; ++i) vector[i] = this[i] * vector[i]
        this.set(vector)
        return this
    }
    divide(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        for (let i = 0, { length } = this.value; i < length; ++i) vector[i] = this[i] / vector[i]
        this.set(vector)
        return this
    }
    normalize() {
        this.set(this.normalized)
    }
    randomize() {
        this.set(ran.range(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), ran.range(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
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
        return new v(...this.value.map(o => o / this.magnitude || 0))
    }
    get magnitude() {
        return this.value.reduce((a, b) => Math.abs(a + b))
    }
    get sqrtMag() {
        return Math.sqrt(this.magnitude)
    }
    get value() {
        return [this.x, this.y]//Object.values(this)
    }
    toString() {
        return '('+this.value.join(', ')+')'
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
}
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
class StrictArray {
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
                fillStyle: color.grey,
                textAlign: 'center',
                textBaseline: 'middle',
                font: `${cellSize / 10}px monospace`,
            })
            ctx.fillRect(0, 0, length, height)
        function matchColor(value) {
            switch (typeof value) {
                case 'string': return color.red
                case 'bigint': case 'number': return color.darkblue
                case 'symbol': return color.lightgreen
                case 'object': return color.black
                case 'undefined': return color.purple
            }
        }
        for (let y = 0, { height } = this; y < height; ++y) {
            for (let x = 0, { length } = this; x < length; ++x) {
                const value = this.get(x, y)
                ctx.fillStyle = matchColor(value)
                ctx.fillText(
                    typeof value == 'string' ? '"' + value + '"' : value,
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
    const idx = index < 0 ? array.length + index : index
    if (idx >= 0 && idx < array.length) array[idx] = modifier(array[idx])
}

const Color = class z {
    r = 0
    g = 0
    b = 0
    a = 1
    constructor(r = 0, g = 0, b = 0, a = 1) {
        assign(this, { r, g, b, a })
    }
    [Symbol.toPrimitive]() {
        return +(this.toString('hex').replace('#', ''))
    }
    static toHex(r, g, b) {
        return `#${z.th(r)}${z.th(g)}${z.th(b)}`.toUpperCase()
    }
    static th = n => n.toString(16).padStart(2, '0')
    static toHex2(r, g, b, a) {
        r = Math.min(255, Math.max(0, r))
        g = Math.min(255, Math.max(0, g))
        b = Math.min(255, Math.max(0, b))
        a = Math.round(Math.min(1, Math.max(0, a)) * 255)
        return `#${z.th(r)}${z.th(g)}${z.th(b)}${z.th(a)}`
    }
    static toHSL(r, g, b) {
        // Normalize RGB values to the range 0-1
        r /= 255, g /= 255, b /= 255
        const max = Math.max(r, g, b)
            , min = Math.min(r, g, b)
        let h, s, l = (max + min) / 2
        const d = max - min
        s = (d === 0) ? 0 : (l < 0.5) ? d / (max + min) : d / (2 - max - min)
        if (d === 0) h = 0
        else {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break
                case g: h = (b - r) / d + 2; break
                case b: h = (r - g) / d + 4; break
            }
            h /= 6
        }
        // Convert to degrees and percentages
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
        switch (format?.toLowerCase?.()) {
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
class Elem {
    static USE_CUTESY_FONT=true
    static ILLEGAL_TAGNAMES = /^(SCRIPT|NOSCRIPT|STYLE|META|DOCTYPE)$/
    static DEPRECATED_TAGNAMES = /^(TT|ACRONYM|BIG|CENTER|DIR|FONT|FRAME|FRAMESET|MARQUEE|NOBR|NOEMBED|NOFRAMES|PARAM|PLAINTEXT|RB|RTC|STRIKE|TT|XMP)$/
    static getPageAsHTML = () => document.documentElement.getHTML()
    static get allElements() {
        return [].map.call(document.querySelectorAll('*'),o => o.content).filter(o => o instanceof Elem)
    }
    raw() {
        return this.content.getHTML({ serializableShadowRoots: true })
    }
    eval(code) {
        return new Function(`with(this){${code}}`).call(this)
    }
    assign(obj) {
        assign(this, obj)
    }
    set after(e) {
        this.content.after(e.content)
    }
    set before(e) {
        this.content.before(e.content)
    }
    age = Date.now()
    static log() {
        console.log('bleh')
        //Object.keys(this.logLevels).forEach(o => this.logLevels[o] = !this.logLevels[o])
    }
    static registry = new FinalizationRegistry(heldValue =>
        Elem.debug(`Element "${heldValue}" was cleared from memory 📤`)
    )
    observer = {
        observe(child) {
            delete child.content.parent.observer
            child.content.parent.observer = new IntersectionObserver(entries => {
                for (let entry of entries) {
                    if (!entry.isIntersecting) entry.target.content.detectVisibility?.(false)
                    else entry.target.content.detectVisibility?.(true)
                }
            }, {
                root: child.content.parent.content,
                threshold: 0,
            })
            child.content.parent.observer.observe(child)
        }
    }
    static $ = id => {
        let out = document.getElementById(id.replace('#', ''))
        out || Elem.warn(`Element with id "${id.replace('#', '')}" might not exist`)
        return out?.content ?? out ?? null
    }
    static formats = {
        image: /webp|png|jpeg|jpg|gif/,
        video: /mp4|mpeg|webm|avi|mov/,
        audio: /mp3|ogg|wav|aiff|aac|flac/
    }
    static textStyle = (message, options) => {
        let elf = JSON.stringify(options).replaceAll(/\{|\}|\"/g, '').replaceAll(',', ';')
        console.trace(`%c ${message}`, elf)
    }
    styleMe(...prop) {
        if (!Array.isArray(prop[0]) && typeof prop[0] == 'object' && prop.length === 1 && prop[0]) prop = Object.entries(prop[0])
        for (let [propName, propValue] of prop) {
            if (propName.match(/height\_width|width\_height/)) this.styleMe({ height: propValue, width: propValue })
            else if (propName == 'max-height_width') this.styleMe({ 'max-height': propValue, 'max-width': propValue })
            else {
                if (SUPPORTS.attributeStyleMap) try{
                    //this one is slower
                    let n = propValue
                    if (typeof n == 'string') n = CSSStyleValue.parse(propName, n)
                    this.content.attributeStyleMap.set(propName, n)
                } catch {
                    this.content.style.setProperty(propName, propValue)
                }
                else this.content.style.setProperty(propName, propValue)
            }
            // this.content.style[propName] = propValue
            //this.content.style.setProperty(propName, propValue)
            //  CSSStyleValue.parse(propName,propValue)

        }
    }
    static noConsole() {
        console.warn(`No console mode was enabled, which means if you're reading this it was probably not on purpose (for obvious reasons)`)
        addEventListener('keydown', function () {
            let __value__
            if (arguments[0]?.key?.toLowerCase?.() === 'backspace') {
                try {
                    prompt('Return Value:', eval?.('"use strict";' + (__value__ = prompt('Input eval code...'))))
                }
                catch (error) {
                    prompt(error.constructor.name, error.message)
                }
                finally {
                    navigator.clipboard.writeText(__value__)
                }
            }
        })
        delete this.noConsole
    }
    static loaded = new Set
    static failed = new Set
    static RO = new ResizeObserver(entries => {
        for (let { contentBoxSize, target } of entries) {
            // For modern browsers that return an array (contentBoxSize[0])
            let size = Array.isArray(contentBoxSize) ? contentBoxSize[0] : contentBoxSize
            // target.content ??= {}
            if (target.content)
                target.content.bounds = {
                    x: size.inlineSize,  // Width
                    y: size.blockSize    // Height
                }

        }
    }
    )
    static bulk(callback, ...src) {
        return Promise.all(src.map(o=>fetch(o).then(response => {
            if (!response.ok) return Promise.reject(`Request failed with status ${response.status}`);
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) 
              return response.json()
             else if (contentType && contentType.includes('text/html')) 
              return response.text()
            else if (contentType && contentType.includes('application/xml')) 
              return response.text()
             else if (contentType && contentType.includes('application/octet-stream')) 
              return response.blob()
            else 
             return response.text()
    }))).then(()=>callback(...src))
    }
    static preload(src, callback) {
        if (Elem.loaded.has(src)) return src
        if (!src || !src?.replaceAll?.(' ', '')) throw TypeError('No source for Media provided.')
        fetch(src).then((res)=>{
            if (!res.ok) {
                Elem.error(`Resource error: ${res.status}`)
                Elem.failed.add(src)
            }
            else {
                callback?.(src)
                Elem.success(`Resource Pre-loaded: ${src}`)
                Elem.loaded.add(src)
            }
    })
        Elem.info(`Preloading Resource: ${src}`)
        return src
    }
    static youtube = class extends this {
        constructor(opts) {
            opts.tag = 'iframe'
            super(opts)
            assign(this, {
                loading: 'lazy',
                frameborder: 0,
                referrerpolicy: 'strict-origin-when-cross-origin',
                allow: 'fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            })
        }
    }
    static #attrMap = new Map(/*[
        ['id', function(val){
            if (Elem.elements.has(this)0) throw TypeError("Not allowed re-assign element id")
            else { this.content['id'] = val; }
        }]
    ]*/)
    static svgattr = 'viewBox cx cy stroke fill r strokeWidth'.split(' ')
    static {
        for (let a of this.svgattr) this.#attrMap.set(a, function (val) {
            this.content.setAttribute(a, val)
            //requestAnimationFrame(()=>this.innerHTML+='')
        })
    }
    static attributes = new Set(this.svgattr.concat(('style xmlns for max min low high optimum target rel preload multiple disabled href draggable label stroke-width innerText textContent innerHTML type action method required download style autobuffer value loading name checked src maxLength accept placeholder title controls id readonly width height frameborder allow').split(' ')))
    static {
        let k = key => {
            const descriptor = Object.getOwnPropertyDescriptor(this.prototype, key)
            if (typeof descriptor.value == 'function' && key != 'constructor') {
                let 우정 = this.prototype[key]
                this.prototype[key] = ((侗, 俉俊) => {
                    return function(...अ){if(this instanceof 侗)return 우정.apply(this,अ);throw 俉俊}
                })(Elem,TypeError('Illegal invocation'))
            }
        }
        Object.getOwnPropertyNames(this.prototype).forEach(k)
        for (let attribute of this.attributes) {
            Object.defineProperty(this.prototype, attribute, {
                get() {
                    if (!this.content) throw TypeError('Illegal invocation')
                    return this.content[attribute]
                },
                set(val) {
                    if (!this.content) throw TypeError('Illegal invocation')
                    if (Elem.#attrMap.has(attribute))
                        Elem.#attrMap.get(attribute).call(this, val)
                    else this.content[attribute] = val
                }
            })
        }
    }
    static listeners = new Map
    static warn = message => this.logLevels.warn && console.trace('%cWarning %c'+message,"font-family:'Choco cooky',monospace;color:yellow;text-shadow: yellow 0px 0px 2px;","font-family:'Choco cooky',monospace")
    static error = message => this.logLevels.error && console.trace('%cError %c'+message,"font-family:'Choco cooky',monospace;color:red;text-shadow: red 0px 0px 2px;","font-family:'Choco cooky',monospace")
    static info = message => this.logLevels.info && console.trace('%cInfo %c'+message,"font-family:'Choco cooky',monospace;color:teal;text-shadow: teal 0px 0px 2px;","font-family:'Choco cooky',monospace")
    static success = message => this.logLevels.success && console.trace('%cSucceed %c '+message,'color:lightgreen;text-shadow: lightgreen 0px 0px 2px;'+"font-family: 'Choco cooky',monospace;","font-family: 'Choco cooky',monospace;")
    static debug = message => this.logLevels.debug && console.trace('%cDebug %c'+message, "color:orange;text-shadow: orange 0px 0px 2px;font-size: 10;font-family: 'Choco cooky',monospace;","font-size: 10;font-family: 'Choco cooky',monospace;")
    static elements = new WeakSet
    static logLevels = {
        debug: false,
        warn: true,
        error: true,
        info: false,
        success: true,
    }
    static select(self) {
        let out = new Elem({ self })
        if (out.content.children) for (let node of out.content.children) {
            if (node.nodeName.match(Elem.ILLEGAL_TAGNAMES)) continue
            // if ('content'in node && node instanceof Elem) {
            //out.children.push(node)
            // node.content.parent = out
            //   }
            //  else 
            Elem.select(node)
            //    f.parent = out
        }

        return out
    }
    static {
        let out = {'standards mode':'red','document has title':'lightgreen'};
        'application-name og:description color-scheme theme-color description googlebot viewport og:image og:title keywords charset'.split(' ').forEach(o=>out[o]='red')
        let body = window.body = this.select(document.body)
            // body.content.setAttribute('id', 'body')
            //body.id = 'body'
            , head = [...document.head.children]
           for (let o of head) {
                let butes = o.attributes
                if (butes.charset) out.charset = 'lightgreen'
                if (o.getAttribute('name') === 'description' && butes[0]?.nodeValue) out['description']='lightgreen'
                if (o.getAttribute('property') === 'og:description') out['og:description']='lightgreen'
                if (o.getAttribute('name') === 'theme-color'&& o.getAttribute('content')?.replaceAll(' ','')) out['theme-color']='lightgreen'
                if (o.getAttribute('name') === 'application-name'&& o.getAttribute('content')?.replaceAll(' ','')) out['theme-color']='lightgreen'
                if (o.getAttribute('name') === 'googlebot'&& o.getAttribute('content')?.replaceAll(' ','')) out['theme-color']='lightgreen'
                if (o.getAttribute('name') === 'color-scheme'&& o.getAttribute('content')?.replaceAll(' ','')) out['theme-color']='lightgreen'
                if (o.getAttribute('property') === 'og:image') out['og:image'] = 'lightgreen'
                if (o.getAttribute('property') === 'og:url') out['og:url'] = 'lightgreen'
                if (o.getAttribute('name') === 'og:title') out['og:title'] = 'lightgreen'
                if (o.getAttribute('name') === 'viewport' && butes[1]?.nodeValue) out.viewport = 'lightgreen'
            }
        if (document.title?.match?.(/Untitled|Document/) || !document.title?.replaceAll?.(' ', ''))
           out['document has title'] = 'red'
        if (document.compatMode === 'CSS1Compat') out['standards mode']='lightgreen'
   console.debug('Seo check:')
   for (let [key,value] of Object.entries(out)) {
    console.debug('%c'+key,'font-size:10px;color:'+value)
   }
    }
    clone({ deep = true, parent } = {}) { return new this.constructor({ parent, self: this.content.cloneNode(deep) }) }
    timeouts = new Map
    intervals = new Map
    eventNames = Object.defineProperty(new Map, 'trigger', {
        value(search) {
            if (search) {
                if (this.eventNames.has(search)) this.eventNames.get(search)()
                else Elem.warn(`Non-existent event: ${search}`)
            }
            else for (let [, n] of this.eventNames) n.call(this)
        }
    })
    constructor(opts = {}) {
        //Main init
        if (!('tag'in opts) && !('self'in opts) && !('shadow'in opts)) throw TypeError('Missing tag name, shadow, or self in element creation')//return Elem.error('Cannot create element: missing tag')
        if (opts.tag?.toUpperCase?.()?.match?.(Elem.ILLEGAL_TAGNAMES))throw TypeError(`"${opts.tag}" is not allowed as a tag name`)
        if (opts.tag?.toUpperCase?.()?.match?.(Elem.DEPRECATED_TAGNAMES)) console.warn(`"${opts.tag}" is deprecated and should not be used`,"font-family:'Choco cooky',monospace")

            if (opts.self) {
            this.content = opts.self
            if (this.content === document.body) opts.id = 'body'
            else opts.id = (opts.id ?? opts.self.getAttribute('id')) || ran.gen()
        }
        else {
            if (opts.shadow) {
                this.content = opts.parent.content.attachShadow({ mode: 'open', serializable: true })
            }
            else this.content = document.createElement(opts.tag)
            opts.id ??= ran.gen(7)
        }
        this.content.content = this
        for (let attr of Elem.attributes) if (attr in opts) this[attr] = opts[attr]
        if (opts.text) this.innerHTML = opts.text
        if (opts.message) this.innerText = opts.message
        if (this.content.getBoundingClientRect) {
            let f = this.content.getBoundingClientRect()
            this.bounds = { x: /*parseFloat(*/f.width/*)*/, y: /*parseFloat(*/f.height/*)*/ }
        }
        // opts.style?.forEach?.(o => this.content.style[o] = opts.style[o])
        if (opts.class) {
            if (typeof opts.class === 'string') opts.class = opts.class.split(' ')
            for (let $class of opts.class) this.content.classList.add($class)
        }
        if (opts.events)
            this.addevent(opts.events)
        // if (!Array.isArray(opts.events)) opts.events = Object.entries(opts.events)

        if (opts.styles)
            this.styleMe(opts.styles)
        //   if (!Array.isArray(opts.styles)) opts.styles = Object.entries(opts.styles)

        if (opts.parent && typeof opts.parent === 'string') opts.parent = Elem.$(opts.parent)
        // this.append(opts.parent)
        this.current = this.content
        if (arguments[1] === true) {
            Elem.warn(`Migrate to parent instead of using arguments[1]`)
            opts.parent = body
        }
        if (opts.parent) this.parent = opts.parent
        if (opts.children) this.children = opts.children
        // if (Elem.logLevels.debug && !opts.self) {
        /*    let arr = ''
            for (let [key, value] of Object.entries(opts)) {
                if (typeof value == 'object') {
                    value = Object.entries(value)
                    let str = ''
                    for (let [_key, _value] of value) str += `${_key}: ${_value}\n`
                    value = str
                }
                arr += `${key}="${value}" `.replaceAll('\n', '').replaceAll(' ', '')
            }*/
        //       Elem.debug(`New <${opts.tag}> element: ${this.id}`)//`:\n ${arr}`)
        //   }
        this.begin(opts)
    }
    append(p) {
        p.content.append(this.content)
    }
    adopt(child) {
        //Lets get this right once and for all
        this.content.append(child.content)
    }
    set(val, type) {
        switch (type) {
            default: return this.content.setHTMLUnsafe(val)
            case 1: return this.textContent = val
            case 2: return this.innerHTML = val
            case 3: return this.innerText = val
        }
    }
    replaceWith(p) {
        this.content.replaceWith(p.content)
        return p
    }
    becomeChild(p) {
        this.content.append(p.content)
    }
    prepend(p) {
        p.content.prepend(this.content)
    }
    get parent() {
        return this.content.parentElement?.content ?? null
    }
    set parent(val) {
        if (!this.content) throw TypeError('Invalid setter')
        val == null
            ?
            this.content.remove()
            :
            val.adopt(this)
    }
    get childCount() {
        return this.children.length
    }
    get children() {
        return Object.freeze([...this.content.children].filter(o => !(o.tagName.match(Elem.ILLEGAL_TAGNAMES))).map(o => o.content))
    }
    set children(children) {
        this.killChildren()
        for (let o of children) this.adopt(o)
        // let frag = document.createDocumentFragment() or new DocumentFragment
        // frag.append(...children.map(o => o.content)) seems to be slower anyway 🤷‍♀️
        // this.content.append(frag)
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
        return this.parent?.children?.indexOf?.(this) ?? null
    }
    addClass(...className) { return this.add({ class: className }) }
    add(props) {
        if (props.class) {
            if (typeof props.class === 'string') props.class = [props.class]
            for (let $class of props.class)
                /*   if (!Elem.findClass($class)) {
                       Elem.messages.noclass($class)
                   } else if ([...this.content.classList].includes($class)) {
                       Elem.warn(`Class ${$class} already added${this.content.id ? ' to ' + this.content.id : ''}`)
                   }
                   else { Elem.info(`Class ${$class} added${this.content.id ? ' to ' + this.content.id : ''}`) }*/
                this.toggle($class, true)
        }
        return this
    }
    disableEvent(name) { this.eventNames.get(name).disabled = true }
    enableEvent(name) { this.eventNames.get(name).disabled = false }
    toggleEvent(name) { this.eventNames.get(name).disabled = !this.eventNames.get(name).disabled }
    async transition({ timing = { duration: 1000, iterations: 1, easing: 'ease', delay: 0, direction: 'normal', endDelay: 0, fill: 'forwards', }, frames }, callback) {
        /*    if (options.time) {
                time = options.time;
                delete options.time;
            }
            if (options.callback) {
                callback = options.callback;
                delete options.callback;
            }*/
           assign['??='](timing, {
            duration: 1000,
            iterations: 1,
            easing: 'ease',
            direction: 'normal',
            fill: 'forwards'
           })
        // timing.composition
        try {
            // Create KeyframeEffect with the provided options
            const keyframeEffect = new KeyframeEffect(
                this.content, // Element to animate
                frames,      // Keyframes
                timing // Animation options
            )
            // Create an Animation instance
            const animation = new Animation(keyframeEffect)
            // Play the animation and wait for it to finish
            animation.play()
            await animation.finished
            // Ensure the final styles are applied
            // for (let n of Object.keys(frames)) {
            //   if (Array.isArray(frames[n])) frames[n] = frames[n].at(-1);
            // }
            //  this.styleMe(frames);
            animation.commitStyles()
            // Call the callback if provided
            callback?.call?.(this)
        }
        catch (e) {
            if (!e.message.includes(`Target element is not rendered.`)) {
                Elem.error(`Something went wrong when applying a transition to element ${this.id}. The ${e.constructor.name} is shown below:`)
                throw e
            }
        }
    }
    anim(target, callback) {
        let keep = false
        if ('keep class' in target) keep = delete target['keep class']
       // switch (target.class) {
       //     default: 
            this.add(target);
         //    break
            /*    case 'fade out': this.content.animate([
                    {opacity: 1, easing: 'ease-in'},
                    {opacity:0, easing: 'ease-in'},

                ],500); break;
                case 'fade in': this.content.animate([
                    {opacity: 0, easing: 'ease-in'},
                    {opacity: 1, easing: 'ease-in'},
                ],500); break;*/
      //  }
        this.addevent(['animationend', () => {
            this.noevent('animationend'); callback?.call?.(this)
            //switch (target.class) {
            //    default: 
                keep || this.removeClass(target.class); 
                //break
                //    case 'fade out': alert(134);
           // }
        }])
        return this
    }
    removeClass(...className) {
        for (let name of className)
            this.toggle(name, false) //|| this.content.classList.contains(name) || Elem.warn(`Class is not present: ${name}`)
    }
    addevent(...events) {
        if (!Array.isArray(events[0]) && typeof events[0] === 'object' && events.length === 1) events = Object.entries(events[0])
        for (let [eventName, event] of events) {
            if (!event) [eventName,event] = eventName
            Elem.listeners.set(this.id + ':' + eventName, event)
            if (!this.eventNames.has(eventName)) {
                let eventfunc = (...e) => {
                    eventfunc.disabled || (event.apply(this, e), --eventfunc.count || this.noevent(eventName))
                }
                eventfunc.disabled = !1
                eventfunc.count = 1 / 0
                if (eventName.includes(':')) {
                    let a = eventName.split(':')
                    eventName = a[0]
                    eventfunc.count = parseInt(a[1])
                }
                this.content.addEventListener(eventName, eventfunc)
                this.eventNames.set(eventName, eventfunc)
                Elem.debug(`Event "${eventName}" added${this.content.id ? ' to  ' + this.content.id : ''}: \n${event}`)
            }
            else Elem.warn(`Duplicate event listeners are not allowed: ${eventName} ${this.id ? 'on ' + this.id : ''}`)
        }
    }
    hasevent(eventName) { return this.eventNames.has(eventName) }
    noevent(...target) {
        for (let event of target) {
            this.content.removeEventListener(event, this.eventNames.get(event))
            this.eventNames.has(event) ?
                Elem.listeners.delete(this.id + ':' + event)
                : Elem.warn(`No event found for "${event}"${this.content.id ? ' on ' + this.content.id : ''}`)
            Elem.debug(`Removing event "${event}" ${this.content.id ? 'from ' + this.content.id : ''}:\n${this.eventNames.get(event).toString()}`)
            this.eventNames.delete(event)
        }
    }
    kill() {
        this.ondeath?.()
        this.cleanup()
        if (body !== this) {
            this.content.remove()
            Elem.debug(`Element ${this.id} was removed from body`)
        }
    }
    cleanup() {
        assign.invoke(this, {
            noevent: [...this.eventNames.keys()],
            removeIntervals: 0,
            removeTimeouts: 0,
        })
        Elem.elements.delete(this)
        Elem.RO.unobserve(this.content)
        this.parent?.observer?.unobserve?.(this.content)
        this.observer?.disconnect?.()
        this.killChildren()
    }
    begin(o) {
        Elem.RO.observe(this.content)
        Elem.elements.add(this)
        Elem.registry.register(this, this.id)
        o.start?.call?.(this)
    }
    killChildren() {
        for (let o of this.children) while (this.content.contains(o?.content)) o.kill()
        return this
    }
    hide() { (this.toggle('hidden', true), this) }
    show() { (this.toggle('hidden', false), this) }
    toggle($, force) { this.content.classList.toggle($, force) }
    async fadeOut(callback) {
        this.transition({
            frames: { opacity: 0 }, timing: { duration: 300 },
        }, () => {
            callback?.call?.(this)
            this.styleMe({ display: 'none' })
        })
    }
    // this.anim({ class: 'fade out' }, () => { this.styleMe({opacity:0}); callback?.call?.(this) })
    async fadeIn(callback) {
        this.styleMe({ display: '' })
        this.styleMe({ opacity: 0 }) ??
            this.transition({
                frames: { opacity: 1 }, timing: { duration: 300 },
            }, () => {
                callback?.call?.(this)
            })
    }
    //this.anim({ class: 'fade in' }, () => { this.styleMe({opacity:1}); callback?.call?.(this) })
    async blink(callback) { return this.fadeOut(() => this.fadeIn(callback)) }
    addTimeout(callback, interval) {
        callback.paused = false
        let mult
        if (typeof interval == 'object') {
            if ('seconds'in interval) mult = 1_000 * interval.seconds
            else if ('minutes'in interval) mult = 60_000 * interval.minutes
            else if ('hours'in interval) mult = 3_600_000 * interval.hours
        } else mult = interval
        let id = setTimeout(() => {
            callback.paused || this.timeouts.get(id).call(this)
            this.timeouts.delete(id)
        }, mult)
        this.timeouts.set(id, callback)
        return id
    }
    toggleInterval(id) {
        let n = this.intervals.get(id)
        return n.paused = !n.paused
    }
    addInterval(callback, interval) {
        callback.paused = false
        callback.count = interval?.count ?? -1
        let mult
        if (typeof interval == 'object') {
            if ('seconds' in interval) mult = 1_000 * interval.seconds
            else if ('minutes' in interval) mult = 60_000 * interval.minutes
            else if ('hours' in interval) mult = 3_600_000 * interval.hours
        } else mult = interval
        let id = setInterval(() => callback.paused || (this.intervals.get(id).call(this), --callback.count) || this.removeInterval(id), mult)
        this.intervals.set(id, callback)
        return id
    }
    removeInterval(id) {
        this.intervals.delete(id)
        clearInterval(id)
    }
    removeIntervals() {
        for (let [id] of this.intervals) this.removeInterval(id)
    }
    removeTimeout(id) {
        this.timeouts.delete(id)
        clearTimeout(id)
    }
    removeTimeouts() {
        for (let [id] of this.timeouts) this.removeTimeout(id)
    }
    /*static findClass(className) {
      const styleSheets = document.styleSheets;
      for (let i = 0; i < styleSheets.length; ++i) {
          const rules = styleSheets[i].cssRules || styleSheets[i].rules;
          for (let j = 0; j < rules.length; j++) {
              if (rules[j].selectorText === `.${className}`) {
                  return true;
              }
          }
      }
      return false
  }*/
}
window._ = Elem.$.bind(Elem)
window.$ = (opts, t = Elem) => {
    if (typeof opts === 'string') throw TypeError('This is not jQuery')
    return new (t === true ? Elem : t)(opts)
}
class SceneryElem extends Elem {
    static all = new Set
    static frame = 0
    static update() {
        this.frame++
        let func = o => Elem.elements.has(o) ? o.#update() : this.all.delete(o)
        this.all.forEach(func)
    }
    position = new Vector2
    rotation = 0
    angular = 0
    #mirror = 0
    #lifetime = 0
    #hasBeenSeen = false
    flip = () => this.#mirror += 180
    velocity = new Vector2
    static {
        let func = key => {
            const descriptor = Object.getOwnPropertyDescriptor(this.prototype, key)
            if (typeof descriptor.value === 'function' && key !== 'constructor') {
                let 우정 = this.prototype[key]
                this.prototype[key] = ((乓, 份) => {
                    return function (...l) { if (!(this instanceof 乓)) throw 份; return 우정.apply(this, l) }
                })(SceneryElem, TypeError('Illegal invocation'))
            }
        }
        Object.getOwnPropertyNames(this.prototype).forEach(func)
    }
    constructor(opts = {}, i) {
        opts.tag ??= 'div'
        super(opts, i)
        new.target.all.add(this)
        this.styleMe({ position: 'absolute', margin: 'auto' })
        this.position.set(+opts.x || 0, +opts.y || 0)
        this.#update()
        this.parent.observer.observe(this.content)
    }
    rotate = (rot = 0) =>
        this.rotation += rot
    setAV = (speed = 0) =>
        this.angular = speed
    outofbounds() {
        this.kill()
    }
    detectVisibility(n) {
        this.isOverFlowed = n
    }
    #update() {
        this.#lifetime++
        if (this.#lifetime > 1) {
            if (!this.isOverFlowed) {
                if (this.#hasBeenSeen || (this.position.y + this.bounds.y < 0 && this.velocity.y <= 0
                    || this.velocity.y >= 0 && this.position.y - this.bounds.y > this.parent.bounds.y)
                    ||
                    (this.position.x + this.bounds.x < 0 && this.velocity.x <= 0
                        || this.velocity.x >= 0 && this.position.x - this.bounds.x > this.parent.bounds.x)) this.outofbounds?.()
            } else this.#hasBeenSeen = true
            this.update?.()
        }
        this.styleMe({
            'transform': `
                rotateY(${this.#mirror}deg) 
                translate(${(this.position.x)}px, ${(this.position.y)}px)`,
            'transform-origin': 'center',
        })
        this.rotate(this.angular)
        this.position.add(this.velocity)
        // Do not use this ⤵️
        //  this.style.left = `${Math.trunc(this.position.x)}px`
        //  this.style.top = `${Math.trunc(this.position.y)}px`
    }
}
class svg extends Elem {
    constructor(n) {
        assign(n, {
            tag: 'svg',
            xmlns: 'http://www.w3.org/2000/svg'
        })
        super(n)
        this.parent.innerHTML += ''
        //this.content.setAttribute('xmlns','xmlns')
        //Really confusing
    }
}
function remix(oldFunc, { before, after } = {}) {
    let remix = function (...a) {
        before?.apply?.(this, a) // Execute pre-construction logic
        let instance
        if (new.target) instance = new oldFunc(...a) // Call the original constructor
        else instance = oldFunc(...a)
        after?.apply?.(instance, a) // Execute post-construction logic
        return instance // Return the new instance
    }
    if (oldFunc.prototype) remix.prototype = Object.setPrototypeOf(remix, oldFunc.prototype)
    return assign(remix, oldFunc)
}
const color = (()=>{
    let n = new OffscreenCanvas(0,0).getContext('2d')
    return new Proxy(Object.defineProperties({}, {
        dhk: { value(e, f = 40) { let $ = parseInt((e = (''+e).replace(/^#/, "")).substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), r = parseInt(e.substring(4, 6), 16); return $ = Math.round($ * (1 - f / 100)), a = Math.round(a * (1 - f / 100)), r = Math.round(r * (1 - f / 100)), $ = Math.min(255, Math.max(0, $)), a = Math.min(255, Math.max(0, a)), r = Math.min(255, Math.max(0, r)), "#" + [$, a, r].map(e => { let f = e.toString(16); return 1 == f.length ? "0" + f : f }).join('') } },
        choose: { value: () => ran.choose(...Object.values(color)) },
        log: { value: e => console.log(`%c ${e}`, `color: ${e};font-size: 100px; background-color: ${e}`) },
        opposite: { value(e) { if (0 == e.indexOf("#") && (e = e.slice(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), 6 != e.length) throw Error`Invalid HEX color.`; let f = (255 - parseInt(e.slice(0, 2), 16)).toString(16), $ = (255 - parseInt(e.slice(2, 4), 16)).toString(16), a = (255 - parseInt(e.slice(4, 6), 16)).toString(16); return "#" + (''+f).padStart(0,2) + (''+$).padStart(0,2) + (''+a).padStart(0,2) } }
    }),{
        set(t,p,v) {
            return Reflect.set(t,p,v)
        },
        get(t,prop) {
            if (CSS.supports('color',prop)) {
                n.fillStyle=prop
                return n.fillStyle
            }
            else if (prop in t) return Reflect.get(t,prop)
            throw TypeError('Unsupported color: ' + prop)
        }
    })
})()
assign(color, {
    //Extra colors go here
})
const { body } = window
{
    let t = 'I love you so much please don\'t disable me 🥺'
    document.addEventListener('DOMContentLoaded',{
        async[t](){
            document.removeEventListener('DOMContentLoaded',this[t])
            if (!Elem.USE_CUTESY_FONT || typeof FontFace==='undefined') return //How could you :(
           try {
            //THE B E S T FONT OF ALL TIME RIGHT HERE LADIES AND GENTLEMEN
             let n = new FontFace('Choco cooky','url(https://addsoupbase.github.io/media/Chococooky.woff)')
             document.fonts.add(n)
             await n.load()
             Elem.success('Cutesy font loaded hehe')
           } catch {
             Elem.error('Cutesy font could not be loaded 😞')
           }}}[t])
}
   //Object.keys(Elem.logLevels).forEach(o=>Elem.logLevels[o]=1)