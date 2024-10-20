'use strict';
// "var" indicates the code is not mine.

/* Gif to webp: 
 
gif2webp file.gif -o file.webp
 
*/
/* Png to webp
 
cwebp file.png -o file.webp
 
*/
const ran = {
    choose:(...a)=>a[Math.floor(Math.random() * a.length)],
    range:(min, max)=>Math.random() * (max - min) + min,
    frange:(min, max)=>Math.floor(ran.range(min, max)),
    pseudo:_=>`${Date.now()}`.at(-1)/10,
    true:_=>crypto.getRandomValues(new Uint32Array(1))[0]/4_294_967_295,
    shuffle(...item){
        for (let i = item.length - 1;; --i) {
            let j = Math.floor(Math.random() * (i + 1));
            [item[i], item[j]] = [item[j], item[i]]; // Swap elements
        }
        return item;
    },    
    gen(len = 6) {
        let pool=utilString._alphabet+utilString._numbers+utilString._ALPHABET,poolSize=pool.length,str;
        do str=Array.from({ length: len },_=>pool[Math.floor(Math.random()*poolSize)]).join``;
        while (ran.gen.previouslygenerated.has(str))
        ran.gen.previouslygenerated.add(str)
        return str
    },
     Randomizer:function(n=6) {
            return new Proxy({},{get:(t, p)=>t[p]??=ran.gen(n)});
    }
}
ran.gen.previouslygenerated = new Set
const utilMath = {
    isInt:n=>Math.trunc(n)==n,
    sanitize:num=>(num==num)&&num!=null&&isFinite(num),
    equality:(...target)=>target.every(o=>Object.is(o,target[0])),
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
    diff:(a, b)=>Math.abs(a- b),
    clamp(val, min, max){if(val>max)return max;if(val<min)return min;return val},
     Cycle:function(...items){
            return Object.defineProperty(function*(x=0) {
            for(;;)yield items[x++%items.length]
            }(), 'val', {
                get(){return this.next().value},
            });
    }
}
const utilString = {
    _alphabet: 'qwertyuiopasdfghjklzxcvbnm',
    _numbers: '0123456789',
    addCommas:num=>`${num}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),
    shorten(string, len = 32){
        let out = `${string}`.slice(0, len)
        if (out.length >= len) out += '…'
        return out
    },
    reverse:string=>[...string].reverse().join``,
    upper:string=>string[0].toUpperCase()+string.slice(1),
    toOrdinal(o) {
        switch (o.at(-1)) {
            case '1':
                return o + 'st'
            case '2':
                return o + 'nd'
            case '3':
                return o + 'rd'
            default:
                return o + 'th'
        }
    }
}
utilString._ALPHABET = utilString._alphabet.toUpperCase()
const utilArray = {
    center:o=>o[Math.floor(o.length/2)],
    insert:(array,item,index)=>array.splice(index, 0, item),
    loopBackwards(array, func){
        for (let i = array.length; i--;)if(i in array)func(array[i],i,array)
    },
    remove: (item, index) => typeof item == 'string' ? item.slice(0, index) + item.slice(index + 1) : item.splice(index, 1),
    swap: (item, a, b) => ([item[a], item[b]] = [item[b], item[a]], item),
    swapInside(item, a, b) {
        let slot = item.indexOf(a),
            slot2 = item.indexOf(b)
        if (slot !== -1 && slot2 !== -1) return item.swap(slot, slot2)
    },
    avg(array, type) {
        if (!array.length) return NaN // Handle empty array case
        let sorted = array.slice().sort((a, b) => a - b) // Sort the array
        if (type) {
            // Calculate the median
            let median = sorted[Math.floor(sorted.length / 2)],
                // Calculate the first quartile (Q1) and third quartile (Q3)
                q1 = sorted[Math.floor(sorted.length / 4)],
                q3 = sorted[Math.floor(3 * sorted.length / 4)],
                // Calculate the IQR
                IQR = q3 - q1,
                // Calculate the fence
                upperFence = q3 + 1.5 * IQR,
                lowerFence = q1 - 1.5 * IQR,
                // Filter outliers
                filtered = sorted.filter(x => x >= lowerFence && x <= upperFence)
            // Recalculate the average on the filtered array
            return filtered.reduce((a, b) => a + b) / filtered.length
        } else return sorted.reduce((a, b) => a + b) / sorted.length
        // Calculate average on the original array
    }
}
function getNodeSize(node) {
    let t = node.getBoundingClientRect()
    t.center = {
        x: t.left + t.width / 2,
        y: t.top + t.height / 2
    }
    return t
}
async function getDataUrl(url, response, data) {
    try {
        response = await fetch(url, {
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
    return new Promise((resolve, reject, reader) => {
        reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(data) // Convert blob to data URL
    })
}
function padZero(str, len = 2) {
    let zeros = new Array(len).join`0`
    return (zeros + str).slice(-len)
}
function checkVisible(elm) {
    let rect = elm.getBoundingClientRect()
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    let viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth)
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0) && !(rect.right < 0 || rect.left - viewWidth >= 0)
}
function isOverFlowed(elm) {
    let parent = elm.parentElement // Get the parent element
    let rect = elm.getBoundingClientRect()
    let parentRect = parent?.getBoundingClientRect?.() // Get the parent's bounding rectangle
    // Check if the element is within the parent's bounds
    let isVisible =
        rect.bottom > parentRect?.top &&
        rect.top < parentRect?.bottom &&
        rect.right > parentRect?.left &&
        rect.left < parentRect?.right
    return isVisible
}
const Vector2 = class Vector2 {
    x
    y
    constructor(x = 0, y = 0) {
        if (arguments.length == 1 && x instanceof new.target) ({ x, y } = x)
        Object.seal(this)
        this.set(x, y)
    }
    static distance = (vector, vector2) => Math.hypot(Vector2.x(vector) - Vector2.x(vector2), Vector2.y(vector) - Vector2.y(vector2))
    static x = vectorLike => vectorLike.x ?? vectorLike[0] ?? Object.values(vectorLike)[0]
    static y = vectorLike => vectorLike.y ?? vectorLike[1] ?? Object.values(vectorLike)[1]
    static angle(first, second, firstAngle, secondAngle, angle) {
        firstAngle = Math.atan2(Vector2.y(first), Vector2.x(first))
        secondAngle = Math.atan2(Vector2.y(second), Vector2.x(second))
        angle = secondAngle - firstAngle
        return Math.abs(angle)
    }
    static average(...vectors) {
        let x = vectors.map(o => Vector2.x(o))
        let y = vectors.map(o => Vector2.y(o))
        return new Vector2(x.average(), y.average())
    }
    static difference(vector, vector2) {
        if (!Array.isArray(vector)) vector = [...vector]
        if (!Array.isArray(vector2)) vector2 = [...vector2]
        let out = [...vector]
        let length = out.length
        for (let i = 0; i < length; i++) out[i] = Math.abs(vector2[i] - vector[i])
        return new Vector2(...out)
    }
    static combine(...vectors) {
        let out = new Vector2
        for (let v of vectors) out.add(v)
        return out
    }
    static multiply(...vectors) {
        let out = new Vector2(1, 1)
        for (let v of vectors) out.multiply(v)
        return out
    }
    static get up() {
        return new Vector2(0, 1)
    }
    static get random() {
        let out = (new Vector2)
        out.randomize()
        return out
    }
    static get down() {
        return new Vector2(0, -1)
    }
    static get left() {
        return new Vector2(-1, 0)
    }
    static get right() {
        return new Vector2(1, 0)
    }
    static max = (vector, vector2) => new Vector2(Math.max(Vector2.x(vector2), Vector2.x(vector)), Math.max(Vector2.y(vector2), Vector2.y(vector)))
    static min = (vector, vector2) => new Vector2(Math.min(Vector2.x(vector2), Vector2.x(vector)), Math.min(Vector2.y(vector2), Vector2.y(vector)))
    static equals = (...vectors) => utilMath.arreq(...vectors.map(o => [Vector2.x(o), Vector2.y(o)]))
    set(...numbers) {
        if (numbers.length === 1) {
            this.x = Vector2.x(numbers[0])
            this.y = Vector2.y(numbers[0])
            return
        }
        for (let i = 0; i < numbers.length; i++) {
            let n = numbers[i]
            if (n > Number.MAX_SAFE_INTEGER) n = Number.MAX_SAFE_INTEGER
            else if (n < Number.MIN_SAFE_INTEGER) n = Number.MIN_SAFE_INTEGER
            else n = +n
            if (Object.keys(this)[i] in this) this[Object.keys(this)[i]] = n
        }
    }
    pow(vector) {
        if (!Array.isArray(vector)) vector = [...vector]
        let length = this.value.length
        for (let i = 0; i < length; i++) vector[i] = this[i] ** vector[i]
        this.set(vector)
        return this
    }
    add(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) vector[i] = this[i] + vector[i]
        this.set(vector)
        return this
    }
    subtract(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) vector[i] = this[i] - vector[i]
        this.set(vector)
        return this
    }
    multiply(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) vector[i] = this[i] * vector[i]
        this.set(vector)
        return this
    }
    divide(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) vector = [vector, arguments[1]]
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) vector[i] = this[i] / vector[i]
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
    lerp({ to, time = 0.1 }, sum) {
        sum = (this.minus(to)).multiply(time, time)
        this.subtract(sum)
    }
    minus=other=>new Vector2(this).subtract(other)
    get average() {
        return utilArray.avg(/*[...this]*/[this.x, this.y])
    }
    get inverse() {
        return new Vector2(this.x ** -1, this.y ** -1)
    }
    get negated() {
        return new Vector2(-this.x, -this.y)
    }
    get normalized() {
        return new Vector2(...this.value.map(o => o / this.magnitude || 0))
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
        return `(${this.value.join`, `})`
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
/*class Vector3 extends Vector2 {
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
class Elem {
    age = Date.now()
    static log() {
        Object.keys(this.logLevels).forEach(o => 
            this.logLevels[o] = !this.logLevels[o]
        )
    }
    observer = {
        observe(child) {
            delete child.content.parent.observer
            child.content.parent.observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) entry.target.content.detectVisibility?.(false)
                     else entry.target.content.detectVisibility?.(true)
                })
            }, {
                root: child.content.parent.content,
                threshold: 0,
            })
            child.content.parent.observer.observe(child)
        }
    }
    static $=id=>[Elem.elements.has(id.replace('#',''))||Elem.warn(`Element "${id}" might not exist`),Elem.elements.get(id.replace('#',''))][1]
    static formats = {
        image: /webp|png|jpeg|jpg|gif/,
        video: /mp4|mpeg|webm|avi|mov/,
        audio: /mp3|ogg|wav|aiff|aac|flac/
    }
    static textStyle = (message, options) => console.trace(`%c ${message}`, `background: ${options.color};color: ${options.textColor ?? '#000000'};font-style: ${options.font};font-size: ${options.size ?? 15}px;`)
    styleMe(...prop) {
        if (!Array.isArray(prop[0]) && typeof prop[0] == 'object' && arguments.length == 1)prop = Object.entries(prop[0])
        for (let [propName, propValue] of prop) {
            if (propName.match(/height\_width|width\_height/))this.content.style.setProperty('height', propValue)%this.content.style.setProperty('width', propValue)
            else if (propName == 'max-height_width')this.content.style.setProperty('max-height', propValue)%this.content.style.setProperty('max-width', propValue)
            else this.content.style.setProperty(propName, propValue)
        }
    }
    static noConsole(__value__) {
        console.warn(`No console mode was enabled, which means if you're reading this it was probably not on purpose (for obvious reasons)`)
        addEventListener('keydown', function () {
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
    static RO = new ResizeObserver(entries => 
        entries.forEach(entry => {
            const { contentBoxSize, target } = entry,
            // For modern browsers that return an array (contentBoxSize[0])
             size = Array.isArray(contentBoxSize) ? contentBoxSize[0] : contentBoxSize
            target.content ??= {}
            target.content.bounds = {
                x: size.inlineSize,  // Width
                y: size.blockSize    // Height
            }
        })
    )
    static bulk(callback, ...src) {
        let count = 0
        for (let li of src)++count,Elem.preload(li,s=>--count||callback(...src))
    }
    static preload(src, callback) {
        if (Elem.loaded.has(src)) return src
        if (!src||!src?.replaceAll?.(' ',''))throw TypeError('No source for Media provided.')
        let x
        let type = src.split('.').pop()
        if (type.match(Elem.formats.image)) x = new Image()
        else if (type.match(Elem.formats.video)) {
            let video = new Elem({ tag: 'video', preload: 'auto' })
            video.content.onload = () => {
                Elem.success(`Resource loaded: ${src}`)
                callback?.(src)
            }
        }
        else if (type.match(Elem.formats.audio)) {
            x = new Audio()
        }
        x.src = src
        x.onerror = function (err) {
            console.error('Error: ', err)
            Elem.error(`Resource error: ${src}`)
            Elem.failed.add(src)
        }
        x.onload = () => {
            callback?.(src)
            Elem.success(`Resource Pre-loaded: ${src}`)
            Elem.loaded.add(src)
        }
        Elem.info(`Preloading Resource: ${src}`)
        return src
    }
    static youtube = class extends this {
        constructor(opts) {
            opts.tag = 'iframe'
            super(opts)
            this.loading = 'lazy'
            this.frameborder = 0
            this.allow = 'fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            this.referrerpolicy = 'strict-origin-when-cross-origin'
        }
    }
    static attributes = ['for', 'max', 'min', 'low', 'high', 'optimum', 'target', 'rel', 'preload', 'multiple', 'disabled', 'href', 'draggable', 'label', 'cx', 'cy', 'r', 'stroke', 'stroke-width', 'fill', 'innerText', 'textContent', 'innerHTML', 'type', 'action', 'method', 'required', 'download', 'style', 'autobuffer', 'value', 'loading', 'name', 'checked', 'src', 'maxLength', 'accept', 'placeholder', 'title', 'controls', 'id', 'readonly', 'width', 'height', 'frameborder', 'allow']
    static {
        for (let attribute of this.attributes) {
            Object.defineProperty(this.prototype, attribute, {
                get() {
                    if (!(this instanceof Elem)) throw TypeError('Illegal invocation')
                    return this.content[attribute]
                },
                set(val) {
                    if (!(this instanceof Elem)) throw TypeError('Illegal invocation')
                    if (attribute === 'id') {
                        if (Elem.elements.has(this.id)) throw TypeError("Not allowed re-assign element id")
                        else {this.content[attribute] = val; Elem.elements.set(this.id, this)}
                    }
                    else if (attribute === 'style') {
                        Elem.warn(`Use "styles" instead of "style"`)
                        this.content[attribute] = val
                    }
                    else this.content[attribute] = val
                }
            })
        }
    }
    static listeners = new Map
    static warn = message => Elem.logLevels.warn&&Elem.textStyle(`[WARN] ${message}`, { textColor: color.yellow, size: 15 })
    static error = message => Elem.logLevels.error&&Elem.textStyle(`[ERROR] ${message}`, { textColor: color.red, size: 15 })
    static info = message => Elem.logLevels.info&&Elem.textStyle(`[INFO] ${message}`, { textColor: '#FFFFFF', size: 10 })
    static success = message => Elem.logLevels.success&&Elem.textStyle(`[SUCCESS] ${message}`, { textColor: color.lightgreen, size: 15 })
    static debug = message => Elem.logLevels.debug&&Elem.textStyle(`[DEBUG] ${message}`, { textColor: color.orange, size: 10 })
    static elements = new Map
    static logLevels = {
        debug: false,
        warn: false,
        error: false,
        info: false,
        success: false,
    }
    static select(element) {
        let out = new Elem({ self: element })
        if (out.content.children) {
            for (let node of out.content.children) {
                if (node.nodeName.match(/NOSCRIPT|SCRIPT/)) continue
                if ('content' in node && node instanceof Elem) {
                    //out.children.push(node)
                    // node.content.parent = out
                }
                else Elem.select(node)
                    //    f.parent = out
            }
        }
        return out
    }
    static {
        let body = window.body = this.select(document.body)
        body.content.setAttribute('id', 'body')
        let head = [...document.head.children]
        let {charSet, name, ogDesc, ogImage, ogUrl, viewport, ogTitle}=1
        head.forEach(o => {
            let butes = o.attributes
            if (butes.charset) charSet = true
            if (butes.name) name = true
            if (butes[0]?.textContent === 'og:description') ogDesc = true
            if (butes[0]?.textContent === 'og:image') ogImage = true
            if (butes[0]?.textContent === 'og:url') ogUrl = true
            if (butes[0]?.textContent === 'og:title') ogTitle = true
            if (butes[0]?.nodeValue === 'viewport' && butes[1]?.nodeValue) viewport = true
        })
        if (document.title?.match?.(/Untitled|Document/) || !document.title?.replaceAll?.(' ', '')) console.warn('Consider giving this document a title.')
        charSet||console.warn('🔎 Consider adding <meta charset="UTF-8"> into the head of this document.')
        viewport||console.warn('🔎 Consider adding <meta name="viewport" content="width=device-width, initial-scale=1"> into the head of this document.')
        ogImage||console.warn('🔎 Consider adding <meta property="og:image" content="[image url here]"> into the head of this document.')
        ogTitle||console.warn('🔎 Consider adding <meta property="og:title" content="[title here]"> into the head of this document.')
    }
    clone=({deep=true,parent}={})=>new this.constructor({ parent,self:this.content.cloneNode(deep)})
    timeouts = new Map
    intervals = new Map
    eventNames = Object.defineProperty(new Map, 'trigger', {
        value(search){
            if (search) {
                if (this.eventNames.has(search)) this.eventNames.get(search)()
                else Elem.warn(`Non-existent event: ${search}`)
            }
            else for (let n of this.eventNames.values()) n.call(this)
        }
    })
    constructor(opts = {}) {
        if (!opts?.tag && !opts.self) return Elem.error('No tag was provided so i cannot make the new node.')
        if (Elem.logLevels.debug && !opts.self) {
            let arr = ''
            for (let [key, value] of Object.entries(opts)) {
                if (typeof value == 'object') {
                    value = Object.entries(value)
                    let str = ''
                    for (let [_key, _value] of value)str += `${_key}: ${_value}\n`
                    value = str
                }
                arr += `${key}="${value}" `.replaceAll('\n', '').replaceAll(' ', '')
            }
            Elem.debug(`New <${opts.tag}> element:\n ${arr}`)
        }
        if (opts.self) {
            this.content = opts.self
            opts.id = (opts.id ?? opts.self.getAttribute('id')) || ran.gen()
        }
        else {
            this.content = document.createElement(opts.tag)
            opts.id ??= ran.gen(7)
        }
        Elem.RO.observe(this.content)
        this.content.content = this
        for (let attr of Elem.attributes) if (attr in opts) this[attr] = opts[attr]
        if (opts.text) this.innerHTML = opts.text
        if (opts.message) this.innerText = opts.message
        let f = this.content.getBoundingClientRect()
        this.bounds = { x: parseFloat(f.width), y: parseFloat(f.height) }
        opts.style?.forEach?.(o => this.content.style[o] = opts.style[o])
        Elem.elements.set(opts.id, this)
        if (opts.class) {
            for (let $class of opts.class) this.content.classList.add($class)
        }
        if (opts.events) {
            if (!Array.isArray(opts.events))  opts.events = Object.entries(opts.events)
            this.addevent(...opts.events)
        }
        if (opts.styles) {
            if (!Array.isArray(opts.styles)) opts.styles = Object.entries(opts.styles)
            this.styleMe(...opts.styles)
        }
        if (opts.parent) {
            if (typeof opts.parent == 'string') opts.parent = Elem.elements.get(opts.parent)
            // this.append(opts.parent)
        }
        this.current = this.content
        if (arguments[1]) {
            Elem.warn(`Migrate to parent instead of using arguments[1]`)
            opts.parent = body
        }
        this.parent = opts.parent
        if (opts.children) this.children = opts.children
        opts.start?.call?.(this)
    }
    append(p) {
        p.content.append(this.content)
    }
    adopt(child) {
        //Lets get this right once and for all
        this.content.append(child.content)
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
        return this.content.parentElement?.content??null
    }
    set parent(val) {
        val?.adopt?.(this)
    }
    get childCount() {
        return this.children.length
    }
    get children() {
        return Object.freeze([...this.content.children].filter(o=>!(o.tagName.match(/SCRIPT|NOSCRIPT/))).map(o=>o.content))
    }
    set children(children) {
        this.killChildren()
        children.forEach(o => this.adopt(o))
        // let frag = document.createDocumentFragment() // or new DocumentFragment
        // frag.append(...children.map(o => o.content)) seems to be slower anyway 🤷‍♀️
        // this.content.append(frag)
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
    addClass=(...className)=>this.add({ class: className })
    add(props) {
        if (props.class) {
            if (typeof props.class === 'string') props.class = [props.class]
            for (let $class of props.class) {
                /*   if (!Elem.findClass($class)) {
                       Elem.messages.noclass($class)
                   } else if ([...this.content.classList].includes($class)) {
                       Elem.warn(`Class ${$class} already added${this.content.id ? ' to ' + this.content.id : ''}`)
                   }
                   else { Elem.info(`Class ${$class} added${this.content.id ? ' to ' + this.content.id : ''}`) }*/
                this.toggle($class, true)
            }
        }
        return this
    }
    disableEvent=name=>this.eventNames.get(name).disabled=true
    enableEvent=name=>this.eventNames.get(name).disabled=false
    toggleEvent=name=>this.eventNames.get(name).disabled=!this.eventNames.get(name).disabled
    async transition({ timing = { duration: 1000, iterations: 1, easing: 'ease', delay: 0, direction: 'normal', endDelay: 0, fill: 'forwards', }, frames }, callback) {
        /*    if (options.time) {
                time = options.time;
                delete options.time;
            }
            if (options.callback) {
                callback = options.callback;
                delete options.callback;
            }*/
        timing.duration ??= 1000
        timing.iterations ??= 1
        timing.easing ??= 'ease'
        timing.direction ??= 'normal'
        timing.fill ??= 'forwards'
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
            a: {
                if (e.message.includes(`Target element is not rendered.`)) break a;
                Elem.error(`Something went wrong when applying a transition to element ${this.id}. The ${e.constructor.name} is shown below:`)
                throw e
            }
        }
        return 1
    }
    anim(target, callback) {
        let keep = false
        if ('keep class' in target) keep = delete target['keep class']
        switch (target.class) {
            default: this.add(target); break
            /*    case 'fade out': this.content.animate([
                    {opacity: 1, easing: 'ease-in'},
                    {opacity:0, easing: 'ease-in'},
                    
                ],500); break;
                case 'fade in': this.content.animate([
                    {opacity: 0, easing: 'ease-in'},
                    {opacity: 1, easing: 'ease-in'},
                ],500); break;*/
        }
        this.addevent(['animationend', () => {
            this.noevent('animationend'); callback?.call?.(this)
            switch (target.class) {
                default: (!keep) && this.removeClass(target.class); break
                //    case 'fade out': alert(134);
            }
        }])
        return this
    }
    removeClass=(...className)=>className.forEach(name=>this.toggle(name, false)||this.content.classList.contains(name)||Elem.warn(`Class is not present: ${name}`))??this
    addevent(...events) {
        if (!Array.isArray(events[0]) && typeof events[0] == 'object' && arguments.length == 1) events = Object.entries(events[0])
        for (let [eventName, event] of events) {
            Elem.listeners.set(`${this.id}:${eventName}`, event)
            if (!this.eventNames.has(eventName)) {
                let eventfunc=e=>eventfunc.disabled||event.call(this, e)
                eventfunc.disabled = false
                this.content.addEventListener(eventName, eventfunc)
                this.eventNames.set(eventName, eventfunc)
                Elem.info(`Event "${eventName}" added${this.content.id ? ' to  ' + this.content.id : ''}: \n${event.toString().replaceAll(`\n`, '').replaceAll(' ', '')}`)
            }
            else Elem.warn(`Duplicate event listeners are not allowed: ${eventName} ${this.id ? 'on ' + this.id : ''}`)
        }
    }
    noevent(...target) {
        for (let event of target) {
            this.content.removeEventListener(event, this.eventNames.get(event))
            this.eventNames.has(event) ?
            Elem.listeners.delete(`${this.id}:${event}`)
          : Elem.warn(`No event found for "${event}"${this.content.id ? ' on ' + this.content.id : ''}`)
            Elem.info(`Removing event "${event}" ${this.content.id ? 'from ' + this.content.id : ''}:\n${this.eventNames.get(event).toString()}`)
            this.eventNames.delete(event)
        }
    }
    kill() {
        this.noevent(...this.eventNames.keys())
        if (this.id) Elem.info(`Element ${this.id} was removed from body`)
        Elem.debug(`Element removed`)
        this.cleanup()
        this.ondeath?.()
        Elem.elements.delete(this.id)
        if (body !== this) this.content.remove?.()
    }
    cleanup() {
        this.removeIntervals()
        this.removeTimeouts()
        this.parent?.observer?.unobserve?.(this.content)
        this.observer?.disconnect?.()
        this.killChildren()
    }
    killChildren(c) {
        c = this.children
        c.forEach(o => {
            while (this.content.contains(o?.content)) o.kill()
        })
        return this
    }
    hide() {
        this.toggle('hidden', true)
        return this
    }
    show() {
        this.toggle('hidden', false)
        return this
    }
    toggle($, force) {
        this.content.classList.toggle($, force)
    }
    async fadeOut(callback) {
        return this.transition({
            frames: { opacity: 0 }, timing: { duration: 300 },
        }, callback)        // this.anim({ class: 'fade out' }, () => { this.styleMe({opacity:0}); callback?.call?.(this) })
    }
    async fadeIn(callback) {
        this.styleMe({opacity:0})
        return this.transition({
            frames: { opacity: 1 }, timing: { duration: 300 },
        }, callback)
        //this.anim({ class: 'fade in' }, () => { this.styleMe({opacity:1}); callback?.call?.(this) })
    }
    async blink(callback) {
        return this.fadeOut(() => this.fadeIn(callback))
    }
    addTimeout(callback, interval) {
        callback.paused = false
        let mult
        if (typeof interval == 'object') {
            if ('seconds' in interval) mult = 1_000 * interval.seconds
            else if ('minutes' in interval) mult = 60_000 * interval.minutes
            else if ('hours' in interval) mult = 3_600_000 * interval.hours
        } else mult = interval
        let id = setInterval(() => {
            callback.paused || this.timeouts.get(id).call(this)
            this.timeouts.delete(id)
        }, mult)
        this.timeouts.set(id, callback)
        return id
    }
    toggleInterval(id) {
        let n = this.intervals.get(id)
        n.paused = !n.paused
    }
    addInterval(callback, interval) {
        callback.paused = false
        callback.count = interval.count ?? -1
        let mult
        if (typeof interval == 'object') {
            if ('seconds' in interval) mult = 1_000 * interval.seconds
            else if ('minutes' in interval) mult = 60_000 * interval.minutes
            else if ('hours' in interval) mult = 3_600_000 * interval.hours
        } else mult = interval
        let id = setInterval(() => {
            callback.paused || (this.intervals.get(id).call(this), --callback.count)
            if (!callback.count) this.removeInterval(id)
            //     this.intervals.delete(id)
        }, mult)
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
      // Loop through each stylesheet
      for (let i = 0; i < styleSheets.length; i++) {
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
class SceneryElem extends Elem {
    static all = new Set
    static frame = 0
    static update() {
        this.frame++
        this.all.forEach(o=>Elem.elements.has(o.id)?o.#update():this.all.delete(o))
    }
    position = new Vector2
    rotation = 0
    angular = 0
    #mirror = 0
    #lifetime = 0
    #hasBeenSeen = false
    flip() { this.#mirror += 180 }
    velocity = new Vector2
    constructor(opts = {}, i) {
        opts.tag ??= 'div'
        super(opts, i)
        new.target.all.add(this)
        this.styleMe({ position: 'absolute', margin: 'auto' })
        this.position.set(+opts.x||0,+opts.y||0)
        this.#update()
        this.parent.observer.observe(this.content)
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
const color = Object.defineProperties((j =>
    "aliceblue&#f0f8ff&antiquewhite&#faebd7&aqua&#00ffff&aquamarine&#7fffd4&azure&#f0ffff&beige&#f5f5dc&bisque&#ffe4c4&black&#000000&blanchedalmond&#ffebcd&blue&#0000ff&blueviolet&#8a2be2&brown&#a52a2a&burlywood&#deb887&cadetblue&#5f9ea0&chartreuse&#7fff00&chocolate&#d2691e&coral&#ff7f50&cornflowerblue&#6495ed&cornsilk&#fff8dc&crimson&#dc143c&cyan&#00ffff&darkblue&#00008b&darkcyan&#008b8b&darkgoldenrod&#b8860b&darkgray&#a9a9a9&darkgreen&#006400&darkkhaki&#bdb76b&darkmaran.genta&#8b008b&darkolivegreen&#556b2f&darkorange&#ff8c00&darkorchid&#9932cc&darkred&#8b0000&darksalmon&#e9967a&darkseagreen&#8fbc8f&darkslateblue&#483d8b&darkslategray&#2f4f4f&darkturquoise&#00ced1&darkviolet&#9400d3&deeppink&#ff1493&deepskyblue&#00bfff&dimgray&#696969&dodgerblue&#1e90ff&firebrick&#b22222&floralwhite&#fffaf0&forestgreen&#228b22&fuchsia&#ff00ff&gainsboro&#dcdcdc&ghostwhite&#f8f8ff&gold&#ffd700&goldenrod&#daa520&gray&#808080&grey&#808080&green&#008000&greenyellow&#adff2f&honeydew&#f0fff0&hotpink&#ff69b4&indianred&#cd5c5c&indigo&#4b0082&ivory&#fffff0&khaki&#f0e68c&lavender&#e6e6fa&lavenderblush&#fff0f5&lawngreen&#7cfc00&lemonchiffon&#fffacd&lightblue&#add8e6&lightcoral&#f08080&lightcyan&#e0ffff&lightgoldenrodyellow&#fafad2&lightgray&#d3d3d3&lightgreen&#90ee90&lightpink&#ffb6c1&lightsalmon&#ffa07a&lightseagreen&#20b2aa&lightskyblue&#87cefa&lightslategray&#778899&lightsteelblue&#b0c4de&lightyellow&#ffffe0&lime&#00ff00&limegreen&#32cd32&linen&#faf0e6&maran.genta&#ff00ff&maroon&#800000&mediumaquamarine&#66cdaa&mediumblue&#0000cd&mediumorchid&#ba55d3&mediumpurple&#9370db&mediumseagreen&#3cb371&mediumslateblue&#7b68ee&mediumspringgreen&#00fa9a&mediumturquoise&#48d1cc&mediumvioletred&#c71585&midnightblue&#191970&mintcream&#f5fffa&mistyrose&#ffe4e1&moccasin&#ffe4b5&navajowhite&#ffdead&navy&#000080&oldlace&#fdf5e6&olive&#808000&olivedrab&#6b8e23&orange&#ffa500&orangered&#ff4500&orchid&#da70d6&palegoldenrod&#eee8aa&palegreen&#98fb98&paleturquoise&#afeeee&palevioletred&#db7093&papayawhip&#ffefd5&peachpuff&#ffdab9&peru&#cd853f&pink&#ffc0cb&plum&#dda0dd&powderblue&#b0e0e6&purple&#800080&rebeccapurple&#663399&red&#ff0000&rosybrown&#bc8f8f&royalblue&#4169e1&saddlebrown&#8b4513&salmon&#fa8072&sandybrown&#f4a460&seagreen&#2e8b57&seashell&#fff5ee&sienna&#a0522d&silver&#c0c0c0&skyblue&#87ceeb&slateblue&#6a5acd&slategray&#708090&snow&#fffafa&springgreen&#00ff7f&steelblue&#4682b4&tan&#d2b48c&teal&#008080&thistle&#d8bfd8&tomato&#ff6347&turquoise&#40e0d0&violet&#ee82ee&wheat&#f5deb3&white&#ffffff&whitesmoke&#f5f5f5&yellow&#ffff00&yellowgreen&#9acd32"
        .split`&`.forEach((a,i)=>j+=i%2?`"${a}"${i==283?'':','}`:`"${a}":`)??JSON.parse(`{${j}}`))``, {
    dhk:{value(e,f=40){let $=parseInt((e=e.replace(/^#/,"")).substring(0,2),16),a=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return $=Math.round($*(1-f/100)),a=Math.round(a*(1-f/100)),r=Math.round(r*(1-f/100)),$=Math.min(255,Math.max(0,$)),a=Math.min(255,Math.max(0,a)),r=Math.min(255,Math.max(0,r)),"#"+[$,a,r].map(e=>{let f=e.toString(16);return 1==f.length?"0"+f:f}).join``}},
    choose:{value:_=>ran.choose(...Object.values(color)) },
    log:{value:e=>console.log(`%c ${e}`, `color: ${e};font-size: 100px; background-color: ${e}`) },
    opposite:{value(e){if(0==e.indexOf("#")&&(e=e.slice(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!=e.length)throw Error`Invalid HEX color.`;let f=(255-parseInt(e.slice(0,2),16)).toString(16),$=(255-parseInt(e.slice(2,4),16)).toString(16),a=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+padZero(f)+padZero($)+padZero(a)}}
})
Object.assign(color, {
    //Extra colors go here
})
const body = window.body
;(n=>"escape&unescape&event&external&External&orientation&status&back&blur&captureEvents&clientInformation&clearImmediate&forward&releaseEvents&requestFileSystem&setImmediate&setResizable&showModalDialog&webkitConvertPointFromNodeToPage&webkitConvertPointFromPageToNode&onorientationchange&onunload&vrdisplayactivate&vrdisplayconnect&vrdisplaydeactivate&vrdisplaydisconnect&vrdisplaypresentchange".split('&').forEach(o=>delete n[o]))(self)
;(n=>"javaEnabled&activeVRDisplays&appCodeName&appName&appVersion&doNotTrack&mimeTypes&oscpu&platform&plugins&product&productSub&vendor&vendorSub&getUserMedia&getVRDisplays&taintEnabled".split`&`.map(o=>delete n[o]))(Navigator.prototype)
; (n=>['__$Getter__','__$Setter__'].forEach(o=>delete n[o.replace('$', 'define')]&delete n[o.replace('$','lookup')]))(Object.prototype)